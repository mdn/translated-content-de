---
title: "WorkerGlobalScope: caches-Eigenschaft"
short-title: caches
slug: Web/API/WorkerGlobalScope/caches
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Service Workers API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die **`caches`** schreibgeschützte Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist.
Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets zur offline Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.

## Wert

Ein [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen Cache im Kontext eines [Service Workers](/de/docs/Web/API/Service_Worker_API) verwenden, um Assets offline zu speichern.

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
