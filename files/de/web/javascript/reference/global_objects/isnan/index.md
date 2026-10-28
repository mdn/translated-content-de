---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: 52aca3c51ce0ff04036a13d4db471c9844d07b00
---

Die Funktion **`isNaN()`** ermittelt, ob ein Wert {{jsxref("NaN")}} ist. Falls nötig, wandelt sie den Wert zuerst in eine Zahl um. Da die Typumwandlung innerhalb von `isNaN()` [überraschend sein kann](#beschreibung), sollten Sie gegebenenfalls {{jsxref("Number.isNaN()")}} verwenden.

{{InteractiveExample("JavaScript Demo: isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
```

## Syntax

```js-nolint
isNaN(value)
```

### Parameter

- `value`
  - : Der zu prüfende Wert.

### Rückgabewert

`true`, wenn der angegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}} ist.

## Beschreibung

`isNaN()` ist eine Funktionseigenschaft des globalen Objekts.

Bei Zahlenwerten prüft `isNaN()`, ob die Zahl den Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hat. Wenn das Argument der Funktion `isNaN()` nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zuerst [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Anschließend wird das Ergebnis mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` bei nicht numerischen Argumenten kann verwirrend sein! Zum Beispiel:

- [`null`](/de/docs/Web/JavaScript/Guide/Data_structures#null_type) wird in 0 umgewandelt.
- Ein leerer String wird in 0 umgewandelt.
- Ein boolescher Wert wird in 0 oder 1 umgewandelt.

Diese Werte sind intuitiv betrachtet „keine Zahlen“, ergeben aber nicht `NaN`. Deshalb gibt `isNaN()` `false` zurück. `isNaN()` beantwortet somit weder die Frage „Ist die Eingabe der Gleitkommawert {{jsxref("NaN")}}?“ noch die Frage „Ist die Eingabe keine Zahl?“.

{{jsxref("Number.isNaN()")}} ist eine zuverlässigere Methode, um zu prüfen, ob ein Wert der Zahlenwert `NaN` ist. Alternativ können Sie den Ausdruck `x !== x` verwenden. Keine dieser beiden Möglichkeiten liefert die falsch positiven Ergebnisse, die das globale `isNaN()` unzuverlässig machen. Um zu prüfen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die Funktion `isNaN()` beantwortet die Frage: „Ist die Eingabe bei Verwendung in einem numerischen Kontext funktional gleichwertig mit {{jsxref("NaN")}}?“ Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als wäre es eine gültige Zahl, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` in `NaN` umgewandelt. Dadurch liefern die meisten arithmetischen Ausdrücke ebenfalls `NaN` zurück, da sich `NaN` fortpflanzt. So können Sie beispielsweise prüfen, ob ein Argument einer Funktion arithmetisch verarbeitet werden kann, also „wie“ eine Zahl verwendbar ist. Werte, die sich nicht wie Zahlen verwenden lassen, können Sie dann behandeln, indem Sie etwa einen Fehler auslösen oder einen Standardwert bereitstellen. Auf diese Weise kann eine Funktion die Vielseitigkeit nutzen, die JavaScript durch die implizite, vom Kontext abhängige Umwandlung von Werten bietet.

> [!NOTE]
> Der [`+`-Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) dient sowohl zur Addition von Zahlen als auch zur Verkettung von Strings. Daher kann er auch dann einen String zurückgeben, wenn `isNaN()` für beide Operanden `false` zurückgibt: In diesem Fall wird er nicht als arithmetischer Operator verwendet. Beispielsweise gibt `isNaN("1")` `false` zurück, aber `"1" + 1` ergibt `"11"`. Um sicherzugehen, dass Sie mit Zahlen arbeiten, [wandeln Sie den Wert in eine Zahl um](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und prüfen Sie das Ergebnis mit {{jsxref("Number.isNaN()")}}.

## Beispiele

Beachten Sie, dass `isNaN()` für Werte `true` zurückgibt, die nicht den Wert `NaN` haben, aber auch keine Zahlen sind:

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Strings
isNaN("37"); // false: "37" is converted to the number 37 which is not NaN
isNaN("37.37"); // false: "37.37" is converted to the number 37.37 which is not NaN
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") is NaN
isNaN(""); // false: the empty string is converted to 0 which is not NaN
isNaN(" "); // false: a string with spaces is converted to 0 which is not NaN

// Dates
isNaN(new Date()); // false; Date objects can be converted to a number (timestamp)
isNaN(new Date().toString()); // true; the string representation of a Date object cannot be parsed as a number

// Arrays
isNaN([]); // false; the primitive representation is "", which converts to the number 0
isNaN([1]); // false; the primitive representation is "1"
isNaN([1, 2]); // true; the primitive representation is "1,2", which cannot be parsed as number
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
