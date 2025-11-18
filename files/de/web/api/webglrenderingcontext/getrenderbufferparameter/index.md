---
title: "WebGLRenderingContext: getRenderbufferParameter()-Methode"
short-title: getRenderbufferParameter()
slug: Web/API/WebGLRenderingContext/getRenderbufferParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getRenderbufferParameter()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über das Renderbuffer zurück.

## Syntax

```js-nolint
getRenderbufferParameter(target, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel-Renderbuffer-Objekt spezifiziert. Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Puffer-Datenspeicher für Einzelbilder in einem renderbaren internen Format.

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die abzufragenden Informationen spezifiziert. Mögliche Werte:
    - `gl.RENDERBUFFER_WIDTH`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Breite des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_HEIGHT`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Höhe des Bildes des aktuell gebundenen Renderbuffers angibt.
    - `gl.RENDERBUFFER_INTERNAL_FORMAT`
      - : Gibt ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types) zurück, das das interne Format des aktuell gebundenen Renderbuffers angibt. Der Standard ist `gl.RGBA4`. Mögliche Rückgabewerte:
        - `gl.RGBA4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
        - `gl.RGB565`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
        - `gl.RGB5_A1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.
        - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
        - `gl.STENCIL_INDEX8`: 8 Schablonen-Bits.

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
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Auflösungsgröße (in Bits) für die Schablonen-Komponente ist.

    Bei Verwendung eines [WebGL 2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) ist zusätzlich der folgende Wert verfügbar:
    - `gl.RENDERBUFFER_SAMPLES`
      - : Gibt ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) zurück, das die Anzahl der Proben des Bildes des aktuell gebundenen Renderbuffers angibt.

### Rückgabewert

Abhängig von den angeforderten Informationen (wie mit `pname` spezifiziert). Entweder ein [`GLint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types).

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
