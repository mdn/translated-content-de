---
title: "IDBFactory: deleteDatabase() Methode"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: a60464b0dfb623542aeee6a3fa3d28f0351fbf01
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`deleteDatabase()`** Methode der [`IDBFactory`](/de/docs/Web/API/IDBFactory) Schnittstelle fordert die Löschung einer Datenbank an. Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt den Löschvorgang asynchron durch.

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
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine nicht vorhandene Datenbank zu löschen, keine Ausnahme auslöst, im Gegensatz zu [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore), das eine Ausnahme auslöst, wenn der benannte Objekt-Store nicht existiert.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko, seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26), können Sie einen nicht standardmäßigen optionalen Speicherparameter angeben, der festlegt, ob Sie eine `permanent` (der Standardwert) IndexedDB oder eine IndexedDB im `temporary` Speicher (auch bekannt als gemeinsamer Pool) löschen möchten.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest), bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Anfrage ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage `null`.

## Beschreibung

Wenn die Datenbank erfolgreich gelöscht wird, wird ein `success`-Ereignis auf dem von `deleteDatabase()` zurückgegebenen Anforderungsobjekt ausgelöst, wobei sein `result` auf `undefined` gesetzt ist. Wenn während der Löschung ein Fehler auftritt, wird ein `error`-Ereignis auf dem von dieser Methode zurückgegebenen Anforderungsobjekt ausgelöst.

Wenn `deleteDatabase()` aufgerufen wird, erhalten alle anderen offenen Verbindungen zu dieser speziellen Datenbank ein [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Ereignis, das es ihnen ermöglicht, sich zu schließen, damit die Löschung fortgesetzt werden kann.

Wenn eine Verbindung als Reaktion auf das `versionchange`-Ereignis nicht geschlossen wird, wird die Löschung blockiert: Das `success`-Ereignis der Anfrage wird nicht ausgelöst, und ein [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)-Ereignis wird stattdessen auf der Anfrage ausgelöst. Die Löschung bleibt in Wartestellung, bis jede Verbindung zur Datenbank geschlossen ist.

Um die Aktion abzuschließen, schließen Sie jede Verbindung. Dies geschieht normalerweise, indem [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) innerhalb des `versionchange`-Ereignishandlers aufgerufen wird:

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

  console.log(event.result); // should be undefined
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
