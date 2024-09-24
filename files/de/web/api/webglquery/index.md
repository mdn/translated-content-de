---
title: WebGLQuery
slug: Web/API/WebGLQuery
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{APIRef("WebGL")}}

Die **`WebGLQuery`**-Schnittstelle ist Teil der [WebGL 2](/de/docs/Web/API/WebGL_API) API und bietet Möglichkeiten, Informationen asynchron abzufragen. Standardmäßig sind Okklusionsabfragen und Primitive-Abfragen verfügbar.

Eine weitere Art von Abfragen sind disjunkte Zeitmessungsabfragen, die es Ihnen ermöglichen, die Leistung und das Profiling Ihrer GPU zu messen. Disjunkte Zeitmessungsabfragen sind nur mit der {{domxref("EXT_disjoint_timer_query")}}-Erweiterung verfügbar.

{{InheritanceDiagram}}

Bei der Arbeit mit `WebGLQuery`-Objekten sind die folgenden Methoden des {{domxref("WebGL2RenderingContext")}} nützlich:

- {{domxref("WebGL2RenderingContext.createQuery()")}}
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
- {{domxref("WebGL2RenderingContext.isQuery()")}}
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
- {{domxref("WebGL2RenderingContext.endQuery()")}}
- {{domxref("WebGL2RenderingContext.getQuery()")}}
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}

## Beispiele

### Erstellen eines `WebGLQuery`-Objekts

In diesem Beispiel muss `gl` ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLQuery`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const query = gl.createQuery();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("EXT_disjoint_timer_query")}}
