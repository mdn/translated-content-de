---
title: "WebGLActiveInfo: name-Eigenschaft"
short-title: name
slug: Web/API/WebGLActiveInfo/name
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

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
