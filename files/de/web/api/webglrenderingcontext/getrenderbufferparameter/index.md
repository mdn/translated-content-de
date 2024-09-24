---
title: "WebGLRenderingContext: Methode getRenderbufferParameter()"
short-title: getRenderbufferParameter()
slug: Web/API/WebGLRenderingContext/getRenderbufferParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getRenderbufferParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über den Renderpuffer zurück.

## Syntax

```js-nolint
getRenderbufferParameter(target, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Ziel-Renderpufferobjekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Pufferspeicher für einzelne Bilder in einem darstellbaren internen Format.

- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der die abzufragende Information angibt. Mögliche Werte:

    - `gl.RENDERBUFFER_WIDTH`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Breite des Bildes des aktuell gebundenen Renderpuffers angibt.
    - `gl.RENDERBUFFER_HEIGHT`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Höhe des Bildes des aktuell gebundenen Renderpuffers angibt.
    - `gl.RENDERBUFFER_INTERNAL_FORMAT`

      - : Gibt eine {{domxref("WebGL_API/Types", "GLenum")}} zurück, die das interne Format des aktuell gebundenen Renderpuffers angibt. Der Standardwert ist `gl.RGBA4`. Mögliche Rückgabewerte:

        - `gl.RGBA4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
        - `gl.RGB565`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
        - `gl.RGB5_A1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.
        - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
        - `gl.STENCIL_INDEX8`: 8 Stencil-Bits.

    - `gl.RENDERBUFFER_GREEN_SIZE`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die grüne Farbe angibt.
    - `gl.RENDERBUFFER_BLUE_SIZE`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die blaue Farbe angibt.
    - `gl.RENDERBUFFER_RED_SIZE`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die rote Farbe angibt.
    - `gl.RENDERBUFFER_ALPHA_SIZE`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die Alpha-Komponente angibt.
    - `gl.RENDERBUFFER_DEPTH_SIZE`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die Tiefen-Komponente angibt.
    - `gl.RENDERBUFFER_STENCIL_SIZE`

      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Auflösungsgröße (in Bits) für die Stencil-Komponente angibt.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} ist der folgende Wert zusätzlich verfügbar:

    - `gl.RENDERBUFFER_SAMPLES`
      - : Gibt eine {{domxref("WebGL_API/Types", "GLint")}} zurück, die die Anzahl der Proben des Bildes des aktuell gebundenen Renderpuffers angibt.

### Rückgabewert

Hängt von der angeforderten Information ab (wie mit `pname` angegeben). Entweder eine {{domxref("WebGL_API/Types", "GLint")}} oder eine {{domxref("WebGL_API/Types", "GLenum")}}.

## Beispiele

```js
gl.getRenderbufferParameter(gl.RENDERBUFFER, gl.RENDERBUFFER_WIDTH);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- Andere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
