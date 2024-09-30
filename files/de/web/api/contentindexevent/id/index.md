---
title: "ContentIndexEvent: id-Eigenschaft"
short-title: id
slug: Web/API/ContentIndexEvent/id
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`id`** des
[`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent)-Interfaces ist ein {{jsxref('String')}}, das den gelöschten Inhaltsindex über seine `id` identifiziert.

## Wert

Eine {{jsxref("String")}}-Darstellung der `id` des gelöschten Inhaltsindexes.

## Beispiele

Dieses Beispiel lauscht auf das [`contentdelete`](/de/docs/Web/API/ContentIndexEvent)-Ereignis
und protokolliert die `id` des entfernten Inhaltsindexes.

Das [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent) ist nur im
[globalen Kontext](/de/docs/Web/API/ServiceWorkerGlobalScope) eines
[`ServiceWorker`](/de/docs/Web/API/ServiceWorker) verfügbar.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
