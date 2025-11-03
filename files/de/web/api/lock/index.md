---
title: Lock
slug: Web/API/Lock
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Lock`**-Interface der [Web Locks API](/de/docs/Web/API/Web_Locks_API) liefert den Namen und Modus eines Sperrelements.
Dies kann eine neu angeforderte Sperrelement sein, das im Callback von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird, oder ein Datensatz einer aktiven oder eingereihten Sperrelement, der durch [`LockManager.query()`](/de/docs/Web/API/LockManager/query) zurückgegeben wird.

## Instanzeigenschaften

- [`Lock.mode`](/de/docs/Web/API/Lock/mode) {{ReadOnlyInline}}
  - : Gibt den Zugriffsmodus zurück, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als die Sperre angefordert wurde.
    Der Modus ist entweder `"exclusive"` (der Standard) oder `"shared"`.
- [`Lock.name`](/de/docs/Web/API/Lock/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als die Sperre angefordert wurde.

## Beispiele

Die folgenden Beispiele zeigen, wie die Eigenschaften `mode` und `name` im Aufruf von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben werden.
[`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

```js
navigator.locks.request("net_db_sync", showLockProperties);
navigator.locks.request("another_lock", { mode: "shared" }, showLockProperties);

function showLockProperties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
