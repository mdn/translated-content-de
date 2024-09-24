---
title: "WebGL2RenderingContext: isQuery()-Methode"
short-title: isQuery()
slug: Web/API/WebGL2RenderingContext/isQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLQuery")}}-Objekt ist.

## Syntax

```js-nolint
isQuery(query)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, das geprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob das gegebene Objekt ein gültiges {{domxref("WebGLQuery")}}-Objekt (`true`) ist oder nicht (`false`).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();

// …

gl.isQuery(query);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLQuery")}}
