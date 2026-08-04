---
title: "CSSNumericValue: type()-Methode"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`type()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den Typ von `CSSNumericValue` zurück, einer der folgenden: `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint` oder `time`.

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

Für jede Eigenschaft außer `percentHint` ist der Wert eine Ganzzahl, die die Potenz dieser Einheit darstellt. Zum Beispiel wird ein numerischer Wert von `calc(1px * 1em)` `{ length: 2 }` zurückgeben.

Die Eigenschaft `percentHint` ist ein String, der den Typ des Wertes angibt, auf den sich das Prozent bezieht. Der Stringwert ist derselbe wie die Typproperties: `"length"`, `"angle"`, `"time"`, `"frequency"`, `"resolution"`, `"flex"` oder `"percent"`. Er gibt an, dass der Typ tatsächlich einen Prozentsatz hält, dieser Prozentsatz aber auf den angedeuteten Basistyp aufgelöst wird und daher durch diesen im Typ ersetzt wurde.

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
