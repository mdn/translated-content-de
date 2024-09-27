---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **WebGLActiveInfo**-Schnittstelle ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und repräsentiert die Informationen, die durch Aufruf der Methoden [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) und [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

## Instanz-Eigenschaften

- [`WebGLActiveInfo.name`](/de/docs/Web/API/WebGLActiveInfo/name)
  - : Der schreibgeschützte Name der angeforderten Variable.
- [`WebGLActiveInfo.size`](/de/docs/Web/API/WebGLActiveInfo/size)
  - : Die schreibgeschützte Größe der angeforderten Variable.
- [`WebGLActiveInfo.type`](/de/docs/Web/API/WebGLActiveInfo/type)
  - : Der schreibgeschützte Typ der angeforderten Variable.

## Beispiele

Ein `WebGLActiveInfo`-Objekt wird zurückgegeben von:

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
