---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Schnittstelle **`WebGLRenderingContext`** stellt einen Zugang zum OpenGL-ES-2.0-Grafik-Rendering-Kontext für die Zeichenfläche eines HTML-Elements {{HTMLElement("canvas")}} bereit.

Um einen WebGL-Kontext für das Rendern von 2D- und/oder 3D-Grafiken zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) für ein `<canvas>`-Element auf und übergeben Sie "webgl" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

Sobald Sie den WebGL-Rendering-Kontext für eine Canvas-Zeichenfläche haben, können Sie darin rendern. Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen für den Einstieg in WebGL.

Wenn Sie einen WebGL-2.0-Kontext benötigen, lesen Sie die Dokumentation zu [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext). Diese Schnittstelle bietet Zugang zu einer Implementierung von OpenGL ES 3.0.

## Konstanten

Siehe die Seite zu [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Der WebGL-Kontext

Die folgenden Eigenschaften und Methoden stellen allgemeine Informationen und Funktionen für die Arbeit mit dem WebGL-Kontext bereit:

- [`WebGLRenderingContext.canvas`](/de/docs/Web/API/WebGLRenderingContext/canvas) {{ReadOnlyInline}}
  - : Ein Rückverweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn der Kontext keinem {{HTMLElement("canvas")}}-Element zugeordnet ist.
- [`WebGLRenderingContext.drawingBufferWidth`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferWidth) {{ReadOnlyInline}}
  - : Die Breite des aktuellen Zeichenpuffers. Sie sollte der Breite des Canvas-Elements entsprechen, das diesem Kontext zugeordnet ist.
- [`WebGLRenderingContext.drawingBufferHeight`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferHeight) {{ReadOnlyInline}}
  - : Die Höhe des aktuellen Zeichenpuffers. Sie sollte der Höhe des Canvas-Elements entsprechen, das diesem Kontext zugeordnet ist.
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
  - : Gibt ein `WebGLContextAttributes`-Objekt mit den tatsächlichen Kontextparametern zurück. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren gegangen ist.
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
  - : Gibt `true` zurück, wenn der Kontext verloren gegangen ist, andernfalls `false`.
- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
  - : Stellt sicher, dass der Kontext mit der XR-Hardware der nutzenden Person kompatibel ist. Falls nötig, wird der Kontext dazu mit einer neuen Konfiguration neu erstellt. So kann eine Anwendung zunächst mit einer herkömmlichen 2D-Darstellung starten und später in einen VR- oder AR-Modus wechseln.

## Ansichtsbereich und Clipping

- [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor)
  - : Definiert die Scissor-Box.
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
  - : Legt den Ansichtsbereich fest.

## Zustandsinformationen

- [`WebGLRenderingContext.activeTexture()`](/de/docs/Web/API/WebGLRenderingContext/activeTexture)
  - : Wählt die aktive Textureinheit aus.
- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
  - : Legt die Quell- und Zielmischfaktoren fest.
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
  - : Legt sowohl für die RGB-Mischgleichung als auch für die Alpha-Mischgleichung dieselbe Gleichung fest.
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
  - : Legt die RGB-Mischgleichung und die Alpha-Mischgleichung getrennt fest.
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
  - : Definiert, welche Funktion für die arithmetische Mischung von Pixeln verwendet wird.
- [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
  - : Definiert getrennt für RGB- und Alpha-Komponenten, welche Funktion für die arithmetische Mischung von Pixeln verwendet wird.
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
  - : Gibt die Farbwerte an, die beim Löschen von Farbpuffern verwendet werden.
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
  - : Gibt den Tiefenwert an, der beim Löschen des Tiefenpuffers verwendet wird.
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
  - : Gibt den Stencil-Wert an, der beim Löschen des Stencil-Puffers verwendet wird.
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
  - : Legt fest, welche Farbkomponenten beim Zeichnen oder Rendern in einen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) aktiviert oder deaktiviert werden.
- [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
  - : Gibt an, ob Polygone mit Vorder- und/oder Rückseite verworfen werden können.
- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
  - : Gibt eine Funktion an, die die Tiefe eingehender Pixel mit dem aktuellen Wert im Tiefenpuffer vergleicht.
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
  - : Legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.
- [`WebGLRenderingContext.depthRange()`](/de/docs/Web/API/WebGLRenderingContext/depthRange)
  - : Gibt die Abbildung des Tiefenbereichs von normalisierten Gerätekoordinaten auf Fenster- oder Ansichtsbereichskoordinaten an.
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
  - : Deaktiviert bestimmte WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
  - : Aktiviert bestimmte WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace)
  - : Legt anhand einer Umlaufrichtung fest, ob Polygone mit ihrer Vorder- oder Rückseite zugewandt sind.
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
  - : Gibt einen Wert für den übergebenen Parameternamen zurück.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
  - : Gibt Fehlerinformationen zurück.
- [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint)
  - : Gibt Hinweise für bestimmte Verhaltensweisen an. Wie diese Hinweise interpretiert werden, hängt von der Implementierung ab.
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
  - : Prüft, ob eine bestimmte WebGL-Funktion für diesen Kontext aktiviert ist.
- [`WebGLRenderingContext.lineWidth()`](/de/docs/Web/API/WebGLRenderingContext/lineWidth)
  - : Legt die Linienbreite gerasterter Linien fest.
- [`WebGLRenderingContext.pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei)
  - : Gibt die Modi für die Pixelspeicherung an.
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
  - : Gibt die Skalierungsfaktoren und Einheiten zur Berechnung von Tiefenwerten an.
- [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage)
  - : Gibt Multisample-Coverage-Parameter für Anti-Aliasing-Effekte an.
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
  - : Legt sowohl für Vorder- als auch für Rückseiten die Funktion und den Referenzwert für den Stencil-Test fest.
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
  - : Legt für Vorder- und/oder Rückseiten die Funktion und den Referenzwert für den Stencil-Test fest.
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
  - : Steuert für Vorder- und Rückseiten, ob einzelne Bits in den Stencil-Ebenen geschrieben werden können.
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
  - : Steuert für Vorder- und/oder Rückseiten, ob einzelne Bits in den Stencil-Ebenen geschrieben werden können.
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
  - : Legt die Aktionen des Stencil-Tests sowohl für Vorder- als auch für Rückseiten fest.
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
  - : Legt die Aktionen des Stencil-Tests für Vorder- und/oder Rückseiten fest.

## Puffer

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
  - : Bindet ein `WebGLBuffer`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
  - : Aktualisiert Pufferdaten.
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
  - : Aktualisiert Pufferdaten ab einem übergebenen Offset.
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
  - : Erstellt ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
  - : Löscht ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
  - : Gibt Informationen über den Puffer zurück.
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der übergebene Puffer gültig ist.

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
  - : Hängt ein `WebGLRenderingBuffer`-Objekt an ein `WebGLFrameBuffer`-Objekt an.
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
  - : Hängt ein Texturbild an ein `WebGLFrameBuffer`-Objekt an.
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
  - : Gibt Informationen über den Framebuffer zurück.
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das übergebene `WebGLFrameBuffer`-Objekt gültig ist.
- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
  - : Liest einen Pixelblock aus dem `WebGLFrameBuffer`.

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
  - : Gibt einen booleschen Wert zurück, der angibt, ob der übergebene `WebGLRenderingBuffer` gültig ist.
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
  - : Erstellt einen Datenspeicher für einen Renderbuffer.

## Texturen

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
  - : Bindet ein `WebGLTexture`-Objekt an ein angegebenes Ziel.
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
  - : Gibt ein 2D-Texturbild in einem komprimierten Format an.
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
  - : Gibt ein 2D-Texturteilbild in einem komprimierten Format an.
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
  - : Kopiert ein 2D-Texturbild.
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
  - : Kopiert ein 2D-Texturteilbild.
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
  - : Erstellt ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
  - : Löscht ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
  - : Erzeugt eine Reihe von Mipmaps für ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
  - : Gibt Informationen über die Textur zurück.
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die übergebene `WebGLTexture` gültig ist.
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
  - : Gibt ein 2D-Texturbild an.
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
  - : Aktualisiert einen rechteckigen Teilbereich der aktuellen `WebGLTexture`.
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Legt Texturparameter fest.
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Legt Texturparameter fest.

## Programme und Shader

- [`WebGLRenderingContext.attachShader()`](/de/docs/Web/API/WebGLRenderingContext/attachShader)
  - : Hängt einen `WebGLShader` an ein `WebGLProgram` an.
- [`WebGLRenderingContext.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
  - : Bindet einen generischen Vertex-Index an eine benannte Attributvariable.
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
  - : Trennt einen `WebGLShader` ab.
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
  - : Gibt eine Liste der `WebGLShader`-Objekte zurück, die an ein `WebGLProgram` angehängt sind.
- [`WebGLRenderingContext.getProgramParameter()`](/de/docs/Web/API/WebGLRenderingContext/getProgramParameter)
  - : Gibt Informationen über das Programm zurück.
- [`WebGLRenderingContext.getProgramInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getProgramInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLProgram`-Objekt zurück.
- [`WebGLRenderingContext.getShaderParameter()`](/de/docs/Web/API/WebGLRenderingContext/getShaderParameter)
  - : Gibt Informationen über den Shader zurück.
- [`WebGLRenderingContext.getShaderPrecisionFormat()`](/de/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat)
  - : Gibt ein `WebGLShaderPrecisionFormat`-Objekt zurück, das die Genauigkeit des numerischen Formats des Shaders beschreibt.
- [`WebGLRenderingContext.getShaderInfoLog()`](/de/docs/Web/API/WebGLRenderingContext/getShaderInfoLog)
  - : Gibt das Informationsprotokoll für ein `WebGLShader`-Objekt zurück.
- [`WebGLRenderingContext.getShaderSource()`](/de/docs/Web/API/WebGLRenderingContext/getShaderSource)
  - : Gibt den Quellcode eines `WebGLShader` als Zeichenfolge zurück.
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das übergebene `WebGLProgram` gültig ist.
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
  - : Gibt einen booleschen Wert zurück, der angibt, ob der übergebene `WebGLShader` gültig ist.
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
  - : Linkt das übergebene `WebGLProgram`-Objekt.
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
  - : Legt den Quellcode eines `WebGLShader` fest.
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
  - : Verwendet das angegebene `WebGLProgram` als Teil des aktuellen Rendering-Zustands.
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
  - : Validiert ein `WebGLProgram`.

## Uniforms und Attribute

- [`WebGLRenderingContext.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
  - : Deaktiviert ein Vertex-Attribut-Array an einer angegebenen Position.
- [`WebGLRenderingContext.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
  - : Aktiviert ein Vertex-Attribut-Array an einer angegebenen Position.
- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
  - : Gibt Informationen über eine aktive Attributvariable zurück.
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
  - : Gibt Informationen über eine aktive Uniform-Variable zurück.
- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
  - : Gibt die Position einer Attributvariablen zurück.
- [`WebGLRenderingContext.getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert einer Uniform-Variablen an einer angegebenen Position zurück.
- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
  - : Gibt die Position einer Uniform-Variablen zurück.
- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
  - : Gibt Informationen über ein Vertex-Attribut an einer angegebenen Position zurück.
- [`WebGLRenderingContext.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
  - : Gibt die Adresse eines angegebenen Vertex-Attributs zurück.
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
  - : Setzt angegebene Puffer auf voreingestellte Werte zurück.
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
  - : Rendert Primitive aus Array-Daten.
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
  - : Rendert Primitive aus Element-Array-Daten.
- [`WebGLRenderingContext.finish()`](/de/docs/Web/API/WebGLRenderingContext/finish)
  - : Blockiert die Ausführung, bis alle zuvor aufgerufenen Befehle abgeschlossen sind.
- [`WebGLRenderingContext.flush()`](/de/docs/Web/API/WebGLRenderingContext/flush)
  - : Leert die Befehlswarteschlange des Puffers, sodass alle Befehle so schnell wie möglich ausgeführt werden.

## Farbräume

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - : Gibt den Farbraum des WebGL-Zeichenpuffers an.
- [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
  - : Gibt den Farbraum an, in den beim Importieren von Texturen konvertiert wird.

## Mit Erweiterungen arbeiten

Diese Methoden verwalten WebGL-Erweiterungen:

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
  - : Gibt ein {{jsxref("Array")}} aus Zeichenfolgen zurück, das alle unterstützten WebGL-Erweiterungen enthält.
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
  - : Gibt ein Erweiterungsobjekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
