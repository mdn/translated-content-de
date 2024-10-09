---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Das **`WebGLRenderingContext`** Interface bietet eine Schnittstelle zum OpenGL ES 2.0 Grafikkontext für die Zeichenfläche eines HTML-Elements vom Typ {{HTMLElement("canvas")}}.

Um Zugriff auf einen WebGL-Kontext für die 2D- und/oder 3D-Grafikdarstellung zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf einem `<canvas>` Element auf und übergeben Sie "webgl" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

Sobald Sie den WebGL-Darstellungskontext für ein Canvas haben, können Sie darin rendern. Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, um mit WebGL zu starten.

Wenn Sie einen WebGL 2.0-Kontext benötigen, sehen Sie sich [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) an; dieser bietet Zugriff auf eine Implementation von OpenGL ES 3.0 Grafiken.

## Konstante

Siehe die Seite [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants).

## Der WebGL-Kontext

Die folgenden Eigenschaften und Methoden bieten allgemeine Informationen und Funktionalitäten zur Arbeit mit dem WebGL-Kontext:

- [`WebGLRenderingContext.canvas`](/de/docs/Web/API/WebGLRenderingContext/canvas)
  - : Eine schreibgeschützte Rückverweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}} Element verknüpft ist.
- [`WebGLRenderingContext.drawingBufferWidth`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferWidth)
  - : Die schreibgeschützte Breite des aktuellen Zeichnungspuffers. Sollte mit der Breite des mit diesem Kontext verknüpften Canvas-Elements übereinstimmen.
- [`WebGLRenderingContext.drawingBufferHeight`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferHeight)
  - : Die schreibgeschützte Höhe des aktuellen Zeichnungspuffers. Sollte mit der Höhe des mit diesem Kontext verknüpften Canvas-Elements übereinstimmen.
- [`WebGLRenderingContext.getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes)
  - : Gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren geht.
- [`WebGLRenderingContext.isContextLost()`](/de/docs/Web/API/WebGLRenderingContext/isContextLost)
  - : Gibt `true` zurück, wenn der Kontext verloren ist, andernfalls `false`.
- [`WebGLRenderingContext.makeXRCompatible()`](/de/docs/Web/API/WebGLRenderingContext/makeXRCompatible)
  - : Sorgt dafür, dass der Kontext mit der XR-Hardware des Benutzers kompatibel ist und erstellt bei Bedarf den Kontext mit einer neuen Konfiguration neu. Dies kann verwendet werden, um eine Anwendung mit einer Standard-2D-Präsentation zu starten und dann später auf einen VR- oder AR-Modus zu wechseln.

## Ansicht und Clipping

- [`WebGLRenderingContext.scissor()`](/de/docs/Web/API/WebGLRenderingContext/scissor)
  - : Definiert das Scherrechteck.
- [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)
  - : Setzt den Viewport.

## Statusinformationen

- [`WebGLRenderingContext.activeTexture()`](/de/docs/Web/API/WebGLRenderingContext/activeTexture)
  - : Wählt die aktive Textureinheit aus.
- [`WebGLRenderingContext.blendColor()`](/de/docs/Web/API/WebGLRenderingContext/blendColor)
  - : Setzt die Quellen- und Zielmischfaktoren.
- [`WebGLRenderingContext.blendEquation()`](/de/docs/Web/API/WebGLRenderingContext/blendEquation)
  - : Setzt sowohl die RGB- als auch die Alpha-Mischgleichung auf eine einzelne Gleichung.
- [`WebGLRenderingContext.blendEquationSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendEquationSeparate)
  - : Setzt die RGB- und Alpha-Mischgleichungen separat.
- [`WebGLRenderingContext.blendFunc()`](/de/docs/Web/API/WebGLRenderingContext/blendFunc)
  - : Definiert, welche Funktion für die Pixelarithmetik beim Mischen verwendet wird.
