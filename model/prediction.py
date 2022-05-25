import pickle
from torchvision import transforms
from PIL import Image
import torch

def prediction(image):
    
    model = pickle.load(open("model\\badgeModel.pkl", 'rb'))

    badgeClasses = {
    "Arsenal": 0,
    "Aston Villa": 1,
    "Brentford": 2,
    "Brighton & Hove Albion": 3,
    "Burnley": 4,
    "Chelsea": 5,
    "Crystal Palace": 6,
    "Everton": 7,
    "Leeds": 8,
    "Leicester": 9,
    "Liverpool": 10,
    "Manchester City": 11,
    "Manchester United": 12,
    "Newcastle": 13,
    "Norwich": 14,
    "Southampton": 15,
    "Tottenham": 16,
    "Watford": 17,
    "West Ham": 18,
    "Wolverhampton Wanderers": 19
    }

    im = Image.open(image)

    img = im.convert("RGBA").convert("RGB")


    transform = transforms.Compose([
                    transforms.Resize([256,256]),
                    transforms.RandomRotation(20, fill=256),
                    transforms.ToTensor(),
                    transforms.RandomAffine(degrees=0, translate=(0.025, 0.025), fill=256),
                    transforms.Normalize([0.5], [0.5])
                ])

    image = transform(img)

    image = image.unsqueeze(0)

    p = model(image)

    c = int(torch.argmax(p))

    club = list(badgeClasses.keys())[list(badgeClasses.values()).index(c)]

    return club