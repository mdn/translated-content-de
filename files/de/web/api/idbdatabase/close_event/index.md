---
title: "IDBDatabase: close-Event"
short-title: close
slug: Web/API/IDBDatabase/close_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("IndexedDB") }}

Das `close`-Ereignis wird auf `IDBDatabase` ausgelöst, wenn die Datenbankverbindung unerwartet geschlossen wird. Dies kann beispielsweise passieren, wenn der zugrunde liegende Speicher entfernt wird oder der Benutzer die Datenbank in den Verlaufseinstellungen des Browsers löscht.

Beachten Sie, dass es nicht ausgelöst wird, wenn die Datenbankverbindung normal mit [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und hört auf das `close`-Ereignis:

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
  db.addEventListener("close", () => {
    console.log("Database connection closed");
  });
};
```

Das gleiche Beispiel, mit der `onclose`-Eigenschaft anstelle von `addEventListener()`:

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
  db.onclose = () => {
    console.log("Database connection closed");
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
