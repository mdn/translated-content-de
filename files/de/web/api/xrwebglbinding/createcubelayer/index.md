---
title: "XRWebGLBinding: Methode createCubeLayer()"
short-title: createCubeLayer()
slug: Web/API/XRWebGLBinding/createCubeLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCubeLayer()`** Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding) Schnittstelle gibt ein [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Objekt zurück, welches eine Ebene ist, die direkt aus einer [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und sie auf die Innenflächen eines Würfels projiziert.

## Syntax

```js-nolint
createCubeLayer(init)
```

### Parameter

- `init`
  - : Ein Objekt zur Konfiguration des [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer). Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` enthalten. `init` hat die folgenden Eigenschaften:
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Farbetextur definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA` (Standard)
          Zusätzlich, für Kontexte mit der aktivierten [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)-Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)-Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)-Erweiterung:
        - Alle von der Erweiterung unterstützten [Formate](/de/docs/Web/API/WEBGL_compressed_texture_astc#constants).
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Tiefentextur definiert, oder `0`, was anzeigt, dass die Ebene keine Tiefentextur bereitstellen soll. (In diesem Fall wird [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true` sein.)
        Mögliche Werte für [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Kontexte mit der aktivierten [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung oder für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT` (Standard)
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn er auf true gesetzt ist, angibt, dass Sie nur dann auf diese Ebene zeichnen können, wenn [`needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) `true` ist. Der Standardwert ist `false`.
    - `layout`
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`: Die Ebene passt sich allen Ansichten der Sitzung an.
        - `mono`: Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und beiden Augen präsentiert.
        - `stereo`: Der Benutzer-Agent entscheidet, wie die [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eine oder zwei) zugeordnet und das Layout (oben/unten oder links/rechts) gestaltet wird.
        - `stereo-left-right`: Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`: Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
          Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl an MIP-Ebenen angibt. Der Standardwert ist `1`.
    - `orientation` {{optional_inline}}
      - : Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), der die Orientierung relativ zur `space`-Eigenschaft angibt.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ansichtsebene angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ansichtsebene angibt.

### Rückgabewert

Ein [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Objekt.

## Beispiele

### Erstellen eines XRCubeLayer

Konfigurieren Sie die Cube-Ebene, indem Sie die oben aufgelisteten Eigenschaften in einem Aufruf von `createCubeLayer()` verwenden. Um Ebenen auf das XR-Gerät zu präsentieren, fügen Sie sie dem `layers` Renderzustand hinzu, indem Sie [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) verwenden.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const cubeLayer = xrGlBinding.createCubeLayer({
    space: xrReferenceSpace,
    viewPixelHeight: 512,
    viewPixelWidth: 512,
  });
  xrSession.updateRenderState({
    layers: [cubeLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
