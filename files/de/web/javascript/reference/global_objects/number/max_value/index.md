---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
l10n:
  sourceCommit: 295116d4250781c6cab89ac3cc5df11e2632391f
---

{{JSRef}}

Die statische Daten-Eigenschaft **`Number.MAX_VALUE`** repräsentiert den größten numerischen Wert, der in JavaScript darstellbar ist.

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}

## Wert

2<sup>1024</sup> - 2<sup>971</sup>, oder ungefähr `1.7976931348623157E+308`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Werte, die größer als `MAX_VALUE` sind, werden als {{jsxref("Infinity")}} dargestellt und verlieren ihren tatsächlichen Wert.

Da `MAX_VALUE` eine statische Eigenschaft von {{jsxref("Number")}} ist, verwenden Sie es immer als `Number.MAX_VALUE` und nicht als Eigenschaft eines Zahlenwertes.

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
