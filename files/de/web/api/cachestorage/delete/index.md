---
title: "CacheStorage: delete() Methode"
short-title: delete()
slug: Web/API/CacheStorage/delete
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle findet das [`Cache`](/de/docs/Web/API/Cache)-Objekt, das dem `cacheName` entspricht, und wenn es gefunden wird, wird das [`Cache`](/de/docs/Web/API/Cache)-Objekt gelöscht und es wird ein {{jsxref("Promise")}} zurückgegeben, das zu `true` aufgelöst wird. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden wird, wird es zu `false` aufgelöst.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
delete(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn das [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden und gelöscht wird, und ansonsten zu `false`.

## Beispiele

In diesem Code-Snippet warten wir auf ein Aktivierungsereignis und führen dann einen [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Block aus, der alle alten, ungenutzten Caches löscht, bevor ein neuer Service Worker aktiviert wird. Hier haben wir ein Array von Cache-Namen, die wir behalten möchten (`cachesToKeep`). Wir geben die Schlüssel der Caches im [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt mit [`CacheStorage.keys`](/de/docs/Web/API/CacheStorage/keys) zurück und prüfen dann jeden Schlüssel, um festzustellen, ob er sich im Array befindet. Wenn nicht, löschen wir ihn mit `delete()`.

```js
this.addEventListener("activate", (event) => {
  const cachesToKeep = ["v2"];

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cachesToKeep.includes(key)) {
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
