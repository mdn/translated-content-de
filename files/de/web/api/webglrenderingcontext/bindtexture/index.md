---
title: "WebGLRenderingContext: bindTexture()-Methode"
short-title: bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bindTexture()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet eine gegebene
{{domxref("WebGLTexture")}} an ein Ziel (Bindepunkt).

## Syntax

```js-nolint
bindTexture(target, texture)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.TEXTURE_2D`: Eine zweidimensionale Textur.
    - `gl.TEXTURE_CUBE_MAP`: Eine Cube-Map-Textur.
      Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontext", "", 1)}}
      sind zusätzlich folgende Werte verfügbar:

      - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
      - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `texture`
  - : Ein {{domxref("WebGLTexture")}}-Objekt zum Binden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht
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

### Aktuelle Bindungen abrufen

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

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
