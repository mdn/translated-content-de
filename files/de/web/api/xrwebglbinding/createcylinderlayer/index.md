---
title: "XRWebGLBinding: Methode createCylinderLayer()"
short-title: createCylinderLayer()
slug: Web/API/XRWebGLBinding/createCylinderLayer
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`createCylinderLayer()`** Methode der {{domxref("XRWebGLBinding")}} Schnittstelle gibt ein {{domxref("XRCylinderLayer")}} Objekt zurück, welches eine Ebene darstellt, die einen gekrümmten rechteckigen Raum in der virtuellen Umgebung einnimmt.

## Syntax

```js-nolint
createCylinderLayer(init)
```

### Parameter

- `init`
  - : Ein Objekt zur Konfiguration des {{domxref("XRCylinderLayer")}}. Es muss die Eigenschaften `space`, `viewPixelHeight` und `viewPixelWidth` haben. `init` hat die folgenden Eigenschaften:
    - `aspectRatio` {{optional_inline}}
      - : Eine Zahl, die das Verhältnis des sichtbaren Abschnitts des Zylinders angibt. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu seiner Höhe. Die Breite wird berechnet, indem der `radius` mit dem `centralAngle` multipliziert wird. Der Standardwert ist `2.0`.
    - `centralAngle` {{optional_inline}}
      - : Eine Zahl, welche den Winkel in Radianten des sichtbaren Abschnitts des Zylinders angibt. Standardwert: `0.78539` (π / 4).
    - `colorFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Farbtextur-Daten definiert. Mögliche Werte:
        - `gl.RGB`
        - `gl.RGBA`
          Zusätzlich, für Kontexte mit aktivierter {{domxref("EXT_sRGB")}} Erweiterung:
        - `ext.SRGB_EXT`
        - `ext.SRGB_ALPHA_EXT`
          Zusätzlich, für {{domxref("WebGL2RenderingContext")}} Kontexte:
        - `gl.RGBA8`
        - `gl.RGB8`
        - `gl.SRGB8`
        - `gl.RGB8_ALPHA8`
          Zusätzlich, für Kontexte mit aktivierter {{domxref("WEBGL_compressed_texture_etc")}} Erweiterung:
        - `ext.COMPRESSED_RGB8_ETC2`
        - `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_RGBA8_ETC2_EAC`
        - `ext.COMPRESSED_SRGB8_ETC2`
        - `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
        - `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
          Zusätzlich, für Kontexte mit aktivierter {{domxref("WEBGL_compressed_texture_astc")}} Erweiterung:
        - `Alle` der Formate, die die Erweiterung unterstützt.
          Der Standardwert ist `gl.RGBA`.
    - `depthFormat` {{optional_inline}}
      - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Tiefentextur-Daten definiert oder `0` angibt, dass die Ebene keine Tiefentextur bereitstellen soll (in diesem Fall wird {{domxref("XRProjectionLayer.ignoreDepthValues")}} `true` sein).
        Mögliche Werte innerhalb von {{domxref("WebGLRenderingContext")}} Kontexten mit aktivierter {{domxref("WEBGL_depth_texture")}} Erweitung, oder innerhalb von {{domxref("WebGL2RenderingContext")}} Kontexten (keine Erweiterung erforderlich):
        - `gl.DEPTH_COMPONENT`
        - `gl.DEPTH_STENCIL`
          Zusätzlich, für {{domxref("WebGL2RenderingContext")}} Kontexte:
        - `gl.DEPTH_COMPONENT24`
        - `gl.DEPTH24_STENCIL24`
          Der Standardwert ist `gl.DEPTH_COMPONENT`.
    - `isStatic` {{optional_inline}}
      - : Ein boolescher Wert, der, wenn wahr, angibt, dass Sie nur auf diese Ebene zeichnen können, wenn {{domxref("XRCompositionLayer.needsRedraw", "needsRedraw")}} `true` ist. Der Standardwert ist `false`.
    - `layout` {{optional_inline}}
      - : Ein String, der das Layout der Ebene angibt. Mögliche Werte:
        - `default`
          - : Die Ebene passt sich allen Ansichten der Sitzung an.
        - `mono`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird erstellt und beiden Augen präsentiert.
        - `stereo`
          - : Der User-Agent entscheidet, wie er das {{domxref("XRSubImage")}} (eins oder zwei) zuweist und das Layout (oben/unten oder links/rechts) gestaltet.
        - `stereo-left-right`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird erstellt. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten.
        - `stereo-top-bottom`
          - : Ein einzelnes {{domxref("XRSubImage")}} wird erstellt. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren.
            Der Standardwert ist `mono`.
    - `mipLevels` {{optional_inline}}
      - : Eine Zahl, die die gewünschte Anzahl von Mip-Ebenen angibt. Der Standardwert ist `1`.
    - `radius` {{optional_inline}}
      - : Eine Zahl, die den Radius des Zylinders angibt. Standardwert: `2.0`.
    - `space` **Erforderlich**
      - : Ein {{domxref("XRSpace")}} Objekt, das die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers definiert.
    - `textureType` {{optional_inline}}
      - : Ein String, der den Typ der Textur beschreibt, die die Ebene haben wird. Mögliche Werte:
        - `texture`: Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D` sein.
        - `texture-array`: Die Texturen von {{domxref("XRWebGLSubImage")}} werden vom Typ `gl.TEXTURE_2D_ARRAY` sein (nur WebGL 2 Kontexte).
          Der Standardwert ist `texture`.
    - `transform` {{optional_inline}}
      - : Ein {{domxref("XRRigidTransform")}} Objekt, das den Versatz und die Orientierung relativ zu `space` definiert.
    - `viewPixelHeight` **Erforderlich**
      - : Eine Zahl, die die Pixelhöhe der Ebenenansicht angibt.
    - `viewPixelWidth` **Erforderlich**
      - : Eine Zahl, die die Pixelbreite der Ebenenansicht angibt.

### Rückgabewert

Ein {{domxref("XRCylinderLayer")}} Objekt.

## Beispiele

### Erstellen eines `XRCylinderLayer`

Konfigurieren Sie die Zylinder-Ebene mithilfe der oben aufgelisteten Eigenschaften in einem Aufruf von `createCylinderLayer()`. Um Ebenen auf dem XR-Gerät darzustellen, fügen Sie sie dem `layers` Renderstatus mithilfe von {{domxref("XRSession.updateRenderState()")}} hinzu.

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

- {{domxref("XRCylinderLayer")}}
- [WebGL Konstanten](/de/docs/Web/API/WebGL_API/Constants)
