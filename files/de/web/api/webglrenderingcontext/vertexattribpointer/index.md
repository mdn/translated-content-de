---
title: "WebGLRenderingContext: vertexAttribPointer() Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.vertexAttribPointer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet den aktuell an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Pufferobjekts und spezifiziert dessen Layout.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu modifizierenden Vertex-Attributs festlegt.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt. Mögliche Werte:

    - `gl.BYTE`: Signierte 8-Bit-Ganzzahl, mit Werten im Bereich \[-128, 127]
    - `gl.SHORT`: Signierte 16-Bit-Ganzzahl, mit Werten im Bereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: Unsigned 8-Bit-Ganzzahl, mit Werten im Bereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: Unsigned 16-Bit-Ganzzahl, mit Werten im Bereich \[0,65535]
    - `gl.FLOAT`: 32-Bit IEE-Gleitkommazahl

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind folgende Werte zusätzlich verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit IEEE-Gleitkommazahl
    - `gl.INT`: 32-Bit signierte binäre Ganzzahl
    - `gl.UNSIGNED_INT`: 32-Bit Unsigned binäre Ganzzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit signierte Ganzzahl mit Werten im Bereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit Unsigned Ganzzahl mit Werten im Bereich \[0, 1023]

- `normalized`

  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob Integer-Datenwerte beim Umwandeln in eine Fließkommazahl normalisiert werden sollen.
    - Für Typen `gl.BYTE` und `gl.SHORT`, normalisiert die Werte zu \[-1, 1], wenn true.
    - Für Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT`, normalisiert die Werte zu \[0, 1], wenn true.
    - Für Typen `gl.FLOAT` und `gl.HALF_FLOAT`, hat dieser Parameter keinen Effekt.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das den Versatz in Bytes zwischen dem Anfang aufeinanderfolgender Vertex-Attribute angibt. Kann nicht negativ oder größer als 255 sein. Wenn der Stride 0 ist, wird das Attribut als dicht gepackt angesehen, d.h. die Attribute sind nicht unterteilt, sondern jedes Attribut befindet sich in einem separaten Block und das Attribut des nächsten Vertex folgt unmittelbar dem aktuellen Vertex.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), das einen Versatz in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Byte-Länge von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn kein WebGLBuffer an das ARRAY_BUFFER Ziel gebunden ist.
- Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) wird ein `gl.INVALID_OPERATION` Fehler ausgelöst, wenn dieses Vertex-Attribut als Integer im Vertex-Shader definiert ist (z.B. `uvec4` oder `ivec4`, anstelle von `vec4`).

## Beschreibung

Nehmen wir an, wir möchten einige 3D-Geometrien rendern, und dafür müssen wir unsere Vertices dem Vertex-Shader zur Verfügung stellen. Jedes Vertex hat einige Attribute, wie Position, Normalvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und dem Vertex Buffer Object (VBO) bereitgestellt werden. Zunächst müssen wir den zu verwendenden [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an `gl.ARRAY_BUFFER` binden, dann geben wir mit dieser Methode, `gl.vertexAttribPointer()`, an, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Darüber hinaus müssen wir den Stride einbeziehen, der die Gesamtbyte-Länge aller Attribute für ein Vertex ist. Außerdem müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

Normalerweise ist Ihre 3D-Geometrie bereits in einem bestimmten Binärformat, daher müssen Sie die Spezifikation dieses spezifischen Formats lesen, um das Speicherlayout zu ermitteln. Wenn Sie jedoch das Format selbst gestalten oder Ihre Geometrie in Textdateien (wie [Wavefront .obj Dateien](https://en.wikipedia.org/wiki/Wavefront_.obj_file)) vorliegt und zur Laufzeit in einen `ArrayBuffer` konvertiert werden muss, haben Sie die freie Wahl, wie Sie den Speicher strukturieren. Für höchste Leistung sollten Sie die Attribute [interleaven](https://en.wikipedia.org/wiki/Interleaved_memory) und den kleinstmöglichen Datentyp verwenden, der Ihre Geometrie noch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Bei High-End-Grafikkarten ist das Maximum 16, bei Low-End-Grafikkarten wird der Wert niedriger sein.

### Attribut-Index

Für jedes Attribut müssen Sie dessen Index angeben. Dieser ist unabhängig von der Position im Array-Buffer, so dass Ihre Attribute in einer anderen Reihenfolge gesendet werden können, als sie im Array-Buffer gespeichert sind. Sie haben zwei Optionen:

- Entweder geben Sie den Index selbst an. In diesem Fall rufen Sie [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation) auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem von Ihnen verwendeten Index zu verbinden. Dies muss geschehen, bevor [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) aufgerufen wird. Sie können dann diesen gleichen Index an `gl.vertexAttribPointer()` übergeben.
- Alternativ verwenden Sie den von der Grafikkarte beim Kompilieren des Vertex-Shaders zugewiesenen Index. Je nach Grafikkarte variiert der Index, daher müssen Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen, um den Index herauszufinden, und dann diesen Index an `gl.vertexAttribPointer()` übergeben. Wenn Sie WebGL 2 verwenden, können Sie den Index im Vertex-Shader-Code selbst angeben und den Standardwert der Grafikkarte überschreiben, z.B. `layout(location = 3) in vec4 position;` würde das `"position"` Attribut auf Index 3 setzen.

### Integer-Attribute

Während der `ArrayBuffer` sowohl mit Ganzzahlen als auch mit Fließkommazahlen gefüllt werden kann, werden die Attribute immer in eine Fließkommazahl umgewandelt, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder die Fließkommazahl im Vertex-Shader wieder in eine Ganzzahl umwandeln (z.B. `(int) floatNumber`), oder Sie verwenden [`gl.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) aus WebGL2.

