---
title: "Lock: Modus-Eigenschaft"
short-title: Modus
slug: Web/API/Lock/mode
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`mode`**-Eigenschaft (nur lesbar) des {{domxref("Lock")}}-Interfaces gibt den Zugriffsmodus zurück, der beim Anfordern der Sperre an {{domxref('LockManager.request()')}} übergeben wurde. Der Modus ist entweder `"exclusive"` (der Standard) oder `"shared"`.

## Wert

Einer der Werte `"exclusive"` oder `"shared"`.

## Beispiele

Die folgenden Beispiele zeigen, wie die Modus-Eigenschaft im Aufruf von {{domxref('LockManager.request()')}} übergeben wird.
{{domxref('LockManager')}} ist das Objekt, das von {{domxref('navigator.locks')}} zurückgegeben wird.

```js
// Sollte "exclusive" anzeigen (der Standard)
navigator.locks.request("my_resource", show_lock_properties);

// Sollte "exclusive" anzeigen
navigator.locks.request(
  "my_resource",
  { mode: "exclusive" },
  show_lock_properties,
);

// Sollte "shared" anzeigen
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
