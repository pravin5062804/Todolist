from django.shortcuts import render
from django.shortcuts import redirect
from todolist.models import Task


# Create your views here.
def home(request):
    context={
        'page':"home page",
        'tasks':'',
    }
    return render(request,"home.html",context)

def todolist(request):
    all_task=Task.objects.all()
    context={
        'page':"todolist  page",
        'tasks':all_task,
    }
    return render(request,"todolist.html",context)

def contact(request):
    context={
        'page':"contact us page",
        'tasks':'',
    }
    return render(request,"contact.html",context)

def about(request):
    context={
        'page':"about us page",
        'tasks':'',
    }
    return render(request,"about.html",context)


def root(request):
    return redirect('home')