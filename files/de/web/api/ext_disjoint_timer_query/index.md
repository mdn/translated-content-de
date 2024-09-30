---
title: EXT_disjoint_timer_query-Erweiterung
short-title: EXT_disjoint_timer_query
slug: Web/API/EXT_disjoint_timer_query
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("WebGL")}}

Die **EXT_disjoint_timer_query**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet eine Möglichkeit, die Dauer einer Reihe von GL-Befehlen zu messen, ohne die Rendering-Pipeline zu blockieren.

WebGL-Erweiterungen sind mit der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung sollte nur in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexten verfügbar sein. [`EXT_disjoint_timer_query_webgl2`](/de/docs/Web/API/EXT_disjoint_timer_query_webgl2) ist in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}-Kontexten verfügbar.
>
> In WebGL 2 wird die OpenGL-Methode `getQueryObject()` in [`WebGL2RenderingContext.getQueryParameter`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter) umbenannt.
> In WebGL 2 sind andere Abfragen (wie Okklusionsabfragen und Primärabfragen) mit [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekten möglich.

## Typen

Diese Erweiterung führt einen neuen Typ ein:

- `GLuint64EXT`
  - : Unsigned 64-Bit-Ganzzahl.

## Konstanten

Diese Erweiterung führt sieben neue Konstanten ein.

- `ext.QUERY_COUNTER_BITS_EXT`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits angibt, die verwendet werden, um das Abfrageergebnis für das gegebene Ziel zu speichern.
- `ext.CURRENT_QUERY_EXT`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das die derzeit aktive Abfrage für das gegebene Ziel ist.
- `ext.QUERY_RESULT_EXT`
  - : Ein [`GLuint64EXT`](/de/docs/Web/API/WebGL_API/Types), das das Abfrageergebnis enthält.
- `ext.QUERY_RESULT_AVAILABLE_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.
- `ext.TIME_ELAPSED_EXT`
  - : Verstrichene Zeit (in Nanosekunden).
- `ext.TIMESTAMP_EXT`
  - : Die aktuelle Zeit.
- `ext.GPU_DISJOINT_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob die GPU irgendeine disjunkte Operation ausgeführt hat.

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
  - : Nimmt die aktuelle Zeit in das entsprechende Abfrageobjekt auf.
- [`ext.getQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/getQueryEXT)
  - : Gibt Informationen über ein Abfrageziel zurück.
- [`ext.getQueryObjectEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/getQueryObjectEXT)
  - : Gibt den Status eines Abfrageobjekts zurück.

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
