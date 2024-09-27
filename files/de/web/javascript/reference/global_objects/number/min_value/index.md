---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Number.MIN_VALUE`** repräsentiert den kleinsten positiven numerischen Wert, der in JavaScript darstellbar ist.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}

## Wert

2<sup>-1074</sup> oder `5E-324`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`Number.MIN_VALUE` ist die kleinste positive Zahl (nicht die negativste Zahl), die innerhalb der Fließkommapräzision dargestellt werden kann — mit anderen Worten, die Zahl, die am nächsten an 0 liegt. Die ECMAScript-Spezifikation definiert keinen genauen Wert, der von Implementierungen unterstützt werden muss — stattdessen heißt es in der Spezifikation: _"muss der kleinste nicht-null positive Wert sein, der tatsächlich durch die Implementierung dargestellt werden kann"_. Dies liegt daran, dass kleine IEEE-754-Fließkommazahlen [denormalisiert](https://en.wikipedia.org/wiki/Subnormal_number) sind, aber Implementierungen sind nicht verpflichtet, diese Darstellung zu unterstützen, in welchem Fall `Number.MIN_VALUE` möglicherweise größer ist.

In der Praxis beträgt der genaue Wert in verbreiteten Engines wie V8 (verwendet von Chrome, Edge, Node.js), SpiderMonkey (verwendet von Firefox) und JavaScriptCore (verwendet von Safari) 2<sup>-1074</sup> oder `5E-324`.

Da `MIN_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie sie immer als `Number.MIN_VALUE` und nicht als eine Eigenschaft eines Zahlenwertes.

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
