---
title: WebGLRenderingContext
slug: Web/API/WebGLRenderingContext
l10n:
  sourceCommit: 4904c4f3e4ea8f8efd27e9cf51b51d5c5a03de26
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext`** Schnittstelle bietet eine Schnittstelle zum OpenGL ES 2.0 Grafik-Rendering-Kontext für die Zeichenfläche eines HTML {{HTMLElement("canvas")}} Elements.

Um Zugang zu einem WebGL-Kontext für 2D- und/oder 3D-Grafik-Rendering zu erhalten, rufen Sie {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} auf einem `<canvas>`-Element auf und übergeben "webgl" als Argument:

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");
```

Sobald Sie den WebGL-Rendering-Kontext für ein Canvas haben, können Sie darin rendern. Das [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial) enthält weitere Informationen, Beispiele und Ressourcen, wie Sie mit WebGL beginnen können.

Falls Sie einen WebGL 2.0-Kontext benötigen, siehe {{domxref("WebGL2RenderingContext")}}; dieser bietet Zugang zu einer Implementierung von OpenGL ES 3.0 Grafik.

## Konstanten

Siehe die [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants) Seite.

## Der WebGL-Kontext

Die folgenden Eigenschaften und Methoden bieten allgemeine Informationen und Funktionalität, um mit dem WebGL-Kontext zu arbeiten:

- {{domxref("WebGLRenderingContext.canvas")}}
  - : Eine schreibgeschützte Rückreferenz auf das {{domxref("HTMLCanvasElement")}}. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}} Element verknüpft ist.
- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
  - : Die schreibgeschützte Breite des aktuellen Zeichenpuffers. Sollte der Breite des mit diesem Kontext verknüpften Canvas-Elements entsprechen.
- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
  - : Die schreibgeschützte Höhe des aktuellen Zeichenpuffers. Sollte der Höhe des mit diesem Kontext verknüpften Canvas-Elements entsprechen.
- {{domxref("WebGLRenderingContext.getContextAttributes()")}}
  - : Gibt ein `WebGLContextAttributes`-Objekt zurück, das die tatsächlichen Kontextparameter enthält. Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurückgeben, wenn der Kontext verloren geht.
- {{domxref("WebGLRenderingContext.isContextLost()")}}
  - : Gibt `true` zurück, wenn der Kontext verloren ist, andernfalls `false`.
- {{domxref("WebGLRenderingContext.makeXRCompatible()")}}
  - : Stellt sicher, dass der Kontext mit der XR-Hardware des Nutzers kompatibel ist und erstellt den Kontext bei Bedarf mit einer neuen Konfiguration neu, um dies zu tun. Dies kann verwendet werden, um eine Anwendung mit einer standardmäßigen 2D-Präsentation zu starten und später in den VR- oder AR-Modus zu wechseln.

## Ansicht und Clipping

- {{domxref("WebGLRenderingContext.scissor()")}}
  - : Definiert die Scherbox.
- {{domxref("WebGLRenderingContext.viewport()")}}
  - : Legt den Viewport fest.

## Statusinformationen

- {{domxref("WebGLRenderingContext.activeTexture()")}}
  - : Wählt die aktive Textureinheit aus.
- {{domxref("WebGLRenderingContext.blendColor()")}}
  - : Setzt die Quell- und Zielmischungsfaktoren.
- {{domxref("WebGLRenderingContext.blendEquation()")}}
  - : Setzt sowohl die RGB-Mischgleichung als auch die Alpha-Mischgleichung auf eine einzige Gleichung.
- {{domxref("WebGLRenderingContext.blendEquationSeparate()")}}
  - : Setzt die RGB-Mischgleichung und die Alpha-Mischgleichung separat.
- {{domxref("WebGLRenderingContext.blendFunc()")}}
  - : Definiert, welche Funktion für die Mischung von Pixel-Arithmetik verwendet wird.
- {{domxref("WebGLRenderingContext.blendFuncSeparate()")}}
  - : Definiert, welche Funktion für die Mischung von Pixel-Arithmetik für RGB- und Alpha-Komponenten separat verwendet wird.
- {{domxref("WebGLRenderingContext.clearColor()")}}
  - : Gibt die Farbwerte an, die beim Löschen von Farbpuffern verwendet werden.
- {{domxref("WebGLRenderingContext.clearDepth()")}}
  - : Gibt den Tiefenwert an, der beim Löschen des Tiefenpuffers verwendet wird.
- {{domxref("WebGLRenderingContext.clearStencil()")}}
  - : Gibt den Schablonenwert an, der beim Löschen des Schablonenpuffers verwendet wird.
