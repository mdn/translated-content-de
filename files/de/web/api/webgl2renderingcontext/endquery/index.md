---
title: "WebGL2RenderingContext: endQuery()-Methode"
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

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die umschlossenen Zeichnungsbefehle den
        Tiefentest bestehen und, falls ja, wie viele Proben bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, jedoch weniger genau und schneller.
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

- {{domxref("WebGLQuery")}}
