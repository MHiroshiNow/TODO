# Generated by Django 4.2.5 on 2023-09-09 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("todolist", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="todo",
            name="label",
            field=models.CharField(
                blank=True, max_length=100, null=True, verbose_name="ラベル"
            ),
        ),
        migrations.AlterField(
            model_name="todo",
            name="due_date",
            field=models.DateTimeField(verbose_name="期限"),
        ),
        migrations.AlterField(
            model_name="todo",
            name="task_content",
            field=models.TextField(verbose_name="タスク内容"),
        ),
    ]
