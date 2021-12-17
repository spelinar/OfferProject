from rest_framework import viewsets
from . import models
from . import serializers

class CategoryViewset(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

class OfferViewset(viewsets.ModelViewSet):
    queryset = models.Offer.objects.all()
    serializer_class = serializers.OfferSerializer