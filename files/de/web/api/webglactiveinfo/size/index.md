---
title: "WebGLActiveInfo: size-Eigenschaft"
short-title: size
slug: Web/API/WebGLActiveInfo/size
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLActiveInfo.size`**-Eigenschaft ist eine {{jsxref("Number")}}, die die Größe der angeforderten Daten darstellt, die durch den Aufruf der Methoden [`getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) oder [`getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben wird.

## Beispiele

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.size;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.size;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
