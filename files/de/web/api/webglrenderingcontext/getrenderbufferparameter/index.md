---
title: "WebGLRenderingContext: getRenderbufferParameter()-Methode"
short-title: getRenderbufferParameter()
slug: Web/API/WebGLRenderingContext/getRenderbufferParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getRenderbufferParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über das Renderbuffer zurück.

## Syntax

```js-nolint
getRenderbufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Zielrenderbuffer-Objekt spezifiziert. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Buffer-Datenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die abzufragende Information festlegt. Mögliche Werte:

    - `gl.RENDERBUFFER_WIDTH`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Breite des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_HEIGHT`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Höhe des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_INTERNAL_FORMAT`

      - : Gibt einen [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, der das interne Format des aktuell gebundenen Renderbuffers angibt. Der Standard ist `gl.RGBA4`. Mögliche Rückgabewerte:

        - `gl.RGBA4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
        - `gl.RGB565`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
        - `gl.RGB5_A1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.
        - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
        - `gl.STENCIL_INDEX8`: 8 Stencil-Bits.

    - `gl.RENDERBUFFER_GREEN_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für die grüne Farbe ist.
    - `gl.RENDERBUFFER_BLUE_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für die blaue Farbe ist.
    - `gl.RENDERBUFFER_RED_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für die rote Farbe ist.
    - `gl.RENDERBUFFER_ALPHA_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für den Alpha-Kanal ist.
    - `gl.RENDERBUFFER_DEPTH_SIZE`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für den Tiefen-Kanal ist.
    - `gl.RENDERBUFFER_STENCIL_SIZE`

      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Auflösungsgröße (in Bits) für den Stencil-Kanal ist.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}}
    steht zusätzlich der folgende Wert zur Verfügung:

    - `gl.RENDERBUFFER_SAMPLES`
      - : Gibt einen [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, der die Anzahl der Samples des Bildes des aktuell gebundenen Renderbuffers angibt.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` spezifiziert). Entweder ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

## Beispiele

```js
gl.getRenderbufferParameter(gl.RENDERBUFFER, gl.RENDERBUFFER_WIDTH);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- Andere Buffers: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
