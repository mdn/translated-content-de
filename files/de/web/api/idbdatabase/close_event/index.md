---
title: "IDBDatabase: close-Ereignis"
short-title: close
slug: Web/API/IDBDatabase/close_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{ APIRef("IndexedDB") }}

Das `close`-Ereignis wird auf `IDBDatabase` ausgelöst, wenn die Datenbankverbindung unerwartet geschlossen wird. Dies kann beispielsweise passieren, wenn der zugrunde liegende Speicher entfernt wird oder wenn der Benutzer die Datenbank über die Einstellungen für den Browserverlauf löscht.

Das Ereignis wird nicht ausgelöst, wenn die Datenbankverbindung regulär mit [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("close", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclose = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und überwacht das `close`-Ereignis:

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

Dasselbe Beispiel verwendet die Eigenschaft `onclose` anstelle von `addEventListener()` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onclose` hinzugefügte Event-Listener ersetzt werden):

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
