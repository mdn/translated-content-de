---
title: "IDBFactory: Methode deleteDatabase()"
short-title: deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
l10n:
  sourceCommit: 8ff0fae08b27be7c09762439bd886fc7999f6f59
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die Methode **`deleteDatabase()`** der Schnittstelle [`IDBFactory`](/de/docs/Web/API/IDBFactory) fordert die Löschung einer Datenbank an. Die Methode gibt sofort ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest)-Objekt zurück und führt die Löschung asynchron aus.

## Syntax

```js-nolint
deleteDatabase(name)
// Non-standard
deleteDatabase(name, options)
```

### Parameter

- `name`
  - : Der Name der Datenbank, die Sie löschen möchten. Beachten Sie, dass der Versuch, eine nicht vorhandene Datenbank zu löschen, keine Ausnahme auslöst. Im Gegensatz dazu löst [`IDBDatabase.deleteObjectStore()`](/de/docs/Web/API/IDBDatabase/deleteObjectStore) eine Ausnahme aus, wenn der angegebene Object Store nicht vorhanden ist.
- `options` {{optional_inline}} {{Non-standard_Inline}}
  - : In Gecko können Sie seit [Version 26](/de/docs/Mozilla/Firefox/Releases/26) einen optionalen, nicht standardisierten Speicherparameter angeben. Damit legen Sie fest, ob Sie eine IndexedDB im Speicherbereich `permanent` (dem Standardwert) oder im Speicherbereich `temporary` (auch „shared pool“ genannt) löschen möchten.

### Rückgabewert

Ein [`IDBOpenDBRequest`](/de/docs/Web/API/IDBOpenDBRequest), auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Anfrage ausgelöst werden.

Wenn der Vorgang erfolgreich ist, hat die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage den Wert `undefined`.

## Beschreibung

Wenn die Datenbank erfolgreich gelöscht wurde, wird auf dem von `deleteDatabase()` zurückgegebenen Anfrageobjekt ein `success`-Ereignis ausgelöst. Dessen `result` ist auf `undefined` gesetzt. Tritt bei der Löschung ein Fehler auf, wird auf dem von dieser Methode zurückgegebenen Anfrageobjekt ein `error`-Ereignis ausgelöst.

Wenn `deleteDatabase()` aufgerufen wird, erhalten alle anderen offenen Verbindungen zu dieser Datenbank ein [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Ereignis. Dadurch können sie geschlossen werden, damit die Löschung fortgesetzt werden kann.

Wird eine Verbindung als Reaktion auf das `versionchange`-Ereignis nicht geschlossen, wird die Löschung blockiert: Das `success`-Ereignis der Anfrage wird nicht ausgelöst. Stattdessen wird auf der Anfrage ein [`blocked`](/de/docs/Web/API/IDBOpenDBRequest/blocked_event)-Ereignis ausgelöst. Die Löschung bleibt ausstehend, bis alle Verbindungen zur Datenbank geschlossen sind. In der Zwischenzeit funktionieren noch offene Verbindungen wie gewohnt: Sie können weiterhin Transaktionen ausführen, bis sie geschlossen werden. Jede spätere [`open()`](/de/docs/Web/API/IDBFactory/open)- oder `deleteDatabase()`-Anfrage für dieselbe Datenbank wird hinter der ausstehenden Löschung eingereiht und erst fortgesetzt, wenn die Löschung abgeschlossen ist.

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

### Umgang mit einer blockierten Löschung

Stellen Sie sich zwei Browser-Tabs vor, die auf dieselbe Datenbank zugreifen. Der erste Tab fordert die Löschung an, aber der zweite schließt die Datenbank nicht. Auf der Anfrage im ersten Tab wird ein `blocked`-Ereignis ausgelöst. In diesem Fall können Sie den Benutzern eine Warnung anzeigen und sie bitten, die anderen Tabs zu schließen.

```js
const dbDeleteRequest = indexedDB.deleteDatabase("toDoList");

dbDeleteRequest.onblocked = (event) => {
  console.warn(
    "Deletion is blocked: close other tabs that have this app open to continue.",
  );
};

dbDeleteRequest.onsuccess = (event) => {
  console.log("Database deleted successfully");
};
```

Normalerweise sollten Sie dies automatisch handhaben, indem Sie [`IDBDatabase.close()`](/de/docs/Web/API/IDBDatabase/close) im `versionchange`-Ereignishandler des zweiten Tabs aufrufen:

```js
// db is an open connection (e.g. from a previous indexedDB.open() success)
db.addEventListener("versionchange", () => {
  db.close();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
