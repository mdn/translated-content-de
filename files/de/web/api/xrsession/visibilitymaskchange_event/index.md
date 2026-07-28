---
title: "XRSession: visibilitymaskchange-Ereignis"
short-title: visibilitymaskchange
slug: Web/API/XRSession/visibilitymaskchange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitymaskchange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich der für den Benutzer sichtbare Teil einer [`XRView`](/de/docs/Web/API/XRView) ändert.

Beachten Sie, dass die Ansicht mit einem bestimmten Auge verbunden ist und der sichtbare Teil für den Benutzer durch eine Sichtbarkeitsmaske definiert ist. Weitere Informationen finden Sie in der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle.

Dies ermöglicht Leistungsverbesserungen, indem der Browser nur den sichtbaren Teil der aktualisierten Ansicht zeichnet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("visibilitymaskchange", (event) => { })

onvisibilitymaskchange = (event) => { }
```

## Ereignistyp

Ein [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRVisibilityMaskChangeEvent")}}

## Beispiele

### Three.js-Beispiel

Dieses Snippet zeigt, wie `visibilitymaskchange` verwendet werden könnte, um in einer Three.js-Anwendung nur den sichtbaren Teil der `XRView` zu zeichnen. Die neue Ansicht muss mit der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) der entsprechenden `XRView` und einem Standard-[`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

```js
session.addEventListener("visibilitymaskchange", onVisibilityMaskChange);

function onVisibilityMaskChange(event) {
  const geometry = new BufferGeometry();
  geometry.setIndex(new BufferAttribute(event.indices, 1));
  const vertices = new Float32Array((event.vertices.length / 2) * 3);
  let x = 0,
    y = 0;
  while (x < event.vertices.length) {
    vertices[y++] = event.vertices[x++];
    vertices[y++] = event.vertices[x++];
    vertices[y++] = -1;
  }

  geometry.setAttribute("position", new BufferAttribute(vertices, 3));

  const mask = event.eye === "left" ? leftEyeMask : rightEyeMask;
  const matrix = cameras[event.eye === "left" ? 0 : 1].projectionMatrix;
  mask.geometry = geometry;
  mask.material = new ShaderMaterial({
    vertexShader: _visibility_mask_vertex,
    fragmentShader: _visibility_mask_fragment,
    uniforms: {
      clipMatrix: { value: matrix },
    },
  });

  maskScene = new Scene();
  maskScene.add(leftEyeMask);
  maskScene.add(rightEyeMask);
}
```

Der Code-Schnipsel stammt aus [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
