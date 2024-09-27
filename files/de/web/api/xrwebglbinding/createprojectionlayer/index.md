---
title: "XRWebGLBinding: createProjectionLayer() Methode"
short-title: createProjectionLayer()
slug: Web/API/XRWebGLBinding/createProjectionLayer
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createProjectionLayer()`** Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding) Schnittstelle gibt ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) Objekt zurück, das eine Ebene darstellt, die den gesamten Sichtbereich des Betrachters ausfüllt und mit einer Bildfrequenz nahe der nativen Bildfrequenz des Geräts aktualisiert wird.

## Syntax

```js-nolint
createProjectionLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer).
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur definiert, den die Ebene haben wird. Mögliche Werte:
        - `texture`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2-Kontexte).
            Der Standardwert ist `texture`.
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Farbetexturdaten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit der aktivierten [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Tiefentexturdaten definiert oder `0`, was darauf hinweist, dass die Ebene keine Tiefentextur bereitstellen soll. (In diesem Fall wird [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true` sein.)
        Mögliche Werte innerhalb von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Kontexten mit aktivierter [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung oder innerhalb von [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `scaleFactor` {{optional_inline}}
      - : Ein Gleitkommawert, der verwendet wird, um die Ebene während der Zusammensetzung zu skalieren. Ein Wert von `1.0` repräsentiert die Standard-Pixelgröße für den Framepuffer. (Siehe auch [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static).) Im Gegensatz zu anderen Schichten kann das `XRProjectionLayer` nicht mit einer expliziten Pixelbreite und -höhe erstellt werden, da die Größe von der Hardware abgeleitet wird. (Projektionsschichten füllen die gesamte Sicht des Betrachters aus.)

### Rückgabewert

Ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) Objekt.

## Beispiele

### Erstellen eines `XRProjectionLayer` in einem WebGL 2 Kontext

Die `textureType` Option ermöglicht die Zuweisung eines Textur-Arrays, in dem jedes [`XRView`](/de/docs/Web/API/XRView) auf ein separates Level des Arrays gerendert wird. Dies ermöglicht einige Render-Optimierungen wie die Verwendung der [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2) Erweiterung, die in WebGL 2 Kontexten verfügbar ist.

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
- [WebGL Konstanten](/de/docs/Web/API/WebGL_API/Constants)
