---
title: WebGLQuery
slug: Web/API/WebGLQuery
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLQuery`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und bietet Möglichkeiten, um Informationen asynchron abzufragen. Standardmäßig stehen Okklusionsabfragen und Primitive-Abfragen zur Verfügung.

Eine andere Art von Abfragen sind disjunkte Timer-Abfragen, die es Ihnen ermöglichen, die Leistung und das Profiling Ihrer GPU zu messen. Disjunkte Timer-Abfragen sind nur mit der [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query) Erweiterung verfügbar.

{{InheritanceDiagram}}

Beim Arbeiten mit `WebGLQuery`-Objekten sind die folgenden Methoden des [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) nützlich:

- [`WebGL2RenderingContext.createQuery()`](/de/docs/Web/API/WebGL2RenderingContext/createQuery)
- [`WebGL2RenderingContext.deleteQuery()`](/de/docs/Web/API/WebGL2RenderingContext/deleteQuery)
- [`WebGL2RenderingContext.isQuery()`](/de/docs/Web/API/WebGL2RenderingContext/isQuery)
- [`WebGL2RenderingContext.beginQuery()`](/de/docs/Web/API/WebGL2RenderingContext/beginQuery)
- [`WebGL2RenderingContext.endQuery()`](/de/docs/Web/API/WebGL2RenderingContext/endQuery)
- [`WebGL2RenderingContext.getQuery()`](/de/docs/Web/API/WebGL2RenderingContext/getQuery)
- [`WebGL2RenderingContext.getQueryParameter()`](/de/docs/Web/API/WebGL2RenderingContext/getQueryParameter)

## Beispiele

### Erstellen eines `WebGLQuery`-Objekts

In diesem Beispiel muss `gl` ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
