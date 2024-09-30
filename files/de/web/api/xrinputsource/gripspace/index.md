---
title: "XRInputSource: gripSpace-Eigenschaft"
short-title: gripSpace
slug: Web/API/XRInputSource/gripSpace
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`gripSpace`** gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) zurück, dessen nativer Ursprung die Pose verfolgt, die zum Rendern virtueller Objekte verwendet wird, sodass diese so erscheinen, als ob sie in der Hand des Nutzers gehalten werden. Wenn ein Benutzer beispielsweise eine virtuelle gerade Stange hält, würde sich der native Ursprung dieses `XRSpace` im ungefähren Schwerpunkt der Faust des Benutzers befinden. 

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die Position und Ausrichtung des Eingabegeräts im virtuellen Raum darstellt und zum Rendern eines Bildes des Gerätes in die Szene geeignet ist. `gripSpace` ist `null`, wenn die Eingabequelle nicht von Natur aus verfolgbar ist. Zum Beispiel bieten nur Eingänge, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist, ein `gripSpace`.

Stellen Sie sich vor, der Controller ist wie eine gerade Stange geformt, die in der Faust des Nutzers gehalten wird. Der native Ursprung des Griffraums befindet sich im Schwerpunkt—dem Schwerpunkt—der Faust des Nutzers und verfolgt die Position der Hand des Nutzers.

**Das Koordinatensystem für den Griffraum der linken Hand.**

![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](gripspace-lefthand-light.svg)

**Das Koordinatensystem für den Griffraum der rechten Hand.**

![Ein Diagramm, das zeigt, wie der Griffraum das lokale Koordinatensystem für die Hand des Spielers relativ zur Welt anzeigt.](gripspace-righthand-light.svg)

Wie im obigen Diagramm gezeigt, ist das Koordinatensystem wie folgt ausgerichtet:

- Die x-Achse steht senkrecht zur Handfläche des Benutzers, wobei die Richtung,
  die vom Handrücken aus nach außen zeigt, +X ist, wenn sich der Controller in der
  rechten Hand des Benutzers befindet, oder -X, wenn der Controller in der linken Hand ist.
- Die z-Achse verläuft entlang der Länge der Stange, parallel zur Handfläche des Benutzers und entlang
  der Länge ihres Griffs. -Z ist in Richtung des Daumens des Benutzers, und +Z ist in die
  entgegengesetzte Richtung.
- Die y-Achse ergibt sich aus der Beziehung zwischen den anderen beiden Achsen; wie immer
  ist sie das Kreuzprodukt der anderen beiden Achsen (liegt 90° von sowohl der X-
  als auch der Z-Achse entfernt).

## Beispiele

In diesem Beispiel, das aus dem Frame-Rendering-Callback stammt, wird das `gripSpace` verwendet,
um ein Mesh zu rendern, das die Position und Ausrichtung des Controllers in der
virtuellen Umgebung darstellt.

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

Für jede Eingabequelle, die einen Wert für `gripSpace` hat, erhält diese Schleife
die [`XRPose`](/de/docs/Web/API/XRPose), die die Position und Ausrichtung beschreibt,
die durch `gripSpace` definiert wird. Wenn eine gültige Pose zurückgegeben wird, wird eine Methode
`myDrawMeshUsingTransform()` aufgerufen, um das Mesh des Controllers zu zeichnen,
transformiert mit der Transformationsmatrix der Griffpose.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
