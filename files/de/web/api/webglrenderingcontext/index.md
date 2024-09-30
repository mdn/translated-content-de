---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLRenderingContext`** Interface bietet eine Schnittstelle zum OpenGL ES 2.0 Grafik-Rendering-Kontext für die Zeichenfläche eines HTML {{HTMLElement("canvas")}} Elements.

Um auf einen WebGL-Kontext für 2D- und/oder 3D-Grafikrendering zuzugreifen, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf einem `<canvas>`-Element auf und geben "webgl" als Argument an:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

Sobald Sie den WebGL-Rendering-Kontext für ein Canvas haben, können Sie darin Renderings erstellen. Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, wie man mit WebGL beginnt.

Wenn Sie einen WebGL 2.0-Kontext benötigen, sehen Sie sich [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) an; dieser bietet Zugriff auf eine Implementierung von OpenGL ES 3.0 Graphics.

## Konstanten

Siehe die Seite [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Der WebGL-Kontext

Die folgenden Eigenschaften und Methoden bieten allgemeine Informationen und Funktionen zum Umgang mit dem WebGL-Kontext:

- [`WebGLRenderingContext.canvas`](/de/docs/Web/API/WebGLRenderingContext/canvas)
  - : Eine schreibgeschützte Rückverweisung auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}} Element verknüpft ist.
- [`WebGLRenderingContext.drawingBufferWidth`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
  - : Die schreibgeschützte Breite des aktuellen Zeichenpuffers. Sollte der Breite des mit diesem Kontext verbundenen Canvas-Elements entsprechen.
- [`WebGLRenderingContext.drawingBufferHeight`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
  - : Die schreibgeschützte Höhe des aktuellen Zeichenpuffers. Sollte der Höhe des mit diesem Kontext verbundenen Canvas-Elements entsprechen.
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
  - : Gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Könnte [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren ist.
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
  - : Gibt `true` zurück, wenn der Kontext verloren ist, andernfalls `false`.
- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
  - : Stellt sicher, dass der Kontext mit der XR-Hardware des Benutzers kompatibel ist und erstellt den Kontext bei Bedarf mit einer neuen Konfiguration neu. Dies kann verwendet werden, um eine Anwendung mit standardmäßiger 2D-Darstellung zu starten und später in einen VR- oder AR-Modus zu wechseln.

## Betrachten und Zuschneiden

- [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor)
  - : Definiert das Scherfenster.
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
  - : Setzt das Ansichtsfenster.

## Zustandsinformationen

- [`WebGLRenderingContext.activeTexture()`](/de/docs/Web/API/WebGLRenderingContext/activeTexture)
  - : Wählt die aktive Textureinheit aus.
- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
  - : Setzt die Quell- und Zielmischfaktoren.
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
  - : Setzt sowohl die RGB-Mischgleichung als auch die Alpha-Mischgleichung auf eine einzige Gleichung fest.
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
  - : Setzt die RGB-Mischgleichung und die Alpha-Mischgleichung separat.
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
  - : Definiert, welche Funktion für die Pixelarithmetik-Mischung verwendet wird.
- [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
  - : Definiert, welche Funktion für die Pixelarithmetik-Mischung für RGB- und Alpha-Komponenten separat verwendet wird.
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
  - : Gibt die Farbwerte an, die beim Löschen von Farb-Puffern verwendet werden.
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
  - : Gibt den Tiefenwert an, der beim Löschen des Tiefen-Puffers verwendet wird.
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
  - : Gibt den Stencilwert an, der beim Löschen des Stencil-Puffers verwendet wird.
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
  - : Setzt, welche Farbkomponenten aktiviert oder deaktiviert werden sollen, wenn zu einem [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) gezeichnet oder gerendert wird.
- [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
  - : Gibt an, ob Vorder- und/oder Rückseitenpolygone ausgeblendet werden können.
- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
  - : Gibt eine Funktion an, die die eingehende Pixeltiefe mit dem aktuellen Tiefenpufferwert vergleicht.
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
  - : Legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.
- [`WebGLRenderingContext.depthRange()`](/de/docs/Web/API/WebGLRenderingContext/depthRange)
  - : Gibt die Tiefenbereichszuordnung von normalisierten Gerätenkoordinaten zu Fenster- oder Ansichtsfensterkoordinaten an.
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
  - : Deaktiviert bestimmte WebGL-Fähigkeiten für diesen Kontext.
- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
  - : Aktiviert bestimmte WebGL-Fähigkeiten für diesen Kontext.
- [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace)
  - : Gibt an, ob Polygone durch Festlegen einer Wickelrichtung Vorder- oder Rückseite sind.
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
  - : Gibt einen Wert für den angegebenen Parameternamen zurück.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
  - : Gibt Fehlerinformationen zurück.
- [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint)
  - : Gibt Hinweise für bestimmte Verhaltensweisen an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
  - : Prüft, ob eine bestimmte WebGL-Fähigkeit für diesen Kontext aktiviert ist oder nicht.
- [`WebGLRenderingContext.lineWidth()`](/de/docs/Web/API/WebGLRenderingContext/lineWidth)
  - : Legt die Linienstärke von rasterisierten Linien fest.
- [`WebGLRenderingContext.pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei)
  - : Gibt die Pixel-Speichermodi an.
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
  - : Gibt die Skalierungsfaktoren und Einheiten an, um Tiefenwerte zu berechnen.
