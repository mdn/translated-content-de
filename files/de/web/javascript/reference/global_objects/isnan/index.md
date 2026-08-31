---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: bbd7dfff9f34ca8cb851adfec767e2e17f24ea6e
---

Die **`isNaN()`**-Funktion bestimmt, ob ein Wert {{jsxref("NaN")}} ist, indem sie den Wert bei Bedarf zuerst in eine Zahl umwandelt. Da die Umwandlung innerhalb der `isNaN()`-Funktion [überraschend](#beschreibung) sein kann, ziehen Sie möglicherweise die Verwendung von {{jsxref("Number.isNaN()")}} vor.

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

Für Zahlenwerte prüft `isNaN()`, ob die Zahl der Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist. Wenn das Argument für die `isNaN()`-Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt und der resultierende Wert dann mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` bei nicht-numerischen Argumenten kann verwirrend sein! Zum Beispiel wird ein leerer String zu 0 umgewandelt, während ein Boolean zu 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie evaluieren nicht zu `NaN`, sodass `isNaN()` `false` zurückgibt. Daher beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitkommawert {{jsxref("NaN")}}" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine verlässlichere Methode, um zu prüfen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keine der Lösungen unterliegt den Fehlalarmen, die den globalen `isNaN()` unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die `isNaN()`-Funktion beantwortet die Frage "ist die Eingabe funktional gleichwertig mit {{jsxref("NaN")}}, wenn sie in einem Zahlenkontext verwendet wird". Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als wäre es eine gültige Zahl, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` zu `NaN` umgewandelt und die meisten arithmetischen Ausdrücke geben `NaN` zurück (da `NaN` sich ausbreitet). Dies können Sie verwenden, um beispielsweise zu prüfen, ob ein Argument einer Funktion arithmetisch verarbeitbar ist (also "wie" eine Zahl verwendbar) und Werte, die nicht zahlengleich sind, durch das Auslösen eines Fehlers, das Bereitstellen eines Standardwertes usw. zu behandeln. Auf diese Weise können Sie eine Funktion erstellen, die die volle Vielseitigkeit von JavaScript ausnutzt, indem sie Werte je nach Kontext implizit umwandelt.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl die Zahladdition als auch die String-Konkatenation durch. Daher kann der `+` Operator selbst dann einen String zurückgeben, wenn `isNaN()` für beide Operanden `false` zurückgibt, da er nicht als arithmetischer Operator verwendet wird. Zum Beispiel gibt `isNaN("1")` `false` zurück, aber `"1" + 1` ergibt `"11"`. Um sicherzustellen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu testen.

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
