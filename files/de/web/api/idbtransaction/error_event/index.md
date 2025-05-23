---
title: "IDBTransaction: error-Ereignis"
short-title: error
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("IndexedDB") }}

Das `error`-Ereignis wird auf `IDBTransaction` ausgelöst, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis zum Transaktionsobjekt hochblubbert.

> [!NOTE]
> Um alle Arten des Scheiterns einer Transaktion zu behandeln, sollten Sie stattdessen das Hören auf das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis in Betracht ziehen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Blubbern

Dieses Ereignis blubbert zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase). Die `event.target`-Eigenschaft bezieht sich auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das hochblubbert.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und versucht, einen Datensatz hinzuzufügen. Dabei wird das `error`-Ereignis für die `add()`-Operation abgehört (dies tritt zum Beispiel auf, wenn ein Datensatz mit dem gegebenen `taskTitle` bereits existiert):

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

  transaction.addEventListener("error", () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });

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
};
```

Dasselbe Beispiel unter Verwendung der `onerror`-Eigenschaft anstelle von `addEventListener()`:

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

  transaction.onerror = () => {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };

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
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
