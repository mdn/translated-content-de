---
title: "IDBTransaction: abort-Ereignis"
short-title: abort
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("IndexedDB")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine `IndexedDB`-Transaktion abgebrochen wird.

Dies kann aus einem der folgenden Gründe geschehen:

- Falsche Anfragen (z.B. der Versuch, denselben Schlüssel zweimal hinzuzufügen oder denselben Index-Schlüssel zu verwenden, wenn der Schlüssel eine Eindeutigkeitsbeschränkung hat).
- Ein expliziter [`abort()`](/de/docs/Web/API/IDBTransaction/abort)-Aufruf.
- Eine nicht abgefangene Ausnahme in der Erfolgs-/Fehlerbehandlungsroutine der Anfrage.
- Ein E/A-Fehler (ein tatsächliches Schreibversagen auf die Festplatte, zum Beispiel Festplatte getrennt oder ein anderer OS-/Hardwarefehler).
- Überschreiten des Speicherlimits.

Dieses nicht-abbrechbare Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum zugehörigen [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis bubbelt zum [`IDBDatabase`](/de/docs/Web/API/IDBDatabase). Die `event.target`-Eigenschaft bezieht sich auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das weitergegeben wird.

Für weitere Informationen siehe [Event-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank (erstellt die Datenbank, wenn sie nicht existiert), öffnet dann eine Transaktion, fügt einen Listener für das `abort`-Ereignis hinzu und bricht dann die Transaktion ab, um das Ereignis auszulösen.

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
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

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `abort`
  transaction.addEventListener("abort", () => {
    console.log("Transaction was aborted");
  });

  // abort the transaction
  transaction.abort();
};
```

Dasselbe Beispiel, aber der Event-Handler wird der `onabort`-Eigenschaft zugewiesen:

```js
// Open the database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onupgradeneeded = (event) => {
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

DBOpenRequest.onsuccess = (event) => {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // add a listener for `abort`
  transaction.onabort = (event) => {
    console.log("Transaction was aborted");
  };

  // abort the transaction
  transaction.abort();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
