---
title: "IDBDatabase: version-Eigenschaft"
short-title: version
slug: Web/API/IDBDatabase/version
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`version`**-Eigenschaft der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Schnittstelle ist eine 64-Bit-Ganzzahl, die die Version der verbundenen Datenbank enthält. Wenn eine Datenbank erstmals erstellt wird, ist dieses Attribut ein leerer String.

## Wert

Eine Ganzzahl, die die Version der verbundenen Datenbank enthält.

## Beispiele

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database
// being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the version of the connected database, which should be "4"
  console.log(db.version);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
