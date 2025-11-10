---
title: "IDBObjectStore: get()-Methode"
short-title: get()
slug: Web/API/IDBObjectStore/get
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`get()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und, in einem separaten Thread, das Objekt, das durch den angegebenen Schlüssel ausgewählt wird. Dies dient zum Abrufen spezifischer Datensätze aus einem Objektspeicher.

Wenn ein Wert erfolgreich gefunden wird, dann wird ein strukturierter Klon davon erstellt und als [`result`](/de/docs/Web/API/IDBRequest/result) des Anfrage-Objekts gesetzt.

> [!NOTE]
> Diese Methode liefert dasselbe Ergebnis für: a) einen Datensatz, der nicht in der Datenbank existiert, und b) einen Datensatz, der einen undefinierten Wert hat.
> Um diese Situationen zu unterscheiden, rufen Sie die `openCursor()`-Methode mit demselben Schlüssel auf. Diese Methode stellt einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel oder der Schlüsselbereich, der den abzurufenden Datensatz identifiziert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Wert des ersten Datensatzes, der dem angegebenen Schlüssel oder Schlüsselbereich entspricht.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Codeabschnitt öffnen wir eine Lese-/Schreibtransaktion auf unserer Datenbank und holen einen bestimmten Datensatz aus dem Objektspeicher mit `get()` — einen Beispiel-Datensatz mit dem Schlüssel "Walk dog". Sobald dieses Datenobjekt abgerufen wurde, können Sie es mit normalem JavaScript aktualisieren und dann mit einer [`put()`](/de/docs/Web/API/IDBObjectStore/put)-Operation wieder in die Datenbank einfügen. Für ein vollständig funktionierendes Beispiel siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
