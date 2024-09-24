---
title: "WebGLRenderingContext: Methode getShaderInfoLog"
short-title: getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **WebGLRenderingContext.getShaderInfoLog**-Methode gibt das Informationsprotokoll für das angegebene {{domxref("WebGLShader")}}-Objekt zurück. Es enthält Warnungen, Debugging- und Kompiliervorgänge.

## Syntax

```js-nolint
getShaderInfoLog(shader)
```

### Parameter

- `shader`
  - : Ein {{domxref("WebGLShader")}}, der abgefragt werden soll.

### Rückgabewert

Ein String, der Diagnosemeldungen, Warnmeldungen und andere Informationen über den letzten Kompilierungsvorgang enthält. Wenn ein {{domxref("WebGLShader")}}-Objekt ursprünglich erstellt wird, ist sein Informationsprotokoll ein String der Länge 0.

## Beispiele

### Überprüfen von Kompilierungsnachrichten

```js
/* Laden des Shader-Quellcodes. */
gl.shaderSource(shader, shaderCode);

/* Kompilieren des Shader-Quellcodes. */
gl.compileShader(shader);

const message = gl.getShaderInfoLog(shader);

if (message.length > 0) {
  /* Nachricht kann ein Fehler oder eine Warnung sein */
  throw message;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getShaderParameter()")}} – verwendet mit `gl.COMPILE_STATUS`, um einen fehlgeschlagenen Kompilierungsvorgang zu überprüfen.
- {{domxref("WebGLRenderingContext.getError()")}}
