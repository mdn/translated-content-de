---
title: "WorkerGlobalScope: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/WorkerGlobalScope/indexedDB
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("IndexedDB")}}{{AvailableInWorkers("worker")}}

Die **`indexedDB`** schreibgeschützte Eigenschaft der {{domxref("WorkerGlobalScope")}}-Schnittstelle bietet Arbeitern eine Möglichkeit, asynchron auf die Funktionen von indizierten Datenbanken zuzugreifen.

## Wert

Ein {{domxref("IDBFactory")}}-Objekt.

## Beispiele

Der folgende Code erstellt eine Anfrage zum asynchronen Öffnen einer Datenbank. Die Datenbank wird geöffnet, wenn der `onsuccess`-Handler der Anfrage ausgelöst wird:

```js
let db;
function openDB() {
  const DBOpenRequest = self.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = (e) => {
    db = DBOpenRequest.result;
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
