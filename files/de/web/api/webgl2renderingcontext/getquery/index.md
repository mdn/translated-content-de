---
title: "WebGL2RenderingContext: Methode getQuery()"
short-title: getQuery()
slug: Web/API/WebGL2RenderingContext/getQuery
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getQuery()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt die derzeit aktive
[`WebGLQuery`](/de/docs/Web/API/WebGLQuery) für das `target` oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

## Syntax

```js-nolint
getQuery(target, pname)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Abfrage angibt. Mögliche Werte:

    - `gl.ANY_SAMPLES_PASSED`
      - : Gibt eine Okklusionsabfrage an: Diese Abfragen
        erkennen, ob ein Objekt sichtbar ist (ob die abgegrenzten Zeichnungsbefehle den
        Tiefentest bestehen und falls ja, wie viele Abtastungen bestehen).
    - `gl.ANY_SAMPLES_PASSED_CONSERVATIVE`
      - : Wie oben, jedoch eine weniger
        genaue und schnellere Version.
    - `gl.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`
      - : Anzahl der Primitive, die in die Transform-Feedback-Puffer geschrieben werden.

- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel des Abfrageobjekts angibt. Muss
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
