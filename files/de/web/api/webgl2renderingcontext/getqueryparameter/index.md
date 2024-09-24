---
title: "WebGL2RenderingContext: Methode getQueryParameter()"
short-title: getQueryParameter()
slug: Web/API/WebGL2RenderingContext/getQueryParameter
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.getQueryParameter()`**-Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt Parameterinformationen eines {{domxref("WebGLQuery")}}-Objekts zurück.

## Syntax

```js-nolint
getQueryParameter(query, pname)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt.
- `pname`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das angibt, welche Informationen zurückgegeben werden sollen. Mögliche Werte:

    - `gl.QUERY_RESULT`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLuint")}} zurück, das das Abfrageergebnis enthält.
    - `gl.QUERY_RESULT_AVAILABLE`
      - : Gibt ein {{domxref("WebGL_API/Types", "GLboolean")}} zurück, das angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.

### Rückgabewert

Abhängig vom `pname`-Parameter, entweder ein {{domxref("WebGL_API/Types", "GLuint")}} oder ein
{{domxref("WebGL_API/Types", "GLboolean")}}.

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

- {{domxref("WebGLQuery")}}
