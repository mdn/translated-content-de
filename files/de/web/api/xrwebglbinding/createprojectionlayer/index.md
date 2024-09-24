---
title: "XRWebGLBinding: createProjectionLayer()-Methode"
short-title: createProjectionLayer()
slug: Web/API/XRWebGLBinding/createProjectionLayer
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createProjectionLayer()`**-Methode der {{domxref("XRWebGLBinding")}}-Schnittstelle gibt ein {{domxref("XRProjectionLayer")}}-Objekt zurück, welches eine Schicht darstellt, die die gesamte Sicht des Beobachters ausfüllt und nahezu mit der nativen Bildrate des Geräts aktualisiert wird.

## Syntax

```js-nolint
createProjectionLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des {{domxref("XRProjectionLayer")}}.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur definiert, den die Schicht haben wird. Mögliche Werte:
        - `texture`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur für WebGL 2-Kontexte).
            Der Standardwert ist `texture`.
    - `colorFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Farbtextur-Daten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit der aktivierten {{domxref("EXT_sRGB")}}-Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für {{domxref("WebGL2RenderingContext")}}-Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Tiefentextur-Daten definiert, oder `0`, was angibt, dass die Schicht keine Tiefentextur bereitstellen soll. (In diesem Fall wird {{domxref("XRProjectionLayer.ignoreDepthValues")}} `true` sein.)
        Mögliche Werte innerhalb von {{domxref("WebGLRenderingContext")}}-Kontexten mit aktivierter {{domxref("WEBGL_depth_texture")}}-Erweiterung, oder innerhalb von {{domxref("WebGL2RenderingContext")}}-Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für {{domxref("WebGL2RenderingContext")}}-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `scaleFactor` {{optional_inline}}
      - : Ein Gleitkommawert, der verwendet wird, um die Schicht während der Komposition zu skalieren. Ein Wert von `1.0` repräsentiert die Standard-Pixelgröße des Framebuffers. (Siehe auch {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor_static", "XRWebGLLayer.getNativeFramebufferScaleFactor()")}}.) Im Gegensatz zu anderen Schichten kann die `XRProjectionLayer` nicht mit einer expliziten Pixelbreite und -höhe erstellt werden, da die Größe durch die Hardware bestimmt wird. (Projektionsschichten füllen die gesamte Sicht des Beobachters aus.)

### Rückgabewert

Ein {{domxref("XRProjectionLayer")}}-Objekt.

## Beispiele

### Erstellen einer `XRProjectionLayer` in einem WebGL 2-Kontext

Die `textureType`-Option ermöglicht es, stattdessen ein Textur-Array zuzuweisen, in welches jede {{domxref("XRView")}} in eine separate Ebene des Arrays gerendert wird. Dies ermöglicht einige Rendering-Optimierungen, wie die Verwendung der {{domxref("OVR_multiview2")}}-Erweiterung, die in WebGL 2-Kontexten verfügbar ist.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = xrGlBinding.createProjectionLayer({
    textureType: "texture-array",
  });
  xrSession.updateRenderState({
    layers: [projectionLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRProjectionLayer")}}
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
