---
title: WebGLActiveInfo
slug: Web/API/WebGLActiveInfo
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **WebGLActiveInfo**-Schnittstelle ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt die Informationen dar, die durch Aufruf der Methoden {{domxref("WebGLRenderingContext.getActiveAttrib()")}} und {{domxref("WebGLRenderingContext.getActiveUniform()")}} zurückgegeben werden.

## Instanz-Eigenschaften

- {{domxref("WebGLActiveInfo.name")}}
  - : Der schreibgeschützte Name der angeforderten Variablen.
- {{domxref("WebGLActiveInfo.size")}}
  - : Die schreibgeschützte Größe der angeforderten Variablen.
- {{domxref("WebGLActiveInfo.type")}}
  - : Der schreibgeschützte Typ der angeforderten Variablen.

## Beispiele

Ein `WebGLActiveInfo`-Objekt wird zurückgegeben durch:

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}} oder
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getActiveAttrib()")}}
- {{domxref("WebGLRenderingContext.getActiveUniform()")}}
