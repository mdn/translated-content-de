---
title: "WebGL2RenderingContext: deleteQuery()-Methode"
short-title: deleteQuery()
slug: Web/API/WebGL2RenderingContext/deleteQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.deleteQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes {{domxref("WebGLQuery")}}-Objekt.

## Syntax

```js-nolint
deleteQuery(query)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
`WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();

// …

gl.deleteQuery(query);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("WebGLQuery")}}
