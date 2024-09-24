---
title: DOMPoint
slug: Web/API/DOMPoint
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("Geometry Interfaces")}}

Ein **`DOMPoint`** Objekt repräsentiert einen 2D- oder 3D-Punkt in einem Koordinatensystem; es umfasst Werte für die Koordinaten in bis zu drei Dimensionen sowie einen optionalen Perspektivenwert. `DOMPoint` basiert auf {{domxref("DOMPointReadOnly")}}, erlaubt jedoch, dass die Werte seiner Eigenschaften geändert werden können.

Im Allgemeinen repräsentiert eine positive `x`-Komponente eine Position rechts vom Ursprung, eine positive `y`-Komponente eine Position unterhalb des Ursprungs, und eine positive `z`-Komponente erstreckt sich von der Bildschirmebene nach außen (also in Richtung des Benutzers).

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("DOMPoint.DOMPoint","DOMPoint()")}}
  - : Erstellt und gibt ein neues `DOMPoint`-Objekt zurück, basierend auf den Werten von null oder mehr seiner Koordinatenkomponenten und optional dem `w`-Perspektivenwert. Sie können auch einen bestehenden `DOMPoint` oder `DOMPointReadOnly` oder ein Objekt verwenden, um einen neuen Punkt durch Aufruf der statischen Methode {{domxref("DOMPoint.fromPoint_static", "DOMPoint.fromPoint()")}} zu erstellen.

## Instanz-Eigenschaften

_`DOMPoint` kann auch Eigenschaften von seinem Elternteil, {{domxref("DOMPointReadOnly")}}, erben._

- {{domxref("DOMPoint.x")}}
  - : Die `x`-Koordinate des `DOMPoint`.
- {{domxref("DOMPoint.y")}}
  - : Die `y`-Koordinate des `DOMPoint`.
- {{domxref("DOMPoint.z")}}
  - : Die `z`-Koordinate des `DOMPoint`.
- {{domxref("DOMPoint.w")}}
  - : Der Perspektivenwert des `DOMPoint`.

## Instanz-Methoden

_`DOMPoint` erbt Instanz-Methoden von seinem Elternteil, {{domxref("DOMPointReadOnly")}}._

## Statische Methoden

_`DOMPoint` kann auch statische Methoden von seinem Elternteil, {{domxref("DOMPointReadOnly")}}, erben._

- {{domxref("DOMPoint/fromPoint_static", "DOMPoint.fromPoint()")}}
  - : Erstellt ein neues veränderbares `DOMPoint`-Objekt, gegeben durch einen bestehenden Punkt (oder ein Objekt mit entsprechenden Eigenschaften), das die Werte für seine Eigenschaften bereitstellt.

## Beispiele

In der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) repräsentieren `DOMPointReadOnly`-Werte Positionen und Ausrichtungen. Im folgenden Codebeispiel kann die Pose des XR-Geräts (wie ein VR-Headset oder ein Telefon mit AR-Fähigkeiten) durch Aufruf von {{domxref("XRFrame.getViewerPose()")}} während eines {{domxref("XRSession")}} Animationsframes abgerufen werden. Anschließend kann auf die resultierende {{domxref("XRPose")}}'s {{domxref("XRPose.transform","transform")}}-Eigenschaft zugegriffen werden, die zwei `DOMPointReadOnly`-Attribute enthält: {{domxref("XRRigidTransform.position","position")}} als Vektor und {{domxref("XRRigidTransform.orientation","orientation")}} als Quaternion.

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

- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
