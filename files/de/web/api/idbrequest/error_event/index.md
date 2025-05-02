---
title: "IDBRequest: error-Ereignis"
short-title: error
slug: Web/API/IDBRequest/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("IndexedDB")}}

Der `error`-Handler wird ausgeführt, wenn ein Fehler dazu geführt hat, dass eine Anfrage fehlgeschlagen ist. Im `error`-Ereignishandler können Sie auf den Fehler der Anfrage zugreifen und weitere Anfragen zu derselben Transaktion stellen.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und versucht, einen Datensatz hinzuzufügen, wobei es auf das `error`-Ereignis für die `add()`-Operation hört (dies tritt beispielsweise auf, wenn bereits ein Datensatz mit dem angegebenen `taskTitle` existiert):

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.addEventListener("upgradeneeded", (event) => {
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
});

DBOpenRequest.addEventListener("success", (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");
  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2020,
  };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.addEventListener("error", () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });
});
```

Dasselbe Beispiel, das die `onerror`-Eigenschaft anstelle von `addEventListener()` verwendet:

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
  const objectStore = transaction.objectStore("toDoList");
  const newItem = {
    taskTitle: "my task",
    hours: 10,
    minutes: 10,
    day: 10,
    month: "January",
    year: 2020,
  };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.onerror = () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
