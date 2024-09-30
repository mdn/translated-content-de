---
title: "IDBDatabase: close() Methode"
short-title: close()
slug: Web/API/IDBDatabase/close
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`close()`**-Methode der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Schnittstelle gibt sofort zurück und schließt die Verbindung in einem separaten Thread.

Die Verbindung wird erst tatsächlich geschlossen, wenn alle mit dieser Verbindung erstellten Transaktionen abgeschlossen sind. Es können keine neuen Transaktionen für diese Verbindung erstellt werden, sobald diese Methode aufgerufen wird. Methoden, die Transaktionen erstellen, werfen eine Ausnahme, wenn ein Schließvorgang aussteht.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4); // opening a database.

// Create event handlers for both success and failure of
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  db = DBOpenRequest.result;

  // now let's close the database again!
  db.close();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einrichten eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
