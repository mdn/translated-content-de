---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBOpenDBRequest`**-Schnittstelle der IndexedDB-API bietet Zugriff auf die Ergebnisse von Anfragen zum Öffnen oder Löschen von Datenbanken (durchgeführt mit [`IDBFactory.open`](/de/docs/Web/API/IDBFactory/open) und [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)), unter Verwendung spezifischer Ereignishandler-Attribute.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinen Eltern [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget)_.

## Instanz-Methoden

_Keine Methoden, erbt jedoch Methoden von seinen Eltern [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

_Ereignisse, die bei übergeordneten Schnittstellen definiert sind, [`IDBRequest`](/de/docs/Web/API/IDBRequest) und [`EventTarget`](/de/docs/Web/API/EventTarget), können auch bei `IDBOpenDBRequest`-Objekten ausgelöst werden._

Hören Sie diese generischen und spezifischen Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab.

Ereignisse, die spezifisch für diese Schnittstelle sind, umfassen:

- [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - : Wird ausgelöst, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion auf derselben Datenbank blockiert. Auch über die [`onblocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event) Eigenschaft verfügbar.
- [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)
  - : Wird ausgelöst, wenn versucht wurde, eine Datenbank mit einer Versionsnummer zu öffnen, die höher ist als die aktuelle Version. Auch über die [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Eigenschaft verfügbar.

## Beispiel

Im folgenden Beispiel sehen Sie, wie der `onupgradeneeded`-Handler verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. Ein vollständiges funktionierendes Beispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/).)

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

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
