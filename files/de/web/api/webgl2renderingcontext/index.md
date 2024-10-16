---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
l10n:
  sourceCommit: 72a2131decd44410a5c2acb9d4d5c1c7c6340e6a
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **WebGL2RenderingContext**-Interface bietet den OpenGL ES 3.0-Rendering-Kontext für die Zeichenfläche eines HTML-{{HTMLElement("canvas")}}-Elements.

Um ein Objekt dieses Interfaces zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf einem `<canvas>`-Element auf und geben Sie "webgl2" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 ist eine Erweiterung von WebGL 1. Das `WebGL2RenderingContext`-Interface implementiert alle Mitglieder des [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)-Interfaces. Einige Methoden des WebGL 1-Kontexts können zusätzliche Werte akzeptieren, wenn sie in einem WebGL 2-Kontext verwendet werden. Diese Informationen finden Sie auf den WebGL 1-Referenzseiten.

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) bietet mehr Informationen, Beispiele und Ressourcen, um mit WebGL zu beginnen.

## Konstanten

Siehe die Seite zu [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Statusinformationen

- [`WebGL2RenderingContext.getIndexedParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getIndexedParameter)
  - : Gibt den indizierten Wert für das gegebene `target` zurück.

## Puffer

- [`WebGL2RenderingContext.bufferData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferData)
  - : Initialisiert und erstellt den Datenspeicher des Pufferobjekts.
- [`WebGL2RenderingContext.bufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferSubData)
  - : Aktualisiert einen Teil des Datenspeichers eines Pufferobjekts.
- [`WebGL2RenderingContext.copyBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/copyBufferSubData)
  - : Kopiert Teile der Daten eines Puffers in einen anderen Puffer.
- [`WebGL2RenderingContext.getBufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/getBufferSubData)
  - : Liest Daten aus einem Puffer und schreibt sie in einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Framebuffer

- [`WebGL2RenderingContext.blitFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/blitFramebuffer)
  - : Überträgt einen Block von Pixeln vom Lese-Framebuffer zum Zeichnungs-Framebuffer.
- [`WebGL2RenderingContext.framebufferTextureLayer()`](/de/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer)
  - : Fügt eine einzelne Schicht einer Textur an einen Framebuffer an.
- [`WebGL2RenderingContext.invalidateFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer)
  - : Invaliert den Inhalt von Anhängen in einem Framebuffer.
- [`WebGL2RenderingContext.invalidateSubFramebuffer()`](/de/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer)
  - : Invaliert Teile des Inhalts von Anhängen in einem Framebuffer.
- [`WebGL2RenderingContext.readBuffer()`](/de/docs/Web/API/WebGL2RenderingContext/readBuffer)
  - : Wählt einen Farb-Puffer als Quelle für Pixel aus.

## Renderbuffer

- [`WebGL2RenderingContext.getInternalformatParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter)
  - : Gibt Informationen über Implementierungs-abhängige Unterstützung für interne Formate zurück.
- [`WebGL2RenderingContext.renderbufferStorageMultisample()`](/de/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample)
  - : Erstellt und initialisiert den Datenspeicher eines Renderpufferobjekts und erlaubt die Angabe der zu verwendenden Anzahl von Samples.

## Texturen

- [`WebGL2RenderingContext.texStorage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage2D)
  - : Bestimmt alle Ebenen des zweidimensionalen Texturspeichers.
- [`WebGL2RenderingContext.texStorage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texStorage3D)
  - : Bestimmt alle Ebenen eines dreidimensionalen Texturspeichers oder eines zweidimensionalen Array-Texturspeichers.
- [`WebGL2RenderingContext.texImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage3D)
  - : Bestimmt ein dreidimensionales Texturbild.
- [`WebGL2RenderingContext.texSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage3D)
  - : Bestimmt ein Teilrechteck der aktuellen 3D-Textur.
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
  - : Kopiert Pixel aus dem aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein bestehendes 3D-Textur-Sub-Image.
- [`WebGL2RenderingContext.compressedTexImage3D`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexImage3D)
  - : Bestimmt ein dreidimensionales Texturbild in einem komprimierten Format.
- [`WebGL2RenderingContext.compressedTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D)
  - : Bestimmt ein dreidimensionales Teilrechteck für ein Texturbild in einem komprimierten Format.

## Programme und Shader

- [`WebGL2RenderingContext.getFragDataLocation()`](/de/docs/Web/API/WebGL2RenderingContext/getFragDataLocation)
  - : Gibt die Bindung von Farbnummern an benutzerdefinierte, variierende Ausgabewerte zurück.

## Uniforms und Attribute

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform)
  - : Methoden, die Werte von Uniform-Variablen spezifizieren.
- [`WebGL2RenderingContext.uniformMatrix[234]x[234]fv()`](/de/docs/Web/API/WebGL2RenderingContext/uniformMatrix)
  - : Methoden, die Matrixwerte für Uniform-Variablen spezifizieren.
- [`WebGL2RenderingContext.vertexAttribI4[u]i[v]()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribI)
  - : Methoden, die Ganzzahlen für generische Vertex-Attribute spezifizieren.
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
  - : Spezifiziert Ganzzahl-Datenformate und -Positionen von Vertex-Attributen in einem Vertex-Attributs-Array.

## Farbräume

- [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext/drawingBufferColorSpace)
  - : Bestimmt den Farbraum des WebGL-Zeichenpuffers.
- [`WebGL2RenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGL2RenderingContext/unpackColorSpace)
  - : Bestimmt den Farbraum, in den beim Importieren von Texturen konvertiert werden soll.

## Zeichenbuffer

- [`WebGL2RenderingContext.vertexAttribDivisor()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor)
  - : Ändert die Rate, mit der generische Vertex-Attribute voranschreiten, wenn mehrere Instanzen von Primitiven mit [`gl.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced) und [`gl.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced) gerendert werden.
- [`WebGL2RenderingContext.drawArraysInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)
  - : Rendert Primitiven aus Array-Daten. Außerdem kann es mehrere Instanzen des Elementsbereichs ausführen.
- [`WebGL2RenderingContext.drawElementsInstanced()`](/de/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced)
  - : Rendert Primitiven aus Array-Daten. Darüber hinaus kann es mehrere Instanzen eines Elementsatzes ausführen.
- [`WebGL2RenderingContext.drawRangeElements()`](/de/docs/Web/API/WebGL2RenderingContext/drawRangeElements)
  - : Rendert Primitiven aus Array-Daten in einem bestimmten Bereich.
- [`WebGL2RenderingContext.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
  - : Bestimmt eine Liste von Farb-Puffern, in die gezeichnet werden soll.
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
  - : Startet eine asynchrone Abfrage.
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
  - : Gibt Sampler-Parameterinformationen zurück.

## Synchronisationsobjekte

- [`WebGL2RenderingContext.fenceSync()`](/de/docs/Web/API/WebGL2RenderingContext/fenceSync)
  - : Erstellt ein neues [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt und fügt es in den GL-Befehlsstream ein.
- [`WebGL2RenderingContext.isSync()`](/de/docs/Web/API/WebGL2RenderingContext/isSync)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt ist.
- [`WebGL2RenderingContext.deleteSync()`](/de/docs/Web/API/WebGL2RenderingContext/deleteSync)
  - : Löscht ein gegebenes [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.
- [`WebGL2RenderingContext.clientWaitSync()`](/de/docs/Web/API/WebGL2RenderingContext/clientWaitSync)
  - : Blockiert und wartet darauf, dass ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signaliert wird oder ein gegebener Timeout überschritten wird.
- [`WebGL2RenderingContext.waitSync()`](/de/docs/Web/API/WebGL2RenderingContext/waitSync)
  - : Gibt sofort zurück, wartet jedoch auf dem GL-Server, bis das gegebene [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signaliert wird.
- [`WebGL2RenderingContext.getSyncParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getSyncParameter)
  - : Gibt Parameterinformationen eines [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekts zurück.

## Transform-Feedback

- [`WebGL2RenderingContext.createTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/createTransformFeedback)
  - : Erstellt und initialisiert [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekte.
- [`WebGL2RenderingContext.deleteTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback)
  - : Löscht ein gegebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt.
- [`WebGL2RenderingContext.isTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/isTransformFeedback)
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt ist.
- [`WebGL2RenderingContext.bindTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback)
  - : Bindet ein übergebenes [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Objekt an den aktuellen GL-Zustand.
- [`WebGL2RenderingContext.beginTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback)
  - : Startet eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.endTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/endTransformFeedback)
  - : Beendet eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.transformFeedbackVaryings()`](/de/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings)
  - : Bestimmt Werte, die in [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Puffer aufgezeichnet werden sollen.
- [`WebGL2RenderingContext.getTransformFeedbackVarying()`](/de/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)
  - : Gibt Informationen über variierende Variablen aus [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)-Puffern zurück.
- [`WebGL2RenderingContext.pauseTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback)
  - : Pausiert eine Transform-Feedback-Operation.
- [`WebGL2RenderingContext.resumeTransformFeedback()`](/de/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback)
  - : Setzt eine Transform-Feedback-Operation fort.

## Uniform-Buffer-Objekte

- [`WebGL2RenderingContext.bindBufferBase()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferBase)
  - : Bindet ein gegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an eine gegebene Bindungsstelle (`target`) an einem gegebenen `index`.
- [`WebGL2RenderingContext.bindBufferRange()`](/de/docs/Web/API/WebGL2RenderingContext/bindBufferRange)
  - : Bindet einen Bereich eines gegebenen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an eine gegebene Bindungsstelle (`target`) an einem gegebenen `index`.
- [`WebGL2RenderingContext.getUniformIndices()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformIndices)
  - : Ruft die Indizes einer Anzahl von Uniforms innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniforms()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniforms)
  - : Ruft Informationen über aktive Uniforms innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getUniformBlockIndex()`](/de/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex)
  - : Ruft den Index eines Uniform-Blocks innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniformBlockParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter)
  - : Ruft Informationen über einen aktiven Uniform-Block innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.getActiveUniformBlockName()`](/de/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName)
  - : Ruft den Namen des aktiven Uniform-Blocks an einem gegebenen Index innerhalb eines [`WebGLProgram`](/de/docs/Web/API/WebGLProgram) ab.
- [`WebGL2RenderingContext.uniformBlockBinding()`](/de/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding)
  - : Weist Bindungspunkte für aktive Uniform-Blöcke zu.

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
