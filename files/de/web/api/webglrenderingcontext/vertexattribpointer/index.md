---
title: "WebGLRenderingContext: vertexAttribPointer()-Methode"
short-title: vertexAttribPointer()
slug: Web/API/WebGLRenderingContext/vertexAttribPointer
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.vertexAttribPointer()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) bindet den aktuell an `gl.ARRAY_BUFFER` gebundenen Puffer an ein generisches Vertex-Attribut des aktuellen Vertex-Puffer-Objekts und legt dessen Layout fest.

## Syntax

```js-nolint
vertexAttribPointer(index, size, type, normalized, stride, offset)
```

### Parameter

- `index`
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Index des zu modifizierenden Vertex-Attributs angibt.
- `size`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Anzahl der Komponenten pro Vertex-Attribut angibt. Muss 1, 2, 3 oder 4 sein.
- `type`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Datentyp jeder Komponente im Array angibt. Mögliche Werte:

    - `gl.BYTE`: signierte 8-Bit-Ganzzahl, mit Werten im Bereich [-128, 127]
    - `gl.SHORT`: signierte 16-Bit-Ganzzahl, mit Werten im Bereich [-32768, 32767]
    - `gl.UNSIGNED_BYTE`: unsignierte 8-Bit-Ganzzahl, mit Werten im Bereich [0, 255]
    - `gl.UNSIGNED_SHORT`: unsignierte 16-Bit-Ganzzahl, mit Werten im Bereich [0, 65535]
    - `gl.FLOAT`: 32-Bit IEEE-Fließkommazahl

    Wenn Sie einen {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} verwenden, sind zusätzlich folgende Werte verfügbar:

    - `gl.HALF_FLOAT`: 16-Bit IEEE-Fließkommazahl
    - `gl.INT`: 32-Bit signierte binäre Ganzzahl
    - `gl.UNSIGNED_INT`: 32-Bit unsignierte binäre Ganzzahl
    - `gl.INT_2_10_10_10_REV`: 32-Bit signierte Ganzzahl mit Werten im Bereich [-512, 511]
    - `gl.UNSIGNED_INT_2_10_10_10_REV`: 32-Bit unsignierte Ganzzahl mit Werten im Bereich [0, 1023]

- `normalized`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob ganzzahlige Datenwerte normalisiert werden sollen, wenn sie in Fließkommazahlen umgewandelt werden.

    - Für Typen `gl.BYTE` und `gl.SHORT`, normalisiert die Werte auf [-1, 1], wenn wahr.
    - Für Typen `gl.UNSIGNED_BYTE` und `gl.UNSIGNED_SHORT`, normalisiert die Werte auf [0, 1], wenn wahr.
    - Für Typen `gl.FLOAT` und `gl.HALF_FLOAT`, hat dieser Parameter keine Wirkung.

- `stride`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, der den Abstand in Bytes zwischen dem Beginn aufeinanderfolgender Vertex-Attribute angibt. Darf nicht negativ oder größer als 255 sein. Wenn `stride` 0 ist, wird angenommen, dass das Attribut eng gepackt ist, d.h. die Attribute sind nicht verflochten, sondern jedes Attribut befindet sich in einem separaten Block und das Attribut des nächsten Vertex folgt unmittelbar dem aktuellen Vertex.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLintptr")}}, der einen Offset in Bytes der ersten Komponente im Vertex-Attribut-Array angibt. Muss ein Vielfaches der Byte-Länge von `type` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird geworfen, wenn `stride` oder `offset` negativ sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird geworfen, wenn `stride` und `offset` keine Vielfachen der Größe des Datentyps sind.
- Ein `gl.INVALID_OPERATION`-Fehler wird geworfen, wenn kein WebGLBuffer an das ARRAY_BUFFER-Ziel gebunden ist.
- Wenn Sie einen {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} verwenden, wird ein `gl.INVALID_OPERATION`-Fehler geworfen, wenn dieses Vertex-Attribut im Vertex-Shader als Ganzzahl definiert ist (z.B. `uvec4` oder `ivec4` anstelle von `vec4`).

