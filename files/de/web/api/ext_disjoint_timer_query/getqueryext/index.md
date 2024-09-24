---
title: "EXT_disjoint_timer_query: getQueryEXT() Methode"
short-title: getQueryEXT()
slug: Web/API/EXT_disjoint_timer_query/getQueryEXT
l10n:
  sourceCommit: 15db4f1dd87a80c4aec2cfba3e73bc8291f29110
---

{{APIRef("WebGL")}}

Die **`EXT_disjoint_timer_query.getQueryEXT()`** Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) gibt Informationen über ein Abfrageziel
zurück.

## Syntax

```js-nolint
getQueryEXT(target, pname)
```

### Parameter

- `target`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der das Ziel der Zeitabfrage angibt. Muss
    `ext.TIMESTAMP_EXT` oder `ext.TIME_ELAPSED_EXT` sein.
- `pname`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der angibt, welche Informationen zurückgegeben werden sollen. Muss
    `ext.CURRENT_QUERY_EXT` oder `ext.QUERY_COUNTER_BITS_EXT` sein.

### Rückgabewert

Abhängig von `pname`:

- Wenn `pname` `ext.CURRENT_QUERY_EXT` ist: Ein
  {{domxref("WebGLQuery")}} Objekt, welches die aktuell aktive Abfrage für das
  gegebene Ziel ist.
- Wenn `pname` `ext.QUERY_COUNTER_BITS_EXT` ist: Ein
  {{domxref("WebGL_API/Types", "GLint")}}, der die Anzahl der Bits angibt, die zum Halten des Abfrageergebnisses für
  das gegebene Ziel verwendet werden.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLQuery")}}
- {{domxref("EXT_disjoint_timer_query")}}
