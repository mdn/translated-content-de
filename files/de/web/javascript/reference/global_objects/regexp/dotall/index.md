---
title: RegExp.prototype.dotAll
slug: Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`dotAll`** Zugriffs-Eigenschaft von {{jsxref("RegExp")}} Instanzen gibt zurück, ob das `s`-Flag mit diesem regulären Ausdruck verwendet wird oder nicht.

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

`RegExp.prototype.dotAll` hat den Wert `true`, wenn das `s`-Flag verwendet wurde, andernfalls `false`. Das `s`-Flag zeigt an, dass das Punkt-Sonderzeichen (`.`) zusätzlich folgende Zeilenabschlusszeichen ("Newline") in einem String matchen sollte, die sonst nicht getroffen würden:

- U+000A LINE FEED (LF) (`\n`)
- U+000D CARRIAGE RETURN (CR) (`\r`)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

Dies bedeutet effektiv, dass der Punkt jede UTF-16-Codeeinheit matcht. Er wird jedoch _nicht_ Zeichen außerhalb der Unicode Basic Multilingual Plane (BMP) matchen, auch bekannt als astrale Zeichen, die als [Surrogatpaaren](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) dargestellt werden und das Matchen mit zwei `.`-Mustern anstelle von einem erfordern.

```js
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

Das [`u`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) (unicode) Flag kann verwendet werden, um dem Punkt zu erlauben, astrale Zeichen als ein einzelnes Zeichen zu matchen.

```js
"😄".match(/./su);
// Array [ "😄" ]
```

Beachten Sie, dass ein Muster wie `.*` immer noch in der Lage ist, astrale Zeichen als Teil eines größeren Kontexts zu _verbrauchen_, auch ohne das `u`-Flag.

```js
"😄".match(/.*/s);
// Array [ "😄" ]
```

Die gleichzeitige Verwendung der `s`- und `u`-Flags erlaubt es dem Punkt, jedes Unicode-Zeichen in einer intuitiveren Weise zu matchen.

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
