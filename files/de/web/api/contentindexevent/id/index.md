---
title: "ContentIndexEvent: id-Eigenschaft"
short-title: id
slug: Web/API/ContentIndexEvent/id
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`id`**-Eigenschaft der {{domxref("ContentIndexEvent")}}-Schnittstelle ist eine {{jsxref('String')}}, die den gelöschten Inhaltsindex über seine `id` identifiziert.

## Wert

Eine {{jsxref("String")}}-Darstellung der ID des gelöschten Inhaltsindex.

## Beispiele

Dieses Beispiel hört auf das {{domxref('ContentIndexEvent', 'contentdelete')}}-Ereignis und protokolliert die ID des entfernten Inhaltsindex.

Das {{domxref('ContentIndexEvent')}} ist nur im [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref('ServiceWorker')}} verfügbar.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // protokolliert die Inhaltsindex-ID, die dann verwendet werden kann, um zu bestimmen, welcher Inhalt aus dem Cache gelöscht werden soll
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen zu Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
