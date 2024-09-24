---
title: "Window: indexedDB-Eigenschaft"
short-title: indexedDB
slug: Web/API/Window/indexedDB
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{APIRef("IndexedDB")}}

Die schreibgeschützte **`indexedDB`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle bietet eine Möglichkeit für Anwendungen, asynchron auf die Funktionen von indizierten Datenbanken zuzugreifen.

## Wert

Ein {{domxref("IDBFactory")}}-Objekt.

## Beispiele

Der folgende Code erstellt eine Anfrage, um eine Datenbank asynchron zu öffnen, wobei die Datenbank geöffnet wird, wenn der `onsuccess`-Handler der Anfrage ausgelöst wird:

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
- Beginnen von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
