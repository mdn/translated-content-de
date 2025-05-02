---
title: "IDBDatabase: versionchange Ereignis"
short-title: versionchange
slug: Web/API/IDBDatabase/versionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("IndexedDB")}}

Das `versionchange` Ereignis wird ausgelöst, wenn eine Änderung der Datenbankstruktur (ein [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Ereignis, das auf einer [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) gesendet wird, oder [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase)) anderswo angefordert wurde (höchstwahrscheinlich in einem anderen Fenster/Tab auf demselben Computer).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("versionchange", (event) => { })

onversionchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel öffnet eine Datenbank und fügt nach erfolgreichem Öffnen einen Listener für `versionchange` hinzu:

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

Dasselbe Beispiel, mit der `onversionchange` Ereignis-Handler-Eigenschaft:

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
