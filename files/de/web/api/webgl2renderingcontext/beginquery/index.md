---
title: "WebGL2RenderingContext: beginQuery() Methode"
short-title: beginQuery()
slug: Web/API/WebGL2RenderingContext/beginQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.beginQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) startet eine asynchrone Abfrage. Der `target`-Parameter gibt an, welche Art von Abfrage begonnen werden soll.

## Syntax

```js-nolint
beginQuery(target, query)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Okklusionsabfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die betroffenen Zeichnungsbefehle den
        Tiefentest bestehen und, falls ja, wie viele Proben bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, aber weniger
        genau und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitiven, die
        in Transform-Feedback-Puffer geschrieben werden.

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, für das die Abfrage gestartet werden soll.

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

- {{domxref("WebGLQuery")}}
