---
title: XRQuadLayer
slug: Web/API/XRQuadLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRQuadLayer`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die einen flachen rechteckigen Raum in der virtuellen Umgebung einnimmt. Ein `XRQuadLayer` hat keine Dicke. Es ist ein zweidimensionales Objekt, das in einem 3D-Raum positioniert und orientiert ist. Die Position eines Quads bezieht sich auf das Zentrum des Quads. Nur die Vorderseite der Ebene ist sichtbar.

`XRQuadLayer` erfordert, dass das `layers`-Feature für die {{domxref("XRSession")}} aktiviert ist. Sie können es in {{domxref("XRSystem.requestSession()")}} anfordern.

Um ein neues `XRQuadLayer` zu erstellen, rufen Sie entweder auf:

- {{domxref("XRWebGLBinding.createQuadLayer()")}} für eine WebGL undurchsichtige Texturschicht, oder
- {{domxref("XRMediaBinding.createQuadLayer()")}} für eine HTML {{HTMLElement("video")}} Wiedergabe-Ebene.

Um Ebenen auf dem XR-Gerät anzuzeigen, fügen Sie sie dem `layers`-Renderstatus mit {{domxref("XRSession.updateRenderState()")}} hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRQuadLayer.height")}} {{Experimental_Inline}}
  - : Repräsentiert die Höhe der Ebene in Metern.
- {{domxref("XRQuadLayer.space")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSpace")}}, der die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers darstellt.
- {{domxref("XRQuadLayer.transform")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRRigidTransform")}}, der den Versatz und die Orientierung relativ zu `space` darstellt.
- {{domxref("XRQuadLayer.width")}} {{Experimental_Inline}}
  - : Repräsentiert die Breite der Ebene in Metern.

## Instanz-Methoden

_Übernimmt Methoden von seinen Elternteilen, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}_.

## Ereignisse

- {{domxref("XRQuadLayer.redraw_event", "redraw")}} {{Experimental_Inline}}
  - : Wird an das `XRQuadLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Compositor die Ebene nicht mehr repräsentieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsrahmen neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
