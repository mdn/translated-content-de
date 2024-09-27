---
title: "WebGL2RenderingContext: Methode endQuery()"
short-title: endQuery()
slug: Web/API/WebGL2RenderingContext/endQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.endQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) markiert das Ende eines bestimmten Abfrageziels.

## Syntax

```js-nolint
endQuery(target)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Okklusionsabfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die umschlossenen Zeichenbefehle den
        Tiefentest bestehen und wenn ja, wie viele Samples bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Gleich wie oben, jedoch weniger
        genau und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die
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
