---
title: String.prototype.codePointAt()
short-title: codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`codePointAt()`** von {{jsxref("String")}}-Werten gibt eine nicht negative Ganzzahl zurück, die dem Unicode-Codepunkt des Zeichens entspricht, das am angegebenen Index beginnt. Beachten Sie, dass der Index weiterhin auf UTF-16-Codeeinheiten basiert, nicht auf Unicode-Codepunkten.

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
  - : Nullbasierter Index des zurückzugebenden Zeichens. Er wird [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine nicht negative Ganzzahl, die den Codepunktwert des Zeichens am angegebenen `index` darstellt.

- Liegt `index` außerhalb des Bereichs von `0` bis `str.length - 1`, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Ist das Element an `index` ein führendes UTF-16-Surrogat, wird der Codepunkt des Surrogat_paares_ zurückgegeben.
- Ist das Element an `index` ein nachfolgendes UTF-16-Surrogat, wird _nur_ die nachfolgende Surrogat-Codeeinheit zurückgegeben.

## Beschreibung

Die Zeichen in einem String werden von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit einem Wert von `0` bis `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudozeichen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich über zwei String-Indizes erstrecken kann. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

## Beispiele

### codePointAt() verwenden

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

### Mit codePointAt() iterieren

Wenn Sie mit String-Indizes iterieren, wird derselbe Codepunkt zweimal besucht (einmal beim führenden und einmal beim nachfolgenden Surrogat). Beim zweiten Mal gibt `codePointAt()` _nur_ das nachfolgende Surrogat zurück. Vermeiden Sie daher nach Möglichkeit eine Iteration über Indizes.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Verwenden Sie stattdessen eine [`for...of`-Anweisung](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) oder [verteilen Sie den String mit der Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Beide Möglichkeiten rufen [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) des Strings auf, wodurch über Codepunkte iteriert wird. Verwenden Sie anschließend `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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

- [Polyfill für `String.prototype.codePointAt` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.codePointAt` von es-shims](https://www.npmjs.com/package/string.prototype.codepointat)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
