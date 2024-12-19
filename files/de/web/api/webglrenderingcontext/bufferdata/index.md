---
title: "WebGLRenderingContext: Methode bufferData()"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunktattribute enthält, wie z.B. Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixeltransferoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixeltransferoperationen.

- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der in den Datenspeicher kopiert wird.
    Wenn `null`, wird trotzdem ein Datenspeicher erstellt, dessen Inhalt jedoch nicht initialisiert und undefiniert ist.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das beabsichtigte Nutzungsmuster des Datenspeichers für Optimierungszwecke angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung angegeben und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu angegeben und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung angegeben und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

    Bei Verwendung eines [WebGL 2 Kontext](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich die folgenden Werte verfügbar:

    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch Auslesen von Daten aus WebGL festgelegt und viele Male von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch Auslesen von Daten aus WebGL neu festgelegt und viele Male von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch Auslesen von Daten aus WebGL festgelegt und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch Auslesen von Daten aus WebGL festgelegt und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch Auslesen von Daten aus WebGL neu festgelegt und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch Auslesen von Daten aus WebGL festgelegt und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder `usage` nicht einer der erlaubten Enums sind.

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

Um die aktuelle Pufferverwendung und Puffergröße zu überprüfen, verwenden Sie die Methode [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter).

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Ermittlung der Größe eines typisierten Arrays

Zum Berechnen des size-Parameters für ein typisiertes Array.

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
