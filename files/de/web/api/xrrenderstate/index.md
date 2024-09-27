---
title: XRRenderState
slug: Web/API/XRRenderState
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR")}}{{SeeCompatTable}}

Das **`XRRenderState`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) enthält konfigurierbare Werte, die beeinflussen, wie die vom [`XRSession`](/de/docs/Web/API/XRSession) erzeugten Bilder zusammengesetzt werden. Diese Eigenschaften umfassen den Entfernungsbereich vom Betrachter, innerhalb dessen Inhalte gerendert werden sollen, das vertikale Sichtfeld (für Inline-Präsentationen) und einen Verweis auf den [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), der als Ziel für das Rendering der Szene verwendet wird, bevor es auf dem Display oder den Displays des XR-Geräts präsentiert wird.

Wenn Sie Änderungen mithilfe der `XRSession`-Methode [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) anwenden, treten die angegebenen Änderungen nach dem Abschluss des aktuellen Animationsrahmens in Kraft, jedoch bevor der nächste beginnt.

## Instanzeigenschaften

- [`XRRenderState.baseLayer`](/de/docs/Web/API/XRRenderState/baseLayer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), von dem das Compositing-System des Browsers das Bild für die XR-Sitzung erhält.
- [`XRRenderState.depthFar`](/de/docs/Web/API/XRRenderState/depthFar) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung, in Metern, der **weiten Clipping-Ebene** vom Betrachter. Die weite Clipping-Ebene ist die Ebene, die parallel zur Anzeige verläuft, jenseits derer das Rendern der Szene nicht mehr stattfindet. Dies gibt im Wesentlichen die maximale Entfernung an, die der Benutzer sehen kann.
- [`XRRenderState.depthNear`](/de/docs/Web/API/XRRenderState/depthNear) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Entfernung, in Metern, der **nahen Clipping-Ebene** vom Betrachter. Die nahe Clipping-Ebene ist die Ebene, parallel zur Anzeige, bei der das Rendern der Szene beginnt. Alles, was näher am Betrachter ist, wird nicht gezeichnet.
- [`XRRenderState.inlineVerticalFieldOfView`](/de/docs/Web/API/XRRenderState/inlineVerticalFieldOfView) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Standard-vertikale Sichtfeld, definiert in Radiant, das verwendet wird, wenn die Sitzung im `inline`-Modus ist. `null` für alle immersiven Sitzungen.
- [`XRRenderState.layers`](/de/docs/Web/API/XRRenderState/layers) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein geordnetes Array, das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekte enthält, die vom XR-Compositor angezeigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.renderState`](/de/docs/Web/API/XRSession/renderState)
- [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState)
- [`navigator.xr.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)
