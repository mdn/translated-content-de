---
title: "WebGLRenderingContext: readPixels() Methode"
short-title: readPixels()
slug: Web/API/WebGLRenderingContext/readPixels
l10n:
  sourceCommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.readPixels()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) liest einen Block von Pixeln aus einem angegebenen Rechteck des aktuellen Farb-Framebuffers in ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}} Objekt ein.

## Syntax

```js-nolint
// WebGL1:
readPixels(x, y, width, height, format, type, pixels)

// WebGL2:
readPixels(x, y, width, height, format, type, offset)
readPixels(x, y, width, height, format, type, pixels)
readPixels(x, y, width, height, format, type, pixels, dstOffset)
```

### Parameter

- `x`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das das erste horizontale Pixel angibt, das aus der unteren linken Ecke eines rechteckigen Blocks von Pixeln gelesen wird.
- `y`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das das erste vertikale Pixel angibt, das aus der unteren linken Ecke eines rechteckigen Blocks von Pixeln gelesen wird.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite des Rechtecks angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe des Rechtecks angibt.
- `format`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Format der Pixeldaten angibt. Mögliche Werte:

    - `gl.ALPHA`
      - : Verwift die roten, grünen und blauen Komponenten und liest die Alphakomponente.
    - `gl.RGB`
      - : Verwift die Alphakomponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`
      - : Rote, grüne, blaue und Alphakomponenten werden aus dem Farbbuffer gelesen.

    WebGL2 fügt hinzu

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Datentyp der Pixeldaten angibt. Mögliche Werte:

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT_5_6_5`
    - `gl.UNSIGNED_SHORT_4_4_4_4`
    - `gl.UNSIGNED_SHORT_5_5_5_1`
    - `gl.FLOAT`

    WebGL2 fügt hinzu

    - `gl.BYTE`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.HALF_FLOAT`
    - `gl.SHORT`
    - `gl.UNSIGNED_SHORT`
    - `gl.INT`
    - `gl.UNSIGNED_INT`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`

- `pixels`

  - : Ein Objekt, in das die Daten gelesen werden. Der Array-Typ muss mit dem Typ des `type` Parameters übereinstimmen:

    - {{jsxref("Uint8Array")}} für `gl.UNSIGNED_BYTE`.
    - {{jsxref("Uint16Array")}} für `gl.UNSIGNED_SHORT_5_6_5`,
      `gl.UNSIGNED_SHORT_4_4_4_4`, oder `gl.UNSIGNED_SHORT_5_5_5_1`.
    - {{jsxref("Float32Array")}} für `gl.FLOAT`.

- `dstOffset` {{optional_inline}}
  - : Offset. Standardmäßig 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `format` oder `type` kein akzeptierter Wert ist.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn

  - `type` `gl.UNSIGNED_SHORT_5_6_5` ist und `format` nicht `gl.RGB` ist.
  - `type` `gl.UNSIGNED_SHORT_4_4_4_4` ist und `format` nicht `gl.RGBA` ist.
  - `type` nicht mit dem typisierten Array-Typ von `pixels` übereinstimmt.

- Ein `gl.INVALID_FRAMEBUFFER_OPERATION` Fehler wird ausgelöst, wenn der derzeit gebundene Framebuffer nicht vollständig ist.

## Beispiele

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const pixels = new Uint8Array(
  gl.drawingBufferWidth * gl.drawingBufferHeight * 4,
);
gl.readPixels(
  0,
  0,
  gl.drawingBufferWidth,
  gl.drawingBufferHeight,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  pixels,
);
console.log(pixels); // Uint8Array
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
