---
title: "CSSMathClamp: CSSMathClamp()-Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathClamp()`**-Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS-{{CSSXref("clamp", "clamp()")}}-Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die bzw. der den Mindestwert repräsentiert.
- `value`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die bzw. der den bevorzugten Wert repräsentiert.
- `upper`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die bzw. der den Höchstwert repräsentiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Parameter nicht miteinander kompatible Einheitentypen haben, beispielsweise wenn ein Längenwert mit einem Zeitwert kombiniert wird.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathClamp`-Instanz aus drei Längenwerten und liest anschließend ihre Eigenschaften `lower`, `value` und `upper` aus.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor löst einen `TypeError` aus, wenn die drei Argumente keinen kompatiblen Typ ergeben.
Im folgenden Code kombinieren wir einen Längenwert mit einem Zeitwert und protokollieren den Fehler.

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
