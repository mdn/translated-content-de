---
title: WebGLShaderPrecisionFormat
slug: Web/API/WebGLShaderPrecisionFormat
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

Die **WebGLShaderPrecisionFormat**-Schnittstelle ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und repräsentiert die Informationen, die durch den Aufruf der Methode {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} zurückgegeben werden.

## Instanzeigenschaften

- {{domxref("WebGLShaderPrecisionFormat.rangeMin")}} {{ReadOnlyInline}}
  - : Der Zweierlogarithmus des absoluten Wertes des kleinsten darstellbaren Wertes.
- {{domxref("WebGLShaderPrecisionFormat.rangeMax")}} {{ReadOnlyInline}}
  - : Der Zweierlogarithmus des absoluten Wertes des größten darstellbaren Wertes.
- {{domxref("WebGLShaderPrecisionFormat.precision")}} {{ReadOnlyInline}}
  - : Die Anzahl der darstellbaren Genauigkeitsbits. Für Ganzzahlformate ist dieser Wert immer 0.

## Beispiele

Ein `WebGLShaderPrecisionFormat`-Objekt wird von der Methode {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}} zurückgegeben.

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT);
// WebGLShaderPrecisionFormat { rangeMin: 127, rangeMax: 127, precision: 23 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
