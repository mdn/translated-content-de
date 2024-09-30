---
title: "XRSession: Eigenschaft interactionMode"
short-title: interactionMode
slug: Web/API/XRSession/interactionMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`interactionMode`** des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces
beschreibt den besten Raum (laut dem Benutzeragenten), in dem die Anwendung eine interaktive Benutzeroberfläche für die aktuelle Sitzung zeichnen sollte.

## Wert

Ein String, der den besten Raum (laut dem Benutzeragenten) beschreibt, in dem die Anwendung eine interaktive Benutzeroberfläche für die aktuelle Sitzung zeichnen sollte.

Mögliche Werte sind:

- `screen-space`
  - : Gibt an, dass die Benutzeroberfläche direkt auf dem Bildschirm ohne Projektion gezeichnet werden sollte. Dies ist typischerweise der Modus, der von Handheld-Geräten gemeldet wird.
- `world-space`
  - : Gibt an, dass die Benutzeroberfläche in der Welt, in einer gewissen Entfernung vom Benutzer gezeichnet werden sollte, sodass sie mit Controllern interagieren können. Dies ist typischerweise der Modus, der von kopfgetragenen Geräten gemeldet wird.

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
