---
title: WebGLProgram
slug: Web/API/WebGLProgram
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLProgram`** ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ist eine Kombination aus zwei kompilierten [`WebGLShader`](/de/docs/Web/API/WebGLShader), bestehend aus einem Vertex-Shader und einem Fragment-Shader (beide in GLSL geschrieben).

{{InheritanceDiagram}}

Um ein `WebGLProgram` zu erstellen, rufen Sie die Funktion [`createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram) des GL-Kontextes auf. Nachdem Sie die Shader-Programme mit [`attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) angehängt haben, verlinken Sie diese zu einem nutzbaren Programm. Dies wird im untenstehenden Code gezeigt.

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw new Error(`Could not compile WebGL program. \n\n${info}`);
}
```

Siehe [`WebGLShader`](/de/docs/Web/API/WebGLShader) für Informationen zur Erstellung des `vertexShader` und `fragmentShader` im obigen Beispiel.

## Beispiele

### Verwendung des Programms

Die Schritte, um mit dem Programm tatsächlich zu arbeiten, bestehen darin, der GPU mitzuteilen, das Programm zu verwenden, die entsprechenden Daten und Konfigurationsoptionen zu binden und schließlich etwas auf den Bildschirm zu zeichnen.

```js
// Use the program
gl.useProgram(program);

// Bind existing attribute data
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Draw a single triangle
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Löschen des Programms

Wenn beim Verlinken des Programms ein Fehler auftritt oder Sie ein bestehendes Programm löschen möchten, ist es so einfach, [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram) auszuführen. Dies gibt den Speicher des verlinkten Programms frei.

```js
gl.deleteProgram(program);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLShader`](/de/docs/Web/API/WebGLShader)
- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
- [`WebGLRenderingContext.detachShader()`](/de/docs/Web/API/WebGLRenderingContext/detachShader)
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
