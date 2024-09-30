---
title: "XRView: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRView/transform
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`transform`**-Eigenschaft des [`XRView`](/de/docs/Web/API/XRView)-Interfaces ist ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des Blickpunkts relativ zum [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) angibt, das angegeben wurde, als die Methode [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose) aufgerufen wurde, um das View-Objekt zu erhalten.

Mit dem `transform` können Sie dann die Ansicht als Kamera innerhalb der 3D-Szene positionieren. Wenn Sie stattdessen die traditionellere View-Matrix benötigen, können Sie diese mit `view.transform.inverse.matrix` erhalten; dies liefert die zugrunde liegende [`matrix`](/de/docs/Web/API/XRRigidTransform/matrix) der [`inverse`](/de/docs/Web/API/XRRigidTransform/inverse) des Transforms.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das die Position und Orientierung des durch das `XRView` dargestellten Blickpunkts angibt.

## Beispiele

Für jede Ansicht, die die dargestellte Szene bildet, repräsentiert das `transform` der Ansicht die Position und Orientierung des Betrachters oder der Kamera relativ zum Ursprung des Referenzraums. Sie können dann die Inverse dieser Matrix verwenden, um die Objekte in Ihrer Szene zu transformieren, um ihre Platzierung und Orientierung anzupassen und die Bewegung des Betrachters durch den Raum zu simulieren.

In diesem Beispiel sehen wir einen Umriss eines Codeausschnitts, der während des Renderns eines [`XRFrame`](/de/docs/Web/API/XRFrame) verwendet wird und der das View-Transform verwendet, um Objekte während des Renderings in der Welt zu platzieren.

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

Zwei Matrizen werden außerhalb der Render-Schleife erstellt; dies vermeidet das wiederholte Allokieren und Deallokieren der Matrizen und reduziert im Allgemeinen den Overhead, indem dieselbe Matrix für jedes gerenderte Objekt wiederverwendet wird.

Dann iterieren wir über jedes [`XRView`](/de/docs/Web/API/XRView) in der Liste der [`views`](/de/docs/Web/API/XRViewerPose/views) von [`XRViewerPose`](/de/docs/Web/API/XRViewerPose). In der Regel gibt es zwei: eines für das linke Auge und eines für das rechte, aber es kann auch nur eines sein, wenn der monokulare Modus aktiviert ist. Derzeit unterstützt WebXR nicht mehr als zwei Ansichten pro Pose, obwohl Raum für die Erweiterung der Spezifikation gelassen wurde, um dies in Zukunft mit einigen Ergänzungen zur API zu unterstützen.

Für jede Ansicht erhalten wir ihren Viewport und übergeben diesen mit [`gl.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) an WebGL. Für das linke Auge wird dies die linke Hälfte der Leinwand sein, während das rechte Auge die rechte Hälfte verwendet.

Dann iterieren wir über jedes Objekt, das die Szene bildet. Die Model-View-Matrix jedes Objekts wird berechnet, indem seine eigene Matrix, die die eigene Position und Orientierung des Objekts beschreibt, mit den zusätzlichen Position- und Orientierungsanpassungen multipliziert wird, die erforderlich sind, um die Bewegung der Kamera nachzuvollziehen. Um die "kamera-fokussierte" Transform-Matrix in eine "objekt-fokussierte" zu konvertieren, verwenden wir die Inverse des Transforms, indem wir die Matrix nehmen, die von [`view.transform.inverse.matrix`](/de/docs/Web/API/XRRigidTransform/matrix) geliefert wird. Die resultierende Model-View-Matrix wird alle benötigten Transformationen anwenden, um das Objekt basierend auf den relativen Positionen des Objekts und der Kamera zu bewegen und zu rotieren. Dies simuliert die Bewegung der Kamera, obwohl wir tatsächlich das Objekt bewegen.

Wir berechnen dann die Normalen für die Model-View-Matrix, indem wir sie invertieren und dann transponieren.

Schließlich rufen wir die `render()`-Routine des Objekts auf, wobei wir die `modelViewMatrix` und `normalMatrix` übergeben, damit der Renderer das Objekt korrekt platzieren und beleuchten kann.

> [!NOTE]
> Dieses Beispiel ist aus einem größeren Beispiel abgeleitet...
> **<<<--- finish and add link --->>>**

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
