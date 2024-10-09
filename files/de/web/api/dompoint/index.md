---
title: DOMPoint
slug: Web/API/DOMPoint
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Ein **`DOMPoint`**-Objekt repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem; es umfasst Werte für die Koordinaten in bis zu drei Dimensionen sowie einen optionalen Perspektivwert. `DOMPoint` basiert auf [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), erlaubt jedoch das Ändern der Werte seiner Eigenschaften.

Im Allgemeinen repräsentiert eine positive `x`-Komponente eine Position rechts vom Ursprung, eine positive `y`-Komponente ist nach unten vom Ursprung, und eine positive `z`-Komponente erstreckt sich von der Bildschirmoberfläche nach außen (mit anderen Worten, in Richtung des Benutzers).

{{InheritanceDiagram}}

## Konstruktor

- [`DOMPoint()`](/de/docs/Web/API/DOMPoint/DOMPoint)
  - : Erstellt und gibt ein neues `DOMPoint`-Objekt zurück, gegebenenfalls mit den Werten von null oder mehr seiner Koordinatenkomponenten und optional dem `w`-Perspektivwert. Sie können auch einen vorhandenen `DOMPoint` oder `DOMPointReadOnly` oder ein Objekt verwenden, um einen neuen Punkt zu erstellen, indem Sie die statische Methode [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static) aufrufen.

## Instanz-Eigenschaften

_`DOMPoint` kann auch Eigenschaften von seinem Elternteil [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) erben._

- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x)
  - : Die `x`-Koordinate des `DOMPoint`.
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y)
  - : Die `y`-Koordinate des `DOMPoint`.
- [`DOMPoint.z`](/de/docs/Web/API/DOMPoint/z)
  - : Die `z`-Koordinate des `DOMPoint`.
- [`DOMPoint.w`](/de/docs/Web/API/DOMPoint/w)
  - : Der Perspektivwert des `DOMPoint`.

## Instanz-Methoden

_`DOMPoint` erbt Instanz-Methoden von seinem Elternteil [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)._

## Statische Methoden

_`DOMPoint` kann auch statische Methoden von seinem Elternteil [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) erben._

- [`DOMPoint.fromPoint()`](/de/docs/Web/API/DOMPoint/fromPoint_static)
  - : Erstellt ein neues veränderbares `DOMPoint`-Objekt basierend auf einem vorhandenen Punkt (oder einem Objekt mit passenden Eigenschaften), das die Werte für seine Eigenschaften bereitstellt.

## Beispiele

Im [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentieren `DOMPointReadOnly`-Werte Positionen und Ausrichtungen. Im folgenden Snippet kann die Pose des XR-Geräts (wie ein VR-Headset oder Telefon mit AR-Fähigkeiten) abgerufen werden, indem während eines [`XRSession`](/de/docs/Web/API/XRSession)-Animationsrahmens [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aufgerufen wird. Anschließend wird auf die resultierende [`XRPose`](/de/docs/Web/API/XRPose)'s [`transform`](/de/docs/Web/API/XRPose/transform)-Eigenschaft zugegriffen, die zwei `DOMPointReadOnly`-Attribute enthält: [`position`](/de/docs/Web/API/XRRigidTransform/position) als Vektor und [`orientation`](/de/docs/Web/API/XRRigidTransform/orientation) als Quaternion.

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
