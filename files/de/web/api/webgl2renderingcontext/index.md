---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **WebGL2RenderingContext**-Interface stellt den OpenGL ES 3.0-Rendering-Kontext für die Zeichenfläche eines HTML-`<canvas>`-Elements bereit.

Um ein Objekt dieses Interfaces zu erhalten, rufen Sie `getContext()` an einem `<canvas>`-Element auf und geben Sie "webgl2" als Argument an:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 ist eine Erweiterung von WebGL 1. Das `WebGL2RenderingContext`-Interface implementiert alle Mitglieder des `WebGLRenderingContext`-Interfaces. Einige Methoden des WebGL 1-Kontextes können zusätzliche Werte akzeptieren, wenn sie in einem WebGL 2-Kontext verwendet werden. Diese Informationen finden Sie auf den Referenzseiten von WebGL 1 vermerkt.

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) bietet weitere Informationen, Beispiele und Ressourcen, um mit WebGL zu beginnen.

## Konstanten

Siehe die Seite [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Zustandsinformationen

- [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
  - : Gibt den indizierten Wert für das angegebene `target` zurück.

## Puffer

- [`WebGL2RenderingContext.bufferData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferData)
  - : Initialisiert und erstellt den Datenspeicher des Pufferobjekts.
- [`WebGL2RenderingContext.bufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferSubData)
  - : Aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.
- [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData)
  - : Kopiert einen Teil der Daten eines Puffers in einen anderen Puffer.
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)
  - : Liest Daten aus einem Puffer und schreibt sie in ein `ArrayBuffer` oder `SharedArrayBuffer`.

## Framebuffer

- [`WebGL2RenderingContext.blitFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/blitFramebuffer)
  - : Überträgt einen Block von Pixeln vom Lese-Framebuffer zum Zeichen-Framebuffer.
- [`WebGL2RenderingContext.framebufferTextureLayer()`](/de/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer)
  - : Hängt eine einzelne Ebene einer Textur an einen Framebuffer an.
- [`WebGL2RenderingContext.invalidateFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
  - : Invalideiert die Inhalte der Anhänge in einem Framebuffer.
- [`WebGL2RenderingContext.invalidateSubFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
  - : Invalideiert Teile der Inhalte der Anhänge in einem Framebuffer.
- [`WebGL2RenderingContext.readBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/readBuffer)
  - : Wählt einen Farb-Puffer als Quelle für Pixel.

## Renderbuffer

- [`WebGL2RenderingContext.getInternalformatParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter)
  - : Gibt Informationen über implementationsspezifische Unterstützung für interne Formate zurück.
- [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)
  - : Erstellt und initialisiert den Datenspeicher eines Renderbuffer-Objekts und erlaubt die Angabe der Anzahl der zu verwendenden Samples.

## Texturen

- [`WebGL2RenderingContext.texStorage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D)
  - : Spezifiziert alle Ebenen der zweidimensionalen Texturspeicherung.
- [`WebGL2RenderingContext.texStorage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage3D)
  - : Spezifiziert alle Ebenen einer dreidimensionalen Textur oder einer zweidimensionalen Array-Textur.
- [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D)
  - : Spezifiziert ein dreidimensionales Texturbild.
- [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D)
  - : Spezifiziert ein Unterrechteck der aktuellen 3D-Textur.
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
  - : Kopiert Pixel aus dem aktuellen `WebGLFramebuffer` in ein bestehendes 3D-Textur-Unterbild.
- [`WebGL2RenderingContext.compressedTexImage3D`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
  - : Spezifiziert ein dreidimensionales Texturbild in einem komprimierten Format.
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
  - : Spezifiziert ein dreidimensionales Unterrechteck für ein Texturbild in einem komprimierten Format.

## Programme und Shader

- [`WebGL2RenderingContext.getFragDataLocation()`](/de/docs/Web/API/WebGL2RenderingContext/getFragDataLocation)
  - : Gibt die Bindung von Farbnummern zu benutzerdefinierten variierenden Ausgabewerten zurück.

## Uniforms und Attribute

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform)
  - : Methoden zur Angabe von Werten für Uniform-Variablen.
- [`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
  - : Methoden zur Angabe von Matrixwerten für Uniform-Variablen.
- [`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
  - : Methoden zur Angabe von ganzzahligen Werten für generische Vertex-Attribute.
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
  - : Spezifiziert ganzzahlige Datenformate und -positionen der Vertex-Attribute in einem Vertex-Attributsarray.

## Zeichnungspuffer

- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
  - : Ändert die Rate, mit der generische Vertex-Attribute voranschreiten, wenn mehrere Instanzen von Primitiven mit `gl.drawArraysInstanced()` und `gl.drawElementsInstanced()` gerendert werden.
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
  - : Rendert Primitiven aus Array-Daten. Zusätzlich kann es mehrere Instanzen des Elementbereichs ausführen.
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
  - : Rendert Primitiven aus Array-Daten. Zusätzlich kann es mehrere Instanzen einer Elementsammlung ausführen.
- [`WebGL2RenderingContext.drawRangeElements()`](/de/docs/Web/API/WebGL2RenderingContext/drawRangeElements)
  - : Rendert Primitiven aus Array-Daten in einem gegebenen Bereich.
- [`WebGL2RenderingContext.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
  - : Spezifiziert eine Liste von Farb-Puffern, in die gezeichnet werden soll.
- [`WebGL2RenderingContext.clearBuffer[fiuv]()`](/de/docs/Web/API/WebGL2RenderingContext/clearBuffer)
  - : Löscht Puffer aus dem aktuell gebundenen Framebuffer.

## Abfrageobjekte

Methoden für die Arbeit mit `WebGLQuery`-Objekten.

- [`WebGL2RenderingContext.createQuery()`](/de/docs/Web/API/WebGL2RenderingContext/createQuery)
  - : Erstellt ein neues `WebGLQuery`-Objekt.
- [`WebGL2RenderingContext.deleteQuery()`](/de/docs/Web/API/WebGL2RenderingContext/deleteQuery)
  - : Löscht ein angegebenes `WebGLQuery`-Objekt.
- [`WebGL2RenderingContext.isQuery()`](/de/docs/Web/API/WebGL2RenderingContext/isQuery)
  - : Gibt `true` zurück, wenn ein angegebenes Objekt ein gültiges `WebGLQuery`-Objekt ist.
- [`WebGL2RenderingContext.beginQuery()`](/de/docs/Web/API/WebGL2RenderingContext/beginQuery)
  - : Beginnt eine asynchrone Abfrage.
- [`WebGL2RenderingContext.endQuery()`](/de/docs/Web/API/WebGL2RenderingContext/endQuery)
  - : Markiert das Ende einer asynchronen Abfrage.
- [`WebGL2RenderingContext.getQuery()`](/de/docs/Web/API/WebGL2RenderingContext/getQuery)
  - : Gibt ein `WebGLQuery`-Objekt für ein angegebenes Ziel zurück.
- [`WebGL2RenderingContext.getQueryParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter)
  - : Gibt Informationen über eine Abfrage zurück.

## Sampler-Objekte

- [`WebGL2RenderingContext.createSampler()`](/de/docs/Web/API/WebGL2RenderingContext/createSampler)
  - : Erstellt ein neues `WebGLSampler`-Objekt.
- [`WebGL2RenderingContext.deleteSampler()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSampler)
  - : Löscht ein angegebenes `WebGLSampler`-Objekt.
- [`WebGL2RenderingContext.bindSampler()`](/de/docs/Web/API/WebGL2RenderingContext/bindSampler)
  - : Bindet einen angegebenen `WebGLSampler` an eine Textureinheit.
- [`WebGL2RenderingContext.isSampler()`](/de/docs/Web/API/WebGL2RenderingContext/isSampler)
  - : Gibt `true` zurück, wenn ein angegebenes Objekt ein gültiges `WebGLSampler`-Objekt ist.
- [`WebGL2RenderingContext.samplerParameter[if]()`](/de/docs/Web/API/WebGL2RenderingContext/samplerParameter)
  - : Legt Sampler-Parameter fest.
- [`WebGL2RenderingContext.getSamplerParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSamplerParameter)
  - : Gibt Informationen zu Sampler-Parametern zurück.

## Sync-Objekte

- [`WebGL2RenderingContext.fenceSync()`](/de/docs/Web/API/WebGL2RenderingContext/fenceSync)
  - : Erstellt ein neues `WebGLSync`-Objekt und fügt es in den GL-Befehlstream ein.
- [`WebGL2RenderingContext.isSync()`](/de/docs/Web/API/WebGL2RenderingContext/isSync)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges `WebGLSync`-Objekt ist.
- [`WebGL2RenderingContext.deleteSync()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSync)
  - : Löscht ein angegebenes `WebGLSync`-Objekt.
- [`WebGL2RenderingContext.clientWaitSync()`](/de/docs/Web/API/WebGL2RenderingContext/clientWaitSync)
  - : Blockiert und wartet darauf, dass ein `WebGLSync`-Objekt angezeigt wird oder ein angegebenes Timeout überschritten wird.
- [`WebGL2RenderingContext.waitSync()`](/de/docs/Web/API/WebGL2RenderingContext/waitSync)
  - : Gibt sofort zurück, wartet aber auf dem GL-Server, bis das angegebene `WebGLSync`-Objekt angezeigt wird.
- [`WebGL2RenderingContext.getSyncParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSyncParameter)
  - : Gibt Parameterinformationen eines `WebGLSync`-Objekts zurück.

## Transform-Feedback

- [`WebGL2RenderingContext.createTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/createTransformFeedback)
  - : Erstellt und initialisiert `WebGLTransformFeedback`-Objekte.
- [`WebGL2RenderingContext.deleteTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback)
  - : Löscht ein angegebenes `WebGLTransformFeedback`-Objekt.
- [`WebGL2RenderingContext.isTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/isTransformFeedback)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges `WebGLTransformFeedback`-Objekt ist.
- [`WebGL2RenderingContext.bindTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback)
  - : Bindet ein übergebenes `WebGLTransformFeedback`-Objekt an den aktuellen GL-Zustand.
- [`WebGL2RenderingContext.beginTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback)
  - : Startet einen Transform-Feedback-Vorgang.
- [`WebGL2RenderingContext.endTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/endTransformFeedback)
  - : Beendet einen Transform-Feedback-Vorgang.
- [`WebGL2RenderingContext.transformFeedbackVaryings()`](/de/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
  - : Gibt Werte an, die in `WebGLTransformFeedback`-Buffern aufgezeichnet werden sollen.
- [`WebGL2RenderingContext.getTransformFeedbackVarying()`](/de/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)
  - : Gibt Informationen über variierende Variablen aus `WebGLTransformFeedback`-Buffern zurück.
- [`WebGL2RenderingContext.pauseTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback)
  - : Pausiert einen Transform-Feedback-Vorgang.
- [`WebGL2RenderingContext.resumeTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback)
  - : Setzt einen Transform-Feedback-Vorgang fort.

## Uniform-Buffer-Objekte

- [`WebGL2RenderingContext.bindBufferBase()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferBase)
  - : Bindet einen gegebenen `WebGLBuffer` an einen angegebenen Bindungspunkt (`target`) an einem angegebenen `index`.
- [`WebGL2RenderingContext.bindBufferRange()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferRange)
  - : Bindet einen Bereich eines gegebenen `WebGLBuffer` an einen gegebenen Bindungspunkt (`target`) an einem angegebenen `index`.
- [`WebGL2RenderingContext.getUniformIndices()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
  - : Ruft die Indizes einer Reihe von Uniforms innerhalb eines `WebGLProgram` ab.
- [`WebGL2RenderingContext.getActiveUniforms()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
  - : Ruft Informationen über aktive Uniforms innerhalb eines `WebGLProgram` ab.
- [`WebGL2RenderingContext.getUniformBlockIndex()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
  - : Ruft den Index eines Uniform-Block aus einem `WebGLProgram` ab.
- [`WebGL2RenderingContext.getActiveUniformBlockParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter)
  - : Ruft Informationen über einen aktiven Uniform-Block innerhalb eines `WebGLProgram` ab.
- [`WebGL2RenderingContext.getActiveUniformBlockName()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName)
  - : Ruft den Namen des aktiven Uniform-Blocks an einem gegebenen Index innerhalb eines `WebGLProgram` ab.
- [`WebGL2RenderingContext.uniformBlockBinding()`](/de/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding)
  - : Ordnet Bindungspunkte für aktive Uniform-Blocks zu.

## Vertex-Array-Objekte

Methoden für die Arbeit mit `WebGLVertexArrayObject` (VAO)-Objekten.

- [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
  - : Erstellt ein neues `WebGLVertexArrayObject`.
- [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
  - : Löscht ein angegebenes `WebGLVertexArrayObject`.
- [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges `WebGLVertexArrayObject` ist.
- [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
  - : Bindet ein gegebenes `WebGLVertexArrayObject` an den Puffer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