- {{domxref("WebGLRenderingContext.colorMask()")}}
  - : Legt fest, welche Farbkomponenten aktiviert oder deaktiviert werden sollen, wenn auf ein {{domxref("WebGLFramebuffer")}} gezeichnet oder gerendert wird.
- {{domxref("WebGLRenderingContext.cullFace()")}}
  - : Gibt an, ob Vorder- und/oder Rückseiten-Polygone ausgesondert werden können.
- {{domxref("WebGLRenderingContext.depthFunc()")}}
  - : Gibt eine Funktion an, die die Tiefe des eingehenden Pixels mit dem aktuellen Tiefenpufferwert vergleicht.
- {{domxref("WebGLRenderingContext.depthMask()")}}
  - : Legt fest, ob das Schreiben in den Tiefenpuffer aktiviert oder deaktiviert ist.
- {{domxref("WebGLRenderingContext.depthRange()")}}
  - : Gibt die Tiefenbereichsabbildung von normalisierten Gerätekoordinaten auf Fenster- oder Viewport-Koordinaten an.
- {{domxref("WebGLRenderingContext.disable()")}}
  - : Deaktiviert spezifische WebGL-Fähigkeiten für diesen Kontext.
- {{domxref("WebGLRenderingContext.enable()")}}
  - : Aktiviert spezifische WebGL-Fähigkeiten für diesen Kontext.
- {{domxref("WebGLRenderingContext.frontFace()")}}
  - : Gibt an, ob Polygone durch Festlegen einer Wicklungsorientierung nach vorne oder hinten zeigen.
- {{domxref("WebGLRenderingContext.getParameter()")}}
  - : Gibt einen Wert für den übergebenen Parameternamen zurück.
- {{domxref("WebGLRenderingContext.getError()")}}
  - : Gibt Fehlerinformationen zurück.
- {{domxref("WebGLRenderingContext.hint()")}}
  - : Gibt Hinweise auf bestimmtes Verhalten an. Die Interpretation dieser Hinweise hängt von der Implementierung ab.
- {{domxref("WebGLRenderingContext.isEnabled()")}}
  - : Prüft, ob eine bestimmte WebGL-Fähigkeit für diesen Kontext aktiviert ist oder nicht.
- {{domxref("WebGLRenderingContext.lineWidth()")}}
  - : Setzt die Linienbreite gerasterter Linien.
- {{domxref("WebGLRenderingContext.pixelStorei()")}}
  - : Gibt die Pixel-Speichermodi an.
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
  - : Gibt die Skalierungsfaktoren und Einheiten zum Berechnen von Tiefenwerten an.
- {{domxref("WebGLRenderingContext.sampleCoverage()")}}
  - : Gibt Multi-Sample-Deckungsparameter für Antialiasing-Effekte an.
- {{domxref("WebGLRenderingContext.stencilFunc()")}}
  - : Setzt die Funktion und den Referenzwert für Schablonentests sowohl für Vorder- als auch Rückseite.
- {{domxref("WebGLRenderingContext.stencilFuncSeparate()")}}
  - : Setzt die Funktion und den Referenzwert für Schablonentests für Vorder- und/oder Rückseite.
- {{domxref("WebGLRenderingContext.stencilMask()")}}
  - : Kontrolliert das Ein- und Ausschalten des Schreibens einzelner Bits in den Schablonenebenen sowohl für Vorder- als auch Rückseite.
- {{domxref("WebGLRenderingContext.stencilMaskSeparate()")}}
  - : Kontrolliert das Ein- und Ausschalten des Schreibens einzelner Bits in den Schablonenebenen für Vorder- und/oder Rückseite.
- {{domxref("WebGLRenderingContext.stencilOp()")}}
  - : Setzt die Schablonentestaktionen sowohl für die Vorder- als auch die Rückseite.
- {{domxref("WebGLRenderingContext.stencilOpSeparate()")}}
  - : Setzt die Schablonentestaktionen für die Vorder- und/oder Rückseite.

## Puffer

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
  - : Bindet ein `WebGLBuffer`-Objekt an ein gegebenes Ziel.
- {{domxref("WebGLRenderingContext.bufferData()")}}
  - : Aktualisiert Pufferdaten.
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
  - : Aktualisiert Pufferdaten ab einem übergebenen Offset.
- {{domxref("WebGLRenderingContext.createBuffer()")}}
  - : Erstellt ein `WebGLBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
  - : Löscht ein `WebGLBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.getBufferParameter()")}}
  - : Gibt Informationen über den Puffer zurück.
