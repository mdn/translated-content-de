---
title: "IDBTransaction: error-Ereignis"
short-title: error
slug: Web/API/IDBTransaction/error_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{ APIRef("IndexedDB") }}

Das `error`-Ereignis wird bei `IDBTransaction` ausgelöst, wenn eine Anfrage einen Fehler zurückgibt und das Ereignis durch Bubbling an das Transaktionsobjekt weitergegeben wird.

> [!NOTE]
> Um alle Möglichkeiten zu berücksichtigen, wie eine Transaktion fehlschlagen kann, sollten Sie stattdessen auf das [`abort`](/de/docs/Web/API/IDBTransaction/abort_event)-Ereignis reagieren.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis wird durch Bubbling an [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) weitergegeben. Die Eigenschaft `event.target` verweist auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, von dem das Ereignis ausgeht.

Weitere Informationen finden Sie unter [Event Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und versucht, einen Datensatz hinzuzufügen. Dabei wird auf das `error`-Ereignis der `add()`-Operation reagiert (dieses tritt beispielsweise auf, wenn bereits ein Datensatz mit dem angegebenen `taskTitle` vorhanden ist):

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

Dasselbe Beispiel verwendet die Eigenschaft `onerror` anstelle von `addEventListener()` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onerror` hinzugefügte Event-Listener ersetzt werden):

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
