---
title: "EXT_disjoint_timer_query: Methode getQueryObjectEXT()"
short-title: getQueryObjectEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryObjectEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.getQueryObjectEXT()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt den Zustand eines Abfrageobjekts zurück.

## Syntax

```js-nolint
getQueryObjectEXT(query, pname)
```

### Parameter

- `query`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, zu dem Informationen zurückgegeben werden sollen.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der angibt, welche Informationen zurückgegeben werden sollen. Muss `ext.QUERY_RESULT_EXT` oder `ext.QUERY_RESULT_AVAILABLE_EXT` sein.

### Rückgabewert

Hängt von `pname` ab:

- Wenn `pname` den Wert `ext.QUERY_RESULT_EXT` hat: Ein [`GLuint64EXT`](/de/docs/Web/API/WebGL_API/Types), der das Abfrageergebnis enthält.
- Wenn `pname` den Wert `ext.QUERY_RESULT_AVAILABLE_EXT` hat: Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ein Abfrageergebnis verfügbar ist.

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// Draw
ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

// At some point in the future, after returning control to the browser
const available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);

if (available && !disjoint) {
  // See how much time the rendering of the object took in nanoseconds.
  const timeElapsed = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
