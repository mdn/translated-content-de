---
title: "Lock: name-Eigenschaft"
short-title: name
slug: Web/API/Lock/name
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`name`**-Schreibgeschützte Eigenschaft der [`Lock`](/de/docs/Web/API/Lock)-Schnittstelle gibt den _Namen_ zurück, der an [`LockManager.request`](/de/docs/Web/API/LockManager/request) übergeben wurde, als die Sperre angefordert wurde.

Der Name einer Sperre wird durch Skript angegeben, wenn die Sperre angefordert wird. Der Name wird vom Entwickler ausgewählt, um eine abstrakte Ressource zu repräsentieren, deren Nutzung über mehrere Tabs, Worker oder anderen Code innerhalb des Ursprungs koordiniert werden soll. Zum Beispiel, wenn nur ein Tab einer Webanwendung Netzwerkressourcen mit einer Offline-Datenbank synchronisieren sollte, könnte es einen Sperrenamen wie `"net_db_sync"` verwenden.

## Wert

Ein Zeichenfolge.

## Beispiele

Die folgenden Beispiele zeigen, wie die name-Eigenschaft in dem Aufruf an [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wird. [`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

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
