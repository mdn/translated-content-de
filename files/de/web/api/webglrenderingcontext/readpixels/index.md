---
title: "WebGLRenderingContext: Methode readPixels()"
short-title: readPixels()
slug: Web/API/WebGLRenderingContext/readPixels
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.readPixels()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) liest einen Block von Pixeln aus einem festgelegten Rechteck des aktuellen Farb-Framebuffers in ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt.

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
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das erste horizontale Pixel angibt, das von der unteren linken Ecke eines rechteckigen Pixelblocks gelesen wird.
- `y`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der das erste vertikale Pixel angibt, das von der unteren linken Ecke eines rechteckigen Pixelblocks gelesen wird.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Rechtecks angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des Rechtecks angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Format der Pixel-Daten angibt. Mögliche Werte:

    - `gl.ALPHA`
      - : Ignoriert die roten, grünen und blauen Komponenten und liest die Alpha-Komponente.
    - `gl.RGB`
      - : Ignoriert die Alpha-Komponenten und liest die roten, grünen und blauen Komponenten.
    - `gl.RGBA`
      - : Rote, grüne, blaue und Alpha-Komponenten werden aus dem Farb-Buffer gelesen.

    WebGL2 fügt hinzu

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp der Pixel-Daten angibt. Mögliche Werte:

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

  - : Ein Objekt, in das die Daten gelesen werden. Der Arraytyp muss mit dem Typ des `type`-Parameters übereinstimmen:

    - {{jsxref("Uint8Array")}} für `gl.UNSIGNED_BYTE`.
    - {{jsxref("Uint16Array")}} für `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4` oder `gl.UNSIGNED_SHORT_5_5_5_1`.
    - {{jsxref("Float32Array")}} für `gl.FLOAT`.

- `dstOffset` {{optional_inline}}
  - : Offset. Standardwert ist 0.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `format` oder `type` keinen akzeptierten Wert hat.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn

  - `type` ist `gl.UNSIGNED_SHORT_5_6_5` und `format` ist nicht `gl.RGB`.
  - `type` ist `gl.UNSIGNED_SHORT_4_4_4_4` und `format` ist nicht `gl.RGBA`.
  - `type` nicht mit dem Typ des `pixels`-Arrays übereinstimmt.

- Ein `gl.INVALID_FRAMEBUFFER_OPERATION`-Fehler wird ausgelöst, wenn der aktuell gebundene Framebuffer nicht vollständig ist.

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

- [Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
