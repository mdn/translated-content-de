---
title: "WebGLRenderingContext: vertexAttribPointer()-Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.vertexAttribPointer()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) bindet den aktuell an
`gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Puffer-Objekts und spezifiziert dessen Layout.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu modifizierenden Vertex-Attributs angibt.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut angibt.
    Muss 1, 2, 3 oder 4 sein.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt.
    Mögliche Werte:

    - `gl.BYTE`: Signierte 8-Bit-Ganzzahl, mit Werten im Bereich \[-128, 127]
    - `gl.SHORT`: Signierte 16-Bit-Ganzzahl, mit Werten im Bereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: Unsigned 8-Bit-Ganzzahl, mit Werten im Bereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: Unsigned 16-Bit-Ganzzahl, mit Werten im Bereich \[0,65535]
    - `gl.FLOAT`: 32-Bit-IEEE-Gleitkommazahl

    Beim Verwenden eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}}
    sind zusätzlich die folgenden Werte verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit-IEEE-Gleitkommazahl
    - `gl.INT`: 32-Bit-signierte binäre Ganzzahl
    - `gl.UNSIGNED_INT`: 32-Bit-unsigned binäre Ganzzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit-signierte Ganzzahl mit Werten im Bereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit-unsigned Ganzzahl mit Werten im Bereich \[0, 1023]

- `normalized`

  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob Ganzzahldatenwerte normalisiert werden sollen, wenn sie in einen Float umgewandelt werden.

    - Für Typen `gl.BYTE` und `gl.SHORT` werden die Werte
      zu \[-1, 1] normalisiert, wenn wahr.
    - Für Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT`
      werden die Werte zu \[0, 1] normalisiert, wenn wahr.
    - Für Typen `gl.FLOAT` und `gl.HALF_FLOAT` hat dieser Parameter
      keine Auswirkung.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Offset in Bytes zwischen den Anfängen aufeinanderfolgender Vertex-Attribute angibt. Kann nicht negativ oder größer als 255 sein. Wenn `stride` 0 ist, wird angenommen, dass das Attribut eng gepackt ist, d.h. die Attribute sind nicht verschachtelt, sondern jedes Attribut befindet sich in einem separaten Block, und das Attribut des nächsten Vertex folgt unmittelbar nach dem aktuellen Vertex-Attribut.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Bytelänge von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn kein `WebGLBuffer` an das `ARRAY_BUFFER`-Ziel gebunden ist.
- Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} wird ein
  `gl.INVALID_OPERATION`-Fehler ausgelöst, wenn dieses Vertex-Attribut im Vertex-Shader als Ganzzahl definiert ist (z.B. `uvec4` oder `ivec4`, statt `vec4`).

## Beschreibung

