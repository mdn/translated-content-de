---
title: "WebGLRenderingContext: bufferData()-Methode"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bufferData()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) initialisiert und erstellt den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindepunkt (Ziel) spezifiziert. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z. B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines [WebGL 2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zur Speicherung von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das ein {{jsxref("ArrayBuffer")}} oder
    {{jsxref("SharedArrayBuffer")}} betrachtet,
    das in den Datenspeicher kopiert wird.
    Wenn `null`, wird ein Datenspeicher trotzdem erstellt, aber der Inhalt ist nicht initialisiert und undefiniert.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das beabsichtigte Verwendungsmuster des Datenspeichers für Optimierungszwecke angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung angegeben und häufig als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu angegeben und häufig als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung angegeben und höchstens einige Male als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.

    Bei Verwendung eines [WebGL 2-Kontextes](/de/docs/Web/API/WebGL2RenderingContext) stehen zusätzlich die folgenden Werte zur Verfügung:

    - `gl.STATIC_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und häufig von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu angegeben und häufig von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und höchstens einige Male von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und häufig als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu angegeben und häufig als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und höchstens einige Male als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY` Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` oder `usage` nicht einer der erlaubten Enums sind.

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

Um die aktuelle Puffernutzung und Puffergröße zu überprüfen, verwenden Sie die
[`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter)-Methode.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Berechnung der Größe eines typisierten Arrays

Um den Größenparameter für ein typisiertes Array zu berechnen.

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
