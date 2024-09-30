---
title: "XRSession: Eigenschaft renderState"
short-title: renderState
slug: Web/API/XRSession/renderState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die
_schreibgeschützte_ **`renderState`**-Eigenschaft eines
[`XRSession`](/de/docs/Web/API/XRSession)-Objekts gibt ein [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt zurück, das beschreibt, wie die Umgebung des Nutzers gerendert werden soll. Die bereitgestellten Informationen umfassen die minimale und maximale Entfernung, in der Objekte gerendert werden sollen, das vertikale Sichtfeld, das beim Rendern im `inline`-Sitzungsmodus verwendet werden soll, und die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), in die für die Inline-Komposition gerendert werden soll.

Obwohl diese Eigenschaft schreibgeschützt ist, können Sie die Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) von [`XRSession`](/de/docs/Web/API/XRSession) aufrufen, um Änderungen vorzunehmen.

## Wert

Ein [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Objekt, das beschreibt, wie die Szene gerendert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
