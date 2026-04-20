from django import forms
from todolist.models import Task

class taskform(forms.ModelForm):
    class Meta:
        model=Task
        fields=['task','is_completed']