---
title: "IDBTransaction: error-Eigenschaft"
short-title: error
slug: Web/API/IDBTransaction/error
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`error`** der Schnittstelle [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) gibt bei einer fehlgeschlagenen Transaktion den Fehlertyp zurück.

## Wert

Eine [`DOMException`](/de/docs/Web/API/DOMException), die den betreffenden Fehler enthält, oder `null`, wenn kein Fehler vorliegt.

Dabei kann es sich um einen Verweis auf denselben Fehler handeln, den das Request-Objekt ausgelöst hat, oder um einen Fehler der Transaktion selbst (beispielsweise `QuotaExceededError`).

Diese Eigenschaft ist `null`, wenn die Transaktion noch nicht abgeschlossen ist oder wenn sie abgeschlossen und erfolgreich festgeschrieben wurde.

## Beispiele

Im folgenden Codeausschnitt öffnen wir eine Lese-/Schreibtransaktion für unsere Datenbank und fügen einem Object Store Daten hinzu. Beachten Sie auch die Funktionen, die den Event-Handlern der Transaktion zugewiesen sind. Sie melden, ob das Öffnen der Transaktion erfolgreich war oder fehlgeschlagen ist. Beachten Sie insbesondere den Block `transaction.onerror = (event) => { };`: Er verwendet `transaction.error`, um bei einer fehlgeschlagenen Transaktion den Fehler zu melden. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserer App [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
