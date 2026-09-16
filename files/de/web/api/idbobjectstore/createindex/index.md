---
title: "IDBObjectStore: Methode createIndex()"
short-title: createIndex()
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: d6d924820daf59f8d30959f278deb5c9e2663f2f
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die Methode **`createIndex()`** des Interfaces
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) erstellt und gibt ein neues
[`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt in der verbundenen Datenbank zurück. Sie erstellt ein neues
Feld/eine neue Spalte, das bzw. die einen neuen Datenpunkt für jeden Datenbankdatensatz definiert.

Beachten Sie, dass IndexedDB-Indizes _jeden_ JavaScript-Datentyp enthalten können;
IndexedDB verwendet den [Structured-Clone-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um gespeicherte Objekte zu serialisieren, wodurch die Speicherung einfacher
und komplexer Objekte möglich ist.

Beachten Sie, dass diese Methode nur aus einem Callback im `VersionChange`-Transaktionsmodus
aufgerufen werden darf.

## Syntax

```js-nolint
createIndex(indexName, keyPath)
createIndex(indexName, keyPath, options)
```

### Parameter

- `indexName`
  - : Der Name des zu erstellenden Index. Beachten Sie, dass es möglich ist, einen Index mit einem leeren Namen zu erstellen.
- `keyPath`
  - : Der für den Index zu verwendende Schlüsselpfad. Beachten Sie, dass es möglich ist, einen Index mit einem leeren `keyPath` zu erstellen und außerdem eine Sequenz (ein Array) als `keyPath` zu übergeben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden
    Eigenschaften enthalten kann:
    - `unique`
      - : Wenn `true`, lässt der Index keine doppelten Werte für einen einzelnen Schlüssel zu. Standardmäßig `false`.
    - `multiEntry`
      - : Wenn `true`, fügt der Index für jedes Array-Element einen Eintrag im Index hinzu, wenn der `keyPath` zu einem Array aufgelöst wird.
        Wenn `false`, fügt er einen einzelnen Eintrag hinzu, der das Array enthält. Standardmäßig `false`.
    - `locale` {{non-standard_inline}} {{deprecated_inline}}
      - : Ermöglicht die Angabe eines Gebietsschemas für den Index.
        Alle über Schlüsselbereiche für die Daten ausgeführten Sortiervorgänge folgen dann den Sortierregeln dieses Gebietsschemas.
        Sie können den Wert auf eine von drei Arten angeben:
        - `string`: Ein String, der einen bestimmten Gebietsschema-Code enthält, z. B. `en-US` oder `pl`.
        - `auto`: Das Standardgebietsschema der Plattform wird verwendet (kann durch Einstellungen des User Agents geändert werden).
        - `null` oder `undefined`: Wenn kein Gebietsschema angegeben ist, wird die normale JavaScript-Sortierung verwendet — nicht gebietsschemabewusst.

### Rückgabewert

Ein [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt: der neu erstellte Index.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn im Object Store bereits ein Index mit demselben Namen vorhanden ist. Indexnamen unterscheiden zwischen Groß- und Kleinschreibung.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüsselpfad eine Sequenz ist und `multiEntry` im `objectParameters`-Objekt auf `true` gesetzt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Methode nicht aus einem Callback im `versionchange`-Transaktionsmodus aufgerufen wurde, d.h. innerhalb eines [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Handlers.
    - Der Object Store gelöscht wurde.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte `keyPath` kein [gültiger Schlüsselpfad](https://w3c.github.io/IndexedDB/#valid-key-path) ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
    gehört, nicht aktiv ist (z. B. gelöscht oder entfernt wurde). In Firefox
    vor Version 41 wurde in diesem Fall ebenfalls ein `InvalidStateError` ausgelöst,
    was irreführend war; dies wurde inzwischen behoben (siehe
    [Firefox-Bug 1176165](https://bugzil.la/1176165).)

## Beispiele

Im folgenden Beispiel sehen Sie,
wie der [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Handler verwendet wird, um die
Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird.
`createIndex()` wird verwendet, um neue Indizes für den Object Store zu erstellen. Ein
vollständiges funktionsfähiges Beispiel finden Sie in unserer App [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Two event handlers for opening the database.
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Error loading database.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below.
  db = request.result;

  // Run the displayData() function to populate the task list with
  // all the to-do list data already in the IDB
  displayData();
};

// This handler fires when a new database is created and indicates
// either that one has not been created before, or a new version
// was submitted with window.indexedDB.open(). (See above.)
// It is only implemented in recent browsers.
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Error loading database.";
  };

  // Create an objectStore for this database
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
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
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
