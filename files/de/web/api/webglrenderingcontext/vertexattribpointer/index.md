---
title: "WebGLRenderingContext: vertexAttribPointer()-Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.vertexAttribPointer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet den aktuell an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Buffer-Objekts und spezifiziert dessen Layout.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des Vertex-Attributs angibt, das modifiziert werden soll.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt. Mögliche Werte:

    - `gl.BYTE`: signierte 8-Bit-Ganzzahl, Wertebereich \[-128, 127]
    - `gl.SHORT`: signierte 16-Bit-Ganzzahl, Wertebereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: unsignierte 8-Bit-Ganzzahl, Wertebereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: unsignierte 16-Bit-Ganzzahl, Wertebereich \[0,65535]
    - `gl.FLOAT`: 32-Bit IEEE-Gleitkommazahl

    Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit IEEE-Gleitkommazahl
    - `gl.INT`: 32-Bit signierte binäre Ganzzahl
    - `gl.UNSIGNED_INT`: 32-Bit unsignierte binäre Ganzzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit signierte Ganzzahl, Wertebereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit unsignierte Ganzzahl, Wertebereich \[0, 1023]

- `normalized`

  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ganzzahlige Datenwerte normalisiert in einen bestimmten Bereich umgewandelt werden sollen, wenn sie in ein Float gewandelt werden.

    - Für die Typen `gl.BYTE` und `gl.SHORT` normalisiert auf \[-1, 1], wenn wahr.
    - Für die Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT` normalisiert auf \[0, 1], wenn wahr.
    - Für die Typen `gl.FLOAT` und `gl.HALF_FLOAT` hat dieser Parameter keine Wirkung.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Offset in Bytes zwischen dem Anfang von aufeinanderfolgenden Vertex-Attributen angibt. Darf nicht negativ sein oder größer als 255. Wenn stride 0 ist, wird angenommen, dass die Attribute dicht gepackt sind, das heißt, die Attribute sind nicht verschachtelt, sondern jedes Attribut befindet sich in einem separaten Block und das nächste Vertex-Attribut folgt unmittelbar nach dem aktuellen Vertex.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Byte-Länge des Typs sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn kein WebGLBuffer an das ARRAY_BUFFER-Ziel gebunden ist.
- Bei Verwendung eines [WebGL 2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst, wenn dieses Vertex-Attribut als Ganzzahl im Vertex-Shader definiert ist (z.B. `uvec4` oder `ivec4` anstelle von `vec4`).

## Beschreibung

Nehmen wir an, wir möchten eine 3D-Geometrie rendern, und dafür müssen wir unsere Vertizes an den Vertex-Shader übergeben. Jedes Vertex hat ein paar Attribute, wie Position, Normalenvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und an das Vertex-Buffer-Objekt (VBO) geliefert werden. Zuerst müssen wir den [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) binden, den wir an `gl.ARRAY_BUFFER` verwenden möchten, und dann spezifizieren wir mit dieser Methode `gl.vertexAttribPointer()`, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Außerdem müssen wir den stride einbeziehen, der die Gesamtbyte-Länge aller Attribute für ein Vertex darstellt. Zudem müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

Normalerweise liegt die 3D-Geometrie bereits in einem bestimmten binären Format vor, daher müssen Sie die Spezifikation dieses spezifischen Formats lesen, um das Speicherlayout zu bestimmen. Wenn Sie jedoch das Format selbst entwerfen oder Ihre Geometrie in Textdateien (wie [Wavefront .obj-Dateien](https://en.wikipedia.org/wiki/Wavefront_.obj_file)) vorliegt und zur Laufzeit in einen `ArrayBuffer` konvertiert werden muss, haben Sie die freie Wahl, wie Sie den Speicher strukturieren. Für höchste Leistung sollten Sie die Attribute [verschachteln](https://en.wikipedia.org/wiki/Interleaved_memory) und den kleinsten Datentyp verwenden, der Ihre Geometrie dennoch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Auf High-End-Grafikkarten liegt das Maximum bei 16, auf Low-End-Grafikkarten wird der Wert niedriger sein.

### Attributindex

Für jedes Attribut müssen Sie dessen Index angeben. Dieser ist unabhängig von der Position im Array-Buffer, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können, als sie im Array-Buffer gespeichert sind. Sie haben zwei Möglichkeiten:

- Entweder Sie legen den Index selbst fest. In diesem Fall rufen Sie [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation) auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem gewünschten Index zu verbinden. Das muss vor dem Aufruf von [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) geschehen. Sie können diesen Index dann `gl.vertexAttribPointer()` übergeben.
- Alternativ verwenden Sie den von der Grafikkarte zugewiesenen Index beim Kompilieren des Vertex-Shaders. Der Index variiert je nach Grafikkarte, sodass Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen müssen, um den Index zu ermitteln, und diesen dann `gl.vertexAttribPointer()` übergeben.
  Wenn Sie WebGL 2 verwenden, können Sie den Index im Vertex-Shader-Code selbst festlegen und die von der Grafikkarte verwendete Standardposition überschreiben, z.B. `layout(location = 3) in vec4 position;` würde das `"position"`-Attribut auf Index 3 setzen.

### Ganzzahlige Attribute

Während der `ArrayBuffer` sowohl mit Ganzzahlen als auch mit Gleitkommazahlen gefüllt werden kann, werden die Attribute immer in ein Float umgewandelt, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie das Float im Vertex-Shader entweder zurück in eine Ganzzahl umwandeln (z.B. `(int) floatNumber`), oder [`gl.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) von WebGL2 verwenden.

