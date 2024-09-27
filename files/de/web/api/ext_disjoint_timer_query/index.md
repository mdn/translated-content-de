---
title: EXT_disjoint_timer_query Erweiterung
short-title: EXT_disjoint_timer_query
slug: Web/API/EXT_disjoint_timer_query
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("WebGL")}}

Die **EXT_disjoint_timer_query** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet eine Möglichkeit, die Dauer eines Satzes von GL-Befehlen zu messen, ohne die Rendering-Pipeline zu unterbrechen.

WebGL-Erweiterungen sind verfügbar über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension). Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung sollte nur in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexten verfügbar sein. [`EXT_disjoint_timer_query_webgl2`](/de/docs/Web/API/EXT_disjoint_timer_query_webgl2) ist in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} Kontexten verfügbar.
>
> In WebGL 2 wird die OpenGL-Methode `getQueryObject()` in [`WebGL2RenderingContext.getQueryParameter`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter) umbenannt.
> In WebGL 2 können andere Abfragen (wie Occlusion-Abfragen und primitive Abfragen) mithilfe von [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekten durchgeführt werden.

## Typen

Diese Erweiterung führt einen neuen Typ ein:

- `GLuint64EXT`
  - : Unsigned 64-Bit Ganzzahl.

## Konstanten

Diese Erweiterung führt sieben neue Konstanten ein.

- `ext.QUERY_COUNTER_BITS_EXT`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits angibt, die verwendet werden, um das Abfrageergebnis für das gegebene Ziel zu halten.
- `ext.CURRENT_QUERY_EXT`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) Objekt, welches die derzeit aktive Abfrage für das gegebene Ziel ist.
- `ext.QUERY_RESULT_EXT`
  - : Ein [`GLuint64EXT`](/de/docs/Web/API/WebGL_API/Types) enthält das Abfrageergebnis.
- `ext.QUERY_RESULT_AVAILABLE_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.
- `ext.TIME_ELAPSED_EXT`
  - : Vergangene Zeit (in Nanosekunden).
- `ext.TIMESTAMP_EXT`
  - : Die aktuelle Zeit.
- `ext.GPU_DISJOINT_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die GPU eine unzusammenhängende Operation durchgeführt hat oder nicht.

## Instanzmethoden

Diese Erweiterung führt acht neue Methoden ein.

- [`ext.createQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/createQueryEXT)
  - : Erstellt eine neue [`WebGLQuery`](/de/docs/Web/API/WebGLQuery).
- [`ext.deleteQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/deleteQueryEXT)
  - : Löscht eine gegebene [`WebGLQuery`](/de/docs/Web/API/WebGLQuery).
- [`ext.isQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/isQueryEXT)
  - : Gibt `true` zurück, wenn ein gegebenes Objekt eine gültige [`WebGLQuery`](/de/docs/Web/API/WebGLQuery) ist.
- [`ext.beginQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/beginQueryEXT)
  - : Der Timer startet, wenn alle Befehle vor `beginQueryEXT` vollständig ausgeführt wurden.
- [`ext.endQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/endQueryEXT)
  - : Der Timer stoppt, wenn alle Befehle vor `endQueryEXT` vollständig ausgeführt wurden.
- [`ext.queryCounterEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/queryCounterEXT)
  - : Zeichnet die aktuelle Zeit in das entsprechende Abfrageobjekt auf.
- [`ext.getQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/getQueryEXT)
  - : Gibt Informationen zu einem Abfrageziel zurück.
- [`ext.getQueryObjectEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/getQueryObjectEXT)
  - : Gibt den Zustand eines Abfrageobjekts zurück.

## Beispiele

```js
const ext = gl.getExtension("EXT_disjoint_timer_query");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
