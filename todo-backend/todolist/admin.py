from django.contrib import admin
from .models import User, ToDo
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'is_staff', 'date_joined')
    search_fields = ('email',)
    ordering = ('email',)

@admin.register(ToDo)
class ToDoAdmin(admin.ModelAdmin):
    list_display = ('task_content', 'user', 'created_at', 'updated_at', 'due_date')
    search_fields = ('task_content', 'user__email')
    ordering = ('-created_at',)


@login_required
def my_protected_view(request):
    template_name = 'my_template.html'
