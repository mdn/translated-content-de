---
title: IDBFactory
slug: Web/API/IDBFactory
l10n:
  sourceCommit: dbd4ba01220a5031d3a26a3ac1490d3269210124
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBFactory`** Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) ermöglicht Anwendungen den asynchronen Zugriff auf die indizierten Datenbanken. Das Objekt, das das Interface implementiert, ist `window.indexedDB`. Sie öffnen – das heißt, erstellen und greifen auf – und löschen eine Datenbank mit diesem Objekt und nicht direkt mit `IDBFactory`.

## Instanzmethoden

- [`IDBFactory.open()`](/de/docs/Web/API/IDBFactory/open)
  - : Fordert das Öffnen einer [Verbindung zu einer Datenbank](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#database_connection) an.
- [`IDBFactory.deleteDatabase()`](/de/docs/Web/API/IDBFactory/deleteDatabase)
  - : Fordert die Löschung einer Datenbank an.
- [`IDBFactory.cmp()`](/de/docs/Web/API/IDBFactory/cmp)
  - : Vergleicht zwei Schlüssel und gibt ein Ergebnis zurück, das anzeigt, welcher einen größeren Wert hat.
- [`IDBFactory.databases()`](/de/docs/Web/API/IDBFactory/databases)
  - : Gibt ein Versprechen zurück, das mit einem Array aller verfügbaren Datenbanken erfüllt wird, einschließlich ihrer Namen und Versionen.

## Beispiel

Im folgenden Code-Snippet stellen wir eine Anfrage, um eine Datenbank zu öffnen, und fügen Handler für die Erfolgs- und Fehlerfälle hinzu. Für ein vollständiges Beispiel sehen Sie unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open version 4 of our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = (event) => {
  console.error("Error loading database.");
};

DBOpenRequest.onsuccess = (event) => {
  console.info("Database initialized.");

  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Beginnen von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
