---
title: "HTMLSelectElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLSelectElement/type
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.type`** Leseeigenschaft gibt den `type` des Formularsteuerungselements zurück.

## Wert

Einer der folgenden:

- `"select-multiple"`, wenn mehrere Werte ausgewählt werden können.
- `"select-one"`, wenn nur ein Wert ausgewählt werden kann.

## Beispiele

```js
switch (select.type) {
  case "select-multiple":
    // Mehrere Werte können ausgewählt werden
    break;
  case "select-one":
    // Nur ein Wert kann ausgewählt werden
    break;
  default:
  // Nicht-standardmäßiger Wert (oder dies ist kein SELECT-Element)
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das diese Schnittstelle implementiert.
