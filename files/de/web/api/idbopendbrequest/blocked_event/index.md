---
title: "IDBOpenDBRequest: blocked-Ereignis"
short-title: blocked
slug: Web/API/IDBOpenDBRequest/blocked_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("IndexedDB")}}

Der `blocked`-Handler wird ausgeführt, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion für dieselbe Datenbank blockiert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("blocked", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onblocked = (event) => { }
```

## Ereignistyp

Ein [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## Beispiele

Mit `addEventListener()`:

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
  // Let's try to open the same database with a higher revision version
  const req2 = indexedDB.open("toDoList", 5);

  // In this case the onblocked handler will be executed
  req2.addEventListener("blocked", () => {
    console.log("Request was blocked");
  });
};
```

Mit der Eigenschaft `onblocked` (beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onblocked` hinzugefügte Event-Listener ersetzt werden):

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
  // Let's try to open the same database with a higher revision version
  const req2 = indexedDB.open("toDoList", 5);

  // In this case the onblocked handler will be executed
  req2.onblocked = () => {
    console.log("Request was blocked");
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
