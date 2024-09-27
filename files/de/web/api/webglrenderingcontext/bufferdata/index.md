---
title: "WebGLRenderingContext: bufferData() Methode"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: 35f5a02397245ab1fd778500da125883f5512b13
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bufferData()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) initialisiert und erstellt den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (target) spezifiziert. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.

- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das in den Datenspeicher kopiert wird. Wenn `null`, wird ein Datenspeicher dennoch erstellt, aber der Inhalt ist nicht initialisiert und undefiniert.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das zur Optimierung die beabsichtigte Nutzung des Datenspeichers angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung spezifiziert und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung spezifiziert und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung spezifiziert und höchstens einige Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL spezifiziert und häufig von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch Lesen von Daten aus WebGL spezifiziert und häufig von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL spezifiziert und höchstens einige Male von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL spezifiziert und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch Lesen von Daten aus WebGL spezifiziert und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL spezifiziert und höchstens einige Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY` Fehler wird ausgelöst, wenn es dem Kontext nicht gelingt, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` oder `usage` keiner der erlaubten Enums sind.

## Beispiele

### Verwendung von bufferData

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### Abrufen von Pufferinformationen

Um die aktuelle Puffernutzung und -größe zu überprüfen, verwenden Sie die Methode [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter).

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Ermitteln der Größe eines typisierten Arrays

Zur Berechnung des size-Parameters für ein typisiertes Array.

```js
const dataArray = new Float32Array([1, 2, 3, 4]);
const sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.bufferData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
