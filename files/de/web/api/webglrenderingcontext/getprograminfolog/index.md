---
title: "WebGLRenderingContext: getProgramInfoLog()-Methode"
short-title: getProgramInfoLog()
slug: Web/API/WebGLRenderingContext/getProgramInfoLog
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLRenderingContext.getProgramInfoLog**-Methode gibt das Informationsprotokoll für das angegebene [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt zurück. Es enthält Fehler, die während eines fehlgeschlagenen Verknüpfens oder der Validierung von `WebGLProgram`-Objekten aufgetreten sind.

## Syntax

```js-nolint
getProgramInfoLog(program)
```

### Parameter

- `program`
  - : Das [`WebGLProgram`](/de/docs/Web/API/WebGLProgram), das abgefragt wird.

### Rückgabewert

Ein String, der Diagnosemeldungen, Warnmeldungen und andere Informationen über den letzten Verknüpfungs- oder Validierungsvorgang enthält. Wenn ein [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)-Objekt zunächst erstellt wird, ist sein Informationsprotokoll ein String mit der Länge 0.

## Beispiele

### Überprüfen von Programmfehlern

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
