---
title: "IDBDatabase: versionchange-Ereignis"
short-title: versionchange
slug: Web/API/IDBDatabase/versionchange_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Das `versionchange`-Ereignis wird ausgelöst, wenn eine Änderung der Datenbankstruktur (ein [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Ereignis, das auf ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest) oder [`IDBFactory.deleteDatabase`](/de/docs/Web/API/IDBFactory/deleteDatabase) gesendet wird) an anderer Stelle angefordert wurde (wahrscheinlich in einem anderen Fenster/Tab auf dem gleichen Computer).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("versionchange", (event) => {});
onversionchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel öffnet eine Datenbank und fügt bei Erfolg einen Listener für `versionchange` hinzu:

```js
// Öffnen der Datenbank
const dBOpenRequest = window.indexedDB.open("Nonexistent", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Erstellen eines objectStore für diese Datenbank
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren, welche Datenobjekte der objectStore enthalten wird
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

Dasselbe Beispiel, unter Verwendung der `onversionchange`-Ereignishandler-Eigenschaft:

```js
// Öffnen der Datenbank
const dBOpenRequest = window.indexedDB.open("Nonexistent", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  // Erstellen eines objectStore für diese Datenbank
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren, welche Datenobjekte der objectStore enthalten wird
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

- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
