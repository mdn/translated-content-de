---
title: "IDBDatabase: close-Ereignis"
short-title: close
slug: Web/API/IDBDatabase/close_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("IndexedDB") }}

Das `close`-Ereignis wird auf einem `IDBDatabase` ausgelöst, wenn die Datenbankverbindung unerwartet geschlossen wird. Dies kann zum Beispiel passieren, wenn der zugrunde liegende Speicher entfernt wird oder wenn der Benutzer die Datenbank in den Verlaufseinstellungen des Browsers löscht.

Beachten Sie, dass es nicht ausgelöst wird, wenn die Datenbankverbindung normalerweise mit [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) geschlossen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("close", (event) => {});
onclose = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel öffnet eine Datenbank und lauscht auf das `close`-Ereignis:

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

Dasselbe Beispiel, unter Verwendung der `onclose`-Eigenschaft anstelle von `addEventListener()`:

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