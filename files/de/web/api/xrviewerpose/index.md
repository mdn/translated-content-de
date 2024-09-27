---
title: XRViewerPose
slug: Web/API/XRViewerPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das Interface **`XRViewerPose`** der WebXR Device API stellt die Pose (die Position und Ausrichtung) des Blickwinkels eines Betrachters auf die Szene dar. Jedes `XRViewerPose` kann mehrere Ansichten enthalten, um beispielsweise die kleine Trennung zwischen dem linken und rechten Auge zu repräsentieren.

Diese Ansicht kann alles von der Perspektive eines XR-Headsets eines Nutzers über die Darstellung der Bewegung eines Avatars eines Spielers mit Maus und Tastatur auf dem Bildschirm bis hin zu einer virtuellen Kamera, die die Szene für einen Zuschauer aufnimmt, representieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den von [`XRPose`](/de/docs/Web/API/XRPose) geerbten Eigenschaften umfasst `XRViewerPose` Folgendes:_

- [`views`](/de/docs/Web/API/XRViewerPose/views) {{ReadOnlyInline}}
  - : Ein Array von [`XRView`](/de/docs/Web/API/XRView)-Objekten, eines für jeden Blickwinkel auf die Szene, der benötigt wird, um die Szene dem Nutzer darzustellen. Ein typisches Headset liefert eine Betrachterpose mit zwei Ansichten, deren [`eye`](/de/docs/Web/API/XRView/eye)-Eigenschaft entweder `left` oder `right` ist, um anzugeben, welches Auge diese Ansicht darstellt. Zusammen können diese Ansichten den 3D-Effekt reproduzieren, wenn sie auf dem XR-Gerät angezeigt werden.

## Verwendungshinweise

Das `XRViewerPose`-Objekt wird verwendet, um den Zustand eines Betrachters einer WebXR-Szene zu beschreiben, wie er von der XR-Hardware des Nutzers erfasst wird. Der Betrachter kann die virtuelle Repräsentation des Nutzers sein, oder er kann ein anderes Gerät oder eine Schnittstelle darstellen, die als Quelle einer Position und Ausrichtung dient, die eine Sicht auf die Szene bieten. Beispielsweise könnte jeder Spieler in einem MMORPG eine Instanz von `XRViewerPose` haben, um eine Möglichkeit zu bieten, zu berechnen, was sie sehen können; wenn das Spiel einen Mechanismus bereitstellt, der den Spielern mitteilt, ob ein anderer Spieler sie sieht oder sie einen anderen Spieler sehen, wird diese Information entscheidend.

Ein `XRViewerPose` wird immer relativ zu einem vorhandenen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) erhalten und referenziert. Dies stellt sicher, dass Positionen und Ausrichtungen unter Verwendung des erwarteten relativen Koordinatensystems gemeldet werden.

Um eine Szene mit dem `XRViewerPose` darzustellen, der den Kopf des Nutzers darstellt, würde man über die Ansichten im [`views`](/de/docs/Web/API/XRViewerPose/views)-Array iterieren und sie nacheinander rendern. Durch Aufruf von [`viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) im WebGL-Kontext, unter Angabe des `XRView` als Eingabe, können Sie das Ansichtsfenster erhalten, das bei der Renderung verwendet werden soll, um den Frame für dieses Auge in den richtigen Bereich der Zeichenfläche zu zeichnen.

Auch beim Rendern der Szene für Zuschauer oder andere Spieler in einem Mehrspieler-Spiel kann der [`transform`](/de/docs/Web/API/XRPose/transform) des `XRViewerPose` verwendet werden, um sowohl die Platzierung als auch die Blickrichtung der anderen Spieler im Spiel zu bestimmen, sodass sie an der richtigen Stelle mit der richtigen Blickrichtung gezeichnet werden können.

Die Pose des Betrachters für den Animationsframe, der durch [`XRFrame`](/de/docs/Web/API/XRFrame) dargestellt wird, kann durch Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des Frames erhalten werden, wobei der Referenzraum spezifiziert wird, in dem die Ursprungsposition berechnet werden soll. Das zurückgegebene `XRViewerPose` gibt Ihnen an, wo sich der Betrachter befindet und in welche Richtung er schaut, zu der Zeit, zu der der Frame stattfindet.

## Beispiele

In diesem Beispiel—Teil des Codes zur Darstellung eines [`XRFrame`](/de/docs/Web/API/XRFrame), wird `getViewerPose()` aufgerufen, um ein `XRViewerPose` unter Verwendung des gleichen Referenzraums zu erhalten, den der Code als seine Basisreferenz verwendet. Wenn eine gültige Pose zurückgegeben wird, wird der Frame gerendert, indem der Backbuffer geleert und dann jede der Ansichten in der Pose gerendert wird; diese sind höchstwahrscheinlich die Ansichten für die linken und rechten Augen.

```js
const pose = frame.getViewerPose(xrReferenceSpace);

if (pose) {
  const glLayer = xrSession.renderState.baseLayer;

  gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
  gl.clearColor(0, 0, 0, 1);
  gl.clearDepth(1);
  gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_BUFFER_BIT);

  for (const view of pose.views) {
    const viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    /* render the scene for the eye view.eye */
  }
}
```

Jede `view` an [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) weiterzugeben, gibt das WebGL-Viewport zurück, das angewendet werden muss, um den gerenderten Output korrekt im Framebuffer zu positionieren, um auf das entsprechende Auge auf dem Ausgabegerät zu rendern.

Dieser Code stammt von [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem „Bewegung und Bewegung“-WebXR-Beispiel. Sie können mehr Kontext sehen und viel mehr auf dieser Seite sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Ausrichtung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [`XRPose`](/de/docs/Web/API/XRPose) und [`XRView`](/de/docs/Web/API/XRView)
