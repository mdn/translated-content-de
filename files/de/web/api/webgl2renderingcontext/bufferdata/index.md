---
title: "WebGL2RenderingContext: bufferData()-Methode"
short-title: bufferData()
slug: Web/API/WebGL2RenderingContext/bufferData
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.bufferData()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher eines Buffer-Objekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Target) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Buffer mit Vertex-Attributen wie Vertex-Koordinaten, Texturkoordinaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer für Elementindizes.
    - `gl.COPY_READ_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Buffer zum Speichern von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer für Pixelübertragungsoperationen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer für Pixelübertragungsoperationen.

- `size` {{optional_inline}}
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), der die Größe des Datenspeichers des Buffer-Objekts in Byte festlegt. Entweder `size` oder `srcData` muss angegeben werden. Der Datenspeicher wird mit Nullen initialisiert.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, das bzw. die eine Sicht auf einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} bereitstellt. Die Daten werden in den Datenspeicher kopiert. Entweder `size` oder `srcData` muss angegeben werden.
- `usage`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das vorgesehene Nutzungsmuster des Datenspeichers zu Optimierungszwecken angibt. Mögliche Werte:
    - `gl.STATIC_DRAW`
      - : Der Inhalt soll von der Anwendung einmal festgelegt und vielfach als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt soll von der Anwendung wiederholt neu festgelegt und vielfach als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.
    - `gl.STREAM_DRAW`
      - : Der Inhalt soll von der Anwendung einmal festgelegt und höchstens einige Male als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.
    - `gl.STATIC_READ`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL festgelegt und von der Anwendung vielfach abgefragt werden.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und von der Anwendung vielfach abgefragt werden.
    - `gl.STREAM_READ`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL festgelegt und von der Anwendung höchstens einige Male abgefragt werden.
    - `gl.STATIC_COPY`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL festgelegt und vielfach als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt soll wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und vielfach als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.
    - `gl.STREAM_COPY`
      - : Der Inhalt soll einmal durch das Lesen von Daten aus WebGL festgelegt und höchstens einige Male als Quelle für WebGL-Zeichenbefehle und Befehle zur Bilddefinition verwendet werden.

- `srcOffset` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types), der den Elementindex angibt, ab dem der Buffer gelesen wird. Nur zulässig, wenn `srcData` angegeben ist.
- `length` {{optional_inline}}
  - : Ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) mit dem Standardwert 0. Nur zulässig, wenn `srcOffset` angegeben ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext keinen Datenspeicher mit der angegebenen `size` erstellen kann.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder `usage` keiner der zulässigen Enum-Werte ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferSubData()`](/de/docs/Web/API/WebGLRenderingContext/bufferSubData)
- Weitere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
