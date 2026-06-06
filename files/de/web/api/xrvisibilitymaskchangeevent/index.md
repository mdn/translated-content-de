---
title: XRVisibilityMaskChangeEvent
slug: Web/API/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRVisibilityMaskChangeEvent`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt den Teil einer [`XRView`](/de/docs/Web/API/XRView), der für den Benutzer sichtbar ist, nachdem sich die Ansicht geändert hat, zum Beispiel durch Angabe des Auges, für das die Ansicht relevant ist, und der Eckpunkte einer Sichtbarkeitsmaske, die den sichtbaren Teil der Ansicht definiert. Dies ermöglicht Leistungsverbesserungen, indem der Browser nur den sichtbaren Teil der aktualisierten Ansicht zeichnet.

Ein `XRVisibilityMaskChangeEvent`-Objekt steht als Ereignisobjekt eines [`visibilitymaskchange`](/de/docs/Web/API/XRSession/visibilitymaskchange_event)-Ereignisses zur Verfügung, das jedes Mal ausgelöst wird, wenn sich der für den Benutzer angezeigte Teil der Ansicht ändert, um neue Informationen zur Aktualisierung der Ansicht bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`XRVisibilityMaskChangeEvent()`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent) {{experimental_inline}}
  - : Erstellt und liefert ein neues `XRVisibilityMaskChangeEvent`-Objekt.

## Instanz-Eigenschaften

_Zusätzlich zu den von ihrer übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften bietet `XRVisibilityMaskChangeEvent` die folgenden:_

- [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye) {{ReadOnlyInline}} {{experimental_inline}}
  - : Das Auge, auf das die Maske angewendet wird.
- [`index`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/index) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Index der aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) Array.
- [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Indexposition jedes Koordinatenpaares (nicht einzelner Array-Index) innerhalb des [`vertices`](#vertices) Arrays an, das die Dreiecke definiert, die zum Zeichnen des derzeit sichtbaren Teils der Szene verwendet werden, die in der [`XRView`](/de/docs/Web/API/XRView) angezeigt wird.
- [`session`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/session) {{ReadOnlyInline}} {{experimental_inline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Ereignis gehört.
- [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array, das die Menge der möglichen Koordinatenwerte repräsentiert, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird die gesamte Region der `XRView` gezeichnet.

## Instanz-Methoden

_Obwohl `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seiner übergeordneten Schnittstelle [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Three.js-Beispiel

Dieses Snippet zeigt, wie `visibilitymaskchange` verwendet werden könnte, um nur den sichtbaren Teil der `XRView` in einer Three.js-Anwendung zu zeichnen. Die neue Ansicht muss mit der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) der relevanten `XRView` und einer Standard-[`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

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

Der Code-Snippet stammt aus [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
