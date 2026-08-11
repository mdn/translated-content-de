---
title: "CSSMathNegate: CSSMathNegate() Konstruktor"
short-title: CSSMathNegate()
slug: Web/API/CSSMathNegate/CSSMathNegate
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathNegate()`**-Konstruktor erstellt ein neues [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate)-Objekt, das den übergebenen Wert negiert.

## Syntax

```js-nolint
new CSSMathNegate(arg)
```

### Parameter

- `arg`
  - : Eine Zahl oder [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue), die den zu negierenden Wert darstellt.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

Der folgende Code erstellt ein `CSSMathNegate`-Objekt aus einer Länge, gibt dann den Namen des Konstruktors, `value` und die Serialisierung des Objekts (von [`toString()`](/de/docs/Web/API/CSSStyleValue/toString)) aus.

```js
const negated = new CSSMathNegate(CSS.px(10));

console.log(negated.constructor.name); // "CSSMathNegate"
console.log(negated.value); // CSSUnitValue {value: 10, unit: "px"}
console.log(negated.toString()); // "calc(-10px)"
```

Beachten Sie, dass wenn eine einfache Zahl an `arg` übergeben wird, der `value` auf einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` berichtigt wird:

```js
const negatedNumber = new CSSMathNegate(4);

console.log(negatedNumber.value); // CSSUnitValue {value: 4, unit: "number"}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
