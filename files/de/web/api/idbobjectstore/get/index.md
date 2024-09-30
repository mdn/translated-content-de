---
title: "IDBObjectStore: get()-Methode"
short-title: get()
slug: Web/API/IDBObjectStore/get
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`get()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und gibt in einem separaten Thread das Objekt zurück, das durch den angegebenen Schlüssel ausgewählt wurde. Diese Methode dient zum Abrufen bestimmter Datensätze aus einem Objekt-Store.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als [`result`](/de/docs/Web/API/IDBRequest/result) des Anfrage-Objekts festgelegt.

> [!NOTE]
> Diese Methode führt zum gleichen Ergebnis, wenn a) ein Datensatz nicht in der Datenbank existiert und b) ein Datensatz einen undefinierten Wert hat. Um diese Situationen zu unterscheiden, rufen Sie die `openCursor()`-Methode mit dem gleichen Schlüssel auf. Diese Methode liefert einen Cursor, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel oder Schlüsselbereich, der den abzurufenden Datensatz identifiziert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem sich nachfolgende Ereignisse im Zusammenhang mit dieser Operation abspielen.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Wert des ersten Datensatzes, der mit dem angegebenen Schlüssel oder Schlüsselbereich übereinstimmt.

### Ausnahmen

Diese Methode kann ein [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft diese Ausnahme, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft diese Ausnahme, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft diese Ausnahme, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Codebeispiel öffnen wir eine Lese-/Schreibtransaktion in unserer Datenbank und holen uns einen bestimmten Datensatz aus dem Objekt-Store mittels `get()` — ein Beispiel-Datensatz mit dem Schlüssel "Walk dog". Sobald dieses Datenobjekt abgerufen wurde, könnten Sie es mit normalem JavaScript aktualisieren und dann wieder in die Datenbank mit einer [`IDBObjectStore.put`](/de/docs/Web/API/IDBObjectStore/put)-Operation zurücklegen. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the getData() function to get the data from the database
  getData();
};

function getData() {
  // open a read/write db transaction, ready for retrieving the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction completed.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      `Transaction not opened due to error: ${transaction.error}`;
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // Make a request to get a record by key from the object store
  const objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    note.appendChild(document.createElement("li")).textContent =
      "Request successful.";

    const myRecord = objectStoreRequest.result;
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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
