---
title: "WebGLRenderingContext: Methode getProgramInfoLog()"
short-title: getProgramInfoLog()
slug: Web/API/WebGLRenderingContext/getProgramInfoLog
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **WebGLRenderingContext.getProgramInfoLog** gibt das Informationsprotokoll für das angegebene [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt zurück. Es enthält Fehler, die während des fehlgeschlagenen Verknüpfens oder der Validierung von `WebGLProgram`-Objekten aufgetreten sind.

## Syntax

```js-nolint
getProgramInfoLog(program)
```

### Parameter

- `program`
  - : Das zu abfragende [`WebGLProgram`](/de/docs/Web/API/WebGLProgram).

### Rückgabewert

Ein String, der Diagnosemeldungen, Warnmeldungen und andere Informationen über den letzten Verknüpfungs- oder Validierungsvorgang enthält. Wenn ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt ursprünglich erstellt wird, ist sein Informationsprotokoll ein String der Länge 0.

## Beispiele

### Überprüfung von Programmfehlern

```js
const program = gl.createProgram();

// Attach pre-existing shaders
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

- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
