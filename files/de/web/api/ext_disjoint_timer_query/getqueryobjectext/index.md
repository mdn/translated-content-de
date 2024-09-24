---
title: "EXT_disjoint_timer_query: getQueryObjectEXT()-Methode"
short-title: getQueryObjectEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryObjectEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.getQueryObjectEXT()`**-Methode
der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt den Status eines Abfrageobjekts zurück.

## Syntax

```js-nolint
getQueryObjectEXT(query, pname)
```

### Parameter

- `query`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, von dem Informationen zurückgegeben werden sollen.
- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welche Informationen zurückgegeben werden sollen. Muss
    `ext.QUERY_RESULT_EXT` oder `ext.QUERY_RESULT_AVAILABLE_EXT` sein.

### Rückgabewert

Hängt von `pname` ab:

- Wenn `pname` `ext.QUERY_RESULT_EXT` ist: Ein
  {{domxref("WebGL_API/Types", "GLuint64EXT")}}, der das Abfrageergebnis enthält.
- Wenn `pname` `ext.QUERY_RESULT_AVAILABLE_EXT` ist: Ein
  {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const query = ext.createQueryEXT();
ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);

// Zeichnen
ext.endQueryEXT(ext.TIME_ELAPSED_EXT);

// Irgendwann in der Zukunft, nachdem die Kontrolle an den Browser zurückgegeben wurde
const available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
const disjoint = gl.getParameter(ext.GPU_DISJOINT_EXT);

if (available && !disjoint) {
  // Sie können sehen, wie viel Zeit das Rendern des Objekts in Nanosekunden gedauert hat.
  const timeElapsed = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
