from rest_framework import serializers
from .models import User, ToDo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'is_active', 'is_staff', 'date_joined')

class ToDoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ('id', 'user', 'task_content', 'created_at', 'updated_at', 'due_date')
