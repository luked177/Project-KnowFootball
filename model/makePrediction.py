import warnings
warnings.filterwarnings("ignore")

from prediction import *

image = "model\\testImages\\watford.png"

p = prediction(image)

print(p)