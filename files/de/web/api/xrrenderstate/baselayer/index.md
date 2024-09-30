---
title: "XRRenderState: baseLayer-Eigenschaft"
short-title: baseLayer
slug: Web/API/XRRenderState/baseLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`baseLayer`**-Eigenschaft der [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Schnittstelle gibt die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Instanz zurück, die die Quelle für Bitmap-Bilder ist und eine Beschreibung liefert, wie das Bild auf dem Gerät gerendert werden soll.

Diese Eigenschaft ist schreibgeschützt; Sie können ihren Wert jedoch indirekt mithilfe von [`XRSession.updateRenderState`](/de/docs/Web/API/XRSession/updateRenderState) ändern.

## Wert

Ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, das als Quelle für die Inhalte der Welt beim Rendern jedes Bildes der Szene verwendet wird.

Sehen Sie sich die untenstehenden Beispiele an, um zu sehen, wie Sie [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) verwenden, um die aktuelle `XRWebGLLayer` festzulegen, die zum Rendern der Szene verwendet wird.

## Beispiele

Sie können die `XRWebGLLayer`, die zum Rendern verwendet wird, durch Aufruf von [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) festlegen, wie folgt:

```js
let canvas = document.querySelector("canvas");
gl = canvas.getContext("webgl", { xrCompatible: true });
setNewWebGLLayer();

function setNewWebGLLayer(gl) {
  if (!gl) {
    /* WebGL not available */
    return;
  }

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });
}
```

Hier ist die Leinwand, die in der ersten Zeile erhalten wird, die Leinwand, in die WebGL zeichnen wird. Dieser Kontext wird in [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) übergeben, um eine `XRWebGLLayer` zu erstellen, die die Inhalte des WebGL-Kontextes `gl` als Quelle des Weltbildes während der Präsentation verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
