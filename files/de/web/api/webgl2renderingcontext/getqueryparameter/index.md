---
title: "WebGL2RenderingContext: getQueryParameter()-Methode"
short-title: getQueryParameter()
slug: Web/API/WebGL2RenderingContext/getQueryParameter
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getQueryParameter()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekts zurück.

## Syntax

```js-nolint
getQueryParameter(query, pname)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.
- `pname`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.QUERY_RESULT`
      - : Gibt einen [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, der das Abfrageergebnis enthält.
    - `gl.QUERY_RESULT_AVAILABLE`
      - : Gibt einen [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, der anzeigt, ob ein Abfrageergebnis verfügbar ist oder nicht.

### Rückgabewert

Abhängig vom `pname`-Parameter entweder ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) oder ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types).

## Beispiele

```js
const query = gl.createQuery();
gl.beginQuery(gl.ANY_SAMPLES_PASSED, query);

const result = gl.getQueryParameter(query, gl.QUERY_RESULT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
