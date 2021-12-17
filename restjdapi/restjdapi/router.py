from productsapi.viewset import CategoryViewset
from productsapi.viewset import OfferViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('category',CategoryViewset)
router.register('offer', OfferViewset)