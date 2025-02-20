---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Objects")}}

Die **`isFinite()`**-Funktion bestimmt, ob ein Wert endlich ist, indem sie den Wert zunächst, falls erforderlich, in eine Zahl umwandelt. Eine endliche Zahl ist eine Zahl, die weder {{jsxref("NaN")}} noch ±{{jsxref("Infinity")}} ist. Da die Umwandlung innerhalb von `isFinite()` [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, könnten Sie es bevorzugen, {{jsxref("Number.isFinite()")}} zu nutzen.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."
```

## Syntax

```js-nolint
isFinite(value)
```

### Parameter

- `value`
  - : Der zu testende Wert.

### Rückgabewert

`false`, wenn der gegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}}, {{jsxref("Infinity")}} oder `-Infinity` ist; ansonsten `true`.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der `isFinite()`-Funktion nicht von Typ [Number](/de/docs/Web/JavaScript/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt und der resultierende Wert dann mit `NaN` und ±Infinity verglichen. Dies ist ebenso verwirrend wie das Verhalten von {{jsxref("isNaN")}} — zum Beispiel ist `isFinite("1")` `true`.

{{jsxref("Number.isFinite()")}} ist eine zuverlässigere Methode, um zu testen, ob ein Wert eine endliche Zahl ist, da sie für Eingaben, die keine Zahl sind, `false` zurückgibt.

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