- {{domxref("WebGLRenderingContext.isBuffer()")}}
  - : Gibt einen Boolean zurück, der angibt, ob der übergebene Puffer gültig ist.

## Framebuffers

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
  - : Bindet ein `WebGLFrameBuffer`-Objekt an ein gegebenes Ziel.
- {{domxref("WebGLRenderingContext.checkFramebufferStatus()")}}
  - : Gibt den Status des Framebuffers zurück.
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
  - : Erstellt ein `WebGLFrameBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
  - : Löscht ein `WebGLFrameBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
  - : Verbindet ein `WebGLRenderingBuffer`-Objekt mit einem `WebGLFrameBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
  - : Verbindet ein Texturbild mit einem `WebGLFrameBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
  - : Gibt Informationen über den Framebuffer zurück.
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
  - : Gibt einen Boolean zurück, der angibt, ob das übergebene `WebGLFrameBuffer`-Objekt gültig ist.
- {{domxref("WebGLRenderingContext.readPixels()")}}
  - : Liest einen Block von Pixeln aus dem `WebGLFrameBuffer`.

## Renderpuffer

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
  - : Bindet ein `WebGLRenderBuffer`-Objekt an ein gegebenes Ziel.
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
  - : Erstellt ein `WebGLRenderBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
  - : Löscht ein `WebGLRenderBuffer`-Objekt.
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
  - : Gibt Informationen über den Renderpuffer zurück.
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
  - : Gibt einen Boolean zurück, der angibt, ob das übergebene `WebGLRenderingBuffer` gültig ist.
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
  - : Erstellt ein Renderpuffer-Datenlager.

## Texturen

- {{domxref("WebGLRenderingContext.bindTexture()")}}
  - : Bindet ein `WebGLTexture`-Objekt an ein gegebenes Ziel.
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
  - : Gibt ein 2D-Texturbild in einem komprimierten Format an.
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
  - : Gibt ein 2D-Texturteilbild in einem komprimierten Format an.
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
  - : Kopiert ein 2D-Texturbild.
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
  - : Kopiert ein 2D-Texturteilbild.
- {{domxref("WebGLRenderingContext.createTexture()")}}
  - : Erstellt ein `WebGLTexture`-Objekt.
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
  - : Löscht ein `WebGLTexture`-Objekt.
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
  - : Generiert eine Reihe von Mipmaps für ein `WebGLTexture`-Objekt.
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
  - : Gibt Informationen über die Textur zurück.
- {{domxref("WebGLRenderingContext.isTexture()")}}
  - : Gibt einen Boolean zurück, der angibt, ob die übergebene `WebGLTexture` gültig ist.
- {{domxref("WebGLRenderingContext.texImage2D()")}}
  - : Gibt ein 2D-Texturbild an.
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
  - : Aktualisiert ein Teilrechteck der aktuellen `WebGLTexture`.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}
  - : Setzt Texturparameter.
- {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}
  - : Setzt Texturparameter.

## Programme und Shader

- {{domxref("WebGLRenderingContext.attachShader()")}}
  - : Verbindet einen `WebGLShader` mit einem `WebGLProgram`.
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
  - : Bindet einen generischen Vertex-Index an eine benannte Attributvariable.
- {{domxref("WebGLRenderingContext.compileShader()")}}
  - : Kompiliert einen `WebGLShader`.
- {{domxref("WebGLRenderingContext.createProgram()")}}
  - : Erstellt ein `WebGLProgram`.
- {{domxref("WebGLRenderingContext.createShader()")}}
  - : Erstellt einen `WebGLShader`.
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
  - : Löscht ein `WebGLProgram`.
- {{domxref("WebGLRenderingContext.deleteShader()")}}
  - : Löscht einen `WebGLShader`.
- {{domxref("WebGLRenderingContext.detachShader()")}}
  - : Trennt einen `WebGLShader`.
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
  - : Gibt eine Liste von `WebGLShader`-Objekten zurück, die an ein `WebGLProgram` angehängt sind.
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
  - : Gibt Informationen über das Programm zurück.
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
  - : Gibt das Informationsprotokoll für ein `WebGLProgram`-Objekt zurück.
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
  - : Gibt Informationen über den Shader zurück.
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
  - : Gibt ein `WebGLShaderPrecisionFormat`-Objekt zurück, das die Präzision für das numerische Format des Shaders beschreibt.
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
  - : Gibt das Informationsprotokoll für ein `WebGLShader`-Objekt zurück.
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
  - : Gibt den Quellcode eines `WebGLShader` als Zeichenkette zurück.
- {{domxref("WebGLRenderingContext.isProgram()")}}
  - : Gibt einen Boolean zurück, der angibt, ob das übergebene `WebGLProgram` gültig ist.
- {{domxref("WebGLRenderingContext.isShader()")}}
  - : Gibt einen Boolean zurück, der angibt, ob der übergebene `WebGLShader` gültig ist.
- {{domxref("WebGLRenderingContext.linkProgram()")}}
  - : Verlinkt das übergebene `WebGLProgram`-Objekt.
- {{domxref("WebGLRenderingContext.shaderSource()")}}
  - : Setzt den Quellcode in einem `WebGLShader`.
- {{domxref("WebGLRenderingContext.useProgram()")}}
  - : Verwendet das angegebene `WebGLProgram` als Teil des aktuellen Rendering-Zustands.
- {{domxref("WebGLRenderingContext.validateProgram()")}}
  - : Validiert ein `WebGLProgram`.

## Uniformen und Attribute

- {{domxref("WebGLRenderingContext.disableVertexAttribArray()")}}
  - : Deaktiviert ein Vertex-Attributarray an einer gegebenen Position.
- {{domxref("WebGLRenderingContext.enableVertexAttribArray()")}}
  - : Aktiviert ein Vertex-Attributarray an einer gegebenen Position.
- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
  - : Gibt Informationen über eine aktive Attributvariable zurück.
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
  - : Gibt Informationen über eine aktive Uniformvariable zurück.
- {{domxref("WebGLRenderingContext.getAttribLocation()")}}
  - : Gibt die Position einer Attributvariable zurück.
- {{domxref("WebGLRenderingContext.getUniform()")}}
  - : Gibt den Wert einer Uniformvariable an einer gegebenen Position zurück.
- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
  - : Gibt die Position einer Uniformvariable zurück.
- {{domxref("WebGLRenderingContext.getVertexAttrib()")}}
  - : Gibt Informationen über ein Vertex-Attribut an einer gegebenen Position zurück.
- {{domxref("WebGLRenderingContext.getVertexAttribOffset()")}}
  - : Gibt die Adresse eines gegebenen Vertex-Attributs zurück.
- [`WebGLRenderingContext.uniform[1234][fi][v]()`](/de/docs/Web/API/WebGLRenderingContext/uniform)
  - : Gibt einen Wert für eine Uniformvariable an.
- {{domxref("WebGLRenderingContext.uniformMatrix()", "WebGLRenderingContext.uniformMatrix[234]fv()")}}
  - : Gibt einen Matrixwert für eine Uniformvariable an.
- {{domxref("WebGLRenderingContext.vertexAttrib()", "WebGLRenderingContext.vertexAttrib[1234]f[v]()")}}
  - : Gibt einen Wert für ein generisches Vertex-Attribut an.
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
  - : Gibt die Datenformate und Positionen von Vertex-Attributen in einem Vertex-Attributarray an.

## Zeichenpuffer

- {{domxref("WebGLRenderingContext.clear()")}}
  - : Löscht die angegebenen Puffer auf voreingestellte Werte.
- {{domxref("WebGLRenderingContext.drawArrays()")}}
  - : Rendert Primitiven aus Array-Daten.
- {{domxref("WebGLRenderingContext.drawElements()")}}
  - : Rendert Primitiven aus Element-Array-Daten.
- {{domxref("WebGLRenderingContext.finish()")}}
  - : Blockiert die Ausführung, bis alle zuvor aufgerufenen Befehle abgeschlossen sind.
- {{domxref("WebGLRenderingContext.flush()")}}
  - : Leert verschiedene Pufferbefehle und führt dazu, dass alle Befehle so schnell wie möglich ausgeführt werden.

## Farbräume

- {{domxref("WebGLRenderingContext.drawingBufferColorSpace")}}
  - : Gibt den Farbraum des WebGL-Zeichenpuffers an.
- {{domxref("WebGLRenderingContext.unpackColorSpace")}} {{Experimental_Inline}}
  - : Gibt den Farbraum an, in den konvertiert werden soll, wenn Texturen importiert werden.

## Arbeiten mit Erweiterungen

Diese Methoden verwalten WebGL-Erweiterungen:

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
  - : Gibt ein {{jsxref("Array")}} von Zeichenketten zurück, das alle unterstützten WebGL-Erweiterungen enthält.
- {{domxref("WebGLRenderingContext.getExtension()")}}
  - : Gibt ein Erweiterungsobjekt zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}
