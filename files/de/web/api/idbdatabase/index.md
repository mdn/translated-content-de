---
title: IDBDatabase
slug: Web/API/IDBDatabase
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBDatabase`**-Interface der IndexedDB-API bietet eine [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection); Sie können ein `IDBDatabase`-Objekt nutzen, um eine [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) auf Ihrer Datenbank zu öffnen, und dann Objekte (Daten) in dieser Datenbank zu erstellen, zu manipulieren und zu löschen. Das Interface bietet die einzige Möglichkeit, an Versionsinformationen der Datenbank zu gelangen und diese zu verwalten.

> [!NOTE]
> Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction), die Interaktionen mit den Daten in der Datenbank repräsentiert. Alle Objekte in IndexedDB — einschließlich Object Stores, Indizes und Cursor — sind an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen, auf Daten zugreifen oder etwas außerhalb einer Transaktion öffnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`IDBDatabase.name`](/de/docs/Web/API/IDBDatabase/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen der verbundenen Datenbank enthält.
- [`IDBDatabase.version`](/de/docs/Web/API/IDBDatabase/version) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Version der verbundenen Datenbank enthält. Wenn eine Datenbank erstmals erstellt wird, ist dieses Attribut ein leerer String.
- [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames) {{ReadOnlyInline}}
  - : Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList), die eine Liste der Namen der [Object Stores](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die sich derzeit in der verbundenen Datenbank befinden.

## Instanz-Methoden

Erbt von: [EventTarget](/de/docs/Web/API/EventTarget)

- [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close)
  - : Gibt sofort zurück und schließt die Verbindung zu einer Datenbank in einem separaten Thread.
- [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore)
  - : Erstellt und gibt einen neuen Object Store oder Index zurück.
- [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore)
  - : Zerstört den Object Store mit dem angegebenen Namen in der verbundenen Datenbank sowie alle Indizes, die darauf verweisen.
- [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)
  - : Gibt sofort ein Transaktionsobjekt ([`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) mit der Methode [`IDBTransaction.objectStore`](/de/docs/Web/API/IDBTransaction/objectStore) zurück, das Sie verwenden können, um auf Ihren Object Store zuzugreifen. Läuft in einem separaten Thread.

## Ereignisse

Diese Ereignisse können mit `addEventListener()` überwacht oder einem Event-Listener über die `oneventname`-Eigenschaft dieses Interfaces zugewiesen werden.

- [`close`](/de/docs/Web/API/IDBDatabase/close_event)

  - : Ein Ereignis, das ausgelöst wird, wenn die Datenbankverbindung unerwartet geschlossen wird.

- [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Änderung der Datenbankstruktur angefordert wird.

Die folgenden Ereignisse sind für `IDBDatabase` über Event-Bubbling von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) verfügbar:

- `IDBTransaction` [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Transaktion abgebrochen wird.
- `IDBTransaction` [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Verbindungsobjekt nach oben weitergeleitet wird.

## Beispiel

Im folgenden Codeausschnitt öffnen wir eine Datenbank asynchron ([`IDBFactory`](/de/docs/Web/API/IDBFactory)), behandeln Erfolgs- und Fehlerfälle und erstellen, falls ein Upgrade erforderlich ist, einen neuen Object Store (`IDBDatabase`). Ein vollständiges Arbeitsbeispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the IDBDatabase object,
// when the database is opened successfully, or not
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  node.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db
  // variable. This is used a lot later on
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task
  // list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of
// the database needs to be created Either one has not
// been created before, or a new version number has been
// submitted via the window.indexedDB.open line above

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Error loading database.";
  };

  // Create an objectStore for this database using
  // IDBDatabase.createObjectStore

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

  note.appendChild(document.createElement("li")).textContent =
    "Object store created.";
};
```

Diese nächste Zeile öffnet eine Transaktion auf der Datenbank und danach einen Object Store, in dem wir die Daten manipulieren können.

```js
const objectStore = db
  .transaction("toDoList", "readwrite")
  .objectStore("toDoList");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
