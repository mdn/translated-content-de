---
title: "Lock: mode-Eigenschaft"
short-title: mode
slug: Web/API/Lock/mode
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`mode`**-Eigenschaft des [`Lock`](/de/docs/Web/API/Lock)-Interfaces gibt den Zugriffsmodus zurück, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als das Lock angefordert wurde. Der Modus ist entweder `"exclusive"` (die Standardeinstellung) oder `"shared"`.

## Wert

Entweder `"exclusive"` oder `"shared"`.

## Beispiele

Die folgenden Beispiele zeigen, wie die mode-Eigenschaft im Aufruf von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wird. [`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

```js
// Should show "exclusive" (the default)
navigator.locks.request("my_resource", show_lock_properties);

// Should show "exclusive"
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  show_lock_properties,
);

// Should show "shared"
navigator.locks.request(
  "my_resource",
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
