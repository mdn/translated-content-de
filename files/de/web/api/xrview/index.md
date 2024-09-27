---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRView`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht in die XR-Szene für einen bestimmten Frame und liefert Orientierungs- und Positionsinformationen für den Blickpunkt. Sie können es als Beschreibung eines spezifischen Auges oder einer Kamera betrachten und wie diese die Welt wahrnehmen. Ein 3D-Frame wird zwei Ansichten beinhalten, eine für jedes Auge, getrennt durch eine angemessene Distanz, die die Entfernung zwischen den Augen des Betrachters approximiert. Dies ermöglicht es, dass die beiden Ansichten, wenn sie isoliert in die entsprechenden Augen projiziert werden, eine 3D-Welt simulieren.

## Instanzeigenschaften

- [`eye`](/de/docs/Web/API/XRView/eye) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Welches der beiden Augen (`left`) oder (`right`) diese `XRView`-Perspektive darstellt. Dieser Wert wird verwendet, um sicherzustellen, dass jeglicher Inhalt, der für die Darstellung an ein bestimmtes Auge vorgerendert wird, korrekt verteilt oder positioniert ist. Der Wert kann auch `none` sein, wenn die `XRView` monokulare Daten präsentiert (wie ein 2D-Bild, eine Vollbildansicht von Text oder eine Nahansicht von etwas, das nicht in 3D erscheinen muss).
- [`isFirstPersonObserver`](/de/docs/Web/API/XRView/isFirstPersonObserver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob die `XRView` eine first-person observer Ansicht ist.
- [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene so transformiert, dass sie gemäß dem Blickpunkt, den `eye` angibt, korrekt erscheint. Diese Matrix sollte direkt verwendet werden, um Präsentationsverzerrungen zu vermeiden, die zu ernsthaften Unannehmlichkeiten für den Benutzer führen könnten.
- [`recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Viewport-Skalierungswert, den Sie für `requestViewportScale()` verwenden können, wenn der Benutzeragent eine solche Empfehlung hat; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`transform`](/de/docs/Web/API/XRView/transform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die aktuelle Position und Orientierung des Blickpunkts in Bezug auf den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt, der angegeben wurde, als [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) auf dem gerenderten [`XRFrame`](/de/docs/Web/API/XRFrame) aufgerufen wurde.

## Instanzmethoden

- [`requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Fordert, dass der Benutzeragent die angeforderte Viewport-Skalierung für diesen Viewport auf den angeforderten Wert setzt.

## Nutzungshinweise

### Positionen und Anzahl der XRViews pro Frame

Während des Renderns einer Szene werden die Satz von Ansichten, die für das aktuelle Frame zur Darstellung der Szene für den Betrachter verwendet werden, durch Aufruf der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts erhalten, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die im Wesentlichen die Position des Kopfes des Betrachters repräsentiert. Die [`views`](/de/docs/Web/API/XRViewerPose/views)-Eigenschaft dieses Objekts ist eine Liste aller `XRView`-Objekte, die die Blickpunkte repräsentieren, die zur Strukturierung der Szene für die Präsentation an den Benutzer verwendet werden können.

Es ist möglich, dass `XRView`-Objekte sich überlappende Bereiche sowie völlig unterschiedliche Bereiche darstellen; in einem Spiel könnten Sie beispielsweise Ansichten haben, die verwendet werden, um einen entfernten Standort mit einer Sicherheitskamera oder einem anderen Gerät zu beobachten. Mit anderen Worten: Gehen Sie nicht davon aus, dass es genau zwei Ansichten auf einen bestimmten Betrachter gibt; es kann so wenige wie eine (wie zum Beispiel beim Rendern der Szene im `inline`-Modus) oder potenziell viele (besonders wenn das Sichtfeld sehr groß ist) geben. Es könnte auch Ansichten geben, die Beobachter darstellen, die die Handlung beobachten, oder andere Blickpunkte, die nicht direkt mit dem Auge eines Spielers verbunden sind.

Zusätzlich kann sich die Anzahl der Ansichten jederzeit ändern, je nach den Anforderungen des jeweiligen Zeitpunkts. Daher sollten Sie die Ansichtenliste bei jedem Vorgang verarbeiten, ohne Annahmen auf Basis vorheriger Frames zu treffen.

Alle Positionen und Ausrichtungen innerhalb der Ansichten für eine gegebene [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) sind in dem Referenzraum angegeben, der an [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben wurde; dies wird als **viewer reference space** bezeichnet. Die [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft beschreibt die Position und Ausrichtung des Auges oder der Kamera, die von der `XRView` repräsentiert werden, gegeben in diesem Referenzraum.

### Die Ziel-Rendering-Schicht

Um ein Frame zu rendern, iterieren Sie über die Ansichten der `XRViewerPose` und rendern jede von ihnen in das entsprechende Viewport innerhalb der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) des Frames. Derzeit ist die Spezifikation (und damit alle aktuellen Implementierungen von WebXR) darauf ausgelegt, jede `XRView` in eine einzelne `XRWebGLLayer` zu rendern, die dann auf dem XR-Gerät dargestellt wird, wobei eine Hälfte für das linke Auge und die andere Hälfte für das rechte Auge verwendet wird. Das [`XRViewport`](/de/docs/Web/API/XRViewport) für jede Ansicht wird verwendet, um das Rendering in die korrekte Hälfte der Schicht zu positionieren.

Sollte es in der Zukunft möglich werden, dass jede Ansicht in eine andere Schicht rendern kann, müssten Änderungen an der API vorgenommen werden, daher ist es derzeit sicher anzunehmen, dass alle Ansichten in die gleiche Schicht rendern werden.

## Beispiele

### Vorbereiten, um jede Ansicht für eine Pose zu rendern

Um alles zu zeichnen, was der Benutzer sieht, erfordert jedes Frame eine Iteration über die Liste der Ansichten, die durch die [`views`](/de/docs/Web/API/XRViewerPose/views)-Liste des [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekts zurückgegeben wird:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Spezielle Ansichtstransformationen

Es gibt einige spezielle Transformationen, die bei der Darstellung und Beleuchtung einer Szene auf die Ansicht angewendet werden.

#### Modellansichtsmatrix

Die **Modellansichtsmatrix** ist eine Matrix, die die Position eines Objekts relativ zu dem Raum definiert, in dem es sich befindet: Wenn `objectMatrix` eine auf das Objekt angewendete Transformation ist, um seine grundlegende Position und Rotation bereitzustellen, kann die Modellansichtsmatrix berechnet werden, indem die Matrix des Objekts mit der Inversen der Ansichtstransformationsmatrix multipliziert wird, wie folgt:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normalmatrix

Die **Normalmatrix** der Modellansicht wird verwendet, um die Szene zu beleuchten, indem sie die Normalvektoren jeder Oberfläche transformiert, um sicherzustellen, dass das Licht in die richtige Richtung reflektiert wird, angesichts der Orientierung und Position der Oberfläche relativ zur Lichtquelle oder den Lichtquellen. Sie wird berechnet, indem die Modellansichtsmatrix invertiert und dann transponiert wird:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Teleportieren eines Objekts

Um ein Objekt programmgesteuert zu bewegen und/oder zu rotieren (häufig als **Teleportieren** bezeichnet), müssen Sie einen neuen Referenzraum für dieses Objekt erstellen, der eine Transformation anwendet, die die gewünschten Änderungen zusammenfasst. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die benötigt wird, um ein Objekt, dessen aktuelle Situation durch den Referenzraum `refSpace` beschrieben wird, zu einem neuen Standort und einer neuen Orientierung zu bewegen und zu rotieren, was unter Verwendung zuvor aufgezeichneter Maus- und Tastatureingabedaten berechnet wurde, die Offsets für Gieren, Neigen und Position entlang aller drei Achsen generiert haben.

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

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird das Quaternion `inverseOrientation` berechnet. Dies repräsentiert die Rotation des Objekts anhand der Werte von `mousePitch` (Rotation um die X-Achse des Referenzraums des Objekts) und `mouseYaw` (Rotation um die Y-Achse des Objekts).

Der zweite Abschnitt berechnet den "Up"-Vektor für das Objekt. Dieser Vektor zeigt die Richtung an, die in der Szene insgesamt "oben" ist, jedoch im Referenzraum des Objekts.

Der dritte Abschnitt erstellt die neue [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), wobei ein Punkt angegeben wird, der die Verschiebungen entlang der drei Achsen als ersten Parameter bereitstellt, und das Orientierungsquaternion als zweiten Parameter. Die [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix)-Eigenschaft des zurückgegebenen Objekts ist die tatsächliche Matrix, die Punkte vom Referenzraum der Szene zur neuen Position des Objekts transformiert.

Schließlich wird ein neuer Referenzraum erstellt, um die Beziehung zwischen den beiden Referenzräumen vollständig zu beschreiben. Dieser Referenzraum wird an den Aufrufer zurückgegeben.

Um diese Funktion zu verwenden, übergeben wir den zurückgegebenen Referenzraum an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) oder [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose), je nach Ihren Bedürfnissen. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) wird dann verwendet, um die Szene für das aktuelle Frame zu rendern.

Sie finden ein umfangreicheres und vollständigeres Beispiel in unserem Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
