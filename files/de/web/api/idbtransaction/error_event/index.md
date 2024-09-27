---
title: "IDBTransaction: error Veranstaltung"
short-title: error
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("IndexedDB") }}

Die `error`-Veranstaltung wird bei `IDBTransaction` ausgelöst, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis bis zum Transaktionsobjekt weitergegeben wird.

> [!NOTE]
> Um alle Möglichkeiten zu erfassen, wie eine Transaktion fehlschlagen kann, sollten Sie stattdessen das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event) Ereignis überwachen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});
onerror = (event) => {};
```

## Veranstaltungstyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis wird bis zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) weitergegeben. Die Eigenschaft `event.target` bezieht sich auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das weitergegeben wird.

Für weitere Informationen siehe [Event-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und versucht, einen Datensatz hinzuzufügen, wobei das `error`-Ereignis für den `add()`-Vorgang überwacht wird (dies tritt beispielsweise auf, wenn bereits ein Datensatz mit dem angegebenen `taskTitle` existiert):

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

Dasselbe Beispiel, mit der `onerror`-Eigenschaft statt `addEventListener()`:

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
