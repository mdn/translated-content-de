---
title: "EXT_disjoint_timer_query: getQueryEXT() Methode"
short-title: getQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.getQueryEXT()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) liefert Informationen über ein Abfrageziel zurück.

## Syntax

```js-nolint
getQueryEXT(target, pname)
```

### Parameter

- `target`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel der Zeitabfrage spezifiziert. Muss
    `ext.TIMESTAMP_EXT` oder `ext.TIME_ELAPSED_EXT` sein.
- `pname`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das angibt, welche Information zurückgegeben werden soll. Muss
    `ext.CURRENT_QUERY_EXT` oder `ext.QUERY_COUNTER_BITS_EXT` sein.

### Rückgabewert

Abhängig von `pname`:

- Wenn `pname` `ext.CURRENT_QUERY_EXT` ist: Ein
  [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das die derzeit aktive Abfrage für das
  angegebene Ziel darstellt.
- Wenn `pname` `ext.QUERY_COUNTER_BITS_EXT` ist: Ein
  [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits angibt, die zur Speicherung des Abfrageergebnisses für das angegebene Ziel verwendet werden.

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
