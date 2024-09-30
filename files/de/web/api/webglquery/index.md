---
title: WebGLQuery
slug: Web/API/WebGLQuery
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLQuery`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und bietet Möglichkeiten, Informationen asynchron abzufragen. Standardmäßig sind Okklusionsabfragen und Primitive-Abfragen verfügbar.

Eine andere Art von Abfragen sind disjunkte Zeitmesserabfragen, die es Ihnen ermöglichen, die Leistung und das Profiling Ihrer GPU zu messen. Disjunkte Zeitmesserabfragen sind nur mit der [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)-Erweiterung verfügbar.

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
