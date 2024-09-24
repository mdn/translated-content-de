---
title: "IDBOpenDBRequest: blockiertes Ereignis"
short-title: blockiert
slug: Web/API/IDBOpenDBRequest/blocked_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Der `blocked`-Handler wird ausgeführt, wenn eine offene Verbindung zu einer Datenbank eine `versionchange`-Transaktion in derselben Datenbank blockiert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("blocked", (event) => {});

onblocked = (event) => {};
```

## Ereignistyp

Ein {{domxref("IDBVersionChangeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("IDBVersionChangeEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle {{domxref("Event")}}._

- {{ domxref("IDBVersionChangeEvent.oldVersion") }} {{ReadOnlyInline}}
  - : Gibt die alte Version der Datenbank zurück.
- {{ domxref("IDBVersionChangeEvent.newVersion") }} {{ReadOnlyInline}}
  - : Gibt die neue Version der Datenbank zurück.

## Beispiele

Verwendung von `addEventListener()`:

```js
// Öffnen der Datenbank
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Fehler beim Erstellen der Datenbank");
  };

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

DBOpenRequest.onsuccess = (event) => {
  // Versuchen wir, dieselbe Datenbank mit einer höheren Revisionsversion zu öffnen
  const req2 = indexedDB.open("toDoList", 5);

  // In diesem Fall wird der onblocked-Handler ausgeführt
  req2.addEventListener("blocked", () => {
    console.log("Anfrage wurde blockiert");
  });
};
```

Verwendung der `onblocked`-Eigenschaft:

```js
// Öffnen der Datenbank
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = () => {
    console.log("Fehler beim Erstellen der Datenbank");
  };

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

DBOpenRequest.onsuccess = (event) => {
  // Versuchen wir, dieselbe Datenbank mit einer höheren Revisionsversion zu öffnen
  const req2 = indexedDB.open("toDoList", 5);

  // In diesem Fall wird der onblocked-Handler ausgeführt
  req2.onblocked = () => {
    console.log("Anfrage wurde blockiert");
  };
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
