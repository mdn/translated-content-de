---
title: "Lock: mode-Eigenschaft"
short-title: mode
slug: Web/API/Lock/mode
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`mode`**-Eigenschaft des [`Lock`](/de/docs/Web/API/Lock)-Interface, die nur lesbar ist, gibt den Zugriffsmodus zurück, der an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wurde, als das Lock angefordert wurde. Der Modus ist entweder `"exclusive"` (der Standard) oder `"shared"`.

## Wert

Einer von `"exclusive"` oder `"shared"`.

## Beispiele

Die folgenden Beispiele zeigen, wie die mode-Eigenschaft in dem Aufruf von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wird.
[`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

```js
// Should show "exclusive" (the default)
navigator.locks.request("my_resource", showLockProperties);

// Should show "exclusive"
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  showLockProperties,
);

// Should show "shared"
navigator.locks.request("my_resource", { mode: "shared" }, showLockProperties);

function showLockProperties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
