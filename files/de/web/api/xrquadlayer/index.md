---
title: XRQuadLayer
slug: Web/API/XRQuadLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRQuadLayer`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die einen flachen rechteckigen Raum in der virtuellen Umgebung einnimmt. Ein `XRQuadLayer` hat keine Dicke. Es ist ein zweidimensionales Objekt, das im 3D-Raum positioniert und ausgerichtet wird. Die Position eines Quads bezieht sich auf das Zentrum des Quads. Nur die Vorderseite der Ebene ist sichtbar.

`XRQuadLayer` erfordert, dass das `layers`-Feature für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können es in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um ein neues `XRQuadLayer` zu erstellen, rufen Sie entweder auf:

- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer) für eine WebGL opake Textur-Quadratschicht, oder
- [`XRMediaBinding.createQuadLayer()`](/de/docs/Web/API/XRMediaBinding/createQuadLayer) für eine HTML-{{HTMLElement("video")}}-Wiedergabe-Quadratschicht.

Um Ebenen an das XR-Gerät zu präsentieren, fügen Sie sie dem `layers`-Renderzustand mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XRQuadLayer.height`](/de/docs/Web/API/XRQuadLayer/height) {{Experimental_Inline}}
  - : Repräsentiert die Höhe der Ebene in Metern.
- [`XRQuadLayer.space`](/de/docs/Web/API/XRQuadLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), der die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers darstellt.
- [`XRQuadLayer.transform`](/de/docs/Web/API/XRQuadLayer/transform) {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der den Offset und die Ausrichtung relativ zu `space` darstellt.
- [`XRQuadLayer.width`](/de/docs/Web/API/XRQuadLayer/width) {{Experimental_Inline}}
  - : Repräsentiert die Breite der Ebene in Metern.

## Instanz-Methoden

_Erbt Methoden von seinen Elternteilen, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XRQuadLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr neu projizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsrahmen neu zeichnen.

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
