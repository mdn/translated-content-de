---
title: "WebGLActiveInfo: name-Eigenschaft"
short-title: name
slug: Web/API/WebGLActiveInfo/name
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die schreibgeschützte **`WebGLActiveInfo.name`**-Eigenschaft repräsentiert den Namen der angeforderten Daten, die durch Aufrufen der Methoden [`getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) oder [`getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

## Beispiele

```js
const activeAttrib = gl.getActiveAttrib(program, index);
activeAttrib.name;

const activeUniform = gl.getActiveUniform(program, index);
activeUniform.name;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
