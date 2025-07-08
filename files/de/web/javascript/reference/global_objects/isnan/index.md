---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`isNaN()`**-Funktion bestimmt, ob ein Wert {{jsxref("NaN")}} ist, und konvertiert den Wert bei Bedarf zunächst in eine Zahl. Da die Umwandlung innerhalb der `isNaN()`-Funktion [überraschend](#beschreibung) sein kann, bevorzugen Sie möglicherweise die Verwendung von {{jsxref("Number.isNaN()")}}.

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
  - : Der zu testende Wert.

### Rückgabewert

`true`, wenn der gegebene Wert {{jsxref("NaN")}} ist, nachdem er [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wurde; andernfalls `false`.

## Beschreibung

`isNaN()` ist eine Funktions-Eigenschaft des globalen Objekts.

Für Zahlwerte prüft `isNaN()`, ob die Zahl der Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist. Wenn das Argument der `isNaN()`-Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt, und der resultierende Wert wird dann mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` bei nicht-numerischen Argumenten kann verwirrend sein! Ein leerer String wird beispielsweise zu 0 umgewandelt, während ein boolean zu 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie ergeben kein `NaN`, sodass `isNaN()` `false` zurückgibt. Daher beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitkommawert {{jsxref("NaN")}}" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine zuverlässigere Möglichkeit, um zu testen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keine der Lösungen unterliegt den falsch-positiven Ergebnissen, die die globale Funktion `isNaN()` unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die `isNaN()`-Funktion beantwortet die Frage "ist die Eingabe funktional gleichwertig mit {{jsxref("NaN")}}, wenn sie im Zahlenkontext verwendet wird". Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als ob es sich um eine gültige Zahl handelt, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` zu `NaN` umgewandelt und die meisten arithmetischen Ausdrücke geben `NaN` zurück (weil sich `NaN` fortpflanzt). Sie können dies beispielsweise verwenden, um zu testen, ob ein Argument einer Funktion arithmetisch verarbeitbar ist (nutzbar "wie" eine Zahl) und Werte zu behandeln, die nicht wie eine Zahl aussehen, indem Sie einen Fehler werfen, einen Standardwert bereitstellen usw. Auf diese Weise können Sie eine Funktion haben, die die gesamte Vielseitigkeit von JavaScript nutzt, indem sie die Werte je nach Kontext implizit konvertiert.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl Zahlenaddition als auch Zeichenkettenverkettung durch. Daher kann der `+` Operator selbst dann, wenn `isNaN()` für beide Operanden `false` zurückgibt, eine Zeichenkette zurückgeben, da er nicht als arithmetischer Operator verwendet wird. Zum Beispiel gibt `isNaN("1")` `false` zurück, aber `"1" + 1` gibt `"11"` zurück. Um sicherzustellen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu testen.

## Beispiele

Beachten Sie, wie `isNaN()` `true` für Werte zurückgibt, die nicht der Wert `NaN` sind, aber auch keine Zahlen:

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
isNaN([]); // false; the primitive representation is "", which coverts to the number 0
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
