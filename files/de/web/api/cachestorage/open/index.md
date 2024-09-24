---
title: "CacheStorage: open()-Methode"
short-title: open()
slug: Web/API/CacheStorage/open
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`open()`**-Methode der {{domxref("CacheStorage")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich auf das {{domxref("Cache")}}-Objekt auflöst, das dem `cacheName` entspricht.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}}-Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft in Workern zugreifen.

> [!NOTE]
> Wenn der angegebene {{domxref("Cache")}} nicht existiert, wird ein neuer Cache mit diesem `cacheName` erstellt und ein {{jsxref("Promise")}}, das sich auf dieses neue {{domxref("Cache")}}-Objekt auflöst, zurückgegeben.

## Syntax

```js-nolint
open(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie öffnen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf das angeforderte {{domxref("Cache")}}-Objekt auflöst.

## Beispiele

Dieses Beispiel stammt aus dem MDN [einfaches Service Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfachen Service Worker live ausführen](https://bncb2v.csb.app/)). Hier warten wir auf ein {{domxref("InstallEvent")}}, das ausgelöst wird, und führen dann {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} aus, um den Installationsprozess für die App zu bearbeiten. Dies besteht darin, `CacheStorage.open()` aufzurufen, um einen neuen Cache zu erstellen, und dann {{domxref("Cache.addAll()")}} zu verwenden, um eine Reihe von Dateien hinzuzufügen.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
