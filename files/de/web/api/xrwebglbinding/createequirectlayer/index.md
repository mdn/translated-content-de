---
title: "XRWebGLBinding: createEquirectLayer()-Methode"
short-title: createEquirectLayer()
slug: Web/API/XRWebGLBinding/createEquirectLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createEquirectLayer()`**-Methode der {{domxref("XRWebGLBinding")}}-Schnittstelle gibt ein {{domxref("XREquirectLayer")}}-Objekt zurück, das eine Schicht ist, die [equirektangular](https://en.wikipedia.org/wiki/Equirectangular_projection) codierte Daten auf die Innenseite einer Kugel abbildet.

## Syntax

```js-nolint
createEquirectLayer(options)
```

### Parameter

- `options`
  - : Ein Objekt zur Konfiguration des {{domxref("XREquirectLayer")}}. Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` haben. `init` hat die folgenden Eigenschaften:
    - `centralHorizontalAngle` {{optional_inline}}
      - : Eine Zahl, die den zentralen horizontalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `6.28318` (2π).
    - `colorFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Farbtexturdaten definiert. Mögliche Werte:
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
          Zusätzlich, für Kontexte mit der aktivierten {{domxref("WEBGL_compressed_texture_etc")}}-Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit der aktivierten {{domxref("WEBGL_compressed_texture_astc")}}-Erweiterung:
        - `All` of the formats the extension supports.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Tieftentexturdaten definiert, oder `0`, um anzugeben, dass die Schicht keine Tieftentextur bereitstellen soll (in diesem Fall wird {{domxref("XRProjectionLayer.ignoreDepthValues")}} `true` sein).
        Mögliche Werte innerhalb von {{domxref("WebGLRenderingContext")}}-Kontexten mit der aktivierten {{domxref("WEBGL_depth_texture")}}-Erweiterung oder innerhalb von {{domxref("WebGL2RenderingContext")}}-Kontexten (kein Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für {{domxref("WebGL2RenderingContext")}}-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn wahr, angibt, dass Sie nur auf diese Schicht zeichnen können, wenn {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Schicht angibt. Mögliche Werte:
        - `default`
          - : Die Schicht unterstützt alle Ansichten der Sitzung.
        - `mono`
          - : Ein einziges {{domxref("XRSubImage")}} wird zugewiesen und beiden Augen präsentiert.
        - `stereo`
          - : Der Nutzeragent entscheidet, wie das {{domxref("XRSubImage")}} (eines oder zwei) zugewiesen und das Layout (oben/unten oder links/rechts) definiert wird.
        - `stereo-left-right`
          - : Ein einziges {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einziges {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `lowerVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den unteren vertikalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `-1.570795` (-π/2).
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl der Mip-Level angibt. Der Standardwert ist `1`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius der Kugel angibt. Standardwert: `0` (unendliche Kugel).
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}}-Objekt, das die räumliche Beziehung der Schicht zur physischen Umgebung des Benutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Texturtyp der Schicht angibt. Mögliche Werte:
        - `texture`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`
          - : Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2-Kontexte).
            Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}}-Objekt, das die Verschiebung und Orientierung relativ zu `space` definiert.
    - `upperVerticalAngle` {{optional_inline}}
      - : Eine Zahl, die den oberen vertikalen Winkel in Bogenmaß der Kugel angibt. Standardwert: `1.570795` (π/2).
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Schichtansicht angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Schichtansicht angibt.

### Rückgabewert

Ein {{domxref("XREquirectLayer")}}-Objekt.

## Beispiele

### Erstellen eines `XREquirectLayer`

Konfigurieren Sie die equirect-Schicht mit den oben aufgeführten Eigenschaften in einem Aufruf von `createEquirect()`. Um Schichten auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers`-Render-Status mit {{domxref("XRSession.updateRenderState()")}} hinzu.

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

- {{domxref("XREquirectLayer")}}
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
