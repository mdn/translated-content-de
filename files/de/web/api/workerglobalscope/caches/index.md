---
title: "WorkerGlobalScope: caches-Eigenschaft"
short-title: caches
slug: Web/API/WorkerGlobalScope/caches
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`caches`**-Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle gibt das mit dem aktuellen Kontext verbundene [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück. Dieses Objekt ermöglicht Funktionalitäten wie das Speichern von Ressourcen zur Offline-Nutzung und das Erstellen von benutzerdefinierten Antworten auf Anfragen.

## Wert

Ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Cache im Kontext eines [Service Workers](/de/docs/Web/API/Service_Worker_API) verwenden, um Ressourcen offline zu speichern.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    self.caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers](/de/docs/Web/API/Service_Worker_API)
- [`CacheStorage`](/de/docs/Web/API/CacheStorage)
- [`Cache`](/de/docs/Web/API/Cache)
