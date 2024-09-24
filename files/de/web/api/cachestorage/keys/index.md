---
title: "CacheStorage: keys() Methode"
short-title: keys()
slug: Web/API/CacheStorage/keys
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`keys()`** Methode der {{domxref("CacheStorage")}} Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem Array aufgelöst wird, das Strings enthält, die allen benannten {{domxref("Cache")}} Objekten entsprechen, die vom {{domxref("CacheStorage")}} Objekt in der Reihenfolge ihrer Erstellung nachverfolgt werden. Verwenden Sie diese Methode, um über eine Liste aller {{domxref("Cache")}} Objekte zu iterieren.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}} Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}} Eigenschaft in Arbeitern zugreifen.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

ein {{jsxref("Promise")}}, das mit einem Array der {{domxref("Cache")}} Namen innerhalb des {{domxref("CacheStorage")}} Objekts aufgelöst wird.

## Beispiele

In diesem Codebeispiel warten wir auf ein {{domxref("ServiceWorkerGlobalScope.activate_event", "activate")}} Ereignis und führen dann einen {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} Block aus, der alte, ungenutzte Caches aufräumt, bevor ein neuer Service Worker aktiviert wird. Hier haben wir eine Whitelist, die die Namen der Caches enthält, die wir behalten möchten (`cacheAllowlist`). Wir geben die Schlüssel der Caches im {{domxref("CacheStorage")}} Objekt mit `keys()` zurück und überprüfen dann jeden Schlüssel, um zu sehen, ob er in der Whitelist enthalten ist. Wenn nicht, löschen wir ihn mit {{domxref("CacheStorage.delete()")}}.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
