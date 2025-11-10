---
title: "IDBObjectStore: deleteIndex() Methode"
short-title: deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`deleteIndex()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces entfernt den Index mit dem angegebenen Namen in der verbundenen Datenbank, genutzt während eines Versionsupgrades.

Beachten Sie, dass diese Methode nur aus einem `VersionChange`-Transaktionsmodus-Callback aufgerufen werden darf. Beachten Sie, dass diese Methode die [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames)-Eigenschaft synchron ändert.

## Syntax

```js-nolint
deleteIndex(indexName)
```

### Parameter

- `indexName`
  - : Der Name des vorhandenen Indexes, der entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode nicht aus einem `versionchange`-Transaktionsmodus-Callback aufgerufen wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gehört, nicht aktiv ist (z. B. gelöscht oder entfernt wurde).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn kein Index mit dem gegebenen Namen (Groß-/Kleinschreibung beachten) in der Datenbank gefunden wird.

## Beispiele

Im folgenden Beispiel können Sie sehen, wie der [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Handler verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) wird verwendet, um neue Indizes im Objektspeicher zu erstellen, danach löschen wir die nicht benötigten alten Indizes mit `deleteIndex()`. Für ein vollständiges Arbeitsbeispiel, sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

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
  db = event.target.result;

  // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of the database needs to be created
// Either one has not been created before, or a new version number has been submitted via the
// window.indexedDB.open line above
// it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Error loading database.";
  };

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });

  objectStore.deleteIndex("seconds");
  objectStore.deleteIndex("contact");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Nutzung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselsbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursor: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
