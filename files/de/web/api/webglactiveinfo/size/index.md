---
title: "WebGLActiveInfo: size-Eigenschaft"
short-title: Größe
slug: Web/API/WebGLActiveInfo/size
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLActiveInfo.size`** Eigenschaft ist eine {{jsxref("Number")}} und repräsentiert die Größe der angeforderten Daten, die durch Aufrufen der Methoden {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} oder {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} zurückgegeben werden.

## Beispiele

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.size;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.size;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLActiveInfo")}}
