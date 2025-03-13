---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`codePointAt()`** Methode von {{jsxref("String")}} Werten gibt eine nicht-negative ganze Zahl zurück, die den Unicode-Codepunktwert des Zeichens repräsentiert, das an dem angegebenen Index beginnt. Beachten Sie, dass der Index weiterhin auf UTF-16-Codeeinheiten basiert, nicht auf Unicode-Codepunkten.

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
  - : Nullbasierter Index des Zeichens, das zurückgegeben werden soll. [In eine ganze Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine nicht-negative ganze Zahl, die den Codepunktwert des Zeichens am angegebenen `index` repräsentiert.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element bei `index` ein UTF-16-leitender Surrogat ist, wird der Codepunkt des Surrogatpäärchens zurückgegeben.
- Wenn das Element bei `index` ein UTF-16-nachlaufender Surrogat ist, wird _nur_ die nachlaufende Surrogateinheit zurückgegeben.

## Beschreibung

Zeichen in einem String sind von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit dem Wert `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ 16-Bit Surrogat-Pseudowörter dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich über zwei String-Indizes erstrecken kann. Für Informationen über Unicode siehe [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

### Schleifennutzung mit codePointAt()

Da die Verwendung von String-Indizes für Schleifen dazu führt, dass derselbe Codepunkt zweimal besucht wird (einmal für das leitende Surrogat, einmal für das nachlaufende Surrogat), und beim zweiten Mal `codePointAt()` _nur_ das nachlaufende Surrogat zurückgibt, sollte vermieden werden, durch Indizes zu schleifen.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Stattdessen sollte eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) Anweisung verwendet werden oder der String [aufgeteilt](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) werden, beide rufen den [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) des Strings auf, der durch Codepunkte iteriert. Verwenden Sie dann `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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
