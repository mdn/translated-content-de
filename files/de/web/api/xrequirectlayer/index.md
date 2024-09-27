---
title: XREquirectLayer
slug: Web/API/XREquirectLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XREquirectLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Schicht, die equirektangulare kodierte Daten auf die Innenseite einer Kugel abbildet.

`XREquirectLayer` erfordert, dass das `layers`-Feature für die [`XRSession`](/de/docs/Web/API/XRSession) aktiviert ist. Sie können es in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) anfordern.

Um eine neue `XREquirectLayer` zu erstellen, rufen Sie entweder auf:

- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) für eine WebGL-opaque-Texturschicht oder
- [`XRMediaBinding.createEquirectLayer()`](/de/docs/Web/API/XRMediaBinding/createEquirectLayer) für eine HTML {{HTMLElement("video")}}-Wiedergabeschicht.

Um Schichten auf das XR-Gerät zu präsentieren, fügen Sie sie dem `layers`-Rendering-Status mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)._

- [`XREquirectLayer.centralHorizontalAngle`](/de/docs/Web/API/XREquirectLayer/centralHorizontalAngle) {{Experimental_Inline}}
  - : Eine Zahl, die den zentralen horizontalen Winkel in Radiant für die Kugel angibt.
- [`XREquirectLayer.lowerVerticalAngle`](/de/docs/Web/API/XREquirectLayer/lowerVerticalAngle) {{Experimental_Inline}}
  - : Eine Zahl, die den unteren vertikalen Winkel in Radiant für die Kugel angibt.
- [`XREquirectLayer.radius`](/de/docs/Web/API/XREquirectLayer/radius) {{Experimental_Inline}}
  - : Eine Zahl, die den Radius der Kugel angibt.
- [`XREquirectLayer.space`](/de/docs/Web/API/XREquirectLayer/space) {{Experimental_Inline}}
  - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace), das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers darstellt.
- [`XREquirectLayer.transform`](/de/docs/Web/API/XREquirectLayer/transform) {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der den Versatz und die Orientierung relativ zu `space` darstellt.
- [`XREquirectLayer.upperVerticalAngle`](/de/docs/Web/API/XREquirectLayer/upperVerticalAngle) {{Experimental_Inline}}
  - : Eine Zahl, die den oberen vertikalen Winkel in Radiant für die Kugel angibt.

## Instanz-Methoden

_Erbt Methoden von seinen Eltern, [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Ereignisse

- [`redraw`](/de/docs/Web/API/XREquirectLayer/redraw_event) {{Experimental_Inline}}
  - : Wird an das `XREquirectLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Schicht verloren gehen oder wenn der XR-Compositor die Schicht nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Schicht im nächsten XR-Animationsframe neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
- [`EventTarget`](/de/docs/Web/API/EventTarget)
- [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
