---
title: "XRWebGLBinding: Methode createCylinderLayer()"
short-title: createCylinderLayer()
slug: Web/API/XRWebGLBinding/createCylinderLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCylinderLayer()`**-Methode des [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Interfaces gibt ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Objekt zurück, welches eine Ebene darstellt, die einen gekrümmten rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createCylinderLayer(init)
```

### Parameter

- `init`
  - : Ein Objekt zur Konfiguration des [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer). Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` enthalten. `init` hat die folgenden Eigenschaften:
    - `aspectRatio` {{optional_inline}}
      - : Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu seiner Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird. Der Standardwert ist `2.0`.
    - `centralAngle` {{optional_inline}}
      - : Eine Zahl, die den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders angibt. Standardwert: `0.78539` (π / 4).
    - `colorFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Farbtexturdaten definiert. Mögliche Werte:
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
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)-Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit der [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)-Erweiterung:
        - `Alle` der vom Erweiterung unterstützten Formate.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Datentyp der Tiefentexturdaten definiert, oder `0`, was darauf hinweist, dass die Ebene keine Tiefentextur bereitstellen soll (in diesem Fall ist [`XRProjectionLayer.ignoreDepthValues`](/de/docs/Web/API/XRProjectionLayer/ignoreDepthValues) `true`).
        Mögliche Werte innerhalb von [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Kontexten mit der aktivierten [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)-Erweiterung oder innerhalb von [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten (ohne die Notwendigkeit einer Erweiterung):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, falls `true`, anzeigt, dass Sie nur dann auf diese Ebene zeichnen können, wenn [`needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw) `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`
          - : Die Ebene bietet Platz für alle Ansichten der Sitzung.
        - `mono`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt und für beide Augen präsentiert.
        - `stereo`
          - : Der User-Agent entscheidet, wie es das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eins oder zwei) anordnet und das Layout (oben/unten oder links/rechts).
        - `stereo-left-right`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird erstellt. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl der Mipmap-Level angibt. Der Standardwert ist `1`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius des Zylinders angibt. Standardwert: `2.0`.
    - `space` **Erforderlich**
      - : Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur definiert, die die Ebene haben wird. Mögliche Werte:
        - `texture`: Die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`: die Texturen von [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage) werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur für WebGL 2-Kontexte).
          Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)-Objekt, das den Versatz und die Ausrichtung relativ zu `space` definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ebenenansicht angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ebenenansicht angibt.

### Rückgabewert

Ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Objekt.

## Beispiele

### Erstellen eines `XRCylinderLayer`

Konfigurieren Sie die Zylinder-Ebene mit den oben genannten Eigenschaften in einem Aufruf von `createCylinderLayer()`. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers`-Render-State mit [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) hinzu.

```js
function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl2", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const cylinderLayer = xrGlBinding.createCylinderLayer({
    space: xrReferenceSpace,
    viewPixelWidth: 1200,
    viewPixelHeight: 600,
    centralAngle: (60 * Math.PI) / 180,
    aspectRatio: 2,
    radius: 2,
    transform: new XRRigidTransform(/* … */),
  });

  xrSession.updateRenderState({
    layers: [cylinderLayer],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)
- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
