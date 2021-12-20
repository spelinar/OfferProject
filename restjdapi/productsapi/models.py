from django.db import models

class Category(models.Model):
    CategoryId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    ordering = models.CharField(max_length=100)

class Offer(models.Model):
    OffID = models.AutoField(primary_key=True)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100, null=True)
    description = models.CharField(max_length=50, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True)
    create_at = models.TimeField(auto_now=True, null=True)
