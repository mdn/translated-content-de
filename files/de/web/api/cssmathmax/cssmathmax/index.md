---
title: "CSSMathMax: CSSMathMax()-Konstruktor"
short-title: CSSMathMax()
slug: Web/API/CSSMathMax/CSSMathMax
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathMax()`**-Konstruktor erstellt ein neues [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)-Objekt, das die CSS-{{CSSXref('max', 'max()')}}-Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathMax(arg1)
new CSSMathMax(arg1, arg2)
new CSSMathMax(arg1, arg2, /* …, */ argN)
```

### Parameter

- `arg1`, …, `argN`
  - : Eine Liste von Zahlen oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekten.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Argumente übergeben werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `arg1`, …, `argN` inkompatible Typen haben (zum Beispiel eine Mischung aus einem {{cssxref('length')}} und einem {{cssxref('angle')}}), sodass ein gemeinsamer Typ für den Vergleich nicht bestimmt werden kann.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathMax`-Instanz aus drei Werten und liest anschließend die `operator`- und `values`-Eigenschaften aus.

```js
const max = new CSSMathMax(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(max.constructor.name); // "CSSMathMax"
console.log(max.operator); // 'max'
console.log(max.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(max.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor wirft einen `TypeError`, wenn die Werte nicht auf einen kompatiblen Typ auflösbar sind. Im folgenden Code mischen wir eine Länge mit einer Zeit und protokollieren den Fehler.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathMax(CSS.px(10), CSS.s(2));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

### Leere Argumente

Der Konstruktor wirft einen `SyntaxError`, wenn er ohne Argumente aufgerufen wird.

```js
try {
  new CSSMathMax();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
