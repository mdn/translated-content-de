---
title: XRViewerPose
slug: Web/API/XRViewerPose
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die Schnittstelle der WebXR Device API **`XRViewerPose`** repräsentiert die Pose (die Position und Orientierung) des Standpunkts des Betrachters auf der Szene. Jede `XRViewerPose` kann mehrere Ansichten haben, um zum Beispiel die leichte Trennung zwischen dem linken und dem rechten Auge darzustellen.

Diese Ansicht kann alles repräsentieren, von der Perspektive eines XR-Headsets eines Benutzers bis hin zum Perspektivwechsel, der durch die Bewegung eines Avatars mit Maus und Tastatur auf dem Bildschirm erfolgt, oder bis hin zu einer virtuellen Kamera, die die Szene für einen Zuschauer aufnimmt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Zusätzlich zu den von {{domxref("XRPose")}} geerbten Eigenschaften umfasst `XRViewerPose` die folgenden:_

- {{domxref("XRViewerPose.views", "views")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("XRView")}} Objekten, eines für jeden Standpunkt auf die Szene, die benötigt wird, um die Szene dem Benutzer darzustellen. Ein typisches Headset bietet eine Betrachterpose mit zwei Ansichten, deren {{domxref("XRView.eye", "eye")}}-Eigenschaft entweder `left` oder `right` ist, was anzeigt, welches Auge diese Ansicht repräsentiert. Zusammen können diese Ansichten den 3D-Effekt nachbilden, wenn sie auf dem XR-Gerät angezeigt werden.

## Nutzungshinweise

Das `XRViewerPose`-Objekt wird verwendet, um den Zustand eines Betrachters einer WebXR-Szene zu beschreiben, wie er von der XR-Hardware des Benutzers erfasst wird. Der Betrachter kann die virtuelle Darstellung des Benutzers sein oder er kann ein anderes Gerät oder eine andere Schnittstelle darstellen, die als Quelle für eine Position und Orientierung dienen kann, die eine Ansicht auf die Szene bilden. Zum Beispiel könnte jeder Spieler in einem MMORPG eine Instanz von `XRViewerPose` haben, um eine Möglichkeit zu bieten zu berechnen, was sie sehen können; wenn das Spiel eine Mechanik bietet, die dem Spieler mitteilt, ob ein anderer Spieler ihn sieht oder dass sie einen anderen Spieler sehen, wird diese Information entscheidend.

Ein `XRViewerPose` wird immer relativ zu einem bestehenden {{domxref("XRReferenceSpace")}} erfasst und referenziert. Dies stellt sicher, dass Positionen und Orientierungen unter Verwendung des erwarteten relativen Koordinatensystems gemeldet werden.

Um eine Szene mit dem `XRViewerPose`, das den Kopf des Benutzers darstellt, zu rendern, würde man über die Ansichten im {{domxref("XRViewerPose.views", "views")}}-Array iterieren und sie nacheinander rendern. Durch Aufrufen von {{domxref("WebGLRenderingContext.viewport", "viewport()")}} auf dem WebGL-Kontext, wobei die `XRView` als Eingabe spezifiziert wird, kann man das Viewport erhalten, das beim Rendern zu verwenden ist, um den Frame für dieses Auge in den richtigen Teil der Zeichenfläche zu zeichnen.

Ebenso kann beim Rendern der Szene für Zuschauer oder andere Spieler in einem Multiplayer-Spiel das {{domxref("XRPose.transform", "transform")}} des `XRViewerPose` verwendet werden, um die Platzierung und die Blickrichtung der anderen Spieler im Spiel zu bestimmen, so dass sie an der richtigen Stelle mit der korrekten Ausrichtung gezeichnet werden.

Die Pose des Betrachters für den Animationsrahmen, der durch {{domxref("XRFrame")}} dargestellt wird, kann abgerufen werden, indem die {{domxref("XRFrame.getViewerPose", "getViewerPose()")}}-Methode des Rahmens aufgerufen wird, wobei der Referenzraum angegeben wird, in dem die Position des Ursprungs berechnet werden soll. Das zurückgegebene `XRViewerPose` zeigt Ihnen, wo sich der Betrachter befindet und in welche Richtung er schaut, zu dem Zeitpunkt, an dem der Rahmen stattfindet.

## Beispiele

In diesem Beispiel—Teil des Codes, um ein {{domxref("XRFrame")}} zu rendern,
wird `getViewerPose()` aufgerufen, um ein `XRViewerPose` zu erhalten, mit demselben Referenzraum, den der Code als Basisreferenzraum verwendet. Wenn eine gültige Pose
zurückgegeben wird, wird der Frame gerendert, indem der Backbuffer gelöscht und dann jede der Ansichten in der Pose gerendert wird; diese sind höchstwahrscheinlich die Ansichten für das linke und rechte Auge.

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

Die Übergabe jeder `view` an {{domxref("XRWebGLLayer.getViewport", "getViewport()")}} gibt das WebGL-Viewport zurück, das angewendet werden muss, um das gerenderte
Ergebnis korrekt im Framebuffer zu positionieren, damit es für das entsprechende Auge auf dem Ausgabegerät gerendert wird.

Dieser Code stammt aus [Drawing a frame](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem WebXR-Beispiel "Movement and motion".
Sie können mehr Kontext sehen und mehr auf dieser Seite lernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
- {{domxref("XRPose")}} und {{domxref("XRView")}}
