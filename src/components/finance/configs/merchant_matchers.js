// rule to merchant.
export default
[
    {
      "operation":"regex",
      "expression":"specialtys cafe.*",
      "merchant":"Specialty's Café & Bakery"
    },
    {
      "operation":"regex",
      "expression":"coupa cafe (?<merchant_location>.*)",
      "merchant":"coupa cafe"
    },
    {
      "operation":"regex",
      "expression":"^instacart .*?",
      "merchant":"Instacart"
    },
    {
      "operation":"regex",
      "expression":".*?\/instacart",
      "merchant":"Instacart"
    },
    {
      "operation":"exact",
      "expression":"instacart",
      "merchant":"Instacart"
    },
    {
      "operation":"regex",
      "expression":"^walgreens #(?<merchant_location>\\d*)",
      "merchant":"walgreens"
    },
    {
      "operation":"regex",
      "expression":"^trader joe's #(?<merchant_location>\\d*) qps",
      "merchant":"trader joe's"
    },
    {
      "operation":"regex",
      "expression":"safeway #(?<merchant_location>\\d*)",
      "merchant":"safeway"
    },
    {
      "operation":"exact",
      "expression":"philz coffee",
      "merchant":"philz coffee"
    },
    {
      "operation":"exact",
      "expression":"anima pro",
      "merchant":"anima pro"
    },
    {
      "operation":"regex",
      "expression":"target \\d+",
      "merchant":"target"
    },
    {
      "operation":"exact",
      "expression":"cognition cyclery",
      "merchant":"cognition cyclery"
    },
    {
      "operation":"exact",
      "expression":"bevri",
      "merchant":"bevri"
    },
    {
      "operation":"regex",
      "expression":".*?ikea\\.com (?<order_number>\\d*)",
      "merchant":"ikea"
    },
    {
      "operation":"regex",
      "expression":"ikea (?<merchant_location>.*)",
      "merchant":"ikea"
    },
    {
      "operation":"regex",
      "expression":"pamf .*?",
      "merchant":"Palo Alto Medical Foundation"
    },
    {
      "operation":"regex",
      "expression":"prime video\\*(?<order_number>.*)",
      "merchant":"prime video"
    },
    {
      "operation":"regex",
      "expression":"amzn digital\\*(?<order_number>.*)",
      "merchant":"prime video"
    },
    {
      "operation":"regex",
      "expression":"amazon prime\\*(?<order_number>.*)",
      "merchant":"amazon prime"
    },
    {
      "operation":"exact",
      "expression":"amazon prime",
      "merchant":"amazon prime"
    },
    {
      "operation":"regex",
      "expression":"kindle unltd\\*(?<order_number>.*?)",
      "merchant":"kindle unlimited"
    },
    {
      "operation":"regex",
      "expression":"kindle svcs\\*(?<order_number>.*?)",
      "merchant":"amazon kindle"
    },
    {
      "operation":"regex",
      "expression":"amzn mktp us\\*(?<order_number>.*)",
      "merchant":"amazon"
    },
    {
      "operation":"exact",
      "expression":"amzn mktp us",
      "merchant":"amazon"
    },
    {
      "operation":"exact",
      "expression":"amazon.com",
      "merchant":"amazon"
    },
    {
      "operation":"regex",
      "expression":"amazon\\.com\\*(?<order_number>.*)",
      "merchant":"amazon"
    },
    {
      "operation":"exact",
      "expression":"anthropologie.com",
      "merchant":"anthropologie"
    },
    {
      "operation":"regex",
      "expression":"jenni kayne (?<merchant_location>.*?)",
      "merchant":"jenni kane"
    },
    {
      "operation":"regex",
      "expression":".*?nespresso.*?",
      "merchant":"nespresso"
    },
    {
      "operation":"regex",
      "expression":"^j\\. crew #(?<merchant_location>\\d*)",
      "merchant":"j.crew"
    },
    {
      "operation":"regex",
      "expression":"juut (?<merchant_location>.*)",
      "merchant":"juut"
    },
    {
      "operation":"exact",
      "expression":"apple.com\/bill",
      "merchant":"apple"
    },
    {
        "operation":"exact",
        "expression":"apple.com\/us",
        "merchant":"apple"
      },
    {
      "operation":"regex",
      "expression":"shell oil (?<order_number>.*)",
      "merchant":"shell"
    },
    {
      "operation":"regex",
      "expression":"^76 - (?<merchant_location>.*)",
      "merchant":"76"
    },
    {
      "operation":"exact",
      "expression":"uber trip",
      "merchant":"uber trip"
    },
    {
      "operation":"exact",
      "expression":"uber *trip",
      "merchant":"uber trip"
    },
    {
      "operation":"exact",
      "expression":"uber eats",
      "merchant":"uber eats"
    },
    {
      "operation":"exact",
      "expression":"uber *eats",
      "merchant":"uber eats"
    },
    {
      "operation":"regex",
      "expression":"zpizza - (?<merchant_location>.*)",
      "merchant":"zpizza"
    },
    {
      "operation":"exact",
      "expression":"la baguette",
      "merchant":"la baguette"
    },
    {
      "operation":"regex",
      "expression":"lucky brand #(?<order_number>.*)",
      "merchant":"lucky brand"
    },
    {
      "operation":"exact",
      "expression":"marukai market",
      "merchant":"marukai market"
    },
    {
      "operation":"exact",
      "expression":"joe the juice new york",
      "merchant":"joe and the juice"
    },
    {
      "operation":"exact",
      "expression":"masa sushi japan",
      "merchant":"masa sushi"
    },
    {
      "operation":"exact",
      "expression":"maison alyzee",
      "merchant":"maison alyzee"
    },
    {
      "operation":"regex",
      "expression":"99 ranch #(?<merchant_location>.*)",
      "merchant":"99 ranch market"
    },
    {
      "operation":"regex",
      "expression":"nob hill #(?<merchant_location>.*)",
      "merchant":"nob hill"
    },
    {
      "operation":"exact",
      "expression":"alexander's patisserie",
      "merchant":"alexander's patisserie"
    },
    {
      "operation":"regex",
      "expression":"starbucks store (?<merchant_location>.*)",
      "merchant":"starbucks"
    },
    {
        "operation":"regex",
        "expression":"starbucks.*?",
        "merchant":"starbucks"
      },
      {
        "operation":"regex",
        "expression":"tamari aut.*?",
        "merchant":"tamari georgian restaurant"
      },
    {
      "operation":"exact",
      "expression":"starbucks",
      "merchant":"starbucks"
    },
    {
      "operation":"exact",
      "expression":"paris baguette",
      "merchant":"Paris Baguette"
    },
    {
      "operation":"regex",
      "expression":".*everlane.*",
      "merchant":"everlane"
    },
    {
      "operation":"regex",
      "expression":".*eileen fisher.*",
      "merchant":"eileen fisher"
    },
    {
      "operation":"regex",
      "expression":".* the sill$",
      "merchant":"the sill"
    },
    {
      "operation":"exact",
      "expression":"terrain.com",
      "merchant":"terrain.com"
    },
    {
      "operation":"exact",
      "expression":"alaska air",
      "merchant":"Alaska Airlines"
    },
    {
      "operation":"regex",
      "expression":"alaska air (?<order_number>.*)",
      "merchant":"Alaska Airlines"
    },
    {
      "operation":"regex",
      "expression":"delta air (?<order_number>.*)",
      "merchant":"Delta Airlines"
    },
    {
      "operation":"regex",
      "expression":"southwes (?<order_number>.*)",
      "merchant":"Southwest Airlines"
    },
    {
      "operation":"exact",
      "expression":"hm.com",
      "merchant":"H&M"
    },
    {
      "operation":"exact",
      "expression":"google *voice",
      "merchant":"Google Voice"
    },
    {
      "operation":"regex",
      "expression":"bianchinis market .*",
      "merchant":"Bianchinis Market"
    },
    {
      "operation":"regex",
      "expression":"lyft \\*ride (?<order_number>.*)",
      "merchant":"Lyft"
    },
    {
      "operation":"regex",
      "expression":"sajj (?<merchant_location>.*)",
      "merchant":"Sajj"
    },
    {
      "operation":"regex",
      "expression":"chevron .*",
      "merchant":"Chevron"
    },
    {
      "operation":"regex",
      "expression":"wholefds .*",
      "merchant":"Whole Foods"
    },
    {
      "operation":"exact",
      "expression":"felipe's market",
      "merchant":"Felipe's Market"
    },
    {
      "operation":"exact",
      "expression":"ava's downtown market",
      "merchant":"Ava's downtown market"
    },
    {
      "operation":"regex",
      "expression":"oren s hummus .*",
      "merchant":"Oren's Hummus"
    },
    {
      "operation":"regex",
      "expression":"daiso .*",
      "merchant":"Daiso"
    },
    {
      "operation":"regex",
      "expression":"paris baguette .*",
      "merchant":"Paris Baguette"
    },
    {
      "operation":"exact",
      "expression":"coffee & more",
      "merchant":"Coffee & More"
    },
    {
      "operation":"regex",
      "expression":"lucky .*",
      "merchant":"Lucky Supermarket"
    },
    {
      "operation":"regex",
      "expression":"blue bottle .*",
      "merchant":"Blue Bottle Coffee"
    },
    {
      "operation":"regex",
      "expression":"lush .*",
      "merchant":"Lush Cosmetics"
    },
    {
      "operation":"exact",
      "expression":"the prolific oven",
      "merchant":"The Prolific Oven"
    },
    {
      "operation":"exact",
      "expression":"little sky bakery",
      "merchant":"Little Sky Bakery"
    },
    {
      "operation":"regex",
      "expression":"^gap .*",
      "merchant":"Gap"
    },
    {
      "operation":"exact",
      "expression":"cafe venetia",
      "merchant":"Cafe Venetia"
    },
    {
      "operation":"regex",
      "expression":"janie and jack .*",
      "merchant":"Janie and Jack"
    },
    {
      "operation":"regex",
      "expression":"peet's (?<merchant_location>.*)",
      "merchant":"Peet's Coffee"
    },
    {
      "operation":"regex",
      "expression":"maxmara (?<merchant_location>.*)",
      "merchant":"MaxMara"
    },
    {
      "operation":"regex",
      "expression":"victoria's secret .*",
      "merchant":"Victoria's Secret"
    },
    {
      "operation":"exact",
      "expression":"beard papa",
      "merchant":"Beard Papa"
    },
    {
      "operation":"exact",
      "expression":"new mongolian bbq",
      "merchant":"New Mongolian BBQ"
    },
    {
      "operation":"exact",
      "expression":"bumble",
      "merchant":"Bumble"
    },
    {
      "operation":"regex",
      "expression":"manresa bread .*",
      "merchant":"Manresa Bread"
    },
    {
      "operation":"exact",
      "expression":"cranberry scoop",
      "merchant":"Cranberry Scoop"
    },
    {
      "operation":"regex",
      "expression":"onigilly - (?<merchant_location>.*)",
      "merchant":"Onigilly"
    },
    {
      "operation":"exact",
      "expression":"lakeside cafe",
      "merchant":"Lakeside Cafe"
    },
    {
      "operation":"regex",
      "expression":"^rei (?<merchant_location>.*)",
      "merchant":"REI"
    },
    {
      "operation":"regex",
      "expression":"pay.mts.ru.*",
      "merchant":"MTS.ru"
    },
    {
      "operation":"exact",
      "expression":"eastbaypkdist",
      "merchant":"East Bay Regional Park District"
    },
    {
      "operation":"exact",
      "expression":"taste nutrition services",
      "merchant":"Taste Nutrition"
    },
    {
      "operation":"exact",
      "expression":"adorable bakery llc",
      "merchant":"Adorable Bakery"
    },
    {
      "operation":"exact",
      "expression":"diddams",
      "merchant":"Diddams"
    },
    {
      "operation":"regex",
      "expression":".*?coffee bean",
      "merchant":"Coffee Bean"
    },
    {
      "operation":"exact",
      "expression":"sugarfina",
      "merchant":"Sugarfina"
    },
    {
      "operation":"exact",
      "expression":"minamoto kitchoan",
      "merchant":"Minamoto Kitchoan"
    },
    {
      "operation":"regex",
      "expression":"^arby's-(?<merchant_location>.*)",
      "merchant":"Arby's"
    },
    {
      "operation":"regex",
      "expression":"^100 percent pure (?<merchant_location>.*)",
      "merchant":"100 Percent Pure"
    },
    {
      "operation":"regex",
      "expression":"^the north face # (?<merchant_location>.*)",
      "merchant":"the north face"
    },
    {
      "operation":"regex",
      "expression":".*?the crepe stop.*?",
      "merchant":"The Crepe Stop"
    },
    {
      "operation":"exact",
      "expression":"learning express toys",
      "merchant":"learning express toys"
    },
    {
      "operation":"regex",
      "expression":"le boulanger .*",
      "merchant":"le boulanger"
    },
    {
      "operation":"regex",
      "expression":"onsite haircuts.*",
      "merchant":"onsite haircuts"
    },
    {
      "operation":"regex",
      "expression":"sunnyvale grocery o.*",
      "merchant":"grocery outlet"
    },
    {
      "operation":"regex",
      "expression":"cvs\/pharmacy.*",
      "merchant":"cvs pharmacy"
    },
    {
      "operation":"exact",
      "expression":"camino pharmacy",
      "merchant":"camino pharmacy"
    },
    {
        "operation":"regex",
        "expression": ".*?iherb.com.*?",
        "merchant": "iherb.com"
    },
    {
        "operation":"regex",
        "expression": ".*?oil changer.*?",
        "merchant": "oil changer"
    },
    {
        "operation":"exact",
        "expression": "bz bee market",
        "merchant": "bz bee market"
    },
    {
        "operation":"regex",
        "expression": ".*?kraftmusic.*?",
        "merchant": "kraft music"
    },
    {
        "operation":"exact",
        "expression": "edgewood tahoe lodge",
        "merchant": "edgewood tahoe lodge"
    },
    {
        "operation":"regex",
        "expression": "edgewood food.*?",
        "merchant": "edgewood tahoe lodge"
    },
    {
        "operation":"exact",
        "expression": "red giant coffee",
        "merchant": "red giant coffee"
    },
    {
        "operation":"regex",
        "expression": ".*?mademoiselle colette.*?",
        "merchant": "mademoiselle colette"
    },
    {
        "operation":"exact",
        "expression": "bagel street cafe",
        "merchant": "bagel street cafe"
    },
    {
        "operation":"exact",
        "expression": "cafe borrone",
        "merchant": "cafe borrone"
    },
    {
        "operation":"exact",
        "expression": "kiwico inc.",
        "merchant": "kiwico"
    },
    {
        "operation":"exact",
        "expression": "village toys",
        "merchant": "village toys"
    },
    {
        "operation":"exact",
        "expression": "lake tahoe oil company",
        "merchant": "lake tahoe oil company"
    },
    {
        "operation":"regex",
        "expression": "anthropologie.*?",
        "merchant": "anthropologie"
    },
    {
        "operation":"regex",
        "expression": ".*?home depot.*?",
        "merchant": "the home depot"
    },
    {
        "operation":"exact",
        "expression": "bean scene cafe",
        "merchant": "bean scene cafe"
    },
    {
        "operation":"regex",
        "expression": "fastrak.*?",
        "merchant": "fastrak"
    },
    {
        "operation":"exact",
        "expression": "hp *instant ink",
        "merchant": "HP"
    },
    {
        "operation":"regex",
        "expression":"^raley s #(?<merchant_location>.*)",
        "merchant":"Raley's"
      },
      {
        "operation":"regex",
        "expression":"^pepboys store (?<merchant_location>.*)",
        "merchant":"Pepboys"
      },
      {
        "operation":"regex",
        "expression":"^books inc.*?",
        "merchant":"Books Inc."
      },
      {
        "operation":"exact",
        "expression":"clock tower shop",
        "merchant":"clock tower shop"
      },
      {
        "operation":"regex",
        "expression":"^wf home mtg.*?",
        "merchant":"Wells Fargo"
      },
      {
        "operation":"regex",
        "expression":"^zelle transfer.*?souzan",
        "merchant":"Souzan"
      },
      {
        "operation": "regex",
        "expression": "wealthfront inc.*?",
        "merchant":"Wealthfront"
      },
      {
        "operation": "regex",
        "expression": "chase credit crd.*?",
        "merchant":"Chase"
      },
      {
        "operation": "exact",
        "expression": "bank of america credit card bill payment",
        "merchant": "Bank Of America"
      },
      {
        "operation": "regex",
        "expression": "pgande des:web online.*?",
        "merchant": "PG & E",
      },
      {
        "operation": "regex",
        "expression": "linkedin corpora des:direct dep.*?",
        "merchant": "LinkedIn"
      },
      {
        "operation": "regex",
        "expression": "paypal des:inst xfer id:apple inc.*?",
        "merchant": "apple"
      },
      {
        "operation": "regex",
        "expression": "verizon wireless.*?",
        "merchant": "verizon"
      },
      {
        "operation": "regex",
        "expression": "kindercare.*?",
        "merchant": "kindercare"
      },
      {
        "operation": "regex",
        "expression": "^fid bkg.*?",
        "merchant": "fidelity"
      },
      {
        "operation": "regex",
        "expression": "^porkbun llc.*?",
        "merchant": "porkbun"
      },
      {
        "operation": "regex",
        "expression": "^comcast .*?",
        "merchant": "comcast"
      },
      {
        "operation": "regex",
        "expression": "^venmo .*?",
        "merchant": "venmo"
      },
      {
        "operation": "exact",
        "expression": "jcrewgroupi",
        "merchant": "jcrew"
      },
      {
        "operation": "exact",
        "expression": "patagonia",
        "merchant": "patagonia",
      },
      {
        "operation": "exact",
        "expression": "backcountry",
        "merchant": "backcountry",
      },
      {
        "operation": "exact",
        "expression": "goop inc",
        "merchant": "goop",
      },
      {
        "operation": "exact",
        "expression": "reimausainc",
        "merchant": "reima",
      },
      {
        "operation": "exact",
        "expression": "zarausainc",
        "merchant": "zara",
      },
      {
        "operation": "exact",
        "expression": "mother llc",
        "merchant": "mother llc",
      },
      {
        "operation": "exact",
        "expression": "nordstrom",
        "merchant": "nordstrom",
      },
      {
        "operation": "exact",
        "expression": "burtoncorpo",
        "merchant": "burton",
      },
      {
        "operation": "exact",
        "expression": "lulusfashio",
        "merchant": "lulus fashion",
      },
      {
        "operation": "exact",
        "expression": "doordashinc",
        "merchant": "doordash",
      },
      {
        "operation": "exact",
        "expression": "columbiaspo",
        "merchant": "columbia sport",
      },
      {
        "operation": "exact",
        "expression": "chanel",
        "merchant": "chanel",
      },
      {
        "operation": "exact",
        "expression": "urbanoutfit",
        "merchant": "urban outfitters",
      },
      {
        "operation": "exact",
        "expression": "ecoalf recycled",
        "merchant": "ecoalf recycled",
      },
      {
        "operation": "exact",
        "expression": "kieljamespa",
        "merchant": "Kiel James Patrick",
      },
      {
        "operation": "exact",
        "expression": "hautelookin",
        "merchant": "HauteLook"
      },
      {
        "operation": "exact",
        "expression": "google youtube",
        "merchant": "Google Youtube"
      },
      {
        "operation": "exact",
        "expression": "google google s",
        "merchant": "Google Drive"
      },
      {
        "operation": "exact",
        "expression": "skillshare",
        "merchant": "Skillshare"
      },
      {
        "operation": "exact",
        "expression": "yngwldfrdmn",
        "merchant": "Young, Wild and Freedman"
      },
      {
        "operation": "exact",
        "expression": "uggtevasanu",
        "merchant": "UGG"
      },
      
  ]




  