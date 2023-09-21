from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todolist.views import UserViewSet, ToDoViewSet,AudioFileUploadView
from django.contrib import admin
from django.contrib.auth import views as auth_views
from todolist.views import RegisterView,CustomLoginView



router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'todo', ToDoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/' ,admin.site.urls),
    path('upload/', AudioFileUploadView.as_view(), name='file-upload'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', CustomLoginView.as_view(), name='login-api'),
]