- [`WebGLRenderingContext.blendFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/blendFuncSeparate)
  - : Definiert, welche Funktion für die Pixelarithmetik beim Mischen für RGB- und Alpha-Komponenten separat verwendet wird.
- [`WebGLRenderingContext.clearColor()`](/de/docs/Web/API/WebGLRenderingContext/clearColor)
  - : Gibt die Farbwerte an, die beim Löschen von Farbpuffern verwendet werden.
- [`WebGLRenderingContext.clearDepth()`](/de/docs/Web/API/WebGLRenderingContext/clearDepth)
  - : Gibt die Tiefenwerte an, die beim Löschen des Tiefenpuffers verwendet werden.
- [`WebGLRenderingContext.clearStencil()`](/de/docs/Web/API/WebGLRenderingContext/clearStencil)
  - : Gibt die Schablonenwerte an, die beim Löschen des Schablonenpuffers verwendet werden.
- [`WebGLRenderingContext.colorMask()`](/de/docs/Web/API/WebGLRenderingContext/colorMask)
  - : Legt fest, welche Farbkomponenten beim Zeichnen oder Rendern auf ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) ein- oder ausgeblendet werden sollen.
- [`WebGLRenderingContext.cullFace()`](/de/docs/Web/API/WebGLRenderingContext/cullFace)
  - : Gibt an, ob Vorder- und/oder Rückseitenpolygone ausgeschnitten werden können.
- [`WebGLRenderingContext.depthFunc()`](/de/docs/Web/API/WebGLRenderingContext/depthFunc)
  - : Gibt eine Funktion an, die die eingehende Pixel-Dichte mit dem aktuellen Tiefenpufferwert vergleicht.
- [`WebGLRenderingContext.depthMask()`](/de/docs/Web/API/WebGLRenderingContext/depthMask)
  - : Legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.
- [`WebGLRenderingContext.depthRange()`](/de/docs/Web/API/WebGLRenderingContext/depthRange)
  - : Gibt die Tiefenbereichsabbildung von normalisierten Gerätekoordinaten zu Fenster- oder Viewport-Koordinaten an.
- [`WebGLRenderingContext.disable()`](/de/docs/Web/API/WebGLRenderingContext/disable)
  - : Deaktiviert spezifische WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.enable()`](/de/docs/Web/API/WebGLRenderingContext/enable)
  - : Aktiviert spezifische WebGL-Funktionen für diesen Kontext.
- [`WebGLRenderingContext.frontFace()`](/de/docs/Web/API/WebGLRenderingContext/frontFace)
  - : Gibt an, ob Polygone durch das Setzen einer Wicklungsorientierung vorne oder hinten sind.
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
  - : Gibt einen Wert für den übergebenen Parameternamen zurück.
- [`WebGLRenderingContext.getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)
  - : Gibt Fehlerinformationen zurück.
- [`WebGLRenderingContext.hint()`](/de/docs/Web/API/WebGLRenderingContext/hint)
  - : Gibt Hinweise für bestimmte Verhaltensweisen an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.
- [`WebGLRenderingContext.isEnabled()`](/de/docs/Web/API/WebGLRenderingContext/isEnabled)
  - : Prüft, ob eine bestimmte WebGL-Funktion für diesen Kontext aktiviert oder nicht aktiviert ist.
- [`WebGLRenderingContext.lineWidth()`](/de/docs/Web/API/WebGLRenderingContext/lineWidth)
  - : Setzt die Linienbreite von gerasterten Linien.
- [`WebGLRenderingContext.pixelStorei()`](/de/docs/Web/API/WebGLRenderingContext/pixelStorei)
  - : Gibt die Pixel-Speichermodi an.
- [`WebGLRenderingContext.polygonOffset()`](/de/docs/Web/API/WebGLRenderingContext/polygonOffset)
  - : Gibt die Skalierungsfaktoren und Einheiten zur Berechnung von Tiefenwerten an.
- [`WebGLRenderingContext.sampleCoverage()`](/de/docs/Web/API/WebGLRenderingContext/sampleCoverage)
  - : Gibt Parameter zur Multisample-Abdeckung für Antialiasing-Effekte an.
- [`WebGLRenderingContext.stencilFunc()`](/de/docs/Web/API/WebGLRenderingContext/stencilFunc)
  - : Setzt sowohl die Front- als auch die Back-Funktion und den Referenzwert für den Schablonentest.
- [`WebGLRenderingContext.stencilFuncSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate)
  - : Setzt die Front- und/oder Back-Funktion und den Referenzwert für den Schablonentest.
