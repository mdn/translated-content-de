---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRView`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht in die XR-Szene für einen bestimmten Frame und liefert Orientierungs- und Positionsinformationen für den Blickpunkt. Sie können es sich als eine Beschreibung eines spezifischen Auges oder einer Kamera vorstellen und wie diese die Welt sieht. Ein 3D-Frame beinhaltet zwei Ansichten, eine für jedes Auge, getrennt durch einen angemessenen Abstand, der dem Abstand zwischen den Augen des Betrachters näherungsweise entspricht. Dies ermöglicht es den beiden Ansichten, wenn sie isoliert in die entsprechenden Augen projiziert werden, eine 3D-Welt zu simulieren.

## Instanzeigenschaften

- [`eye`](/de/docs/Web/API/XRView/eye) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Welches der beiden Augen (`left`) oder (`right`) diese `XRView`-Perspektive darstellt. Dieser Wert wird verwendet, um sicherzustellen, dass jeder Inhalt, der vorab gerendert ist, für die Darstellung in einem bestimmten Auge korrekt verteilt oder positioniert wird. Der Wert kann auch `none` sein, wenn die `XRView` monokulare Daten präsentiert (wie z.B. ein 2D-Bild, eine Vollbildansicht von Text oder eine Nahansicht von etwas, das nicht in 3D erscheinen muss).
- [`isFirstPersonObserver`](/de/docs/Web/API/XRView/isFirstPersonObserver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die `XRView` eine First-Person-Observer-Ansicht ist.
- [`index`](/de/docs/Web/API/XRView/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die den Index der aktuellen `XRView` im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array angibt.
- [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene so transformiert, dass sie korrekt erscheint, basierend auf dem durch `eye` angegebenen Blickpunkt. Diese Matrix sollte direkt verwendet werden, um Präsentationsverzerrungen zu vermeiden, die potenziell ernste Benutzerbeschwerden verursachen können.
- [`recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Viewport-Skalenwert, den Sie für `requestViewportScale()` verwenden können, falls der User-Agent eine solche Empfehlung hat; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`transform`](/de/docs/Web/API/XRView/transform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die aktuelle Position und Orientierung des Blickpunkts in Bezug auf den angegebenen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt, als [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) auf dem zu rendernden [`XRFrame`](/de/docs/Web/API/XRFrame) aufgerufen wurde.

## Instanzmethoden

- [`requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Fordert, dass der User-Agent die angeforderte Viewport-Skala für diesen Viewport auf den angeforderten Wert setzen soll.

## Verwendungshinweise

### Positionen und Anzahl der XRViews pro Frame

Beim Rendern einer Szene wird die Menge der Ansichten, die zur Darstellung der Szene für den Betrachter als aktueller Frame verwendet werden, durch Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts erhalten, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die (im Wesentlichen) die Position des Kopfes des Betrachters darstellt. Die [`views`](/de/docs/Web/API/XRViewerPose/views)-Eigenschaft dieses Objekts ist eine Liste aller `XRView`-Objekte, die die Blickpunkte darstellen, die verwendet werden können, um die Szene für die Präsentation dem Benutzer gegenüber zu konstruieren.

Es ist möglich, `XRView`-Objekte zu haben, die sich überlappende Bereiche darstellen sowie völlig verschiedene Bereiche; in einem Spiel könnten Sie Ansichten haben, die präsentiert werden können, um einen entfernten Ort mit einer Überwachungskamera oder einem anderen Gerät zu beobachten. Mit anderen Worten: Gehen Sie nicht davon aus, dass es genau zwei Ansichten für einen bestimmten Betrachter gibt; es kann so wenige wie eine geben (z.B. wenn die Szene im `inline`-Modus gerendert wird), und möglicherweise viele (besonders wenn das Sichtfeld sehr groß ist). Es könnte auch Ansichten geben, die Beobachter zeigen, die die Handlung verfolgen, oder andere Sichtpunkte, die nicht direkt mit dem Auge des Spielers verbunden sind.

Darüber hinaus kann sich die Anzahl der Ansichten jederzeit ändern, abhängig von den aktuellen Bedürfnissen. Daher sollten Sie die Ansichtsliste jedes Mal verarbeiten, ohne Annahmen basierend auf vorherigen Frames zu treffen.

Alle Positionen und Orientierungen innerhalb der Ansichten für eine gegebene [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) sind im Referenzraum angegeben, der an [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben wurde; dies wird als **Viewer-Referenzraum** bezeichnet. Die [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft beschreibt die Position und Orientierung des Auges oder der Kamera, die durch die `XRView` dargestellt wird, angegeben in diesem Referenzraum.

### Die Ziel-Rendering-Ebene

Um einen Frame zu rendern, durchlaufen Sie die Ansichten des `XRViewerPose` und rendern jede von ihnen in den entsprechenden Viewport innerhalb der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) des Frames. Derzeit ist die Spezifikation (und daher alle aktuellen Implementierungen von WebXR) darauf ausgelegt, jede `XRView` in eine einzelne `XRWebGLLayer` zu rendern, die dann auf dem XR-Gerät dargestellt wird, wobei die Hälfte für das linke Auge und die Hälfte für das rechte Auge verwendet wird. Das [`XRViewport`](/de/docs/Web/API/XRViewport) für jede Ansicht wird verwendet, um das Rendering in der richtigen Hälfte der Ebene zu positionieren.

Falls es in Zukunft möglich wird, dass jede Ansicht in eine andere Ebene gerendert wird, müssten Änderungen an der API vorgenommen werden, daher ist es vorerst sicher anzunehmen, dass alle Ansichten in dieselbe Ebene gerendert werden.

## Beispiele

### Vorbereitung für das Rendern jeder Ansicht für eine Pose

Um alles zu zeichnen, was der Benutzer sieht, muss in jedem Frame die Liste der Ansichten durchlaufen werden, die von der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objektliste [`views`](/de/docs/Web/API/XRViewerPose/views) zurückgegeben wird:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Spezielle Ansichten-Transformationen

Es gibt einige spezielle Transformationen, die auf die Ansicht angewendet werden, während eine Szene gerendert und beleuchtet wird.

#### Modell-View-Matrix

Die **Modell-View-Matrix** ist eine Matrix, die die Position eines Objekts relativ zu dem Raum definiert, in dem es sich befindet: Wenn `objectMatrix` eine auf das Objekt angewendete Transformation ist, um dessen grundlegende Position und Rotation bereitzustellen, dann kann die Modell-View-Matrix berechnet werden, indem die Matrix des Objekts mit der Inversen der Transformationsmatrix der Ansicht multipliziert wird, wie folgt:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normal-Matrix

Die **Normal-Matrix** der Modell-View-Matrix wird verwendet, wenn die Szene beleuchtet wird, um die Normalenvektoren jeder Oberfläche zu transformieren und sicherzustellen, dass das Licht in die richtige Richtung reflektiert wird, gegeben die Orientierung und Position der Oberfläche relativ zur Lichtquelle(n). Sie wird durch Invertieren und dann Transponieren der Modell-View-Matrix berechnet:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Teleportieren eines Objekts

Um ein Objekt programmatisch zu bewegen und/oder zu drehen (oft als **teleportieren** bezeichnet), müssen Sie einen neuen Referenzraum für dieses Objekt erstellen, der eine Transformation anwendet, die die gewünschten Änderungen beinhaltet. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die benötigt wird, um ein Objekt, dessen aktuelle Situation durch den Referenzraum `refSpace` beschrieben ist, in eine neue Position und Orientierung zu bewegen und zu drehen, die unter Verwendung zuvor aufgezeichneter Maus- und Tastatureingabedaten berechnet wird, die Versetzungen für Gieren, Neigen und Position entlang aller drei Achsen generiert haben.

```js
function applyMouseMovement(refSpace) {
  if (
    !mouseYaw &&
    !mousePitch &&
    !axialDistance &&
    !transverseDistance &&
    !verticalDistance
  ) {
    return refSpace;
  }

  // Compute the quaternion used to rotate the image based
  // on the pitch and yaw.

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  // Compute the true "up" vector for our object.

  vec3.cross(vecX, vecY, cubeOrientation);
  vec3.cross(vecY, cubeOrientation, vecX);

  // Now compute the transform that teleports the object to the
  // specified point and save a copy of it to display to the user
  // later; otherwise we probably wouldn't need to save mouseMatrix
  // at all.

  let newTransform = new XRRigidTransform(
    { x: transverseDistance, y: verticalDistance, z: axialDistance },
    {
      x: inverseOrientation[0],
      y: inverseOrientation[1],
      z: inverseOrientation[2],
      w: inverseOrientation[3],
    },
  );
  mat4.copy(mouseMatrix, newTransform.matrix);

  // Create a new reference space that transforms the object to the new
  // position and orientation, returning the new reference space.

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird das Quaternion `inverseOrientation` berechnet. Dies stellt die Drehung des Objektes dar, gemäß den Werten von `mousePitch` (Drehung um die X-Achse des Objekts im Referenzraum) und `mouseYaw` (Drehung um die Y-Achse des Objekts).

Der zweite Abschnitt berechnet den "oben"-Vektor für das Objekt. Dieser Vektor gibt die Richtung an, die in der Szene insgesamt "oben" ist, jedoch im Referenzraum des Objekts.

Der dritte Abschnitt erstellt den neuen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), wobei ein Punkt, der die Versetzungen entlang der drei Achsen bereitstellt, als erster Parameter und das Orientierungs-Quaternion als zweiter Parameter angegeben werden. Die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix)-Eigenschaft des zurückgegebenen Objekts ist die tatsächliche Matrix, die Punkte vom Referenzraum der Szene in die neue Position des Objekts transformiert.

Schließlich wird ein neuer Referenzraum erstellt, um die Beziehung zwischen den beiden Referenzräumen vollständig zu beschreiben. Dieser Referenzraum wird an den Aufrufer zurückgegeben.

Um diese Funktion zu verwenden, übergeben wir den zurückgegebenen Referenzraum an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) oder [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose), je nachdem, was benötigt wird. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) wird dann verwendet, um die Szene für den aktuellen Frame zu rendern.

Ein umfangreicheres und vollständigeres Beispiel finden Sie in unserem Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
