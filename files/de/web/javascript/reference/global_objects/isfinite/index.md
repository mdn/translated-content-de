---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: e5f0e1070962ee4a595369218d85481542ec7ded
---

{{jsSidebar("Objects")}}

Die **`isFinite()`**-Funktion bestimmt, ob ein Wert endlich ist, indem sie den Wert bei Bedarf zuerst in eine Zahl umwandelt. Eine endliche Zahl ist eine, die weder {{jsxref("NaN")}} noch ±{{jsxref("Infinity")}} ist. Da die Umwandlung innerhalb der `isFinite()`-Funktion [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, ziehen Sie möglicherweise die Verwendung von {{jsxref("Number.isFinite()")}} vor.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntax

```js-nolint
isFinite(value)
```

### Parameter

- `value`
  - : Der zu testende Wert.

### Rückgabewert

`false`, wenn der angegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}}, {{jsxref("Infinity")}} oder `-Infinity` ist; andernfalls `true`.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der `isFinite()`-Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zunächst in eine Zahl umgewandelt, und der resultierende Wert wird anschließend mit `NaN` und ±Infinity verglichen. Dies ist ebenso verwirrend wie das Verhalten von {{jsxref("isNaN")}} — zum Beispiel ist `isFinite("1")` `true`.

{{jsxref("Number.isFinite()")}} ist eine zuverlässigere Methode, um zu testen, ob ein Wert eine endliche Zahl ist, da es für jede Eingabe, die keine Zahl ist, `false` zurückgibt.

## Beispiele

### Verwendung von isFinite()

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Would've been false with the more robust Number.isFinite():
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
