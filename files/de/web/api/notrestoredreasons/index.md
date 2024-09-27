---
title: NotRestoredReasons
slug: Web/API/NotRestoredReasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`NotRestoredReasons`**-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) liefert Berichte über die Gründe, warum das aktuelle Dokument daran gehindert wurde, den Back/Forward-Cache ([bfcache](/de/docs/Glossary/bfcache)) bei der Navigation zu verwenden.

Diese Objekte werden über die [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)-Eigenschaft aufgerufen.

## Instanz-Eigenschaften

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von `NotRestoredReasons`-Objekten, eines für jedes in das aktuelle Dokument eingebettete Kind{{htmlelement("iframe")}}, das Gründe enthalten kann, warum der oberste Frame in Bezug auf die Kind-Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt — auf diese Weise können beliebig viele Ebenen von eingebetteten `<iframe>`s rekursiv im Objekt dargestellt werden. Hat der Frame keine Kinder, ist das Array leer; wenn das Dokument sich in einem Cross-Origin-`<iframe>` befindet, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `id`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe id="foo" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keine `id` gesetzt, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `name`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe name="bar" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` keinen `name` gesetzt, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeden Grund darstellen, warum die Navigationsseite daran gehindert wurde, den bfcache zu verwenden. Befindet sich das Dokument in einem Cross-Origin-`<iframe>`, gibt `reasons` `null` zurück, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn irgendein `<iframe>` die Verwendung des bfcache für den obersten Frame blockierte.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe src="exampleframe.html">`). Befindet sich das Dokument nicht in einem `<iframe>`, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Befindet sich das Dokument in einem Cross-Origin-`<iframe>`, gibt `url` `null` zurück.

## Instanz-Methoden

- [`toJSON()`](/de/docs/Web/API/NotRestoredReasons/toJSON) {{Experimental_Inline}}
  - : Ein [Serializer](/de/docs/Glossary/Serialization); gibt eine JSON-Darstellung des `NotRestoredReasons`-Objekts zurück.

## Beispiele

Siehe [Überwachung der Blockierungsgründe von bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überwachung der Blockierungsgründe von bfcache](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
