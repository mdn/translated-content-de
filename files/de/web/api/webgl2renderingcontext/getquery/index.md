---
title: "WebGL2RenderingContext: getQuery()-Methode"
short-title: getQuery()
slug: Web/API/WebGL2RenderingContext/getQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die aktuell aktive
{{domxref("WebGLQuery")}} für das `target` zurück, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Syntax

```js-nolint
getQuery(target, pname)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die bestimmten Zeichenbefehle den
        Tiefentest bestehen und wenn ja, wie viele Abtastungen bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Gleich wie oben, aber weniger
        genau und schneller.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die
        in Transformations-Feedback-Puffer geschrieben werden.

- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel des Abfrageobjekts angibt. Muss
    `gl.CURRENT_QUERY` sein.

### Rückgabewert

Ein {{domxref("WebGLQuery")}}-Objekt.

## Beispiele

```js
const currentQuery = gl.getQuery(gl.ANY_SAMPLES_PASSED, gl.CURRENT_QUERY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLQuery")}}
