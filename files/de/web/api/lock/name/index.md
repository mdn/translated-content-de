---
title: "Lock: name-Eigenschaft"
short-title: name
slug: Web/API/Lock/name
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft der {{domxref("Lock")}}-Schnittstelle gibt den _Namen_ zurück, der an {{domxref('LockManager.request')}} übergeben wurde, als das Sperrelement angefordert wurde.

Der Name einer Sperre wird vom Skript bei der Anforderung der Sperre übergeben. Der Name wird vom Entwickler ausgewählt, um eine abstrakte Ressource darzustellen, deren Nutzung über mehrere Tabs, Worker oder anderen Code innerhalb des Ursprungs koordiniert wird. Beispielsweise, wenn nur ein Tab einer Webanwendung Netzwerkressourcen mit einer Offline-Datenbank synchronisieren sollte, könnte ein Sperrname wie `"net_db_sync"` verwendet werden.

## Wert

Ein String.

## Beispiele

Die folgenden Beispiele zeigen, wie die name-Eigenschaft im Aufruf von {{domxref('LockManager.request()')}} übergeben wird. {{domxref('LockManager')}} ist das Objekt, das von {{domxref('navigator.locks')}} zurückgegeben wird.

```js
navigator.locks.request("net_db_sync", show_lock_properties);

function show_lock_properties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
