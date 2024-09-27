---
title: "IDBTransaction: commit()-Methode"
short-title: commit()
slug: Web/API/IDBTransaction/commit
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`commit()`**-Methode der [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Schnittstelle führt die Transaktion aus, wenn sie auf eine aktive Transaktion aufgerufen wird.

Beachten Sie, dass `commit()` normalerweise nicht _gerufen_ werden muss – eine Transaktion wird automatisch abgeschlossen, wenn alle ausstehenden Anfragen erfüllt wurden und keine neuen Anfragen gestellt wurden. `commit()` kann verwendet werden, um den Abschlussprozess zu starten, ohne auf Ereignisse von ausstehenden Anfragen zu warten.

Wenn sie auf einer Transaktion aufgerufen wird, die nicht aktiv ist, wird ein `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Syntax

```js-nolint
commit()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsstatus nicht aktiv ist.

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
- Einstellen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
