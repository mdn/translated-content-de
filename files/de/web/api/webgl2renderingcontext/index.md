---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("WebGL")}}

Das **WebGL2RenderingContext**-Interface bietet den OpenGL ES 3.0-Rendering-Kontext für die Zeichenfläche eines HTML-{{HTMLElement("canvas")}}-Elements.

Um ein Objekt dieses Interfaces zu erhalten, rufen Sie {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} auf einem `<canvas>`-Element auf und übergeben "webgl2" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl2");
```

> [!NOTE]
> WebGL 2 ist eine Erweiterung zu WebGL 1. Das `WebGL2RenderingContext`-Interface implementiert alle Mitglieder des {{domxref("WebGLRenderingContext")}}-Interfaces. Einige Methoden des WebGL 1-Kontexts können zusätzliche Werte akzeptieren, wenn sie in einem WebGL 2-Kontext verwendet werden. Diese Informationen finden Sie auf den Referenzseiten zu WebGL 1 vermerkt.

Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, um mit WebGL zu beginnen.

## Konstanten

Siehe die Seite zu den [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Statusinformationen

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
  - : Gibt den indizierten Wert für das angegebene `target` zurück.

## Puffer

- {{domxref("WebGL2RenderingContext.bufferData()")}}
  - : Initialisiert und erstellt den Datenspeicher des Pufferobjekts.
- {{domxref("WebGL2RenderingContext.bufferSubData()")}}
  - : Aktualisiert einen Teilbereich des Datenspeichers eines Pufferobjekts.
- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
  - : Kopiert einen Teil der Daten eines Puffers in einen anderen Puffer.
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
  - : Liest Daten aus einem Puffer und schreibt sie in ein {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}.

## Framebuffer

- {{domxref("WebGL2RenderingContext.blitFramebuffer()")}}
  - : Überträgt einen Block von Pixeln vom Lese-Framebuffer zum Zeichen-Framebuffer.
- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
  - : Fügt eine einzelne Ebene einer Textur einem Framebuffer hinzu.
- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
  - : Macht den Inhalt der Anhänge in einem Framebuffer ungültig.
- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
  - : Macht Teile des Inhalts der Anhänge in einem Framebuffer ungültig.
- {{domxref("WebGL2RenderingContext.readBuffer()")}}
  - : Wählt einen Farbpuffer als Quelle für Pixel aus.

## Renderbuffer

- {{domxref("WebGL2RenderingContext.getInternalformatParameter()")}}
  - : Gibt Informationen über implementierungsabhängige Unterstützung für interne Formate zurück.
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
  - : Erstellt und initialisiert den Datenspeicher eines Renderbuffer-Objekts und erlaubt die Angabe der Anzahl der zu verwendenden Samples.

## Texturen

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
  - : Gibt alle Ebenen des zweidimensionalen Texturspeichers an.
- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
  - : Gibt alle Ebenen eines dreidimensionalen Textur- oder zweidimensionalen Array-Texturspeichers an.
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
  - : Spezifiziert ein dreidimensionales Texturbild.
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
  - : Spezifiziert ein Unterrechteck der aktuellen 3D-Textur.
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
  - : Kopiert Pixel des aktuellen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) in ein vorhandenes 3D-Textur-Teilbild.
- {{domxref("WebGL2RenderingContext.compressedTexImage3D")}}
  - : Spezifiziert ein dreidimensionales Texturbild in einem komprimierten Format.
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
  - : Spezifiziert ein dreidimensionales Unterrechteck für ein Texturbild in einem komprimierten Format.

## Programme und Shader

- {{domxref("WebGL2RenderingContext.getFragDataLocation()")}}
  - : Gibt die Bindung von Farbnummern zu benutzerdefinierten ausgehenden variierenden Variablen zurück.

## Uniforms und Attribute

- [`WebGL2RenderingContext.uniform[1234][uif][v]()`](/de/docs/Web/API/WebGL2RenderingContext/uniform)
  - : Methoden zur Angabe von Werten von Uniform-Variablen.
- {{domxref("WebGL2RenderingContext.uniformMatrix()", "WebGL2RenderingContext.uniformMatrix[234]x[234]fv()")}}
  - : Methoden zur Angabe von Matrixwerten für Uniform-Variablen.
- {{domxref("WebGL2RenderingContext.vertexAttribI()", "WebGL2RenderingContext.vertexAttribI4[u]i[v]()")}}
  - : Methoden zur Angabe von ganzzahligen Werten für generische Vertex-Attribute.
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
  - : Spezifiziert ganzzahlige Datentypen und Standorte von Vertex-Attributen in einem Vertex-Attribut-Array.

## Zeichnungsbuffer

- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
  - : Ändert die Rate, mit der generische Vertex-Attribute beim Rendern mehrerer Instanzen von Primitiven mit {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} und {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}} fortschreiten.
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
  - : Rendert Primitive aus Array-Daten. Zusätzlich kann es mehrere Instanzen des Elementbereichs ausführen.
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
  - : Rendert Primitive aus Array-Daten. Zusätzlich kann es mehrere Instanzen eines Elementsatzes ausführen.
- {{domxref("WebGL2RenderingContext.drawRangeElements()")}}
  - : Rendert Primitive aus Array-Daten in einem gegebenen Bereich.
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
  - : Gibt eine Liste von Farb-Puffern an, in die gezeichnet werden soll.
- {{domxref("WebGL2RenderingContext.clearBuffer()", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
  - : Löscht Puffer aus dem aktuell gebundenen Framebuffer.

## Abfrageobjekte

Methoden zum Arbeiten mit {{domxref("WebGLQuery")}}-Objekten.

- {{domxref("WebGL2RenderingContext.createQuery()")}}
  - : Erstellt ein neues {{domxref("WebGLQuery")}}-Objekt.
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
  - : Löscht ein gegebenes {{domxref("WebGLQuery")}}-Objekt.
- {{domxref("WebGL2RenderingContext.isQuery()")}}
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges {{domxref("WebGLQuery")}}-Objekt ist.
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
  - : Beginnt eine asynchrone Abfrage.
- {{domxref("WebGL2RenderingContext.endQuery()")}}
  - : Markiert das Ende einer asynchronen Abfrage.
- {{domxref("WebGL2RenderingContext.getQuery()")}}
  - : Gibt ein {{domxref("WebGLQuery")}}-Objekt für ein gegebenes Ziel zurück.
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}
  - : Gibt Informationen über eine Abfrage zurück.

## Sampler-Objekte

- {{domxref("WebGL2RenderingContext.createSampler()")}}
  - : Erstellt ein neues {{domxref("WebGLSampler")}}-Objekt.
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
  - : Löscht ein gegebenes {{domxref("WebGLSampler")}}-Objekt.
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
  - : Bindet ein gegebenes {{domxref("WebGLSampler")}} an eine Textureinheit.
- {{domxref("WebGL2RenderingContext.isSampler()")}}
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges {{domxref("WebGLSampler")}}-Objekt ist.
- {{domxref("WebGL2RenderingContext.samplerParameter()", "WebGL2RenderingContext.samplerParameter[if]()")}}
  - : Legt Sampler-Parameter fest.
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}
  - : Gibt Informationen zu Sampler-Parametern zurück.

## Sync-Objekte

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
  - : Erstellt ein neues {{domxref("WebGLSync")}}-Objekt und fügt es in den GL-Befehlsstrom ein.
- {{domxref("WebGL2RenderingContext.isSync()")}}
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLSync")}}-Objekt ist.
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
  - : Löscht ein gegebenes {{domxref("WebGLSync")}}-Objekt.
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
  - : Blockiert und wartet, bis ein {{domxref("WebGLSync")}}-Objekt signalisiert wird oder eine gegebene Zeitüberschreitung erreicht ist.
- {{domxref("WebGL2RenderingContext.waitSync()")}}
  - : Gibt sofort zurück, wartet jedoch auf dem GL-Server, bis das gegebene {{domxref("WebGLSync")}}-Objekt signalisiert wird.
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}
  - : Gibt Parameterinformationen eines {{domxref("WebGLSync")}}-Objekts zurück.

## Transform Feedback

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
  - : Erstellt und initialisiert {{domxref("WebGLTransformFeedback")}}-Objekte.
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
  - : Löscht ein gegebenes {{domxref("WebGLTransformFeedback")}}-Objekt.
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
  - : Gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLTransformFeedback")}}-Objekt ist.
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
  - : Bindet ein übergebenes {{domxref("WebGLTransformFeedback")}}-Objekt an den aktuellen GL-Zustand.
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
  - : Startet eine Transform-Feedback-Operation.
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
  - : Beendet eine Transform-Feedback-Operation.
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
  - : Gibt Werte an, die in {{domxref("WebGLTransformFeedback")}}-Puffer aufgezeichnet werden sollen.
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}
  - : Gibt Informationen über variierende Variablen aus {{domxref("WebGLTransformFeedback")}}-Puffern zurück.
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
  - : Pausiert eine Transform-Feedback-Operation.
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
  - : Setzt eine Transform-Feedback-Operation fort.

## Uniform-Pufferobjekte

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
  - : Bindet einen gegebenen {{domxref("WebGLBuffer")}} an einen gegebenen Bindepunkt (`target`) an einem gegebenen `index`.
- {{domxref("WebGL2RenderingContext.bindBufferRange()")}}
  - : Bindet einen Bereich eines gegebenen {{domxref("WebGLBuffer")}} an einen gegebenen Bindepunkt (`target`) an einem gegebenen `index`.
- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
  - : Ruft die Indizes einer Anzahl von Uniforms innerhalb eines {{domxref("WebGLProgram")}} ab.
- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
  - : Ruft Informationen über aktive Uniforms innerhalb eines {{domxref("WebGLProgram")}} ab.
- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
  - : Ruft den Index eines Uniform-Blocks innerhalb eines {{domxref("WebGLProgram")}} ab.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
  - : Ruft Informationen über einen aktiven Uniform-Block innerhalb eines {{domxref("WebGLProgram")}} ab.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockName()")}}
  - : Ruft den Namen des aktiven Uniform-Blocks an einem gegebenen Index innerhalb eines {{domxref("WebGLProgram")}} ab.
- {{domxref("WebGL2RenderingContext.uniformBlockBinding()")}}
  - : Weist Bindepunkte für aktive Uniform-Blöcke zu.

## Vertex-Array-Objekte

Methoden zum Arbeiten mit {{domxref("WebGLVertexArrayObject")}} (VAO)-Objekten.

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - : Erstellt ein neues {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - : Löscht ein gegebenes {{domxref("WebGLVertexArrayObject")}}.
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - : Gibt `true` zurück, wenn ein gegebenes Objekt ein gültiges {{domxref("WebGLVertexArrayObject")}} ist.
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
  - : Bindet ein gegebenes {{domxref("WebGLVertexArrayObject")}} an den Puffer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}
- {{domxref("WebGLRenderingContext")}}
