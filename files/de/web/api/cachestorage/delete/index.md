---
title: "CacheStorage: delete()-Methode"
short-title: delete()
slug: Web/API/CacheStorage/delete
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`delete()`**-Methode des [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interfaces sucht das [`Cache`](/de/docs/Web/API/Cache)-Objekt, das dem `cacheName` entspricht. Wenn es gefunden wird, löscht die Methode das [`Cache`](/de/docs/Web/API/Cache)-Objekt und gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden wird, wird es zu `false` aufgelöst.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

## Syntax

```js-nolint
delete(cacheName)
```

### Parameter

- `cacheName`
  - : Der Name des Caches, den Sie löschen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu `true` aufgelöst wird, wenn das [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden und gelöscht wird, andernfalls `false`.

## Beispiele

In diesem Code-Snippet warten wir auf ein Aktivierungsereignis und führen dann einen [`waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil)-Block aus, der alle alten, ungenutzten Caches löscht, bevor ein neuer Service Worker aktiviert wird. Hier haben wir ein Array von Cache-Namen, die wir behalten möchten (`cachesToKeep`). Wir geben die Schlüssel der Caches im [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt mithilfe von [`CacheStorage.keys`](/de/docs/Web/API/CacheStorage/keys) zurück und überprüfen dann jeden Schlüssel, um zu sehen, ob er in dem Array ist. Wenn nicht, löschen wir ihn mit `delete()`.

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

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
