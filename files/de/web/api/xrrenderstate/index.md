---
title: XRRenderState
slug: Web/API/XRRenderState
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR")}}{{SeeCompatTable}}

Das **`XRRenderState`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält konfigurierbare Werte, die beeinflussen, wie die von einer {{DOMxRef("XRSession")}} erzeugten Bilder zusammengesetzt werden. Diese Eigenschaften umfassen den Bereich der Entfernungen vom Betrachter, innerhalb dessen Inhalte gerendert werden sollen, das vertikale Sichtfeld (für Inline-Präsentationen) und eine Referenz auf die verwendete {{domxref("XRWebGLLayer")}} als Ziel für das Rendern der Szene, bevor sie auf dem oder den Displays des XR-Geräts angezeigt wird.

Wenn Sie Änderungen mit der `XRSession`-Methode {{domxref("XRSession.updateRenderState", "updateRenderState()")}} anwenden, treten die angegebenen Änderungen nach Abschluss des aktuellen Animationsrahmens, aber vor Beginn des nächsten, in Kraft.

## Instanz-Eigenschaften

- {{DOMxRef("XRRenderState.baseLayer")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die {{DOMxRef("XRWebGLLayer")}}, aus der das Kompositionssystem des Browsers das Bild für die XR-Sitzung bezieht.
- {{DOMxRef("XRRenderState.depthFar")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung, in Metern, der **Fernclip-Ebene** vom Betrachter. Die Fernclip-Ebene ist die Ebene, die parallel zur Anzeige verläuft und jenseits derer das Rendern der Szene nicht mehr stattfindet. Dies legt im Wesentlichen die maximale Entfernung fest, die der Benutzer sehen kann.
- {{DOMxRef("XRRenderState.depthNear")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung, in Metern, der **Nahclip-Ebene** vom Betrachter. Die Nahclip-Ebene ist die Ebene, die parallel zur Anzeige verläuft, an der das Rendern der Szene beginnt. Näher am Betrachter gelegene Teile der Szene werden nicht gezeichnet.
- {{DOMxRef("XRRenderState.inlineVerticalFieldOfView")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das standardmäßige vertikale Sichtfeld, definiert in Radianten, das verwendet wird, wenn die Sitzung im `Inline`-Modus ist. Für alle immersiven Sitzungen `null`.
- {{DOMxRef("XRRenderState.layers")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein geordnetes Array, das {{domxref("XRLayer")}}-Objekte enthält, die vom XR-Compositor angezeigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("XRSession.renderState")}}
- {{DOMxRef("XRSession.updateRenderState()")}}
- {{DOMxRef("XRSystem.requestSession", "navigator.xr.requestSession()")}}
