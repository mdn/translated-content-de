---
title: RegExp.prototype.dotAll
short-title: dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: f2385bc25e8dc4c774d50bcf7f97e420d59c7a1a
---

Die **`dotAll`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob das `s`-Flag für diesen regulären Ausdruck verwendet wird.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.dotAll")}}

```js interactive-example
const regex1 = /f.o/s;

console.log(regex1.dotAll);
// Expected output: true

const regex2 = /bar/;

console.log(regex2.dotAll);
// Expected output: false
```

## Beschreibung

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde; andernfalls hat es den Wert `false`. Das `s`-Flag bewirkt, dass das Sonderzeichen Punkt (`.`) zusätzlich die folgenden Zeilenumbruchzeichen in einer Zeichenfolge erfasst, die es sonst nicht erfassen würde:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Damit erfasst der Punkt jede UTF-16-Codeeinheit. Er erfasst jedoch _keine_ Zeichen außerhalb der Unicode Basic Multilingual Plane (BMP), auch astrale Zeichen genannt. Diese werden als [Surrogatpaare](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt und erfordern daher zwei `.`-Muster statt nur eines.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Mit dem [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag (Unicode) kann der Punkt astrale Zeichen als einzelnes Zeichen erfassen.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` astrale Zeichen auch ohne das `u`-Flag als Teil eines größeren Zusammenhangs _erfassen_ kann.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Die gemeinsame Verwendung der Flags `s` und `u` ermöglicht es dem Punkt, jedes Unicode-Zeichen auf intuitivere Weise zu erfassen.

Der Setter von `dotAll` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

Aus Gründen der Abwärtskompatibilität gilt `RegExp.prototype.dotAll === undefined`, obwohl `RegExp.prototype` keine `RegExp`-Instanz ist. (Man würde erwarten, dass der Getter einen `TypeError` auslöst, wenn der Wert von `this` keine `RegExp`-Instanz ist.)

## Beispiele

### dotAll verwenden

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

- [Polyfill für das `dotAll`-Flag in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.hasIndices")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
- {{jsxref("RegExp.prototype.unicode")}}
