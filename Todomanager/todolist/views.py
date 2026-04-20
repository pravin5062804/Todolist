from django.shortcuts import render
from django.shortcuts import redirect
from todolist.models import Task
from todolist.forms import taskform


# Create your views here.
def home(request):
    context={
        'page':"home page",
        'tasks':'',
    }
    return render(request,"home.html",context)

def todolist(request):
    if request.method=='POST':
        form_data=taskform(request.POST or None)
        if form_data.is_valid():
            form_data.save()
            return redirect("todolist")
                
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