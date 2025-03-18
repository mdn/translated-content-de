---
title: "WebGLRenderingContext: bufferData() Methode"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: dccadcf38199191d7e26cd2e060e40bb86259efa
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bufferData()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) initialisiert und erstellt den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunktattribute enthält, wie z.B.
        Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer für das Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das ein {{jsxref("ArrayBuffer")}} oder
    {{jsxref("SharedArrayBuffer")}} betrachtet, der in den Datenspeicher kopiert wird.
    Wenn `null`, wird trotzdem ein Datenspeicher erstellt, aber der Inhalt ist nicht initialisiert und undefiniert.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das beabsichtigte Nutzungsmuster des Datenspeichers
    für Optimierungszwecke angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung spezifiziert und vielfach als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu spezifiziert und vielfach als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung spezifiziert und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

    Bei Verwendung eines [WebGL 2 Kontextes](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:

    - `gl.STATIC_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten von WebGL spezifiziert und vielfach durch die Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten von WebGL neu spezifiziert und vielfach durch die Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten von WebGL spezifiziert und höchstens ein paar Mal durch die Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten von WebGL spezifiziert und vielfach als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten von WebGL neu spezifiziert und vielfach als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten von WebGL spezifiziert und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY` Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der gegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` oder `usage` nicht einer der erlaubten Enum-Werte sind.

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
[`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter) Methode.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Größe eines typisierten Arrays ermitteln

Um den size-Parameter für ein typisiertes Array zu berechnen.

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
