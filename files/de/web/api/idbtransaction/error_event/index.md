---
title: "IDBTransaction: Fehlerereignis"
short-title: Fehler
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("IndexedDB") }}

Das `error`-Ereignis wird bei einer `IDBTransaction` ausgelöst, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis zum Transaktionsobjekt hochblubbert.

> [!NOTE]
> Um alle Möglichkeiten zu erfassen, wie eine Transaktion fehlschlagen kann, sollten Sie stattdessen das {{domxref("IDBTransaction.abort_event", "abort")}}-Ereignis überwachen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("error", (event) => {});
onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Bubbling

Dieses Ereignis blubbert bis zu {{domxref("IDBDatabase")}}. Die Eigenschaft `event.target` bezieht sich auf das {{domxref('IDBTransaction')}}-Objekt, das hochblubbert.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

In diesem Beispiel wird eine Datenbank geöffnet und versucht, einen Datensatz hinzuzufügen, wobei das `error`-Ereignis für die `add()`-Operation überwacht wird (dies tritt auf, wenn z.B. bereits ein Datensatz mit dem angegebenen `taskTitle` existiert):

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

Das gleiche Beispiel, wobei die `onerror`-Eigenschaft anstelle von `addEventListener()` verwendet wird:

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
