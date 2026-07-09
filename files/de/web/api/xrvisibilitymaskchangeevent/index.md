---
title: XRVisibilityMaskChangeEvent
slug: Web/API/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRVisibilityMaskChangeEvent`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt den Teil einer [`XRView`](/de/docs/Web/API/XRView), der für den Benutzer sichtbar ist, nachdem sich die Ansicht geändert hat, beispielsweise durch Angabe des Auges, für das die Ansicht relevant ist, und der Vertices einer Sichtbarkeitsmaske, die den sichtbaren Teil der Ansicht definiert. Dies ermöglicht Leistungsverbesserungen, indem der Browser nur den sichtbaren Teil der aktualisierten Ansicht zeichnet.

Ein `XRVisibilityMaskChangeEvent`-Objekt steht als das Ereignisobjekt eines [`visibilitymaskchange`](/de/docs/Web/API/XRSession/visibilitymaskchange_event) Ereignisses zur Verfügung, das jedes Mal ausgelöst wird, wenn sich der dem Benutzer angezeigte Teil der Ansicht ändert, um neue Informationen zur Aktualisierung der Ansicht bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`XRVisibilityMaskChangeEvent()`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent) {{experimental_inline}}
  - : Erstellt und gibt ein neues `XRVisibilityMaskChangeEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Neben den von der Elternschnittstelle [`Event`](/de/docs/Web/API/Event) geerbten Eigenschaften bietet `XRVisibilityMaskChangeEvent` die folgenden:_

- [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye) {{ReadOnlyInline}} {{experimental_inline}}
  - : Das Auge, auf das die Maske angewendet wird.
- [`index`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/index) {{ReadOnlyInline}} {{experimental_inline}}
  - : Der Index der aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) Array.
- [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Indexposition jedes Koordinatenpaars (nicht einzelne Array-Indizes) im [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) Array an, die die Dreiecke definieren, die für das Zeichnen des derzeit sichtbaren Teils der Szene im [`XRView`](/de/docs/Web/API/XRView) verwendet werden.
- [`session`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/session) {{ReadOnlyInline}} {{experimental_inline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Ereignis gehört.
- [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array, das die Menge der möglichen Koordinatenwerte darstellt, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird der gesamte Bereich der `XRView` gezeichnet.

## Instanz-Methoden

_Obwohl `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seiner Elternschnittstelle [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Three.js Beispiel

Dieser Ausschnitt zeigt, wie `visibilitymaskchange` verwendet werden könnte, um nur den sichtbaren Teil der `XRView` in einer Three.js-Anwendung zu zeichnen. Die neue Ansicht muss unter Verwendung der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) der relevanten `XRView` und einer Standard-[`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

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

Der Code-Schnipsel ist von [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js) entnommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
