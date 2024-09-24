---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: e5f0e1070962ee4a595369218d85481542ec7ded
---

{{jsSidebar("Objects")}}

Die **`isFinite()`**-Funktion bestimmt, ob ein Wert endlich ist, indem sie den Wert gegebenenfalls zuerst in eine Zahl umwandelt. Eine endliche Zahl ist eine, die nicht {{jsxref("NaN")}} oder ±{{jsxref("Infinity")}} ist. Da die Zwangauswertung innerhalb der Funktion `isFinite()` [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, ziehen Sie eventuell die Verwendung von {{jsxref("Number.isFinite()")}} vor.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntax

```js-nolint
isFinite(value)
```

### Parameter

- `value`
  - : Der zu testende Wert.

### Rückgabewert

`false`, wenn der gegebene Wert nach [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}}, {{jsxref("Infinity")}} oder `-Infinity` ist; andernfalls `true`.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der Funktion `isFinite()` nicht vom Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt, und der resultierende Wert wird dann mit `NaN` und ±Infinity verglichen. Dies ist ebenso verwirrend wie das Verhalten von {{jsxref("isNaN")}} — zum Beispiel ist `isFinite("1")` `true`.

{{jsxref("Number.isFinite()")}} ist eine zuverlässigere Methode, um zu testen, ob ein Wert eine endliche Zahl ist, da sie für alle nicht-numerischen Eingaben `false` zurückgibt.

## Beispiele

### Verwendung von isFinite()

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Wäre mit der robusteren Methodik von Number.isFinite() false gewesen:
isFinite(null); // true
isFinite("0"); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
