---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die Funktion **`isNaN()`** bestimmt, ob ein Wert {{jsxref("NaN")}} ist, indem der Wert, falls nötig, zuerst in eine Zahl umgewandelt wird. Da die Umwandlung innerhalb der `isNaN()`-Funktion [überraschend](#beschreibung) sein kann, ziehen Sie möglicherweise vor, {{jsxref("Number.isNaN()")}} zu verwenden.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntax

```js-nolint
isNaN(value)
```

### Parameter

- `value`
  - : Der zu testende Wert.

### Rückgabewert

`true` falls der gegebene Wert {{jsxref("NaN")}} ist, nachdem er [in eine Zahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wurde; andernfalls `false`.

## Beschreibung

`isNaN()` ist eine Funktions-Eigenschaft des globalen Objekts.

Für Zahlenwerte prüft `isNaN()`, ob die Zahl der Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist. Wenn das Argument der `isNaN()`-Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt und der resultierende Wert dann mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` für nicht-numerische Argumente kann verwirrend sein! Ein leerer String wird zum Beispiel zu 0 umgewandelt, während ein Boolescher Wert zu 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie werden nicht zu `NaN`, daher gibt `isNaN()` `false` zurück. Daher beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitkommawert {{jsxref("NaN")}}" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine zuverlässigere Methode, um zu testen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keine der Lösungen unterliegt den Fehlalarmen, die das globale `isNaN()` unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die `isNaN()`-Funktion beantwortet die Frage "ist die Eingabe funktional äquivalent zu {{jsxref("NaN")}}, wenn sie in einem numerischen Kontext verwendet wird". Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als ob es sich um eine gültige Zahl handelt, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` auf `NaN` umgewandelt, wodurch die meisten arithmetischen Ausdrücke `NaN` zurückgeben (weil `NaN` propagiert). Dies können Sie beispielsweise nutzen, um zu testen, ob ein Argument einer Funktion arithmetisch verarbeitbar ist (wie eine Zahl verwendet werden kann) und Werte, die nicht nummernähnlich sind, durch Auslösen eines Fehlers zu behandeln, einen Standardwert bereitzustellen usw. Auf diese Weise können Sie eine Funktion haben, die die gesamte Vielseitigkeit von JavaScript ausnutzt, indem sie Werte je nach Kontext implizit konvertiert.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl die Zahlenaddition als auch die Zeichenfolgenverkettung aus. Daher kann der `+` Operator selbst dann einen String zurückgeben, wenn `isNaN()` für beide Operanden `false` zurückgibt, weil er nicht als arithmetischer Operator verwendet wird. Zum Beispiel gibt `isNaN("1")` `false` zurück, aber `"1" + 1` ergibt `"11"`. Um sicherzustellen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert zur Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu testen.

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
