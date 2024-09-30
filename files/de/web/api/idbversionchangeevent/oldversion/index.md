---
title: "IDBVersionChangeEvent: oldVersion-Eigenschaft"
short-title: oldVersion
slug: Web/API/IDBVersionChangeEvent/oldVersion
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte **`oldVersion`**-Eigenschaft des
[`IDBVersionChangeEvent`](/de/docs/Web/API/IDBVersionChangeEvent)-Interfaces gibt die alte Versionsnummer der
Datenbank zurück.

Wenn die geöffnete Datenbank noch nicht existiert, ist der Wert von `oldVersion` 0.

## Wert

Eine Zahl, die eine 64-Bit-Ganzzahl enthält.

## Beispiele

```js
const dbName = "sampleDB";
const dbVersion = 2;
const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = (e) => {
  const db = request.result;
  if (e.oldVersion < 1) {
    db.createObjectStore("store1");
  }

  if (e.oldVersion < 2) {
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
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