- [`WebGLRenderingContext.stencilMask()`](/de/docs/Web/API/WebGLRenderingContext/stencilMask)
  - : Steuert die Aktivierung und Deaktivierung sowohl des Front- als auch des Back-Schreibens einzelner Bits in den Schablonenebenen.
- [`WebGLRenderingContext.stencilMaskSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate)
  - : Steuert die Aktivierung und Deaktivierung des Front- und/oder Back-Schreibens einzelner Bits in den Schablonenebenen.
- [`WebGLRenderingContext.stencilOp()`](/de/docs/Web/API/WebGLRenderingContext/stencilOp)
  - : Setzt sowohl die Front- als auch die Back-facings Schablonentestaktionen.
- [`WebGLRenderingContext.stencilOpSeparate()`](/de/docs/Web/API/WebGLRenderingContext/stencilOpSeparate)
  - : Setzt die Front- und/oder Back-facings Schablonentestaktionen.

## Puffer

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
  - : Bindet ein `WebGLBuffer`-Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
  - : Aktualisiert die Pufferdaten.
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
  - : Aktualisiert die Pufferdaten ab einem übergebenen Offset.
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
  - : Erstellt ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
  - : Löscht ein `WebGLBuffer`-Objekt.
- [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)
  - : Gibt Informationen über den Puffer zurück.
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der übergebene Puffer gültig ist.

## Framebuffer

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
  - : Bindet ein `WebGLFramebuffer`-Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus)
  - : Gibt den Status des Framebuffers zurück.
- [`WebGLRenderingContext.createFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/createFramebuffer)
  - : Erstellt ein `WebGLFramebuffer`-Objekt.
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
  - : Löscht ein `WebGLFramebuffer`-Objekt.
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
  - : Hängt ein `WebGLRenderingBuffer`-Objekt an ein `WebGLFramebuffer`-Objekt an.
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
  - : Hängt ein Texturbild an ein `WebGLFramebuffer`-Objekt an.
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
  - : Gibt Informationen über den Framebuffer zurück.
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLFramebuffer`-Objekt gültig ist.
- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
  - : Liest einen Block von Pixeln aus dem `WebGLFramebuffer`.

## Renderbuffer

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
  - : Bindet ein `WebGLRenderBuffer`-Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
  - : Erstellt ein `WebGLRenderBuffer`-Objekt.
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
  - : Löscht ein `WebGLRenderBuffer`-Objekt.
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
  - : Gibt Informationen über den Renderbuffer zurück.
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLRenderingBuffer` gültig ist.
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
  - : Erstellt ein Renderbuffer-Datenspeicher.

## Texturen

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
  - : Bindet ein `WebGLTexture`-Objekt an ein gegebenes Ziel.
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
  - : Gibt ein 2D-Texturbild im komprimierten Format an.
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
  - : Gibt ein 2D-Textur-Subbild im komprimierten Format an.
- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
  - : Kopiert ein 2D-Texturbild.
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
  - : Kopiert ein 2D-Textur-Subbild.
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
  - : Erstellt ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.deleteTexture()`](/de/docs/Web/API/WebGLRenderingContext/deleteTexture)
  - : Löscht ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.generateMipmap()`](/de/docs/Web/API/WebGLRenderingContext/generateMipmap)
  - : Erzeugt eine Reihe von Mipmaps für ein `WebGLTexture`-Objekt.
