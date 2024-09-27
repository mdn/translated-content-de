---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBOpenDBRequest`**-Schnittstelle der IndexedDB API bietet Zugriff auf die Ergebnisse von Anfragen zum Öffnen oder Löschen von Datenbanken (durchgeführt mit [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) und [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)), unter Verwendung spezifischer Ereignis-Handler-Attribute.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinen Eltern-Schnittstellen [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Instanz-Methoden

_Keine Methoden, aber erbt Methoden von seinen Eltern-Schnittstellen [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_Ereignisse, die auf Eltern-Schnittstellen [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget) definiert sind, können auch auf `IDBOpenDBRequest`-Objekten ausgelöst werden._

Sie können auf diese generischen und spezifischen Ereignisse hören, indem Sie `addEventListener()` verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

Ereignisse, die spezifisch für diese Schnittstelle sind:

- [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : Wird ausgelöst, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion auf derselben Datenbank blockiert. Auch verfügbar über die [`onblocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event) Eigenschaft.
- [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : Wird ausgelöst, wenn versucht wurde, eine Datenbank mit einer höheren Versionsnummer als der aktuellen zu öffnen. Auch verfügbar über die [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Eigenschaft.

## Beispiel

Im folgenden Beispiel können Sie sehen, wie der onupgradeneeded-Handler verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these event handlers act on the database being opened.
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db
  // variable. This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task
  // list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above
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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
