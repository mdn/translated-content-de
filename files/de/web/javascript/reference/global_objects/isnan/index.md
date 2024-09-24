---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`isNaN()`** Funktion bestimmt, ob ein Wert {{jsxref("NaN")}} ist; dazu wird der Wert zunächst bei Bedarf in eine Zahl umgewandelt. Da die Zwangsumwandlung innerhalb der `isNaN()` Funktion [überraschend](#beschreibung) sein kann, ziehen Sie möglicherweise die Verwendung von {{jsxref("Number.isNaN()")}} vor.

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

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

`isNaN()` ist eine Funktionseigenschaft des globalen Objekts.

Für Zahlenwerte prüft `isNaN()`, ob die Zahl den Wert [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN) hat. Wenn das Argument der `isNaN()` Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt, und der resultierende Wert wird dann mit {{jsxref("NaN")}} verglichen.

Dieses Verhalten von `isNaN()` bei nicht-numerischen Argumenten kann verwirrend sein! Zum Beispiel wird ein leerer String zu 0 umgewandelt, während ein Boolean zu 0 oder 1 umgewandelt wird; beide Werte sind intuitiv "keine Zahlen", aber sie ergeben nicht `NaN`, sodass `isNaN()` `false` zurückgibt. Daher beantwortet `isNaN()` weder die Frage "ist die Eingabe der Gleitkommawert {{jsxref("NaN")}}" noch die Frage "ist die Eingabe keine Zahl".

{{jsxref("Number.isNaN()")}} ist eine verlässlichere Methode, um zu testen, ob ein Wert der Zahlenwert `NaN` ist oder nicht. Alternativ kann der Ausdruck `x !== x` verwendet werden, und keine der Lösungen ist anfällig für die falsch positiven Werte, die die global `isNaN()` unzuverlässig machen. Um zu testen, ob ein Wert eine Zahl ist, verwenden Sie [`typeof x === "number"`](/de/docs/Web/JavaScript/Reference/Operators/typeof).

Die `isNaN()` Funktion beantwortet die Frage "ist die Eingabe funktional gleichwertig zu {{jsxref("NaN")}}, wenn sie in einem Zahlkontext verwendet wird". Wenn `isNaN(x)` `false` zurückgibt, können Sie `x` in einem arithmetischen Ausdruck verwenden, als ob es eine gültige Zahl ist, die nicht `NaN` ist. Wenn `isNaN(x)` `true` zurückgibt, wird `x` zu `NaN` umgewandelt und die meisten arithmetischen Ausdrücke ergeben dann `NaN` (da `NaN` sich fortpflanzt). Sie können dies beispielsweise verwenden, um zu testen, ob ein Argument einer Funktion arithmetisch verarbeitbar ist (verwendbar "wie" eine Zahl), und Werte, die nicht zahlenähnlich sind, behandeln, indem Sie einen Fehler auslösen, einen Standardwert bereitstellen, usw. Auf diese Weise können Sie eine Funktion haben, die die volle Vielseitigkeit von JavaScript nutzt, indem sie Werte abhängig vom Kontext implizit umwandelt.

> [!NOTE]
> Der [`+` Operator](/de/docs/Web/JavaScript/Reference/Operators/Addition) führt sowohl Zahladdition als auch String-Verkettung durch. Daher kann der `+` Operator auch dann einen String zurückgeben, wenn `isNaN()` für beide Operanden `false` ergibt, weil er nicht als arithmetischer Operator verwendet wird. Zum Beispiel ergibt `isNaN("1")` `false`, aber `"1" + 1` ergibt `"11"`. Um sicherzugehen, dass Sie mit Zahlen arbeiten, [zwingen Sie den Wert zu einer Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und verwenden Sie {{jsxref("Number.isNaN()")}}, um das Ergebnis zu testen.

## Beispiele

Beachten Sie, wie `isNaN()` `true` für Werte zurückgibt, die nicht der Wert `NaN`, aber dennoch keine Zahlen sind:

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// Strings
isNaN("37"); // false: "37" wird in die Zahl 37 umgewandelt, die nicht NaN ist
isNaN("37.37"); // false: "37.37" wird in die Zahl 37.37 umgewandelt, die nicht NaN ist
isNaN("37,5"); // true
isNaN("123ABC"); // true: Number("123ABC") ist NaN
isNaN(""); // false: der leere String wird in 0 umgewandelt, was nicht NaN ist
isNaN(" "); // false: ein String mit Leerzeichen wird in 0 umgewandelt, was nicht NaN ist

// Dates
isNaN(new Date()); // false; Date-Objekte können in eine Zahl (Timestamp) umgewandelt werden
isNaN(new Date().toString()); // true; die String-Repräsentation eines Date-Objekts kann nicht als Zahl geparst werden

// Arrays
isNaN([]); // false; die primitive Repräsentation ist "", die in die Zahl 0 umgewandelt wird
isNaN([1]); // false; die primitive Repräsentation ist "1"
isNaN([1, 2]); // true; die primitive Repräsentation ist "1,2", die nicht als Zahl geparst werden kann
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
