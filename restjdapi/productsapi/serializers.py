from rest_framework import serializers
from django.db.models import fields
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model =Category
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model =Offer
        fields = '__all__'