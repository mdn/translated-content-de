---
title: "WebGLRenderingContext: Methode bufferSubData()"
short-title: bufferSubData()
slug: Web/API/WebGLRenderingContext/bufferSubData
l10n:
  sourceCommit: 73e3807a038339973e3cd1ea0dbacd3a4431a2fb
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.bufferSubData()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) aktualisiert einen Teil der Datenablage eines Pufferobjekts.

## Syntax

```js-nolint
bufferSubData(target, offset)
bufferSubData(target, offset, srcData)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) angibt. Mögliche Werte:
    - `gl.ARRAY_BUFFER`
      - : Puffer, der Vertex-Attribute enthält, wie z.B. Vertex-Koordinaten, Texturkoordinatendaten oder Vertex-Farbwerte.
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : Puffer, der für Elementindizes verwendet wird.

- `offset`
  - : Ein [`GLintptr`](/de/docs/Web/API/WebGL_API/Types), der einen Offset in Bytes angibt, ab dem der Datenaustausch beginnt.
- `srcData` {{optional_inline}}
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der/die einen {{jsxref("ArrayBuffer")}} oder {{jsxref("SharedArrayBuffer")}} ansieht, der in die Datenablage kopiert wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Ein `gl.INVALID_VALUE`-Fehler wird ausgelöst, wenn die Daten über das Ende des Puffers hinaus geschrieben würden oder wenn `data` `null` ist.
- Ein `gl.INVALID_ENUM`-Fehler wird ausgelöst, wenn `target` nicht einer der erlaubten Enums ist.

## Beispiele

### Verwendung von `bufferSubData`

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
const data = new Float32Array([1, 2, 3, 4]);
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
gl.bufferSubData(gl.ARRAY_BUFFER, 512, data);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.bufferSubData()`](/de/docs/Web/API/WebGL2RenderingContext/bufferSubData)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.bufferData()`](/de/docs/Web/API/WebGLRenderingContext/bufferData)
- Andere Puffer: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
