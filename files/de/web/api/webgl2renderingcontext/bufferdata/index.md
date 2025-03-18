---
title: "WebGL2RenderingContext: Methode bufferData()"
short-title: bufferData()
slug: Web/API/WebGL2RenderingContext/bufferData
l10n:
  sourceCommit: dccadcf38199191d7e26cd2e060e40bb86259efa
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bufferData()`** der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte sind:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute wie
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbendaten enthält.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zu einem anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von Uniformblöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `size` {{optional_inline}}
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt. Eines von `size` und `srcData` muss angegeben werden.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ansieht, die in den Datenspeicher kopiert wird. Wenn `null`, wird ein Datenspeicher trotzdem erstellt, aber der Inhalt ist nicht initialisiert und undefiniert. Eines von `size` und `srcData` muss angegeben werden.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das beabsichtige Verwendungsmuster des Datenspeichers zu Optimierungszwecken angibt. Mögliche Werte sind:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung angegeben und öfter als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu spezifiziert und öfter als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung angegeben und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch Lesen von WebGL-Daten angegeben und häufig von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch Lesen von WebGL-Daten neu spezifiziert und häufig von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch Lesen von WebGL-Daten angegeben und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch Lesen von WebGL-Daten angegeben und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch Lesen von WebGL-Daten neu spezifiziert und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch Lesen von WebGL-Daten angegeben und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, bei dem das Lesen des Puffers beginnt. Nur erlaubt, wenn `srcData` angegeben ist.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der standardmäßig auf 0 steht. Nur erlaubt, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext den Datenspeicher mit der gegebenen `size` nicht erstellen kann.
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
