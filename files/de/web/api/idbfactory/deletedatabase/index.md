---
title: "IDBFactory: deleteDatabase()-Methode"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`deleteDatabase()`**-Methode der [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Schnittstelle fordert die Löschung einer Datenbank an. Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt die Löschoperation asynchron durch.

Wenn die Datenbank erfolgreich gelöscht wird, wird ein `success`-Ereignis auf dem von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst, mit dem `result` auf `undefined` gesetzt. Wenn ein Fehler auftritt, während die Datenbank gelöscht wird, wird ein `error`-Ereignis auf dem von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst.

Wenn `deleteDatabase()` aufgerufen wird, erhalten alle anderen offenen Verbindungen zu dieser speziellen Datenbank ein [versionchange](/de/docs/Web/API/IDBDatabase/versionchange_event)-Ereignis.

## Syntax

```js-nolint
// For the current standard:
deleteDatabase(name)

// For the experimental version with `options` (see below):
deleteDatabase(name)
deleteDatabase(name, options)
```

### Parameter

- `name`
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine nicht vorhandene Datenbank zu löschen, keine Ausnahme auslöst, im Gegensatz zu [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore), die eine Ausnahme auslöst, wenn der benannte Objektspeicher nicht existiert.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko, seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26), können Sie einen nicht standardmäßigen optionalen Speicherparameter einschließen, der angibt, ob Sie eine `permanent` (der Standardwert) IndexedDB oder eine IndexedDB im `temporary` Speicher (auch als shared pool bezeichnet) löschen möchten.

### Rückgabewert

Ein [`IDBOpenDBRequest`], auf dem nachfolgende Ereignisse zu dieser Anforderung ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anforderung `null`.

## Beispiele

```js
const DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = (event) => {
  console.error("Error deleting database.");
};

DBDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");

  console.log(event.result); // should be undefined
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Nutzung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Betrachten Sie das Beispiel live](https://mdn.github.io/dom-examples/to-do-notifications/)).
