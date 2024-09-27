---
title: "IDBTransaction: error-Eigenschaft"
short-title: error
slug: Web/API/IDBTransaction/error
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`IDBTransaction.error`**-Eigenschaft des [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Interfaces
gibt die Art des Fehlers zurück, wenn eine Transaktion nicht erfolgreich ist.

## Wert

Ein [`DOMException`](/de/docs/Web/API/DOMException), der den relevanten Fehler enthält, oder `null`, wenn es keine gibt.

Es kann sich um einen Verweis auf denselben Fehler handeln wie beim Anfrageobjekt, das ihn ausgelöst hat, oder um ein Scheitern der Transaktion (zum Beispiel `QuotaExceededError`).

Diese Eigenschaft ist `null`, wenn die Transaktion nicht abgeschlossen ist oder erfolgreich abgeschlossen wurde.

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen
einer Objekt-Speicherung einige Daten hinzu. Beachten Sie auch die Funktionen, die an Transaktionsereignis-Handler angehängt sind, um den Ausgang der Transaktionsöffnung im Falle eines Erfolgs oder Misserfolgs zu melden. Beachten Sie den Block `transaction.onerror = (event) => { };`, der
`transaction.error` verwendet, um zu melden, was schiefgelaufen ist, wenn die
Transaktion nicht erfolgreich war. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
      `Transaction not opened due to error: ${transaction.error}`;
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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
