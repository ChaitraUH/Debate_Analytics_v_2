
const candidates = [
  {
    "id" : "1",
    "name" : "Amy Klobuchar",
    "shortname": "A. Klobuchar",
    "imagepath" : './images/AmyKlobuchar.png',
    "image" : require('./images/AmyKlobuchar.png')
  },
  {
    "id" : "2",
    "name" : "Andrew Yang",
    "shortname": "A. Yang",
    "imagepath" : './images/AndrewYang.png',
    "image" : require('./images/AndrewYang.png')
  },
  {
    "id" : "3",
    "name" : "Bernie Sanders",
    "shortname": "B. Sanders",
    "imagepath" : './images/BernieSanders.png',
    "image" : require('./images/BernieSanders.png')
  },
  {
    "id" : "4",
    "name" : "Beto Orourke",
    "shortname": "B. Orourke",
    "imagepath" : './images/BetoOrourke.png',
    "image" : require('./images/BetoOrourke.png')
  },
  {
    "id" : "5",
    "name" : "Bill DeBlasio",
    "shortname": "B. DeBlasio",
    "imagepath" : './images/BillDeBlasio.png',
    "image" : require('./images/BillDeBlasio.png')
  },
  {
    "id" : "6",
    "name" : "Bill Weld",
    "shortname": "B. Weld",
    "imagepath" : './images/BillWeld.png',
    "image" : require('./images/BillWeld.png')
  },
  {
    "id" : "7",
    "name" : "Cory Booker",
    "shortname": "C. Booker",
    "imagepath" : './images/CoryBooker.png',
    "image" : require('./images/CoryBooker.png')
  },
  {
    "id" : "8",
    "name" : "Deval Patrick",
    "shortname": "D. Patrick",
    "imagepath" : './images/DevalPatrick.png',
    "image" : require('./images/DevalPatrick.png')
  },
  {
    "id" : "9",
    "name" : "Donald Trump",
    "shortname": "D. Trump",
    "imagepath" : './images/DonaldTrump.png',
    "image" : require('./images/DonaldTrump.png')
  },
  {
    "id" : "10",
    "name" : "Elizabeth Warren",
    "shortname": "E. Warren",
    "imagepath" : './images/ElizabethWarren.png',
    "image" : require('./images/ElizabethWarren.png')
  },
  {
    "id" : "11",
    "name" : "Eric Swalwell",
    "shortname": "E. Swalwell",
    "imagepath" : './images/EricSwalwell.png',
    "image" : require('./images/EricSwalwell.png')
  },
  {
    "id" : "12",
    "name" : "Jay Inslee",
    "shortname": "J. Inslee",
    "imagepath" : './images/JayInslee.png',
    "image" : require('./images/JayInslee.png')
  },
  {
    "id" : "13",
    "name" : "Joe Biden",
    "shortname": "J. Biden",
    "imagepath" : './images/JoeBiden.png',
    "image" : require('./images/JoeBiden.png')
  },
  {
    "id" : "14",
    "name" : "Joe Sestak",
    "shortname": "J. Sestak",
    "imagepath" : './images/JoeSestak.png',
    "image" : require('./images/JoeSestak.png')
  },
  {
    "id" : "15",
    "name" : "Joe Walsh",
    "shortname": "J. Walsh",
    "imagepath" : './images/JoeWalsh.png',
    "image" : require('./images/JoeWalsh.png')
  },
  {
    "id" : "16",
    "name" : "John Delaney",
    "shortname": "J. Delaney",
    "imagepath" : './images/JohnDelaney.png',
    "image" : require('./images/JohnDelaney.png')
  },
  {
    "id" : "17",
    "name" : "John Hickenlooper",
    "shortname": "J. Hickenlooper",
    "imagepath" : './images/JohnHickenlooper.png',
    "image" : require('./images/JohnHickenlooper.png')
  },
  {
    "id" : "18",
    "name" : "Julian Castro",
    "shortname": "J. Castro",
    "imagepath" : './images/JulianCastro.png',
    "image" : require('./images/JulianCastro.png')
  },
  {
    "id" : "19",
    "name" : "Kamala Harris",
    "shortname": "K. Harris",
    "imagepath" : './images/KamalaHarris.png',
    "image" : require('./images/KamalaHarris.png')
  },
  {
    "id" : "20",
    "name" : "Kristen Gillibrand",
    "shortname": "K. Gillibrand",
    "imagepath" : './images/KirstenGillibrand.png',
    "image" : require('./images/KirstenGillibrand.png')
  },
  {
    "id" : "21",
    "name" : "Mark Sanford",
    "shortname": "M. Sanford",
    "imagepath" : './images/MarkSanford.png',
    "image" : require('./images/MarkSanford.png')
  },
  {
    "id" : "22",
    "name" : "Merianne Williomson",
    "shortname": "M. Williomson",
    "imagepath" : './images/MerianneWilliomson.png',
    "image" : require('./images/MerianneWilliomson.png')
  },
  {
    "id" : "23",
    "name" : "Mike Bloomberg",
    "shortname": "M. Bloomberg",
    "imagepath" : './images/MikeBloomberg.png',
    "image" : require('./images/MikeBloomberg.png')
  },
  {
    "id" : "24",
    "name" : "Pete Buttigieg",
    "shortname": "P. Buttigieg",
    "imagepath" : './images/PeteButtigieg.png',
    "image" : require('./images/PeteButtigieg.png')
  },
  {
    "id" : "25",
    "name" : "Rechard Ojeda",
    "shortname": "R. Ojeda",
    "imagepath" : './images/RechardOjeda.png',
    "image" : require('./images/RechardOjeda.png')
  },
  {
    "id" : "26",
    "name" : "Seth Moulton",
    "shortname": "S. Moulton",
    "imagepath" : './images/SethMoulton.png',
    "image" : require('./images/SethMoulton.png')
  },
  {
    "id" : "27",
    "name" : "Steve Bullock",
    "shortname": "S. Bullock",
    "imagepath" : './images/SteveBullock.png',
    "image" : require('./images/SteveBullock.png')
  },
  {
    "id" : "28",
    "name" : "Tim Ryan",
    "shortname": "T. Ryan",
    "imagepath" : './images/TimRyan.png',
    "image" : require('./images/TimRyan.png')
  },
  {
    "id" : "29",
    "name" : "Tom Steyer",
    "shortname": "T. Steyer",
    "imagepath" : './images/TomSteyer.png',
    "image" : require('./images/TomSteyer.png')
  },
  {
    "id" : "30",
    "name" : "Tulsi Gabbard",
    "shortname": "T. Gabbard",
    "imagepath" : './images/TulsiGabbard.png',
    "image" : require('./images/TulsiGabbard.png')
  },
  {
    "id" : "31",
    "name" : "Wayne Messam",
    "shortname": "W. Messam",
    "imagepath" : './images/WayneMessam.png',
    "image" : require('./images/WayneMessam.png')
  }
]

export default candidates