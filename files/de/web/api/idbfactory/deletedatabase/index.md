---
title: "IDBFactory: deleteDatabase()-Methode"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`deleteDatabase()`**-Methode des [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Interfaces fordert die Löschung einer Datenbank an. Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt die Löschoperation asynchron aus.

Wenn die Datenbank erfolgreich gelöscht wird, wird ein `success`-Ereignis auf dem Rückgabeobjekt dieser Methode ausgelöst, wobei das `result` auf `undefined` gesetzt ist. Tritt ein Fehler während der Löschung der Datenbank auf, wird ein `error`-Ereignis auf dem Rückgabeobjekt dieser Methode ausgelöst.

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
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine nicht existierende Datenbank zu löschen, keine Ausnahme auslöst, im Gegensatz zu [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore), das eine Ausnahme auslöst, wenn der benannte Objekt-Store nicht existiert.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko, seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26), können Sie einen nicht standardmäßigen optionalen Speicherparameter einbeziehen, der angibt, ob Sie eine `permanent` (der Standardwert) IndexedDB oder eine IndexedDB im `temporary` Speicher (auch shared pool genannt) löschen möchten.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest), bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Anfrage ausgelöst werden.

Wenn die Operation erfolgreich ist, hat die [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage den Wert `null`.

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
