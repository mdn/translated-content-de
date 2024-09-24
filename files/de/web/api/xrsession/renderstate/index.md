---
title: "XRSession: renderState-Eigenschaft"
short-title: renderState
slug: Web/API/XRSession/renderState
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`renderState`**-Eigenschaft eines {{DOMxRef("XRSession")}}-Objekts gibt ein {{DOMxRef("XRRenderState")}}-Objekt zurück, das beschreibt, wie die Umgebung des Benutzers gerendert werden soll. Die bereitgestellten Informationen decken die minimalen und maximalen Entfernungen ab, in denen Objekte gerendert werden sollen, das vertikale Sichtfeld, das beim Rendern im `inline`-Sitzungsmodus verwendet werden soll, sowie die {{domxref("XRWebGLLayer")}}, in die für die Inline-Zusammensetzung gerendert werden soll.

Obwohl diese Eigenschaft schreibgeschützt ist, können Sie die {{domxref("XRSession")}}-Methode {{domxref("XRSession.updateRenderState", "updateRenderState()")}} aufrufen, um Änderungen vorzunehmen.

## Wert

Ein {{DOMxRef("XRRenderState")}}-Objekt, das beschreibt, wie die Szene gerendert werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
