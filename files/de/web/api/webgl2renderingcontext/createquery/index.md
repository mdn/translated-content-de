---
title: "WebGL2RenderingContext: Methode createQuery()"
short-title: createQuery()
slug: Web/API/WebGL2RenderingContext/createQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.createQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekte, die Möglichkeiten bieten, asynchron Informationen abzufragen.

## Syntax

```js-nolint
createQuery()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein.
`WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
