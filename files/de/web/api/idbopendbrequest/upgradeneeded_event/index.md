---
title: "IDBOpenDBRequest: upgradeneeded Ereignis"
short-title: upgradeneeded
slug: Web/API/IDBOpenDBRequest/upgradeneeded_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("IndexedDB")}}

Das `upgradeneeded` Ereignis wird ausgelöst, wenn versucht wurde, eine Datenbank mit einer höheren Versionsnummer als der aktuellen Version zu öffnen.

Dieses Ereignis kann nicht abgebrochen werden und ist nicht durchsickerbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("upgradeneeded", (event) => { })

onupgradeneeded = (event) => { }
```

## Ereignistyp

Ein [`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, der [`Event`](/de/docs/Web/API/Event)-Schnittstelle._

- [`IDBVersionChangeEvent.oldVersion`](/de/docs/Web/API/IDBVersionChangeEvent/oldVersion) {{ReadOnlyInline}}
  - : Gibt die alte Version der Datenbank zurück.
- [`IDBVersionChangeEvent.newVersion`](/de/docs/Web/API/IDBVersionChangeEvent/newVersion) {{ReadOnlyInline}}
  - : Gibt die neue Version der Datenbank zurück.

## Beispiele

Dieses Beispiel öffnet eine Datenbank und behandelt das `upgradeneeded` Ereignis, indem es alle notwendigen Aktualisierungen im Objekt-Store vornimmt.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.addEventListener("upgradeneeded", (event) => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

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
});
```

Dies ist dasselbe Beispiel, verwendet jedoch die onupgradeneeded Ereignis-Handler-Eigenschaft.

```js
// Open the database
const dBOpenRequest = window.indexedDB.open("toDoList", 4);

dBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
