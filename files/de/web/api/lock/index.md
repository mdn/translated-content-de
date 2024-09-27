---
title: Lock
slug: Web/API/Lock
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Lock`**-Interface der [Web Locks API](/de/docs/Web/API/Web_Locks_API) gibt den Namen und den Modus eines Locks an.
Dies kann ein neu angefordertes Lock sein, das im Callback von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) empfangen wird, oder ein Eintrag eines aktiven oder in der Warteschlange befindlichen Locks, das von [`LockManager.query()`](/de/docs/Web/API/LockManager/query) zurückgegeben wird.

## Instanz-Eigenschaften

- [`Lock.mode`](/de/docs/Web/API/Lock/mode) {{ReadOnlyInline}}
  - : Gibt den Zugriffsmodus zurück, der bei der Anforderung des Locks an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde.
    Der Modus ist entweder `"exclusive"` (Standard) oder `"shared"`.
- [`Lock.name`](/de/docs/Web/API/Lock/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der bei der Anforderung des Locks an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde.

## Beispiele

Die folgenden Beispiele zeigen, wie die Eigenschaften `mode` und `name` im Aufruf von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben werden.
[`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

```js
navigator.locks.request("net_db_sync", show_lock_properties);
navigator.locks.request(
  "another_lock",
  { mode: "shared" },
  show_lock_properties,
);

function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
