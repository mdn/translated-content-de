---
title: XRCubeLayer
slug: Web/API/XRCubeLayer
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{securecontext_header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRCubeLayer`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist eine Ebene, die direkt aus einem [Kubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und es auf die inneren Flächen eines Würfels projiziert.

`XRCubeLayer` erfordert, dass das `layers`-Feature für die {{domxref("XRSession")}} aktiviert ist. Sie können es in {{domxref("XRSystem.requestSession()")}} anfordern.

Um eine neue `XRCubeLayer` zu erstellen, rufen Sie {{domxref("XRWebGLBinding.createCubeLayer()")}} auf.

Um Ebenen auf das XR-Gerät darzustellen, fügen Sie sie dem `layers`-Renderstatus mithilfe von {{domxref("XRSession.updateRenderState()")}} hinzu.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern, {{domxref("XRCompositionLayer")}}._

- {{domxref("XRCubeLayer.space")}} {{Experimental_Inline}}
  - : Ein {{domxref("XRSpace")}}, das die räumlichen Beziehungen der Schicht zur physischen Umgebung des Benutzers darstellt.
- {{domxref("XRCubeLayer.orientation")}} {{Experimental_Inline}}
  - : Ein {{domxref("DOMPointReadOnly")}}, das die Ausrichtung relativ zur `space`-Eigenschaft darstellt.

## Instanz-Methoden

_Erbt Methoden von seinen Eltern, {{domxref("XRCompositionLayer")}} und {{domxref("EventTarget")}}_.

## Ereignisse

- {{domxref("XRCubeLayer.redraw_event", "redraw")}} {{Experimental_Inline}}
  - : Wird an das `XRCubeLayer`-Objekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Kompositor die Ebene nicht mehr neu projizieren kann. Falls dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen.

## Spezifikationen

{{Specifications}}

## Kompatibilität von Browsern

{{Compat}}

## Siehe auch

- {{domxref("XRLayer")}}
- {{domxref("EventTarget")}}
- {{domxref("XRCompositionLayer")}}
- {{domxref("XREquirectLayer")}}
- {{domxref("XRQuadLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRProjectionLayer")}}
