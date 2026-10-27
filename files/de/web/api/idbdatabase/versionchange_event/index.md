---
title: "IDBDatabase: versionchange-Ereignis"
short-title: versionchange
slug: Web/API/IDBDatabase/versionchange_event
l10n:
  sourceCommit: 500a87094bd8ca5e41a6dab23f733867b9c9570e
---

{{APIRef("IndexedDB")}}

Das Ereignis `versionchange` wird ausgelöst, wenn an anderer Stelle eine Änderung der Datenbankstruktur angefordert wurde (durch ein [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Ereignis, das bei einem [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) ausgelöst wird, oder durch [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)). Dies geschieht höchstwahrscheinlich in einem anderen Fenster oder Tab auf demselben Computer.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("versionchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onversionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und fügt bei Erfolg einen Listener für `versionchange` hinzu:

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("Nonexistent", 4);

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

dBOpenRequest.addEventListener("success", (event) => {
  const db = event.target.result;
  db.addEventListener("versionchange", (event) => {
    console.log("The version of this database has changed");
  });
});
```

Dasselbe Beispiel mit der Event-Handler-Eigenschaft `onversionchange` (beachten Sie jedoch, dass dadurch andere, gegebenenfalls mit `onversionchange` und `onsuccess` hinzugefügte Event-Listener ersetzt werden):

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("Nonexistent", 4);

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
  const db = event.target.result;
  db.onversionchange = (event) => {
    console.log("The version of this database has changed");
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
