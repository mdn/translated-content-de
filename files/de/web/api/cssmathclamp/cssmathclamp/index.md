---
title: "CSSMathClamp: CSSMathClamp() Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathClamp()`**-Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS-Funktion {{CSSXref("clamp", "clamp()")}} darstellt.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Eine Zahl oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die den Mindestwert darstellt.
- `value`
  - : Eine Zahl oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die den bevorzugten Wert darstellt.
- `upper`
  - : Eine Zahl oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die den Höchstwert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn die Parameter widersprüchliche Einheitstypen haben.
    Zum Beispiel, wenn Parameter angegeben werden, die Längen- und Zeitgrenzen spezifizieren.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathClamp`-Instanz aus drei Längen und liest dann deren `lower`-, `value`- und `upper`-Eigenschaften aus.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor wirft einen `TypeError`, wenn die drei Argumente nicht zu einem kompatiblen Typ aufgelöst werden.
Im folgenden Code kombinieren wir eine Länge mit einer Zeit und protokollieren den Fehler.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathClamp(CSS.px(10), CSS.s(2), CSS.px(500));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
