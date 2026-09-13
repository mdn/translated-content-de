---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: 30e0adab23668217555b7ed37df7e6e61b002bf3
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext`** Schnittstelle bietet eine Schnittstelle zum OpenGL ES 2.0 Grafik-Rendering-Kontext für die Zeichenfläche eines HTML {{HTMLElement("canvas")}} Elements.

Um Zugriff auf einen WebGL-Kontext für 2D- und/oder 3D-Grafik-Rendering zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf einem `<canvas>` Element auf und übergeben "webgl" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

Sobald Sie den WebGL-Rendering-Kontext für ein Canvas haben, können Sie darin rendern. Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) bietet weitere Informationen, Beispiele und Ressourcen zum Einstieg in WebGL.

Wenn Sie einen WebGL 2.0 Kontext benötigen, siehe [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext); dieser bietet Zugang zu einer Implementierung von OpenGL ES 3.0 Grafiken.

## Konstanten

Siehe die Seite zu den [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Der WebGL-Kontext

Die folgenden Eigenschaften und Methoden bieten allgemeine Informationen und Funktionen zur Handhabung des WebGL-Kontexts:

- [`WebGLRenderingContext.canvas`](/de/docs/Web/API/WebGLRenderingContext/canvas)
  - : Eine schreibgeschützte Rückverbindung zum [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}} Element verbunden ist.
- [`WebGLRenderingContext.drawingBufferWidth`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
  - : Die schreibgeschützte Breite des aktuellen Zeichenpuffers. Sollte der Breite des mit diesem Kontext verbundenen Canvas-Elements entsprechen.
- [`WebGLRenderingContext.drawingBufferHeight`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
  - : Die schreibgeschützte Höhe des aktuellen Zeichenpuffers. Sollte der Höhe des mit diesem Kontext verbundenen Canvas-Elements entsprechen.
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
  - : Gibt ein `WebGLContextAttributes` Objekt zurück, das die aktuellen Kontextparameter enthält. Könnte [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren ist.
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
  - : Gibt `true` zurück, wenn der Kontext verloren ist, andernfalls `false`.
- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
  - : Stellt sicher, dass der Kontext mit der XR-Hardware des Nutzers kompatibel ist und erstellt den Kontext gegebenenfalls mit einer neuen Konfiguration neu, um dies zu erreichen. Dies kann verwendet werden, um eine Anwendung zu starten, die eine standardmäßige 2D-Präsentation nutzt und dann später zu einem VR- oder AR-Modus zu wechseln.

## Ansichten und Clipping

- [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor)
  - : Definiert den Scherenschnittbereich.
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
  - : Legt den Viewport fest.

## Zustandsinformationen

- [`WebGLRenderingContext.activeTexture()`](/de/docs/Web/API/WebGLRenderingContext/activeTexture)
  - : Wählt die aktive Textureinheit aus.
- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
  - : Setzt die Quell- und Ziel-Blendingfaktoren.
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
  - : Setzt sowohl die RGB-Blending-Gleichung als auch die Alpha-Blending-Gleichung auf eine einzelne Gleichung.
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
  - : Setzt die RGB-Blending-Gleichung und die Alpha-Blending-Gleichung separat.
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
  - : Definiert, welche Funktion für das Pixel-Arithmetik-Blending verwendet wird.
- [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
  - : Definiert, welche Funktion für das Pixel-Arithmetik-Blending für RGB- und Alpha-Komponenten separat verwendet wird.
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
  - : Gibt die Farbwerte an, die beim Löschen von Farbpuffern verwendet werden.
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
  - : Gibt den Tiefenwert an, der beim Löschen des Tiefenpuffers verwendet wird.
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
  - : Gibt den Stencil-Wert an, der beim Löschen des Stencil-Puffers verwendet wird.
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
  - : Legt fest, welche Farbkomponenten aktiviert oder deaktiviert werden sollen, wenn auf ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gezeichnet oder gerendert wird.
- [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
  - : Gibt an, ob Vorder- und/oder Rückseitenpolygone ausgelassen werden können.
- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
  - : Gibt eine Funktion an, die die eingehende Pixeltiefe mit dem aktuellen Tiefenpufferwert vergleicht.
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
  - : Legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.
- [`WebGLRenderingContext.depthRange()`](/de/docs/Web/API/WebGLRenderingContext/depthRange)
  - : Gibt die Tiefenbereichstransformation von normalisierten Gerätekoordinaten zu Fenster- oder Viewport-Koordinaten an.
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
  - : Deaktiviert spezifische WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
  - : Aktiviert spezifische WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace)
  - : Gibt an, ob Polygone als Vorder- oder Rückseiten angesehen werden, indem eine Wickelrichtung festgelegt wird.
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
  - : Gibt einen Wert für den übergebenen Parameternamen zurück.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
  - : Gibt Fehlerinformationen zurück.
- [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint)
  - : Gibt Hinweise für bestimmte Verhaltensweisen an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
  - : Prüft, ob eine bestimmte WebGL-Funktion für diesen Kontext aktiviert ist oder nicht.
- [`WebGLRenderingContext.lineWidth()`](/de/docs/Web/API/WebGLRenderingContext/lineWidth)
  - : Legt die Linienstärke von rasterisierten Linien fest.
- [`WebGLRenderingContext.pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei)
  - : Gibt die Pixel-Speichermodi an.
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
  - : Gibt die Skalierungsfaktoren und Einheiten zur Berechnung von Tiefenwerten an.
