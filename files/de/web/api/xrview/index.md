---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das Interface **`XRView`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht der XR-Szene für einen bestimmten Frame und liefert Informationen zur Ausrichtung und Position des Blickpunkts. Sie können es sich als Beschreibung eines bestimmten Auges oder einer Kamera und ihrer Sicht auf die Welt vorstellen. Ein 3D-Frame umfasst zwei Ansichten, eine für jedes Auge. Ihr Abstand entspricht ungefähr dem Abstand zwischen den Augen der betrachtenden Person. Werden die beiden Ansichten jeweils dem entsprechenden Auge präsentiert, können sie so eine 3D-Welt simulieren.

## Instanzeigenschaften

- [`eye`](/de/docs/Web/API/XRView/eye) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt an, für welches der beiden Augen (`left` oder `right`) dieses `XRView` die Perspektive darstellt. Der Wert sorgt dafür, dass Inhalte, die für ein bestimmtes Auge vorgerendert wurden, korrekt zugeordnet oder positioniert werden. Er kann auch `none` sein, wenn das `XRView` monoskopische Daten darstellt, etwa ein 2D-Bild, eine bildschirmfüllende Textansicht oder eine Nahansicht von etwas, das nicht dreidimensional erscheinen muss.
- [`isFirstPersonObserver`](/de/docs/Web/API/XRView/isFirstPersonObserver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `XRView` eine Beobachteransicht aus der Ich-Perspektive ist.
- [`index`](/de/docs/Web/API/XRView/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Zahl zurück, die den Index des aktuellen `XRView` im Array [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) angibt.
- [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene so transformiert, dass sie aus dem durch `eye` angegebenen Blickpunkt korrekt erscheint. Diese Matrix sollte direkt verwendet werden, um Darstellungsverzerrungen zu vermeiden, die bei Nutzenden möglicherweise erhebliches Unwohlsein auslösen können.
- [`recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Skalierungswert für den Viewport, den Sie für `requestViewportScale()` verwenden können, sofern der User Agent eine solche Empfehlung bereitstellt; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`transform`](/de/docs/Web/API/XRView/transform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), der die aktuelle Position und Ausrichtung des Blickpunkts relativ zu dem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt, der beim Aufruf von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) auf dem gerenderten [`XRFrame`](/de/docs/Web/API/XRFrame) angegeben wurde.

## Instanzmethoden

- [`requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) {{Experimental_Inline}}
  - : Fordert den User Agent auf, die Viewport-Skalierung für diesen Viewport auf den angeforderten Wert zu setzen.

## Hinweise zur Verwendung

### Positionen und Anzahl der XRViews pro Frame

Beim Rendern einer Szene erhalten Sie die Ansichten für den aktuellen Frame, indem Sie die Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts aufrufen. Sie liefert den [`XRViewerPose`](/de/docs/Web/API/XRViewerPose), der im Wesentlichen die Position des Kopfes der betrachtenden Person repräsentiert. Die Eigenschaft [`views`](/de/docs/Web/API/XRViewerPose/views) dieses Objekts enthält eine Liste aller `XRView`-Objekte, deren Blickpunkte zum Aufbau der Szene für die Darstellung verwendet werden können.

`XRView`-Objekte können sowohl überlappende als auch völlig getrennte Bereiche darstellen. In einem Spiel könnten Sie beispielsweise Ansichten haben, über die sich ein entfernter Ort mithilfe einer Überwachungskamera oder eines anderen Geräts beobachten lässt. Gehen Sie also nicht davon aus, dass es für eine betrachtende Person genau zwei Ansichten gibt: Es kann nur eine sein, etwa beim Rendern der Szene im Modus `inline`, oder es können viele sein, insbesondere bei einem sehr großen Sichtfeld. Es kann auch Ansichten für Personen geben, die das Geschehen beobachten, oder andere Blickpunkte, die keinem Auge einer spielenden Person direkt zugeordnet sind.

Außerdem kann sich die Anzahl der Ansichten je nach Bedarf jederzeit ändern. Verarbeiten Sie die Liste der Ansichten daher bei jedem Frame neu, ohne Annahmen aus vorherigen Frames zu übernehmen.

Alle Positionen und Ausrichtungen innerhalb der Ansichten eines bestimmten [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) werden in dem Referenzraum angegeben, der an [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben wurde. Dieser wird als **Viewer-Referenzraum** bezeichnet. Die Eigenschaft [`transform`](/de/docs/Web/API/XRView/transform) beschreibt in diesem Referenzraum die Position und Ausrichtung des Auges oder der Kamera, die das `XRView` repräsentiert.

### Die Ziel-Rendering-Ebene

Um einen Frame zu rendern, durchlaufen Sie die Ansichten des `XRViewerPose` und rendern jede davon in den passenden Viewport innerhalb des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) des Frames. Derzeit sind die Spezifikation und damit alle aktuellen WebXR-Implementierungen darauf ausgelegt, jedes `XRView` in einen einzigen `XRWebGLLayer` zu rendern. Dieser wird anschließend auf dem XR-Gerät dargestellt, wobei eine Hälfte für das linke und die andere für das rechte Auge verwendet wird. Der [`XRViewport`](/de/docs/Web/API/XRViewport) jeder Ansicht bestimmt, in welche Hälfte der Ebene gerendert wird.

Sollte es künftig möglich werden, jede Ansicht in eine andere Ebene zu rendern, wären Änderungen an der API erforderlich. Bis dahin können Sie davon ausgehen, dass alle Ansichten in dieselbe Ebene gerendert werden.

## Beispiele

### Das Rendern aller Ansichten einer Pose vorbereiten

Um alles darzustellen, was die nutzende Person sieht, müssen Sie bei jedem Frame die Ansichten in der Liste [`views`](/de/docs/Web/API/XRViewerPose/views) des [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekts durchlaufen:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Spezielle Transformationen für Ansichten

Beim Rendern und Beleuchten einer Szene werden einige spezielle Transformationen auf die Ansicht angewendet.

#### Modellansichtsmatrix

Die **Modellansichtsmatrix** definiert die Position eines Objekts relativ zu dem Raum, in dem es sich befindet. Wenn `objectMatrix` eine Transformation ist, die auf das Objekt angewendet wird, um dessen grundlegende Position und Rotation festzulegen, lässt sich die Modellansichtsmatrix berechnen, indem die Matrix des Objekts mit der Inversen der Ansichtstransformationsmatrix multipliziert wird:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normalenmatrix

Die **Normalenmatrix** der Modellansicht wird bei der Beleuchtung der Szene verwendet, um die Normalenvektoren der einzelnen Oberflächen zu transformieren. So wird sichergestellt, dass das Licht entsprechend der Ausrichtung und Position der Oberfläche relativ zu den Lichtquellen in die richtige Richtung reflektiert wird. Sie wird berechnet, indem die Modellansichtsmatrix invertiert und anschließend transponiert wird:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Ein Objekt teleportieren

Um ein Objekt programmgesteuert zu verschieben und/oder zu drehen – häufig als **Teleportieren** bezeichnet –, müssen Sie für dieses Objekt einen neuen Referenzraum erstellen. Dieser wendet eine Transformation an, die die gewünschten Änderungen umfasst. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die benötigt wird, um ein Objekt, dessen aktueller Zustand durch den Referenzraum `refSpace` beschrieben wird, an eine neue Position zu verschieben und neu auszurichten. Die neue Position und Ausrichtung werden anhand zuvor erfasster Maus- und Tastatureingaben berechnet, aus denen sich Versatzwerte für Gier- und Nickwinkel sowie für die Position entlang aller drei Achsen ergeben.

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

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird das Quaternion `inverseOrientation` berechnet. Es stellt die Rotation des Objekts anhand der Werte von `mousePitch` (Rotation um die X-Achse des Referenzraums des Objekts) und `mouseYaw` (Rotation um die Y-Achse des Objekts) dar.

Der zweite Abschnitt berechnet den Aufwärtsvektor des Objekts. Dieser Vektor gibt an, welche Richtung in der gesamten Szene „oben“ ist, ausgedrückt im Referenzraum des Objekts.

Der dritte Abschnitt erstellt einen neuen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform). Als erster Parameter wird ein Punkt angegeben, der die Versatzwerte entlang der drei Achsen enthält, und als zweiter Parameter das Quaternion für die Ausrichtung. Die Eigenschaft [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) des zurückgegebenen Objekts enthält die Matrix, die Punkte aus dem Referenzraum der Szene an die neue Position des Objekts transformiert.

Schließlich wird ein neuer Referenzraum erstellt, der die Beziehung zwischen den beiden Referenzräumen vollständig beschreibt. Dieser Referenzraum wird an die aufrufende Stelle zurückgegeben.

Um diese Funktion zu verwenden, übergeben Sie den zurückgegebenen Referenzraum je nach Bedarf an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) oder [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose). Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) wird anschließend verwendet, um die Szene für den aktuellen Frame zu rendern.

Ein ausführlicheres und vollständiges Beispiel finden Sie in unserem Artikel [Bewegung, Ausrichtung und Fortbewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
