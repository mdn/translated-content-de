---
title: "IDBDatabase: version-Eigenschaft"
short-title: version
slug: Web/API/IDBDatabase/version
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`version`**-Eigenschaft des [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Interfaces ist ein [64-Bit-Integer](/de/docs/NSPR_API_Reference/Long_Long_%2864-bit%29_Integers), das die Version der verbundenen Datenbank enthält. Wenn eine Datenbank erstmals erstellt wird, ist dieses Attribute ein leerer String.

## Wert

Ein Integer, der die Version der verbundenen Datenbank enthält.

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
- Ein Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursor: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