- [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage)
  - : Gibt die Multi-Sample-Coverage-Parameter für Anti-Aliasing-Effekte an.
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
  - : Setzt sowohl Vorder- als auch Rückseitenfunktionen und Referenzwerte für Stencil-Tests.
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
  - : Setzt Vorder- und/oder Rückseitenfunktionen und Referenzwerte für Stencil-Tests.
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
  - : Steuert das Aktivieren und Deaktivieren des Schreibens von individuellen Bits auf der Vorder- und Rückseite in die Stencil-Ebenen.
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
  - : Steuert das Aktivieren und Deaktivieren des Schreibens von individuellen Bits auf Vorder- und/oder Rückseite in die Stencil-Ebenen.
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
  - : Setzt sowohl die Vorder- als auch die Rückseiten-Stencil-Testaktionen.
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
  - : Setzt die Vorder- und/oder Rückseiten-Stencil-Testaktionen.

## Puffer

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
  - : Bindet ein `WebGLBuffer`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
  - : Aktualisiert die Pufferdaten.
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
  - : Aktualisiert die Pufferdaten beginnend an einem angegebenen Offset.
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
  - : Erstellt ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
  - : Löscht ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
  - : Gibt Informationen über den Puffer zurück.
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
  - : Gibt einen Boolean zurück, der angibt, ob der übergebene Puffer gültig ist.

## Framebuffer

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
  - : Bindet ein `WebGLFrameBuffer`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus)
  - : Gibt den Status des Framebuffers zurück.
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
  - : Erstellt ein `WebGLFrameBuffer`-Objekt.
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
  - : Löscht ein `WebGLFrameBuffer`-Objekt.
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
  - : Befestigt ein `WebGLRenderingBuffer`-Objekt an ein `WebGLFrameBuffer`-Objekt.
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
  - : Befestigt ein Texturbild an ein `WebGLFrameBuffer`-Objekt.
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
  - : Gibt Informationen über den Framebuffer zurück.
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
  - : Gibt einen Boolean zurück, der angibt, ob das übergebene `WebGLFrameBuffer`-Objekt gültig ist.
- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
  - : Liest einen Block von Pixeln aus dem `WebGLFrameBuffer`.

## Renderbuffer

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
  - : Bindet ein `WebGLRenderBuffer`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
  - : Erstellt ein `WebGLRenderBuffer`-Objekt.
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
  - : Löscht ein `WebGLRenderBuffer`-Objekt.
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
  - : Gibt Informationen über den Renderbuffer zurück.
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
  - : Gibt einen Boolean zurück, der angibt, ob der übergebene `WebGLRenderingBuffer` gültig ist.
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
  - : Erstellt einen Renderbuffer-Datenspeicher.

## Texturen

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
  - : Bindet ein `WebGLTexture`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
  - : Gibt ein 2D-Texturbild in einem komprimierten Format an.
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
  - : Gibt ein 2D-Textur-Subbild in einem komprimierten Format an.
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
  - : Kopiert ein 2D-Texturbild.
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
  - : Kopiert ein 2D-Textur-Subbild.
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
  - : Erstellt ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
  - : Löscht ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
  - : Generiert ein Set von Mipmaps für ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
  - : Gibt Informationen über die Textur zurück.
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
  - : Gibt einen Boolean zurück, der angibt, ob die übergebene `WebGLTexture` gültig ist.
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
  - : Gibt ein 2D-Texturbild an.
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
  - : Aktualisiert ein Unterrechteck der aktuellen `WebGLTexture`.
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Legt Texturparameter fest.
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Legt Texturparameter fest.

## Programme und Shader

- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
  - : Befestigt ein `WebGLShader` an ein `WebGLProgram`.