## Beschreibung

Nehmen wir an, wir möchten einige 3D-Geometrien rendern, und dafür müssen wir unsere Vertices dem Vertex-Shader bereitstellen. Jedes Vertex hat einige Attribute, wie Position, Normalenvektor oder Texturkoordinate, die in einem {{jsxref("ArrayBuffer")}} definiert sind und dem Vertex-Puffer-Objekt (VBO) bereitgestellt werden. Zuerst müssen wir den {{domxref("WebGLBuffer")}} binden, den wir verwenden möchten, um `gl.ARRAY_BUFFER`, dann spezifizieren wir mit dieser Methode, `gl.vertexAttribPointer()`, in welcher Reihenfolge die Attribute gespeichert sind und welchen Datentyp sie haben. Zusätzlich müssen wir den `stride`, die Gesamtbyte-Länge aller Attribute für ein Vertex, hinzufügen. Außerdem müssen wir {{domxref("WebGLRenderingContext/enableVertexAttribArray", "gl.enableVertexAttribArray()")}} aufrufen, um WebGL mitzuteilen, dass dieses Attribut mit Daten aus unserem Array-Buffer gefüllt werden soll.

In der Regel ist Ihre 3D-Geometrie bereits in einem bestimmten binären Format, sodass Sie die Spezifikation dieses speziellen Formats lesen müssen, um das Speicherschema zu verstehen. Wenn Sie jedoch das Format selbst entwerfen oder Ihre Geometrie sich in Textdateien (wie [Wavefront .obj-Dateien](https://en.wikipedia.org/wiki/Wavefront_.obj_file)) befindet und zur Laufzeit in einen `ArrayBuffer` konvertiert werden muss, haben Sie freie Wahl, wie Sie den Speicher strukturieren. Für höchste Leistung [verflechten](https://en.wikipedia.org/wiki/Interleaved_memory) Sie die Attribute und verwenden den kleinsten Datentyp, der Ihre Geometrie dennoch genau darstellt.

Die maximale Anzahl von Vertex-Attributen hängt von der Grafikkarte ab, und Sie können `gl.getParameter(gl.MAX_VERTEX_ATTRIBS)` aufrufen, um diesen Wert zu erhalten. Auf High-End-Grafikkarten ist das Maximum 16, auf Low-End-Grafikkarten wird der Wert niedriger sein.

### Attributindex

Für jedes Attribut müssen Sie seinen Index angeben. Dies ist unabhängig von der Position innerhalb des Array-Buffers, sodass Ihre Attribute in einer anderen Reihenfolge gesendet werden können, als sie im Array-Buffer gespeichert sind. Sie haben zwei Optionen:

- Entweder Sie geben den Index selbst an. In diesem Fall rufen Sie {{domxref("WebGLRenderingContext.bindAttribLocation()", "gl.bindAttribLocation()")}} auf, um ein benanntes Attribut aus dem Vertex-Shader mit dem von Ihnen gewünschten Index zu verbinden. Dies muss erfolgen, bevor {{domxref("WebGLRenderingContext.linkProgram()", "gl.linkProgram()")}} aufgerufen wird. Dann können Sie diesen gleichen Index `gl.vertexAttribPointer()` bereitstellen.
- Alternativ verwenden Sie den Index, der von der Grafikkarte bei der Kompilierung des Vertex-Shaders zugewiesen wird. Abhängig von der Grafikkarte wird der Index unterschiedlich sein, sodass Sie {{domxref("WebGLRenderingContext.getAttribLocation()", "gl.getAttribLocation()")}} aufrufen müssen, um den Index herauszufinden, und dann diesen Index `gl.vertexAttribPointer()` bereitstellen. Wenn Sie WebGL 2 verwenden, können Sie den Index selbst im Vertex-Shader-Code angeben und den von der Grafikkarte verwendeten Standard überschreiben, z.B. `layout(location = 3) in vec4 position;` würde das `"position"`-Attribut auf Index 3 setzen.

### Ganze Zahl Attribute

Während der `ArrayBuffer` sowohl mit Ganzzahlen als auch mit Fließkommazahlen gefüllt werden kann, werden die Attribute immer in einen Fließkommawert umgewandelt, wenn sie an den Vertex-Shader gesendet werden. Wenn Sie Ganzzahlen in Ihrem Vertex-Shader-Code verwenden müssen, können Sie entweder den Fließkommawert im Vertex-Shader zurück in eine Ganzzahl casten (z.B. `(int) floatNumber`), oder {{domxref("WebGL2RenderingContext.vertexAttribIPointer()", "gl.vertexAttribIPointer()")}} aus WebGL2 verwenden.

### Standard Attributwerte

Der Vertex-Shader-Code kann eine Anzahl von Attributen enthalten, aber wir müssen nicht die Werte für jedes Attribut angeben. Stattdessen können wir einen Standardwert bereitstellen, der für alle Vertices identisch ist. Wir können {{domxref("WebGLRenderingContext.disableVertexAttribArray()", "gl.disableVertexAttribArray()")}} aufrufen, um WebGL mitzuteilen, den Standardwert zu verwenden, während {{domxref("WebGLRenderingContext.enableVertexAttribArray()", "gl.enableVertexAttribArray()")}} die Werte aus dem Array-Buffer liest, wie mit `gl.vertexAttribPointer()` angegeben.

Ähnlich verhält es sich, wenn unser Vertex-Shader z.B. ein 4-Komponenten-Attribut mit `vec4` erwartet, wir jedoch in unserem `gl.vertexAttribPointer()`-Aufruf die `size` auf `2` gesetzt haben, dann wird WebGL die ersten zwei Komponenten basierend auf dem Array-Buffer setzen, während die dritte und vierte Komponente aus dem Standardwert genommen werden.

Der Standardwert ist `vec4(0.0, 0.0, 0.0, 1.0)` standardmäßig, aber wir können einen anderen Standardwert mit {{domxref("WebGLRenderingContext.vertexAttrib()", "gl.vertexAttrib[1234]f[v]()")}} angeben.

Zum Beispiel kann Ihr Vertex-Shader ein Positions- und ein Farb-Attribut verwenden. Die meisten Netze haben die Farbe auf der Ebene jedes Vertexes spezifiziert, aber einige Netze sind von einem einheitlichen Farbton. Für diese Netze ist es nicht notwendig, die gleiche Farbe für jeden Vertex in den Array-Buffer zu platzieren, sodass Sie `gl.vertexAttrib4fv()` verwenden können, um eine konstante Farbe zu setzen.

### Aktuelle Einstellungen abfragen

Sie können {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} und {{domxref("WebGLRenderingContext.getVertexAttribOffset()", "gl.getVertexAttribOffset()")}} aufrufen, um die aktuellen Parameter für ein Attribut zu erhalten, z.B. den Datentyp oder ob das Attribut normalisiert werden soll. Beachten Sie, dass diese WebGL-Funktionen eine langsame Leistung haben und es besser ist, den Status innerhalb Ihrer JavaScript-Anwendung zu speichern. Diese Funktionen sind jedoch hervorragend zum Debuggen eines WebGL-Kontextes, ohne den Anwendungscode zu berühren.

## Beispiele

Dieses Beispiel zeigt, wie man seine Vertex-Attribute an das Shader-Programm sendet. Wir verwenden eine imaginäre Datenstruktur, bei der die Attribute jedes Vertexes verflochten mit einer Länge von 20 Bytes pro Vertex gespeichert werden:

1. **Position:** Wir müssen die X-, Y- und Z-Koordinaten speichern. Für höchste Präzision verwenden wir 32-Bit-Fließkommazahlen; insgesamt werden dabei 12 Bytes verwendet.
2. **Normalenvektor:** Wir müssen die X-, Y- und Z-Komponenten des Normalenvektors speichern, aber da die Präzision nicht so wichtig ist, verwenden wir 8-Bit-signierte Ganzzahlen. Für höhere Leistung richten wir die Daten auf 32 Bits aus, indem wir auch eine vierte, nullwertige Komponente speichern, was die Gesamtgröße auf 4 Bytes erhöht. Außerdem teilen wir WebGL mit, die Werte zu normalisieren, weil unsere Normalen immer im Bereich [-1, 1] liegen.
3. **Texturkoordinate:** Wir müssen die U- und V-Koordinaten speichern; dafür bieten 16-Bit-ungezeichnete Ganzzahlen eine ausreichende Genauigkeit, die Gesamtgröße beträgt 4 Bytes. Wir teilen WebGL auch mit, die Werte auf [0, 1] zu normalisieren.

Zum Beispiel wird der folgende Vertex:

```json
{
  "position": [1.0, 2.0, 1.5],
  "normal": [1.0, 0.0, 0.0],
  "texCoord": [0.5, 0.25]
}
```

im Array-Buffer wie folgt gespeichert:

![WebGL Array-Buffer-Inhalt](webgl-array-buffer.svg)

### Den Array-Buffer erstellen

Zuerst erstellen wir den Array-Buffer dynamisch aus JSON-Daten unter Verwendung eines {{jsxref("DataView")}}. Beachten Sie die Verwendung von `true`, weil WebGL erwartet, dass unsere Daten im Little-Endian-Format sind.

```js
// Geometrie mit fetch() und Response.json() laden
const response = await fetch("assets/geometry.json");
const vertices = await response.json();

// Array-Buffer erstellen
const buffer = new ArrayBuffer(20 * vertices.length);
// Array-Buffer füllen
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

Für höhere Leistung könnten wir die vorherige JSON zu ArrayBuffer-Konvertierung auch auf der Serverseite durchführen, z.B. mit Node.js. Dann könnten wir die Binärdatei laden und sie als Array-Buffer interpretieren:

```js
const response = await fetch("assets/geometry.bin");
const buffer = await response.arrayBuffer();
```

### Array-Buffer mit WebGL verwenden

Zuerst erstellen wir ein neues Vertex Buffer Object (VBO) und versorgen es mit unserem Array-Buffer:

```js
//Array-Buffer an ein Vertex Buffer Object binden
const vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, buffer, gl.STATIC_DRAW);
```

Dann spezifizieren wir das Speicherschema des Array-Buffers, entweder indem wir den Index selbst setzen:

```js
//Layout des Buffers beschreiben:
//1. Position, nicht normalisiert
gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 20, 0);
gl.enableVertexAttribArray(0);
//2. Normalenvektor, normalisiert auf [-1, 1]
gl.vertexAttribPointer(1, 4, gl.BYTE, true, 20, 12);
gl.enableVertexAttribArray(1);
//3. Texturkoordinaten, normalisiert auf [0, 1]
gl.vertexAttribPointer(2, 2, gl.UNSIGNED_SHORT, true, 20, 16);
gl.enableVertexAttribArray(2);

//Attribute im Vertex-Shader auf die gleichen Indizes setzen
gl.bindAttribLocation(shaderProgram, 0, "position");
gl.bindAttribLocation(shaderProgram, 1, "normal");
gl.bindAttribLocation(shaderProgram, 2, "texUV");
//Da sich die Attribut-Indizes geändert haben, müssen wir den Shader neu verlinken
//Beachten Sie, dass dies alle zuvor gesetzten Uniforms zurücksetzt.
gl.linkProgram(shaderProgram);
```

Oder wir können den von der Grafikkarte bereitgestellten Index verwenden, anstatt den Index selbst zu setzen; dies vermeidet das erneute Verlinken des Shader-Programms.

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

- [Vertex Specification](https://www.khronos.org/opengl/wiki/Vertex_Specification) auf der OpenGL-Wiki
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
