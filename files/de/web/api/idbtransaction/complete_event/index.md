---
title: "IDBTransaction: complete Ereignis"
short-title: complete
slug: Web/API/IDBTransaction/complete_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Das **`complete`**-Ereignis der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) wird ausgelöst, wenn die Transaktion erfolgreich abgeschlossen wurde. Dies geschieht entweder nachdem Sie [`IDBTransaction.commit()`](/de/docs/Web/API/IDBTransaction/commit) explizit aufgerufen haben oder wenn alle Anfragen erfolgreich abgeschlossen wurden und nach der Bearbeitung ihrer Ergebnisse keine neuen Anfragen gestellt wurden. Weitere Informationen finden Sie unter [`IDBTransaction`](/de/docs/Web/API/IDBTransaction).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("complete", (event) => {});
oncomplete = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Error creating database");
  };

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // define what data items the objectStore will contain
  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
};

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `complete`
  transaction.addEventListener("complete", (event) => {
    console.log("Transaction was completed");
  });

  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2019,
  };
  const objectStoreRequest = objectStore.add(newItem);

  objectStoreRequest.onsuccess = () => {
    // Issue a second request in the onsuccess handler,
    // so we can run this request after the first one completes,
    // while still reusing the same transaction
    const getAllRequest = objectStore.getAll();

    getAllRequest.onsuccess = () => {
      // No more requests, so the transaction completes after running this handler
      console.log(getAllRequest.result);
    };
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
