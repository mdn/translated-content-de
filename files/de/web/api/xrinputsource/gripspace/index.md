---
title: "XRInputSource: gripSpace-Eigenschaft"
short-title: gripSpace
slug: Web/API/XRInputSource/gripSpace
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`gripSpace`** gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) zurück, dessen nativer Ursprung die Pose verfolgt, die verwendet wird, um virtuelle Objekte so zu rendern, dass sie in der Hand des Benutzers gehalten erscheinen (oder Teil davon sind). Wenn ein Benutzer beispielsweise eine virtuelle Gerade hält, würde sich der nativen Ursprung dieses `XRSpace` ungefähr im Massenmittelpunkt der Faust des Benutzers befinden.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die Position und Ausrichtung des Eingabegeräts im virtuellen Raum darstellt und geeignet zum Rendern eines Bildes des Geräts in der Szene ist. `gripSpace` ist `null`, wenn die Eingabequelle nicht von Natur aus verfolgbar ist. Zum Beispiel bieten nur Eingaben, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist, einen `gripSpace`.

Stellen Sie sich vor, der Controller hat die Form einer geraden Stange, die in der Faust des Benutzers gehalten wird. Der native Ursprung des Grip Space befindet sich im Mittelpunkt der Faust des Benutzers, der die Position der Hand des Benutzers verfolgt.

**Das Koordinatensystem für den Grip Space der linken Hand.**

![Ein Diagramm, das zeigt, wie der Grip Space das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](gripspace-lefthand-light.svg)

**Das Koordinatensystem für den Grip Space der rechten Hand.**

![Ein Diagramm, das zeigt, wie der Grip Space das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](gripspace-righthand-light.svg)

Wie im obigen Diagramm gezeigt, ist das Koordinatensystem wie folgt ausgerichtet:

- Die x-Achse steht senkrecht zur Handfläche des Benutzers, wobei die Richtung,
  die vom Handrücken ausgeht, +X ist, wenn der Controller in der
  rechten Hand des Benutzers ist, oder -X, wenn der Controller in der linken Hand ist.
- Die z-Achse verläuft entlang der Länge der Stange, parallel zur Handfläche des Benutzers und entlang der
  Länge ihres Griffs. -Z zeigt in die Richtung des Daumens des Benutzers und +Z zeigt in die
  entgegengesetzte Richtung.
- Die y-Achse wird durch die Beziehung zwischen den anderen beiden Achsen impliziert; wie immer
  ist es das Kreuzprodukt der anderen beiden Achsen (90° von sowohl der X-
  als auch der Z-Achse entfernt).

## Beispiele

In diesem Beispiel, entnommen aus dem Frame-Rendering-Callback, wird `gripSpace`
verwendet, um ein Mesh zu rendern, das die Position und Ausrichtung des Controllers in
der virtuellen Umgebung darstellt.

```js
for (const source in xrSession.inputSources) {
  if (source.gripSpace) {
    const gripPose = frame.getPose(source.gripSpace, xrRefSpace);

    if (gripPose) {
      myDrawMeshUsingTransform(controllerMesh, gripPose.transform.matrix);
    }
  }
}
```

Für jede Eingabequelle, die einen Wert für `gripSpace` hat, wird in dieser Schleife die [`XRPose`](/de/docs/Web/API/XRPose) abgerufen, die die Position und Ausrichtung beschreibt, die
durch `gripSpace` definiert sind. Wenn eine gültige Pose zurückgegeben wird, wird die Methode
`myDrawMeshUsingTransform()` aufgerufen, um das Mesh des Controllers
mithilfe der Transformationsmatrix der Grip-Pose zu zeichnen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
