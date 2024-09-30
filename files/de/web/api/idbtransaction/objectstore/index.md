---
title: "IDBTransaction: objectStore() Methode"
short-title: objectStore()
slug: Web/API/IDBTransaction/objectStore
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`objectStore()`**-Methode des
[`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Interfaces gibt einen Object Store zurück, der bereits zum Scope dieser Transaktion hinzugefügt wurde.

Jeder Aufruf dieser Methode am gleichen Transaktionsobjekt mit dem gleichen Namen gibt
die gleiche [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Instanz zurück. Wird diese Methode an einem anderen
Transaktionsobjekt aufgerufen, wird eine andere [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Instanz zurückgegeben.

## Syntax

```js-nolint
objectStore(name)
```

### Parameter

- `name`
  - : Der Name des angeforderten Object Stores.

### Rückgabewert

Ein [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Objekt zum Zugriff auf einen Object Store.

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angeforderte Object Store nicht im Scope dieser Transaktion ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Anforderung an einem Quellobjekt gemacht wurde, das gelöscht oder entfernt wurde, oder wenn die Transaktion abgeschlossen ist.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreib-Transaktion in unserer Datenbank und fügen
einige Daten in einen Object Store ein. Beachten Sie auch die Funktionen, die den Transaktionsereignis-Handlern beigefügt sind, um über das Ergebnis des Transaktionsstarts im Falle eines Erfolgs oder
Fehlschlags zu berichten. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const note = document.getElementById("notifications");

// an instance of a db object for us to store the IDB data in
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready for being inserted into the IDB
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

  // report on the success of opening the transaction
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction completed: database modification finished.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction not opened due to error. Duplicate items not allowed.";
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.onsuccess)
    note.appendChild(document.createElement("li")).textContent =
      "Request successful.";
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursors verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
