---
title: "WebGLRenderingContext: Methode getProgramInfoLog()"
short-title: getProgramInfoLog()
slug: Web/API/WebGLRenderingContext/getProgramInfoLog
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **WebGLRenderingContext.getProgramInfoLog** gibt das Informationsprotokoll für das angegebene {{domxref("WebGLProgram")}}-Objekt zurück. Es enthält Fehler, die während des fehlgeschlagenen Verknüpfens oder der Validierung von `WebGLProgram`-Objekten aufgetreten sind.

## Syntax

```js-nolint
getProgramInfoLog(program)
```

### Parameter

- `program`
  - : Das {{domxref("WebGLProgram")}}, das abgefragt werden soll.

### Rückgabewert

Ein String, der Diagnosemeldungen, Warnmeldungen und andere Informationen über den letzten Verknüpfungs- oder Validierungsvorgang enthält. Wenn ein {{domxref("WebGLProgram")}}-Objekt initial erstellt wird, ist dessen Informationsprotokoll ein String der Länge 0.

## Beispiele

### Überprüfen von Programmfehlern

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.getProgramInfoLog(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getError()")}}
