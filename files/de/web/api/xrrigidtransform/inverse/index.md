---
title: "XRRigidTransform: inverse-Eigenschaft"
short-title: inverse
slug: Web/API/XRRigidTransform/inverse
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inverse`**-Eigenschaft der [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Schnittstelle gibt ein weiteres [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt zurück, das das Inverse seiner eigenen Transformationsdarstellt. Das bedeutet, dass Sie das Inverse eines jeden `XRRigidTransform` immer über seine `inverse`-Eigenschaft erhalten können, anstatt es explizit zu generieren.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das das Inverse des `XRRigidTransform` enthält, auf dem es aufgerufen wird.

Das Anwenden des Inversen einer Transformation auf ein Objekt, das zuvor von dem übergeordneten `XRRigidTransform` transformiert wurde, hebt die Transformation immer auf, was dazu führt, dass das Objekt zu seiner vorherigen Position zurückkehrt. Mit anderen Worten kehren sowohl seine Position als auch seine Orientierung zu ihren früheren Konfigurationen zurück.

## Beispiele

In diesem Beispiel wird die Modell-View-Matrix für ein Objekt berechnet, indem die View-Matrix mit der Pose-Matrix des Objekts multipliziert wird.

```js
const modelViewMatrix = mat4.create();

for (const view of pose.view) {
  const viewport = glLayer.getViewport(view);
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // …

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, objectMatrix);
  gl.uniformMatrix4fv(
    programInfo.uniformLocations.modelViewMatrix,
    false,
    modelViewMatrix,
  );

  // …
}
```

Dieses Grundgerüst des Kerncodes eines Renderers zeigt, wie die Ansicht der Pose dargestellt wird, indem die Matrix des Inversen der Transformation als Modell-View-Matrix verwendet wird, um Objekte basierend auf der Position und Orientierung des Betrachters zu transformieren. Die Matrix des Inversen wird mit der Matrix des Objekts multipliziert, um die Modell-View-Matrix zu erhalten, die dann durch das Setzen eines Uniforms in das Shader-Programm übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
