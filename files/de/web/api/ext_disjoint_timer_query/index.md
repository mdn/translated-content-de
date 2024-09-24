---
title: EXT_disjoint_timer_query-Erweiterung
short-title: EXT_disjoint_timer_query
slug: Web/API/EXT_disjoint_timer_query
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("WebGL")}}

Die **EXT_disjoint_timer_query**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet eine Möglichkeit, die Dauer eines Satzes von GL-Befehlen zu messen, ohne die Rendering-Pipeline zu blockieren.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung sollte nur in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexten verfügbar sein. {{domxref("EXT_disjoint_timer_query_webgl2")}} ist in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}-Kontexten verfügbar.
>
> In WebGL 2 wird die OpenGL-Methode `getQueryObject()` in {{domxref("WebGL2RenderingContext.getQueryParameter")}} umbenannt.
> In WebGL 2 sind andere Abfragen (wie Okklusionsabfragen und Primitive-Abfragen) mit {{domxref("WebGLQuery")}}-Objekten möglich.

## Typen

Diese Erweiterung stellt einen neuen Typ bereit:

- `GLuint64EXT`
  - : Unsigned 64-Bit-Ganzzahl.

## Konstanten

Diese Erweiterung stellt sieben neue Konstanten bereit.

- `ext.QUERY_COUNTER_BITS_EXT`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, der die Anzahl der Bits angibt, die zur Aufnahme des Abfrageergebnisses für das gegebene Ziel verwendet werden.
- `ext.CURRENT_QUERY_EXT`
  - : Ein {{domxref("WebGLQuery")}}-Objekt, das die derzeit aktive Abfrage für das gegebene Ziel ist.
- `ext.QUERY_RESULT_EXT`
  - : Ein {{domxref("WebGL_API/Types", "GLuint64EXT")}}, das das Abfrageergebnis enthält.
- `ext.QUERY_RESULT_AVAILABLE_EXT`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob ein Abfrageergebnis verfügbar ist oder nicht.
- `ext.TIME_ELAPSED_EXT`
  - : Verstrichene Zeit (in Nanosekunden).
- `ext.TIMESTAMP_EXT`
  - : Die aktuelle Zeit.
- `ext.GPU_DISJOINT_EXT`
  - : Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob die GPU eine nicht zusammenhängende Operation durchgeführt hat oder nicht.

## Instanzmethoden

Diese Erweiterung stellt acht neue Methoden bereit.

- {{domxref("EXT_disjoint_timer_query.createQueryEXT()", "ext.createQueryEXT()")}}
  - : Erstellt eine neue {{domxref("WebGLQuery")}}.
- {{domxref("EXT_disjoint_timer_query.deleteQueryEXT()", "ext.deleteQueryEXT()")}}
  - : Löscht eine angegebene {{domxref("WebGLQuery")}}.
- {{domxref("EXT_disjoint_timer_query.isQueryEXT()", "ext.isQueryEXT()")}}
  - : Gibt `true` zurück, wenn ein angegebenes Objekt eine gültige {{domxref("WebGLQuery")}} ist.
- {{domxref("EXT_disjoint_timer_query.beginQueryEXT()", "ext.beginQueryEXT()")}}
  - : Der Timer startet, wenn alle vor `beginQueryEXT` ausgeführten Befehle vollständig ausgeführt wurden.
- {{domxref("EXT_disjoint_timer_query.endQueryEXT()", "ext.endQueryEXT()")}}
  - : Der Timer stoppt, wenn alle vor `endQueryEXT` ausgeführten Befehle vollständig ausgeführt wurden.
- {{domxref("EXT_disjoint_timer_query.queryCounterEXT()", "ext.queryCounterEXT()")}}
  - : Zeichnet die aktuelle Zeit in das entsprechende Abfrageobjekt auf.
- {{domxref("EXT_disjoint_timer_query.getQueryEXT()", "ext.getQueryEXT()")}}
  - : Gibt Informationen über ein Abfrageziel zurück.
- {{domxref("EXT_disjoint_timer_query.getQueryObjectEXT()", "ext.getQueryObjectEXT()")}}
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

- {{domxref("WebGLRenderingContext.getExtension()")}}
