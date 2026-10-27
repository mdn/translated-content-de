---
title: "IDBTransaction: abort-Ereignis"
short-title: abort
slug: Web/API/IDBTransaction/abort_event
l10n:
  sourceCommit: ded0a8bc0b6622b4a95253e358c6a58a77ad2387
---

{{APIRef("IndexedDB")}}

Das `abort`-Ereignis wird ausgelöst, wenn eine `IndexedDB`-Transaktion abgebrochen wird.

Dies kann aus einem der folgenden Gründe geschehen:

- Ungültige Anfragen (z. B. der Versuch, denselben Schlüssel zweimal hinzuzufügen oder denselben Indexschlüssel einzufügen, wenn für den Schlüssel eine Eindeutigkeitsbedingung gilt).
- Ein expliziter Aufruf von [`abort()`](/de/docs/Web/API/IDBTransaction/abort).
- Eine nicht abgefangene Ausnahme im Erfolgs- oder Fehlerhandler der Anfrage.
- Ein Ein-/Ausgabefehler (z. B. wenn das Schreiben auf den Datenträger fehlschlägt, weil dieser getrennt wurde, oder aufgrund eines anderen Betriebssystem- oder Hardwarefehlers).
- Überschreitung des Speicherkontingents.

Dieses nicht abbrechbare Ereignis [steigt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) zum zugehörigen [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Objekt auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("abort", (event) => { })
```

Alternativ können Sie den Handler der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aufsteigen des Ereignisses

Dieses Ereignis steigt zu [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) auf. Die Eigenschaft `event.target` verweist auf das [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt, von dem das Ereignis ausgeht.

Weitere Informationen finden Sie unter [Aufsteigen von Ereignissen](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling).

## Beispiele

Dieses Beispiel öffnet eine Datenbank (und erstellt sie, falls sie noch nicht existiert), öffnet dann eine Transaktion, fügt einen Listener für das `abort`-Ereignis hinzu und bricht anschließend die Transaktion ab, um das Ereignis auszulösen.

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

Dasselbe Beispiel, jedoch mit Zuweisung des Event-Handlers an die Eigenschaft `onabort` (beachten Sie, dass dadurch andere über `onabort` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden):

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