### Standard-Attributwerte

Der Vertex-Shader-Code kann eine Anzahl von Attributen enthalten, aber wir müssen nicht die Werte für jedes Attribut angeben. Stattdessen können wir einen Standardwert bereitstellen, der für alle Vertices identisch sein wird. Wir können [`gl.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass der Standardwert verwendet werden soll, während ein Aufruf von [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) die Werte aus dem Array-Buffer liest, wie mit `gl.vertexAttribPointer()` angegeben.

Ähnlich, wenn unser Vertex-Shader z.B. ein 4-Komponenten-Attribut mit `vec4` erwartet, aber in unserem `gl.vertexAttribPointer()` Aufruf die `size` auf `2` gesetzt wurde, dann wird WebGL die ersten beiden Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert übernommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können einen anderen Standardwert mit [`gl.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) angeben.

Zum Beispiel kann Ihr Vertex-Shader eine Position und ein Farb-Attribut verwenden. Die meisten Meshes haben die Farbe auf See-Ebene spezifiziert, aber einige Meshes sind von einheitlichem Farbton. Für diese Meshes ist es nicht notwendig, dieselbe Farbe für jedes Vertex in den Array-Buffer zu legen, daher können Sie `gl.vertexAttrib4fv()` verwenden, um eine konstante Farbe festzulegen.

### Abfragen aktueller Einstellungen

Sie können [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) und [`gl.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z.B. den Datentyp oder ob das Attribut normalisiert werden soll. Bitte beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Status innerhalb Ihrer JavaScript-Anwendung zu speichern. Dennoch sind diese Funktionen großartig, um einen WebGL-Kontext zu debuggen, ohne den Anwendungscode zu ändern.

## Beispiele

Dieses Beispiel zeigt, wie man die Vertex-Attribute an das Shader-Programm sendet. Wir verwenden eine imaginäre Datenstruktur, bei der die Attribute jedes Vertex mit einer Länge von 20 Bytes pro Vertex unterteilt gespeichert werden:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Fließkommazahlen; insgesamt werden dafür 12 Bytes verwendet.
2. **Normalvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalvektors speichern, aber da die Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für bessere Leistung richten wir die Daten an 32 Bit aus, indem wir auch eine vierte Komponente mit dem Wert Null speichern, womit sich die Gesamtgröße auf 4 Bytes erhöht. Außerdem teilen wir WebGL mit, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten unsigned 16-Bit-Ganzzahlen genügend Präzision, die Gesamtgröße beträgt 4 Bytes. Wir teilen WebGL auch mit, die Werte auf \[0, 1] zu normalisieren.

Zum Beispiel, das folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

Wird im Array-Buffer wie folgt gespeichert:

![WebGL Array-Buffer Inhalte](webgl-array-buffer.svg)

### Erstellen des Array-Buffers

Zuerst erstellen wir dynamisch den Array-Buffer aus JSON-Daten unter Verwendung eines {{jsxref("DataView")}}. Beachten Sie die Verwendung von `true`, da WebGL erwartet, dass unsere Daten im Little-Endian-Format vorliegen.

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

Für höhere Leistung könnten wir auch die vorherige Konvertierung von JSON zu ArrayBuffer auf der Serverseite durchführen, z.B. mit Node.js. Dann könnten wir die Binärdatei laden und sie als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Nutzung des Array-Buffers mit WebGL

Zuerst erstellen wir ein neues Vertex Buffer Object (VBO) und versorgen es mit unserem Array-Buffer:

```js
// Bind array buffer to a Vertex Buffer Object
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann spezifizieren wir das Speicherlayout des Array-Buffers, entweder indem wir den Index selbst festlegen:

```js
// Describe the layout of the buffer:
// 1. position, not normalized
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
// 2. normal vector, normalized to [-1, 1]
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
// 3. texture coordinates, normalized to [0, 1]
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

// Set the attributes in the vertex shader to the same indices
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "normal");
gl.bindAttribLocation(shaderProgram, 2, "texUV");
// Since the attribute indices have changed, we must re-link the shader
// Note that this will reset all uniforms that were previously set.
gl.linkProgram(shaderProgram);
```

Oder wir können den von der Grafikkarte bereitgestellten Index anstelle des Selbsteinreichens verwenden; dies vermeidet das erneute Verlinken des Shader-Programms.

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

- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification) auf dem OpenGL Wiki
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
