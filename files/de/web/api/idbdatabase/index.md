---
title: IDBDatabase
slug: Web/API/IDBDatabase
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBDatabase`**-Interface der IndexedDB-API bietet eine [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection); Sie können ein `IDBDatabase`-Objekt verwenden, um eine [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction) in Ihrer Datenbank zu eröffnen und dann Objekte (Daten) in dieser Datenbank zu erstellen, zu manipulieren und zu löschen. Das Interface bietet die einzige Möglichkeit, Versionen der Datenbank zu erhalten und zu verwalten.

> [!NOTE]
> Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#transaction), die Interaktionen mit Daten in der Datenbank darstellt. Alle Objekte in IndexedDB — einschließlich Objekt-Speicher, Indizes und Cursor — sind an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen, auf Daten zugreifen oder irgendetwas außerhalb einer Transaktion öffnen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`IDBDatabase.name`](/de/docs/Web/API/IDBDatabase/name) {{ReadOnlyInline}}
  - : Ein String, der den Namen der verbundenen Datenbank enthält.
- [`IDBDatabase.version`](/de/docs/Web/API/IDBDatabase/version) {{ReadOnlyInline}}
  - : Ein 64-Bit-Integer, der die Version der verbundenen Datenbank enthält. Wenn eine Datenbank zuerst erstellt wird, ist dieses Attribut ein leerer String.
- [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames) {{ReadOnlyInline}}
  - : Eine [`DOMStringList`](/de/docs/Web/API/DOMStringList), die eine Liste der Namen der [Objekt-Speicher](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#object_store) enthält, die derzeit in der verbundenen Datenbank vorhanden sind.

## Instanzmethoden

Erbt von: [EventTarget](/de/docs/Web/API/EventTarget)

- [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close)
  - : Gibt sofort zurück und schließt die Verbindung zu einer Datenbank in einem separaten Thread.
- [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore)
  - : Erstellt und gibt einen neuen Objekt-Speicher oder Index zurück.
- [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore)
  - : Zerstört den Objekt-Speicher mit dem angegebenen Namen in der verbundenen Datenbank sowie alle Indizes, die darauf verweisen.
- [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction)
  - : Gibt sofort ein Transaktions-Objekt ([`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) zurück, das die Methode [`IDBTransaction.objectStore`](/de/docs/Web/API/IDBTransaction/objectStore) enthält, die Sie verwenden können, um auf Ihren Objekt-Speicher zuzugreifen. Läuft in einem separaten Thread.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`close`](/de/docs/Web/API/IDBDatabase/close_event)

  - : Ein Ereignis, das ausgelöst wird, wenn die Datenbankverbindung unerwartet geschlossen wird.

- [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Änderung der Datenbankstruktur angefordert wurde.

Die folgenden Ereignisse sind für `IDBDatabase` verfügbar durch Ereignis-Bubbling von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction):

- `IDBTransaction` [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Transaktion abgebrochen wird.
- `IDBTransaction` [`error`](/de/docs/Web/API/IDBTransaction/error_event)
  - : Ein Ereignis, das ausgelöst wird, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis zum Verbindungsobjekt hochblubbert.

## Beispiel

Im folgenden Code-Snippet öffnen wir eine Datenbank asynchron ([`IDBFactory`](/de/docs/Web/API/IDBFactory)), behandeln Erfolgs- und Fehlerfälle und erstellen einen neuen Objekt-Speicher, falls ein Upgrade erforderlich ist (`IDBDatabase`). Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

Die nächste Zeile öffnet eine Transaktion in der Datenbank, dann einen Objekt-Speicher, den wir dann innerhalb dessen manipulieren können.

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
