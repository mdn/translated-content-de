---
title: "CacheStorage: delete()-Methode"
short-title: delete()
slug: Web/API/CacheStorage/delete
l10n:
  sourceCommit: 2e327846966abb10de0b1c9bedc584caab71ec97
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode der [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle findet das [`Cache`](/de/docs/Web/API/Cache)-Objekt, das mit dem `cacheName` übereinstimmt, und löscht das [`Cache`](/de/docs/Web/API/Cache)-Objekt, sofern es gefunden wurde, und gibt ein {{jsxref("Promise")}} zurück, das auf `true` aufgelöst wird.
Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden wird, wird es auf `false` aufgelöst.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
delete(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf `true` aufgelöst wird, wenn das [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden und gelöscht wird, und auf `false` andernfalls.

## Beispiele

In diesem Code-Snippet warten wir auf ein Aktivierungsereignis und führen dann einen [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Block aus, der alle alten, unbenutzten Caches löscht, bevor ein neuer Service Worker aktiviert wird. Hier haben wir ein Array von Cache-Namen, die wir behalten möchten (`cachesToKeep`). Wir geben die Schlüssel der Caches im [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt mit [`CacheStorage.keys`](/de/docs/Web/API/CacheStorage/keys) zurück und überprüfen dann jeden Schlüssel, um festzustellen, ob er sich im Array befindet. Wenn nicht, löschen wir es mit `delete()`.

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

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
