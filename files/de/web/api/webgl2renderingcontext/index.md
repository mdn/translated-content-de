---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("WebGL")}}

Das **WebGL2RenderingContext**-Interface bietet den OpenGL ES 3.0-Rendering-Kontext für die Zeichenfläche eines HTML-{{HTMLElement("canvas")}} Elements.

Um ein Objekt dieses Interfaces zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf einem `<canvas>`-Element auf und übergeben Sie "webgl2" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 ist eine Erweiterung von WebGL 1. Das `WebGL2RenderingContext`-Interface implementiert alle Mitglieder des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces. Einige Methoden des WebGL 1-Kontexts können zusätzliche Werte akzeptieren, wenn sie in einem WebGL 2-Kontext verwendet werden. Diese Informationen finden Sie auf den Referenzseiten von WebGL 1.

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält mehr Informationen, Beispiele und Ressourcen, um mit WebGL anzufangen.

## Konstanten

Siehe die Seite [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Zustandsinformationen

- [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
  - : Gibt den indizierten Wert für das angegebene `target` zurück.

## Puffer

- [`WebGL2RenderingContext.bufferData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferData)
  - : Initialisiert und erstellt den Datenspeicher des Pufferobjekts.
- [`WebGL2RenderingContext.bufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferSubData)
  - : Aktualisiert einen Teilbereich des Datenspeichers eines Pufferobjekts.
- [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData)
  - : Kopiert einen Teil der Daten eines Puffers in einen anderen Puffer.
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)
  - : Liest Daten aus einem Puffer und schreibt sie in einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Framebuffer

- [`WebGL2RenderingContext.blitFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/blitFramebuffer)
  - : Überträgt einen Block von Pixeln vom Read-Framebuffer zum Draw-Framebuffer.
- [`WebGL2RenderingContext.framebufferTextureLayer()`](/de/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer)
  - : Hängt eine einzelne Ebene einer Textur an einen Framebuffer an.
- [`WebGL2RenderingContext.invalidateFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
  - : Invalidiert den Inhalt von Anhängen in einem Framebuffer.
- [`WebGL2RenderingContext.invalidateSubFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
  - : Invalidiert Teile der Inhalte von Anhängen in einem Framebuffer.
- [`WebGL2RenderingContext.readBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/readBuffer)
  - : Wählt einen Farbpuffer als Quelle für Pixel aus.

## Renderbuffer

- [`WebGL2RenderingContext.getInternalformatParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter)
  - : Gibt Informationen über die implementierungsabhängige Unterstützung für interne Formate zurück.
- [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)
  - : Erstellt und initialisiert den Datenspeicher eines Renderbuffer-Objekts und ermöglicht die Angabe der Anzahl der zu verwendenden Samples.

## Texturen

- [`WebGL2RenderingContext.texStorage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D)
  - : Legt alle Ebenen des zweidimensionalen Texturspeichers fest.
- [`WebGL2RenderingContext.texStorage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage3D)
  - : Legt alle Ebenen einer dreidimensionalen Textur oder einer zweidimensionalen Array-Textur fest.
- [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D)
  - : Legt ein dreidimensionales Texturbild fest.
- [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D)
  - : Legt ein Unterrechteck der aktuellen 3D-Textur fest.
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
  - : Kopiert Pixel aus dem aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein vorhandenes Teilbild einer 3D-Textur.
- [`WebGL2RenderingContext.compressedTexImage3D`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
  - : Legt ein dreidimensionales Texturbild im komprimierten Format fest.
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
  - : Legt ein dreidimensionales Unterrechteck für ein Texturbild im komprimierten Format fest.

## Programme und Shader

- [`WebGL2RenderingContext.getFragDataLocation()`](/de/docs/Web/API/WebGL2RenderingContext/getFragDataLocation)
  - : Gibt die Bindung von Farbnummern an benutzerdefinierte ausgehende Variablen zurück.

## Uniformen und Attribute

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform)
  - : Methoden zur Festlegung von Werten für Uniformvariablen.
- [`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
  - : Methoden zur Festlegung von Matrixwerten für Uniformvariablen.
- [`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
  - : Methoden zur Festlegung von Ganzzahlwerten für generische Vertex-Attribute.
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
  - : Gibt ganzzahlige Datenformate und Positionen von Vertex-Attributen in einem Vertex-Attribut-Array an.

## Zeichenpuffer

- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
  - : Ändert die Rate, mit der generische Vertex-Attribute fortschreiten, wenn mehrere Instanzen von Primitiven mit [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) und [`gl.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced) gerendert werden.
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
  - : Rendert Primitive aus Array-Daten. Zusätzlich können mehrere Instanzen des Bereichs von Elementen ausgeführt werden.
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
  - : Rendert Primitive aus Array-Daten. Zusätzlich können mehrere Instanzen eines Satzes von Elementen ausgeführt werden.
- [`WebGL2RenderingContext.drawRangeElements()`](/de/docs/Web/API/WebGL2RenderingContext/drawRangeElements)
  - : Rendert Primitive aus Array-Daten in einem gegebenen Bereich.
- [`WebGL2RenderingContext.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
  - : Gibt eine Liste von Farbpuffern an, in die gezeichnet werden soll.
- [`WebGL2RenderingContext.clearBuffer[fiuv]()`](/de/docs/Web/API/WebGL2RenderingContext/clearBuffer)
  - : Löscht Puffer aus dem aktuell gebundenen Framebuffer.

## Abfrageobjekte

Methoden zur Arbeit mit [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekten.

- [`WebGL2RenderingContext.createQuery()`](/de/docs/Web/API/WebGL2RenderingContext/createQuery)
  - : Erstellt ein neues [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.
- [`WebGL2RenderingContext.deleteQuery()`](/de/docs/Web/API/WebGL2RenderingContext/deleteQuery)
  - : Löscht ein gegebenes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.
- [`WebGL2RenderingContext.isQuery()`](/de/docs/Web/API/WebGL2RenderingContext/isQuery)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist.
- [`WebGL2RenderingContext.beginQuery()`](/de/docs/Web/API/WebGL2RenderingContext/beginQuery)
  - : Beginnt eine asynchrone Abfrage.
- [`WebGL2RenderingContext.endQuery()`](/de/docs/Web/API/WebGL2RenderingContext/endQuery)
  - : Markiert das Ende einer asynchronen Abfrage.
- [`WebGL2RenderingContext.getQuery()`](/de/docs/Web/API/WebGL2RenderingContext/getQuery)
  - : Gibt ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt für ein gegebenes Ziel zurück.
- [`WebGL2RenderingContext.getQueryParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter)
  - : Gibt Informationen über eine Abfrage zurück.

## Sampler-Objekte

- [`WebGL2RenderingContext.createSampler()`](/de/docs/Web/API/WebGL2RenderingContext/createSampler)
  - : Erstellt ein neues [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.
- [`WebGL2RenderingContext.deleteSampler()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSampler)
  - : Löscht ein gegebenes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt.
- [`WebGL2RenderingContext.bindSampler()`](/de/docs/Web/API/WebGL2RenderingContext/bindSampler)
  - : Bindet ein gegebenes [`WebGLSampler`](/de/docs/Web/API/WebGLSampler) an eine Textureinheit.
- [`WebGL2RenderingContext.isSampler()`](/de/docs/Web/API/WebGL2RenderingContext/isSampler)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)-Objekt ist.
- [`WebGL2RenderingContext.samplerParameter[if]()`](/de/docs/Web/API/WebGL2RenderingContext/samplerParameter)
  - : Legt Sampler-Parameter fest.
- [`WebGL2RenderingContext.getSamplerParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSamplerParameter)
  - : Gibt Informationen über Sampler-Parameter zurück.

## Sync-Objekte

- [`WebGL2RenderingContext.fenceSync()`](/de/docs/Web/API/WebGL2RenderingContext/fenceSync)
  - : Erstellt ein neues [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt und fügt es in den GL-Befehls-Stream ein.
- [`WebGL2RenderingContext.isSync()`](/de/docs/Web/API/WebGL2RenderingContext/isSync)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt ist.
- [`WebGL2RenderingContext.deleteSync()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSync)
  - : Löscht ein gegebenes [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.
- [`WebGL2RenderingContext.clientWaitSync()`](/de/docs/Web/API/WebGL2RenderingContext/clientWaitSync)
  - : Blockiert und wartet, bis ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisiert wird oder bis ein gegebener Timeout überschritten wird.
- [`WebGL2RenderingContext.waitSync()`](/de/docs/Web/API/WebGL2RenderingContext/waitSync)
  - : Gibt sofort zurück, wartet aber auf dem GL-Server, bis das gegebene [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisiert wird.
- [`WebGL2RenderingContext.getSyncParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSyncParameter)
  - : Gibt Parameterinformationen eines [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekts zurück.

## Transform Feedback

- [`WebGL2RenderingContext.createTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/createTransformFeedback)
  - : Erstellt und initialisiert [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekte.
- [`WebGL2RenderingContext.deleteTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback)
  - : Löscht ein gegebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.
- [`WebGL2RenderingContext.isTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/isTransformFeedback)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist.
- [`WebGL2RenderingContext.bindTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback)
  - : Bindet ein übergebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt an den aktuellen GL-Status.
- [`WebGL2RenderingContext.beginTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback)
  - : Startet eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.endTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/endTransformFeedback)
  - : Beendet eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.transformFeedbackVaryings()`](/de/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
  - : Gibt Werte an, die in [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Puffern aufgezeichnet werden sollen.
- [`WebGL2RenderingContext.getTransformFeedbackVarying()`](/de/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)
  - : Gibt Informationen über varyierende Variablen aus [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Puffern zurück.
- [`WebGL2RenderingContext.pauseTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback)
  - : Pausiert eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.resumeTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback)
  - : Setzt eine Transform-Feedback-Operation fort.

## Uniform-Buffer-Objekte

- [`WebGL2RenderingContext.bindBufferBase()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferBase)
  - : Bindet einen gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen gegebenen Bindungspunkt (`target`) an einem gegebenen `index`.
- [`WebGL2RenderingContext.bindBufferRange()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferRange)
  - : Bindet einen Bereich eines gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an einen gegebenen Bindungspunkt (`target`) an einem gegebenen `index`.
- [`WebGL2RenderingContext.getUniformIndices()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
  - : Ruft die Indizes einer Anzahl von Uniformen innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniforms()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
  - : Ruft Informationen über aktive Uniformen innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getUniformBlockIndex()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
  - : Ruft den Index eines Uniformblocks innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniformBlockParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter)
  - : Ruft Informationen über einen aktiven Uniformblock innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniformBlockName()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName)
  - : Ruft den Namen des aktiven Uniformblocks an einem gegebenen Index innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.uniformBlockBinding()`](/de/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding)
  - : Weist Bindungspunkte für aktive Uniformblocks zu.

## Vertex-Array-Objekte

Methoden zur Arbeit mit [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) (VAO)-Objekten.

- [`WebGL2RenderingContext.createVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/createVertexArray)
  - : Erstellt ein neues [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`WebGL2RenderingContext.deleteVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/deleteVertexArray)
  - : Löscht ein gegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject).
- [`WebGL2RenderingContext.isVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/isVertexArray)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) ist.
- [`WebGL2RenderingContext.bindVertexArray()`](/de/docs/Web/API/WebGL2RenderingContext/bindVertexArray)
  - : Bindet ein gegebenes [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject) an den Puffer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
