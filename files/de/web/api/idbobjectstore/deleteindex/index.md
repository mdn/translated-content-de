---
title: "IDBObjectStore: deleteIndex() Methode"
short-title: deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`deleteIndex()`** Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Interfaces zerstört den Index mit dem angegebenen Namen in der verbundenen Datenbank, verwendet während eines Versionsupgrades.

Beachten Sie, dass diese Methode nur aus einem `VersionChange`-Transaktionsmodus-Callback aufgerufen werden muss. Beachten Sie, dass diese Methode die [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames) Eigenschaft synchron ändert.

## Syntax

```js-nolint
deleteIndex(indexName)
```

### Parameter

- `indexName`
  - : Der Name des zu entfernenden vorhandenen Index.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode nicht aus einem `versionchange`-Transaktionsmodus-Callback aufgerufen wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gehört, nicht aktiv ist (z. B. gelöscht oder entfernt wurde).
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn in der Datenbank kein Index mit dem angegebenen Namen (Groß-/Kleinschreibung beachten) vorhanden ist.

## Beispiele

Im folgenden Beispiel sehen Sie den [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Handler, der verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) wird verwendet, um neue Indizes im Objekt-Store zu erstellen, danach löschen wir die nicht benötigten alten Indizes mit `deleteIndex()`. Für ein vollständiges funktionierendes Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
//it is only implemented in recent browsers
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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
