---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: 06a96ca44a86fef907996bb01ecf72cc0f1a36d0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die Schnittstelle **`XRView`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht der XR-Szene für einen bestimmten Frame und stellt Informationen zur Ausrichtung und Position des Blickpunkts bereit. Sie können sie sich als Beschreibung eines bestimmten Auges oder einer Kamera und ihrer Sicht auf die Welt vorstellen. Ein 3D-Frame umfasst zwei Ansichten, eine für jedes Auge. Sie sind durch einen Abstand voneinander getrennt, der ungefähr dem Augenabstand der betrachtenden Person entspricht. Werden die beiden Ansichten jeweils dem entsprechenden Auge angezeigt, können sie so eine 3D-Welt simulieren.

## Instanzeigenschaften

- [`eye`](/de/docs/Web/API/XRView/eye) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, für welches der beiden Augen (`left` oder `right`) dieses `XRView` die Perspektive darstellt. Dieser Wert stellt sicher, dass Inhalte, die für die Anzeige auf einem bestimmten Auge vorgerendert wurden, korrekt zugewiesen oder positioniert werden. Der Wert kann auch `none` sein, wenn das `XRView` monokulare Daten darstellt, etwa ein 2D-Bild, eine Vollbildansicht von Text oder eine Nahaufnahme von etwas, das nicht dreidimensional erscheinen muss.
- [`isFirstPersonObserver`](/de/docs/Web/API/XRView/isFirstPersonObserver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `XRView` eine Beobachteransicht aus der Ich-Perspektive ist.
- [`index`](/de/docs/Web/API/XRView/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die den Index des aktuellen `XRView` im Array [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) angibt.
- [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene so transformiert, dass sie aus dem durch `eye` angegebenen Blickwinkel korrekt erscheint. Diese Matrix sollte direkt verwendet werden, um Darstellungsverzerrungen zu vermeiden, die bei Benutzern zu erheblichem Unwohlsein führen können.
- [`recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Skalierungswert für den Viewport, den Sie für `requestViewportScale()` verwenden können, sofern der User Agent eine entsprechende Empfehlung hat; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`transform`](/de/docs/Web/API/XRView/transform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die aktuelle Position und Ausrichtung des Blickpunkts relativ zu dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt, das beim Aufruf von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) auf dem gerenderten [`XRFrame`](/de/docs/Web/API/XRFrame) angegeben wurde.

## Instanzmethoden

- [`requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) {{Experimental_Inline}}
  - : Fordert den User Agent auf, die Viewport-Skalierung für diesen Viewport auf den angeforderten Wert zu setzen.

## Hinweise zur Verwendung

### Positionen und Anzahl der XRViews pro Frame

Beim Rendern einer Szene erhalten Sie die Ansichten, die für den aktuellen Frame zur Darstellung der Szene verwendet werden, indem Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts aufrufen. Sie liefert das [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), das im Wesentlichen die Position des Kopfes der betrachtenden Person repräsentiert. Die Eigenschaft [`views`](/de/docs/Web/API/XRViewerPose/views) dieses Objekts enthält eine Liste aller `XRView`-Objekte, deren Blickpunkte zur Erstellung der Szene für die Anzeige verwendet werden können.

`XRView`-Objekte können sowohl überlappende als auch vollständig getrennte Bereiche darstellen. In einem Spiel könnte es beispielsweise Ansichten geben, über die sich ein entfernter Ort mithilfe einer Überwachungskamera oder eines anderen Geräts beobachten lässt. Gehen Sie daher nicht davon aus, dass es für eine betrachtende Person immer genau zwei Ansichten gibt. Es kann nur eine Ansicht geben, etwa wenn die Szene im Modus `inline` gerendert wird, oder möglicherweise viele Ansichten, insbesondere bei einem sehr großen Sichtfeld. Es kann auch Ansichten für Personen geben, die das Geschehen beobachten, oder andere Blickpunkte, die keinem Auge einer spielenden Person direkt zugeordnet sind.

Außerdem kann sich die Anzahl der Ansichten je nach aktuellen Anforderungen jederzeit ändern. Verarbeiten Sie die Liste der Ansichten daher bei jedem Frame neu, ohne Annahmen aus vorherigen Frames zu übernehmen.

Alle Positionen und Ausrichtungen innerhalb der Ansichten für ein bestimmtes [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) werden in dem Referenzraum angegeben, der an [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben wurde. Dieser wird als **Betrachterreferenzraum** bezeichnet. Die Eigenschaft [`transform`](/de/docs/Web/API/XRView/transform) beschreibt in diesem Referenzraum die Position und Ausrichtung des Auges oder der Kamera, die das `XRView` darstellt.

### Die Ziel-Rendering-Ebene

Um einen Frame zu rendern, durchlaufen Sie die Ansichten des `XRViewerPose` und rendern jede davon in den entsprechenden Viewport innerhalb des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) des Frames. Derzeit sind die Spezifikation und damit alle aktuellen WebXR-Implementierungen darauf ausgelegt, jedes `XRView` in ein einziges `XRWebGLLayer` zu rendern. Dieses wird anschließend auf dem XR-Gerät angezeigt, wobei eine Hälfte für das linke und die andere für das rechte Auge verwendet wird. Der [`XRViewport`](/de/docs/Web/API/XRViewport) der jeweiligen Ansicht dient dazu, das Rendering in der richtigen Hälfte der Ebene zu positionieren.

Sollte es künftig möglich werden, jede Ansicht in eine andere Ebene zu rendern, wären Änderungen an der API erforderlich. Bis dahin können Sie davon ausgehen, dass alle Ansichten in dieselbe Ebene gerendert werden.

## Beispiele

### Vorbereitung des Renderings aller Ansichten einer Pose

Um alles darzustellen, was die benutzende Person sieht, müssen Sie für jeden Frame die Ansichten in der von der Eigenschaft [`views`](/de/docs/Web/API/XRViewerPose/views) des [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekts zurückgegebenen Liste durchlaufen:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Spezielle Ansichtstransformationen

Beim Rendern und Beleuchten einer Szene werden einige spezielle Transformationen auf die Ansicht angewendet.

#### Modellansichtsmatrix

Die **Modellansichtsmatrix** definiert die Position eines Objekts relativ zu dem Raum, in dem es sich befindet. Wenn `objectMatrix` eine auf das Objekt angewendete Transformation ist, die seine Ausgangsposition und -drehung festlegt, lässt sich die Modellansichtsmatrix berechnen, indem die Matrix des Objekts mit der Inversen der Ansichtstransformationsmatrix multipliziert wird:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normalenmatrix

Die **Normalenmatrix** der Modellansicht wird bei der Beleuchtung der Szene verwendet. Sie transformiert die Normalenvektoren der Oberflächen, damit das Licht entsprechend der Ausrichtung und Position der jeweiligen Oberfläche relativ zu den Lichtquellen in die richtige Richtung reflektiert wird. Sie wird berechnet, indem die Modellansichtsmatrix invertiert und anschließend transponiert wird:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Ein Objekt teleportieren

Um ein Objekt programmgesteuert zu verschieben und/oder zu drehen (oft als **Teleportieren** bezeichnet), müssen Sie für dieses Objekt einen neuen Referenzraum erstellen, der eine Transformation mit den gewünschten Änderungen anwendet. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die erforderlich ist, um ein Objekt, dessen aktuelle Lage durch den Referenzraum `refSpace` beschrieben wird, an eine neue Position und in eine neue Ausrichtung zu bringen. Diese werden aus zuvor erfassten Maus- und Tastatureingaben berechnet, aus denen sich Verschiebungen für Gier- und Nickwinkel sowie für die Position entlang aller drei Achsen ergeben haben.

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

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird das Quaternion `inverseOrientation` berechnet. Es stellt die Drehung des Objekts anhand der Werte von `mousePitch` (Drehung um die X-Achse des Referenzraums des Objekts) und `mouseYaw` (Drehung um die Y-Achse des Objekts) dar.

Im zweiten Abschnitt wird der „Oben“-Vektor für das Objekt berechnet. Dieser Vektor gibt an, welche Richtung in der gesamten Szene „oben“ ist, ausgedrückt im Referenzraum des Objekts.

Im dritten Abschnitt wird ein neues [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) erstellt. Als erster Parameter wird ein Punkt angegeben, der die Verschiebungen entlang der drei Achsen beschreibt, und als zweiter Parameter das Ausrichtungsquaternion. Die Eigenschaft [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) des zurückgegebenen Objekts ist die eigentliche Matrix, die Punkte aus dem Referenzraum der Szene an die neue Position des Objekts transformiert.

Abschließend wird ein neuer Referenzraum erstellt, der die Beziehung zwischen den beiden Referenzräumen vollständig beschreibt. Dieser Referenzraum wird an die aufrufende Stelle zurückgegeben.

Um diese Funktion zu verwenden, übergeben Sie den zurückgegebenen Referenzraum je nach Bedarf an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) oder [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose). Das zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) wird anschließend verwendet, um die Szene für den aktuellen Frame zu rendern.

Ein ausführlicheres und vollständiges Beispiel finden Sie in unserem Artikel [Bewegung, Ausrichtung und Fortbewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
