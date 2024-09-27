---
title: "IDBTransaction: mode-Eigenschaft"
short-title: mode
slug: Web/API/IDBTransaction/mode
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`mode`**-Eigenschaft des schreibgeschützten [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) Interfaces gibt den aktuellen Modus für den Datenzugriff auf die Objektspeicher im Geltungsbereich der Transaktion zurück (d.h. soll der Modus nur lesend sein oder möchten Sie in die Objektspeicher schreiben?). Der Standardwert ist `readonly`.

## Wert

Ein Objekt, das den Modus für die Isolierung des Datenzugriffs in den aktuellen Objektspeichern definiert: Ein String, der den Modus für die Isolierung des Datenzugriffs in den aktuellen Objektspeichern definiert. Die folgenden Werte sind verfügbar:

- `readonly`
  - : Ermöglicht das Lesen, aber nicht das Ändern von Daten.
- `readwrite`
  - : Ermöglicht das Lesen und Schreiben von Daten, die in vorhandenen Datenspeichern geändert werden können.
- `versionchange`
  - : Ermöglicht beliebige Operationen, einschließlich solcher, die Objektspeicher und Indizes löschen und erstellen.
    Dieser Modus dient zum Aktualisieren der Versionsnummer von Transaktionen, falls der Bedarf beim Aufruf von [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open) festgestellt wird.
    Transaktionen dieses Modus können nicht gleichzeitig mit anderen Transaktionen laufen.
    Transaktionen in diesem Modus sind als _Upgrade-Transaktionen_ bekannt.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und fügen einem Objektspeicher Daten hinzu. Beachten Sie auch die Funktionen, die an Transaktions-Ereignis-Handler angehängt sind, um über das Ergebnis des Transaktionsöffnungsvorgangs im Erfolgs- oder Fehlereignis zu berichten. Am Ende protokollieren wir den Modus der aktuellen Transaktion mit `mode`. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications App](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

  // Return the mode this transaction has been opened in (should be "readwrite" in this case)
  transaction.mode;
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
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Kursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
