---
title: RegExp.prototype.dotAll
short-title: dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`dotAll`** Zugriffsoroperty von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `s`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde; ansonsten `false`. Das `s`-Flag gibt an, dass das spezielle Zeichen Punkt (`.`) zusätzlich die folgenden Zeilenabschlusszeichen ("Newline") in einem String übereinstimmen soll, die es ansonsten nicht übereinstimmen würde:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Das bedeutet effektiv, dass der Punkt jede UTF-16-Codeeinheit übereinstimmen wird. Es wird jedoch _nicht_ mit Zeichen übereinstimmen, die außerhalb der Unicode Basic Multilingual Plane (BMP) liegen, auch bekannt als astrale Zeichen, die als [Surrogatpaare](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt werden, und erfordert das Übereinstimmen mit zwei `.` Mustern statt einem.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) Flag kann verwendet werden, um dem Punkt zu ermöglichen, astrale Zeichen als einzelnes Zeichen zu übereinstimmen.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` immer noch in der Lage ist, astrale Zeichen als Teil eines größeren Kontextes _zu konsumieren_, auch ohne das `u`-Flag.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Die gleichzeitige Verwendung von `s` und `u` Flags ermöglicht es dem Punkt, jedes Unicode-Zeichen auf eine intuitivere Weise zu übereinstimmen.

Der Set-Zugriffsoroperty von `dotAll` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

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
