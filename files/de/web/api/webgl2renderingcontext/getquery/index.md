---
title: "WebGL2RenderingContext: getQuery()-Methode"
short-title: getQuery()
slug: Web/API/WebGL2RenderingContext/getQuery
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die derzeit aktive
[`WebGLQuery`](/de/docs/Web/API/WebGLQuery) für das `target` zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

## Syntax

```js-nolint
getQuery(target, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Query spezifiziert. Mögliche Werte:
    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Query an: Diese Queries
        erkennen, ob ein Objekt sichtbar ist (ob die umfassten Zeichnungsbefehle den
        Tiefentest bestehen und wenn ja, wie viele Samples bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Dasselbe wie oben, aber weniger
        genau und schneller.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die
        in Transform-Feedback-Puffer geschrieben werden.

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel des Query-Objekts spezifiziert. Muss
    `gl.CURRENT_QUERY` sein.

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
