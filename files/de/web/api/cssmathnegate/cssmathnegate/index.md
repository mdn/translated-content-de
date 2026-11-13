---
title: "CSSMathNegate: Konstruktor CSSMathNegate()"
short-title: CSSMathNegate()
slug: Web/API/CSSMathNegate/CSSMathNegate
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der Konstruktor **`CSSMathNegate()`** erstellt ein neues [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)-Objekt, das den übergebenen Wert negiert.

## Syntax

```js-nolint
new CSSMathNegate(arg)
```

### Parameter

- `arg`
  - : Eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die bzw. der den zu negierenden Wert darstellt.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt aus einer Länge ein `CSSMathNegate`-Objekt und gibt anschließend den Namen des Konstruktors, `value` und die serialisierte Darstellung des Objekts (aus [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)) aus.

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.constructor.name); // "CSSMathNegate"
console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
console.log(negated.toString()); // "calc(-10px)"
```

Wenn eine einfache Zahl an `arg` übergeben wird, wird sie in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt:

```js
const negatedNumber = new CSSMathNegate(4);

console.log(negatedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
