---
title: RegExp.prototype.dotAll
short-title: dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`dotAll`**-Accessor-Eigenschaft von {{jsxref("RegExp")}}-Instanzen gibt an, ob bei diesem regulären Ausdruck das `s`-Flag verwendet wird.

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

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde, andernfalls `false`. Das `s`-Flag bewirkt, dass das Sonderzeichen Punkt (`.`) zusätzlich mit den folgenden Zeilenumbruchzeichen („newlines“) in einer Zeichenfolge übereinstimmt, mit denen es andernfalls nicht übereinstimmen würde:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Das bedeutet, dass der Punkt mit jeder UTF-16-Codeeinheit übereinstimmt. Er stimmt jedoch _nicht_ mit Zeichen außerhalb der Unicode Basic Multilingual Plane (BMP) überein, die auch als astrale Zeichen bezeichnet werden. Diese werden als [Surrogatpaare](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt und erfordern für eine Übereinstimmung zwei `.`-Muster statt eines.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Mit dem [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)-Flag (Unicode) kann der Punkt mit astralen Zeichen als jeweils einem einzelnen Zeichen übereinstimmen.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` astrale Zeichen auch ohne das `u`-Flag als Teil eines größeren Zusammenhangs _erfassen_ kann.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Wenn das `s`- und das `u`-Flag zusammen verwendet werden, kann der Punkt auf intuitivere Weise mit jedem Unicode-Zeichen übereinstimmen.

Der Set-Accessor von `dotAll` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
