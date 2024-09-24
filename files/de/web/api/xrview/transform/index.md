---
title: "XRView: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRView/transform
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`transform`**-Eigenschaft der {{domxref("XRView")}}-Schnittstelle ist ein {{domxref("XRRigidTransform")}}-Objekt, das die Position und Orientierung des Standpunkts relativ zu dem {{domxref("XRReferenceSpace")}} bereitstellt, der angegeben wurde, als die Methode {{domxref("XRFrame.getViewerPose()")}} aufgerufen wurde, um das Ansichtsobjekt zu erhalten.

Mit `transform` können Sie die Ansicht als Kamera innerhalb der 3D-Szene positionieren. Wenn Sie stattdessen die traditionellere View-Matrix benötigen, können Sie diese mit `view.transform.inverse.matrix` erhalten; dies erhält die zugrunde liegende {{domxref("XRRigidTransform.matrix", "Matrix")}} der {{domxref("XRRigidTransform.inverse", "Inversen")}} des Transforms.

## Wert

Ein {{domxref("XRRigidTransform")}}-Objekt, das die Position und Orientierung des durch die `XRView` repräsentierten Standpunkts angibt.

## Beispiele

Für jede Ansicht, die die dargestellte Szene ausmacht, repräsentiert das `transform` der Ansicht die Position und Orientierung des Betrachters oder der Kamera relativ zum Ursprung des Referenzraums. Sie können dann die Inverse dieser Matrix verwenden, um die Objekte in Ihrer Szene zu transformieren und deren Platzierung und Orientierung anzupassen, um die Bewegung des Betrachters durch den Raum zu simulieren.

In diesem Beispiel sehen wir den Umriss eines Codefragments, das beim Rendern eines {{domxref("XRFrame")}} verwendet wird und den View-Transform nutzt, um Objekte während des Renderns in der Welt zu platzieren.

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

Zwei Matrizen werden außerhalb der Render-Schleife erstellt; dies vermeidet das wiederholte Zuweisen und Freigeben der Matrizen und reduziert im Allgemeinen den Overhead, indem dieselbe Matrix für jedes gerenderte Objekt wiederverwendet wird.

Dann iterieren wir über jede {{domxref("XRView")}}, die in der Liste der {{domxref("XRViewerPose.views", "Ansichten")}} des {{domxref("XRViewerPose")}} gefunden wird. In der Regel gibt es zwei: eine für das linke Auge und eine für das rechte, es könnte jedoch auch nur eine im monokularen Modus sein. Derzeit unterstützt WebXR nicht mehr als zwei Ansichten pro Pose, obwohl Raum für eine Erweiterung der Spezifikation gelassen wurde, um dies in der Zukunft mit einigen Ergänzungen der API zu unterstützen.

Für jede Ansicht erhalten wir ihr Viewport und übergeben diesen an WebGL mit {{domxref("WebGLRenderingContext.viewport", "gl.viewport()")}}. Für das linke Auge wird dies die linke Hälfte der Leinwand sein, während das rechte Auge die rechte Hälfte verwendet.

Dann iterieren wir über jedes Objekt, das die Szene ausmacht. Die Model-View-Matrix jedes Objekts wird berechnet, indem seine eigene Matrix, die die eigene Position und Orientierung des Objekts beschreibt, mit den zusätzlichen Positions- und Orientierungsanpassungen multipliziert wird, die erforderlich sind, um die Bewegung der Kamera widerzuspiegeln. Um die "kameraorientierte" Transformationsmatrix in eine "objektorientierte" Umwandlung zu konvertieren, verwenden wir die Inverse des Transforms, wodurch die von {{domxref("XRRigidTransform.matrix", "view.transform.inverse.matrix")}} zurückgegebene Matrix umgewandelt wird. Die resultierende Model-View-Matrix wird alle benötigten Transformationen anwenden, um das Objekt basierend auf den relativen Positionen des Objekts und der Kamera zu bewegen und zu drehen. Dies simuliert die Bewegung der Kamera, obwohl wir tatsächlich das Objekt bewegen.

Wir berechnen dann die Normalen für die Model-View-Matrix, indem wir sie invertieren und dann transponieren.

Abschließend rufen wir die `render()`-Routine des Objekts auf und übergeben die `modelViewMatrix` und `normalMatrix`, damit der Renderer das Objekt richtig platzieren und beleuchten kann.

> [!NOTE]
> Dieses Beispiel ist von einem größeren Beispiel abgeleitet…
> **<<<--- ergänzen und Link hinzufügen --->>>**

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
