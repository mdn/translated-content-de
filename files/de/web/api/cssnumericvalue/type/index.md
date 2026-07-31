---
title: "CSSNumericValue: type()-Methode"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`type()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den Typ von `CSSNumericValue` zurück, einer von `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

## Syntax

```js-nolint
type()
```

### Parameter

Keine.

### Rückgabewert

Ein `CSSNumericType`-Wörterbuch, das die folgenden Eigenschaften enthält:

- `length`
- `angle`
- `time`
- `frequency`
- `resolution`
- `flex`
- `percent`
- `percentHint`

Für jede Eigenschaft außer `percentHint` ist der Wert eine ganze Zahl, die die Potenz dieser Einheit darstellt. Ein numerischer Wert von `calc(1px * 1em)` wird beispielsweise `{ length: 2 }` zurückgeben.

Die `percentHint`-Eigenschaft ist ein String, der den Typ des Wertes angibt, auf den der Prozentsatz angewendet wird. Der String-Wert ist derselbe wie die Typ-Eigenschaften: `"length"`, `"angle"`, `"time"`, `"frequency"`, `"resolution"`, `"flex"` oder `"percent"`. Er gibt an, dass der Typ tatsächlich einen Prozentsatz enthält, dieser Prozentsatz sich jedoch letztendlich in den angedeuteten Basistyp auflöst und daher im Typ durch diesen ersetzt wurde.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Returns an object with the structure: {length: 1, percentHint: "length"}
let cssNumericType = mathSum.type();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
