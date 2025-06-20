---
title: String.prototype.codePointAt()
short-title: codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`codePointAt()`** Methode von {{jsxref("String")}} Werten gibt eine nicht-negative Ganzzahl zurück, die den Unicode-Codepunkt-Wert des Zeichens an der angegebenen Indexposition darstellt. Beachten Sie, dass der Index weiterhin auf UTF-16 Code-Einheiten basiert, nicht auf Unicode-Codepunkten.

{{InteractiveExample("JavaScript Demo: String.prototype.codePointAt()", "shorter")}}

```js interactive-example
const icons = "☃★♲";

console.log(icons.codePointAt(1));
// Expected output: "9733"
```

## Syntax

```js-nolint
codePointAt(index)
```

### Parameter

- `index`
  - : Nullbasierter Index des zurückzugebenden Zeichens. [In eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine nicht-negative Ganzzahl, die den Codepunkt-Wert des Zeichens am angegebenen `index` darstellt.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element an `index` ein UTF-16 führendes Surrogat ist, gibt es den Codepunkt des Surrogat-_Paares_ zurück.
- Wenn das Element an `index` ein UTF-16 nachfolgendes Surrogat ist, gibt es _nur_ die Surrogat-Code-Einheit zurück.

## Beschreibung

Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jedes String-Index eine Code-Einheit mit einem Wert von `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudozahlen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich über zwei String-Indizes erstrecken kann. Weitere Informationen zu Unicode finden Sie unter [UTF-16 Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

Da die Verwendung von String-Indizes für Schleifen dazu führt, dass derselbe Codepunkt zweimal besucht wird (einmal für das führende Surrogat, einmal für das nachfolgende Surrogat), und das zweite Mal `codePointAt()` _nur_ das nachfolgende Surrogat zurückgibt, ist es besser, Schleifen nach Index zu vermeiden.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Verwenden Sie stattdessen eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) Schleife oder [spreaden Sie den String](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), die beide den [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) des Strings aufrufen, welcher nach Codepunkten iteriert. Verwenden Sie dann `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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
- [es-shims Polyfill von `String.prototype.codePointAt`](https://www.npmjs.com/package/string.prototype.codepointat)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
