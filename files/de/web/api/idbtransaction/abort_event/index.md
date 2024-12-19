---
title: "IDBTransaction: `abort`-Ereignis"
short-title: abort
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("IndexedDB")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine `IndexedDB`-Transaktion abgebrochen wird.

Dies kann aus einem der folgenden Gründe geschehen:

- Falsche Anfragen (z.B. der Versuch, denselben Schlüssel zweimal hinzuzufügen, oder denselben Indexschlüssel zu setzen, wenn auf dem Schlüssel eine Einzigartigkeitsbedingung liegt).
- Ein expliziter Aufruf von [`abort()`](/de/docs/Web/API/IDBTransaction/abort).
- Eine nicht abgefangene Ausnahme im Erfolgs-/Fehlerhandler der Anfrage.
- Ein E/A-Fehler (ein tatsächlicher Schreibfehler auf die Festplatte, beispielsweise abgetrennte Festplatte oder ein anderer Betriebssystem-/Hardwarefehler).
- Überschreiten des Speicherplatzkontingents.

Dieses nicht abbrechbare Ereignis [bubbelt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum zugehörigen [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis bubblet zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase). Die Eigenschaft `event.target` bezieht sich auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das hochbubbelt.

Für weitere Informationen siehe [Ereignis-Bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank (und erstellt die Datenbank, falls sie nicht existiert), öffnet dann eine Transaktion, fügt einen Listener für das `abort`-Ereignis hinzu und bricht dann die Transaktion ab, um das Ereignis auszulösen.

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

Dasselbe Beispiel, aber der Ereignishandler wird der `onabort`-Eigenschaft zugewiesen:

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
