---
title: Number.MIN_VALUE
short-title: MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Number.MIN_VALUE`** statische Dateneigenschaft repräsentiert den kleinsten positiven numerischen Wert, der in JavaScript darstellbar ist.

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

2<sup>-1074</sup> oder `5E-324`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.MIN_VALUE` ist die kleinste positive Zahl (nicht die negativste Zahl), die innerhalb der Fließkommagenauigkeit dargestellt werden kann — mit anderen Worten, die Zahl, die 0 am nächsten liegt. Die ECMAScript-Spezifikation definiert keinen genauen Wert, den Implementierungen unterstützen müssen, sondern die Spezifikation besagt, _"muss der kleinste positive Wert ungleich Null sein, der tatsächlich durch die Implementierung dargestellt werden kann"_. Dies liegt daran, dass kleine IEEE-754 Fließkommazahlen [denormalisiert](https://en.wikipedia.org/wiki/Subnormal_number) sind, Implementierungen jedoch nicht verpflichtet sind, diese Darstellung zu unterstützen. In diesem Fall kann `Number.MIN_VALUE` größer sein.

In der Praxis ist ihr genauer Wert in üblichen Engines wie V8 (verwendet von Chrome, Edge, Node.js), SpiderMonkey (verwendet von Firefox) und JavaScriptCore (verwendet von Safari) 2<sup>-1074</sup> oder `5E-324`.

Da `MIN_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MIN_VALUE` und nicht als Eigenschaft eines Zahlenwerts.

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
