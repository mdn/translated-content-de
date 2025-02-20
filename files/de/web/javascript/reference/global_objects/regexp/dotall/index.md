---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`dotAll`** Zugriffseigenschaft von {{jsxref("RegExp")}}-Instanzen gibt zurück, ob das `s`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.dotAll")}}

```js interactive-example
const regex1 = new RegExp("foo", "s");

console.log(regex1.dotAll);
// Expected output: true

const regex2 = new RegExp("bar");

console.log(regex2.dotAll);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde; andernfalls `false`. Das `s`-Flag gibt an, dass das spezielle Zeichen Punkt (`.`) zusätzlich zu den folgenden Zeilentrennzeichen ("newline")-Zeichen in einem String passen soll, die es sonst nicht passen würde:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Das bedeutet effektiv, dass der Punkt jede UTF-16-Codeeinheit trifft. Es wird jedoch _keine_ Zeichen treffen, die sich außerhalb der Unicode Basic Multilingual Plane (BMP) befinden, auch bekannt als astrale Zeichen, die durch [Surrogatpaare](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt werden. Zum Treffen dieser Zeichen sind stattdessen zwei `.`-Muster erforderlich, nicht eines.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag (unicode) kann verwendet werden, um zu erlauben, dass der Punkt astrale Zeichen als ein einzelnes Zeichen trifft.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` dennoch in der Lage ist, astrale Zeichen als Teil eines größeren Kontexts _zu konsumieren_, selbst ohne das `u`-Flag.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Die gleichzeitige Verwendung der `s`- und `u`-Flags ermöglicht es dem Punkt, jedes Unicode-Zeichen auf eine intuitivere Weise zu treffen.

Der Set-Accessor von `dotAll` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
