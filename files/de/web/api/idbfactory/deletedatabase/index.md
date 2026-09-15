---
title: "IDBFactory: deleteDatabase()-Methode"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: 4c947bdeae2d9f574a3b59135f53c71ec4a3e87d
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`deleteDatabase()`**-Methode des [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Interfaces fordert die Löschung einer Datenbank an. Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt den Löschvorgang asynchron aus.

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
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine nicht vorhandene Datenbank zu löschen, keine Ausnahme auslöst, im Gegensatz zu [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore), das eine Ausnahme auslöst, wenn der benannte Objektspeicher nicht vorhanden ist.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko können Sie seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26) einen nicht standardmäßigen optionalen Speicherparameter angeben, der festlegt, ob Sie eine `permanent`-IndexedDB (der Standardwert) oder eine indexedDB im `temporary`-Speicher (auch als Shared Pool bezeichnet) löschen möchten.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest), auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Anfrage ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage `undefined`.

## Beschreibung

Wenn die Datenbank erfolgreich gelöscht wird, wird auf dem von `deleteDatabase()` zurückgegebenen Anfrageobjekt ein `success`-Ereignis ausgelöst, dessen `result` auf `undefined` gesetzt ist. Tritt während des Löschens ein Fehler auf, wird auf dem von dieser Methode zurückgegebenen Anfrageobjekt ein `error`-Ereignis ausgelöst.

Wenn `deleteDatabase()` aufgerufen wird, wird an alle anderen offenen Verbindungen zu dieser bestimmten Datenbank ein [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Ereignis gesendet, damit sie geschlossen werden können, sodass die Löschung fortgesetzt werden kann.

Wenn eine Verbindung nicht als Reaktion auf das `versionchange`-Ereignis geschlossen wird, wird die Löschung blockiert: Das `success`-Ereignis der Anfrage wird nicht ausgelöst, und stattdessen wird auf der Anfrage ein [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)-Ereignis ausgelöst. Die Löschung bleibt ausstehend, bis jede Verbindung zur Datenbank geschlossen wurde.

Schließen Sie jede Verbindung, damit der Vorgang abgeschlossen werden kann. Dies geschieht typischerweise durch den Aufruf von [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) innerhalb des Ereignishandlers für `versionchange`:

```js
// db is an open connection (e.g. from a previous indexedDB.open() success)
db.addEventListener("versionchange", () => {
  db.close();
});
```

## Beispiele

### Grundlegende Verwendung

```js
const dbDeleteRequest = indexedDB.deleteDatabase("toDoList");

dbDeleteRequest.onerror = (event) => {
  console.error("Error deleting database.");
};

dbDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");

  console.log(dbDeleteRequest.result); // undefined
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
