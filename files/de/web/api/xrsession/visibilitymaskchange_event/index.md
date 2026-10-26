---
title: "XRSession: visibilitymaskchange-Ereignis"
short-title: visibilitymaskchange
slug: Web/API/XRSession/visibilitymaskchange_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitymaskchange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich der für den Benutzer sichtbare Bereich einer [`XRView`](/de/docs/Web/API/XRView) ändert.

Beachten Sie, dass die Ansicht einem bestimmten Auge zugeordnet ist und der für den Benutzer sichtbare Bereich durch eine Sichtbarkeitsmaske definiert wird. Weitere Informationen finden Sie in der Beschreibung der Schnittstelle [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent).

Dies ermöglicht Leistungsverbesserungen, da der Browser nur den sichtbaren Bereich der aktualisierten Ansicht zeichnen muss.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("visibilitymaskchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onvisibilitymaskchange = (event) => { }
```

## Ereignistyp

Ein [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRVisibilityMaskChangeEvent")}}

## Beispiele

### Three.js-Beispiel

Dieser Ausschnitt zeigt, wie `visibilitymaskchange` verwendet werden kann, um in einer Three.js-Anwendung nur den sichtbaren Bereich der `XRView` zu zeichnen. Die neue Ansicht muss mithilfe der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) der betreffenden `XRView` und eines standardmäßigen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

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

Der Codeausschnitt stammt aus [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
