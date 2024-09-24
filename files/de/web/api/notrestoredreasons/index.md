---
title: NichtWiederhergestellteGründe
slug: Web/API/NotRestoredReasons
l10n:
  sourceCommit: 3148591fa7280daf3e88a5cece3b60dfc9470330
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das **`NotRestoredReasons`**-Interface der {{domxref("Performance API", "Performance API", "", "nocode")}} stellt Berichtsdatensätze bereit, die die Gründe enthalten, warum das aktuelle Dokument daran gehindert wurde, den Vor-/Zurück-Cache ({{Glossary("bfcache")}}) bei der Navigation zu verwenden.

Diese Objekte werden über die Eigenschaft {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} abgerufen.

## Instanzeigenschaften

- {{domxref("NotRestoredReasons.children", "children")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von `NotRestoredReasons`-Objekten, eines für jedes eingebettete {{htmlelement("iframe")}} im aktuellen Dokument, welches Gründe enthalten kann, warum der Top-Level-Frame in Bezug auf die Child-Frames blockiert wurde. Jedes Objekt hat die gleiche Struktur wie das übergeordnete Objekt – auf diese Weise können beliebig viele Ebenen eingebetteter `<iframe>`s rekursiv im Objekt dargestellt werden. Wenn der Frame keine Kinder enthält, ist das Array leer; wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, wird `children` `null` zurückgeben.
- {{domxref("NotRestoredReasons.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `id`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe id="foo" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keine `id` gesetzt hat, wird `id` `null` zurückgeben.
- {{domxref("NotRestoredReasons.name", "name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den `name`-Attributwert des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe name="bar" src="...">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet oder das `<iframe>` keinen `name` gesetzt hat, wird `name` `null` zurückgeben.
- {{domxref("NotRestoredReasons.reasons", "reasons")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Array von {{domxref("NotRestoredReasonDetails")}}-Objekten, von denen jedes einen Grund darstellt, warum die navigierte Seite daran gehindert wurde, den bfcache zu verwenden. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, wird `reasons` `null` zurückgeben, aber das übergeordnete Dokument kann einen `reason` von `"masked"` anzeigen, wenn irgendwelche `<iframe>`s die bfcache-Verwendung für den Top-Level-Frame blockiert haben.
- {{domxref("NotRestoredReasons.src", "src")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den Pfad zur Quelle des `<iframe>`, in dem sich das Dokument befindet, darstellt (zum Beispiel `<iframe src="exampleframe.html">`). Wenn sich das Dokument nicht in einem `<iframe>` befindet, wird `src` `null` zurückgeben.
- {{domxref("NotRestoredReasons.url", "url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der die URL der navigierten Seite oder des `<iframe>` darstellt. Wenn sich das Dokument in einem Cross-Origin-`<iframe>` befindet, wird `url` `null` zurückgeben.

## Instanzmethoden

- {{domxref("NotRestoredReasons.toJSON", "toJSON()")}} {{Experimental_Inline}}
  - : Ein {{Glossary("Serialization","Serializer")}}; gibt eine JSON-Darstellung des `NotRestoredReasons`-Objekts zurück.

## Beispiele

Siehe [Monitoring bfcache blocking reasons](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons) für Beispiele.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Monitoring bfcache blocking reasons](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- {{domxref("PerformanceNavigationTiming.notRestoredReasons")}}
