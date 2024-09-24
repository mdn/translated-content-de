---
title: "IDBRequest: success-Ereignis"
short-title: success
slug: Web/API/IDBRequest/success_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{ APIRef("IndexedDB") }}

Das `success`-Ereignis wird ausgelöst, wenn ein `IDBRequest` erfolgreich ist. Im `success`-Ereignishandler können Sie auf das Ergebnis der Anfrage zugreifen sowie weitere Anfragen in derselben Transaktion stellen.

Dieses Ereignis ist nicht abbruchfähig und wird nicht durchgereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("success", (event) => {});

onsuccess = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel versucht, eine Datenbank zu öffnen, und hört auf das `success`-Ereignis mit `addEventListener()`:

```js
// Open the database
const openRequest = window.indexedDB.open("toDoList", 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.addEventListener("success", (event) => {
  console.log("Database opened successfully!");
});
```

Dasselbe Beispiel, jedoch unter Verwendung der `onsuccess`-Ereignishandler-Eigenschaft:

```js
// Open the database
const openRequest = window.indexedDB.open("toDoList", 4);

openRequest.onupgradeneeded = (event) => {
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

openRequest.onsuccess = (event) => {
  console.log("Database opened successfully!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
