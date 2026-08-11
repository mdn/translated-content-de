---
title: "CSSMathSum: CSSMathSum() Konstruktor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Der **`CSSMathSum()`** Konstruktor erstellt ein neues [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) Objekt, das die Summe der Argumente repräsentiert, die an ihn übergeben werden.

Numerische Argumente werden in [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Objekte mit der Einheit `"number"` eingeschlossen.
Alle Argumente werden als separate Elemente in seiner [`values`](/de/docs/Web/API/CSSMathSum/values) Eigenschaft gespeichert.

## Syntax

```js-nolint
new CSSMathSum(arg1)
new CSSMathSum(arg1, arg2)
new CSSMathSum(arg1, arg2, /* …, */ argN)
```

### Parameter

- `arg1`, …, `argN`
  - : Ein oder mehrere Zahlen oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekte.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn keine Argumente übergeben werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `arg1`, …, `argN` inkompatible Typen haben.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt eine `CSSMathSum` Instanz aus drei Werten und liest dann deren `operator` und `values` Eigenschaften aus.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.constructor.name); // "CSSMathSum"
console.log(sum.operator); // 'sum'
console.log(sum.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(sum.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### Leere Argumente

Der Konstruktor löst einen `SyntaxError` aus, wenn er ohne Argumente aufgerufen wird.

```js
try {
  new CSSMathSum();
} catch (e) {
  console.log(e instanceof DOMException); // true
  console.log(e.name); // "SyntaxError"
}
```

### Umgang mit inkompatiblen Typen

Der Konstruktor löst einen `TypeError` aus, wenn die Werte nicht zu einem kompatiblen Typen führen.
Im folgenden Code mischen wir eine Länge mit einer Zeit und protokollieren den Fehler.

```js
try {
  // Mixes a length (px) with a time (s): incompatible types
  new CSSMathSum(CSS.px(10), CSS.s(2));
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
