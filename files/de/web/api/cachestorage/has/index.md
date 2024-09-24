---
title: "CacheStorage: has()-Methode"
short-title: has()
slug: Web/API/CacheStorage/has
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`has()`**-Methode des {{domxref("CacheStorage")}} Interface gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird, wenn ein {{domxref("Cache")}}-Objekt den `cacheName` erfüllt.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}}-Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
has(cacheName)
```

### Parameter

- `cacheName`
  - : Ein String, der den Namen des {{domxref("Cache")}}-Objekts darstellt, das Sie im {{domxref("CacheStorage")}} suchen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn der Cache existiert, oder `false`, wenn nicht.

## Beispiele

Das folgende Beispiel überprüft zunächst, ob ein Cache namens 'v1' existiert. Wenn ja, fügen wir eine Liste von Assets hinzu. Falls nicht, führen wir eine Art Cache-Setup-Funktion aus.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