- [`WebGLRenderingContext.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter)
  - : Gibt Informationen über die Textur zurück.
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die übergebene `WebGLTexture` gültig ist.
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
  - : Gibt ein 2D-Texturbild an.
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
  - : Aktualisiert ein rechteckiges Teilstück der aktuellen `WebGLTexture`.
- [`WebGLRenderingContext.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Setzt Texturparameter.
- [`WebGLRenderingContext.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter)
  - : Setzt Texturparameter.

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
  - : Trennt einen `WebGLShader`.
- [`WebGLRenderingContext.getAttachedShaders()`](/de/docs/Web/API/WebGLRenderingContext/getAttachedShaders)
  - : Gibt eine Liste von `WebGLShader`-Objekten zurück, die an ein `WebGLProgram` angehängt sind.
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
  - : Gibt den Quellcode eines `WebGLShader` als String zurück.
- [`WebGLRenderingContext.isProgram()`](/de/docs/Web/API/WebGLRenderingContext/isProgram)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob das übergebene `WebGLProgram` gültig ist.
- [`WebGLRenderingContext.isShader()`](/de/docs/Web/API/WebGLRenderingContext/isShader)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der übergebene `WebGLShader` gültig ist.
- [`WebGLRenderingContext.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram)
  - : Verknüpft das übergebene `WebGLProgram`-Objekt.
- [`WebGLRenderingContext.shaderSource()`](/de/docs/Web/API/WebGLRenderingContext/shaderSource)
  - : Setzt den Quellcode in einem `WebGLShader`.
- [`WebGLRenderingContext.useProgram()`](/de/docs/Web/API/WebGLRenderingContext/useProgram)
  - : Verwendet das angegebene `WebGLProgram` als Teil des aktuellen Darstellungszustandes.
- [`WebGLRenderingContext.validateProgram()`](/de/docs/Web/API/WebGLRenderingContext/validateProgram)
  - : Überprüft ein `WebGLProgram`.

## Uniformen und Attribute

- [`WebGLRenderingContext.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray)
  - : Deaktiviert ein Vertex-Attribut-Array an einer gegebenen Position.
- [`WebGLRenderingContext.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray)
  - : Aktiviert ein Vertex-Attribut-Array an einer gegebenen Position.
- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
  - : Gibt Informationen über eine aktive Attributvariable zurück.
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
  - : Gibt Informationen über eine aktive Uniformvariable zurück.
- [`WebGLRenderingContext.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation)
  - : Gibt den Speicherort einer Attributvariable zurück.
- [`WebGLRenderingContext.getUniform()`](/de/docs/Web/API/WebGLRenderingContext/getUniform)
  - : Gibt den Wert einer Uniformvariable an einem gegebenen Speicherort zurück.
- [`WebGLRenderingContext.getUniformLocation()`](/de/docs/Web/API/WebGLRenderingContext/getUniformLocation)
  - : Gibt den Speicherort einer Uniformvariable zurück.
- [`WebGLRenderingContext.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib)
  - : Gibt Informationen über ein Vertex-Attribut an einer gegebenen Position zurück.
- [`WebGLRenderingContext.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset)
  - : Gibt die Adresse eines gegebenen Vertex-Attributs zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Gibt einen Wert für eine Uniformvariable an.
- [`WebGLRenderingContext.uniformMatrix[234]fv()`](/de/docs/Web/API/WebGLRenderingContext/uniformMatrix)
  - : Gibt einen Matrixwert für eine Uniformvariable an.
- [`WebGLRenderingContext.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib)
  - : Gibt einen Wert für ein generisches Vertex-Attribut an.
- [`WebGLRenderingContext.vertexAttribPointer()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttribPointer)
  - : Gibt die Datenformate und Positionen von Vertex-Attributen in einem Vertex-Attribut-Array an.

## Darstellungs-Puffer

- [`WebGLRenderingContext.clear()`](/de/docs/Web/API/WebGLRenderingContext/clear)
  - : Löscht bestimmte Puffer auf voreingestellte Werte.
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
  - : Rendert Primitive aus Array-Daten.
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
  - : Rendert Primitive aus Element-Array-Daten.
- [`WebGLRenderingContext.finish()`](/de/docs/Web/API/WebGLRenderingContext/finish)
  - : Blockiert die Ausführung, bis alle zuvor aufgerufenen Befehle abgeschlossen sind.
- [`WebGLRenderingContext.flush()`](/de/docs/Web/API/WebGLRenderingContext/flush)
  - : Leert verschiedene Pufferbefehle, sodass alle Befehle so schnell wie möglich ausgeführt werden.

## Farbräume

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - : Gibt den Farbraum des WebGL-Zeichenpuffers an.
- [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
  - : Gibt den Farbraum an, in den konvertiert werden soll, wenn Texturen importiert werden.

## Arbeiten mit Erweiterungen

Diese Methoden verwalten WebGL-Erweiterungen:

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
  - : Gibt ein {{jsxref("Array")}} von Strings zurück, die alle unterstützen WebGL-Erweiterungen enthalten.
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
  - : Gibt ein Erweiterungsobjekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
