---
title: "IDBDatabase: deleteObjectStore() Methode"
short-title: deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`deleteObjectStore()`** Methode des [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Interfaces zerstört den Object Store mit dem angegebenen Namen in der verbundenen Datenbank sowie alle Indizes, die darauf verweisen.

Wie bei [`IDBDatabase.createObjectStore`](/de/docs/Web/API/IDBDatabase/createObjectStore) kann diese Methode _nur_ innerhalb einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion aufgerufen werden.

## Syntax

```js-nolint
deleteObjectStore(name)
```

### Parameter

- `name`
  - : Der Name des Object Stores, den Sie löschen möchten. Namen sind
    groß-/klein-schreibungssensitiv.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode nicht von einem `versionchange`-Transaktions-Callback aufgerufen wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Anfrage an eine Quellendatenbank gestellt wird, die nicht existiert (z.B. gelöscht oder entfernt wurde.)
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, einen nicht existierenden Object Store zu löschen.

## Beispiele

```js
const dbName = "sampleDB";
const dbVersion = 2;
const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (event) => {
  const db = request.result;
  if (event.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (event.oldVersion < 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version < 3, 4…
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
