---
title: "WebGLRenderingContext: vertexAttribPointer()-Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.vertexAttribPointer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) bindet den derzeit an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Pufferobjekts und spezifiziert dessen Layout.

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

    - `gl.BYTE`: signierte 8-Bit-Ganzzahl, mit Werten im Bereich \[-128, 127]
    - `gl.SHORT`: signierte 16-Bit-Ganzzahl, mit Werten im Bereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: unsignierte 8-Bit-Ganzzahl, mit Werten im Bereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: unsignierte 16-Bit-Ganzzahl, mit Werten im Bereich \[0,65535]
    - `gl.FLOAT`: 32-Bit IEEE Gleitkommazahl

    Bei Verwendung eines [WebGL 2 context](/de/docs/Web/API/WebGL2RenderingContext),
    sind zusätzlich folgende Werte verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit IEEE Gleitkommazahl
    - `gl.INT`: 32-Bit signierte Binärzahl
    - `gl.UNSIGNED_INT`: 32-Bit unsignierte Binärzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit signierte Ganzzahl mit Werten im Bereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit unsignierte Ganzzahl mit Werten im Bereich \[0, 1023]

- `normalized`

  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ganzzahlige Datenwerte in einen bestimmten Bereich normalisiert werden sollen, wenn sie in einen Float umgewandelt werden.

    - Für die Typen `gl.BYTE` und `gl.SHORT` normalisiert er die Werte
      zu \[-1, 1], falls wahr.
    - Für die Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT`
      normalisiert er die Werte zu \[0, 1], falls wahr.
    - Für die Typen `gl.FLOAT` und `gl.HALF_FLOAT` hat dieser Parameter
      keine Wirkung.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Versatz in Bytes zwischen dem Anfang aufeinanderfolgender Vertex-Attribute angibt. Kann nicht negativ oder größer als 255 sein. Wenn der stride 0 ist, wird angenommen, dass das Attribut dicht gepackt ist, das heißt, die Attribute sind nicht verschachtelt, sondern jedes Attribut befindet sich in einem separaten Block, und das nächste Vertex-Attribut folgt unmittelbar nach dem aktuellen Vertex.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Versatz in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Bytelänge
    von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird ausgelöst, wenn kein WebGLBuffer an das ARRAY_BUFFER-Target gebunden ist.
- Wenn ein [WebGL 2 context](/de/docs/Web/API/WebGL2RenderingContext) verwendet wird, wird ein `gl.INVALID_OPERATION`-Fehler ausgelöst, wenn dieses Vertex-Attribut im Vertex-Shader als Ganzzahl definiert ist (z. B. `uvec4` oder `ivec4`, anstelle von `vec4`).

## Beschreibung

Angenommen, wir möchten einige 3D-Geometrien rendern, und dafür müssen wir unsere Vertices dem Vertex-Shader bereitstellen. Jedes Vertex hat ein paar Attribute, wie Position, Normalenvektor oder Texture-Koordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und an das Vertex Buffer Object (VBO) geliefert werden. Zuerst müssen wir den [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), den wir verwenden möchten, an `gl.ARRAY_BUFFER` binden, dann geben wir mit dieser Methode, `gl.vertexAttribPointer()`, an, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Zusätzlich müssen wir den stride einbeziehen, der die gesamte Bytelänge aller Attribute für ein Vertex ist. Auch müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

Normalerweise befindet sich Ihre 3D-Geometrie bereits in einem bestimmten binären Format, sodass Sie die Spezifikation dieses spezifischen Formats lesen müssen, um das Speicherlayout zu ermitteln. Wenn Sie das Format jedoch selbst gestalten oder Ihre Geometrie in Textdateien (wie [Wavefront .obj-Dateien](https://de.wikipedia.org/wiki/Wavefront_Obj)) vorliegt und zur Laufzeit in einen `ArrayBuffer` konvertiert werden muss, haben Sie die freie Wahl, wie Sie den Speicher strukturieren. Für höchste Leistung sollten Sie die Attribute [verschachteln](https://de.wikipedia.org/wiki/Interleaved_memory) und den kleinsten Datentyp verwenden, der Ihre Geometrie dennoch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Auf High-End-Grafikkarten beträgt das Maximum 16, bei Low-End-Grafikkarten ist der Wert niedriger.

### Attributindex

Für jedes Attribut müssen Sie dessen Index angeben. Dieser ist unabhängig von der Position innerhalb des Array-Buffers, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können, als sie im Array-Buffer gespeichert sind. Sie haben zwei Möglichkeiten:

- Entweder geben Sie den Index selbst an. In diesem Fall rufen Sie [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation) auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem von Ihnen gewünschten Index zu verbinden. Dies muss geschehen, bevor Sie [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) aufrufen. Sie können diesen Index dann bei `gl.vertexAttribPointer()` bereitstellen.
- Alternativ verwenden Sie den Index, der von der Grafikkarte beim Kompilieren des Vertex-Shaders zugewiesen wird. Je nach Grafikkarte variiert der Index, daher müssen Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen, um den Index herauszufinden, und diesen dann bei `gl.vertexAttribPointer()` bereitstellen. Wenn Sie WebGL 2 verwenden, können Sie den Index selbst im Vertex-Shader-Code spezifizieren und den Standardwert der Grafikkarte überschreiben, z. B. `layout(location = 3) in vec4 position;` würde das `"position"`-Attribut auf Index 3 setzen.

### Ganzzahlattribute

Während der `ArrayBuffer` sowohl mit Ganzzahlen als auch mit Gleitkommazahlen gefüllt werden kann, werden die Attribute immer in eine Gleitkommazahl umgewandelt, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder die Gleitkommazahl im Vertex-Shader zurück in eine Ganzzahl umwandeln (z. B. `(int) floatNumber`), oder Sie verwenden [`gl.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) aus WebGL2.

