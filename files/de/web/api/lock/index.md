---
title: Sperre
slug: Web/API/Lock
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Das **`Lock`**-Interface der [Web Locks API](/de/docs/Web/API/Web_Locks_API) liefert den Namen und den Modus einer Sperre.
Dies kann eine neu angeforderte Sperre sein, die im Callback von {{domxref('LockManager.request','LockManager.request()')}} empfangen wird, oder ein Eintrag einer aktiven oder wartenden Sperre, die von {{domxref('LockManager.query()')}} zurückgegeben wird.

## Instanz-Eigenschaften

- {{domxref('Lock.mode')}} {{ReadOnlyInline}}
  - : Gibt den Zugriffsmodus zurück, der an {{domxref('LockManager.request()')}} übergeben wurde, als die Sperre angefordert wurde.
    Der Modus ist entweder `"exclusive"` (der Standard) oder `"shared"`.
- {{domxref('Lock.name')}} {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der an {{domxref('LockManager.request()')}} übergeben wurde, als die Sperre angefordert wurde.

## Beispiele

Die folgenden Beispiele zeigen, wie die Eigenschaften Modus und Name im Aufruf von {{domxref('LockManager.request()')}} übergeben werden.
{{domxref('LockManager')}} ist das Objekt, das von {{domxref('navigator.locks')}} zurückgegeben wird.

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
