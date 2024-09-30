---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`codePointAt()`**-Methode von {{jsxref("String")}}-Werten gibt eine nicht-negative Ganzzahl zurück, die den Unicode-Codepunkt-Wert des Zeichens darstellt, das an dem angegebenen Index beginnt. Beachten Sie, dass der Index immer noch auf UTF-16-Codeeinheiten basiert und nicht auf Unicode-Codepunkten.

{{EmbedInteractiveExample("pages/js/string-codepointat.html", "shorter")}}

## Syntax

```js-nolint
codePointAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des zurückzugebenden Zeichens. [In eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird zu 0 konvertiert.

### Rückgabewert

Eine nicht-negative Ganzzahl, die den Codepunkt-Wert des Zeichens an dem angegebenen `index` darstellt.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element an `index` ein führendes Surrogat von UTF-16 ist, wird der Codepunkt des Surrogat-_Paars_ zurückgegeben.
- Wenn das Element an `index` ein nachfolgendes Surrogat von UTF-16 ist, wird _nur_ die nachfolgende Surrogat-Codeeinheit zurückgegeben.

## Beschreibung

Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0` und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit einem Wert von `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich über zwei String-Indizes erstrecken kann. Für Informationen zu Unicode siehe [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### Verwendung von codePointAt()

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### Schleifen mit codePointAt()

Da bei der Verwendung von String-Indizes in Schleifen derselbe Codepunkt zweimal besucht wird (einmal für das führende Surrogat, einmal für das nachfolgende Surrogat), und `codePointAt()` beim zweiten Mal _nur_ das nachfolgende Surrogat zurückgibt, ist es besser, Schleifen nach Index zu vermeiden.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Stattdessen verwenden Sie eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)-Anweisung oder [streuen Sie den String](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), beide rufen den [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) des Strings auf, der nach Codepunkten iteriert. Dann verwenden Sie `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e', '1f471', '2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.codePointAt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
