---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBObjectStore`** Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen Objektspeicher in einer Datenbank. Datensätze innerhalb eines Objektspeichers sind gemäß ihrer Schlüssel sortiert. Diese Sortierung ermöglicht schnelles Einfügen, Nachschlagen und geordnete Abfrage.

## Instanz-Eigenschaften

- [`IDBObjectStore.indexNames`](/de/docs/Web/API/IDBObjectStore/indexNames) {{ReadOnlyInline}}
  - : Eine Liste der Namen der [Indizes](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#index) auf Objekten in diesem Objektspeicher.
- [`IDBObjectStore.keyPath`](/de/docs/Web/API/IDBObjectStore/keyPath) {{ReadOnlyInline}}
  - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Objektspeichers. Wenn dieses Attribut `null` ist, muss die Anwendung für jede Änderungsoperation einen Schlüssel bereitstellen.
- [`IDBObjectStore.name`](/de/docs/Web/API/IDBObjectStore/name)
  - : Der Name dieses Objektspeichers.
- [`IDBObjectStore.transaction`](/de/docs/Web/API/IDBObjectStore/transaction) {{ReadOnlyInline}}
  - : Das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) Objekt, zu dem dieser Objektspeicher gehört.
- [`IDBObjectStore.autoIncrement`](/de/docs/Web/API/IDBObjectStore/autoIncrement) {{ReadOnlyInline}}
  - : Der Wert der Auto-Increment-Flagge für diesen Objektspeicher.

## Instanz-Methoden

- [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies dient dem Hinzufügen neuer Datensätze zu einem Objektspeicher.
- [`IDBObjectStore.clear()`](/de/docs/Web/API/IDBObjectStore/clear)
  - : Erstellt und gibt sofort ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und löscht diesen Objektspeicher in einem separaten Thread. Dies dient dem Löschen aller aktuellen Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.count()`](/de/docs/Web/API/IDBObjectStore/count)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und liefert in einem separaten Thread die Gesamtzahl der Datensätze, die mit dem angegebenen Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) übereinstimmen. Wenn keine Argumente angegeben sind, wird die Gesamtzahl der Datensätze im Speicher zurückgegeben.
- [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex)
  - : Erstellt einen neuen Index während eines Versions-Updates, der ein neues [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekt in der verbundenen Datenbank zurückgibt.
- [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und löscht in einem separaten Thread das Speicherobjekt, das durch den angegebenen Schlüssel ausgewählt wurde. Dies dient dem Löschen einzelner Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.deleteIndex()`](/de/docs/Web/API/IDBObjectStore/deleteIndex)
  - : Zerstört den angegebenen Index in der verbundenen Datenbank, der während eines Versions-Upgrades verwendet wird.
- [`IDBObjectStore.get()`](/de/docs/Web/API/IDBObjectStore/get)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und liefert in einem separaten Thread das Speicherobjekt, das durch den angegebenen Schlüssel ausgewählt wurde. Dies dient dem Abrufen bestimmter Datensätze aus einem Objektspeicher.
- [`IDBObjectStore.getKey()`](/de/docs/Web/API/IDBObjectStore/getKey)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und holt und liefert in einem separaten Thread den Datensatzschlüssel für das Objekt im Objektspeicher, das dem angegebenen Parameter entspricht.
- [`IDBObjectStore.getAll()`](/de/docs/Web/API/IDBObjectStore/getAll)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und holt alle Objekte im Objektspeicher, die dem angegebenen Parameter entsprechen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- [`IDBObjectStore.getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und holt die Datensatzschlüssel für alle Objekte im Objektspeicher, die dem angegebenen Parameter entsprechen, oder alle Objekte im Speicher, wenn keine Parameter angegeben sind.
- [`IDBObjectStore.index()`](/de/docs/Web/API/IDBObjectStore/index)
  - : Öffnet einen Index aus diesem Objektspeicher, nach dem beispielsweise eine Folge von Datensätzen nach diesem Index mit einem Cursor sortiert zurückgegeben werden kann.
- [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und liefert in einem separaten Thread ein neues [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) Objekt. Wird verwendet, um durch einen Objektspeicher nach Primärschlüssel mit einem Cursor zu iterieren.
- [`IDBObjectStore.openKeyCursor()`](/de/docs/Web/API/IDBObjectStore/openKeyCursor)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und liefert in einem separaten Thread ein neues [`IDBCursor`](/de/docs/Web/API/IDBCursor) Objekt. Wird verwendet, um durch einen Objektspeicher mit einem Schlüssel zu iterieren.
- [`IDBObjectStore.put()`](/de/docs/Web/API/IDBObjectStore/put)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des `value` und speichert den geklonten Wert im Objektspeicher. Dies dient dem Aktualisieren bestehender Datensätze in einem Objektspeicher, wenn der Modus der Transaktion `readwrite` ist.

## Beispiel

Dieses Beispiel zeigt eine Vielzahl unterschiedlicher Anwendungen von Objektspeichern, vom Aktualisieren der Datenstruktur mit [`IDBObjectStore.createIndex`](/de/docs/Web/API/IDBObjectStore/createIndex) innerhalb einer `onupgradeneeded` Funktion, bis hin zum Hinzufügen eines neuen Elements zu unserem Objektspeicher mit [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add). Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
