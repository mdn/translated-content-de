---
title: "XRSession: interactionMode-Eigenschaft"
short-title: interactionMode
slug: Web/API/XRSession/interactionMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`interactionMode`** des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces beschreibt den besten Raum (laut des Benutzeragenten) für die Anwendung, um eine interaktive Benutzeroberfläche für die aktuelle Sitzung zu zeichnen.

## Wert

Ein String, der den besten Raum (laut des Benutzeragenten) für die Anwendung beschreibt, um eine interaktive Benutzeroberfläche für die aktuelle Sitzung zu zeichnen.

Mögliche Werte sind:

- `screen-space`
  - : Gibt an, dass die Benutzeroberfläche direkt auf dem Bildschirm ohne Projektion gezeichnet werden sollte. Dies ist typischerweise der Modus, der von Handheld-Geräten gemeldet wird.
- `world-space`
  - : Gibt an, dass die Benutzeroberfläche in der Welt gezeichnet werden sollte, etwas entfernt vom Benutzer, damit sie mit Controllern interagieren können. Dies ist typischerweise der Modus, der von tragbaren Geräten gemeldet wird.

## Beispiele

```js
if (xrSession.interactionMode === "world-space") {
  // draw UI in the world
} else {
  // draw UI directly to the screen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
