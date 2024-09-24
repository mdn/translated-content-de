---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 355cb905102efabcc189d1d10a95bb27cba6daf0
---

{{JSRef}}

Die **`dotAll`** Zugriffspropertie von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `s`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{EmbedInteractiveExample("pages/js/regexp-prototype-dotall.html")}}

## Beschreibung

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde; andernfalls `false`. Das `s`-Flag weist darauf hin, dass das Punkt-Sonderzeichen (`.`) zusätzlich die folgenden Zeilenbegrenzungszeichen ("newline") in einem String matchen soll, die es ansonsten nicht matchen würde:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Dies bedeutet effektiv, dass der Punkt jede UTF-16-Codeeinheit matchen wird. Allerdings wird er _keine_ Zeichen matchen, die außerhalb der Unicode-Basic-Multilingual-Plane (BMP) liegen, auch bekannt als astrale Zeichen, die als [Surrogatpaare](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt werden und erfordern, dass man mit zwei `.`-Mustern anstelle von einem matcht.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) Flag kann verwendet werden, um zuzulassen, dass der Punkt astrale Zeichen als einzelne Zeichen matcht.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` dennoch in der Lage ist, _astrale Zeichen_ als Teil eines größeren Kontexts zu _konsumieren_, auch ohne das `u`-Flag.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Die gleichzeitige Verwendung der `s`- und `u`-Flags erlaubt es dem Punkt, jedes Unicode-Zeichen auf eine intuitivere Weise zu matchen.

Der Set-Zugriff von `dotAll` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

### Verwendung von dotAll

```js
const str1 = "bar\nexample foo example";

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // foo example

const str2 = "bar\nexample foo example";

const regex2 = /bar.example/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// bar
// example foo example
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill des `dotAll`-Flags in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
