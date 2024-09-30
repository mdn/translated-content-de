---
title: "IDBTransaction: commit()-Methode"
short-title: commit()
slug: Web/API/IDBTransaction/commit
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`commit()`**-Methode des [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Interfaces bestätigt die Transaktion, wenn sie auf einer aktiven Transaktion aufgerufen wird.

Beachten Sie, dass `commit()` normalerweise nicht _aufgerufen werden muss_ – eine Transaktion wird automatisch bestätigt, wenn alle ausstehenden Anfragen erfüllt sind und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Bestätigungsprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

Wenn es auf einer Transaktion aufgerufen wird, die nicht aktiv ist, wird ein `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Syntax

```js-nolint
commit()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionszustand nicht aktiv ist.

## Beispiele

```js
const note = document.getElementById("notifications");

// open a read/write db transaction, ready for adding the data
const transaction = db.transaction(["myDB"], "readwrite");

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
const objectStore = transaction.objectStore("myObjStore");

// add our newItem object to the object store
const objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = (event) => {
  // report the success of the request (this does not mean the item
  // has been stored successfully in the DB - for that you need transaction.onsuccess)
  note.appendChild(document.createElement("li")).textContent =
    "Request successful.";
};

// Force the changes to be committed to the database asap
transaction.commit();
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
