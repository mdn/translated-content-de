---
title: XRRenderState
slug: Web/API/XRRenderState
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR")}}{{SeeCompatTable}}

Die **`XRRenderState`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält konfigurierbare Werte, die beeinflussen, wie das von einer [`XRSession`](/de/docs/Web/API/XRSession) generierte Bildmaterial zusammengesetzt wird. Diese Eigenschaften umfassen den Entfernungsbereich vom Betrachter, innerhalb dessen der Inhalt gerendert werden soll, das vertikale Sichtfeld (für inline-Präsentationen) und eine Referenz auf die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die als Ziel für das Rendering der Szene verwendet wird, bevor es auf dem oder den Displays des XR-Geräts präsentiert wird.

Wenn Sie Änderungen mittels der `XRSession`-Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) anwenden, treten die angegebenen Änderungen nach Abschluss des aktuellen Animationsrahmens in Kraft, jedoch vor Beginn des nächsten.

## Instanz-Eigenschaften

- [`XRRenderState.baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), aus der das Compositing-System des Browsers das Bild für die XR-Sitzung bezieht.
- [`XRRenderState.depthFar`](/de/docs/Web/API/XRRenderState/depthFar) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung der **fernen Clipping-Ebene** vom Betrachter in Metern. Die ferne Clipping-Ebene ist die Ebene, die parallel zum Display verläuft und jenseits derer das Rendering der Szene nicht mehr erfolgt. Diese gibt im Wesentlichen die maximale Entfernung an, die der Benutzer sehen kann.
- [`XRRenderState.depthNear`](/de/docs/Web/API/XRRenderState/depthNear) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung der **nahen Clipping-Ebene** vom Betrachter in Metern. Die nahe Clipping-Ebene ist die Ebene, die parallel zum Display verläuft und bei der das Rendering der Szene beginnt. Näher am Betrachter liegende Teile der Szene werden nicht gezeichnet.
- [`XRRenderState.inlineVerticalFieldOfView`](/de/docs/Web/API/XRRenderState/inlineVerticalFieldOfView) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das standardmäßige vertikale Sichtfeld, in Bogenmaß definiert, das verwendet wird, wenn sich die Sitzung im `inline`-Modus befindet. Für alle immersiven Sitzungen ist dies `null`.
- [`XRRenderState.layers`](/de/docs/Web/API/XRRenderState/layers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein geordnetes Array, das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekte enthält, die vom XR-Kompositor angezeigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.renderState`](/de/docs/Web/API/XRSession/renderState)
- [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)
