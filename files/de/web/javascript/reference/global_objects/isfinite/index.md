---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`isFinite()`** Funktion bestimmt, ob ein Wert endlich ist, indem er, falls nötig, zuerst in eine Zahl umgewandelt wird. Eine endliche Zahl ist eine, die weder {{jsxref("NaN")}} noch ±{{jsxref("Infinity")}} ist. Da die Zwangsumwandlung in der `isFinite()` Funktion [überraschend](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN#description) sein kann, ziehen Sie möglicherweise {{jsxref("Number.isFinite()")}} vor.

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
  - : Der Wert, der getestet werden soll.

### Rückgabewert

`false`, wenn der gegebene Wert, nach [Umwandlung in eine Zahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), {{jsxref("NaN")}}, {{jsxref("Infinity")}} oder `-Infinity` ist; andernfalls `true`.

## Beschreibung

`isFinite()` ist eine Funktions-Eigenschaft des globalen Objekts.

Wenn das Argument der `isFinite()` Funktion nicht vom Typ [Number](/de/docs/Web/JavaScript/Guide/Data_structures#number_type) ist, wird der Wert zuerst in eine Zahl umgewandelt und der resultierende Wert dann mit `NaN` und ±Infinity verglichen. Dies ist genauso verwirrend wie das Verhalten von {{jsxref("isNaN")}} — zum Beispiel ist `isFinite("1")` `true`.

{{jsxref("Number.isFinite()")}} ist eine verlässlichere Methode, um zu testen, ob ein Wert eine endliche Zahl ist, da es für jegliche nicht numerische Eingaben `false` zurückgibt.

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
