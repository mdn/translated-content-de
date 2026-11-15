---
title: "WebGLRenderingContext: Methode bufferData()"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.bufferData()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher eines Buffer-Objekts.

## Syntax

```js-nolint
bufferData(target, size, usage)
bufferData(target, srcData, usage)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Bindungspunkt (das Ziel) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Buffer mit Vertex-Attributen, beispielsweise Vertex-Koordinaten, Texturkoordinaten oder Vertex-Farbdaten.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Buffer für Elementindizes.

    Bei Verwendung eines [WebGL-2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.COPY_READ_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt in ein anderes.
    - `gl.COPY_WRITE_BUFFER`
      - : Buffer zum Kopieren von einem Buffer-Objekt in ein anderes.
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : Buffer für Transform-Feedback-Operationen.
    - `gl.UNIFORM_BUFFER`
      - : Buffer zum Speichern von Uniform-Blöcken.
    - `gl.PIXEL_PACK_BUFFER`
      - : Buffer für Pixelübertragungen.
    - `gl.PIXEL_UNPACK_BUFFER`
      - : Buffer für Pixelübertragungen.

- `size`
  - : Ein [`GLsizeiptr`](/de/docs/Web/API/WebGL_API/Types), das die Größe des Datenspeichers des Buffer-Objekts in Byte festlegt. Der Datenspeicher wird mit Nullen initialisiert.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}} mit einer Ansicht auf einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}}, dessen Daten in den Datenspeicher kopiert werden.
- `usage`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das vorgesehene Nutzungsmuster des Datenspeichers für Optimierungszwecke angibt. Mögliche Werte:
    - `gl.STATIC_DRAW`
      - : Der Inhalt wird von der Anwendung einmal festgelegt und häufig als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.
    - `gl.DYNAMIC_DRAW`
      - : Der Inhalt wird von der Anwendung wiederholt neu festgelegt und häufig als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.
    - `gl.STREAM_DRAW`
      - : Der Inhalt wird von der Anwendung einmal festgelegt und höchstens einige Male als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.

    Bei Verwendung eines [WebGL-2-Kontexts](/de/docs/Web/API/WebGL2RenderingContext) sind zusätzlich folgende Werte verfügbar:
    - `gl.STATIC_READ`
      - : Der Inhalt wird einmal durch das Lesen von Daten aus WebGL festgelegt und häufig von der Anwendung abgefragt.
    - `gl.DYNAMIC_READ`
      - : Der Inhalt wird wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und häufig von der Anwendung abgefragt.
    - `gl.STREAM_READ`
      - : Der Inhalt wird einmal durch das Lesen von Daten aus WebGL festgelegt und höchstens einige Male von der Anwendung abgefragt.
    - `gl.STATIC_COPY`
      - : Der Inhalt wird einmal durch das Lesen von Daten aus WebGL festgelegt und häufig als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.
    - `gl.DYNAMIC_COPY`
      - : Der Inhalt wird wiederholt durch das Lesen von Daten aus WebGL neu festgelegt und häufig als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.
    - `gl.STREAM_COPY`
      - : Der Inhalt wird einmal durch das Lesen von Daten aus WebGL festgelegt und höchstens einige Male als Quelle für WebGL-Zeichenbefehle und Befehle zur Bildspezifikation verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.OUT_OF_MEMORY`-Fehler wird ausgelöst, wenn der Kontext keinen Datenspeicher mit der angegebenen `size` erstellen kann.
- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn `size` negativ ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` oder `usage` keiner der zulässigen Enum-Werte ist.

## Beispiele

### bufferData verwenden

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### Buffer-Informationen abrufen

Um die aktuelle Nutzung und Größe des Buffers zu überprüfen, verwenden Sie die Methode [`WebGLRenderingContext.getBufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getBufferParameter).

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### Größe eines Typed Arrays ermitteln

So berechnen Sie den Parameter `size` für ein Typed Array.

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
- Weitere Buffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
