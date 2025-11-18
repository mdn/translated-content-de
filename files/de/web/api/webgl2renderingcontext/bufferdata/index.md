---
title: "WebGL2RenderingContext: bufferData() Methode"
short-title: bufferData()
slug: Web/API/WebGL2RenderingContext/bufferData
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.bufferData()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z. B.
        Vertexkoordinaten, Texturkoordinatendaten oder Vertexfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt auf ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt auf ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer zum Speichern von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer für Pixelübertragungsoperationen.

- `size` {{optional_inline}}
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Größe des Datenspeichers des Pufferobjekts in Bytes festlegt. Eines von `size` und `srcData` muss angegeben werden.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das ein {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ansieht, das in den Datenspeicher kopiert wird. Wenn `null`, wird trotzdem ein Datenspeicher erstellt, dessen Inhalt jedoch nicht initialisiert und undefiniert ist. Eines von `size` und `srcData` muss angegeben werden.
- `usage`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das für die beabsichtigte Nutzungsmuster des Datenspeichers zur Optimierung angegeben wird. Mögliche Werte:
    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung spezifiziert werden und wird mehrmals als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll von der Anwendung wiederholt neu spezifiziert und oft als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung spezifiziert und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL spezifiziert und von der Anwendung öfter abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll durch wiederholtes Lesen von Daten aus WebGL neu spezifiziert und oft von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL spezifiziert und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL spezifiziert und oft als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll durch wiederholtes Lesen von Daten aus WebGL neu spezifiziert und oft als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL spezifiziert und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, ab dem der Puffer gelesen werden soll. Nur erlaubt, wenn `srcData` bereitgestellt wird.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), standardmäßig 0. Nur erlaubt, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder `usage` nicht einer der erlaubten Enums sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
