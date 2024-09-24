---
title: "WebGL2RenderingContext: bufferData()-Methode"
short-title: bufferData()
slug: Web/API/WebGL2RenderingContext/bufferData
l10n:
  sourceCommit: 35f5a02397245ab1fd778500da125883f5512b13
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.bufferData()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher des Pufferobjekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der den Bindungspunkt (Ziel) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B.
        Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zum anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zum anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zur Speicherung von Uniform-Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransferoperationen verwendet wird.

- `size` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLsizeiptr")}}, das die Größe in Bytes des Datenspeichers des Pufferobjekts
    festlegt.
    Eines von `size` oder `srcData` muss bereitgestellt werden.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das in den Datenspeicher kopiert wird.
    Wenn `null`, wird dennoch ein Datenspeicher erstellt, der Inhalt ist jedoch nicht initialisiert und undefiniert.
    Eines von `size` oder `srcData` muss bereitgestellt werden.
- `usage`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das beabsichtigte Verwendungsmuster des Datenspeichers
    zu Optimierungszwecken angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung
        angegeben werden und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung
        neu spezifiziert und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung
        angegeben und höchstens wenige Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch Lesen von WebGL
        spezifiziert und viele Male von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch Lesen von
        WebGL neu spezifiziert und viele Male von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch Lesen von
        WebGL spezifiziert und höchstens wenige Male von der Anwendung abgefragt werden
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch Lesen von
        WebGL spezifiziert und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch Lesen von
        WebGL neu spezifiziert und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch Lesen von
        WebGL spezifiziert und höchstens wenige Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, der den Elementindex-Offset angibt, ab dem die Pufferdaten gelesen werden sollen.
    Nur erlaubt, wenn `srcData` bereitgestellt wird.
- `length` {{optional_inline}}
  - : Ein {{domxref("WebGL_API/Types", "GLuint")}}, standardmäßig 0.
    Nur erlaubt, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist,
  einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder
  `usage` nicht einer der erlaubten Enums sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bufferData()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- Andere Puffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
