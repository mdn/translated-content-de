---
title: "XRRenderState: baseLayer-Eigenschaft"
short-title: baseLayer
slug: Web/API/XRRenderState/baseLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`baseLayer`**-Eigenschaft der [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Schnittstelle gibt die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Instanz zurück, die die Quelle der Bitmap-Bilder und eine Beschreibung davon ist, wie das Bild auf dem Gerät gerendert werden soll.

Diese Eigenschaft ist schreibgeschützt; Sie können ihren Wert jedoch indirekt mit [`XRSession.updateRenderState`](/de/docs/Web/API/XRSession/updateRenderState) ändern.

## Wert

Ein [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt, das als Quelle des Inhalts der Welt beim Rendern jedes Bildes der Szene verwendet wird.

Sehen Sie sich die folgenden Beispiele an, um zu sehen, wie Sie [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) verwenden, um den aktuellen `XRWebGLLayer` festzulegen, der zum Rendern der Szene verwendet wird.

## Beispiele

Sie können den `XRWebGLLayer`, der zum Rendern verwendet wird, folgendermaßen festlegen, indem Sie [`updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) aufrufen:

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

Hier ist die in der ersten Zeile abgerufene Zeichenfläche die Zeichenfläche, in die WebGL zeichnen wird. Dieser Kontext wird an [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) übergeben, um einen `XRWebGLLayer` zu erstellen, der den Inhalt des WebGL-Kontextes `gl` als Quelle des Bildes während der Präsentation verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
