---
title: "CacheStorage: keys() Methode"
short-title: keys()
slug: Web/API/CacheStorage/keys
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array aufgelöst wird, das Zeichenfolgen enthält, die allen benannten [`Cache`](/de/docs/Web/API/Cache) Objekten im [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt entsprechen, und zwar in der Reihenfolge, in der sie erstellt wurden.
Verwenden Sie diese Methode, um über eine Liste aller [`Cache`](/de/docs/Web/API/Cache) Objekte zu iterieren.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches) Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Array der [`Cache`](/de/docs/Web/API/Cache) Namen innerhalb des [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekts aufgelöst wird.

## Beispiele

In diesem Codebeispiel warten wir auf ein [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) Ereignis und führen dann einen [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) Block aus, der alle alten, unbenutzten Caches bereinigt, bevor ein neuer Service Worker aktiviert wird.
Hier haben wir eine Whitelist, die die Namen der Caches enthält, die wir behalten möchten (`cacheAllowlist`).
Wir geben die Schlüssel der Caches im [`CacheStorage`](/de/docs/Web/API/CacheStorage) Objekt mit `keys()` zurück und überprüfen dann jeden Schlüssel, ob er in der Whitelist enthalten ist.
Falls nicht, löschen wir ihn mit [`CacheStorage.delete()`](/de/docs/Web/API/CacheStorage/delete).

```js
this.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheAllowlist.includes(key)) {
            return caches.delete(key);
          }
          return undefined;
        }),
      ),
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
