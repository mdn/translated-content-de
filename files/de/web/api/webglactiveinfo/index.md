---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Schnittstelle **`WebGLActiveInfo`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt die Informationen dar, die von den Methoden [`WebGLRenderingContext.getActiveAttrib()`](/de/docs/Web/API/WebGLRenderingContext/getActiveAttrib) und [`WebGLRenderingContext.getActiveUniform()`](/de/docs/Web/API/WebGLRenderingContext/getActiveUniform) zurückgegeben werden.

## Instanzeigenschaften

- [`WebGLActiveInfo.name`](/de/docs/Web/API/WebGLActiveInfo/name) {{ReadOnlyInline}}
  - : Der Name der angeforderten Variablen.
- [`WebGLActiveInfo.size`](/de/docs/Web/API/WebGLActiveInfo/size) {{ReadOnlyInline}}
  - : Die Größe der angeforderten Variablen.
- [`WebGLActiveInfo.type`](/de/docs/Web/API/WebGLActiveInfo/type) {{ReadOnlyInline}}
  - : Der Typ der angeforderten Variablen.

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
