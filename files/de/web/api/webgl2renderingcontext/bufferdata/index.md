---
title: "WebGL2RenderingContext: Methode bufferData()"
short-title: bufferData()
slug: Web/API/WebGL2RenderingContext/bufferData
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
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

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (target) angibt. Mögliche Werte:

    - `gl.ARRAY_BUFFER`
      - : Puffer, der Scheitelpunkteigenschaften enthält, wie z.B.
        Scheitelpunktkoordinaten, Texturkoordinatendaten oder Scheitelpunktfarbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.
    - `gl.COPY_READ_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Puffer zum Kopieren von einem Pufferobjekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Puffer für Transformations-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Puffer, der zum Speichern von Uniformblöcken verwendet wird.
    - `gl.PIXEL_PACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Puffer, der für Pixelübertragungsoperationen verwendet wird.

- `size` {{optional_inline}}
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Größe in Bytes des Datenspeichers des Pufferobjekts festlegt.
    Einer von `size` und `srcData` muss bereitgestellt werden.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}},
    der in den Datenspeicher kopiert wird.
    Wenn `null`, wird dennoch ein Datenspeicher erstellt, aber der Inhalt ist uninitialisiert und undefiniert.
    Einer von `size` und `srcData` muss bereitgestellt werden.
- `usage`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das beabsichtigte Nutzungsmuster des Datenspeichers für Optimierungszwecke angibt. Mögliche Werte:

    - `gl.STATIC_DRAW`
      - : Der Inhalt soll einmal von der Anwendung festgelegt werden und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll wiederholt von der Anwendung neu festgelegt werden und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll einmal von der Anwendung festgelegt werden und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL festgelegt werden und viele Male von der Anwendung abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch Lesen von Daten aus WebGL neu festgelegt und viele Male von der Anwendung abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL festgelegt und höchstens ein paar Mal von der Anwendung abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL festgelegt und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch Lesen von Daten aus WebGL neu festgelegt und viele Male als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch Lesen von Daten aus WebGL festgelegt und höchstens ein paar Mal als Quelle für WebGL-Zeichen- und Bildspezifikationsbefehle verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex-Offset angibt, wo das Lesen des Puffers begonnen werden soll.
    Nur erlaubt, wenn `srcData` bereitgestellt wird.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der standardmäßig 0 ist.
    Nur erlaubt, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY` Fehler wird ausgelöst, wenn der Kontext nicht in der Lage ist,
  einen Datenspeicher mit der angegebenen `size` zu erstellen.
- Ein `gl.INVALID_VALUE` Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM` Fehler wird ausgelöst, wenn `target` oder
  `usage` nicht einer der erlaubten Aufzählungstypen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
