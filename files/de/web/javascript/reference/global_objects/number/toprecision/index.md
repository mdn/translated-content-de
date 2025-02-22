---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
l10n:
  sourceCommit: 5ff3bd2c92afc2f1038c976ec2fa14d22b2f602d
---

{{JSRef}}

Die Methode **`toPrecision()`** von {{jsxref("Number")}}-Werten gibt eine Zeichenkette zurück, die diese Zahl mit der angegebenen Anzahl von signifikanten Stellen darstellt.

{{InteractiveExample("JavaScript Demo: Number.toPrecision()")}}

```js interactive-example
function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(123.456));
// Expected output: "123.5"

console.log(precise(0.004));
// Expected output: "0.004000"

console.log(precise(1.23e5));
// Expected output: "1.230e+5"
```

## Syntax

```js-nolint
toPrecision()
toPrecision(precision)
```

### Parameter

- `precision` {{optional_inline}}
  - : Ein ganzzahliger Wert, der die Anzahl der signifikanten Stellen angibt.

### Rückgabewert

Eine Zeichenkette, die die gegebene Zahl unter Verwendung der angegebenen Anzahl von signifikanten Stellen darstellt. Wissenschaftliche Notation wird verwendet, wenn der Exponent größer oder gleich `precision` oder kleiner als -6 ist. Hat dasselbe Verhalten wie {{jsxref("Number.prototype.toString()")}}, wenn das `precision`-Argument weggelassen wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `precision` nicht zwischen `1` und `100` (einschließlich) liegt.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn diese Methode auf einem Objekt aufgerufen wird, das kein {{jsxref("Number")}} ist.

## Beispiele

### Verwendung von `toPrecision`

```js
// This number has exponent 0, so it will never use exponential notation
let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

// This number has exponent -4, so it will never use exponential notation
num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// This number has exponent 3, so it will use exponential notation if precision is less than 4
num = 1234.5;
console.log(num.toPrecision(1)); // '1e+3'
console.log(num.toPrecision(2)); // '1.2e+3'
console.log(num.toPrecision(6)); // '1234.50'

// This number has exponent -7, so it will always use exponential notation
num = 0.00000012345;
console.log(num.toPrecision(1)); // '1e-7'
console.log(num.toPrecision(10)); // '1.234500000e-7'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
