---
title: XRCylinderLayer
slug: Web/API/XRCylinderLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCylinderLayer`** Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die einen gekrümmten rechteckigen Raum in der virtuellen Umgebung einnimmt. Nur die Vorderseite der Ebene ist sichtbar.

`XRCylinderLayer` erfordert, dass das `layers` Feature für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können es in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um eine neue `XRCylinderLayer` zu erstellen, rufen Sie entweder:

- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) für eine WebGL undurchsichtige Texturschicht auf, oder
- [`XRMediaBinding.createCylinderLayer()`](/de/docs/Web/API/XRMediaBinding/createCylinderLayer) für eine HTML {{HTMLElement("video")}} Wiedergabeschicht.

Um Ebenen dem XR-Gerät zu präsentieren, fügen Sie sie dem `layers` Renderzustand unter Verwendung von [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XRCylinderLayer.aspectRatio`](/de/docs/Web/API/XRCylinderLayer/aspectRatio) {{Experimental_Inline}}
  - : Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu seiner Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird.
- [`XRCylinderLayer.centralAngle`](/de/docs/Web/API/XRCylinderLayer/centralAngle) {{Experimental_Inline}}
  - : Eine Zahl, die den Winkel in Radiant des sichtbaren Abschnitts des Zylinders angibt.
- [`XRCylinderLayer.radius`](/de/docs/Web/API/XRCylinderLayer/radius) {{Experimental_Inline}}
  - : Eine Zahl, die den Radius des Zylinders angibt.
- [`XRCylinderLayer.space`](/de/docs/Web/API/XRCylinderLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers darstellt.
- [`XRCylinderLayer.transform`](/de/docs/Web/API/XRCylinderLayer/transform) {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die Verschiebung und Orientierung relativ zu `space` darstellt.

## Instanzmethoden

_Erbt Methoden von seinen Eltern, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XRCylinderLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XRCylinderLayer` Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

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
