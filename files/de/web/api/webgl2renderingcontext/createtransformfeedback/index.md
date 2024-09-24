---
title: "WebGL2RenderingContext: Methode createTransformFeedback()"
short-title: createTransformFeedback()
slug: Web/API/WebGL2RenderingContext/createTransformFeedback
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.createTransformFeedback()`**
Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und
initialisiert {{domxref("WebGLTransformFeedback")}}-Objekte.

## Syntax

```js-nolint
createTransformFeedback()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLTransformFeedback")}}-Objekt.

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein.
`WebGLTransformFeedback`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const transformFeedback = gl.createTransformFeedback();
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLTransformFeedback")}}
