---
title: "XRInputSource: gripSpace-Eigenschaft"
short-title: gripSpace
slug: Web/API/XRInputSource/gripSpace
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`gripSpace`** von {{domxref("XRInputSource")}} gibt ein {{domxref("XRSpace")}} zurück, dessen nativer Ursprung die Pose verfolgt, die zum Rendern virtueller Objekte verwendet wird, sodass sie so erscheinen, als wären sie in der Hand des Benutzers gehalten oder Teil davon. Beispielsweise, wenn ein Benutzer eine virtuelle gerade Stange hielte, befände sich der native Ursprung dieses `XRSpace` ungefähr im Massezentrum der Faust des Benutzers.

## Wert

Ein {{domxref("XRSpace")}}-Objekt, das die Position und Orientierung des Eingabegeräts im virtuellen Raum darstellt und geeignet ist, um ein Bild des Geräts in die Szene zu rendern. `gripSpace` ist `null`, wenn die Eingabequelle nicht von Natur aus verfolgbar ist. Beispielsweise bieten nur Eingaben, bei denen der {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} `tracked-pointer` ist, ein `gripSpace`.

Stellen Sie sich vor, der Controller sei wie eine gerade Stange geformt, die in der Faust des Benutzers gehalten wird. Der native Ursprung des Grip Space befindet sich im Schwerpunkt der Faust des Benutzers und verfolgt die Position der Hand des Benutzers.

**Das Koordinatensystem für den Grip Space der linken Hand.**

![Ein Diagramm, das zeigt, wie der Grip Space das lokale Koordinatensystem für die Hand des Spielers in Bezug auf die Welt anzeigt.](gripspace-lefthand-light.svg)

**Das Koordinatensystem für den Grip Space der rechten Hand.**

![Ein Diagramm, das zeigt, wie der Grip Space das lokale Koordinatensystem für die Hand des Spielers in Bezug auf die Welt anzeigt.](gripspace-righthand-light.svg)

Wie im obigen Diagramm gezeigt, ist das Koordinatensystem wie folgt ausgerichtet:

- Die x-Achse steht senkrecht zur Handfläche des Benutzers, wobei die Richtung, die vom Handrücken ausgeht, +X ist, wenn der Controller in der rechten Hand des Benutzers liegt, oder -X, wenn er in der linken Hand liegt.
- Die z-Achse verläuft entlang der Länge der Stange, parallel zur Handfläche des Benutzers und entlang der Länge ihres Griffs. -Z ist in Richtung des Daumens des Benutzers und +Z in die entgegengesetzte Richtung.
- Die y-Achse wird durch das Verhältnis zwischen den anderen beiden Achsen impliziert; wie immer ist es das Kreuzprodukt der anderen beiden Achsen (liegt 90° von sowohl der X- als auch der Z-Achse entfernt).

## Beispiele

In diesem Beispiel, das aus dem Frame-Rendering-Callback stammt, wird `gripSpace` verwendet, um ein Mesh zu rendern, das die Position und Orientierung des Controllers in der virtuellen Umgebung darstellt.

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

Für jede Eingabequelle, die einen Wert für `gripSpace` hat, erhält diese Schleife die {{domxref("XRPose")}}, die die Position und Orientierung beschreibt, die durch `gripSpace` angegeben wird. Wenn eine gültige Pose zurückgegeben wird, wird eine Methode `myDrawMeshUsingTransform()` aufgerufen, um das Mesh des Controllers zu zeichnen, das mit der Transformationsmatrix der Grip Pose transformiert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
