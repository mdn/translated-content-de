---
title: "XRRenderState: inlineVerticalFieldOfView-Eigenschaft"
short-title: inlineVerticalFieldOfView
slug: Web/API/XRRenderState/inlineVerticalFieldOfView
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`inlineVerticalFieldOfView`**
Eigenschaft des [`XRRenderState`](/de/docs/Web/API/XRRenderState) Schnittstelle gibt das Standard-Vertikalfeld für `"inline"`-Sitzungen zurück und `null` für alle immersiven Sitzungen.

## Wert

Eine {{JSxRef("Number")}} für `"inline"`-Sitzungen, die das Standard-Sichtfeld darstellt, und `null` für immersive Sitzungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)
- [`navigator.xr.isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported)
