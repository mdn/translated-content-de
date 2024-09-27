---
title: "HTMLSelectElement: type-Eigenschaft"
short-title: type
slug: Web/API/HTMLSelectElement/type
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

Die **`HTMLSelectElement.type`** schreibgeschützte Eigenschaft gibt den `type` des Formularsteuerelements zurück.

## Wert

Einer der folgenden:

- `"select-multiple"`, wenn mehrere Werte ausgewählt werden können.
- `"select-one"`, wenn nur ein Wert ausgewählt werden kann.

## Beispiele

```js
switch (select.type) {
  case "select-multiple":
    // Multiple values may be selected
    break;
  case "select-one":
    // Only one value may be selected
    break;
  default:
  // Non-standard value (or this isn't a SELECT element)
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("select")}} HTML-Element, das diese Schnittstelle implementiert.
