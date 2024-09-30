---
title: "WebGLRenderingContext: Methode getShaderInfoLog()"
short-title: getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLRenderingContext.getShaderInfoLog** Methode gibt das Informationsprotokoll für das angegebene [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt zurück. Es enthält Warnungen, Debugging- und Kompilierungsinformationen.

## Syntax

```js-nolint
getShaderInfoLog(shader)
```

### Parameter

- `shader`
  - : Ein [`WebGLShader`](/de/docs/Web/API/WebGLShader), der abgefragt wird.

### Rückgabewert

Ein String, der diagnostische Nachrichten, Warnmeldungen und andere Informationen über den letzten Kompilierungsvorgang enthält. Wenn ein [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Objekt ursprünglich erstellt wird, ist sein Informationsprotokoll ein String der Länge 0.

## Beispiele

### Überprüfung der Kompilierungsnachrichten

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

- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter) – verwendet mit `gl.COMPILE_STATUS`, um eine fehlgeschlagene Kompilierung zu überprüfen.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
