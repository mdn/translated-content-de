---
title: XRQuadLayer
slug: Web/API/XRQuadLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRQuadLayer`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die in der virtuellen Umgebung einen flachen rechteckigen Raum einnimmt. Ein `XRQuadLayer` hat keine Dicke. Es ist ein zweidimensionales Objekt, das in einem 3D-Raum positioniert und ausgerichtet ist. Die Position eines Quads bezieht sich auf das Zentrum des Quads. Nur die Vorderseite der Ebene ist sichtbar.

`XRQuadLayer` erfordert, dass die Funktion `layers` für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können dies in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um ein neues `XRQuadLayer` zu erstellen, rufen Sie entweder:

- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer) für eine WebGL-opake Textur-Quad-Ebene oder
- [`XRMediaBinding.createQuadLayer()`](/de/docs/Web/API/XRMediaBinding/createQuadLayer) für eine HTML-{{HTMLElement("video")}}-Wiedergabe-Quad-Ebene auf.

Um Ebenen auf das XR-Gerät zu präsentieren, fügen Sie sie dem `layers` Render-Status unter Verwendung von [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XRQuadLayer.height`](/de/docs/Web/API/XRQuadLayer/height) {{Experimental_Inline}}
  - : Repräsentiert die Höhe der Ebene in Metern.
- [`XRQuadLayer.space`](/de/docs/Web/API/XRQuadLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), das die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers darstellt.
- [`XRQuadLayer.transform`](/de/docs/Web/API/XRQuadLayer/transform) {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der den Versatz und die Ausrichtung relativ zu `space` darstellt.
- [`XRQuadLayer.width`](/de/docs/Web/API/XRQuadLayer/width) {{Experimental_Inline}}
  - : Repräsentiert die Breite der Ebene in Metern.

## Instanzmethoden

_Erbt Methoden von seinen Eltern, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XRQuadLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR Compositor die Ebene nicht mehr neu projizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsrahmen neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
