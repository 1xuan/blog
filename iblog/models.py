from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(primary_key=True, max_length=20)

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(primary_key=True, max_length=70)
    body = models.TextField(null=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    create_time = models.DateTimeField(null=False)
    modify_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title