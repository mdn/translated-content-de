---
title: "EXT_disjoint_timer_query: Methode getQueryEXT()"
short-title: getQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryEXT
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`EXT_disjoint_timer_query.getQueryEXT()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt Informationen über ein Query-Ziel zurück.

## Syntax

```js-nolint
getQueryEXT(target, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Zeitabfrage angibt. Muss `ext.TIMESTAMP_EXT` oder `ext.TIME_ELAPSED_EXT` sein.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Information zurückgegeben werden soll. Muss `ext.CURRENT_QUERY_EXT` oder `ext.QUERY_COUNTER_BITS_EXT` sein.

### Rückgabewert

Hängt von `pname` ab:

- Wenn `pname` den Wert `ext.CURRENT_QUERY_EXT` hat: ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das die aktuell aktive Query für das angegebene Ziel darstellt.
- Wenn `pname` den Wert `ext.QUERY_COUNTER_BITS_EXT` hat: ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der Bits angibt, die für das Abfrageergebnis des angegebenen Ziels verwendet werden.

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
const startQuery = ext.createQueryEXT();
ext.queryCounterEXT(startQuery, ext.TIMESTAMP_EXT);

const currentQuery = ext.getQueryEXT(ext.TIMESTAMP_EXT, ext.CURRENT_QUERY_EXT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
