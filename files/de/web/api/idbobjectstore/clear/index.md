---
title: "IDBObjectStore: clear() Methode"
short-title: clear()
slug: Web/API/IDBObjectStore/clear
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`clear()`** Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Interfaces erstellt und gibt sofort ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und leert diesen Objekt-Store in einem separaten Thread. Dies dient dazu, alle aktuellen Daten aus einem Objekt-Store zu löschen.

Das Leeren eines Objekt-Stores besteht darin, alle Datensätze aus dem Objekt-Store zu entfernen und alle Datensätze in Indizes zu entfernen, die auf den Objekt-Store verweisen. Um nur einige der Datensätze in einem Store zu entfernen, verwenden Sie [`IDBObjectStore.delete`](/de/docs/Web/API/IDBObjectStore/delete) mit einem Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft der Anfrage `undefined`.

### Ausnahmen

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im Lese-Modus ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreib-Transaktion auf unserer Datenbank und löschen alle aktuellen Daten aus dem Objekt-Store mit `clear()`. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Clear all the data from the object store
  clearData();
};

function clearData() {
  // open a read/write db transaction, ready for clearing the data
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

  // Make a request to clear all the data out of the object store
  const objectStoreRequest = objectStore.clear();

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursor: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
