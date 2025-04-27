---
title: "WebGLRenderingContext: vertexAttribPointer() Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.vertexAttribPointer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) bindet den aktuell an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Puffer-Objekts und legt dessen Layout fest.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu modifizierenden Vertex-Attributs angibt.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt. Mögliche Werte:

    - `gl.BYTE`: signierter 8-Bit-Integer, Wertebereich \[-128, 127]
    - `gl.SHORT`: signierter 16-Bit-Integer, Wertebereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: unsignierter 8-Bit-Integer, Wertebereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: unsignierter 16-Bit-Integer, Wertebereich \[0, 65535]
    - `gl.FLOAT`: 32-Bit IEEE Gleitkommazahl

    Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit IEEE Gleitkommazahl
    - `gl.INT`: 32-Bit signierter binärer Integer
    - `gl.UNSIGNED_INT`: 32-Bit unsignierter binärer Integer
    - `gl.INT_2_10_10_10_REV`: 32-Bit signierter Integer, Wertebereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit unsignierter Integer, Wertebereich \[0, 1023]

- `normalized`

  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ganzzahlige Datenwerte normalisiert werden sollen, wenn sie in eine Fließkommazahl umgewandelt werden.

    - Für die Typen `gl.BYTE` und `gl.SHORT`, normalisiert die Werte auf \[-1, 1], wenn true.
    - Für die Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT`, normalisiert die Werte auf \[0, 1], wenn true.
    - Für die Typen `gl.FLOAT` und `gl.HALF_FLOAT` hat dieser Parameter keine Wirkung.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Versatz in Bytes zwischen dem Beginn aufeinanderfolgender Vertex-Attribute angibt. Darf nicht negativ oder größer als 255 sein. Wenn der `stride` 0 ist, wird angenommen, dass das Attribut dicht gepackt ist, d.h. die Attribute sind nicht verschachtelt, sondern jedes Attribut befindet sich in einem separaten Block, und das Attribut des nächsten Vertex folgt unmittelbar danach.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Bytelänge von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION` Fehler wird ausgelöst, wenn kein WebGLBuffer an das ARRAY_BUFFER-Ziel gebunden ist.
- Bei Verwendung eines [WebGL 2 Kontexts](/de/docs/Web/API/WebGL2RenderingContext) wird ein `gl.INVALID_OPERATION` Fehler ausgelöst, wenn dieses Vertex-Attribut als Integer im Vertex-Shader definiert ist (z.B. `uvec4` oder `ivec4`, statt `vec4`).

## Beschreibung

Angenommen, Sie möchten einige 3D-Geometrien rendern, und dazu müssen Sie die Vertex-Daten dem Vertex-Shader übergeben. Jedes Vertex hat einige Attribute, wie Position, Normalvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und dem Vertex-Buffer-Objekt (VBO) zugeführt werden. Zuerst müssen Sie den [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) binden, den Sie verwenden möchten, an `gl.ARRAY_BUFFER`, dann legen Sie mit dieser Methode `gl.vertexAttribPointer()` fest, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Zusätzlich müssen wir den `stride` angeben, die gesamte Bytelänge aller Attribute für ein Vertex. Außerdem müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

