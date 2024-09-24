---
title: "WebGLActiveInfo: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/WebGLActiveInfo/type
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLActiveInfo.type`**-Eigenschaft repräsentiert den Typ der angeforderten Daten, die durch Aufruf der Methoden {{domxref("WebGLRenderingContext.getActiveAttrib()", "getActiveAttrib()")}} oder {{domxref("WebGLRenderingContext.getActiveUniform()", "getActiveUniform()")}} zurückgegeben werden.

## Beispiele

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.type;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.type;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLActiveInfo")}}
