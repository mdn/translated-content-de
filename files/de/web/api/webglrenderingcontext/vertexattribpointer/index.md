---
title: "WebGLRenderingContext: vertexAttribPointer() Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.vertexAttribPointer()`** der [WebGL API](/de/docs/Web/API/WebGL_API) bindet den aktuellen an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Pufferobjekts und legt dessen Layout fest.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Index des zu ändernden Vertex-Attributs angibt.
- `size`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Datentyp jeder Komponente im Array angibt. Mögliche Werte:
    - `gl.BYTE`: Signierte 8-Bit-Ganzzahl, mit Werten im Bereich \[-128, 127]
    - `gl.SHORT`: Signierte 16-Bit-Ganzzahl, mit Werten im Bereich \[-32768, 32767]
    - `gl.UNSIGNED_BYTE`: Unsigned 8-Bit-Ganzzahl, mit Werten im Bereich \[0, 255]
    - `gl.UNSIGNED_SHORT`: Unsigned 16-Bit-Ganzzahl, mit Werten im Bereich \[0,65535]
    - `gl.FLOAT`: 32-Bit-IEEE-Gleitkommazahl

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext),
    sind zusätzlich die folgenden Werte verfügbar:
    - `gl.HALF_FLOAT`: 16-Bit-IEEE-Gleitkommazahl
    - `gl.INT`: 32-Bit-signierte Binär-Ganzzahl
    - `gl.UNSIGNED_INT`: 32-Bit-unsigned Binär-Ganzzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit-signierte Ganzzahl mit Werten im Bereich \[-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit-unsigned Ganzzahl mit Werten im Bereich \[0, 1023]

- `normalized`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob Ganzzahldatenwerte beim Konvertieren zu einem Float normalisiert werden sollen.
    - Für Typen `gl.BYTE` und `gl.SHORT` normalisiert auf \[-1, 1] wenn true.
    - Für Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT` normalisiert auf \[0, 1] wenn true.
    - Für Typen `gl.FLOAT` und `gl.HALF_FLOAT` hat dieser Parameter keine Auswirkung.

- `stride`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der den Versatz in Bytes zwischen den Anfängen aufeinanderfolgender Vertex-Attribute angibt. Darf nicht negativ oder größer als 255 sein. Wenn `stride` 0 ist, wird angenommen, dass das Attribut dicht gepackt ist, d.h. die Attribute sind nicht miteinander verschachtelt, sondern jedes Attribut befindet sich in einem separaten Block, und das Attribut des nächsten Vertex folgt unmittelbar dem des aktuellen Vertex.
- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Versatz in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Bytelänge von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE` Fehler wird geworfen, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION` Fehler wird geworfen, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION` Fehler wird geworfen, wenn kein WebGLBuffer an das ARRAY_BUFFER-Ziel gebunden ist.
- Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) wird ein `gl.INVALID_OPERATION` Fehler geworfen, wenn dieses Vertex-Attribut im Vertex-Shader als Ganzzahl definiert ist (z. B. `uvec4` oder `ivec4`, anstatt `vec4`).

## Beschreibung

