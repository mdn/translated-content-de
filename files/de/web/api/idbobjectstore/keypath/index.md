---
title: "IDBObjectStore: keyPath Eigenschaft"
short-title: keyPath
slug: Web/API/IDBObjectStore/keyPath
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`keyPath`** schreibgeschützte Eigenschaft des
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt den [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) dieses Objekt-Speichers zurück.

Wenn diese Eigenschaft null ist, muss die Anwendung einen Schlüssel für jede Änderungsoperation bereitstellen.

## Wert

Jeder Werttyp.

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreibtransaktion in unserer Datenbank und fügen mit `add()` einige Daten zu einem Objekt-Speicher hinzu. Nachdem der Objekt-Speicher erstellt wurde, geben wir `objectStore.keyPath` in der Konsole aus. Für ein vollständiges, funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App
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
  console.log(objectStore.keyPath);

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

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern von Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
