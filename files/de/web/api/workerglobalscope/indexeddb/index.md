---
title: "WorkerGlobalScope: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/WorkerGlobalScope/indexedDB
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("IndexedDB")}}{{AvailableInWorkers("worker")}}

Die **`indexedDB`** schreibgeschützte Eigenschaft der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle bietet einen Mechanismus für Worker, um asynchron auf die Funktionen von indizierten Datenbanken zuzugreifen.

## Wert

Ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt.

## Beispiele

Der folgende Code erstellt eine Anfrage zum asynchronen Öffnen einer Datenbank, wonach die Datenbank geöffnet wird, wenn der `onsuccess`-Handler der Anfrage ausgelöst wird:

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
