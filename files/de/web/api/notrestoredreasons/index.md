---
title: NotRestoredReasons
slug: Web/API/NotRestoredReasons
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`NotRestoredReasons`**-Interface der [Performance API](/de/docs/Web/API/Performance_API) stellt Berichtsdaten mit Gründen bereit, warum das aktuelle Dokument bei einer Navigation den Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) nicht verwenden konnte.

Auf diese Objekte wird über die Eigenschaft [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons) zugegriffen.

## Instanzeigenschaften

- [`children`](/de/docs/Web/API/NotRestoredReasons/children) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von `NotRestoredReasons`-Objekten, eines für jedes im aktuellen Dokument eingebettete untergeordnete {{htmlelement("iframe")}}. Die Objekte können Gründe enthalten, warum der oberste Frame aufgrund der untergeordneten Frames den bfcache nicht verwenden konnte. Jedes Objekt hat dieselbe Struktur wie das übergeordnete Objekt. Dadurch lassen sich beliebig viele Ebenen eingebetteter `<iframe>`-Elemente rekursiv darstellen. Hat der Frame keine untergeordneten Frames, ist das Array leer. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `children` `null` zurück.
- [`id`](/de/docs/Web/API/NotRestoredReasons/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `id`-Attributs des `<iframe>` angibt, in dem sich das Dokument befindet (beispielsweise `<iframe id="foo" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` kein `id`-Attribut, gibt `id` `null` zurück.
- [`name`](/de/docs/Web/API/NotRestoredReasons/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Wert des `name`-Attributs des `<iframe>` angibt, in dem sich das Dokument befindet (beispielsweise `<iframe name="bar" src="...">`). Befindet sich das Dokument nicht in einem `<iframe>` oder hat das `<iframe>` kein `name`-Attribut, gibt `name` `null` zurück.
- [`reasons`](/de/docs/Web/API/NotRestoredReasons/reasons) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails)-Objekten, die jeweils einen Grund angeben, warum die Seite, zu der navigiert wurde, den bfcache nicht verwenden konnte. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `reasons` `null` zurück. Das übergeordnete Dokument kann jedoch einen `reason`-Wert von `"masked"` anzeigen, wenn ein oder mehrere `<iframe>`-Elemente die Nutzung des bfcache für den obersten Frame verhindert haben.
- [`src`](/de/docs/Web/API/NotRestoredReasons/src) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>` angibt, in dem sich das Dokument befindet (beispielsweise `<iframe src="exampleframe.html">`). Befindet sich das Dokument nicht in einem `<iframe>`, gibt `src` `null` zurück.
- [`url`](/de/docs/Web/API/NotRestoredReasons/url) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der Seite, zu der navigiert wurde, oder des `<iframe>` angibt. Befindet sich das Dokument in einem ursprungsübergreifenden `<iframe>`, gibt `url` `null` zurück.

## Instanzmethoden

- [`toJSON()`](/de/docs/Web/API/NotRestoredReasons/toJSON) {{Experimental_Inline}}
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `NotRestoredReasons`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

Beispiele finden Sie unter [Gründe für die Verhinderung der bfcache-Nutzung überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Gründe für die Verhinderung der bfcache-Nutzung überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
