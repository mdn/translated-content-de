---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`isNaN()`**-Funktion bestimmt, ob ein Wert {{jsxref("NaN")}} ist, indem er zuerst in eine Zahl umgewandelt wird, falls erforderlich. Da die Typumwandlung innerhalb der `isNaN()`-Funktion [überraschend](#beschreibung) sein kann, ziehen Sie möglicherweise {{jsxref("Number.isNaN()")}} vor.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntax

```js-nolint
isNaN(value)
```

### Parameter

- `value`
  - : Der zu testende Wert.

### Rückgabewert

`true`, wenn der gegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}} ist; ansonsten `false`.

## Beschreibung

`isNaN()` ist eine Funktions-Eigenschaft des globalen Objekts.

Für Zahlenwerte prüft `isNaN()`, ob die Zahl der Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) ist. Wenn das Argument der `isNaN()`-Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt und der resultierende Wert dann mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` für nicht-numerische Argumente kann verwirrend sein! Zum Beispiel wird ein leerer String zu 0 umgewandelt, während ein Boolean zu 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie werden nicht als `NaN` bewertet, daher gibt `isNaN()` `false` zurück. Deshalb beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitpunktwert {{jsxref("NaN")}}" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine zuverlässigere Methode, um zu testen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keine der beiden Lösungen ist von den falsch-positiven Aussagen betroffen, die die globale `isNaN()`-Funktion unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die Funktion `isNaN()` beantwortet die Frage "ist die Eingabe funktional äquivalent zu {{jsxref("NaN")}}, wenn sie in einem Zahlkontext verwendet wird". Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als sei es eine gültige Zahl, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` zu `NaN` umgewandelt, und die meisten arithmetischen Ausdrücke geben `NaN` zurück (weil `NaN` sich ausbreitet). Sie können dies zum Beispiel verwenden, um zu testen, ob ein Argument einer Funktion arithmetisch verarbeitbar ist (verwendbar "wie" eine Zahl) und Werte, die nicht zahlähnlich sind, zu handhaben, indem Sie einen Fehler werfen, einen Standardwert bereitstellen usw. Auf diese Weise können Sie eine Funktion haben, die die volle Vielseitigkeit von JavaScript nutzt, indem Sie Werte je nach Kontext implizit umwandeln.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl Zahladdition als auch Zeichenfolgenkonkatenation durch. Daher kann der `+`-Operator auch dann eine Zeichenfolge zurückgeben, wenn `isNaN()` für beide Operanden `false` zurückgibt, da er nicht als arithmetischer Operator verwendet wird. Zum Beispiel gibt `isNaN("1")` `false` zurück, aber `"1" + 1` gibt `"11"` zurück. Um sicherzustellen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu testen.

## Beispiele

Beachten Sie, wie `isNaN()` `true` für Werte zurückgibt, die nicht der Wert `NaN` sind, aber auch keine Zahlen sind:

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
