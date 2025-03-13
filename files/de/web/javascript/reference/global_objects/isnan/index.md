---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`isNaN()`** Funktion bestimmt, ob ein Wert {{jsxref("NaN")}} ist, indem der Wert zunächst bei Bedarf in eine Zahl umgewandelt wird. Da die Umwandlung innerhalb der `isNaN()` Funktion [überraschend](#beschreibung) sein kann, ziehen Sie möglicherweise die Verwendung von {{jsxref("Number.isNaN()")}} vor.

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

`true`, wenn der gegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}} ist; andernfalls `false`.

## Beschreibung

`isNaN()` ist eine Funktions-Eigenschaft des globalen Objekts.

Für Zahlenwerte prüft `isNaN()`, ob die Zahl der Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist. Wenn das Argument der `isNaN()` Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt, und der resultierende Wert wird dann gegen {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` für nicht-numerische Argumente kann verwirrend sein! Zum Beispiel wird ein leerer String auf 0 umgewandelt, während ein boolean auf 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie werden nicht zu `NaN` ausgewertet, weshalb `isNaN()` `false` zurückgibt. Daher beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitkomma-{{jsxref("NaN")}}-Wert" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine verlässlichere Methode, um zu testen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keiner der Lösungen unterliegt den Fehlalarmen, die die globale `isNaN()` unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die `isNaN()` Funktion beantwortet die Frage „ist die Eingabe funktional gleichwertig mit {{jsxref("NaN")}}, wenn sie im Zahlkontext verwendet wird“. Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als wäre es eine gültige Zahl, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` in `NaN` umgewandelt und die meisten arithmetischen Ausdrücke ergeben dann `NaN` (da sich `NaN` fortpflanzt). Sie können dies verwenden, um beispielsweise zu testen, ob ein Argument für eine Funktion arithmetisch verarbeitbar ist (wie eine Zahl verwendbar ist), und Werte, die nicht zahlähnlich sind, durch Werfen eines Fehlers, Bereitstellen eines Standardwerts usw. behandeln. Auf diese Weise können Sie eine Funktion erstellen, die die volle Vielseitigkeit von JavaScript nutzt, indem sie Werte je nach Kontext implizit umwandelt.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl Zahlenaddition als auch Zeichenkettenverkettung durch. Daher kann auch, wenn `isNaN()` für beide Operanden `false` zurückgibt, der `+` Operator dennoch eine Zeichenkette zurückgeben, da er nicht als arithmetischer Operator verwendet wird. Zum Beispiel gibt `isNaN("1")` `false` zurück, aber `"1" + 1` ergibt `"11"`. Um sicherzustellen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu prüfen.

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
