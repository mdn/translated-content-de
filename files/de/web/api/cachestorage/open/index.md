---
title: "CacheStorage: open()-Methode"
short-title: open()
slug: Web/API/CacheStorage/open
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`open()`**-Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf das [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird, das dem `cacheName` entspricht.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

> [!NOTE]
> Wenn das angegebene [`Cache`](/de/docs/Web/API/Cache) nicht existiert, wird ein neues Cache mit diesem `cacheName` erstellt und ein {{jsxref("Promise")}} zurückgegeben, das auf dieses neue [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

## Syntax

```js-nolint
open(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie öffnen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf das angeforderte [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfachen Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker in Betrieb](https://bncb2v.csb.app/)).
Hier warten wir darauf, dass ein [`InstallEvent`](/de/docs/Web/API/InstallEvent) ausgelöst wird und führen dann [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) aus, um den Installationsprozess für die App zu handhaben. Dies besteht darin, `CacheStorage.open()` aufzurufen, um einen neuen Cache zu erstellen, und dann [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) zu verwenden, um eine Reihe von Ressourcen hinzuzufügen.

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
