---
title: "IDBTransaction: error-Ereignis"
short-title: error
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: 144fc1770b3eaa69bb5be691f505565b6dd9a68e
---

{{ APIRef("IndexedDB") }}

Das `error`-Ereignis wird auf `IDBTransaction` ausgelöst, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Transaktionsobjekt hinaufblubbert.

> [!NOTE]
> Um alle Möglichkeiten zu behandeln, wie eine Transaktion fehlschlagen kann, sollten Sie stattdessen das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis beobachten.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis blubbert bis zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) hinauf. Die Eigenschaft `event.target` verweist auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das nach oben blubbert.

Für mehr Informationen siehe [Event bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und versucht, einen Datensatz hinzuzufügen, wobei das `error`-Ereignis für die `add()`-Operation beobachtet wird (dies tritt z.B. ein, wenn bereits ein Datensatz mit dem gegebenen `taskTitle` existiert):

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

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

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;

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

  transaction.addEventListener("error", () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });

  const objectStoreRequest = objectStore.add(newItem);
};
```

Dasselbe Beispiel mit der `onerror`-Eigenschaft anstelle von `addEventListener()`:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

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

dBOpenRequest.onsuccess = (event) => {
  const db = dBOpenRequest.result;

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

  transaction.onerror = () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };

  const objectStoreRequest = objectStore.add(newItem);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
