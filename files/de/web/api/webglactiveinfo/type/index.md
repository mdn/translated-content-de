---
title: "WebGLActiveInfo: type-Eigenschaft"
short-title: type
slug: Web/API/WebGLActiveInfo/type
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLActiveInfo.type`**-Eigenschaft stellt den Typ der angeforderten Daten dar, die durch Aufrufen der Methoden [`getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) oder [`getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

## Beispiele

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.type;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.type;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
