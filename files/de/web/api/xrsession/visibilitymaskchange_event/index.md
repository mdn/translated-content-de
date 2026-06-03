---
title: "XRSession: visibilitymaskchange Ereignis"
short-title: visibilitymaskchange
slug: Web/API/XRSession/visibilitymaskchange_event
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`visibilitymaskchange`**-Ereignis wird an eine [`XRSession`](/de/docs/Web/API/XRSession) gesendet, wenn sich der sichtbare Teil einer [`XRView`](/de/docs/Web/API/XRView) für den Benutzer ändert.

Beachten Sie, dass die Ansicht mit einem bestimmten Auge verbunden ist und der sichtbare Teil für den Benutzer durch eine Sichtbarkeitsmaske definiert wird. Weitere Informationen finden Sie in der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle.

Dies ermöglicht Leistungsverbesserungen, indem es dem Browser erlaubt, nur den sichtbaren Teil der aktualisierten Ansicht zu zeichnen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js-nolint
addEventListener("visibilitymaskchange", (event) => { })

onvisibilitymaskchange = (event) => { }
```

## Ereignistyp

Ein [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("XRVisibilityMaskChangeEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch die Eigenschaften der übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), verfügbar._

- [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye) {{ReadOnlyInline}}
  - : Das Auge, auf das die Maske zutrifft.
- [`index`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/index) {{ReadOnlyInline}}
  - : Der Index der aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array.
- [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices) {{ReadOnlyInline}}
  - : Ein Array von Indizes, das die in dem `vertices`-Array spezifizierten Vertices angibt, die gezeichnet werden sollen, um den aktuell sichtbaren Teil der in der `XRView` angezeigten Szene darzustellen. Wenn dieses Array leer ist, wird die gesamte Region der `XRView` gezeichnet.
- [`session`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), auf die sich das Ereignis bezieht.
- [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) {{ReadOnlyInline}}
  - : Ein Array von Koordinaten, das die Vertices repräsentiert, die benötigt werden, um die gesamte in der `XRView` angezeigte Szene zu zeichnen. Wenn dieses Array leer ist, wird die gesamte Region der `XRView` gezeichnet.

## Beispiele

### Three.js Beispiel

Dieses Snippet zeigt, wie `visibilitymaskchange` verwendet werden könnte, um nur den sichtbaren Teil der `XRView` in einer Three.js-Anwendung zu zeichnen. Die neue Ansicht muss unter Verwendung der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) der relevanten `XRView` und einer standardmäßigen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

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

Das Code-Snippet stammt von [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
