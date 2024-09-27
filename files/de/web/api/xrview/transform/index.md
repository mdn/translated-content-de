---
title: "XRView: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRView/transform
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`transform`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des Standpunkts relativ zum [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) bietet, der beim Aufrufen der Methode [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) angegeben wurde, um das Ansichtsobjekt zu erhalten.

Mit dem `transform` können Sie die Ansicht als Kamera innerhalb der 3D-Szene positionieren. Wenn Sie stattdessen die traditionellere View-Matrix benötigen, können Sie diese über `view.transform.inverse.matrix` erhalten; dies erhält die zugrunde liegende [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der inversen [`inverse`](/de/docs/Web/API/XRRigidTransform/inverse) des Transforms.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des durch die `XRView` dargestellten Standpunkts angibt.

## Beispiele

Für jede Ansicht, die die dargestellte Szene bildet, repräsentiert das `transform` der Ansicht die Position und Orientierung des Betrachters oder der Kamera relativ zum Ursprung des Referenzraums. Sie können dann die Inverse dieser Matrix verwenden, um die Objekte in Ihrer Szene zu transformieren, ihre Platzierung und Orientierung anzupassen und so die Bewegung des Betrachters durch den Raum zu simulieren.

In diesem Beispiel sehen wir einen Umriss eines Codefragments, das während des Renderings eines [`XRFrame`](/de/docs/Web/API/XRFrame) verwendet wird und das Ansichtstransform verwendet, um Objekte während des Renderings in der Welt zu platzieren.

```js
const modelViewMatrix = mat4.create();
const normalMatrix = mat4.create();

for (const view of pose.views) {
  const viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  for (const obj of world.objects) {
    mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, obj.matrix);
    mat4.invert(normalMatrix, modelViewMatrix);
    mat4.transpose(normalMatrix, normalMatrix);

    obj.render(modelViewMatrix, normalMatrix);
  }
}
```

Zwei Matrizen werden außerhalb der Rendering-Schleife erstellt; dies vermeidet, dass Matrizen wiederholt zugewiesen und freigegeben werden, und reduziert im Allgemeinen den Overhead, indem dieselbe Matrix für jedes gerenderte Objekt wiederverwendet wird.

Dann iterieren wir über jede [`XRView`](/de/docs/Web/API/XRView), die in der Liste der [`views`](/de/docs/Web/API/XRViewerPose/views) von [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) gefunden wird. Es gibt normalerweise zwei: eine für das linke Auge und eine für das rechte, aber es kann auch nur eine sein, wenn sich der Modus im Monoskop-Betrieb befindet. Derzeit unterstützt WebXR nicht mehr als zwei Ansichten pro Pose, obwohl Raum gelassen wurde, die Spezifikation in Zukunft mit einigen Ergänzungen der API zu erweitern.

Für jede Ansicht erhalten wir deren Viewport und übergeben diesen an WebGL mit [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport). Für das linke Auge wird dies die linke Hälfte der Leinwand sein, während das rechte Auge die rechte Hälfte verwendet.

Dann iterieren wir über jedes Objekt, das die Szene bildet. Die Modellansichtsmatrix jedes Objekts wird berechnet, indem dessen eigene Matrix, die die eigene Position und Orientierung des Objekts beschreibt, mit den zusätzlichen Position- und Orientierungsanpassungen multipliziert wird, die erforderlich sind, um die Bewegung der Kamera zu entsprechen. Um die "kameraorientierte" Transformationsmatrix in eine "objektorierte" Transformation zu konvertieren, verwenden wir die Inverse des Transforms, und zwar die Matrix, die durch [`view.transform.inverse.matrix`](/de/docs/Web/API/XRRigidTransform/matrix) zurückgegeben wird. Die resultierende Modellansichtsmatrix wendet alle Transformierungen an, die erforderlich sind, um das Objekt basierend auf den relativen Positionen des Objekts und der Kamera zu bewegen und zu drehen. Dies wird die Bewegung der Kamera simulieren, obwohl wir tatsächlich das Objekt bewegen.

Wir berechnen dann die Normalen für die Modellansichtsmatrix, indem wir sie invertieren und dann transponieren.

Schließlich rufen wir die `render()`-Routine des Objekts auf und übergeben dabei die `modelViewMatrix` und die `normalMatrix`, damit der Renderer das Objekt korrekt platzieren und beleuchten kann.

> [!NOTE]
> Dieses Beispiel ist aus einem größeren Beispiel abgeleitet…
> **<<<--- beenden und Link hinzufügen --->>>**

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
