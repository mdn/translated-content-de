---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Objects")}}

Die **`isFinite()`** Funktion bestimmt, ob ein Wert endlich ist, indem der Wert bei Bedarf zunächst in eine Zahl umgewandelt wird. Eine endliche Zahl ist eine, die nicht {{jsxref("NaN")}} oder ±{{jsxref("Infinity")}} ist. Da die Umwandlung innerhalb der `isFinite()` Funktion [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, ziehen Sie es möglicherweise vor, {{jsxref("Number.isFinite()")}} zu verwenden.

{{InteractiveExample("JavaScript Demo: isFinite()")}}

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

`false`, wenn der gegebene Wert nach der [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) {{jsxref("NaN")}}, {{jsxref("Infinity")}} oder `-Infinity` ist; andernfalls `true`.

## Beschreibung

`isFinite()` ist eine Funktionseigenschaft des globalen Objekts.

Wenn das Argument der `isFinite()` Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zunächst in eine Zahl umgewandelt, und der resultierende Wert wird dann gegen `NaN` und ±Infinity verglichen. Dies ist genauso verwirrend wie das Verhalten von {{jsxref("isNaN")}} — zum Beispiel ist `isFinite("1")` `true`.

{{jsxref("Number.isFinite()")}} ist eine verlässlichere Methode, um zu testen, ob ein Wert eine endliche Zahl ist, da es für jegliche nicht-numerische Eingaben `false` zurückgibt.

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
