---
title: XRCylinderLayer
slug: Web/API/XRCylinderLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCylinderLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die einen gekrümmten rechteckigen Bereich im virtuellen Umfeld einnimmt. Nur die Vorderseite der Ebene ist sichtbar.

`XRCylinderLayer` erfordert, dass das Feature `layers` für die {{domxref("XRSession")}} aktiviert ist. Sie können es in {{domxref("XRSystem.requestSession()")}} anfordern.

Um eine neue `XRCylinderLayer` zu erstellen, rufen Sie entweder auf:

- {{domxref("XRWebGLBinding.createCylinderLayer()")}} für eine WebGL undurchsichtige Textur-Ebene, oder
- {{domxref("XRMediaBinding.createCylinderLayer()")}} für eine HTML {{HTMLElement("video")}} Wiedergabeebene.

Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers`-Render-State mit {{domxref("XRSession.updateRenderState()")}} hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRCylinderLayer.aspectRatio")}} {{Experimental_Inline}}
  - : Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu seiner Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird.
- {{domxref("XRCylinderLayer.centralAngle")}} {{Experimental_Inline}}
  - : Eine Zahl, die den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders angibt.
- {{domxref("XRCylinderLayer.radius")}} {{Experimental_Inline}}
  - : Eine Zahl, die den Radius des Zylinders angibt.
- {{domxref("XRCylinderLayer.space")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSpace")}}, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers darstellt.
- {{domxref("XRCylinderLayer.transform")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRRigidTransform")}}, das den Versatz und die Ausrichtung relativ zu `space` darstellt.

## Instanz-Methoden

_Erbt Methoden von seinen Elternteilen, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}._

## Ereignisse

- {{domxref("XRCylinderLayer.redraw_event", "redraw")}} {{Experimental_Inline}}
  - : Wird an das `XRCylinderLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr reprojezieren kann. Sollte dieses Ereignis gesendet werden, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRQuadLayer")}}
- {{domxref("XRProjectionLayer")}}
