---
title: "WebGLRenderingContext: getAttribLocation() Methode"
short-title: getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getAttribLocation()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt die Position einer Attributvariablen in einem angegebenen [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) zurück.

## Syntax

```js-nolint
getAttribLocation(program, name)
```

### Parameter

- `program`
  - : Ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das die Attributvariable enthält.
- `name`
  - : Ein String, der den Namen der Attributvariablen angibt, deren Position abgerufen werden soll.

### Rückgabewert

Eine [`GLint`](/de/docs/Web/API/WebGL_API/Types) Zahl, die die Position des Variablennamens angibt, falls gefunden.
Andernfalls wird -1 zurückgegeben.

## Beispiele

```js
gl.getAttribLocation(program, "vColor");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
