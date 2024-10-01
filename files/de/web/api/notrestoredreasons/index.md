---
title: NotRestoredReasons
slug: Web/API/NotRestoredReasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`NotRestoredReasons`** Interface der [Performance API](/de/docs/Web/API/Performance_API) liefert Berichtsdaten, die die Gründe enthalten, warum das aktuelle Dokument daran gehindert wurde, den back/forward Cache ({{Glossary("bfcache", "bfcache")}}) bei der Navigation zu nutzen.

Diese Objekte sind über die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) Eigenschaft zugänglich.

## Instanzeigenschaften

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von `NotRestoredReasons` Objekten, eines für jedes untergeordnete {{htmlelement("iframe")}}, das im aktuellen Dokument eingebettet ist. Hier können Gründe enthalten sein, warum das übergeordnete Frame im Zusammenhang mit den untergeordneten Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt — auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv im Objekt dargestellt werden. Wenn das Frame keine Kinder hat, ist das Array leer; wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `id` Attributwert des `<iframe>` darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe id="foo" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keine `id` hat, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `name` Attributwert des `<iframe>` darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe name="bar" src="...">`). Wenn das Dokument nicht in einem `<iframe>` ist oder das `<iframe>` keinen `name` hat, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) Objekten, von denen jedes einen Grund darstellt, warum die navigierte Seite daran gehindert wurde, den bfcache zu nutzen. Wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `reasons` `null` zurück, aber das übergeordnete Dokument könnte einen `reason` von `"masked"` anzeigen, wenn irgendwelche `<iframe>`s die Nutzung des bfcache für das oberste Frame blockiert haben.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>` darstellt, in dem das Dokument enthalten ist (zum Beispiel `<iframe src="exampleframe.html">`). Wenn das Dokument nicht in einem `<iframe>` ist, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Wenn das Dokument in einem Cross-Origin-`<iframe>` ist, gibt `url` `null` zurück.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/NotRestoredReasons/toJSON) {{Experimental_Inline}}
  - : Ein {{Glossary("Serialization", "Serializer")}}; gibt eine JSON-Darstellung des `NotRestoredReasons` Objekts zurück.

## Beispiele

Siehe [Überwachung von bfcache-Blockiergründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung von bfcache-Blockiergründen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
