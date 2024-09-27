---
title: "Window: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/Window/indexedDB
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{APIRef("IndexedDB")}}

Die schreibgeschützte **`indexedDB`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces bietet Anwendungen einen Mechanismus, um asynchron auf die Fähigkeiten von indizierten Datenbanken zuzugreifen.

## Wert

Ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt.

## Beispiele

Der folgende Code erstellt eine Anfrage, um eine Datenbank asynchron zu öffnen. Die Datenbank wird geöffnet, wenn der `onsuccess`-Handler der Anfrage ausgelöst wird:

```js
let db;
function openDB() {
  const DBOpenRequest = window.indexedDB.open("toDoList");
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
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
