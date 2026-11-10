---
title: DOMPoint
slug: Web/API/DOMPoint
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein **`DOMPoint`**-Objekt repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem. Es enthält Koordinatenwerte für bis zu drei Dimensionen sowie einen optionalen Perspektivwert. `DOMPoint` basiert auf [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), erlaubt aber die Änderung seiner Eigenschaftswerte.

Im Allgemeinen beschreibt eine positive `x`-Komponente eine Position rechts vom Ursprung, eine positive `y`-Komponente eine Position unterhalb des Ursprungs und eine positive `z`-Komponente eine Position, die aus dem Bildschirm herausragt (also in Richtung der nutzenden Person).

{{InheritanceDiagram}}

## Konstruktor

- [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint)
  - : Erstellt ein neues `DOMPoint`-Objekt anhand der Werte von null oder mehr seiner Koordinatenkomponenten und optional des Perspektivwerts `w` und gibt es zurück. Sie können auch einen vorhandenen `DOMPoint`, einen `DOMPointReadOnly` oder ein Objekt verwenden, um durch Aufruf der statischen Methode [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static) einen neuen Punkt zu erstellen.

## Instanzeigenschaften

_`DOMPoint` kann außerdem Eigenschaften von seiner übergeordneten Schnittstelle [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) erben._

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x)
  - : Die `x`-Koordinate des `DOMPoint`.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y)
  - : Die `y`-Koordinate des `DOMPoint`.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z)
  - : Die `z`-Koordinate des `DOMPoint`.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w)
  - : Der Perspektivwert des `DOMPoint`.

## Statische Methoden

_`DOMPoint` kann außerdem statische Methoden von seiner übergeordneten Schnittstelle [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) erben._

- [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static)
  - : Erstellt ein neues veränderbares `DOMPoint`-Objekt anhand eines vorhandenen Punkts (oder eines Objekts mit entsprechenden Eigenschaften), der die Werte für dessen Eigenschaften liefert.

## Instanzmethoden

_`DOMPoint` erbt Instanzmethoden von seiner übergeordneten Schnittstelle [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)._

## Beispiele

In der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentieren `DOMPointReadOnly`-Werte Positionen und Ausrichtungen. Im folgenden Codeausschnitt kann die Pose des XR-Geräts (beispielsweise eines VR-Headsets oder eines AR-fähigen Smartphones) abgerufen werden, indem während eines Animationsframes einer [`XRSession`](/de/docs/Web/API/XRSession) [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aufgerufen wird. Anschließend wird auf die Eigenschaft [`transform`](/de/docs/Web/API/XRPose/transform) der zurückgegebenen [`XRPose`](/de/docs/Web/API/XRPose) zugegriffen. Sie enthält zwei `DOMPointReadOnly`-Attribute: [`position`](/de/docs/Web/API/XRRigidTransform/position) als Vektor und [`orientation`](/de/docs/Web/API/XRRigidTransform/orientation) als Quaternion.

```js
function onXRFrame(time, xrFrame) {
  let viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  if (viewerPose) {
    let position = viewerPose.transform.position;
    let orientation = viewerPose.transform.orientation;

    console.log(
      `XR Viewer Position: {x: ${roundToTwo(position.x)}, y: ${roundToTwo(
        position.y,
      )}, z: ${roundToTwo(position.z)}`,
    );

    console.log(
      `XR Viewer Orientation: {x: ${roundToTwo(orientation.x)}, y: ${roundToTwo(
        orientation.y,
      )}, z: ${roundToTwo(orientation.z)}, w: ${roundToTwo(orientation.w)}`,
    );
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect`](/de/docs/Web/API/DOMRect)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
