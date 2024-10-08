---
title: "CacheStorage: has() Methode"
short-title: has()
slug: Web/API/CacheStorage/has
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`has()`** Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn ein [`Cache`](/de/docs/Web/API/Cache)-Objekt mit dem `cacheName` übereinstimmt.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
has(cacheName)
```

### Parameter

- `cacheName`
  - : Ein String, der den Namen des [`Cache`](/de/docs/Web/API/Cache)-Objekts darstellt, das Sie in der [`CacheStorage`](/de/docs/Web/API/CacheStorage) suchen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der Cache existiert, oder auf `false`, wenn nicht.

## Beispiele

Im folgenden Beispiel wird zuerst überprüft, ob ein Cache namens 'v1' existiert. Wenn ja, fügen wir eine Liste von Ressourcen hinzu. Wenn nicht, führen wir eine Art Cache-Einrichtungsfunktion aus.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
