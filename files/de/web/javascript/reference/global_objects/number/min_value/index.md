---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Number.MIN_VALUE`** repräsentiert den kleinsten positiven numerischen Wert, der in JavaScript dargestellt werden kann.

{{InteractiveExample("JavaScript Demo: Number.MIN_VALUE")}}

```js interactive-example
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Process as 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// Expected output: 5e-324

console.log(divide(5e-324, 2));
// Expected output: "Process as 0"
```

## Wert

2<sup>-1074</sup>, oder `5E-324`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.MIN_VALUE` ist die kleinste positive Zahl (nicht die negativste Zahl), die innerhalb der Gleitkomma-Präzision dargestellt werden kann – mit anderen Worten, die Zahl, die am nächsten zu 0 liegt. Die ECMAScript-Spezifikation definiert keinen genauen Wert, den Implementierungen unterstützen müssen – stattdessen heißt es in der Spezifikation: _„muss der kleinste nicht-null positive Wert sein, der tatsächlich durch die Implementierung dargestellt werden kann“_. Dies liegt daran, dass kleine IEEE-754-Gleitkommazahlen [denormalisiert](https://en.wikipedia.org/wiki/Subnormal_number) sind, aber Implementierungen sind nicht verpflichtet, diese Darstellung zu unterstützen. In solchen Fällen kann `Number.MIN_VALUE` größer sein.

In der Praxis beträgt sein genauer Wert in gängigen Engines wie V8 (verwendet von Chrome, Edge, Node.js), SpiderMonkey (verwendet von Firefox) und JavaScriptCore (verwendet von Safari) 2<sup>-1074</sup>, oder `5E-324`.

Da `MIN_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, wird sie immer als `Number.MIN_VALUE` verwendet und nicht als Eigenschaft eines Zahlenwertes.

## Beispiele

### Verwendung von MIN_VALUE

Der folgende Code teilt zwei numerische Werte. Wenn das Ergebnis größer oder gleich `MIN_VALUE` ist, wird die Funktion `func1` aufgerufen; andernfalls wird die Funktion `func2` aufgerufen.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
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

- {{jsxref("Number.MAX_VALUE")}}
