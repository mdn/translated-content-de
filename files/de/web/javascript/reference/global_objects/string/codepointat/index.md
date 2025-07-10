---
title: String.prototype.codePointAt()
short-title: codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`codePointAt()`**-Methode von {{jsxref("String")}} Werten gibt eine nicht negative Ganzzahl zurück, die der Unicode-Codepunktwert des Zeichens ist, das an dem angegebenen Index beginnt. Beachten Sie, dass der Index immer noch auf UTF-16-Codeeinheiten basiert, nicht auf Unicode-Codepunkten.

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
  - : Nullbasierter Index des zurückzugebenden Zeichens. [In eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 konvertiert.

### Rückgabewert

Eine nicht negative Ganzzahl, die den Codepunktwert des Zeichens an der angegebenen `index` repräsentiert.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element am `index` ein UTF-16 führendes Surrogat ist, gibt es den Codepunkt des Surrogatpaars zurück.
- Wenn das Element am `index` ein UTF-16 nachfolgendes Surrogat ist, gibt es nur die nachfolgende Surrogat-Codeeinheit zurück.

## Beschreibung

Zeichen in einem String sind von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit dem Wert `0` – `65535`. Höhere Codepunkte werden durch ein Paar von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich möglicherweise über zwei String-Indizes erstreckt. Für Informationen zu Unicode, siehe [UTF-16-Zeichen, Unicode-Codepunkte und Grapheme-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

Da die Verwendung von String-Indizes für Schleifen dazu führt, dass derselbe Codepunkt zweimal besucht wird (einmal für das führende Surrogat, einmal für das nachfolgende Surrogat), und beim zweiten Mal gibt `codePointAt()` nur das nachfolgende Surrogat zurück, ist es besser, Schleifen nach Index zu vermeiden.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Verwenden Sie stattdessen eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)-Anweisung oder [spreaden Sie den String](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), die beide den String's [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) aufrufen, der nach Codepunkten iteriert. Verwenden Sie dann `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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
- [es-shims-Polyfill von `String.prototype.codePointAt`](https://www.npmjs.com/package/string.prototype.codepointat)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
