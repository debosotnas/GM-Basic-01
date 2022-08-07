import React from 'react';
import HistoryCardList from './List';

// https://www.asciiart.eu/movies/star-wars
// https://asciiart.website/index.php?art=movies/star%20wars
// https://github.com/loeschg/ascii-art/blob/master/starwars/star-wars-r2d2-c3po.txt

const falcon = `
                      c==o
                    _/____\\_
              _.,--'" ||^ || "z._
             /_/^ ___\\||  || _/o\\ "-._
           _/  ]. L_| || .||  \\_/_  . _--._
          /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
        |__7~.(_)_ []|+--+|/____T_____________L|
        |__|  _^(_) /^   __\\____ _   _|
        |__| (_){_) J ]K{__ L___ _   _]
        |__| . _(_) \\v     /__________|________
        l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
         \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
           \\~_]  L_| || .\\ .\\\\/~.    _,--'"
            \\_\\ . __/||  |\\  \\-+-<'"
               "---._|J__L|X o~~|[\\\\
                     \\____/ \\___|[//`;

const historyData = [
  {
    id: 0,
    title: 'Hace mucho tiempo...',
    description: '',
    image: `
.    .        .      .             . .     .        .          .          .
.               .           .               .        .             .
     .            .         .   . :::::+::::...      .          .         .
  .            .      .    ..::.:::+++++:::+++++:+::.    .     .
                        .:.  ..:+:..+|||+..::|+|+||++|:.             .     .
            .   .    :::....:::::::::++||||O||O#OO|OOO|+|:.    .
       .      .    .:..:..::+||OO#|#|OOO+|O||####OO###O+:+|+               .
                  .:...:+||O####O##||+|OO|||O#####O#O||OO|++||:     .    .
   .             ..::||+++|+++++|+::|+++++O#O|OO|||+++..:OOOOO|+  .         .
      .   .     +++||++:.:++:..+#|. ::::++|+++||++O##O+:.++|||#O+    .
             . ++++++++...:+:+:.:+: ::..+|OO++O|########|++++||##+            .
   .       .  :::+++|O+||+::++++:::+:::+++::+|+O###########OO|:+OO       .  .
      .       +:+++|OO+|||O:+:::::.. .||O#OOO||O||#@###@######:+|O|  .
  .          ::+:++|+|O+|||++|++|:::+O#######O######O@############O
           . ++++: .+OO###O++++++|OO++|O#@@@####@##################+         .
       .     ::::::::::::::::::::++|O+..+#|O@@@@#@###O|O#O##@#OO####     .
  .        . :. .:.:. .:.:.: +.::::::::  . +#:#@:#@@@#O||O#O@:###:#| .      .
                            . .:.:.:.:. . :.:.:%::%%%:::::%::::%:::
                         .      . .:.:.:.:   :.:.:.:.  .   .   .  .`,
  },
  {
    id: 1,
    title: '...en una galaxia muy, muy lejana...',
    description: '',
    image: `
      .        .         .    .          .          .      .      .     .
    .     .      .               .    .          .              .   .      .   .
              .   A terrible civil war burns throughout the  .        .     .
                 galaxy: a rag-tag group of freedom fighters   .  .
     .       .  has risen from beneath the dark shadow of the            .
         .     evil monster the Galactic Empire has become.                  .
     .            Imperial  forces  have  instituted  a reign of   .      .
              terror,  and every  weapon in its arsenal has  been
           . turned upon the Rebels  and  their  allies:  tyranny, .   .
     .      oppression, vast fleets, overwhelming armies, and fear.        .  .
     .  .  Fear  keeps  the  individual systems in line,  and is the   .
          prime motivator of the New Order.             .
      .  Outnumbered and outgunned,  the Rebellion burns across the   .    .
    .   vast reaches of space and a thousand-thousand worlds, with only     .
     . their great courage - and the mystical power known as the Force -
      flaming a fire of hope.                                    .
        This is a  galaxy  of wondrous aliens,  bizarre monsters,  strange   .
   . Droids, powerful weapons, great heroes, and terrible villains.  It is a
    galaxy of fantastic worlds,  magical devices, vast fleets, awesome machi-  .
   nery, terrible conflict, and unending hope.              .         .
   .        .          .    .    .            .            .                   . `,
  },
  {
    id: 2,
    title: 'Esta es la galaxia de...',
    description: '',
    image: `
          .               .    .          .              .   .         .
               _________________      ____         __________
 .       .    /                 |    /    \\    .  |          \\
     .       /    ______   _____| . /      \\      |    ___    |     .     .
             \\    \\    |   |       /   /\\   \\     |   |___>   |
           .  \\    \\   |   |      /   /__\\   \\  . |         _/               .
 .     ________>    |  |   | .   /            \\   |   |\\    \\_______    .
      |            /   |   |    /    ______    \\  |   | \\           |
      |___________/    |___|   /____/      \\____\\ |___|  \\__________|    .
  .   ____     __  . _____   ____      .  __________   .  _________
      \\    \\  /  \\  /    /  /    \\       |          \\    /         |      .
       \\    \\/    \\/    /  /      \\      |    ___    |  /    ______|  .
        \\              /  /   /\\   \\ .   |   |___>   |  \\    \\
.        \\            /  /   /__\\   \\    |         _/.   \\    \\            +
          \\    /\\    /  /            \\   |   |\\    \\______>    |   .
           \\  /  \\  /  /    ______    \\  |   | \\              /          .
.       .   \\/    \\/  /____/      \\____\\ |___|  \\____________/  LS
                    .                                        `,
  },
  {
    id: 3,
    title: '',
    description: '[♩ ♫ ♪ ♬]',
    image: `
               .       
     .                c==o
                    _/____\\_
         .    _.,--'" ||^ || "z._
             /_/^ ___\\||  || _/o\\ "-._
   .       _/  ]. L_| || .||  \\_/_  . _--._
          /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
        |__7~.(_)_ []|+--+|/____T_____________L|
        |__|  _^(_) /^   __\\____ _   _|
   .    |__| (_){_) J ]K{__ L___ _   _]
        |__| . _(_) \\v     /__________|________
        l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
         \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
   .       \\~_]  L_| || .\\ .\\\\/~.    _,--'"
            \\_\\ . __/||  |\\  \\-+-<'"
        .      "---._|J__L|X o~~|[\\\\
                     \\____/ \\___|[//`,
  },
  {
    id: 4,
    title: '',
    description: '[♩ ♫ ... MÚSICA ... ♪ ♬]',
    image: `
      .               c==o
   .       .        _/____\\_
              _.,--'" ||^ || "z._
 .           /_/^ ___\\||  || _/o\\ "-._
           _/  ]. L_| || .||  \\_/_  . _--._
      .   /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
   .    |__7~.(_)_ []|+--+|/____T_____________L|
     .  |__|  _^(_) /^   __\\____ _   _|
        |__| (_){_) J ]K{__ L___ _   _]
   .    |__| . _(_) \\v     /__________|________
        l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
      .  \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
           \\~_]  L_| || .\\ .\\\\/~.    _,--'"
     .    . \\_\\ . __/||  |\\  \\-+-<'"
        .      "---._|J__L|X o~~|[\\\\
     .      .        \\____/ \\___|[//
   .            .         .          `,
  },
  {
    id: 5,
    title: '',
    description: '[♩ ♫ ... MÁS MÚSICA ... ♪ ♬]',
    image: `
               .       .
                      c==o
     .              _/____\\_
              _.,--'" ||^ || "z._
         .   /_/^ ___\\||  || _/o\\ "-._
 .   .     _/  ]. L_| || .||  \\_/_  . _--._
          /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
    .   |__7~.(_)_ []|+--+|/____T_____________L|
  .     |__|  _^(_) /^   __\\____ _   _|
      . |__| (_){_) J ]K{__ L___ _   _]
        |__| . _(_) \\v     /__________|________
  .     l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
     .   \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
  .     .  \\~_]  L_| || .\\ .\\\\/~.    _,--'"
            \\_\\ . __/||  |\\  \\-+-<'"
    .    .     "---._|J__L|X o~~|[\\\\
             .       \\____/ \\___|[//
    .            .         .          `,
  },
  {
    id: 6,
    title: 'En algún lugar del vasto universo...',
    description: '[♩ ♫ ♪ ♬]',
    image: `
               .       
     .                c==o
                    _/____\\_
         .    _.,--'" ||^ || "z._
             /_/^ ___\\||  || _/o\\ "-._
   .       _/  ]. L_| || .||  \\_/_  . _--._
          /_~7  _ . " ||. || /] \\ ]. (_)  . "--.
        |__7~.(_)_ []|+--+|/____T_____________L|
        |__|  _^(_) /^   __\\____ _   _|
   .    |__| (_){_) J ]K{__ L___ _   _]
        |__| . _(_) \\v     /__________|________
        l__l_ (_). []|+-+-<\\^   L  . _   - ---L|
         \\__\\    __. ||^l  \\Y] /_]  (_) .  _,--'
   .       \\~_]  L_| || .\\ .\\\\/~.    _,--'"
            \\_\\ . __/||  |\\  \\-+-<'"
        .      "---._|J__L|X o~~|[\\\\
                     \\____/ \\___|[//`,
  },
  {
    id: 7,
    title: '',
    description: 'Buenos tiempos, aquellos eran...',
    image: `
                    __.-._
                    '-._"7'
                    /'.-c
                    |  /T
                    _)_/LI
    `,
  },
  {
    id: 8,
    title: '',
    description:
      'Oh.. maestro Yoda... Es un raro pero verdadero placer encontrarlo aquí',
    image: `
          /~\\ 
         (O O)
         _\\=/_ 
        /  _  \\
       //|/.\\|\\\\
      ||  \\_/  ||
      || |\\ /| ||
       # \\_ _/ # 
         | | |   
         | | |   
         []|[]   
         | | |   
       _/_]_[_\\_
    `,
  },
  {
    id: 9,
    title: '',
    description: 'pero... cómo... Un misterio en este lugar parece haber',
    image: `
                    __.-._
                    '-._"7'
                    /'.-c
                    |  /T
                    _)_/LI
    `,
  },
  {
    id: 10,
    title: '',
    description: '...uhm, explicar como he llegado aquí no puedo',
    image: `
                     _.-.__     
                    '7"_.-'
                      c-.'\\
                      T\\   |
                     IL\\_(_ 
    `,
  },
  {
    id: 11,
    title: '',
    description:
      'Oh.. maestro Yoda... Es un raro pero verdadero placer encontrarlo aquí',
    image: `
          /~\\ 
         (O O)
         _\\=/_ 
        /  _  \\
       //|/.\\|\\\\
      ||  \\_/  ||
      || |\\ /| ||
       # \\_ _/ # 
         | | |   
         | | |   
         []|[]   
         | | |   
       _/_]_[_\\_
    `,
  },

  {
    id: 12,
    title: 'abc 2',
    description: 'desc 2',
    image: `
                            ____==========_______
                 _--____   |    | ""  " "|       \\
                /  )8}  ^^^| 0  |  =     |  o  0  |
    `,
  },
];

export default function HistoryCardContainer() {
  return (
    <div>
      <HistoryCardList data={historyData}></HistoryCardList>
    </div>
  );
}