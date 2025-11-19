---
title: "WebGLRenderingContext: bindTexture() Methode"
short-title: bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bindTexture()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet eine gegebene
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture) an ein Ziel (Bindungspunkt).

## Syntax

```js-nolint
bindTexture(target, texture)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
    - `gl.TEXTURE_2D`
      - : Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`
      - : Eine Würfelkarten-Textur.

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.TEXTURE_3D`
      - : Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`
      - : Eine zweidimensionale Array-Textur.

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt, das gebunden werden soll.
    Wenn `null` übergeben wird, wird die derzeit gebundene Textur für das angegebene Ziel getrennt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` nicht
`gl.TEXTURE_2D`, `gl.TEXTURE_CUBE_MAP`,
`gl.TEXTURE_3D` oder `gl.TEXTURE_2D_ARRAY` ist.

## Beispiele

### Binden einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Trennen einer Textur

```js
// Unbind any texture currently bound to TEXTURE_2D
gl.bindTexture(gl.TEXTURE_2D, null);
```

### Abrufen der aktuellen Bindungen

Um die aktuelle Texturbindung zu überprüfen, fragen Sie die `gl.TEXTURE_BINDING_2D` oder
`gl.TEXTURE_BINDING_CUBE_MAP` Konstanten ab.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
