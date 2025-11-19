---
title: "XRSession: updateRenderState() Methode"
short-title: updateRenderState()
slug: Web/API/XRSession/updateRenderState
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die `updateRenderState()`-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle der [WebXR API](/de/docs/Web/API/WebXR_Device_API) plant Änderungen, die auf den aktiven Render-Zustand ([`XRRenderState`](/de/docs/Web/API/XRRenderState)) angewendet werden sollen, bevor das nächste Frame gerendert wird.

## Syntax

```js-nolint
updateRenderState()
updateRenderState(state)
```

### Parameter

- `state` {{Optional_Inline}}
  - : Ein optionales Objekt zur Konfiguration des [`XRRenderState`](/de/docs/Web/API/XRRenderState). Wenn keines bereitgestellt wird, wird eine Standardkonfiguration verwendet.
    - `baseLayer` {{Optional_Inline}}: Ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, aus dem der WebXR-Kompositor Bilder erhält. Der Standardwert ist `null`. Um andere (oder mehrere) Ebenen anzugeben, siehe die `layers`-Option.
    - `depthFar` {{Optional_Inline}}: Ein Gleitkommawert, der die Entfernung in Metern vom Betrachter zur Fernsicht-Ebene (far clip plane) angibt, eine Ebene, die parallel zur Anzeigefläche liegt und jenseits derer keine weitere Darstellung erfolgt. Alle Renderings finden zwischen den durch `depthNear` und `depthFar` angegebenen Entfernungen statt. Der Standardwert ist 1000 Meter (1 Kilometer).
    - `depthNear` {{Optional_Inline}}: Ein Gleitkommawert, der die Entfernung in Metern vom Betrachter zu einer Ebene angibt, die parallel zur Anzeigefläche ist und als **Nahsicht-Ebene** dient. Kein Teil der Szene wird auf der Betrachterseite dieser Ebene gerendert. Der Standardwert ist 0,1 Meter (10 Zentimeter).
    - `inlineVerticalFieldOfView` {{Optional_Inline}}: Ein Gleitkommawert, der das Standard-Sichtfeld in Radiant angibt, das bei der Berechnung der Projektionsmatrix für eine `inline`-[`XRSession`](/de/docs/Web/API/XRSession) verwendet wird. Die Berechnung der Projektionsmatrix berücksichtigt auch das {{Glossary("aspect_ratio", "Seitenverhältnis")}} der Ausgabefläche. Diese Eigenschaft _darf nicht_ für immersive Sitzungen angegeben werden, daher ist der Wert standardmäßig `null` für immersive Sitzungen. Der Standardwert ist ansonsten π \* 0,5 (die Hälfte von Pi).
    - `layers` {{Optional_Inline}}: Ein geordnetes Array von [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekten, die die Ebenen angeben, die dem XR-Gerät präsentiert werden sollen. Das Setzen von `layers` überschreibt `baseLayer`, falls eines vorhanden ist, wobei `baseLayer` `null` meldet. Die Reihenfolge der angegebenen Ebenen ist "hinten nach vorne". Für Alpha-Blending von Ebenen siehe die [`XRCompositionLayer.blendTextureSourceAlpha`](/de/docs/Web/API/XRCompositionLayer/blendTextureSourceAlpha)-Eigenschaft.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Die [`XRSession`](/de/docs/Web/API/XRSession) ist bereits beendet, sodass der Render-Zustand nicht mehr geändert werden kann.
    - `baseLayer` wurde von einer anderen `XRSession` als derjenigen erstellt, auf der `updateRenderState()` aufgerufen wurde.
    - Die `inlineVerticalFieldOfView`-Option wurde festgelegt, aber die Sitzung ist immersiv und erlaubt diese Eigenschaft daher nicht.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Die `layers`-Option wird in einer Sitzung verwendet, die ohne das `layers`-Feature erstellt wurde.
    - Sowohl die `baseLayer`- als auch die `layers`-Optionen sind angegeben.

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `layers`-Option doppelte Instanzen enthält.

## Beispiele

### Hinzufügen eines `baseLayer`

Dieses Beispiel erstellt einen WebGL-Kontext, der mit einem immersiven XR-Gerät kompatibel ist, und verwendet ihn dann, um einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu erstellen. Anschließend wird die Methode `updateRenderState()` aufgerufen, um die neue `XRWebGLLayer` zuzuordnen.

```js
function onXRSessionStarted(xrSession) {
  let glCanvas = document.createElement("canvas");
  let gl = glCanvas.getContext("webgl", { xrCompatible: true });

  loadWebGLResources();

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });
}
```

### Festlegen des `layers`-Arrays

Um WebXR-Ebenen zu verwenden, muss die XR-Sitzung mit dem `layers`-Feature-Deskriptor erstellt werden (siehe [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)). Sie können dann verschiedene WebXR-Ebenen erstellen, wie

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)

Andere Ebenen, wie z. B. [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) oder [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), sind ebenfalls verfügbar.

Ebenen werden in der Reihenfolge präsentiert, in der sie im `layers`-Array angegeben sind, mit Ebenen in "hinten nach vorne"-Reihenfolge.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["layers"],
});

function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = new XRWebGLLayer(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({
    pixelWidth: 1024,
    pixelHeight: 1024,
  });

  xrSession.updateRenderState({
    layers: [projectionLayer, quadLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [`XRRenderState`](/de/docs/Web/API/XRRenderState)
- [`XRSession.renderState`](/de/docs/Web/API/XRSession/renderState)
