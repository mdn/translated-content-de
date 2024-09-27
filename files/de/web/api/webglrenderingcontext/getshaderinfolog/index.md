---
title: "WebGLRenderingContext: Methode getShaderInfoLog()"
short-title: getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **WebGLRenderingContext.getShaderInfoLog** Methode liefert das Informationsprotokoll
für das angegebene [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt. Es enthält Warnungen, Debugging- und
Kompilierinformationen.

## Syntax

```js-nolint
getShaderInfoLog(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader) zum Abfragen.

### Rückgabewert

Ein String, der Diagnosemeldungen, Warnmeldungen und
andere Informationen über den letzten Kompilierungsvorgang enthält. Wenn ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-
Objekt zunächst erstellt wird, ist sein Informationsprotokoll ein String der Länge 0.

## Beispiele

### Überprüfen von Kompilierungsnachrichten

```js
/* load shader source code. */
gl.shaderSource(shader, shaderCode);

/* compile shader source code. */
gl.compileShader(shader);

const message = gl.getShaderInfoLog(shader);

if (message.length > 0) {
  /* message may be an error or a warning */
  throw message;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) – wird mit
  `gl.COMPILE_STATUS` verwendet, um einen fehlgeschlagenen Kompilierungsvorgang zu überprüfen.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
