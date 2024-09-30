---
title: "WebGLActiveInfo: type Eigenschaft"
short-title: type
slug: Web/API/WebGLActiveInfo/type
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die schreibgeschützte **`WebGLActiveInfo.type`**-Eigenschaft repräsentiert den Typ der angeforderten Daten, die durch Aufrufen der Methoden [`getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) oder [`getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

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