Angenommen, wir möchten einige 3D-Geometrien rendern, und dafür müssen wir unsere Vertices dem Vertex-Shader bereitstellen. Jedes Vertex hat einige Attribute, wie Position, Normalenvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und dem Vertex Buffer Object (VBO) bereitgestellt werden. Zuerst müssen wir den zu verwendenden [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer) an `gl.ARRAY_BUFFER` binden, dann spezifizieren wir mit dieser Methode, `gl.vertexAttribPointer()`, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Darüber hinaus müssen wir den Stride einbeziehen, der die gesamte Bytelänge aller Attribute für ein Vertex ist. Zusätzlich müssen wir [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

Normalerweise liegt Ihre 3D-Geometrie bereits in einem bestimmten binären Format vor, daher müssen Sie die Spezifikation dieses spezifischen Formats lesen, um das Speicherlayout zu bestimmen. Wenn Sie jedoch das Format selbst entwerfen oder Ihre Geometrie in Textdateien (wie [Wavefront .obj Dateien](https://en.wikipedia.org/wiki/Wavefront_.obj_file)) vorliegt und zur Laufzeit in einen `ArrayBuffer` konvertiert werden muss, haben Sie freie Wahl, wie Sie den Speicher strukturieren. Für höchste Leistung sollten Sie die Attribute [verschachteln](https://de.wikipedia.org/wiki/Verschachtelter_Speicher) und den kleinsten Datentyp verwenden, der Ihre Geometrie noch genau repräsentiert.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Bei High-End-Grafikkarten liegt das Maximum bei 16, bei Low-End-Grafikkarten ist der Wert niedriger.

### Attributindex

Für jedes Attribut müssen Sie dessen Index angeben. Dieser ist unabhängig von der Position im Array-Buffer, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können als sie im Array-Buffer gespeichert sind. Sie haben zwei Möglichkeiten:

- Entweder geben Sie den Index selbst an. In diesem Fall rufen Sie [`gl.bindAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/bindAttribLocation) auf, um ein benanntes Attribut vom Vertex-Shader mit dem von Ihnen zu verwendenden Index zu verbinden. Dies muss geschehen, bevor [`gl.linkProgram()`](/de/docs/Web/API/WebGLRenderingContext/linkProgram) aufgerufen wird. Sie können diesen Index dann an `gl.vertexAttribPointer()` übergeben.
- Alternativ verwenden Sie den Index, der von der Grafikkarte während der Kompilierung des Vertex-Shaders zugewiesen wird. Abhängig von der Grafikkarte variiert der Index, daher müssen Sie [`gl.getAttribLocation()`](/de/docs/Web/API/WebGLRenderingContext/getAttribLocation) aufrufen, um den Index herauszufinden, und diesen dann an `gl.vertexAttribPointer()` übergeben.
  Wenn Sie WebGL 2 verwenden, können Sie den Index selbst im Vertex-Shader-Code angeben und den von der Grafikkarte verwendeten Standard überschreiben, z. B. `layout(location = 3) in vec4 position;` würde das `"position"`-Attribut auf Index 3 setzen.

### Integer-Attribute

Der `ArrayBuffer` kann sowohl mit Ganzzahlen als auch mit Floats gefüllt werden, die Attribute werden jedoch immer in einen Float konvertiert, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder das Float im Vertex-Shader zurück in eine Ganzzahl umwandeln (z. B. `(int) floatNumber`), oder [`gl.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer) von WebGL2 verwenden.

### Standard-Attributwerte

Der Vertex-Shader-Code kann eine Anzahl von Attributen enthalten, aber wir müssen nicht für jedes Attribut die Werte angeben. Stattdessen können wir einen Standardwert liefern, der für alle Vertices identisch ist. Wir können [`gl.disableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray) aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während [`gl.enableVertexAttribArray()`](/de/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray) die Werte aus dem Array-Buffer wie mit `gl.vertexAttribPointer()` angegeben liest.

Ebenso, wenn unser Vertex-Shader z. B. ein 4-Komponenten-Attribut mit `vec4` erwartet, wir aber in unserem `gl.vertexAttribPointer()` Aufruf die `size` auf `2` gesetzt haben, wird WebGL die ersten beiden Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert genommen werden.

Der Standardwert ist standardmäßig `vec4(0.0, 0.0, 0.0, 1.0)`, aber wir können einen anderen Standardwert mit [`gl.vertexAttrib[1234]f[v]()`](/de/docs/Web/API/WebGLRenderingContext/vertexAttrib) angeben.

Zum Beispiel kann Ihr Vertex-Shader ein Positions- und ein Farb-Attribut verwenden. Die meisten Meshes haben die Farbe auf der Ebene des einzelnen Vertexs angegeben, aber einige Meshes sind einheitlich eingefärbt. Für diese Meshes ist es nicht notwendig, die gleiche Farbe für jeden Vertex in den Array-Buffer zu setzen, sodass Sie `gl.vertexAttrib4fv()` verwenden, um eine konstante Farbe zu setzen.

### Abfrage der aktuellen Einstellungen

Sie können [`gl.getVertexAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttrib) und [`gl.getVertexAttribOffset()`](/de/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset) aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z.B. den Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Performance haben und es daher besser ist, den Status innerhalb Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen sind jedoch großartig zum Debuggen eines WebGL-Kontextes ohne das Berühren des Anwendungscodes.

## Beispiele

Dieses Beispiel zeigt, wie Sie Ihre Vertex-Attribute an das Shader-Programm senden. Wir verwenden eine imaginäre Datenstruktur, in der die Attribute jedes Vertex mit einer Länge von 20 Bytes pro Vertex verschachtelt gespeichert sind:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Floats; insgesamt werden dafür 12 Bytes benötigt.
2. **Normalenvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalenvektors speichern, aber da die Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für bessere Leistung richten wir die Daten auf 32 Bits aus, indem wir auch eine vierte null-wertige Komponente speichern, was die Gesamtgröße auf 4 Bytes erhöht. Außerdem geben wir WebGL an, die Werte zu normalisieren, da unsere Normalen immer im Bereich \[-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten 16-Bit-unsigned Ganzzahlen genügend Präzision, die Gesamtgröße beträgt 4 Bytes. Wir sagen WebGL auch, die Werte zu \[0, 1] zu normalisieren.

Der folgende Vertex wird beispielsweise im Array-Buffer wie folgt gespeichert:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

![WebGL-Array-Buffer-Inhalt](webgl-array-buffer.svg)

### Erstellen des Array-Buffers

Zuerst erzeugen wir den Array-Buffer dynamisch aus JSON-Daten mit einer {{jsxref("DataView")}}. Beachten Sie die Verwendung von `true`, da WebGL erwartet, dass unsere Daten im kleinen Endianness-Format sind.

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

Für höhere Leistung könnten wir die vorherige JSON-zu-ArrayBuffer-Konvertierung auch serverseitig, z.B. mit Node.js durchführen. Anschließend könnten wir die Binärdatei laden und sie als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Verbrauch des Array-Buffers mit WebGL

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

Oder wir können den von der Grafikkarte bereitgestellten Index anstelle der eigenständigen Festlegung des Index verwenden; dies vermeidet das erneute Verlinken des Shader-Programms.

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

- [Vertex Specification](https://wikis.khronos.org/opengl/Vertex_Specification) auf der OpenGL-Wiki
- [`WebGL2RenderingContext.vertexAttribIPointer()`](/de/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer)
