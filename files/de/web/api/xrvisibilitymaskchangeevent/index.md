---
title: XRVisibilityMaskChangeEvent
slug: Web/API/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`XRVisibilityMaskChangeEvent`** der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) beschreibt den sichtbaren Teil eines [`XRView`](/de/docs/Web/API/XRView) für den Benutzer, nachdem sich die Ansicht geändert hat. Dies erfolgt beispielsweise durch die Angabe des Auges, für das die Ansicht relevant ist, sowie der Eckpunkte einer Sichtbarkeitsmaske, die den sichtbaren Teil der Ansicht definiert. Dies ermöglicht Leistungsverbesserungen, indem der Browser nur den sichtbaren Teil der aktualisierten Ansicht zeichnet.

Ein `XRVisibilityMaskChangeEvent`-Objekt steht als das Ereignisobjekt eines [`visibilitymaskchange`](/de/docs/Web/API/XRSession/visibilitymaskchange_event) Ereignisses zur Verfügung, das jedes Mal ausgelöst wird, wenn sich der sichtbare Teil der Ansicht für den Benutzer ändert, um neue Informationen zur Aktualisierung der Ansicht bereitzustellen.

{{InheritanceDiagram}}

## Konstruktor

- [`XRVisibilityMaskChangeEvent()`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent)
  - : Erstellt und gibt ein neues `XRVisibilityMaskChangeEvent`-Objekt zurück.

## Instanzeigenschaften

_Zusätzlich zu den Eigenschaften, die von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event), geerbt werden, bietet `XRVisibilityMaskChangeEvent` Folgendes:_

- [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye) {{ReadOnlyInline}}
  - : Das Auge, auf das die Maske angewendet wird.
- [`index`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/index) {{ReadOnlyInline}}
  - : Der Index des aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) Array.
- [`indices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/indices) {{ReadOnlyInline}}
  - : Gibt die Indexposition jedes Koordinatenpaares (nicht einzelner Array-Indizes) im [`vertices`](#vertices) Array an, die die Dreiecke definieren, die verwendet werden, um den derzeit sichtbaren Teil der Szene darzustellen, die im [`XRView`](/de/docs/Web/API/XRView) angezeigt wird.
- [`session`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/session) {{ReadOnlyInline}}
  - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Ereignis gehört.
- [`vertices`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/vertices) {{ReadOnlyInline}}
  - : Ein Array, das die Menge möglicher Koordinatenwerte repräsentiert, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird die gesamte Region des `XRView` gezeichnet.

## Instanzmethoden

_Während `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

### Three.js Beispiel

Dieser Ausschnitt zeigt, wie `visibilitymaskchange` verwendet werden könnte, um nur den sichtbaren Teil des `XRView` in einer Three.js-Anwendung zu zeichnen. Die neue Ansicht muss mit der [`XRView.projectionMatrix`](/de/docs/Web/API/XRView/projectionMatrix) des relevanten `XRView` und einem standardmäßigen [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) gezeichnet werden.

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

Der Codeausschnitt stammt von [diesem Fork von WebXRManager.js](https://github.com/cabanier/three.js/blob/78a3227d95fc29e001d8cd139504c643987430c5/src/renderers/webxr/WebXRManager.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
