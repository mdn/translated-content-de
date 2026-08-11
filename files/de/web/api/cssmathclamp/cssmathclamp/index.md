---
title: "CSSMathClamp: CSSMathClamp()-Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathClamp()`**-Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS-{{CSSXref("clamp", "clamp()")}}-Funktion darstellt.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das den minimalen Wert darstellt.
- `value`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das den bevorzugten Wert darstellt.
- `upper`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), das den maximalen Wert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn die Parameter widersprüchliche Einheitstypen haben.
    Zum Beispiel das Mischen eines Längenwertes mit einem Zeitwert.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathClamp`-Instanz aus drei Längen und liest dann die Eigenschaften `lower`, `value` und `upper` aus.

```js
const clamp = new CSSMathClamp(CSS.px(10), CSS.percent(50), CSS.px(500));

console.log(clamp.constructor.name); // "CSSMathClamp"
console.log(clamp.lower); // CSSUnitValue {value: 10, unit: "px"}
console.log(clamp.value); // CSSUnitValue {value: 50, unit: "percent"}
console.log(clamp.upper); // CSSUnitValue {value: 500, unit: "px"}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor löst einen `TypeError` aus, wenn die drei Argumente keinen kompatiblen Typ ergeben.
Im folgenden Code wird eine Länge mit einer Zeit gemischt und der Fehler wird protokolliert.

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
