from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import User, ToDo
from .serializers import UserSerializer, ToDoSerializer
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import ToDo
from .utils import convert_audio_to_text, generate_todo_list
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all().order_by('due_date')
    serializer_class = ToDoSerializer
    

class AudioFileUploadView(APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        try:
            file_obj = request.data['file']
            text = convert_audio_to_text(file_obj)
            todo_contents = generate_todo_list(text)
            
            # 3. 複数のタスクの保存
            for todo_content in todo_contents:
                todo = ToDo(task_content=todo_content.strip())  # strip()で余白を取り除く
                todo.save()
            
            return Response({'status': 'success', 'data': todo_contents}, status=201)
        
        # 4. エラーハンドリング
        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=400)
        
        
        
        
class RegisterView(APIView):

    def post(self, request):
        user = User.objects.create_user(
            username=request.data['email'],
            email=request.data['email'],
            password=request.data['password']
        )
        user.save()
        
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        

#@csrf_exempt
class CustomLoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        username = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(request, username=username, password=password)
        
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})
        else:
            return Response({"error": "Wrong Credentials"}, status=status.HTTP_400_BAD_REQUEST)
