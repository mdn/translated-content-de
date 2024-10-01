---
title: "IDBObjectStore: autoIncrement-Eigenschaft"
short-title: autoIncrement
slug: Web/API/IDBObjectStore/autoIncrement
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`autoIncrement`** schreibgeschützte Eigenschaft des
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt den Wert des Auto-Increment-Flags
für diesen Object Store zurück.

Beachten Sie, dass jeder Object Store seinen eigenen separaten Auto-Increment-Zähler hat.

## Wert

Ein boolescher Wert:

| Wert    | Bedeutung                                              |
| ------- | ------------------------------------------------------ |
| `true`  | Der Object Store wird automatisch inkrementiert.       |
| `false` | Der Object Store wird nicht automatisch inkrementiert. |

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion in unserer Datenbank und fügen
einige Daten zu einem Object Store mit `add()` hinzu. Nachdem der Object Store erstellt wurde, protokollieren wir `objectStore.autoIncrement` in
die Konsole. Für ein vollständiges funktionierendes Beispiel siehe
unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App
([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
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
  // Create a new object ready to insert into the IDB
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
  console.log(objectStore.autoIncrement);

  // Make a request to add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
