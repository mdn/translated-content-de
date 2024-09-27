---
title: "WebGL2RenderingContext: bufferData() Methode"
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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (Target) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunktattribute enthält, wie z.B.
        Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zum anderen.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt zum anderen.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von gleichartigen Blöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixeltransfer-Operationen verwendet wird.

- `size` {{optional_inline}}
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
    Eines von `size` und `srcData` muss angegeben werden.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    das in den Datenspeicher kopiert wird.
    Wenn `null`, wird ein Datenspeicher dennoch erstellt, aber der Inhalt ist nicht initialisiert und undefiniert.
    Eines von `size` und `srcData` muss angegeben werden.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das beabsichtigte Verwendungsmuster des Datenspeichers zu Optimierungszwecken angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmalig durch die Anwendung festgelegt
        und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt durch die Anwendung neu festgelegt
        und häufig als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmalig durch die Anwendung festgelegt
        und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL festgelegt werden und viele Male
        von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt
        und viele Male von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL festgelegt
        und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL festgelegt
        und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt
        und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmalig durch das Lesen von Daten aus WebGL festgelegt
        und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), das den Elementindex-Offset angibt, ab dem der Puffer gelesen werden soll.
    Nur zulässig, wenn `srcData` angegeben ist.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), standardmäßig 0.
    Nur zulässig, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist, einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder
  `usage` nicht einer der erlaubten Enums ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
