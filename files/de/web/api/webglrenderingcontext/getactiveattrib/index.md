---
title: "WebGLRenderingContext: getActiveAttrib()-Methode"
short-title: getActiveAttrib()
slug: Web/API/WebGLRenderingContext/getActiveAttrib
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getActiveAttrib()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt ein {{domxref("WebGLActiveInfo")}}-Objekt zurück, das die Größe, den Typ und den Namen eines Vertex-Attributs enthält. Sie wird generell verwendet, um unbekannte Attribute entweder zur Fehlersuche oder zur Erstellung generischer Bibliotheken abzufragen.

## Syntax

```js-nolint
getActiveAttrib(program, index)
```

### Parameter

- `program`
  - : Ein {{domxref("WebGLProgram")}}, das das Vertex-Attribut enthält.
- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des abzurufenden Vertex-Attributs angibt. Dieser Wert ist ein Index von 0 bis N - 1, wie er von {{domxref("WebGLRenderingContext.getProgramParameter", "gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)")}} zurückgegeben wird.

### Rückgabewert

Ein {{domxref("WebGLActiveInfo")}}-Objekt.

## Beispiele

```js
const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
for (let i = 0; i < numAttribs; ++i) {
  const info = gl.getActiveAttrib(program, i);
  console.log("name:", info.name, "type:", info.type, "size:", info.size);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLActiveInfo")}}
