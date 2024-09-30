---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRView`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht in die XR-Szene für einen bestimmten Frame und liefert Orientierungs- und Positionsinformationen für den Blickpunkt. Man kann es sich als eine Beschreibung eines bestimmten Auges oder einer Kamera vorstellen und wie diese die Welt sehen. Ein 3D-Frame beinhaltet zwei Ansichten, eine für jedes Auge, die in einem geeigneten Abstand getrennt sind, der der Entfernung zwischen den Augen des Betrachters nahekommt. Dies ermöglicht es den beiden Ansichten, wenn sie getrennt in die passenden Augen projiziert werden, eine 3D-Welt zu simulieren.

## Instanz-Eigenschaften

- [`eye`](/de/docs/Web/API/XRView/eye) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Welche der beiden Augen (`left` oder `right`) diese `XRView`-Perspektive repräsentiert. Dieser Wert wird verwendet, um sicherzustellen, dass jeglicher Inhalt, der für die Darstellung in ein bestimmtes Auge vorgerendert wurde, korrekt verteilt oder positioniert wird. Der Wert kann auch `none` sein, wenn die `XRView` monokopische Daten darstellt (wie z.B. ein 2D-Bild, eine Vollbildansicht von Text oder eine Nahansicht von etwas, das nicht in 3D erscheinen muss).
- [`isFirstPersonObserver`](/de/docs/Web/API/XRView/isFirstPersonObserver) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob die `XRView` eine First-Person-Observer-Ansicht ist.
- [`projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene so transformiert, dass sie gemäß dem durch `eye` angegebenen Blickpunkt korrekt erscheint. Diese Matrix sollte direkt verwendet werden, um Präsentationsverzerrungen zu vermeiden, die zu potenziell starkem Benutzerunbehagen führen könnten.
- [`recommendedViewportScale`](/de/docs/Web/API/XRView/recommendedViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Viewport-Skalierungswert, den Sie für `requestViewportScale()` verwenden können, wenn der Nutzer-Agent eine solche Empfehlung hat; andernfalls [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).
- [`transform`](/de/docs/Web/API/XRView/transform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das die aktuelle Position und Orientierung des Blickpunkts in Bezug auf den [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) beschreibt, der beim Aufruf von [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) auf dem zu rendernden [`XRFrame`](/de/docs/Web/API/XRFrame) angegeben wurde.

## Instanz-Methoden

- [`requestViewportScale()`](/de/docs/Web/API/XRView/requestViewportScale) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Fordert an, dass der Nutzer-Agent die angeforderte Viewport-Skalierung für diesen Viewport auf den angeforderten Wert setzt.

## Nutzungshinweise

### Positionen und Anzahl der XRViews pro Frame

Beim Rendern einer Szene wird die Menge der Ansichten, die für das Rendern der Szene für den Betrachter im aktuellen Frame verwendet werden, durch Aufrufen der Methode [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) des [`XRFrame`](/de/docs/Web/API/XRFrame)-Objekts abgerufen, um die [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zu erhalten, die im Wesentlichen die Position des Kopfes des Betrachters darstellt. Die [`views`](/de/docs/Web/API/XRViewerPose/views)-Eigenschaft dieses Objekts ist eine Liste aller `XRView`-Objekte, die die Blickpunkte darstellen, mit denen die Szene zur Präsentation an den Benutzer konstruiert werden kann.

Es ist möglich, `XRView`-Objekte zu haben, die sich überlappende Bereiche sowie völlig getrennte Bereiche darstellen; in einem Spiel könnten Sie zum Beispiel Ansichten haben, die präsentiert werden können, um eine entfernte Stelle mit einer Überwachungskamera oder einem anderen Gerät zu beobachten. Mit anderen Worten, gehen Sie nicht davon aus, dass es genau zwei Ansichten auf einen bestimmten Betrachter gibt; es kann so wenige wie eine (z.B. beim Rendern der Szene im `inline`-Modus) und potenziell viele (insbesondere wenn das Sichtfeld sehr groß ist) geben. Es könnte auch Ansichten geben, die Beobachter darstellen, die das Geschehen beobachten, oder andere Blickpunkte, die nicht direkt mit dem Auge eines Spielers verbunden sind.

Darüber hinaus kann sich die Anzahl der Ansichten jederzeit ändern, je nach Bedarf. Sie sollten also die Ansichts-Liste jedes Mal verarbeiten, ohne Annahmen basierend auf vorherigen Frames zu treffen.

Alle Positionen und Orientierungen innerhalb der Ansichten für eine gegebene [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) sind im Referenzraum angegeben, der an [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) übergeben wurde; dies wird als **viewer reference space** bezeichnet. Die [`transform`](/de/docs/Web/API/XRView/transform)-Eigenschaft beschreibt die Position und Orientierung des Auges oder der Kamera, die durch die `XRView` dargestellt wird, angegeben in diesem Referenzraum.

### Der Ziel-Rendering-Layer

Um einen Frame zu rendern, iterieren Sie über die Ansichten der `XRViewerPose` und rendern jede von ihnen in die entsprechende Viewport innerhalb des Frames [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer). Derzeit ist die Spezifikation (und damit alle aktuellen Implementierungen von WebXR) darauf ausgelegt, jede `XRView` in einen einzigen `XRWebGLLayer` zu rendern, der dann auf dem XR-Gerät präsentiert wird, wobei die eine Hälfte für das linke Auge und die andere Hälfte für das rechte Auge genutzt wird. Der [`XRViewport`](/de/docs/Web/API/XRViewport) für jede Ansicht wird verwendet, um das Rendering in die richtige Hälfte des Layers zu positionieren.

Sollte es in Zukunft möglich sein, dass jede Ansicht in einen anderen Layer rendert, müssten Änderungen an der API vorgenommen werden, sodass es derzeit sicher ist anzunehmen, dass alle Ansichten in denselben Layer rendern.

## Beispiele

### Vorbereitung zum Rendern jeder Ansicht für eine Pose

Um alles zu zeichnen, was der Benutzer sieht, erfordert jeder Frame die Iteration über die Liste der Ansichten, die von der [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) des Objekts [`views`](/de/docs/Web/API/XRViewerPose/views) zurückgegeben werden:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Draw the scene; the eye being drawn is identified
  // by view.eye.
}
```

### Besondere Ansichts-Transformationen

Es gibt einige besondere Transformationen, die beim Rendern und Beleuchten einer Szene auf die Ansicht angewendet werden.

#### Modellansichtsmatrix

Die **Modellansichtsmatrix** ist eine Matrix, die die Position eines Objekts relativ zum Raum definiert, in dem es sich befindet: Wenn `objectMatrix` eine auf das Objekt angewendete Transformation ist, um seine grundlegende Position und Rotation bereitzustellen, kann die Modellansichtsmatrix berechnet werden, indem die Matrix des Objekts mit der Inversen der Ansichtstransformationsmatrix multipliziert wird, wie folgt:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normalmatrix

Die Normalmatrix der Modellansicht wird beim Beleuchten der Szene verwendet, um die Normalvektoren jeder Oberfläche zu transformieren und sicherzustellen, dass das Licht in die richtige Richtung reflektiert wird, angesichts der Orientierung und Position der Oberfläche relativ zur Lichtquelle oder den Lichtquellen. Sie wird berechnet, indem die Modellansichtsmatrix invertiert und dann transponiert wird:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Teleportieren eines Objekts

Um ein Objekt programmgesteuert zu verschieben und/oder zu drehen (oft als **Teleportieren** bezeichnet), müssen Sie einen neuen Referenzraum für dieses Objekt erstellen, der eine Transformation anwendet, die die gewünschten Änderungen kapselt. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die benötigt wird, um ein Objekt, dessen aktuelle Situation durch den Referenzraum `refSpace` beschrieben wird, in eine neue Position und Orientierung zu verschieben und zu drehen. Dazu werden zuvor aufgezeichnete Maus- und Tastatureingabedaten verwendet, die Verschiebungen für Gieren, Neigen und Position entlang aller drei Achsen generiert haben.

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

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird das Quaternion `inverseOrientation` berechnet. Dies stellt die Rotation des Objekts dar, gegeben durch die Werte von `mousePitch` (Rotation um die X-Achse des Referenzraums des Objekts) und `mouseYaw` (Rotation um die Y-Achse des Objekts).

Der zweite Abschnitt berechnet den "up"-Vektor für das Objekt. Dieser Vektor zeigt die Richtung, die im Referenzraum des Objekts insgesamt "oben" ist.

Der dritte Abschnitt erstellt die neue [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), indem ein Punkt angegeben wird, der die Verschiebungen entlang der drei Achsen als ersten Parameter angibt, und das Orientierungsquaternion als zweiten Parameter. Die zurückgegebene Eigenschaft [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) des Objekts ist die tatsächliche Matrix, die Punkte vom Referenzraum der Szene zur neuen Position des Objekts transformiert.

Schließlich wird ein neuer Referenzraum erstellt, der die Beziehung zwischen den beiden Referenzräumen vollständig beschreibt. Dieser Referenzraum wird an den Aufrufer zurückgegeben.

Um diese Funktion zu nutzen, übergeben wir den zurückgegebenen Referenzraum an [`XRFrame.getPose()`](/de/docs/Web/API/XRFrame/getPose) oder [`getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose), je nachdem, was benötigt wird. Die zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) wird dann verwendet, um die Szene für den aktuellen Frame zu rendern.

Ein umfassenderes und vollständigeres Beispiel finden Sie in unserem Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
