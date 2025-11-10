---
title: "IDBOpenDBRequest: blocked Ereignis"
short-title: blocked
slug: Web/API/IDBOpenDBRequest/blocked_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("IndexedDB")}}

Der `blocked`-Handler wird ausgeführt, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion auf derselben Datenbank blockiert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("blocked", (event) => { })

onblocked = (event) => { }
```

## Ereignistyp

Ein [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`IDBVersionChangeEvent.oldVersion`](/de/docs/Web/API/IDBVersionChangeEvent/oldVersion) {{ReadOnlyInline}}
  - : Gibt die alte Version der Datenbank zurück.
- [`IDBVersionChangeEvent.newVersion`](/de/docs/Web/API/IDBVersionChangeEvent/newVersion) {{ReadOnlyInline}}
  - : Gibt die neue Version der Datenbank zurück.

## Beispiele

Verwendung von `addEventListener()`:

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

Verwendung der `onblocked`-Eigenschaft:

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
