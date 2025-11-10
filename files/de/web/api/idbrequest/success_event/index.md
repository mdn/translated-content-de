---
title: "IDBRequest: success-Ereignis"
short-title: success
slug: Web/API/IDBRequest/success_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("IndexedDB") }}

Das `success`-Ereignis wird ausgelöst, wenn eine `IDBRequest` erfolgreich ist. Im `success`-Ereignishandler können Sie auf das Ergebnis der Anfrage zugreifen und weitere Anfragen an dieselbe Transaktion stellen.

Dieses Ereignis kann nicht abgebrochen werden und es findet kein Bubbling statt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("success", (event) => { })

onsuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel versucht, eine Datenbank zu öffnen und hört auf das `success`-Ereignis unter Verwendung von `addEventListener()`:

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

Das gleiche Beispiel, aber mit der `onsuccess`-Ereignishandler-Eigenschaft:

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
