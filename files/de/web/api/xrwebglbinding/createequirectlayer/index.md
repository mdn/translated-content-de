---
title: "XRWebGLBinding: createEquirectLayer() Methode"
short-title: createEquirectLayer()
slug: Web/API/XRWebGLBinding/createEquirectLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createEquirectLayer()`** Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding) Schnittstelle gibt ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer) Objekt zurück. Dieses ist eine Ebene, die [equirektangulare](https://en.wikipedia.org/wiki/Equirectangular_projection) codierte Daten auf die Innenseite einer Kugel abbildet.

## Syntax

```js-nolint
createEquirectLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer). Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` enthalten. `init` hat die folgenden Eigenschaften:
    - `centralHorizontalAngle` {{optional_inline}}
      - : Eine Zahl, die den zentralen horizontalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `6.28318` (2π).
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Farbtexturdaten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung aktiviert:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) Erweiterung aktiviert:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc) Erweiterung aktiviert:
        - `Alle` der von der Erweiterung unterstützten Formate.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Tiefentexturdaten definiert, oder `0`, um anzuzeigen, dass die Ebene keine Tiefentextur bereitstellen soll (in diesem Fall wird [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true` sein).
        Mögliche Werte innerhalb von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) Kontexten mit der [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture) Erweiterung aktiviert, oder innerhalb von [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, falls wahr, angibt, dass zu dieser Ebene nur gezeichnet werden kann, wenn [`needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`
          - : Die Ebene berücksichtigt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und auf beide Augen präsentiert.
        - `stereo`
          - : Der Benutzer-Agent entscheidet, wie das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eins oder zwei) zugewiesen wird und das Layout (oben/unten oder links/rechts).
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `lowerVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den unteren vertikalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `-1.570795` (-π/2).
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl von Mip-Ebenen angibt. Der Standardwert ist `1`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius der Kugel angibt. Standardwert: `0` (unendliche Kugel).
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace) Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur der Ebene definiert. Mögliche Werte:
        - `texture`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2 Kontexte).
            Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform) Objekt, das den Versatz und die Ausrichtung relativ zu `space` definiert.
    - `upperVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den oberen vertikalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `1.570795` (π/2).
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ansichtsebene angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ansichtsebene angibt.

### Rückgabewert

Ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer) Objekt.

## Beispiele

### Erstellen eines `XREquirectLayer`

Konfigurieren Sie das equirektangulare Layer-Objekt mithilfe der oben aufgeführten Eigenschaften in einem Aufruf von `createEquirect()`. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie diese dem `layers` Render-Status mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const equirectLayer = xrGlBinding.createEquirectLayer({
    space: xrReferenceSpace,
    viewPixelWidth: 1200,
    viewPixelHeight: 600,
    centralHorizontalAngle: 2 * Math.PI,
    upperVerticalAngle: Math.PI / 2.0,
    lowerVerticalAngle: -Math.PI / 2.0,
    radius: 0,
  });

  xrSession.updateRenderState({
    layers: [equirectLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)
- [WebGL Konstanten](/de/docs/Web/API/WebGL_API/Constants)
