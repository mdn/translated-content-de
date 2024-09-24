---
title: "IDBDatabase: deleteObjectStore() Methode"
short-title: deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`deleteObjectStore()`**-Methode des {{domxref("IDBDatabase")}}-Interfaces zerstört den Objektspeicher mit dem angegebenen Namen in der verbundenen Datenbank, zusammen mit allen Indizes, die darauf verweisen.

Wie bei {{ domxref("IDBDatabase.createObjectStore") }} kann diese Methode _nur_ innerhalb einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion aufgerufen werden.

## Syntax

```js-nolint
deleteObjectStore(name)
```

### Parameter

- `name`
  - : Der Name des Objektspeichers, den Sie löschen möchten. Namen sind case-sensitive.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Methode nicht aus einem `versionchange`-Transaktions-Callback aufgerufen wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine Anfrage zu einer Quell-Datenbank gemacht wird, die nicht existiert (z.B. die gelöscht oder entfernt wurde.)
- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, einen Objektspeicher zu löschen, der nicht existiert.

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

  // usw. für Version < 3, 4…
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Änderungen an Ihren Daten vornehmen: {{domxref("IDBObjectStore")}}
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
