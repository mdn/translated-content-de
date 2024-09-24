---
title: "WebGLRenderingContext: Methode bufferData()"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: 35f5a02397245ab1fd778500da125883f5512b13
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.bufferData()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) initialisiert und erstellt den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindepunkt (Ziel) angibt. Mögliche Werte sind:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z. B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zum Speichern von Uniformblöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.

- `size`
  - : Ein {{domxref("WebGL_API/Types", "GLsizeiptr")}}, der die Größe in Bytes des Datenspeichers des Pufferobjekts
    festlegt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das in den Datenspeicher kopiert wird.
    Wenn `null`, wird zwar ein Datenspeicher erstellt, aber der Inhalt ist uninitialisiert und undefiniert.
- `usage`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das beabsichtigte Nutzungsmuster des Datenspeichers
    zu Optimierungszwecken angibt. Mögliche Werte sind:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung angegeben und vielfach als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu festgelegt und vielfach als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmalig von der Anwendung angegeben und höchstens ein paar Mal als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

    - `gl.STATIC_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und oftmals von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und oftmals von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und vielfach als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und vielfach als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL angegeben und höchstens ein paar Mal als Quelle für WebGL-Zeichnungs- und Bildspezifikationsbefehle verwendet werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder `usage` nicht einer der zulässigen Enumerationen sind.

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

Um die aktuelle Pufferbenutzung und -größe zu prüfen, verwenden Sie die Methode {{domxref("WebGLRenderingContext.getBufferParameter()")}}.

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Größe eines typisierten Arrays ermitteln

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

- {{domxref("WebGL2RenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
