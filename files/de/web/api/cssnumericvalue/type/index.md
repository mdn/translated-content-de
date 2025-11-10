---
title: "CSSNumericValue: type() Methode"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: a17590438d18d8423e853bc7d50354e21dc1afa5
---

{{APIRef("CSS Typed OM")}}

Die **`type()`** Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle gibt den Typ von `CSSNumericValue` zurück, einer von `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

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

Für jede Eigenschaft außer `percentHint` ist der Wert eine ganze Zahl, die die Potenz dieser Einheit darstellt. Zum Beispiel wird ein numerischer Wert von `calc(1px * 1em)` `{ length: 2 }` zurückgeben.

Die `percentHint`-Eigenschaft ist ein String, der angibt, auf welchen Werttyp der Prozentwert angewendet wird. Der Stringwert entspricht den Typ-Eigenschaften: `"length"`, `"angle"`, `"time"`, `"frequency"`, `"resolution"`, `"flex"`, oder `"percent"`. Er zeigt an, dass der Typ tatsächlich einen Prozentsatz enthält, dieser Prozentsatz jedoch letztendlich auf den angedeuteten Basistyp aufgelöst wird und daher durch diesen im Typ ersetzt wurde.

### Ausnahmen

Keine.

## Beispiele

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