- [`WebGLRenderingContext.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
  - : Bindet einen generischen Vertex-Index an eine benannte Attributvariable.
- [`WebGLRenderingContext.compileShader()`](/de/docs/Web/API/WebGLRenderingContext/compileShader)
  - : Kompiliert ein `WebGLShader`.
- [`WebGLRenderingContext.createProgram()`](/de/docs/Web/API/WebGLRenderingContext/createProgram)
  - : Erstellt ein `WebGLProgram`.
- [`WebGLRenderingContext.createShader()`](/de/docs/Web/API/WebGLRenderingContext/createShader)
  - : Erstellt ein `WebGLShader`.
- [`WebGLRenderingContext.deleteProgram()`](/de/docs/Web/API/WebGLRenderingContext/deleteProgram)
  - : Löscht ein `WebGLProgram`.
- [`WebGLRenderingContext.deleteShader()`](/de/docs/Web/API/WebGLRenderingContext/deleteShader)
  - : Löscht ein `WebGLShader`.
- [`WebGLRenderingContext.detachShader()`](/de/docs/Web/API/WebGLRenderingContext/detachShader)
  - : Löst ein `WebGLShader`.
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
  - : Gibt eine Liste von `WebGLShader`-Objekten zurück, die an ein `WebGLProgram` angehängt sind.
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
  - : Gibt Informationen über das Programm zurück.
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLProgram`-Objekt zurück.
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
  - : Gibt Informationen über den Shader zurück.
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
  - : Gibt ein `WebGLShaderPrecisionFormat`-Objekt zurück, das die Präzision für das numerische Format des Shaders beschreibt.
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLShader`-Objekt zurück.
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
  - : Gibt den Quellcode eines `WebGLShader` als Zeichenkette zurück.
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
  - : Gibt einen Boolean zurück, der angibt, ob das übergebene `WebGLProgram` gültig ist.
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
  - : Gibt einen Boolean zurück, der angibt, ob der übergebene `WebGLShader` gültig ist.
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
  - : Verknüpft das übergebene `WebGLProgram`-Objekt.
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
  - : Setzt den Quellcode in einen `WebGLShader`.
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
  - : Verwendet das angegebene `WebGLProgram` als Teil des aktuellen Renderzustands.
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
  - : Validiert ein `WebGLProgram`.

## Uniforms und Attribute

- [`WebGLRenderingContext.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
  - : Deaktiviert ein Vertex-Attributarray an einer bestimmten Position.
- [`WebGLRenderingContext.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
  - : Aktiviert ein Vertex-Attributarray an einer bestimmten Position.
- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
  - : Gibt Informationen über eine aktive Attributvariable zurück.
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
  - : Gibt Informationen über eine aktive Uniformvariable zurück.
- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
  - : Gibt die Position einer Attributvariable zurück.
- [`WebGLRenderingContext.getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert einer Uniformvariable an einer bestimmten Position zurück.
- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
  - : Gibt die Position einer Uniformvariable zurück.
- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
  - : Gibt Informationen über ein Vertex-Attribut an einer bestimmten Position zurück.
- [`WebGLRenderingContext.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
  - : Gibt die Adresse eines bestimmten Vertex-Attributs zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Gibt einen Wert für eine Uniformvariable an.
- [`WebGLRenderingContext.uniformMatrix[234]fv()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Gibt einen Matrixwert für eine Uniformvariable an.
- [`WebGLRenderingContext.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib)
  - : Gibt einen Wert für ein generisches Vertex-Attribut an.
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
  - : Gibt die Datenformate und Positionen der Vertex-Attribute in einem Vertex-Attributarray an.

## Zeichenpuffer

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
  - : Löscht angegebene Puffer zu voreingestellten Werten.
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
  - : Rendert Primitiven aus Array-Daten.
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
  - : Rendert Primitiven aus Element-Array-Daten.
- [`WebGLRenderingContext.finish()`](/de/docs/Web/API/WebGLRenderingContext/finish)
  - : Blockiert die Ausführung, bis alle zuvor aufgerufenen Befehle abgeschlossen sind.
- [`WebGLRenderingContext.flush()`](/de/docs/Web/API/WebGLRenderingContext/flush)
  - : Leert verschiedene Pufferbefehle, sodass alle Befehle so schnell wie möglich ausgeführt werden.

## Farbräume

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - : Gibt den Farbraum des WebGL-Zeichenpuffers an.
- [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) {{Experimental_Inline}}
  - : Gibt den Farbraum an, in den beim Import von Texturen konvertiert werden soll.

## Arbeiten mit Erweiterungen

Diese Methoden verwalten WebGL-Erweiterungen:

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
  - : Gibt ein {{jsxref("Array")}} von Zeichenfolgen zurück, das alle unterstützten WebGL-Erweiterungen enthält.
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
  - : Gibt ein Erweiterungsobjekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
