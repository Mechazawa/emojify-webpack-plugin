# 🦄 emojify-webpack-plugin [![npm version](https://img.shields.io/npm/v/emojify-webpack-plugin.svg)](https://www.npmjs.com/package/emojify-webpack-plugin)
This plugin will transform your code into emoji ready to be shipped to production. It's as simple as that. 

## Installation
Installation can be done through yarn or npm
```sh
yarn add --dev emojify-webpack-plugin
# or alternativly
npm install --save-dev emojify-webpack-plugin
```

The plugin can be activated by simply adding it to your plugin chain. For best results minify your code first.

```js
var EmojifyPlugin = require('emojify-webpack-plugin');

{
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js($|\?)/i,
      minimize: true,
    }),

    new EmojifyPlugin(),
  ]
}
```

## Example
A `manifest.js` file from a random project built using the emojify plugin.

```js
eval((function(n,e){var t=0,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");return n=n.replace(/../g,function(n){var o=e.findIndex(function(e){return e===n}),u=r[(o-t)%r.length];return t=(t+3)%(e.length-r.length),u}),"undefined"!=typeof atob?decodeURIComponent(escape(atob(n))):new Buffer(n,"base64").toString("utf-8")})(
"👭😚🏹📙🎄🐞🏹👤😧🌳🙆📉🏥🚩📙🍿🎌👍📉🎐👇🚗📉👺🎰🌫🏏💽🌱🐜🚥😘💬😘🏏💣🐒😘💡🐇🏯🎠🚳🚀🍻🐂🎹🚰📯🎆📶🍨🍑📫📻📫📫🏬💉🐎🍟🍷👈🍣👣🍍📒📣📊🌮🐎🍗🐫🎢🐘👌🐼🚊😋📭🍯📲😹🎷👀😤🍈💯🌼💠💜🐅💇🐸🐅🚢😢😶🚐🚕🌺📦👰💊😿💠🍄🏨🏫🏁👃🎿🏡🌤🏎🐀🐨🐀🐣🌤📳🐮🐋🏤🏋🐥🍄📂🐀🏽🏋💅🚛👶📘🚖🙀🚑🎮🙂😳📟📵🚘🎮🏽🌦💫💝😗💮👨💮🚮📏🎪🌥🌸👁🙋💤🍖🎣📁🐐😒🍓💃🍓🤔🌷💙🎋🏊📙💗🍊💂🙎😧📑😚🎏🐬🍶👤🤓🌫🐚🐞🏓💾📥🙎🎏🎥🌫👛📉💽📅🐶👯🏀👺🏯🎨👆👾🐔🚳🚞💽😾🚣🍦📋🎆🎨🎆💣📫🚰😩🚒💧💉🍏💛🎆📕🏺🍍🍷📢🏟📕🌮👣👈🍡🍢🐎👈🌨🏟💀🐼🚯🚈🎞📭😹🏩🚄🏩😹🐺🚈🍈🍅👳🚈💠🚐🚠💥👰🌼🌼💜🎈👙🐕🌿🚕🐆🏁😥👐🐄💈🏁🌲🍝📌💄🎿🍺🏚🐮🐲💳🌪🏞🍲🍄💈💩🚖👔🏙🙀🎒🚛📚💸🍮📂🎮💅📟🚵📓🎵🎯👫👫💴👹🎯🍇🍭🌹📤🎦😜👨🏷🎼🏷😒🎦💆🎋📁🎊🎪📄🐙📏👢🎊🏒🌸📠📄🚩🐽🏥💘🙎👘👤🐧🤑🤒💔📉🐻🎱🌶🐶🌫🎏👤👯👍🙆👏🐈💦📨🎰🐒😘🚌📞🏸💢🎠🚍🏏🍦👏👺🍻📶🎃😘🙁🍽🍻🍐🚣😦🏻🏻📶💧🚳🍍📶💉📒🐫🐦🏺🎫👡🐎🎬🏟👝🏠🐌📊🎟🐎📊🌴📖🎇🐌🚔🐺🚄📆🍵👮🏠🙅📰📖🎤🍾😤🏩💶💠🎸📆🚐🍞💠🐸🏁💥🐸😛💄🐤🌬🐏💄🏚💄🏫🐄🎂🌲🎂😖💍🏡🐥👅🐛👔🏉🍲📡🏙🍱🚛🙀😖😖👋👿🍩👫🏔🍸💅🍰💺🚮🙀🚮🎵💌💺🙊📐🎁🏷🐩🌧🌧🎣🚮🏐🐐🌧🙈🍓💑🤔🎼📏😒👞🚃🏒💚😒📀🏒👢🎾🏢🍶📩🎄🐻🎾💼🏑🎌🙇🚙😧👯🐧👍🐯🐁🏓🚗📥📥📈🏂🚗🚙🎐👑📍🚍🐒🍥💦👺🎥😎🎨📞👆🏾💲🍦💡🎅😾📺🐑💛📶🏮👲🚅🍑📫🐑👝📫👡🐑💀👄🍳💨🚯🍨🚯💀🎟📊🎬💨🚊🙍👬🍠📰📢🍼🌼🚐👮🌼🏌😻🍗🙌🍈👙📗👳👰🍈📗👳😻🌬📃🚢😻🐕🎩😶🐳👐💯💠🌬🐨🏚📷👐💩🐣🌪👐🐲🐏📌📘🍲😴🐮🐏🐥🍂😖📡🍰🏎🍁🏪🌦📓💅🏞🏔🙀🚘💅🍭🍇👿📵👹🎺📟🎣💫🍔🎯🚘🙋📵🌧📵🎪🌥📟🏐😔🏍🎼🏍📏🐐🐵🍓🚪👁📔👁💹🎉🚪🐹🚩📑🍪😧🐬🌳💼🏹📉📹🙉👯🚌💪📜😟🐶📉🎌💦🐔🐬🐶🎥💡🏅🚧🎐💽🚌🚗💞🏏🐔📞📶👑🎠👑🍽🏮🍻📯🍻💛🏝👆📶📒🚒🍐💉💨🍽📯🚀💒🍟🚶😦🏟🌰🎫👒🏇🍉💧💉🌴🎬🍼👓🍗📊🍡🍧🎷👩🍢📰🚈🐼🍢🚈🎸📰🚓📃💜🚠📖🏁📃🌼🙅🎩🎈💶🍺🐄👃🐅🍛🐳🏨🐄🌪🐣💊😿🌬🌬🍂🌵🐮🌵💩🍜😓🐣🚑👅😓🙀💻🚇💻🚖🍤📂🚑💅👿📚👋🎮🏷👗🏽🚖🚘👧🎯🏔🎼🎯🚘🏔🌥👂🏆🍓🌧🏿😊📐🎼👨😊📄🐝🙋🙋🏍😒💤🎪👁😪🐱👚👁🐞😝🍪💪🤓🎾😚👦🙎🍫📥🐧💕😧🙎🎰🐶🙎👛😟📨🐯🐯🍿😽🏦🚧💾🚍🚧😽💾😯🏂🎐📈🍥💬📋🎆🚒🐂🏮🎨🐑💢📞💞🍨🎹🍳🎹🚅🚞🚞📶💉📒🍡🙍👣🚅🎬🐍🚶🏟🍧💀👒📊📲🙍👌🐘📖🏖🍵🏠🍵🍅📗🏌👮💿🙅🎞🍙💶😤🏩😤🎩🌬😢🎈👃🍞👙👷🌿🐨😼🎩👐💊🌬🐮🐅🏚💄🏫🚕🚚🌲📷🌿🏋🚤🍝🌤💅📳📌👗🐛🚇🏉🙀💅📘🍮👋💸🍁🙂👴🏆🍀👶💮📝🏪🍇🏪🎵🚮🐊🏔😳🍭💝📐🍖🚉🍓🏐😜🐢🎁🌧🌸🍎🏊🏐🐝🐐🌸🚜🐱🚜🐵🐪🎧📸🏢🤒📙🏘👱🍊🎲🎶🙇💗🎌💼💼📨🌫🤓📪💱🏅📥📥💪👺🌫😟📨👕👛👛😯🐷📈💡🚝📞🌭🏀💽📋🏝👥🏾💁👥🚍🚥😣😾🍍🎆📒💒😎📒🎫🍐🎅🍣💨💧🍳🍏🐌🏟📫🏠👈🏺🐫😋🌮💐🐺😋👓🏌🏌😋📆📣📖💿😢😹🏩🎞👳📛🎸🚈📇👳😢🚐🚕🍚🍛📃🐕😶🎈🐓💊👙🐕🐳🐏👖💊👖🍜🏡🍝🏋💳🐣🌲🐓🚇🏨🐮💩📘🏉📷📘🎭🐥🐥🏪🐊🍁😨🐩🐩🌻🍇🍰🎯👗🍀🙃🚫🎺📟🍸🎵👫😗💌🐢💆🤔📵😊💆🙄💴📔🌹🌸🏐🏐🌸🚜🍓🏒🙋🎪💑🐟📄💎🤓📹🎻🍪💖💼📩🍃🚴🎏🍌📥🐯📥👤🤑🏅🏦💔🌫🐯🎥😟👍💲👕🐶😘😟👑👺🚗💾🐂🐷👾🐖🏕🙁😾🐒🚷🍥🏮🚀🍽🏀🍐💞🐦🏕🍳🍟📎🏬🎆🐍🍏👄🚶😸😋🎫📫😸🐘🎫🏌💨💐🚂📻🐎👌🌴🐫👬📭🚯👌👒🎀🎳📰🎀📗🎞📲👮👰👀🍈📃🌽🚐💜🎸🐭🍈🐆💯🚤💯🍛🏁💊🍞🎩🎩🌪🐭📳🐨🐲😴🍂🍄📳🎂😖📘👔😓👔🎭🌻🏃🚑💸👗🌻🚵🐀👂🎒🚵📘💺🍩🍁🎭😗👧🚉🏔🎼🏆🍇📵🙄🙊🙊💑🙋🏿🎯🐾🏐🎣🙃😗🍴🤔💤💤🏒🙋🐪🍓🚬🍆📏🐱💗🏹🙉💘🙎🏘🍃🚴💪🐞🐧🍶👇💱🎰🐧🎐🚙👤🐈🏂🙆👍🏸👏📜🚗🎰🚥🌭👕😯💡🏓📼🏓🐇👑👺🏏📶🏯💲😯🏻🍦👥🚰🏭😾😾🍽😸🚳📯🚀🐫🐑🏭🎟🐎💨🍨👈🐫🍏😱👌👒📊🙌🍠🍵🙍🍡🏖👓👌🏌📗🚈🐺🍵😻📛🚓🚊🚄🚲💿🙅😻😼🎸💜🐅💥📱🐆📃🏚👷🐰🏡🐰😛👃🐏🌲👐💊🎿📌👐💊🏨😨🍄😓🏨🍱💍📳👗🏤💩🏙😨🍀📚🍁💸🍇👋🎭🏪🏔📡👫🍭🏆🍇🚵🎵📵🐊🎮💴🎦💮🎦💺🐢🚉🚉🎵🌸📵🤔🌥🚜🎪🏊🎋🐱🌸🐐🐾😲🍴🌷🍓💙👟👦📸🙎💖🏢👎🤑🏑💼📉🌱🚦🐜💾🙆👤📪🙆📴📪🍿🎏🚌📴🐔💽🚝🎰👺👯🙁🏅👍📈🚣🚍😘📶💞🏝👥💲🏾😩📼😾📒📋😎🏀📫🏭🎫🐑👝😣🐍🚰🍧🎅🍨🍧🚶💉🍡🍯🐘💉🍡😋📲👈🍢😋📖🏌🍹💿🎇🚯🌴📲🎸🏖🍈🎇🌼😤👳🎞💶📗👳😢💶🚠🚢😼💄💶🏧🐳🚕😿🐳🏨😴🐕🏁🌿🌪🍝🐓🍲👅🌪📌🏞👔📳🌲🍲📚🏋🐥👋💅🐉🏽🏋🍮🍁🐀📡🏔🙀🚵📘🐩👗🏆💸🚘🙂📟💸🙄📐🐩💮🙋💌🎁🎣🚜🌥🎪🎣📔👞🎦👼🍴😜🎁🍴💹🐵🎉👁🎧🎉🚪💘💗🎡🍘🍊🎌🚁🎌🍊🙎💼👦🤓🙆💪🚙💗📨💱🌫🎌👍📴👍🐖🏓🏦🚗👯😘👏👾🐒📞🎃🚥🍦🐇😯🐂🚀🚷😯🐂😩🎅📶🏭😩🍷🚟💁💉🍏🍽🏻🎅👝🍟🎫💉💐😠🍡📕🌴🍡🍣📕🍯📎💉🚈🍯🚯🚊👒👵🚊🎬🚄🏩🎷📆📃📦🍅🐆🎇🎩🍾🍙🚐👰🍈🏩💿🐭📃🏚🐅🌿🐡🐆💶🎂😌🚢🐄🍄🍝👃🐏🐋😴🏉👐🐲👅🍝🏎😨🍄🌪🍮📂🏞🏉🙀🙀🍲🍰😖🎮😑👿💌😳👴🍁🍭📐🏔🚉🐩🌧🚮🙃💮🌥👹💤🚫😜💴🌸💭🤔🚃🎁💑🐙😊🎁🎋👼🎋🐪😒🍆📁😏🎍📩📑💼💪🍃🙉👱📉📙🍌🐻🍶💔🎲💕📉🍿📙👤🏅🎰😟🐶🐖🐔🎰🎃🐒🎥🚌🏏😾👥",
(function(){function n(n,r){return Array.apply(null,{length:r-n}).map(Function.call,Number).map(function(r){return r+n})}var r,t,o,a,e=[].concat(n(127780,127891),n(127902,127984),n(127991,128253),n(128522,128591),n(128640,128696),n(129296,129301)).map(function(n){return String.fromCodePoint(n)}),u=1337;for(o=e.length;o;o--)a=1e4*Math.sin(u++),r=Math.floor((a-Math.floor(a))*o),t=e[o-1],e[o-1]=e[r],e[r]=t;return e})()))
```

# WHY!?
![For the glory of satan, of course](https://shodan.me/stuff/for_the_glory_of_satan.png)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMechazawa%2Femojify-webpack-plugin.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMechazawa%2Femojify-webpack-plugin?ref=badge_large)
