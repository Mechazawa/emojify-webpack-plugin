export const generateEmoji = function () {
  function arrGen(start, stop) {
    return Array.apply(null, {length: stop - start})
      .map(Function.call, Number)
      .map(function (x) {
        return x + start;
      });
  }

  var out = [].concat(
    arrGen(0x1F324, 0x1F393),
    arrGen(0x1F39E, 0x1F3F0),
    arrGen(0x1F3F7, 0x1F4FD),
    arrGen(0x1F60A, 0x1F64F),
    arrGen(0x1F680, 0x1F6B8),
    arrGen(0x1F910, 0x1F915),
  ).map(x => String.fromCodePoint(x));

  // copy-paste consistent shuffle
  // see https://stackoverflow.com/a/6274381
  var j, x, i, q, seed = 1337;
  for (i = out.length; i; i--) {
    q = Math.sin(seed++) * 10000;
    j = Math.floor((q - Math.floor(q)) * i);
    x = out[i - 1];
    out[i - 1] = out[j];
    out[j] = x;
  }

  return out;
};

export const unpack = function (str, emoji) {
  var offset = 0;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split('');

  str = str.replace(/../g, function (x) {
    var index = emoji.findIndex(function (z) {
        return z  === x;
    });

    var out = chars[(index - offset) % chars.length];

    offset = (offset + 3) % (emoji.length - chars.length);
    return out;
  });

  // Simple base64 unicode decode
  if(typeof atob !== 'undefined') {
    return decodeURIComponent(escape(atob(str)));
  } else {
    return new Buffer(str, 'base64').toString('utf-8');
  }
};

export const pack = function(src, emoji) {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split('');
  var offset = 0;

  src = new Buffer(unescape(encodeURIComponent(src))).toString('base64');

  return src.replace(/./g, function(x) {
      var out =  emoji[chars.findIndex(function (z) {
        return z  === x;
      }) + offset];

      offset = (offset + 3) % (emoji.length - chars.length);

      return out;
  });
};
