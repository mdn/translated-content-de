---
title: WebGLProgram
slug: Web/API/WebGLProgram
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Der **`WebGLProgram`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ist eine Kombination aus zwei kompilierten {{domxref("WebGLShader")}}, die aus einem Vertex-Shader und einem Fragment-Shader bestehen (beide in GLSL geschrieben).

{{InheritanceDiagram}}

Um ein `WebGLProgram` zu erstellen, rufen Sie die Funktion {{domxref("WebGLRenderingContext.createProgram", "createProgram()")}} des GL-Kontexts auf. Nachdem Sie die Shader-Programme mit {{domxref("WebGLRenderingContext.attachShader", "attachShader()")}} angefügt haben, verlinken Sie sie zu einem nutzbaren Programm. Dies wird im unten stehenden Code gezeigt.

```js
const program = gl.createProgram();

// Vorhandene Shader anhängen
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

Sehen Sie {{domxref("WebGLShader")}} für Informationen zur Erstellung des `vertexShader` und `fragmentShader` im obigen Beispiel.

## Beispiele

### Verwendung des Programms

Die Schritte, um tatsächlich mit dem Programm zu arbeiten, beinhalten, der GPU mitzuteilen, dass sie das Programm verwenden soll, die entsprechenden Daten und Konfigurationsoptionen zu binden und schließlich etwas auf den Bildschirm zu zeichnen.

```js
// Programm verwenden
gl.useProgram(program);

// Vorhandene Attributdaten binden
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Ein einzelnes Dreieck zeichnen
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Löschen des Programms

Wenn es einen Fehler beim Verlinken des Programms gibt oder Sie ein vorhandenes Programm löschen möchten, ist es ebenso einfach, {{domxref("WebGLRenderingContext.deleteProgram()")}} auszuführen. Dies gibt den Speicher des verlinkten Programms frei.

```js
gl.deleteProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
