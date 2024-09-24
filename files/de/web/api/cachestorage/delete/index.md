---
title: "CacheStorage: delete()-Methode"
short-title: delete()
slug: Web/API/CacheStorage/delete
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der {{domxref("CacheStorage")}}-Schnittstelle findet das {{domxref("Cache")}}-Objekt, das mit dem `cacheName` übereinstimmt, und entfernt das {{domxref("Cache")}}-Objekt, wenn es gefunden wird. Anschließend gibt sie ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird. Wenn kein {{domxref("Cache")}}-Objekt gefunden wird, wird es zu `false` aufgelöst.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}}-Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
delete(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn das {{domxref("Cache")}}
Objekt gefunden und gelöscht wird, und andernfalls zu `false`.

## Beispiele

In diesem Code-Snippet warten wir auf ein Aktivierungsereignis und führen dann einen
{{domxref("ExtendableEvent.waitUntil","waitUntil()")}}-Block aus, der alle alten,
nicht verwendeten Caches bereinigt, bevor ein neuer Service Worker aktiviert wird. Hier haben wir ein Array von Cache-Namen, die wir behalten möchten (`cachesToKeep`). Wir geben die Schlüssel der Caches im
{{domxref("CacheStorage")}}-Objekt mit {{domxref("CacheStorage.keys")}} zurück und
überprüfen dann jeden Schlüssel, ob er sich im Array befindet. Wenn nicht, löschen wir ihn mit
`delete()`.

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
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
