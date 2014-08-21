function ThreeWords () {}

/**
 * Calculate three words based on an identifier
 *
 * @param {number} identifier Can take any value from 0 to 4 354 703 136 (i.e. 1633^3 -1) when using the default codeword array.
 */
ThreeWords.prototype.calculate = function (identifier) {
  // Create array of codewords
  var codewords = [];

  // Codewords are taken from Oren Tirosh's Mnemonic Encoding Project: http://web.archive.org/web/20090918202746/http://tothink.com/mnemonic/wordlist.html
  codewords = ["ACROBAT","ALCOHOL","AMERICA","APRIL","BANANA","CAMERA","CITIZEN","CREDIT","DIALOG","EXTRA","GALLERY","JAPAN","MELON","MUSIC","REPORT","TANGO","TOTAL","ATLANTA","CABARET","CHAPTER","CYCLONE","DOLBY","EDITOR","EMOTION","EXPLORE","FUJI","HARLEM","IMAGINE","JAVA","LITHIUM","MAXWELL","MOTHER","NIKITA","NUMBER","ORDER","PATTERN","PIONEER","PROXY","RABBIT","RAYMOND","RIVER","SALSA","SCORPIO","SIMPLE","SPIDER","ADAM","AIRLINE","ALIBI","AMIGO","ANSWER","ARMADA","ATHENA","AXIOM","BALLET","BATTERY","BICYCLE","BLONDE","BRANDY","BROWN","CABINET","CAMPUS","CANYON","CARLO","CASTRO","CHAMBER","CHARTER","CHICAGO","CITY","CLIMAX","COLA","COMEDY","CONTACT","CORONA","CRAFT","DANCE","DELIVER","DERBY","DIANA","DIRECT","DONALD","EARTH","ELASTIC","EMPTY","ESCAPE","EXACT","FACTOR","FICTION","FINANCE","FLORIDA","FOREST","FRANCE","GABRIEL","GEMINI","GOLD","GORILLA","GUIDE","HARVARD","HILTON","IDEA","INDIA","ITALIAN","JAZZ","JUMBO","KARMA","LABOR","LAVA","LIBERAL","LINEAR","LOBSTER","LUCAS","MADRID","MAJOR","MARINA","MASTER","MELODY","METAL","MILK","MIRAGE","MODERN","MONO","MOTOR","NEON","NEWS","NOVEL","OCEAN","OPTIC","ORIGIN","PABLO","PANCAKE","PARIS","PASSIVE","PATROL","PERFECT","PHONE","PILGRIM","PLAZA","POLICE","POPULAR","PRICE","PRODUCT","PUBLIC","RADAR","RECYCLE","REPTILE","RITUAL","ROYAL","SALON","SCHOOL","SECOND","SENATOR","SHARP","SILICON","SIREN","SOCIAL","SOURCE","SPIRIT","STOP","SUSAN","TACTIC","THEORY","TORNADO","TRANSIT","TRILOGY","TURBO","VACUUM","VENTURA","VIKING","VIRUS","VOCAL","WATER","WIZARD","YOGURT","ZODIAC","ALERT","AURORA","BASIL","BRAIN","CELLO","CLOUD","CRATER","DREAM","ERIC","FARMER","GENTLE","GREEK","HERBERT","INCH","JOEL","JUSTICE","MAZE","MILAN","MONKEY","NEBULA","ORIGAMI","PRELUDE","PUZZLE","ROBIN","SCHOLAR","SLEEP","SQUARE","STRETCH","SURVIVE","TEACHER","TODAY","TURTLE","VALERY","WONDER","ABSURD","ANDY","ARMOR","BAHAMA","BEAST","BETWEEN","BOGART","BREAK","BUTTON","CANDID","CHRIS","CLONE","COVER","DEPOSIT","DRUID","EPOXY","FAST","FISH","FLOOR","FRONT","GELATIN","GOBLIN","GRIFFIN","HALT","HOBBY","IMITATE","INVITE","JOSEPH","KEVIN","LEGACY","LOCATE","MAMMAL","MAYDAY","MODEST","NAVY","NIGHT","OCTAVIA","OVAL","PARLOR","PHOENIX","PLATO","POWDER","PROMO","RACHEL","REWARD","ROUND","SAILOR","SECURE","SHERMAN","SIZE","SONG","SPOON","STICK","SUPPORT","THINK","TONIGHT","TRIBUNE","UNDER","VENDOR","VISTA","WAVE","ANDROID","DEFINE","IRONIC","EGO","YES","AFRICA","ALEX","ANALOG","AROMA","BANDIT","CANADA","COBRA","CRITIC","DIPLOMA","FABRIC","GLOBAL","KILO","MENU","OBJECT","SIGNAL","TAXI","TOURIST","ATOMIC","CADET","CIRCLE","DARWIN","DOMAIN","EDUCATE","EMPIRE","EXTREME","GALILEO","HELIUM","INFANT","JESSICA","LOYAL","MAYOR","MYSTERY","NOBEL","OCTOBER","OUTSIDE","PEDRO","PLUTO","PUPIL","RADICAL","RESPECT","ROGER","SAMPLE","SECTOR","SOCIETY","SPONSOR","ADDRESS","AIRPORT","ALICE","AMMONIA","APPLE","ARNOLD","AUDIO","AZTEC","BAMBINO","BELGIUM","BINARY","BONJOUR","BRAVO","BRUCE","CACTUS","CANAL","CAPITAL","CAROL","CECILIA","CHANCE","CHEESE","CHICKEN","CLARA","CLINIC","COLLECT","COMMAND","CONTOUR","CORRECT","CRASH","DANIEL","DELPHI","DESIGN","DIEGO","DISCO","DRINK","EAST","ELEGANT","ENERGY","ESCORT","EXAMPLE","FALCON","FIDEL","FINISH","FLOWER","FORMAL","FRANK","GAMMA","GENERAL","GOLF","GRAND","GUITAR","HAVANA","HISTORY","IGLOO","INDIGO","JACKET","JEEP","JUNE","KAYAK","LADY","LECTURE","LIBRA","LION","LOCAL","LUNAR","MAESTRO","MAMA","MARKET","MATRIX","MEMO","METEOR","MILLION","MIRANDA","MODULAR","MONSTER","MOZART","NEPAL","NEXT","NUCLEAR","OCTOPUS","OPTIMAL","ORLANDO","PACIFIC","PANDA","PARKER","PASTA","PEGASUS","PERFUME","PHOTO","PILOT","POCKET","POLITIC","POSTAGE","PRINCE","PROFILE","PULSE","RALPH","REFLEX","REVERSE","ROBERT","RUSSIAN","SALUTE","SCOOP","SECRET","SENIOR","SHERIFF","SILK","SLANG","SODA","SOVIET","SPRING","STREET","SUSHI","TAHITI","THERMOS","TORONTO","TRAPEZE","TRIPOD","TWIST","VALID","VENUS","VILLAGE","VISION","VODKA","WEEKEND","WOLF","YOYO","ZOOM","ALMANAC","AVALON","BEGIN","BRENDA","CELTIC","COMBINE","CUBIC","DYNASTY","EVENT","FOOD","GEORGE","GRILLE","HEROIC","INITIAL","JOSHUA","KIMONO","MEDUSA","MILE","MORAL","NICKEL","ORINOCO","PREPARE","REMOTE","ROSE","SHELTER","SMILE","STADIUM","STUART","SWEET","TELECOM","TOGA","TWIN","VEGA","YEAR","ACCENT","ANVIL","ARROW","BALI","BEATLES","BEYOND","BONANZA","BROKEN","BUZZER","CARROT","CIPHER","CONAN","CRACK","DESIRE","DRUM","EROSION","FATHER","FLAME","FORBID","FUEL","GIBSON","GOPHER","GROUND","HARRIS","HONEY","INFO","IVAN","JUICE","KIWI","LEGEND","LOPEZ","MARGIN","MEANING","MORPH","NEEDLE","NISSAN","OHIO","OWNER","PAROLE","PHRASE","PLUME","PRAGUE","QUEST","RAJA","RHINO","RUBBER","SAINT","SHAKE","SHINE","SLALOM","SOUND","STAGE","STING","SUPREME","THOMAS","TORCH","TRINITY","UNIT","VENICE","VITAL","WEATHER","ANNEX","DISPUTE","NULL","FAX","ALASKA","ALPHA","ANIMAL","ARTIST","BANJO","CARBON","COMET","CRYSTAL","DOCTOR","FINAL","HARMONY","LEMON","METER","PIANO","SPORT","TEMPO","VIDEO","BARBARA","CANDLE","COBALT","DECLARE","DOUBLE","EDWARD","ETERNAL","FERRARI","GENESIS","HOLIDAY","ISOTOPE","KITCHEN","LUCKY","MONARCH","NATIVE","NOBODY","OFFICE","PACKAGE","PENCIL","PODIUM","PYTHON","RADIUS","RESPOND","ROMAN","SAMUEL","SERPENT","SONAR","ABRAHAM","ADMIRAL","ALABAMA","ALIEN","ANALYZE","ARCHIVE","ARSENAL","AUGUST","BAGEL","BAMBOO","BENEFIT","BIOLOGY","BORIS","BRAZIL","BRUNO","CAFE","CANNON","CARAMEL","CARPET","CEMENT","CHANGE","CHEF","CHIEF","CLASSIC","CLOCK","COLOMBO","COMPANY","CONTROL","COSMOS","CRICKET","DECADE","DELUXE","DETECT","DIESEL","DISNEY","DRIVER","ECOLOGY","ELEMENT","ENGINE","ETHNIC","EXIT","FAMILY","FIESTA","FINLAND","FLUID","FORMULA","FRESH","GARAGE","GENETIC","GONDOLA","GRANITE","GURU","HAWAII","HORIZON","IGOR","INPUT","JACOB","JOHN","JUNGLE","KERMIT","LAGOON","LEFT","LILY","LIQUID","LOGIC","MACHINE","MAGIC","MAMBO","MARS","MAXIMUM","MENTAL","METHOD","MINIMUM","MISTER","MOMENT","MONTANA","MULTI","NEPTUNE","NINJA","NUMERIC","OLIVIA","ORANGE","OSCAR","PAGODA","PANEL","PARKING","PASTEL","PELICAN","PERIOD","PICASSO","PIXEL","POEM","POLO","PRECISE","PRINTER","PROGRAM","PUMA","RANDOM","REFORM","RICARDO","ROBOT","SAFARI","SAMBA","SCRATCH","SECTION","SENSOR","SHOCK","SILVER","SLOGAN","SOLAR","SPECIAL","STATIC","STRONG","SUZUKI","TALENT","TIGER","TORPEDO","TRAVEL","TROPIC","ULTRA","VAMPIRE","VERTIGO","VINCENT","VISITOR","VOLCANO","WELCOME","WORLD","ZEBRA","ACID","ALOHA","BABY","BISCUIT","BRIGADE","CHARIOT","COMMON","CUPID","EDISON","EVITA","FOSSIL","GIANT","HAMMER","HEXAGON","ISABEL","JOURNAL","KINETIC","MEMBER","MILLER","MOSES","NINA","ORION","PRETEND","REPAIR","ROVER","SHIP","SPAIN","STAR","SUBWAY","SWIM","TEMPLE","TOMMY","UNCLE","VERSION","YELLOW","ALFONSO","APPEAR","AUSTIN","BALSA","BEAUTY","BILLY","BOOK","BUCKET","BYTE","CAVE","CLARION","CONDUCT","CURRENT","DETAIL","EASY","EXCEPT","FELIX","FLEX","FOREVER","GALLOP","GINGER","GRACE","GUEST","HEART","HOPE","INGRID","JAMES","JULIUS","LADDER","LESSON","LORENZO","MARGO","MERCY","MORRIS","NEURON","NITRO","OLGA","PAGE","PAUL","PIERRE","POGO","PRESS","QUICK","RANGER","RIBBON","RUBY","SALT","SHALLOW","SHIRT","SLOW","SOUTH","STAMP","STOCK","SWEDEN","TICTAC","TORSO","TRITON","URBAN","VERONA","VOICE","WEDDING","ARMANI","GENUINE","NURSE","JET","ALBERT","AMADEUS","ANTENNA","ASPIRIN","BIKINI","CASINO","COMPACT","CULTURE","DOMINO","FOCUS","HOTEL","LITER","METRO","PIRATE","STUDIO","TENNIS","VISA","BAZAAR","CAPSULE","COMRADE","DENVER","EAGLE","EFFECT","EVENING","FORGET","GRAVITY","HUNTER","JACKSON","LAZARUS","MAGENTA","MONDAY","NECTAR","NOMINAL","OLIVER","PANDORA","PEOPLE","PORTAL","QUALITY","RAINBOW","RESULT","RONDO","SATURN","SHAMPOO","SONATA","ACTION","ADRIAN","ALADDIN","ALMOND","ANATOMY","ARCTIC","ARTHUR","AUSTRIA","BAKER","BARON","BERLIN","BISHOP","BOSTON","BRIDGE","BRUSH","CAIRO","CANOE","CARAVAN","CARTEL","CENTER","CHAOS","CHEMIST","CHINA","CLAUDIA","CLUB","COLONY","CONCERT","CONVERT","COUPLE","CROWN","DECIMAL","DEMAND","DEVELOP","DIET","DISTANT","DUBLIN","ECONOMY","ELITE","ENGLISH","EUROPE","EXOTIC","FANTASY","FIGURE","FIRST","FLUTE","FORTUNE","FRIEND","GARCIA","GENIUS","GONG","GRAPH","HAND","HELENA","HOUSE","IMAGE","INSECT","JAGUAR","JOKER","JUNIOR","KING","LAPTOP","LEGAL","LIMBO","LITTLE","LOGO","MACRO","MAGNET","MANAGER","MARTIN","MEDIA","MENTOR","MEXICO","MINUS","MIXER","MONACO","MORGAN","MUSEUM","NERVE","NIRVANA","NYLON","OLYMPIC","ORBIT","OXFORD","PALACE","PANIC","PARODY","PATENT","PENGUIN","PERMIT","PICNIC","PIZZA","POETIC","POLYGON","PREFIX","PRISM","PROJECT","PUMP","RAPID","REGARD","RIGHT","ROCKET","SALAD","SANDRA","SCREEN","SEGMENT","SERIAL","SHORT","SIMILAR","SMART","SOLID","SPEED","STATUS","STUDENT","SWITCH","TARZAN","TITANIC","TOTEM","TRIBAL","TRUMPET","UNIFORM","VANILLA","VETERAN","VIOLET","VISUAL","VOLTAGE","WESTERN","XRAY","ZERO","ADIOS","ANDREA","BAGGAGE","BLUE","CABLE","CHROME","COOL","CYCLE","EDITION","EXODUS","FROG","GILBERT","HARVEST","HUSBAND","IVORY","JUDGE","LEONID","MEMPHIS","MIMIC","MOUSE","NOISE","OTHELLO","PROMISE","REPLY","RUDOLF","SHOE","SPARK","STORM","SUGAR","TABLE","TIBET","TOWER","UNICORN","VOODOO","YOUNG","ALIAS","APROPOS","AVATAR","BARCODE","BEFORE","BISON","BORDER","BUENOS","CAESAR","CHANT","CLARK","CONGO","DANUBE","DEXTER","EDDIE","EXILE","FIELD","FLIPPER","FRACTAL","GAME","GIRAFFE","GRAY","GUSTAV","HEAVY","HORSE","INSIDE","JESTER","JULY","LAKE","LIFE","LOVE","MARION","MIDDLE","MYSTIC","NEVER","NIXON","OPEN","PAINT","PEACE","PINBALL","POINT","PRESTO","QUIZ","REGION","RIDER","RUFUS","SCALE","SHANNON","SIDE","SMALL","SPEECH","STAND","STORE","SWING","TIME","TOUCH","TRUCK","URGENT","VIBRATE","VORTEX","WHEEL","CAKE","IDIOM","OBSCURE","JOB","ALBINO","AMANDA","ANTONIO","ATHLETE","BINGO","CATALOG","COMPLEX","DAVID","DRAGON","FORUM","HUMOR","LOTUS","MINERAL","PLASTIC","SUBJECT","TEXTILE","ACADEMY","BROTHER","CAVIAR","CONDOR","DESERT","ECHO","ELECTRA","EXHIBIT","FREEDOM","HABITAT","IBIZA","JAMAICA","LETTER","MANUAL","MONEY","NELSON","NORWAY","OPINION","PANTHER","PHANTOM","POTATO","QUARTER","RAMIREZ","RESUME","SABRINA","SAVAGE","SHARON","SOPRANO","ACTIVE","AGENDA","ALARM","ALPINE","ANGEL","ARENA","ASIA","AVENUE","BALANCE","BASIC","BERMUDA","BLITZ","BOTTLE","BRITISH","BURGER","CALYPSO","CANTINA","CAREER","CARTOON","CENTURY","CHARLIE","CHERRY","CIGAR","CLEAN","COCKPIT","COLOR","CONNECT","COPY","COURAGE","CUBA","DEGREE","DEMO","DIAGRAM","DIGITAL","DOLLAR","DUET","EDGAR","ELVIS","EPISODE","EVEREST","EXPORT","FASHION","FILM","FLAG","FOLIO","FORWARD","FROZEN","GARDEN","GERMANY","GOOD","GREEN","HAPPY","HELLO","HUMAN","IMPACT","INSTANT","JANET","JORDAN","JUPITER","KOALA","LASER","LEVEL","LIMIT","LLAMA","LOLA","MADAM","MAGNUM","MANILA","MARVIN","MEDICAL","MERCURY","MIAMI","MINUTE","MOBILE","MONICA","MOTEL","MUSTANG","NEUTRAL","NORMAL","OASIS","OMEGA","ORGANIC","OXYGEN","PAMELA","PARADOX","PARTNER","PATIENT","PEPPER","PERSON","PICTURE","PLANET","POKER","PONY","PREMIUM","PRIVATE","PROTECT","PYRAMID","REBEL","REGULAR","RINGO","RODEO","SALAMI","SANTANA","SCRIPT","SELECT","SERVICE","SHRINK","SIMON","SMOKE","SOLO","SPHERE","STEREO","STYLE","SYMBOL","TELEX","TOMATO","TRACTOR","TRICK","TULIP","UNION","VATICAN","VICTOR","VIOLIN","VITAMIN","VOLUME","WINDOW","YANKEE","ZIGZAG","AGATHA","ANITA","BALLOON","BOMBAY","CALIBRE","CITRUS","COPPER","DEPEND","ENIGMA","EXTEND","FRUIT","GOSSIP","HAZARD","IMMUNE","JASON","JULIET","LEOPARD","MICHAEL","MIMOSA","NANCY","ORCHID","PAPER","PROSPER","RIVAL","SAGA","SIGMA","SPLIT","STORY","SULFUR","TABOO","TICKET","TRIVIAL","UNIQUE","WARNING","ABSENT","AMBIENT","ARCHER","AXIS","BAZOOKA","BENNY","BLAST","BRAVE","BUFFALO","CAMILLA","CHILD","CLEVER","COSTUME","DATA","DINNER","ENJOY","EXPLAIN","FIONA","FLOAT","FRAME","GARBO","GIZMO","GREGORY","GYRO","HERMAN","HOSTEL","INVENT","JIMMY","KANSAS","LAURA","LIGHT","LUNCH","MASK","MIKE","NADIA","NEWTON","NORTH","OPUS","PALMA","PEARL","PLACE","POLKA","PRETTY","QUOTA","REMARK","ROAD","SABINE","SCUBA","SHAVE","SINATRA","SNOW","SPELL","STATE","SUNDAY","TAPE","TOAST","TOYOTA","TRUST","USER","VIRGO","WAITER","WHISKEY","CONFIDE","IMPRESS","PREFER","RIO","ALBUM","AMAZON","APOLLO","ATLAS","BONUS","CINEMA","CONTEXT","DELTA","DRAMA","GALAXY","INDEX","MANGO","MODEL","RADIO","SUPER","TOKYO","ALFRED","BUDGET","CHANNEL","CRIMSON","DIVIDE","ECLIPSE","EMERALD","EXPAND","FRIDAY","HAMLET","ICEBERG","JASMINE","LICENSE","MARBLE","MORNING","NETWORK","NOTHING","OPTION","PAPA","PHILIPS","PROCESS","QUIET","RAVIOLI","RICHARD","SALARY","SCARLET","SILENCE","SPARTA","ACTOR","AGENT","ALGEBRA","AMBER","ANNUAL","ARIZONA","ASPECT","AVERAGE","BALLAD","BASKET","BERNARD","BLOCK","BOXER","BRONZE","BURMA","CAMEL","CANVAS","CARGO","CASTLE","CERAMIC","CHARM","CHESS","CIRCUS","CLIENT","COCONUT","COMBAT","CONSUL","CORNER","COWBOY","DALLAS","DELETE","DENMARK","DIAMOND","DILEMMA","DOLPHIN","DYNAMIC","EGYPT","EMAIL","EQUATOR","EVIDENT","EXPRESS","FIBER","FILTER","FLASH","FORD","FRAGILE","FUTURE","GARLIC","GLORIA","GORDON","GROUP","HARBOR","HENRY","ICON","IMPORT","IRIS","JARGON","JUDO","KARATE","KOREA","LATIN","LEXICON","LINDA","LOBBY","LONDON","MADONNA","MAILBOX","MARCO","MARY","MEGA","MESSAGE","MICRO","MIRACLE","MODEM","MONITOR","MOTIF","NATURAL","NEVADA","NOVA","OBSERVE","OPERA","ORIENT","OZONE","PANAMA","PARDON","PASSAGE","PATRIOT","PERCENT","PERU","PIGMENT","PLASMA","POLARIS","POPCORN","PRESENT","PRIZE","PROTON","QUEEN","RECORD","RELAX","RISK","ROMEO","SALMON","SARDINE","SCROLL","SEMINAR","SHADOW","SIERRA","SINGLE","SNAKE","SONIC","SPIRAL","STONE","SULTAN","SYSTEM","TEXAS","TOPIC","TRAFFIC","TRIDENT","TUNA","URANIUM","VELVET","VIENNA","VIRTUAL","VIVA","VOYAGE","WINTER","YOGA","ZIPPER","ALAMO","ARCADE","BANK","BOTANIC","CARMEN","CIVIL","CORAL","DOOR","EQUAL","FAMOUS","GENEVA","GRAM","HEAVEN","INCA","JEROME","JUMP","LIMA","MIGUEL","MISSION","NATASHA","OREGANO","PAPRIKA","PROVIDE","RIVIERA","SAHARA","SISTER","SPRAY","STRANGE","SUMMER","TARGET","TINA","TUNNEL","UPDATE","WILLIAM","ABSORB","ANAGRAM","ARIEL","BABOON","BEACH","BETTY","BLESS","BREAD","BUNDLE","CANARY","CHOICE","CLIFF","COTTON","DECIDE","DONOR","ENRICO","FAME","FIRE","FLOOD","FREDDIE","GATE","GLASS","GRID","HAIR","HIPPIE","HYDRO","INVEST","JOIN","KARL","LEARN","LIST","MALTA","MATCH","MIRROR","NATO","NICE","OBERON","ORCA","PARENT","PERFORM","PLATE","PONCHO","PRIME","RACE","RENT","RODENT","SADDLE","SEASON","SHELF","SINCERE","SOFIA","SPEND","STELLA","SUNSET","TAVERN","TOBACCO","TRADE","TYPE","VALUE","VISIBLE","WATCH","WISDOM","DEAL","INCLUDE","PRODIGY","SKI"];

  // Sort codeword array - not required, but will mean that three-word identifiers appear to increase "in order".
  codewords.sort();

  // Get length of codewords array. You can add and remove codewords as necessary.
  var n = codewords.length;

  // Split ID into base-n components
  var significantFigure1 = identifier/(Math.pow(n,2));
  var firstIndex = Math.floor(significantFigure1);
  var significantFigure2 = identifier % Math.pow(n,2)/n;
  var secondIndex= Math.floor(significantFigure2);
  var thirdIndex = identifier % n;

  // Alternatively, this code generates an identifier at random
  // var firstIndex = Math.round(Math.random()*(n-1));
  // var secondIndex = Math.round(Math.random()*(n-1));
  // var thirdIndex = Math.round(Math.random()*(n-1));

  return [codewords[firstIndex], codewords[secondIndex], codewords[thirdIndex]];
};
