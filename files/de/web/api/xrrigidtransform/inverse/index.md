---
title: "XRRigidTransform: inverse-Eigenschaft"
short-title: inverse
slug: Web/API/XRRigidTransform/inverse
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`inverse`**-Eigenschaft der {{domxref("XRRigidTransform")}}-Schnittstelle gibt ein weiteres {{domxref("XRRigidTransform")}}-Objekt zurück, das das Inverse seiner eigenen Transformation ist. Das bedeutet, Sie können das Inverse eines jeden `XRRigidTransform`-Objekts mithilfe seiner `inverse`-Eigenschaft erhalten, anstatt es explizit zu erzeugen.

## Wert

Ein {{domxref("XRRigidTransform")}}, das das Inverse des `XRRigidTransform` enthält, auf dem darauf zugegriffen wird.

Das Anwenden des Inversen einer Transformation auf ein Objekt, das zuvor von dem übergeordneten `XRRigidTransform` transformiert wurde, hebt stets die Transformation auf. Das Objekt kehrt zu seiner vorherigen Pose zurück. Mit anderen Worten: Sowohl die Position als auch die Ausrichtung kehren in ihre vorherigen Konfigurationen zurück.

## Beispiele

In diesem Beispiel wird die Model-View-Matrix für ein Objekt berechnet, indem die View-Matrix mit der Pose-Matrix des Objekts multipliziert wird.

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

Diese Übersicht über den Kerncode eines Renderers zeigt, wie die Ansicht der Pose dargestellt wird, indem die Matrix des Inversen der Transformation als Model-View-Matrix verwendet wird, um Objekte basierend auf der Position und Ausrichtung des Betrachters zu transformieren. Die Matrix des Inversen wird mit der Matrix des Objekts multipliziert, um die Model-View-Matrix zu erhalten, die dann in das Shader-Programm übergeben wird, indem ein Uniform gesetzt wird, das diese Information enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
