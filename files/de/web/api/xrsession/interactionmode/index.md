---
title: "XRSession: interactionMode-Eigenschaft"
short-title: interactionMode
slug: Web/API/XRSession/interactionMode
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`interactionMode`** der {{domxref("XRSession")}}-Schnittstelle beschreibt den besten Raum (laut Benutzeragent), in dem die Anwendung eine interaktive Benutzeroberfläche für die aktuelle Sitzung zeichnen sollte.

## Wert

Ein String, der den besten Raum (laut Benutzeragent) beschreibt, in dem die Anwendung eine interaktive Benutzeroberfläche für die aktuelle Sitzung zeichnen sollte.

Mögliche Werte sind:

- `screen-space`
  - : Gibt an, dass die UI direkt auf den Bildschirm ohne Projektion gezeichnet werden sollte. Dies ist typischerweise der Modus, der von Handheld-Geräten gemeldet wird.
- `world-space`
  - : Gibt an, dass die UI in der Welt gezeichnet werden sollte, in einiger Entfernung vom Benutzer, sodass sie mit Controllern interagieren können. Dies ist typischerweise der Modus, der von Kopf getragenen Geräten gemeldet wird.

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
