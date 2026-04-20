from django.db import models

class Task(models.Model):
    task=models.CharField(max_length=100)
    is_completed=models.BooleanField(default=False)
    #iske wajah se admin panel pe read kar sakte ho obejct by using magic method str
    def __str__(self):
        return self.task
