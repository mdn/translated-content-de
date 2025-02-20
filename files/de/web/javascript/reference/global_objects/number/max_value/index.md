---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Number.MAX_VALUE`** statische Dateneigenschaft repräsentiert den maximal darstellbaren numerischen Wert in JavaScript.

{{InteractiveExample("JavaScript Demo: Number.MAX_VALUE")}}

```js interactive-example
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Process as Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// Expected output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// Expected output: "Process as Infinity"
```

## Wert

2<sup>1024</sup> - 2<sup>971</sup>, oder ungefähr `1.7976931348623157E+308`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Werte, die größer sind als `MAX_VALUE`, werden als {{jsxref("Infinity")}} dargestellt und verlieren ihren tatsächlichen Wert.

Da `MAX_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MAX_VALUE`, anstatt als eine Eigenschaft eines Zahlenwertes.

## Beispiele

### Verwendung von MAX_VALUE

Der folgende Code multipliziert zwei numerische Werte. Wenn das Ergebnis kleiner oder gleich `MAX_VALUE` ist, wird die Funktion `func1` aufgerufen; andernfalls wird die Funktion `func2` aufgerufen.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}
