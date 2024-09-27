---
title: "WebGLRenderingContext: Methode getRenderbufferParameter()"
short-title: getRenderbufferParameter()
slug: Web/API/WebGLRenderingContext/getRenderbufferParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getRenderbufferParameter()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) liefert Informationen über den Renderbuffer.

## Syntax

```js-nolint
getRenderbufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Datenspeicher für Buffers für einzelne Bilder in einem renderbaren internen Format.

- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die abzufragende Information angibt. Mögliche Werte:

    - `gl.RENDERBUFFER_WIDTH`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Breite des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_HEIGHT`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Höhe des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_INTERNAL_FORMAT`

      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das das interne Format des aktuell gebundenen Renderbuffers angibt. Der Standardwert ist `gl.RGBA4`. Mögliche Rückgabewerte:

        - `gl.RGBA4`: 4 Rot-Bits, 4 Grün-Bits, 4 Blau-Bits, 4 Alpha-Bits.
        - `gl.RGB565`: 5 Rot-Bits, 6 Grün-Bits, 5 Blau-Bits.
        - `gl.RGB5_A1`: 5 Rot-Bits, 5 Grün-Bits, 5 Blau-Bits, 1 Alpha-Bit.
        - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
        - `gl.STENCIL_INDEX8`: 8 Stencil-Bits.

    - `gl.RENDERBUFFER_GREEN_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die grüne Farbe ist.
    - `gl.RENDERBUFFER_BLUE_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die blaue Farbe ist.
    - `gl.RENDERBUFFER_RED_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die rote Farbe ist.
    - `gl.RENDERBUFFER_ALPHA_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die Alpha-Komponente ist.
    - `gl.RENDERBUFFER_DEPTH_SIZE`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die Tiefenkomponente ist.
    - `gl.RENDERBUFFER_STENCIL_SIZE`

      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die Stencil-Komponente ist.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} ist folgender Wert zusätzlich verfügbar:

    - `gl.RENDERBUFFER_SAMPLES`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Anzahl der Abtastungen des Bildes des aktuell gebundenen Renderbuffers angibt.

### Rückgabewert

Hängt von den angeforderten Informationen ab (wie mit `pname` angegeben). Entweder ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

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
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
