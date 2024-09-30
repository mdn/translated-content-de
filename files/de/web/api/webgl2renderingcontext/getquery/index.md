---
title: "WebGL2RenderingContext: getQuery() Methode"
short-title: getQuery()
slug: Web/API/WebGL2RenderingContext/getQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getQuery()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die aktuell aktive [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) für das `target` oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

## Syntax

```js-nolint
getQuery(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen prüfen, ob ein Objekt sichtbar ist (ob die eingeschlossenen Zeichnungsbefehle den Tiefentest bestehen und wenn ja, wie viele Samples bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber eine weniger genaue und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitives, die in die Transform-Feedback-Puffer geschrieben werden.

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel des Abfrageobjekts angibt. Muss `gl.CURRENT_QUERY` sein.

### Rückgabewert

Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.

## Beispiele

```js
const currentQuery = gl.getQuery(gl.ANY_SAMPLES_PASSED, gl.CURRENT_QUERY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
