---
title: "WebGLRenderingContext: getActiveAttrib()-Methode"
short-title: getActiveAttrib()
slug: Web/API/WebGLRenderingContext/getActiveAttrib
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getActiveAttrib()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt zurück, das Größe, Typ und Name eines Vertex-Attributs enthält. Sie wird im Allgemeinen verwendet, um unbekannte Attribute entweder für Debugging-Zwecke oder bei der Erstellung generischer Bibliotheken abzufragen.

## Syntax

```js-nolint
getActiveAttrib(program, index)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das das Vertex-Attribut enthält.
- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des abzurufenden Vertex-Attributs angibt. Dieser Wert ist ein Index von 0 bis N - 1, wie er durch [`gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter) zurückgegeben wird.

### Rückgabewert

Ein [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)-Objekt.

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

- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
