---
title: "XRRigidTransform: inverse-Eigenschaft"
short-title: inverse
slug: Web/API/XRRigidTransform/inverse
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inverse`**-Eigenschaft
der [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Schnittstelle gibt ein weiteres
[`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt zurück, das das Inverse ihrer
besitzenden Transformation ist. Das heißt, Sie können immer das Inverse eines beliebigen
`XRRigidTransform` über dessen `inverse`-Eigenschaft erhalten, anstatt es explizit generieren zu müssen.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), das das Inverse des
`XRRigidTransform` enthält, auf dem es zugegriffen wird.

Das Anwenden des Inversen einer Transformation auf ein beliebiges zuvor durch das übergeordnete
`XRRigidTransform` transformiertes Objekt hebt die Transformation immer auf und bewirkt, dass das Objekt
zu seiner vorherigen Pose zurückkehrt. Mit anderen Worten, seine Position und Orientierung kehren beide
zu ihren vorherigen Konfigurationen zurück.

## Beispiele

In diesem Beispiel wird die Modellansichtsmatrix für ein Objekt berechnet, indem die Ansichts-
matrix mit der Posenmatrix des Objekts multipliziert wird.

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

Dieser Umriss des Kerncodes eines Renderers zeigt, wie die Ansicht der Pose dargestellt wird,
indem die Matrix des Inversen ihrer Transformation als die Modellansichtsmatrix verwendet wird,
um Objekte basierend auf der Position und Orientierung des Betrachters zu transformieren. Die Matrix des Inversen
wird mit der Matrix des Objekts multipliziert, um die Modellansichtsmatrix zu erhalten, die dann
in das Shader-Programm durch das Setzen eines Uniforms eingebracht wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
