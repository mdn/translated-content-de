---
title: "IDBDatabase: objectStoreNames Eigenschaft"
short-title: objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`objectStoreNames`** schreibgeschützte Eigenschaft des [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Interfaces ist eine [`DOMStringList`](/de/docs/Web/API/DOMStringList), die eine Liste der Namen der [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die derzeit in der verbundenen Datenbank vorhanden sind.

## Wert

Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList), die eine Liste der Namen der [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die derzeit in der verbundenen Datenbank vorhanden sind.

## Beispiele

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable. This is used a lot below
  db = DBOpenRequest.result;

  // This line will log the names of the object stores of the connected database, which should be
  // an object that looks like { ['my-store-name'] }
  console.log(db.objectStoreNames);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
