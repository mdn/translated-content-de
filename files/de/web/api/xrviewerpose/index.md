---
title: XRViewerPose
slug: Web/API/XRViewerPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`XRViewerPose`** Interface der WebXR Device API repräsentiert die Pose (die Position und Orientierung) des Blickpunkts eines Betrachters auf die Szene. Jedes `XRViewerPose` kann mehrere Ansichten haben, um beispielsweise den leichten Abstand zwischen dem linken und rechten Auge darzustellen.

Diese Ansicht kann alles repräsentieren, von der Perspektive eines XR-Headsets des Benutzers bis hin zur Sichtweise, die durch die Bewegung eines Avatars mittels Maus und Tastatur auf dem Bildschirm dargestellt wird, bis hin zu einer virtuellen Kamera, die die Szene für einen Zuschauer erfasst.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den von [`XRPose`](/de/docs/Web/API/XRPose) geerbten Eigenschaften umfasst `XRViewerPose` die folgenden:_

- [`views`](/de/docs/Web/API/XRViewerPose/views) {{ReadOnlyInline}}
  - : Ein Array von [`XRView`](/de/docs/Web/API/XRView)-Objekten, eines für jeden Blickpunkt auf die Szene, der benötigt wird, um die Szene für den Benutzer darzustellen. Ein typisches Headset bietet eine Betrachterpose mit zwei Ansichten, deren [`eye`](/de/docs/Web/API/XRView/eye)-Eigenschaft entweder `left` oder `right` ist, was angibt, welches Auge diese Ansicht repräsentiert. Zusammen können diese Ansichten den 3D-Effekt reproduzieren, wenn sie auf dem XR-Gerät angezeigt werden.

## Gebrauchshinweise

Das `XRViewerPose`-Objekt wird verwendet, um den Zustand eines Betrachters einer WebXR-Szene zu beschreiben, wie er durch die XR-Hardware des Benutzers verfolgt wird. Der Betrachter kann die virtuelle Darstellung des Benutzers sein oder ein anderes Gerät oder eine andere Schnittstelle repräsentieren, das als Quelle einer Position und Orientierung dient, die einen Blick auf die Szene ergibt. Beispielsweise könnte jeder Spieler in einem MMORPG eine Instanz von `XRViewerPose` haben, um eine Möglichkeit bereitzustellen, zu berechnen, was sie sehen können; wenn das Spiel einen Mechanismus bietet, der dem Spieler mitteilt, ob ein anderer Spieler ihn sieht oder er einen anderen Spieler sieht, wird diese Information entscheidend.

Ein `XRViewerPose` wird immer relativ zu einem vorhandenen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) erhalten und referenziert. Dies stellt sicher, dass Positionen und Orientierungen unter Verwendung des erwarteten relativen Koordinatensystems angegeben werden.

Um eine Szene mit der `XRViewerPose`, die den Kopf des Benutzers darstellt, zu rendern, würde man über die Ansichten im [`views`](/de/docs/Web/API/XRViewerPose/views)-Array iterieren und sie nacheinander rendern. Durch Aufrufen von [`viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) im WebGL-Kontext, unter Angabe der `XRView` als Eingabe, können Sie die Ansicht erhalten, die beim Rendern verwendet werden soll, um den Rahmen für dieses Auge in den korrekten Teil der Zeichenoberfläche zu zeichnen.

Auch wenn die Szene für Zuschauer oder andere Spieler in einem Multiplayer-Spiel gerendert wird, kann der [`transform`](/de/docs/Web/API/XRPose/transform) der `XRViewerPose` verwendet werden, um sowohl die Platzierung als auch die Blickrichtung der anderen Spieler im Spiel zu bestimmen, damit sie am richtigen Ort mit der richtigen Blickrichtung gezeichnet werden können.

Die Pose des Betrachters für den Animationsframe, der durch [`XRFrame`](/de/docs/Web/API/XRFrame) dargestellt wird, kann durch Aufrufen der [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)-Methode des Frames erhalten werden, wobei der Referenzraum angegeben wird, in dem die Position des Ursprungs berechnet werden soll. Die zurückgegebene `XRViewerPose` gibt an, wo sich der Betrachter befindet und in welche Richtung er blickt, zu dem Zeitpunkt, an dem der Frame stattfindet.

## Beispiele

In diesem Beispiel – Teil des Codes zum Rendern eines [`XRFrame`](/de/docs/Web/API/XRFrame) – wird `getViewerPose()` aufgerufen, um eine `XRViewerPose` mit demselben Referenzraum zu erhalten, den der Code als Basisreferenzraum verwendet. Wenn eine gültige Pose zurückgegeben wird, wird der Frame durch Löschen des Backbuffers und Rendern jeder der Ansichten in der Pose gerendert; dabei handelt es sich höchstwahrscheinlich um die Ansichten für das linke und rechte Auge.

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

Das Übergeben jeder `view` an [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) gibt das WebGL-Viewport zurück, das angewendet werden muss, um das gerenderte Ergebnis korrekt im Framebuffer zu positionieren, damit es auf das entsprechende Auge auf dem Ausgabegerät gerendert wird.

Dieser Code stammt aus [Einen Frame zeichnen](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem "Bewegung und Bewegung" WebXR-Beispiel. Sie können dort mehr Kontext sehen und viel mehr auf jener Seite erfahren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- [`XRPose`](/de/docs/Web/API/XRPose) und [`XRView`](/de/docs/Web/API/XRView)
