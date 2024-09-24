---
title: XRView
slug: Web/API/XRView
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRView`**-Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt eine einzelne Ansicht in die XR-Szene für einen bestimmten Frame. Es liefert Orientierungs- und Positionsinformationen für den Blickpunkt. Sie können es als Beschreibung eines bestimmten Auges oder einer Kamera betrachten und wie es die Welt sieht. Ein 3D-Frame umfasst zwei Ansichten, eine für jedes Auge, die um eine geeignete Distanz voneinander getrennt sind, die den Abstand zwischen den Augen des Betrachters annähern. Dadurch können die beiden Ansichten, wenn sie isoliert in die entsprechenden Augen projiziert werden, eine 3D-Welt simulieren.

## Instanzeigenschaften

- {{domxref("XRView.eye", "eye")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Welches der beiden Augen (`left`) oder (`right`) Perspektive dieses `XRView` repräsentiert. Dieser Wert wird verwendet, um sicherzustellen, dass alle Inhalte, die für die Präsentation an ein bestimmtes Auge vorgemacht wurden, korrekt verteilt oder positioniert werden. Der Wert kann auch `none` sein, wenn das `XRView` monokulares Datenmaterial präsentiert (wie z. B. ein 2D-Bild, eine Vollbildansicht eines Textes oder eine Nahaufnahme von etwas, das nicht in 3D erscheinen muss).
- {{domxref("XRView.isFirstPersonObserver", "isFirstPersonObserver")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das `XRView` eine Ansicht aus der Ich-Perspektive ist.
- {{domxref("XRView.projectionMatrix", "projectionMatrix")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Projektionsmatrix, die die Szene korrekt darstellen wird, basierend auf dem durch `eye` angegebenen Blickwinkel. Diese Matrix sollte direkt verwendet werden, um Präsentationsverzerrungen zu vermeiden, die zu möglicherweise ernsthaftem Unbehagen beim Benutzer führen können.
- {{domxref("XRView.recommendedViewportScale", "recommendedViewportScale")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der empfohlene Viewport-Skalierungswert, den Sie für `requestViewportScale()` verwenden können, falls der Benutzeragent eine solche Empfehlung hat; [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) ansonsten.
- {{domxref("XRView.transform", "transform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{domxref("XRRigidTransform")}}, das die aktuelle Position und Orientierung des Blickpunkts in Bezug auf den {{domxref("XRReferenceSpace")}} beschreibt, der beim Aufruf von {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} auf dem gerenderten {{domxref("XRFrame")}} angegeben wurde.

## Instanzmethoden

- {{domxref("XRView.requestViewportScale", "requestViewportScale()")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Fordert, dass der Benutzeragent die angeforderte Viewport-Skalierung für diesen Viewport auf den angeforderten Wert setzt.

## Anwendungshinweise

### Positionen und Anzahl der XRViews pro Frame

Beim Rendern einer Szene werden die Ansichten, die zur Darstellung der Szene für den Betrachter im aktuellen Frame verwendet werden, durch Aufrufen der Methode {{domxref("XRFrame")}}-Objekts {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} erhalten, um die {{domxref("XRViewerPose")}} zu erhalten, die im Wesentlichen die Position des Kopfes des Betrachters repräsentiert. Die Eigenschaft {{domxref("XRViewerPose.views", "views")}} dieses Objekts ist eine Liste aller `XRView`-Objekte, die die Blickpunkte repräsentieren, die zur Konstruktion der Szene für die Präsentation an den Benutzer verwendet werden können.

Es ist möglich, `XRView`-Objekte zu haben, die sich überlappende Regionen sowie völlig unterschiedliche Regionen darstellen; in einem Spiel könnten Sie z. B. Ansichten haben, die einen entfernten Punkt durch eine Überwachungskamera oder ein anderes Gerät beobachten. Mit anderen Worten, gehen Sie nicht davon aus, dass es genau zwei Ansichten für einen gegebenen Betrachter gibt; es kann so wenige wie eine (z.B. beim Rendern der Szene im `inline`-Modus) und potentiell viele (insbesondere wenn das Sichtfeld sehr groß ist) geben. Es könnte auch Ansichten geben, die Beobachter repräsentieren, die die Aktion beobachten, oder andere Blickpunkte, die nicht direkt mit dem Auge eines Spielers verbunden sind.

Darüber hinaus kann sich die Anzahl der Ansichten jederzeit ändern, je nach Bedarf zu der Zeit. Daher sollten Sie die Ansichtenliste bei jedem Mal verarbeiten, ohne Annahmen basierend auf früheren Frames zu machen.

Alle Positionen und Orientierungen innerhalb der Ansichten für ein bestimmtes {{domxref("XRViewerPose")}} sind in dem Referenzraum angegeben, der an {{domxref("XRFrame.getViewerPose()")}} übergeben wurde; dies wird als **Betrachter-Referenzraum** bezeichnet. Die Eigenschaft {{domxref("XRView.transform", "transform")}} beschreibt die Position und Orientierung des Auges oder der Kamera, die durch das `XRView` dargestellt wird, in diesem Referenzraum.

### Die Ziel-Renderebene

Um einen Frame zu rendern, iterieren Sie über die Ansichten des `XRViewerPose` und rendern jede in den entsprechenden Viewport innerhalb der {{domxref("XRWebGLLayer")}} des Frames. Derzeit ist die Spezifikation (und damit alle aktuellen Implementierungen von WebXR) darauf ausgerichtet, jedes `XRView` in eine einzelne `XRWebGLLayer` zu rendern, die dann auf dem XR-Gerät angezeigt wird, wobei die Hälfte für das linke Auge und die Hälfte für das rechte Auge verwendet wird. Der {{domxref("XRViewport")}} für jede Ansicht wird verwendet, um das Rendering in der korrekten Hälfte der Ebene zu positionieren.

Sollte es in Zukunft möglich sein, jede Ansicht in eine andere Ebene zu rendern, müssten Änderungen an der API vorgenommen werden, daher ist es derzeit sicher anzunehmen, dass alle Ansichten in denselben Layer gerendert werden.

## Beispiele

### Vorbereitung zum Rendern jeder Ansicht für eine Pose

Um alles zu zeichnen, was der Benutzer sieht, ist jedes Frame erforderlich, die Liste der Ansichten, die von der {{domxref("XRViewerPose")}}-Objektliste {{domxref("XRViewerPose.views", "views")}} zurückgegeben wird, zu durchlaufen:

```js
for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);

  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Zeichnen Sie die Szene; das gezeichnete Auge wird durch
  // view.eye identifiziert.
}
```

### Besondere Ansichtstransformationen

Es gibt einige spezielle Transformationen, die auf die Ansicht angewendet werden, während eine Szene gerendert und beleuchtet wird.

#### Modellansichtsmatrix

Die **Modellansichtsmatrix** ist eine Matrix, die die Position eines Objekts relativ zu dem Raum definiert, in dem es sich befindet: Wenn `objectMatrix` eine auf das Objekt angewandte Transformation ist, um seine grundlegende Position und Rotation bereitzustellen, dann kann die Modellansichtsmatrix berechnet werden durch Multiplikation der Objektmatrix mit der Inversen der Transformationsmatrix der Ansicht, wie so:

```js
mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
```

#### Normalmatrix

Die **Normalmatrix** der Modellansicht wird beim Ausleuchten der Szene verwendet, um die Normalvektoren jeder Oberfläche zu transformieren, um sicherzustellen, dass das Licht in die richtige Richtung reflektiert wird, je nachdem, wie die Oberfläche relativ zur Lichtquelle oder den Lichtquellen orientiert und positioniert ist. Sie wird durch Invertierung und dann Transposition der Modellansichtsmatrix berechnet:

```js
mat4.invert(normalMatrix, modelViewMatrix);
mat4.transpose(normalMatrix, normalMatrix);
```

### Teleportation eines Objekts

Um ein Objekt programmatisch zu bewegen und/oder zu drehen (oft als **Teleportation** bezeichnet), müssen Sie einen neuen Referenzraum für dieses Objekt erstellen, der eine Transformation anwendet, die die gewünschten Änderungen kapselt. Die Funktion `createTeleportTransform()` gibt die Transformation zurück, die erforderlich ist, um ein Objekt, dessen aktuelle Situation durch den Referenzraum `refSpace` beschrieben wird, zu einer neuen Position und Orientierung zu bewegen, die unter Verwendung zuvor aufgezeichneter Maus- und Tastatur-Eingabedaten berechnet wurde, die Offsets für Gieren, Neigen und Position entlang aller drei Achsen generiert haben.

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

  // Berechnen Sie den Quaternion, der verwendet wird, um das Bild
  // basierend auf dem Neigungs- und Gierwinkel zu drehen.

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  // Berechnen Sie den tatsächlichen "Oben"-Vektor für unser Objekt.

  vec3.cross(vecX, vecY, cubeOrientation);
  vec3.cross(vecY, cubeOrientation, vecX);

  // Nun berechnen Sie die Transformation, die das Objekt an den
  // angegebenen Punkt teleportiert und speichern eine Kopie davon,
  // um sie dem Benutzer später anzuzeigen; andernfalls müssten wir
  // mouseMatrix wahrscheinlich gar nicht speichern.

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

  // Erstellen Sie einen neuen Referenzraum, der das Objekt zur neuen
  // Position und Orientierung transformiert und geben Sie den neuen
  // Referenzraum zurück.

  return refSpace.getOffsetReferenceSpace(newTransform);
}
```

