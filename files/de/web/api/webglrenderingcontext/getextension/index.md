---
title: "WebGLRenderingContext: getExtension()-Methode"
short-title: getExtension()
slug: Web/API/WebGLRenderingContext/getExtension
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.getExtension()`**-Methode ermöglicht eine
[WebGL](/de/docs/Web/API/WebGL_API)-Erweiterung.

## Syntax

```js-nolint
getExtension(name)
```

### Parameter

- `name`
  - : Ein {{jsxref("String")}} für den Namen der zu aktivierenden WebGL-Erweiterung.

### Rückgabewert

Ein WebGL-Erweiterungsobjekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Name
(fallunabhängig) nicht mit einem der Zeichenfolgen in
{{domxref("WebGLRenderingContext.getSupportedExtensions")}} übereinstimmt.

## Beispiele

Sobald eine WebGL-Erweiterung aktiviert ist, können Sie die Methoden, Eigenschaften oder
Konstanten verwenden, die dieses Erweiterungsobjekt bereitstellt.

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

gl.getExtension("WEBGL_lose_context").loseContext();
```

## WebGL-Erweiterungen

Erweiterungen für die WebGL-API sind im [WebGL-Erweiterungsregister](https://registry.khronos.org/webgl/extensions/) registriert. Sie sind auch
[hier](/de/docs/Web/API/WebGL_API#extensions) aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- [webglreport.com](https://webglreport.com/)