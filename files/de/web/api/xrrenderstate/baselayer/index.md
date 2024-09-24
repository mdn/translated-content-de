---
title: "XRRenderState: baseLayer-Eigenschaft"
short-title: baseLayer
slug: Web/API/XRRenderState/baseLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`baseLayer`**-Eigenschaft der {{domxref("XRRenderState")}}-Schnittstelle gibt die Instanz von {{domxref("XRWebGLLayer")}} zurück, die die Quelle der Bitmap-Bilder ist und eine Beschreibung, wie das Bild auf dem Gerät gerendert werden soll.

Diese Eigenschaft ist schreibgeschützt; allerdings können Sie ihren Wert indirekt ändern, indem Sie {{domxref("XRSession.updateRenderState")}} verwenden.

## Wert

Ein {{domxref("XRWebGLLayer")}}-Objekt, das als Quelle des Weltinhalts beim Rendern jedes Frames der Szene verwendet wird.

Siehe die Beispiele unten, um zu sehen, wie Sie {{domxref("XRSession.updateRenderState", "updateRenderState()")}} nutzen können, um die aktuelle `XRWebGLLayer` festzulegen, die für das Rendering der Szene verwendet wird.

## Beispiele

Sie können die `XRWebGLLayer`, die für das Rendering verwendet wird, festlegen, indem Sie {{domxref("XRSession.updateRenderState", "updateRenderState()")}} aufrufen, wie folgt:

```js
let canvas = document.querySelector("canvas");
gl = canvas.getContext("webgl", { xrCompatible: true });
setNewWebGLLayer();

function setNewWebGLLayer(gl) {
  if (!gl) {
    /* WebGL nicht verfügbar */
    return;
  }

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl),
  });
}
```

Hierbei ist das in der ersten Zeile erhaltene Canvas das Canvas, in das WebGL zeichnen wird. Dieser Kontext wird in {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}} übergeben, um eine `XRWebGLLayer` zu erstellen, die den Inhalt des WebGL-Kontextes `gl` als Quelle des Weltbildes während der Präsentation verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
