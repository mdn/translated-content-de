---
title: "WebGL2RenderingContext: createQuery()-Methode"
short-title: createQuery()
slug: Web/API/WebGL2RenderingContext/createQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.createQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert
{{domxref("WebGLQuery")}}-Objekte, die Möglichkeiten bieten, asynchron Informationen abzufragen.

## Syntax

```js-nolint
createQuery()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLQuery")}}-Objekt.

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
`WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLQuery")}}
