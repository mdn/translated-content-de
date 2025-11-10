---
title: "WebGL2RenderingContext: endQuery()-Methode"
short-title: endQuery()
slug: Web/API/WebGL2RenderingContext/endQuery
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.endQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) markiert das Ende eines gegebenen Abfrageziels.

## Syntax

```js-nolint
endQuery(target)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Abfrage angibt. Mögliche Werte:
    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen
        bestimmen, ob ein Objekt sichtbar ist (ob die umfassten Zeichenbefehle den
        Tiefentest bestehen und wenn ja, wie viele Proben bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber weniger
        genau und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitive, die
        in Transform-Feedback-Puffer geschrieben werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// …

gl.endQuery(gl.ANY_SAMPLES_PASSED);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
