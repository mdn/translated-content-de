---
title: "XRSession: updateRenderState() Methode"
short-title: updateRenderState()
slug: Web/API/XRSession/updateRenderState
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die `updateRenderState()`-Methode der {{DOMxRef("XRSession")}}-Schnittstelle der [WebXR API](/de/docs/Web/API/WebXR_Device_API) plant Änderungen, die auf den aktiven Renderzustand ({{domxref("XRRenderState")}}) angewendet werden, bevor das nächste Frame gerendert wird.

## Syntax

```js-nolint
updateRenderState()
updateRenderState(state)
```

### Parameter

- `state` {{Optional_Inline}}
  - : Ein optionales Objekt zur Konfiguration des {{domxref("XRRenderState")}}. Wenn keines angegeben wird, wird eine Standardkonfiguration verwendet.
    - `baseLayer` {{Optional_Inline}}: Ein {{domxref("XRWebGLLayer")}}-Objekt, aus dem der WebXR-Compositor das Bildmaterial erhält. Standardmäßig ist dies `null`. Um andere (oder mehrere) Ebenen anzugeben, siehe die Option `layers`.
    - `depthFar` {{Optional_Inline}}: Ein Gleitkommawert, der die Distanz in Metern vom Betrachter zur Fernabschnittsebene angibt, einer Ebene parallel zur Anzeigefläche, jenseits derer keine weitere Darstellung erfolgt. Alle Renderings erfolgen zwischen den durch `depthNear` und `depthFar` angegebenen Distanzen. Standardmäßig sind es 1000 Meter (1 Kilometer).
    - `depthNear` {{Optional_Inline}}: Ein Gleitkommawert, der die Distanz in Metern vom Betrachter zu einer Ebene parallel zur Anzeigefläche angibt, die die **Nahe Abschnittsebene** ist. Kein Teil der Szene auf der Seite des Betrachters dieser Ebene wird gerendert. Standardmäßig sind dies 0,1 Meter (10 Zentimeter).
    - `inlineVerticalFieldOfView` {{Optional_Inline}}: Ein Gleitkommawert, der das standardmäßige Sichtfeld in Radiant angibt, das bei der Berechnung der Projektionsmatrix für eine `inline` {{domxref("XRSession")}} verwendet wird. Die Berechnung der Projektionsmatrix berücksichtigt auch das {{glossary("Aspektverhältnis")}} der Ausgabefläche. Diese Eigenschaft _darf nicht_ für immersive Sitzungen angegeben werden, daher ist der Wert standardmäßig für immersive Sitzungen `null`. Der Standardwert ist sonst π \* 0,5 (halb von pi).
    - `layers` {{Optional_Inline}}: Ein geordnetes Array von {{domxref("XRLayer")}}-Objekten, die die Ebenen angeben, die dem XR-Gerät präsentiert werden sollen. Das Setzen von `layers` überschreibt `baseLayer`, falls eines vorhanden ist, wobei `baseLayer` `null` meldet. Die Reihenfolge der angegebenen Ebenen ist „von hinten nach vorne“. Für Alpha-Blending von Ebenen siehe die Eigenschaft {{domxref("XRCompositionLayer.blendTextureSourceAlpha")}}.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird in folgenden Situationen ausgelöst:
    - Die {{domxref("XRSession")}} wurde bereits beendet, daher können Sie deren Renderzustand nicht ändern.
    - Das `baseLayer` wurde von einer `XRSession` erstellt, die nicht die ist, auf der `updateRenderState()` aufgerufen wurde.
    - Die Option `inlineVerticalFieldOfView` wurde gesetzt, aber die Sitzung ist immersiv und erlaubt daher nicht die Verwendung dieser Eigenschaft.

- `NotSupportedError` {{domxref("DOMException")}}

  - : Wird in folgenden Situationen ausgelöst:
    - Die Option `layers` wird in einer Sitzung verwendet, die ohne das `layers` Feature erstellt wurde.
    - Sowohl die `baseLayer`- als auch die `layers`-Optionen sind angegeben.

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Option `layers` doppelte Instanzen enthält.

## Beispiele

### Hinzufügen eines `baseLayer`

Dieses Beispiel erstellt einen WebGL-Kontext, der mit einem immersiven XR-Gerät kompatibel ist, und verwendet ihn dann, um eine {{DOMxRef("XRWebGLLayer")}} zu erstellen. Die Methode `updateRenderState()` wird dann aufgerufen, um die neue `XRWebGLLayer` zu verknüpfen.

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

Um WebXR-Ebenen zu verwenden, muss die XR-Sitzung mit dem `layers` Feature-Descriptor erstellt werden (siehe {{domxref("XRSystem.requestSession()")}}). Sie können dann verschiedene WebXR-Ebenen erstellen, wie z.B.

- {{domxref("XREquirectLayer")}}
- {{domxref("XRCubeLayer")}}
- {{domxref("XRCylinderLayer")}}
- {{domxref("XRQuadLayer")}}

Andere Ebenen, wie z.B. {{domxref("XRProjectionLayer")}} oder {{domxref("XRWebGLLayer")}}, stehen ebenfalls zur Verfügung.

Ebenen werden in der Reihenfolge präsentiert, in der sie im `layers`-Array angegeben sind, wobei die Ebenen in „von hinten nach vorne“-Reihenfolge angegeben werden.

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
- {{domxref("XRRenderState")}}
- {{domxref("XRSession.renderState")}}
