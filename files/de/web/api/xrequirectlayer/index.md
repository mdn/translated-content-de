---
title: XREquirectLayer
slug: Web/API/XREquirectLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XREquirectLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die equirektangular codierte Daten auf die Innenseite einer Kugel abbildet.

`XREquirectLayer` erfordert, dass das `layers`-Merkmal für die {{domxref("XRSession")}} aktiviert ist. Sie können es in {{domxref("XRSystem.requestSession()")}} anfordern.

Um eine neue `XREquirectLayer` zu erstellen, rufen Sie entweder folgendes auf:

- {{domxref("XRWebGLBinding.createEquirectLayer()")}} für eine WebGL-opake Texturschicht oder
- {{domxref("XRMediaBinding.createEquirectLayer()")}} für eine HTML {{HTMLElement("video")}} Wiedergabeschicht.

Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie mit {{domxref("XRSession.updateRenderState()")}} dem `layers`-Renderstatus hinzu.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element, {{domxref("XRCompositionLayer")}}._

- {{domxref("XREquirectLayer.centralHorizontalAngle")}} {{Experimental_Inline}}
  - : Eine Zahl, die den zentralen horizontalen Winkel in Radiant für die Kugel angibt.
- {{domxref("XREquirectLayer.lowerVerticalAngle")}} {{Experimental_Inline}}
  - : Eine Zahl, die den unteren vertikalen Winkel in Radiant für die Kugel angibt.
- {{domxref("XREquirectLayer.radius")}} {{Experimental_Inline}}
  - : Eine Zahl, die den Radius der Kugel angibt.
- {{domxref("XREquirectLayer.space")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSpace")}}, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers darstellt.
- {{domxref("XREquirectLayer.transform")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRRigidTransform")}}, das den Versatz und die Orientierung relativ zu `space` darstellt.
- {{domxref("XREquirectLayer.upperVerticalAngle")}} {{Experimental_Inline}}
  - : Eine Zahl, die den oberen vertikalen Winkel in Radiant für die Kugel angibt.

## Instanzmethoden

_Erbt Methoden von seinen übergeordneten Elementen, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}_.

## Ereignisse

- {{domxref("XREquirectLayer.redraw_event", "redraw")}} {{Experimental_Inline}}
  - : Wird an das `XREquirectLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Schicht verloren gehen oder wenn der XR-Compositor die Schicht nicht mehr reprojizieren kann. Wenn dieses Ereignis gesendet wird, sollten die Autoren den Inhalt der Schicht im nächsten XR-Animationsframe neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRQuadLayer")}}
- {{domxref("XRProjectionLayer")}}
