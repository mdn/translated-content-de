---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: d1fd21c87a4917e56dab84fc0b1d321ebb22874e
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBObjectStore`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen Objektspeicher in einer Datenbank. Datensätze innerhalb eines Objektspeichers werden nach ihren Schlüsseln sortiert. Diese Sortierung ermöglicht schnelles Einfügen, Suchen und geordnetes Abrufen.

## Instanz-Eigenschaften

- [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames) {{ReadOnlyInline}}
  - : Eine Liste der Namen der [Indizes](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#index) für Objekte in diesem Objektspeicher.
- [`IDBObjectStore.keyPath`](/de/docs/Web/API/IDBObjectStore/keyPath) {{ReadOnlyInline}}
  - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Objektspeichers. Wenn dieses Attribut `null` ist, muss die Anwendung einen Schlüssel für jede Änderungsoperation bereitstellen.
- [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name)
  - : Der Name dieses Objektspeichers.
- [`IDBObjectStore.transaction`](/de/docs/Web/API/IDBObjectStore/transaction) {{ReadOnlyInline}}
  - : Das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, zu dem dieser Objektspeicher gehört.
- [`IDBObjectStore.autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) {{ReadOnlyInline}}
  - : Der Wert des Auto-Inkrement-Flags für diesen Objektspeicher.

## Instanz-Methoden

- [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies dient zum Hinzufügen neuer Datensätze zu einem Objektspeicher.
- [`IDBObjectStore.clear()`](/de/docs/Web/API/IDBObjectStore/clear)
  - : Erstellt und gibt sofort ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht diesen Objektspeicher in einem separaten Thread. Dies dient zum Löschen aller aktuellen Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und gibt in einem separaten Thread die Gesamtzahl der Datensätze zurück, die mit dem bereitgestellten Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) übereinstimmen. Wenn keine Argumente angegeben werden, gibt es die Gesamtzahl der Datensätze im Speicher zurück.
- [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex)
  - : Erstellt während eines Versions-Upgrade einen neuen Index und gibt ein neues [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt in der verbundenen Datenbank zurück.
- [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread das durch den angegebenen Schlüssel ausgewählte Speicherobjekt. Dies dient zum Löschen einzelner Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.deleteIndex()`](/de/docs/Web/API/IDBObjectStore/deleteIndex)
  - : Zerstört den angegebenen Index in der verbundenen Datenbank, wird während eines Versions-Upgrades verwendet.
- [`IDBObjectStore.get()`](/de/docs/Web/API/IDBObjectStore/get)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und gibt in einem separaten Thread das durch den angegebenen Schlüssel ausgewählte Speicherobjekt zurück. Dies dient zum Abrufen spezifischer Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und ruft in einem separaten Thread den Datensatzschlüssel für das Objekt im Objektspeicher ab, das mit dem angegebenen Parameter übereinstimmt.
- [`IDBObjectStore.getAll()`](/de/docs/Web/API/IDBObjectStore/getAll)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und ruft in einem separaten Thread alle Objekte im Objektspeicher ab, die mit dem angegebenen Parameter übereinstimmen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- [`IDBObjectStore.getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und ruft in einem separaten Thread die Datensatzschlüssel für alle Objekte im Objektspeicher ab, die mit dem angegebenen Parameter übereinstimmen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread alle übereinstimmenden Datensätze im Objektspeicher (einschließlich Primärschlüssel und Werte), die dem angegebenen Schlüssel entsprechen oder im Bereich liegen, wenn `key` ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist.
- [`IDBObjectStore.index()`](/de/docs/Web/API/IDBObjectStore/index)
  - : Öffnet einen Index aus diesem Objektspeicher, der anschließend z. B. verwendet werden kann, um eine Sequenz von Datensätzen zu sortieren, die nach diesem Index mit einem Cursor sortiert sind.
- [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und gibt in einem separaten Thread ein neues [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt zurück. Wird zum Durchlaufen eines Objektspeichers nach Primärschlüssel mit einem Cursor verwendet.
- [`IDBObjectStore.openKeyCursor()`](/de/docs/Web/API/IDBObjectStore/openKeyCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und gibt in einem separaten Thread ein neues [`IDBCursor`](/de/docs/Web/API/IDBCursor) zurück. Wird zum Durchlaufen eines Objektspeichers mit einem Schlüssel verwendet.
- [`IDBObjectStore.put()`](/de/docs/Web/API/IDBObjectStore/put)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies ist zum Aktualisieren vorhandener Datensätze in einem Objektspeicher, wenn der Modus der Transaktion `readwrite` ist.

## Beispiel

Dieses Beispiel zeigt eine Vielzahl unterschiedlicher Verwendungen von Objektspeichern, vom Aktualisieren der Datenstruktur mit [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) innerhalb einer `onupgradeneeded`-Funktion bis hin zum Hinzufügen eines neuen Elements zu unserem Objektspeicher mit [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add). Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in db.
  db = DBOpenRequest.result;
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

  note.appendChild(document.createElement("li")).textContent =
    "Object store created.";
};

// Create a new item to add in to the object store
const newItem = [
  {
    taskTitle: "Walk dog",
    hours: 19,
    minutes: 30,
    day: 24,
    month: "December",
    year: 2013,
    notified: "no",
  },
];

// open a read/write db transaction, ready for adding the data
const transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of the transaction completing, when everything is done
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaction completed.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaction not opened due to error. Duplicate items not allowed.";
};

// create an object store on the transaction
const objectStore = transaction.objectStore("toDoList");
// make a request to add our newItem object to the object store
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Request successful.";
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
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