- [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage)
  - : Gibt Multi-Sample-Coverage-Parameter für Antialiasing-Effekte an.
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
  - : Setzt sowohl die vorderseitige als auch die rückseitige Funktion und den Referenzwert für Stencil-Tests.
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
  - : Setzt die vorder- und/oder rückseitige Funktion und den Referenzwert für Stencil-Tests.
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
  - : Steuert das Aktivieren und Deaktivieren des Vorder- und Rückseitenschreibens von einzelnen Bits in den Stencil-Ebenen.
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
  - : Steuert das Aktivieren und Deaktivieren des Vorder- und/oder Rückseitenschreibens von einzelnen Bits in den Stencil-Ebenen.
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
  - : Setzt die vorder- und rückseitigen Stencil-Test-Aktionen.
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
  - : Setzt die vorder- und/oder rückseitigen Stencil-Test-Aktionen.

## Puffer

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
  - : Bindet ein `WebGLBuffer` Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
  - : Aktualisiert Pufferdaten.
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
  - : Aktualisiert Pufferdaten ab einem angegebenen Offset.
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
  - : Erstellt ein `WebGLBuffer` Objekt.
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
  - : Löscht ein `WebGLBuffer` Objekt.
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
  - : Gibt Informationen über den Puffer zurück.
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der übergebene Puffer gültig ist.

## Framebuffer

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
  - : Bindet ein `WebGLFrameBuffer` Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus)
  - : Gibt den Status des Framebuffers zurück.
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
  - : Erstellt ein `WebGLFrameBuffer` Objekt.
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
  - : Löscht ein `WebGLFrameBuffer` Objekt.
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
  - : Verbindet ein `WebGLRenderingBuffer` Objekt mit einem `WebGLFrameBuffer` Objekt.
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
  - : Verbindet ein Texturbild mit einem `WebGLFrameBuffer` Objekt.
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
  - : Gibt Informationen über das Framebuffer zurück.
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLFrameBuffer` Objekt gültig ist.
- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
  - : Liest einen Block von Pixeln aus dem `WebGLFrameBuffer`.

## Renderbuffer

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
  - : Bindet ein `WebGLRenderBuffer` Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
  - : Erstellt ein `WebGLRenderBuffer` Objekt.
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
  - : Löscht ein `WebGLRenderBuffer` Objekt.
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
  - : Gibt Informationen über den Renderbuffer zurück.
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLRenderingBuffer` gültig ist.
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
  - : Erstellt einen Renderbuffer-Datenspeicher.

## Texturen

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
  - : Bindet ein `WebGLTexture` Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
  - : Gibt ein 2D-Texturbild in einem komprimierten Format an.
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
  - : Gibt ein 2D-Textur-Subimage in einem komprimierten Format an.
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
  - : Kopiert ein 2D-Texturbild.
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
  - : Kopiert ein 2D-Textur-Subimage.
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
  - : Erstellt ein `WebGLTexture` Objekt.
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
  - : Löscht ein `WebGLTexture` Objekt.
- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
  - : Generiert eine Menge von Mipmaps für ein `WebGLTexture` Objekt.
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
  - : Gibt Informationen über die Textur zurück.
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLTexture` gültig ist.
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
  - : Gibt ein 2D-Texturbild an.
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
  - : Aktualisiert ein Teilrechteck der aktuellen `WebGLTexture`.
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Setzt Texturparameter.
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Setzt Texturparameter.

## Programme und Shader

- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
  - : Verbindet einen `WebGLShader` mit einem `WebGLProgram`.
- [`WebGLRenderingContext.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
  - : Bindet einen generischen Vertex-Index an eine benannte Attribut-Variable.
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
  - : Kompiliert einen `WebGLShader`.
- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
  - : Erstellt ein `WebGLProgram`.
- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
  - : Erstellt einen `WebGLShader`.
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
  - : Löscht ein `WebGLProgram`.
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
  - : Löscht einen `WebGLShader`.
- [`WebGLRenderingContext.detachShader()`](/de/docs/Web/API/WebGLRenderingContext/detachShader)
  - : Trennt einen `WebGLShader`.
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
  - : Gibt eine Liste der `WebGLShader` Objekte zurück, die mit einem `WebGLProgram` verbunden sind.
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
  - : Gibt Informationen über das Programm zurück.
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLProgram` Objekt zurück.
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
  - : Gibt Informationen über den Shader zurück.
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
  - : Gibt ein `WebGLShaderPrecisionFormat` Objekt zurück, das die Präzision für das numerische Format des Shaders beschreibt.
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLShader` Objekt zurück.
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
  - : Gibt den Quellcode eines `WebGLShader` als Zeichenkette zurück.
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLProgram` gültig ist.
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der übergebene `WebGLShader` gültig ist.
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
  - : Verlinkt das übergebene `WebGLProgram` Objekt.
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
  - : Setzt den Quellcode in einem `WebGLShader`.
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
  - : Nutzt das angegebene `WebGLProgram` als Teil des aktuellen Rendering-Zustands.
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
  - : Validiert ein `WebGLProgram`.

## Uniforms und Attribute

- [`WebGLRenderingContext.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
  - : Deaktiviert ein Vertex-Attribut-Array an einer gegebenen Position.
- [`WebGLRenderingContext.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
  - : Aktiviert ein Vertex-Attribut-Array an einer gegebenen Position.
- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
  - : Gibt Informationen über eine aktive Attribut-Variable zurück.
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
  - : Gibt Informationen über eine aktive Uniform-Variable zurück.
- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
  - : Gibt den Ort einer Attribut-Variable zurück.
- [`WebGLRenderingContext.getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert einer Uniform-Variable an einem bestimmten Ort zurück.
- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
  - : Gibt den Ort einer Uniform-Variable zurück.
- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
  - : Gibt Informationen über ein Vertex-Attribut an einer angegebenen Position zurück.
- [`WebGLRenderingContext.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
  - : Gibt die Adresse eines bestimmten Vertex-Attributs zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Gibt einen Wert für eine Uniform-Variable an.
- [`WebGLRenderingContext.uniformMatrix[234]fv()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Gibt einen Matrixwert für eine Uniform-Variable an.
- [`WebGLRenderingContext.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib)
  - : Gibt einen Wert für ein generisches Vertex-Attribut an.
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
  - : Gibt die Datenformate und Positionen von Vertex-Attributen in einem Vertex-Attribut-Array an.

## Zeichenpuffer

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
  - : Löscht spezifizierte Puffer zu voreingestellten Werten.
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
  - : Rendert Primitive aus Array-Daten.
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
  - : Rendert Primitive aus Element-Array-Daten.
- [`WebGLRenderingContext.finish()`](/de/docs/Web/API/WebGLRenderingContext/finish)
  - : Blockiert die Ausführung, bis alle vorher aufgerufenen Befehle beendet sind.
- [`WebGLRenderingContext.flush()`](/de/docs/Web/API/WebGLRenderingContext/flush)
  - : Leert verschiedene Pufferbefehle, wodurch alle Befehle so schnell wie möglich ausgeführt werden.

## Farbräume

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - : Gibt den Farbraum des WebGL-Zeichenpuffers an.
- [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
  - : Gibt den Farbraum an, zu dem beim Importieren von Texturen konvertiert werden soll.

## Umgang mit Erweiterungen

Diese Methoden verwalten WebGL-Erweiterungen:

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
  - : Gibt ein {{jsxref("Array")}} von Zeichenfolgen zurück, die alle unterstützten WebGL-Erweiterungen enthalten.
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
  - : Gibt ein Erweiterungsobjekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
