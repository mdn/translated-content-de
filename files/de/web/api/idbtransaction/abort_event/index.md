---
title: "IDBTransaction: Abbruch-Ereignis"
short-title: Abbrechen
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("IndexedDB")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine `IndexedDB`-Transaktion abgebrochen wird.

Dies kann aus einem der folgenden Gründe geschehen:

- Schlechte Anfragen (z.B. wenn versucht wird, denselben Schlüssel zweimal hinzuzufügen, oder denselben Index-Schlüssel zu setzen, wenn der Schlüssel eine Einzigartigkeitsbedingung hat).
- Ein expliziter {{DOMxRef("IDBTransaction.abort", "abort()")}}-Aufruf.
- Eine nicht abgefangene Ausnahme im Erfolgs-/Fehlerhandler der Anfrage.
- Ein I/O-Fehler (ein tatsächlicher Fehler beim Schreiben auf die Festplatte, beispielsweise eine getrennte Festplatte oder ein anderer Fehler des Betriebssystems/der Hardware).
- Kontingent überschritten.

Dieses nicht-abbrechbare Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling) zum zugehörigen {{domxref("IDBDatabase")}}-Objekt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("abort", (event) => {});
onabort = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Bubbling

Dieses Ereignis "bubbelt" zur {{domxref("IDBDatabase")}}. Die `event.target`-Eigenschaft bezieht sich auf das {{domxref('IDBTransaction')}}-Objekt, das hochbubbelt.

Für weitere Informationen siehe [Event Bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank (erstellt die Datenbank, falls sie nicht existiert), öffnet dann eine Transaktion, fügt einen Listener für das `abort`-Ereignis hinzu und bricht dann die Transaktion ab, um das Ereignis auszulösen.

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

Das gleiche Beispiel, aber der Ereignishandler wird der `onabort`-Eigenschaft zugeordnet:

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
