---
title: "WebGL2RenderingContext: getQueryParameter() Methode"
short-title: getQueryParameter()
slug: Web/API/WebGL2RenderingContext/getQueryParameter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.getQueryParameter()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekts zurück.

## Syntax

```js-nolint
getQueryParameter(query, pname)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:
    - `gl.QUERY_RESULT`
      - : Gibt ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) zurück, das das Abfrageergebnis enthält.
    - `gl.QUERY_RESULT_AVAILABLE`
      - : Gibt ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types) zurück, das angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.

### Rückgabewert

Abhängig vom `pname` Parameter, entweder ein [`GLuint`](/de/docs/Web/API/WebGL_API/Types) oder ein
[`GLboolean`](/de/docs/Web/API/WebGL_API/Types).

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
