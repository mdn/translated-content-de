---
title: "ScreenDetailed: label-Eigenschaft"
short-title: label
slug: Web/API/ScreenDetailed/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`**-Eigenschaft des schreibgeschützten [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Interfaces ist ein String, der ein beschreibendes Label für den Bildschirm bereitstellt, beispielsweise "Built-in Retina Display".

Dies ist nützlich, um eine Liste von Optionen zu erstellen, die dem Benutzer angezeigt werden, wenn Sie möchten, dass er einen Bildschirm auswählt, auf dem Inhalte dargestellt werden sollen.

## Wert

Ein String.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Return the label of the first screen
const screen1Label = screenDetails.screens[0].label;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
