---
title: "CSSMathMin: CSSMathMin() Konstruktor"
short-title: CSSMathMin()
slug: Web/API/CSSMathMin/CSSMathMin
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathMin()`** Konstruktor erstellt ein neues [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)-Objekt, das die CSS {{CSSXref('min','min()')}} Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathMin(arg1)
new CSSMathMin(arg1, arg2)
new CSSMathMin(arg1, arg2, /* …, */ argN)
```

### Parameter

- `arg1`, …, `argN`
  - : Eine Liste von Zahlen oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Argumente übergeben werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `arg1`, …, `argN` inkompatible Typen haben (zum Beispiel das Mischen einer {{cssxref('length')}} mit einem {{cssxref('angle')}}), sodass kein gemeinsamer Typ für den Vergleich bestimmt werden kann.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine Instanz von `CSSMathMin` aus drei Werten und liest dann dessen `operator`- und `values`-Eigenschaften aus.

```js
const min = new CSSMathMin(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(min.constructor.name); // "CSSMathMin"
console.log(min.operator); // 'min'
console.log(min.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(min.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor löst einen `TypeError` aus, wenn die Werte nicht zu einem kompatiblen Typen aufgelöst werden können. Im folgenden Code mischen wir eine Länge mit einer Zeit und protokollieren den Fehler.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathMin(CSS.px(10), CSS.s(2));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

### Leere Argumente

Der Konstruktor löst einen `SyntaxError` aus, wenn er ohne Argumente aufgerufen wird.

```js
try {
  new CSSMathMin();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