Angenommen, wir möchten einige 3D-Geometrien rendern, und dafür müssen wir unsere Vertex-Daten dem Vertex-Shader bereitstellen. Jedes Vertex hat ein paar Attribute, wie Position, Normalenvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und dem Vertex-Buffer-Objekt (VBO) bereitgestellt werden. Zuerst müssen wir den zu verwendenden [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an `gl.ARRAY_BUFFER` binden, dann geben wir mit dieser Methode `gl.vertexAttribPointer()` an, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Zusätzlich müssen wir den `stride` angeben, der die Gesamtlänge in Bytes aller Attribute für ein Vertex ist. Außerdem müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

Normalerweise ist Ihre 3D-Geometrie bereits in einem bestimmten binären Format vorhanden, daher müssen Sie die Spezifikation dieses spezifischen Formats lesen, um das Speicherlayout herauszufinden. Wenn Sie jedoch das Format selbst entwerfen oder Ihre Geometrie in Textdateien (wie [Wavefront .obj-Dateien](https://en.wikipedia.org/wiki/Wavefront_.obj_file)) vorliegt und zur Laufzeit in einen `ArrayBuffer` umgewandelt werden muss, haben Sie freie Wahl hinsichtlich der Strukturierung des Speichers. Für höchste Leistung die Attribute [verschachteln](https://en.wikipedia.org/wiki/Interleaved_memory) und den kleinsten Datentyp verwenden, der Ihre Geometrie dennoch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Auf High-End-Grafikkarten liegt das Maximum bei 16, auf Low-End-Grafikkarten wird der Wert niedriger sein.

### Attributindex

Für jedes Attribut müssen Sie dessen Index angeben. Dieser ist unabhängig von der Speicherposition im Array-Buffer, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können als sie im Array-Buffer gespeichert sind. Sie haben zwei Optionen:

- Entweder geben Sie den Index selbst an. In diesem Fall rufen Sie
  [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
  auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem gewünschten Index zu verbinden. Dies muss vor dem Aufruf von [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) erfolgen. Sie können dann denselben Index an `gl.vertexAttribPointer()` übergeben.
- Alternativ verwenden Sie den Index, der von der Grafikkarte beim Kompilieren des Vertex-Shaders zugewiesen wird. Je nach Grafikkarte variiert der Index, daher müssen Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen, um den Index zu ermitteln, und dann diesen Index an `gl.vertexAttribPointer()` übergeben.
  Wenn Sie WebGL 2 verwenden, können Sie den Index im Vertex-Shader-Code selbst angeben und den Standardwert der Grafikkarte überschreiben, z.B.
  `layout(location = 3) in vec4 position;`, würde das `"position"`-Attribut auf Index 3 setzen.

### Ganzzahl-Attribute

Während der `ArrayBuffer` sowohl mit Ganzzahlen als auch mit Floats gefüllt werden kann, werden die Attribute immer in einen Float umgewandelt, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder den Float im Vertex-Shader wieder in eine Ganzzahl umwandeln (z.B. `(int) floatNumber`), oder Sie verwenden `gl.vertexAttribIPointer()` von WebGL2.

### Standard-Attributwerte

Der Vertex-Shader-Code kann eine Anzahl von Attributen umfassen, aber wir müssen nicht die Werte für jedes Attribut spezifizieren. Stattdessen können wir einen Standardwert angeben, der für alle Vertices identisch ist. Wir können `gl.disableVertexAttribArray()` aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während `gl.enableVertexAttribArray()` die Werte aus dem Array-Buffer liest, wie mit `gl.vertexAttribPointer()` angegeben.

Ähnlich, wenn unser Vertex-Shader z.B. ein 4-Komponenten-Attribut mit `vec4` erwartet, wir jedoch in unserem Aufruf von `gl.vertexAttribPointer()` die Größe auf `2` setzen, dann wird WebGL die ersten zwei Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert entnommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können mit `gl.vertexAttrib[1234]f[v]()` einen anderen Standardwert angeben.

Zum Beispiel kann Ihr Vertex-Shader ein Positions- und ein Farbattribut verwenden. Die meisten Meshes haben die Farbe auf Verzeichnisebene festgelegt, aber einige Meshes haben einen einheitlichen Farbton. Für diese Meshes ist es nicht notwendig, dieselbe Farbe für jedes Vertex in den Array-Buffer einzufügen, daher verwenden Sie `gl.vertexAttrib4fv()`, um eine konstante Farbe festzulegen.

### Abfragen der aktuellen Einstellungen

Sie können `gl.getVertexAttrib()` und `gl.getVertexAttribOffset()` aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z.B. den Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Zustand innerhalb Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen sind jedoch hervorragend zum Debuggen eines WebGL-Kontexts geeignet, ohne den Anwendungscode zu berühren.

## Beispiele

Dieses Beispiel zeigt, wie Sie Ihre Vertex-Attribute an das Shader-Programm senden. Wir verwenden eine imaginäre Datenstruktur, in der die Attribute jedes Vertex mit einer Länge von 20 Bytes pro Vertex verschachtelt werden:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Floats; insgesamt werden dafür 12 Bytes benötigt.
2. **Normalenvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalenvektors speichern, aber da Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für bessere Leistung richten wir die Daten auf 32 Bit aus, indem wir auch eine vierte, auf Null gesetzte Komponente speichern, die Gesamtlänge beträgt 4 Bytes. Außerdem weisen wir WebGL an, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten 16-Bit-unsigned Ganzzahlen genügend Präzision, die Gesamtlänge beträgt 4 Bytes. Wir weisen WebGL ebenfalls an, die Werte auf \[0, 1] zu normalisieren.

Zum Beispiel wird das folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

im Array-Buffer wie folgt gespeichert:

![WebGL Array Buffer-Inhalt](webgl-array-buffer.svg)

### Erstellen des Array-Buffers

Zuerst erstellen wir den Array-Buffer dynamisch aus JSON-Daten mit einem {{jsxref("DataView")}}. Beachten Sie die Verwendung von `true`, da WebGL erwartet, dass unsere Daten im Little-Endian-Format vorliegen.

```js
// Load geometry with fetch() and Response.json()
const response = await fetch("assets/geometry.json");
const vertices = await response.json();

// Create array buffer
const buffer = new ArrayBuffer(20 * vertices.length);
// Fill array buffer
const dv = new DataView(buffer);
vertices.forEach((vertex, i) => {
  dv.setFloat32(20 * i, vertex.position[0], true);
  dv.setFloat32(20 * i + 4, vertex.position[1], true);
  dv.setFloat32(20 * i + 8, vertex.position[2], true);
  dv.setInt8(20 * i + 12, vertex.normal[0] * 0x7f);
  dv.setInt8(20 * i + 13, vertex.normal[1] * 0x7f);
  dv.setInt8(20 * i + 14, vertex.normal[2] * 0x7f);
  dv.setInt8(20 * i + 15, 0);
  dv.setUint16(20 * i + 16, vertex.texCoord[0] * 0xffff, true);
  dv.setUint16(20 * i + 18, vertex.texCoord[1] * 0xffff, true);
});
```

Für eine höhere Leistung könnten wir die vorherige Konvertierung von JSON in einen ArrayBuffer auch serverseitig mit z.B. Node.js durchführen. Dann könnten wir die Binärdatei laden und sie als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Verwenden des Array-Buffers mit WebGL

Zuerst erstellen wir ein neues Vertex-Buffer-Objekt (VBO) und versorgen es mit unserem Array-Buffer:

```js
//Bind array buffer to a Vertex Buffer Object
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann spezifizieren wir das Speicherlayout des Array-Buffers, entweder indem wir den Index selbst festlegen:

```js
//Describe the layout of the buffer:
//1. position, not normalized
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
//2. normal vector, normalized to [-1, 1]
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
//3. texture coordinates, normalized to [0, 1]
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

//Set the attributes in the vertex shader to the same indices
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "normal");
gl.bindAttribLocation(shaderProgram, 2, "texUV");
//Since the attribute indices have changed, we must re-link the shader
//Note that this will reset all uniforms that were previously set.
gl.linkProgram(shaderProgram);
```

Oder wir verwenden den von der Grafikkarte bereitgestellten Index, anstatt den Index selbst festzulegen; dies vermeidet das erneute Verknüpfen des Shader-Programms.

```js
const locPosition = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(locPosition, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(locPosition);

const locNormal = gl.getAttribLocation(shaderProgram, "normal");
gl.vertexAttribPointer(locNormal, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(locNormal);

const locTexUV = gl.getAttribLocation(shaderProgram, "texUV");
gl.vertexAttribPointer(locTexUV, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(locTexUV);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vertexpezi `Önapezikation](https://www.khronos.org/opengl/wiki/Vertex_Specification) auf der OpenGL-Wiki
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