Dieser Code ist in vier Abschnitte unterteilt. Im ersten wird der Quaternion `inverseOrientation` berechnet. Dieser stellt die Drehung des Objekts basierend auf den Werten von `mousePitch` (Drehung um die X-Achse des Referenzraums des Objekts) und `mouseYaw` (Drehung um die Y-Achse des Objekts) dar.

Der zweite Abschnitt berechnet den "Oben"-Vektor für das Objekt. Dieser Vektor zeigt die Richtung an, die in der Szene insgesamt "oben" ist, jedoch im Referenzraum des Objekts.

Der dritte Abschnitt erstellt den neuen {{domxref("XRRigidTransform")}}, wobei ein Punkt angegeben wird, der die Offsets entlang der drei Achsen als ersten Parameter bereitstellt und der Orientierungs-Quaternion als zweiten Parameter. Die zurückgegebene {{domxref("XRRigidTransform.matrix", "matrix")}}-Eigenschaft des Objekts ist die tatsächliche Matrix, die Punkte vom Referenzraum der Szene zur neuen Position des Objekts transformiert.

Schließlich wird ein neuer Referenzraum erstellt, um die Beziehung zwischen den beiden Referenzräumen vollständig zu beschreiben. Dieser Referenzraum wird an den Aufrufer zurückgegeben.

Um diese Funktion zu verwenden, geben wir den zurückgegebenen Referenzraum in {{domxref("XRFrame.getPose()")}} oder {{domxref("XRFrame.getViewerPose", "getViewerPose()")}} ein, je nachdem, was Sie benötigen. Das zurückgegebene {{domxref("XRPose")}} wird dann verwendet, um die Szene für den aktuellen Frame zu rendern.

Ein umfassenderes und vollständigeres Beispiel finden Sie in unserem Artikel [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
