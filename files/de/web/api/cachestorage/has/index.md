---
title: "CacheStorage: has() Methode"
short-title: has()
slug: Web/API/CacheStorage/has
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`has()`**-Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn ein [`Cache`](/de/docs/Web/API/Cache)-Objekt dem `cacheName` entspricht.

Sie können `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern aufrufen.

## Syntax

```js-nolint
has(cacheName)
```

### Parameter

- `cacheName`
  - : Ein String, der den Namen des [`Cache`](/de/docs/Web/API/Cache)-Objekts darstellt, das Sie im [`CacheStorage`](/de/docs/Web/API/CacheStorage) suchen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der Cache existiert, oder `false`, wenn nicht.

## Beispiele

Das folgende Beispiel überprüft zuerst, ob ein Cache mit dem Namen 'v1' existiert. Falls ja, fügen wir eine Liste von Ressourcen hinzu. Falls nicht, führen wir eine Art von Cache-Einrichtungsfunktion aus.

```js
caches
  .has("v1")
  .then((hasCache) => {
    if (!hasCache) {
      someCacheSetupFunction();
    } else {
      caches.open("v1").then((cache) => cache.addAll(myAssets));
    }
  })
  .catch(() => {
    // Handle exception here.
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
