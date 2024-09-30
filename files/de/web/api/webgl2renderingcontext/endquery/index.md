---
title: "WebGL2RenderingContext: endQuery()-Methode"
short-title: endQuery()
slug: Web/API/WebGL2RenderingContext/endQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.endQuery()`**-Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) markiert das Ende eines bestimmten Abfrageziels.

## Syntax

```js-nolint
endQuery(target)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Spezifiziert eine Okklusionsabfrage: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die umfassten Zeichnungsbefehle den
        Tiefentest bestehen und, wenn ja, wie viele Proben bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber weniger
        genau und schneller.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die in Transform-Feedback-Puffer geschrieben werden.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
