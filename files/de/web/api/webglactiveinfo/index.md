---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **WebGLActiveInfo**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Informationen, die durch Aufrufen der Methoden [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) und [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

## Instanz-Eigenschaften

- [`WebGLActiveInfo.name`](/de/docs/Web/API/WebGLActiveInfo/name)
  - : Der schreibgeschützte Name der angeforderten Variablen.
- [`WebGLActiveInfo.size`](/de/docs/Web/API/WebGLActiveInfo/size)
  - : Die schreibgeschützte Größe der angeforderten Variablen.
- [`WebGLActiveInfo.type`](/de/docs/Web/API/WebGLActiveInfo/type)
  - : Der schreibgeschützte Typ der angeforderten Variablen.

## Beispiele

Ein `WebGLActiveInfo`-Objekt wird zurückgegeben durch:

- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) oder
- [`WebGL2RenderingContext.getTransformFeedbackVarying()`](/de/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib)
- [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform)
