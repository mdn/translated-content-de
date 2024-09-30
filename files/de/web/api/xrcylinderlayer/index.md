---
title: XRCylinderLayer
slug: Web/API/XRCylinderLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCylinderLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Schicht, die im virtuellen Raum einen gebogenen rechteckigen Bereich einnimmt. Nur die Vorderseite der Schicht ist sichtbar.

`XRCylinderLayer` erfordert, dass das `layers`-Feature für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können es in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um eine neue `XRCylinderLayer` zu erstellen, rufen Sie entweder auf:

- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) für eine WebGL-opake Texturschicht oder
- [`XRMediaBinding.createCylinderLayer()`](/de/docs/Web/API/XRMediaBinding/createCylinderLayer) für eine HTML-{{HTMLElement("video")}}-Wiedergabeschicht.

Um Schichten auf das XR-Gerät zu präsentieren, fügen Sie diese mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) dem `layers`-Renderzustand hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XRCylinderLayer.aspectRatio`](/de/docs/Web/API/XRCylinderLayer/aspectRatio) {{Experimental_Inline}}
  - : Eine Zahl, die das Verhältnis des sichtbaren Abschnitts des Zylinders angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu dessen Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird.
- [`XRCylinderLayer.centralAngle`](/de/docs/Web/API/XRCylinderLayer/centralAngle) {{Experimental_Inline}}
  - : Eine Zahl, die den Winkel in Radiant des sichtbaren Abschnitts des Zylinders angibt.
- [`XRCylinderLayer.radius`](/de/docs/Web/API/XRCylinderLayer/radius) {{Experimental_Inline}}
  - : Eine Zahl, die den Radius des Zylinders angibt.
- [`XRCylinderLayer.space`](/de/docs/Web/API/XRCylinderLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), welches die räumliche Beziehung der Schicht mit der physischen Umgebung des Nutzers darstellt.
- [`XRCylinderLayer.transform`](/de/docs/Web/API/XRCylinderLayer/transform) {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), welches den Offset und die Orientierung relativ zu `space` darstellt.

## Instanz-Methoden

_Erbt Methoden von seinen Elternteilen, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XRCylinderLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XRCylinderLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Schicht verloren gehen oder wenn der XR-Kompositor die Schicht nicht mehr neu projizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Schicht im nächsten XR-Animationsframe neu zeichnen.

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
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
