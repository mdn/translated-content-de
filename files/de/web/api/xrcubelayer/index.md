---
title: XRCubeLayer
slug: Web/API/XRCubeLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRCubeLayer`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Schicht, die direkt von einem [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und es auf die inneren Flächen eines Würfels projiziert.

`XRCubeLayer` erfordert, dass die Funktion `layers` für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können es in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um ein neues `XRCubeLayer` zu erstellen, rufen Sie [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer) auf.

Um Schichten zum XR-Gerät zu präsentieren, fügen Sie sie dem `layers`-Renderzustand mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XRCubeLayer.space`](/de/docs/Web/API/XRCubeLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers darstellt.
- [`XRCubeLayer.orientation`](/de/docs/Web/API/XRCubeLayer/orientation) {{Experimental_Inline}}
  - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Orientierung relativ zur `space`-Eigenschaft darstellt.

## Instanzmethoden

_Erbt Methoden von seinen Elternteilen, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XRCubeLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XRCubeLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Schicht verloren gehen oder wenn der XR-Kompositor die Schicht nicht mehr neu projizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Schicht im nächsten XR-Animationsrahmen neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