In der Regel befindet sich Ihre 3D-Geometrie bereits in einem bestimmten Binärformat, sodass Sie die Spezifikation dieses speziellen Formats lesen müssen, um das Speicherlayout herauszufinden. Wenn Sie jedoch das Format selbst entwerfen oder Ihre Geometrie sich in Textdateien (wie [Wavefront .obj-Dateien](https://de.wikipedia.org/wiki/Wavefront_.obj-Datei)) befindet und zur Laufzeit in einen `ArrayBuffer` umgewandelt werden muss, können Sie frei entscheiden, wie Sie den Speicher strukturieren. Für höchste Leistung sollten Sie die Attribute [verschachteln](https://de.wikipedia.org/wiki/Interleaved_memory) und den kleinsten Datentyp verwenden, der Ihre Geometrie noch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Auf High-End-Grafikkarten ist das Maximum 16, auf Low-End-Grafikkarten wird der Wert niedriger sein.

### Attribut-Index

Für jedes Attribut müssen Sie dessen Index angeben. Dies ist unabhängig von der Position im Array-Buffer, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können als sie im Array-Buffer gespeichert sind. Sie haben zwei Optionen:

- Entweder legen Sie den Index selbst fest. In diesem Fall rufen Sie [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation) auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem von Ihnen verwendeten Index zu verbinden. Dies muss vor dem Aufruf von [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) erfolgen. Dann können Sie diesen gleichen Index für `gl.vertexAttribPointer()` verwenden.
- Alternativ verwenden Sie den Index, der von der Grafikkarte beim Kompilieren des Vertex-Shaders zugewiesen wird. Abhängig von der Grafikkarte variiert der Index, sodass Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen müssen, um den Index herauszufinden, und dann diesen Index an `gl.vertexAttribPointer()` übergeben.
  Wenn Sie WebGL 2 verwenden, können Sie den Index selbst im Vertex-Shader-Code angeben und den von der Grafikkarte verwendeten Standardwert überschreiben, z.B. `layout(location = 3) in vec4 position;` würde das `"position"`-Attribut auf Index 3 setzen.

### Integer-Attribute

Während der `ArrayBuffer` sowohl mit Integers als auch mit Floats gefüllt werden kann, werden die Attribute beim Senden an den Vertex-Shader immer in einen Float konvertiert. Wenn Sie Integers in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder den Float im Vertex-Shader wieder in einen Integer umwandeln (z.B. `(int) floatNumber`), oder [`gl.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) aus WebGL2 verwenden.

### Standardwerte für Attribute

Der Vertex-Shader-Code kann eine Reihe von Attributen umfassen, aber wir müssen nicht die Werte für jedes Attribut angeben. Stattdessen können wir einen Standardwert angeben, der für alle Vertices identisch ist. Wir können [`gl.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufgerufen wird, um die Werte aus dem Array-Buffer wie in `gl.vertexAttribPointer()` angegeben zu lesen.

Ähnlich, wenn unser Vertex-Shader z.B. ein 4-Komponenten-Attribut mit `vec4` erwartet, wir aber in unserem `gl.vertexAttribPointer()`-Aufruf die `size` auf `2` gesetzt haben, dann wird WebGL die ersten beiden Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente vom Standardwert übernommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können einen anderen Standardwert mit [`gl.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) spezifizieren.

Zum Beispiel kann Ihr Vertex-Shader ein Positions- und ein Farb-Attribut verwenden. Die meisten Meshes haben die Farbe auf einem Per-Vertex-Niveau spezifiziert, aber einige Meshes haben einen einheitlichen Farbton. Für diese Meshes ist es nicht notwendig, die gleiche Farbe für jedes Vertex in den Array-Buffer zu platzieren, also verwenden Sie `gl.vertexAttrib4fv()`, um eine konstante Farbe festzulegen.

### Abfragen der aktuellen Einstellungen

Sie können [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) und [`gl.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z.B. den Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Status in Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen sind jedoch großartig zum Debuggen eines WebGL-Kontexts, ohne den Anwendungscode zu berühren.

## Beispiele

Dieses Beispiel zeigt, wie Ihre Vertex-Attribute an das Shader-Programm gesendet werden können. Wir verwenden eine imaginäre Datenstruktur, bei der die Attribute jedes Vertex verschachtelt mit einer Länge von 20 Bytes pro Vertex gespeichert sind:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Floats; insgesamt verbraucht dies 12 Bytes.
2. **Normalvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalvektors speichern, aber da Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Integer. Für eine bessere Leistung richten wir die Daten auf 32 Bit aus, indem wir auch eine vierte, nullwertige Komponente speichern, wodurch die Gesamtgröße auf 4 Bytes steigt. Wir teilen WebGL mit, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten 16-Bit-unsignierte Integer ausreichend Präzision, die Gesamtgröße beträgt 4 Bytes. Wir teilen WebGL auch mit, die Werte auf \[0, 1] zu normalisieren.

Zum Beispiel wird das folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

wie folgt im Array-Buffer gespeichert:

![WebGL-Array-Buffer-Inhalt](webgl-array-buffer.svg)

### Erstellen des Array-Buffers

Zuerst erstellen wir den Array-Buffer dynamisch aus JSON-Daten mithilfe eines {{jsxref("DataView")}}. Beachten Sie die Verwendung von `true`, da WebGL erwartet, dass unsere Daten im Little-Endian-Format vorliegen.

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

Für eine höhere Leistung könnten wir die vorherige JSON-zu-ArrayBuffer-Konvertierung auch serverseitig durchführen, z.B. mit Node.js. Dann könnten wir die Binärdatei laden und als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Konsumieren des Array-Buffers mit WebGL

Zuerst erstellen wir ein neues Vertex Buffer Object (VBO) und versorgen es mit unserem Array-Buffer:

```js
// Bind array buffer to a Vertex Buffer Object
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann legen wir das Speicherlayout des Array-Buffers fest, entweder indem wir den Index selbst setzen:

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

Oder wir verwenden den Index, der von der Grafikkarte bereitgestellt wird, anstatt den Index selbst zu setzen; dies vermeidet das erneute Verlinken des Shader-Programms.

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

- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification) im OpenGL-Wiki
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