### Standardattributwerte

Der Vertex-Shader-Code kann eine Reihe von Attributen enthalten, aber wir müssen nicht die Werte für jedes Attribut angeben. Stattdessen können wir einen Standardwert bereitstellen, der für alle Vertices identisch ist. Wir können [`gl.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während der Aufruf von [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) die Werte aus dem Array-Buffer gemäß `gl.vertexAttribPointer()` liest.

Ebenso, wenn unser Vertex-Shader beispielsweise ein 4-komponenten Attribut mit `vec4` erwartet, wir aber in unserem `gl.vertexAttribPointer()`-Aufruf die `size` auf `2` setzen, dann wird WebGL die ersten beiden Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert genommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können einen anderen Standardwert mit [`gl.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) angeben.

Beispielsweise könnte Ihr Vertex-Shader ein Positions- und ein Farb-Attribut verwenden. Die meisten Meshes haben die Farbe auf Vertex-Ebene angegeben, aber einige Meshes haben einen einheitlichen Farbton. Für diese Meshes ist es nicht notwendig, dieselbe Farbe für jedes Vertex in den Array-Buffer zu platzieren, daher verwenden Sie `gl.vertexAttrib4fv()`, um eine konstante Farbe festzulegen.

### Abfragen der aktuellen Einstellungen

Sie können [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) und [`gl.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z. B. den Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Zustand in Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen eignen sich jedoch hervorragend zum Debuggen eines WebGL-Kontexts, ohne den Anwendungscode zu berühren.

## Beispiele

Dieses Beispiel zeigt, wie Sie Ihre Vertex-Attribute an das Shader-Programm senden. Wir verwenden eine imaginäre Datenstruktur, bei der die Attribute jedes Vertex mit einer Länge von 20 Bytes pro Vertex verschachtelt gespeichert sind:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Gleitkommazahlen; insgesamt werden hierfür 12 Bytes verwendet.
2. **Normalenvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalenvektors speichern, aber da die Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für eine bessere Leistung richten wir die Daten auf 32 Bits aus, indem wir auch eine vierte, nullwertige Komponente speichern, was die Gesamtgröße auf 4 Bytes bringt. Außerdem teilen wir WebGL mit, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; hierfür bieten 16-Bit-unsignierte Ganzzahlen genügend Präzision, die Gesamtgröße beträgt 4 Bytes. Wir teilen WebGL auch mit, die Werte auf \[0, 1] zu normalisieren.

Zum Beispiel wird das folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

im Array-Buffer wie folgt gespeichert:

![WebGL Array-Buffer-Inhalt](webgl-array-buffer.svg)

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

Für eine höhere Leistung könnten wir die vorherige JSON-zu-ArrayBuffer-Konvertierung auch serverseitig durchführen, z. B. mit Node.js. Dann könnten wir die Binärdatei laden und als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Nutzung des Array-Buffers mit WebGL

Zuerst erstellen wir ein neues Vertex Buffer Object (VBO) und versorgen es mit unserem Array-Buffer:

```js
//Bind array buffer to a Vertex Buffer Object
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann spezifizieren wir das Speicherschema des Array-Buffers, entweder indem wir den Index selbst festlegen:

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

Oder wir verwenden den von der Grafikkarte bereitgestellten Index anstelle des Selbstauswählens des Indexes; dies vermeidet das erneute Verknüpfen des Shader-Programms.

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
