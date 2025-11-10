---
title: "Lock: name-Eigenschaft"
short-title: name
slug: Web/API/Lock/name
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`name`**-Eigenschaft des [`Lock`](/de/docs/Web/API/Lock)-Interfaces, die nur lesbar ist, gibt den _Namen_ zurück, der beim Anfordern des Locks an [`LockManager.request`](/de/docs/Web/API/LockManager/request) übergeben wurde.

Der Name eines Locks wird im Skript festgelegt, wenn der Lock angefordert wird. Der Name wird vom Entwickler ausgewählt, um eine abstrakte Ressource zu repräsentieren, für die die Nutzung über mehrere Tabs, Worker oder anderen Code innerhalb des Ursprungs koordiniert wird. Zum Beispiel, wenn nur ein Tab einer Webanwendung Netzwerkressourcen mit einer Offline-Datenbank synchronisieren soll, könnte es einen Lock-Namen wie `"net_db_sync"` verwenden.

## Wert

Ein String.

## Beispiele

Die folgenden Beispiele zeigen, wie die name-Eigenschaft im Aufruf von [`LockManager.request()`](/de/docs/Web/API/LockManager/request) übergeben wird. [`LockManager`](/de/docs/Web/API/LockManager) ist das Objekt, das von [`navigator.locks`](/de/docs/Web/API/Navigator/locks) zurückgegeben wird.

```js
navigator.locks.request("net_db_sync", showLockProperties);

function showLockProperties(lock) {
  console.log(`The lock name is: ${lock.name}`);
  console.log(`The lock mode is: ${lock.mode}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