### Standardwerte für Attribute

Der Vertex-Shader-Code kann eine Anzahl von Attributen enthalten, aber wir müssen nicht für jedes Attribut die Werte angeben. Stattdessen können wir einen Standardwert bereitstellen, der für alle Vertizes identisch sein wird. Wir können [`gl.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während der Aufruf von [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) die Werte aus dem Array-Buffer gemäß `gl.vertexAttribPointer()` liest.

Ähnlich, wenn unser Vertex-Shader z.B. ein 4-Komponenten-Attribut mit `vec4` erwartet, wir jedoch in unserem Aufruf von `gl.vertexAttribPointer()` die `size` auf `2` setzen, so wird WebGL die ersten beiden Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert genommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können einen anderen Standardwert mit [`gl.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) angeben.

Zum Beispiel kann Ihr Vertex-Shader ein Positions- und ein Farb-Attribut verwenden. Die meisten Meshes haben die Farbe auf einer Per-Vertex-Ebene angegeben, aber einige Meshes haben einen einheitlichen Farbton. Für diese Meshes ist es nicht notwendig, dieselbe Farbe für jedes Vertex in den Array-Buffer zu setzen, sodass Sie `gl.vertexAttrib4fv()` verwenden, um eine konstante Farbe festzulegen.

### Abfragen aktueller Einstellungen

Sie können [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) und [`gl.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) aufrufen, um die aktuellen Parameter für ein Attribut abzurufen, z.B. der Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Zustand innerhalb Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen sind jedoch großartig zum Debuggen eines WebGL-Kontexts, ohne den Anwendungscode zu berühren.

## Beispiele

Dieses Beispiel zeigt, wie Sie Ihre Vertex-Attribute an das Shader-Programm senden. Wir verwenden eine imaginäre Datenstruktur, bei der die Attribute jedes Vertex eng gemischt mit einer Länge von 20 Bytes pro Vertex gespeichert sind:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Genauigkeit verwenden wir 32-Bit-Floats; insgesamt werden 12 Bytes verwendet.
2. **Normalenvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalenvektors speichern, aber da Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für eine bessere Leistung richten wir die Daten auf 32 Bit aus, indem wir auch eine vierte, nullwertige Komponente speichern, was die Gesamtgröße auf 4 Bytes bringt. Zudem teilen wir WebGL mit, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten 16-Bit-unsignierte Ganzzahlen ausreichend Präzision, die Gesamtgröße beträgt 4 Bytes. Wir teilen WebGL auch mit, die Werte auf \[0, 1] zu normalisieren.

Zum Beispiel, das folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

Wird im Array-Buffer wie folgt gespeichert:

![WebGL-Array-Buffer-Inhalt](webgl-array-buffer.svg)

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

Für eine höhere Leistung könnten wir die vorherige JSON-zu-ArrayBuffer-Konvertierung auch serverseitig durchführen, z.B. mit Node.js. Dann könnten wir die Binärdatei laden und als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Verwendung des Array-Buffers mit WebGL

Zuerst erstellen wir ein neues Vertex-Buffer-Objekt (VBO) und versorgen es mit unserem Array-Buffer:

```js
//Bind array buffer to a Vertex Buffer Object
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann spezifizieren wir das Speicherlayout des Array-Buffers, entweder durch Festlegen des Index selbst:

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

- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification) im OpenGL-Wiki
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
