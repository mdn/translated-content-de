---
title: "IDBTransaction: abort-Ereignis"
short-title: abort
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine `IndexedDB`-Transaktion abgebrochen wird.

Dies kann aus einem der folgenden Gründe geschehen:

- Schlechte Anfragen (z.B. der Versuch, denselben Schlüssel zweimal hinzuzufügen, oder denselben Indexschlüssel zu setzen, wenn der Schlüssel eine Einzigartigkeitsbeschränkung hat).
- Ein expliziter [`abort()`](/de/docs/Web/API/IDBTransaction/abort)-Aufruf.
- Eine nicht abgefangene Ausnahme im Erfolgs-/Fehler-Handler der Anforderung.
- Ein I/O-Fehler (ein tatsächliches Scheitern beim Schreiben auf die Festplatte, z.B. durch Festplattenentfernung oder andere Betriebssystem-/Hardwarefehler).
- Überschreitung des Speicherkontingents.

Dieses nicht abbrechbare Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) zum zugehörigen [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Bubbling

Dieses Ereignis bubbelt zum [`IDBDatabase`](/de/docs/Web/API/IDBDatabase). Die `event.target`-Eigenschaft bezieht sich auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, das hochbubblet.

Für weitere Informationen siehe [Event bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank (erstellen der Datenbank, falls sie nicht existiert), öffnet dann eine Transaktion, fügt einen Listener für das `abort`-Ereignis hinzu und bricht dann die Transaktion ab, um das Ereignis auszulösen.

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

Dasselbe Beispiel, aber die Zuordnung des Ereignis-Handlers zur `onabort`-Eigenschaft:

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

- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
