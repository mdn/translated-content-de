---
title: "WebGL2RenderingContext: beginQuery() Methode"
short-title: beginQuery()
slug: Web/API/WebGL2RenderingContext/beginQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.beginQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine asynchrone Abfrage. Der `target` Parameter gibt an, welche Art von Abfrage gestartet werden soll.

## Syntax

```js-nolint
beginQuery(target, query)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die erfassten Zeichenbefehle den
        Tiefentest bestehen und wenn ja, wie viele Samples bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber eine weniger
        genaue und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die
        in Transform-Feedback-Puffer geschrieben werden.

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt, für das die Abfrage gestartet werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
