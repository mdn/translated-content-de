---
title: "WebGLRenderingContext: getExtension()-Methode"
short-title: getExtension()
slug: Web/API/WebGLRenderingContext/getExtension
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.getExtension()`**-Methode aktiviert eine
[WebGL](/de/docs/Web/API/WebGL_API)-Erweiterung.

## Syntax

```js-nolint
getExtension(name)
```

### Parameter

- `name`
  - : Ein {{jsxref("String")}} für den Namen der zu aktivierenden WebGL-Erweiterung.

### Rückgabewert

Ein WebGL-Erweiterungsobjekt oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn der Name nicht
(case-insensitive) mit einem der Strings in
[`WebGLRenderingContext.getSupportedExtensions`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions) übereinstimmt.

## Beispiele

Sobald eine WebGL-Erweiterung aktiviert ist, können Sie die Methoden, Eigenschaften oder Konstanten verwenden, die dieses Erweiterungsobjekt bereitstellt.

```js
const canvas = document.getElementById("canvas");
gl = canvas.getContext("webgl");

gl.getExtension("WEBGL_lose_context").loseContext();
```

## WebGL-Erweiterungen

Erweiterungen für die WebGL-API sind im [WebGL Extension Registry](https://registry.khronos.org/webgl/extensions/) registriert. Sie sind auch in unserem [WebGL-API-Referenz](/de/docs/Web/API/WebGL_API#extensions) aufgeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
- [webglreport.com](https://webglreport.com/)
