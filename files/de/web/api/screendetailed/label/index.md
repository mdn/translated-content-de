---
title: "ScreenDetailed: label-Eigenschaft"
short-title: label
slug: Web/API/ScreenDetailed/label
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`label`** schreibgeschützte Eigenschaft des {{domxref("ScreenDetailed")}}-Interfaces ist ein String, der eine beschreibende Bezeichnung für den Bildschirm bereitstellt, zum Beispiel "Eingebautes Retina-Display".

Dies ist nützlich für die Erstellung einer Liste von Optionen, die dem Benutzer angezeigt werden soll, wenn Sie ihn auffordern möchten, einen Bildschirm zur Anzeige von Inhalten auszuwählen.

## Wert

Ein String.

## Beispiele

```js
const screenDetails = await window.getScreenDetails();

// Gibt das Label des ersten Bildschirms zurück
const screen1Label = screenDetails.screens[0].label;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
