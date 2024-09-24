---
title: "XRWebGLBinding: createQuadLayer()-Methode"
short-title: createQuadLayer()
slug: Web/API/XRWebGLBinding/createQuadLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createQuadLayer()`**-Methode der {{domxref("XRWebGLBinding")}}-Schnittstelle gibt ein {{domxref("XRQuadLayer")}}-Objekt zurück, das eine Ebene darstellt, die einen flachen rechteckigen Bereich in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createQuadLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des {{domxref("XRQuadLayer")}}. Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` enthalten. `init` hat die folgenden Eigenschaften:
    - `colorFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Farbtexturdaten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich für Kontexte mit der aktivierten {{domxref("EXT_sRGB")}}-Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich für {{domxref("WebGL2RenderingContext")}}-Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich für Kontexte mit der aktivierten {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich für Kontexte mit der aktivierten {{domxref("WEBGL_compressed_texture_astc")}}-Erweiterung:
        - Alle von der Erweiterung unterstützten Formate.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp der Tiefentexturdaten definiert, oder `0`, was angibt, dass die Ebene keine Tiefentextur bereitstellen soll (in diesem Fall ist {{domxref("XRProjectionLayer.ignoreDepthValues")}} `true`).
        Mögliche Werte innerhalb von {{domxref("WebGLRenderingContext")}}-Kontexten mit der aktivierten {{domxref("WEBGL_depth_texture")}}-Erweiterung oder innerhalb von {{domxref("WebGL2RenderingContext")}}-Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich für {{domxref("WebGL2RenderingContext")}}-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `height` {{optional_inline}}
      - : Eine Zahl, die die Höhe der Ebene in Metern angibt. Der Standardwert ist `1.0`.
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn er wahr ist, angibt, dass Sie diese Ebene nur zeichnen können, wenn {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`
          - : Die Ebene passt sich allen Ansichten der Sitzung an.
        - `mono`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird erstellt und beiden Augen präsentiert.
        - `stereo`
          - : Der User-Agent entscheidet, wie das {{domxref("XRSubImage")}} (eines oder zwei) zugewiesen wird und das Layout (oben/unten oder links/rechts).
        - `stereo-left-right`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge sieht den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge sieht den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl von Mip-Leveln angibt. Der Standardwert ist `1`.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}}-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der die Art der Textur definiert, die die Ebene haben wird. Mögliche Werte:
        - `texture`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} sind vom Typ `gl.TEXTURE_2D`.
        - `texture-array`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} sind vom Typ `gl.TEXTURE_2D_ARRAY` (nur WebGL 2-Kontexte).
            Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}}-Objekt, das den Offset und die Orientierung relativ zu `space` definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ansicht der Ebene angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ansicht der Ebene angibt.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Breite der Ebene in Metern angibt. Der Standardwert ist `1.0`.

### Rückgabewert

Ein {{domxref("XRQuadLayer")}}-Objekt.

## Beispiele

### Erstellen einer `XRQuadLayer`

Konfigurieren Sie die Quad-Ebene mit den oben aufgeführten Eigenschaften in einem Aufruf von `createQuadLayer()`. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers`-Renderstatus mithilfe von {{domxref("XRSession.updateRenderState()")}} hinzu.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({
    space: xrReferenceSpace,
    viewPixelHeight: 512,
    viewPixelWidth: 512,
    transform: new XRRigidTransform({ z: -2 }),
  });
  xrSession.updateRenderState({
    layers: [quadLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRQuadLayer")}}
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
