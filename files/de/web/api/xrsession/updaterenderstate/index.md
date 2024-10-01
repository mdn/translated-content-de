---
title: "XRSession: updateRenderState() Methode"
short-title: updateRenderState()
slug: Web/API/XRSession/updateRenderState
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die `updateRenderState()`-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle der [WebXR API](/de/docs/Web/API/WebXR_Device_API) plant Änderungen, die auf den aktiven Renderzustand ([`XRRenderState`](/de/docs/Web/API/XRRenderState)) vor dem Rendern des nächsten Frames angewendet werden sollen.

## Syntax

```js-nolint
updateRenderState()
updateRenderState(state)
```

### Parameter

- `state` {{Optional_Inline}}
  - : Ein optionales Objekt zur Konfiguration des [`XRRenderState`](/de/docs/Web/API/XRRenderState). Wenn keines bereitgestellt wird, wird eine Standardkonfiguration verwendet.
    - `baseLayer` {{Optional_Inline}}: Ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, aus dem der WebXR-Kompositor das Bildmaterial beziehen wird. Dies ist standardmäßig `null`. Um andere (oder mehrere) Ebenen anzugeben, sehen Sie sich die `layers`-Option an.
    - `depthFar` {{Optional_Inline}}: Ein Gleitkommawert, der den Abstand in Metern vom Betrachter zur entfernten Clipping-Ebene angibt, einer Ebene, die parallel zur Anzeigefläche liegt und über die hinaus keine weitere Darstellung erfolgt. Alle Renderings finden zwischen den durch `depthNear` und `depthFar` angegebenen Entfernungen statt. Standardmäßig sind dies 1000 Meter (1 Kilometer).
    - `depthNear` {{Optional_Inline}}: Ein Gleitkommawert, der den Abstand in Metern vom Betrachter zu einer Ebene parallel zur Anzeigefläche angibt, die die **nahe Clipping-Ebene** ist. Kein Teil der Szene auf der Seite dieser Ebene des Betrachters wird dargestellt. Standardmäßig sind dies 0,1 Meter (10 Zentimeter).
    - `inlineVerticalFieldOfView` {{Optional_Inline}}: Ein Gleitkommawert, der das Standard-Sichtfeld in Bogenmaß angibt, das beim Berechnen der Projektionsmatrix für eine `inline` [`XRSession`](/de/docs/Web/API/XRSession) verwendet werden soll. Die Berechnung der Projektionsmatrix berücksichtigt auch das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ausgabecanvases. Diese Eigenschaft _darf nicht_ für immersive Sitzungen angegeben werden, sodass der Wert standardmäßig für immersive Sitzungen `null` ist. Der Standardwert ist andernfalls π \* 0,5 (die Hälfte des Werts von Pi).
    - `layers` {{Optional_Inline}}: Ein geordnetes Array von [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekten, die die Ebenen angeben, die dem XR-Gerät präsentiert werden sollen. Das Setzen von `layers` überschreibt `baseLayer`, falls vorhanden, wobei `baseLayer` `null` meldet. Die Reihenfolge der angegebenen Ebenen ist "hinten-nach-vorne". Für Alpha-Blending von Ebenen siehe die [`XRCompositionLayer.blendTextureSourceAlpha`](/de/docs/Web/API/XRCompositionLayer/blendTextureSourceAlpha)-Eigenschaft.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird unter einer der folgenden Bedingungen ausgelöst:
    - Die [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits beendet, sodass Sie deren Renderzustand nicht ändern können.
    - `baseLayer` wurde von einer `XRSession` erstellt, die nicht diejenige ist, auf der `updateRenderState()` aufgerufen wurde.
    - Die `inlineVerticalFieldOfView`-Option wurde eingestellt, aber die Sitzung ist immersiv und erlaubt daher nicht die Verwendung dieser Eigenschaft.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird unter einer der folgenden Bedingungen ausgelöst:
    - Die `layers`-Option wird in einer Sitzung verwendet, die ohne die `layers`-Funktion erstellt wurde.
    - Sowohl die `baseLayer`- als auch die `layers`-Optionen sind angegeben.

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `layers`-Option doppelte Instanzen enthält.

## Beispiele

### Hinzufügen eines `baseLayer`

Dieses Beispiel erstellt einen WebGL-Kontext, der mit einem immersiven XR-Gerät kompatibel ist, und verwendet ihn dann, um einen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) zu erstellen. Die Methode `updateRenderState()` wird dann aufgerufen, um den neuen `XRWebGLLayer` zuzuordnen.

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

### Setzen des `layers`-Arrays

Um WebXR-Schichten zu verwenden, muss die XR-Sitzung mit dem `layers`-Feature-Deskriptor erstellt werden (siehe [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession)). Sie können dann verschiedene WebXR-Schichten erstellen wie

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)

Andere Schichten wie [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) oder [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) sind ebenfalls verfügbar.

Schichten werden in der Reihenfolge, in der sie im `layers`-Array angegeben sind, präsentiert, wobei die Schichten in "hinten-nach-vorne"-Reihenfolge gegeben sind.

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
