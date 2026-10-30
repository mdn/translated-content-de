---
title: EXT_disjoint_timer_query-Erweiterung
short-title: EXT_disjoint_timer_query
slug: Web/API/EXT_disjoint_timer_query
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **EXT_disjoint_timer_query** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es, die Ausführungsdauer einer Reihe von GL-Befehlen zu messen, ohne die Rendering-Pipeline anzuhalten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung sollte nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexten verfügbar sein. [`EXT_disjoint_timer_query_webgl2`](/de/docs/Web/API/EXT_disjoint_timer_query_webgl2) ist in [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar.
>
> In WebGL 2 wurde die OpenGL-Methode `getQueryObject()` in [`WebGL2RenderingContext.getQueryParameter`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter) umbenannt.
> In WebGL 2 sind mit [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekten auch andere Abfragen möglich, beispielsweise Occlusion Queries und Primitive Queries.

## Typen

Diese Erweiterung stellt einen neuen Typ bereit:

- `GLuint64EXT`
  - : Vorzeichenlose 64-Bit-Ganzzahl.

## Konstanten

Diese Erweiterung stellt sieben neue Konstanten bereit.

- `ext.QUERY_COUNTER_BITS_EXT`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der Bits angibt, die für das Abfrageergebnis des angegebenen Ziels verwendet werden.
- `ext.CURRENT_QUERY_EXT`
  - : Ein [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt, das die derzeit aktive Abfrage für das angegebene Ziel darstellt.
- `ext.QUERY_RESULT_EXT`
  - : Ein [`GLuint64EXT`](/de/docs/Web/API/WebGL_API/Types), der das Abfrageergebnis enthält.
- `ext.QUERY_RESULT_AVAILABLE_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob ein Abfrageergebnis verfügbar ist.
- `ext.TIME_ELAPSED_EXT`
  - : Verstrichene Zeit (in Nanosekunden).
- `ext.TIMESTAMP_EXT`
  - : Die aktuelle Zeit.
- `ext.GPU_DISJOINT_EXT`
  - : Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob die GPU eine disjoint-Operation ausgeführt hat.

## Instanzmethoden

Diese Erweiterung stellt acht neue Methoden bereit.

- [`ext.createQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/createQueryEXT)
  - : Erstellt ein neues [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.
- [`ext.deleteQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/deleteQueryEXT)
  - : Löscht ein angegebenes [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt.
- [`ext.isQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/isQueryEXT)
  - : Gibt `true` zurück, wenn ein angegebenes Objekt ein gültiges [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)-Objekt ist.
- [`ext.beginQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/beginQueryEXT)
  - : Der Timer startet, wenn alle Befehle vor `beginQueryEXT` vollständig ausgeführt wurden.
- [`ext.endQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/endQueryEXT)
  - : Der Timer stoppt, wenn alle Befehle vor `endQueryEXT` vollständig ausgeführt wurden.
- [`ext.queryCounterEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/queryCounterEXT)
  - : Speichert die aktuelle Zeit im zugehörigen Abfrageobjekt.
- [`ext.getQueryEXT()`](/de/docs/Web/API/EXT_disjoint_timer_query/getQueryEXT)
  - : Gibt Informationen über ein Abfrageziel zurück.
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
