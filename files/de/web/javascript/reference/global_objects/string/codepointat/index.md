---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`codePointAt()`** Methode von {{jsxref("String")}} Werten gibt eine nicht-negative Ganzzahl zurück, die den Unicode-Codepunktwert des Zeichens, das am angegebenen Index beginnt, darstellt. Beachten Sie, dass der Index immer noch auf UTF-16-Code-Einheiten basiert und nicht auf Unicode-Code-Punkten.

{{InteractiveExample("JavaScript Demo: String.codePointAt()", "shorter")}}

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
  - : Nullbasierter Index des zurückzugebenden Zeichens. [Konvertiert zu einer Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 konvertiert.

### Rückgabewert

Eine nicht-negative Ganzzahl, die den Codepunktwert des Zeichens am angegebenen `index` darstellt.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element bei `index` ein UTF-16-Leadsurrogat ist, wird der Codepunkt des Surrogat-Paars zurückgegeben.
- Wenn das Element bei `index` ein UTF-16-Trailing-Surrogat ist, wird _nur_ die Trailing-Surrogat-Code-Einheit zurückgegeben.

## Beschreibung

Zeichen in einem String sind von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Code-Einheit mit dem Wert `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der möglicherweise zwei String-Indizes umfasst. Für Informationen zu Unicode, siehe [UTF-16-Zeichen, Unicode-Codepunkte und Graphem-Cluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

Da das Verwenden von String-Indizes beim Schleifen dazu führt, dass derselbe Codepunkt zweimal besucht wird (einmal für das Leadsurrogat, einmal für das Trailing-Surrogat), und `codePointAt()` beim zweiten Mal _nur_ das Trailing-Surrogat zurückgibt, ist es besser, Schleifen nach Index zu vermeiden.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Stattdessen sollten Sie eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) Anweisung oder [Breiten Sie den String aus](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) verwenden, die beide den String-Iterator [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) aufrufen, der nach Codepunkten iteriert. Dann verwenden Sie `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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
