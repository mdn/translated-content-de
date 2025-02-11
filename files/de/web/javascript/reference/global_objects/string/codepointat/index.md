---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`codePointAt()`** von {{jsxref("String")}}-Werten gibt eine nicht-negative Ganzzahl zurück, die den Unicode-Codepunkt-Wert des Zeichens darstellt, das an der angegebenen Indexposition beginnt. Beachten Sie, dass der Index weiterhin auf UTF-16-Code-Einheiten basiert, nicht auf Unicode-Codepunkten.

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
  - : Nullbasierter Index des Zeichens, das zurückgegeben werden soll. [Zu einer Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) — `undefined` wird in 0 umgewandelt.

### Rückgabewert

Eine nicht-negative Ganzzahl, die den Codepunkt-Wert des Zeichens an der angegebenen `index`-Position darstellt.

- Wenn `index` außerhalb des Bereichs von `0` – `str.length - 1` liegt, gibt `codePointAt()` {{jsxref("undefined")}} zurück.
- Wenn das Element an der Position `index` ein führendes UTF-16-Surrogat ist, wird der Codepunkt des Surrogat-_Paars_ zurückgegeben.
- Wenn das Element an der Position `index` ein nachfolgendes UTF-16-Surrogat ist, wird _nur_ die Code-Einheit des nachfolgenden Surrogats zurückgegeben.

## Beschreibung

Zeichen in einem String sind von links nach rechts indiziert. Der Index des ersten Zeichens ist `0`, und der Index des letzten Zeichens in einem String namens `str` ist `str.length - 1`.

Unicode-Codepunkte reichen von `0` bis `1114111` (`0x10FFFF`). In UTF-16 ist jeder String-Index eine Codeeinheit mit einem Wert von `0` – `65535`. Höhere Codepunkte werden durch _ein Paar_ von 16-Bit-Surrogat-Pseudo-Zeichen dargestellt. Daher gibt `codePointAt()` einen Codepunkt zurück, der sich möglicherweise über zwei String-Indizes erstreckt. Weitere Informationen zu Unicode finden Sie unter [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters).

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

Da das Verwenden von String-Indizes für Schleifen dazu führt, dass derselbe Codepunkt zweimal besucht wird (einmal für das führende Surrogat und einmal für das nachfolgende Surrogat), und `codePointAt()` beim zweiten Mal _nur_ das nachfolgende Surrogat zurückgibt, ist es besser, Schleifen mit Indizes zu vermeiden.

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e', 'dc0e', '1f471', 'dc71', '2764'
```

Stattdessen verwenden Sie eine [`for...of`](/de/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)-Schleife oder [spalten Sie den String auf](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), wodurch der [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) des Strings aufgerufen wird, der nach Codepunkten iteriert. Verwenden Sie dann `codePointAt(0)`, um den Codepunkt jedes Elements zu erhalten.

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
