---
title: "IDBRequest: success-Ereignis"
short-title: success
slug: Web/API/IDBRequest/success_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{ APIRef("IndexedDB") }}

Das `success`-Ereignis wird ausgelöst, wenn ein `IDBRequest` erfolgreich abgeschlossen wird. Im Ereignishandler für `success` können Sie auf das Ergebnis der Anfrage zugreifen und weitere Anfragen innerhalb derselben Transaktion stellen.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("success", (event) => { })
```

Alternativ können Sie der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onsuccess = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel versucht, eine Datenbank zu öffnen, und überwacht das `success`-Ereignis mit `addEventListener()`:

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

Dasselbe Beispiel, jedoch mit der Ereignishandler-Eigenschaft `onsuccess`. Beachten Sie, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die über `onsuccess` hinzugefügt wurden:

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
