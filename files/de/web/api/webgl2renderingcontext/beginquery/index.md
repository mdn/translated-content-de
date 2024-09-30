---
title: "WebGL2RenderingContext: Methode beginQuery()"
short-title: beginQuery()
slug: Web/API/WebGL2RenderingContext/beginQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.beginQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine asynchrone Abfrage. Der Parameter `target` gibt an, welche Art von Abfrage gestartet werden soll.

## Syntax

```js-nolint
beginQuery(target, query)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Occlusion-Abfrage an: Diese Abfragen erkennen, ob ein Objekt sichtbar ist (ob die umfassten Zeichenbefehle den Tiefentest bestehen und wenn ja, wie viele Proben bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber weniger genau und schneller.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die in die Transform-Feedback-Puffer geschrieben werden.

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, für das die Abfrage gestartet werden soll.

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
