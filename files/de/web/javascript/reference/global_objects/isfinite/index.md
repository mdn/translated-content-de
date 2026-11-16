---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 0c3c464abb1422b0534a5e3f5e81e9bbae13544c
---

Die Funktion **`isFinite()`** bestimmt, ob ein Wert endlich ist. Falls nötig, wandelt sie den Wert zuvor in eine Zahl um. Eine endliche Zahl ist weder {{jsxref("NaN")}} noch ±{{jsxref("Infinity")}}. Da die Typumwandlung innerhalb der Funktion `isFinite()` [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, sollten Sie gegebenenfalls {{jsxref("Number.isFinite()")}} verwenden.

{{InteractiveExample("JavaScript Demo: isFinite()")}}

```js interactive-example
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!"

console.log(div(1));
// Expected output: "Number is NOT Infinity."
```

## Syntax

```js-nolint
isFinite(value)
```

### Parameter

- `value`
  - : Der zu prüfende Wert.

### Rückgabewert

`true`, außer wenn der angegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) entweder {{jsxref("Infinity")}}, `-Infinity` oder {{jsxref("NaN")}} ist.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der Funktion `isFinite()` nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zunächst in eine Zahl umgewandelt. Anschließend wird das Ergebnis mit `NaN` und ±Infinity verglichen. Das ist ebenso verwirrend wie das Verhalten von {{jsxref("isNaN")}} – beispielsweise ist `isFinite("1")` gleich `true`.

{{jsxref("Number.isFinite()")}} ist eine zuverlässigere Möglichkeit, zu prüfen, ob ein Wert eine endliche Zahl ist, da die Methode für jeden Wert, der keine Zahl ist, `false` zurückgibt.

## Beispiele

### isFinite() verwenden

```js
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Following would've been false with the more robust Number.isFinite():

isFinite(null); // true, because null is converted to 0
isFinite(""); // true, because empty string is converted to 0
isFinite("123"); // true, because string can be parsed as a number
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
