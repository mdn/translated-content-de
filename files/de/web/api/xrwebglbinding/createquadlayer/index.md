---
title: "XRWebGLBinding: createQuadLayer() Methode"
short-title: createQuadLayer()
slug: Web/API/XRWebGLBinding/createQuadLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createQuadLayer()`**-Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Schnittstelle gibt ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt zurück, welches eine Ebene darstellt, die einen flachen, rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createQuadLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer). Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` enthalten. `init` hat die folgenden Eigenschaften:
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Farbtextur-Daten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit der aktivierten [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)-Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich, für Kontexte mit der aktivierten [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)-Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit der aktivierten [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)-Erweiterung:
        - Alle vom Erweiterung unterstützten Formate.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Tiefentextur-Daten definiert, oder `0`, was anzeigt, dass die Ebene keine Tiefentextur bereitstellen soll (in diesem Fall wird [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true` sein).
        Mögliche Werte innerhalb von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Kontexten mit der aktivierten [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung oder innerhalb von [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `height` {{optional_inline}}
      - : Eine Zahl, die die Höhe der Ebene in Metern angibt. Der Standardwert ist `1.0`.
    - `isStatic` {{optional_inline}}
      - : Ein Boolean, der, falls wahr, angibt, dass Sie nur auf diese Ebene zeichnen können, wenn [`needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`
          - : Die Ebene enthält alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt und beiden Augen präsentiert.
        - `stereo`
          - : Der Benutzer-Agent entscheidet, wie er das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eines oder zwei) und das Layout (oben/unten oder links/rechts) zuweist.
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl der Mip-Ebenen angibt. Der Standardwert ist `1`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur angibt, den die Ebene haben wird. Mögliche Werte:
        - `texture`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2 Kontexte).
            Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Offset und die Orientierung relativ zu `space` definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ansicht der Ebene angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ansicht der Ebene angibt.
    - `width` {{optional_inline}}
      - : Eine Zahl, die die Breite der Ebene in Metern angibt. Der Standardwert ist `1.0`.

### Rückgabewert

Ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Objekt.

## Beispiele

### Erstellen eines `XRQuadLayer`

Konfigurieren Sie das Quad-Layer unter Verwendung der oben aufgeführten Eigenschaften in einem Aufruf von `createQuadLayer()`. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers` Renderzustand mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

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

- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
