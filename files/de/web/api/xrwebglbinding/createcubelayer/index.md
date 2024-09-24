---
title: "XRWebGLBinding: createCubeLayer()-Methode"
short-title: createCubeLayer()
slug: Web/API/XRWebGLBinding/createCubeLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCubeLayer()`**-Methode des {{domxref("XRWebGLBinding")}}-Interfaces gibt ein {{domxref("XRCubeLayer")}}-Objekt zurück, das eine Ebene darstellt, die direkt von einem [Cubemap](https://en.wikipedia.org/wiki/Cube_mapping) rendert und es auf die Innenseiten eines Würfels projiziert.

## Syntax

```js-nolint
createCubeLayer(init)
```

### Parameter

- `init`
  - : Ein Objekt zur Konfiguration der {{domxref("XRCubeLayer")}}. Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` haben. `init` hat die folgenden Eigenschaften:
    - `colorFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Farbetextur-Daten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA` (Standard)
          Zusätzlich für Kontexte mit dem {{domxref("EXT_sRGB")}}-Erweiterung aktiviert:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich für {{domxref("WebGL2RenderingContext")}} Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich für Kontexte mit der {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung aktiviert:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich für Kontexte mit der {{domxref("WEBGL_compressed_texture_astc")}}-Erweiterung aktiviert:
        - Alle von der Erweiterung unterstützten [Formate](/de/docs/Web/API/WEBGL_compressed_texture_astc#constants).
    - `depthFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Tiefentextur-Daten definiert oder `0`, um anzuzeigen, dass die Ebene keine Tiefentextur bereitstellen soll. (In diesem Fall wird {{domxref("XRProjectionLayer.ignoreDepthValues")}} `true` sein.)
        Mögliche Werte für {{domxref("WebGLRenderingContext")}} Kontexte mit der {{domxref("WEBGL_depth_texture")}}-Erweiterung aktiviert oder für {{domxref("WebGL2RenderingContext")}} Kontexte (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT` (Standard)
        - `gl.DEPTH_STENCIL`
          Zusätzlich für {{domxref("WebGL2RenderingContext")}} Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn `true`, anzeigt, dass Sie nur auf diese Ebene zeichnen können, wenn {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} `true` ist. Der Standardwert ist `false`.
    - `layout`
      - : Ein Zeichenfolgenwert, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`: Die Schicht unterstützt alle Ansichten der Sitzung.
        - `mono`: Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen und beiden Augen präsentiert.
        - `stereo`: Der Benutzeragent entscheidet, wie er das {{domxref("XRSubImage")}} zuteilt (eines oder zwei) und das Layout (oben/unten oder links/rechts) gestaltet.
        - `stereo-left-right`: Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`: Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
          Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl von Mip-Leveln spezifiziert. Der Standardwert ist `1`.
    - `orientation` {{optional_inline}}
      - : Ein {{domxref("DOMPointReadOnly")}}, der die Orientierung relativ zur `space`-Eigenschaft angibt.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}}-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ansicht der Ebene angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ansicht der Ebene angibt.

### Rückgabewert

Ein {{domxref("XRCubeLayer")}}-Objekt.

## Beispiele

### Erstellen einer XRCubeLayer

Konfigurieren Sie die Cube-Ebene mithilfe der oben aufgelisteten Eigenschaften in einem Aufruf von `createCubeLayer()`. Um Ebenen auf dem XR-Gerät zu präsentieren, fügen Sie sie dem `layers`-Renderzustand mit {{domxref("XRSession.updateRenderState()")}} hinzu.

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

- {{domxref("XRCubeLayer")}}
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
