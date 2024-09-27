---
title: "XRCompositionLayer: destroy()-Methode"
short-title: destroy()
slug: Web/API/XRCompositionLayer/destroy
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`destroy()`**-Methode der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Schnittstelle löscht die Verweise auf die zugrunde liegende Grafikbibliothek für die Ebene. Sie setzt zudem die Farbetexturen und Tiefenstencil-Texturarrays auf ein leeres Array.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Löschen einer Ebene

Rufen Sie `destroy()` auf, um eine Ebene zu löschen.

```js
myLayer.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
