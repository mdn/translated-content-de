---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}} {{Deprecated_Header}}

Die **`substr()`**-Methode von {{jsxref("String")}}-Werten gibt einen Abschnitt dieses Strings zurück, beginnend bei dem angegebenen Index und verlängert um eine bestimmte Anzahl von Zeichen danach.

> **Note:** `substr()` ist nicht Teil der Haupt-ECMAScript-Spezifikation — es ist definiert in [Anhang B: Zusätzliche ECMAScript-Features für Webbrowser](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html), welches normativ optional für Nicht-Browser-Laufzeitumgebungen ist. Daher wird empfohlen, die standardisierten Methoden [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring) und [`String.prototype.slice()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/slice) zu verwenden, um den Code so plattformübergreifend wie möglich zu gestalten. Die Seite zu [`String.prototype.substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr) enthält einige Vergleiche zwischen den drei Methoden.

{{InteractiveExample("JavaScript Demo: String.substr()")}}

```js interactive-example
const str = "Mozilla";

console.log(str.substr(1, 2));
// Expected output: "oz"

console.log(str.substr(2));
// Expected output: "zilla"
```

## Syntax

```js-nolint
substr(start)
substr(start, length)
```

### Parameter

- `start`
  - : Der Index des ersten Zeichens, das in die zurückgegebene Teilzeichenkette einbezogen werden soll.
- `length` {{optional_inline}}
  - : Die Anzahl der zu extrahierenden Zeichen.

### Rückgabewert

Ein neuer String, der den angegebenen Teil des ursprünglichen Strings enthält.

## Beschreibung

Die `substr()`-Methode eines Strings extrahiert `length` Zeichen aus dem String, beginnend beim Index `start`.

- Wenn `start >= str.length`, wird ein leerer String zurückgegeben.
- Wenn `start < 0` ist, beginnt der Index von hinten am Ende des Strings zu zählen. Formaler ausgedrückt beginnt in diesem Fall die Teilzeichenkette bei `max(start + str.length, 0)`.
- Wenn `start` weggelassen oder {{jsxref("undefined")}} ist, wird es als `0` behandelt.
- Wenn `length` weggelassen oder {{jsxref("undefined")}} ist oder wenn `start + length >= str.length`, extrahiert `substr()` Zeichen bis zum Ende des Strings.
- Wenn `length < 0` ist, wird ein leerer String zurückgegeben.
- Sowohl `start` als auch `length` werden, wenn sie den Wert {{jsxref("NaN")}} haben, als `0` behandelt.

Obwohl Sie ermutigt werden, die Verwendung von `substr()` zu vermeiden, gibt es keinen trivialen Weg, `substr()` in Legacy-Code auf entweder `slice()` oder `substring()` zu migrieren, ohne im Wesentlichen ein Polyfill für `substr()` zu schreiben. Zum Beispiel geben `str.substr(a, l)`, `str.slice(a, a + l)` und `str.substring(a, a + l)` unterschiedliche Ergebnisse zurück, wenn `str = "01234", a = 1, l = -2` — `substr()` gibt einen leeren String zurück, `slice()` gibt `"123"` zurück, während `substring()` `"0"` zurückgibt. Der tatsächliche Refactoringpfad hängt von der Kenntnis des Bereichs von `a` und `l` ab.

## Beispiele

### Verwendung von substr()

<!-- cSpell:ignore ozilla -->

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.substr` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
