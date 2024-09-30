---
title: WebGLProgram
slug: Web/API/WebGLProgram
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLProgram`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ist eine Kombination aus zwei kompilierten [`WebGLShader`](/de/docs/Web/API/WebGLShader)-Shadern, bestehend aus einem Vertex-Shader und einem Fragment-Shader (beide geschrieben in GLSL).

{{InheritanceDiagram}}

Um ein `WebGLProgram` zu erstellen, rufen Sie die [`createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)-Funktion des GL-Kontexts auf. Nachdem Sie die Shader-Programme mit [`attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader) angefügt haben, verknüpfen Sie sie zu einem nutzbaren Programm. Dies wird im folgenden Code gezeigt.

```js
const program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `Could not compile WebGL program. \n\n${info}`;
}
```

Siehe [`WebGLShader`](/de/docs/Web/API/WebGLShader) für Informationen zur Erstellung des `vertexShader` und `fragmentShader` im obigen Beispiel.

## Beispiele

### Verwendung des Programms

Die Schritte, um tatsächlich mit dem Programm zu arbeiten, beinhalten, der GPU zu sagen, sie solle das Programm verwenden, die entsprechenden Daten und Konfigurationsoptionen zu binden und schließlich etwas auf den Bildschirm zu zeichnen.

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

Wenn ein Fehler beim Verknüpfen des Programms auftritt oder Sie ein bestehendes Programm löschen möchten, ist es so einfach, [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram) auszuführen. Dies gibt den Speicher des verknüpften Programms frei.

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
