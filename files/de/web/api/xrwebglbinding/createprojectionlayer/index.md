---
title: "XRWebGLBinding: Methode createProjectionLayer()"
short-title: createProjectionLayer()
slug: Web/API/XRWebGLBinding/createProjectionLayer
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createProjectionLayer()`**-Methode des [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Interfaces gibt ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Objekt zurück, das eine Ebene darstellt, die die gesamte Sicht des Beobachters ausfüllt und nahe der nativen Bildrate des Geräts aktualisiert wird.

## Syntax

```js-nolint
createProjectionLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer).
    - `textureType` {{optional_inline}}
      - : Ein String, der den Texturtyp der Ebene definiert. Mögliche Werte:
        - `texture`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2-Kontexte).
            Der Standardwert ist `texture`.
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Farbtexturdaten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit aktivierter [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)-Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Tiefentexturdaten definiert oder `0`, was anzeigt, dass die Ebene keine Tiefentextur bereitstellen soll. (In diesem Fall wird [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true` sein.)
        Mögliche Werte in [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Kontexten mit aktivierter [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung oder in [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `scaleFactor` {{optional_inline}}
      - : Ein Gleitkommawert, der verwendet wird, um die Ebene während der Komposition zu skalieren. Ein Wert von `1.0` stellt die Standard-Pixelgröße für den Framebuffer dar. (Siehe auch [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static).) Im Gegensatz zu anderen Ebenen kann die `XRProjectionLayer` nicht mit einer expliziten Pixelbreite und -höhe erstellt werden, da die Größe durch die Hardware bestimmt wird. (Projektionsebenen füllen die gesamte Sicht des Beobachters aus.)

### Rückgabewert

Ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)-Objekt.

## Beispiele

### Erstellen einer `XRProjectionLayer` in einem WebGL 2-Kontext

Die `textureType`-Option ermöglicht stattdessen die Zuordnung eines Texturarrays, bei dem jedes [`XRView`](/de/docs/Web/API/XRView) in eine separate Ebene des Arrays gerendert wird. Dies ermöglicht einige Renderoptimierungen, wie die Nutzung der [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2)-Erweiterung, die in WebGL 2-Kontexten verfügbar ist.

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

- [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer)
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
