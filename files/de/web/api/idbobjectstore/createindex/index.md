---
title: "IDBObjectStore: createIndex() Methode"
short-title: createIndex()
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`createIndex()`** Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Schnittstelle erstellt und gibt ein neues [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekt in der verbundenen Datenbank zurück. Sie erstellt ein neues Feld/Spalte, das einen neuen Datenpunkt für jeden Datenbanksatz definiert, der darin enthalten sein soll.

Bedenken Sie, dass IndexedDB-Indizes _jede_ JavaScript-Datentyp enthalten können; IndexedDB verwendet den [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um gespeicherte Objekte zu serialisieren, was die Speicherung einfacher und komplexer Objekte ermöglicht.

Beachten Sie, dass diese Methode nur aus einem `VersionChange`-Transaktionsmodus-Callback aufgerufen werden darf.

## Syntax

```js-nolint
createIndex(indexName, keyPath)
createIndex(indexName, keyPath, options)
```

### Parameter

- `indexName`
  - : Der Name des zu erstellenden Indexes. Beachten Sie, dass es möglich ist, einen Index mit einem leeren Namen zu erstellen.
- `keyPath`
  - : Der Schlüsselpfad, den der Index verwenden soll. Beachten Sie, dass es möglich ist, einen Index mit einem leeren `keyPath` zu erstellen, und es auch möglich ist, eine Sequenz (Array) als `keyPath` zu übergeben.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `unique`
      - : Wenn `true`, wird der Index keine doppelten Werte für einen einzelnen Schlüssel zulassen. Der Standardwert ist `false`.
    - `multiEntry`
      - : Wenn `true`, fügt der Index für jedes Array-Element einen Eintrag im Index hinzu, wenn der `keyPath` auf ein Array auflöst.
        Wenn `false`, wird ein einziger Eintrag hinzugefügt, der das Array enthält. Der Standardwert ist `false`.
    - `locale` {{non-standard_inline}} {{deprecated_inline}}
      - : Erlaubt Ihnen, eine Locale für den Index anzugeben.
        Alle Sortiervorgänge, die auf den Daten über Schlüsselbereiche ausgeführt werden, folgen dann den Sortierregeln dieser Locale.
        Sie können ihren Wert auf drei Arten angeben:
        - `string`: Eine Zeichenkette mit einem spezifischen Localecode, z. B. `en-US` oder `pl`.
        - `auto`: Die plattformspezifische Locale wird verwendet (kann durch Browsereinstellungen geändert werden).
        - `null` oder `undefined`: Wenn keine Locale angegeben ist, wird die normale JavaScript-Sortierung verwendet — nicht lokaalspezifisch.

### Rückgabewert

Ein [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekt: der neu erstellte Index.

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Index mit demselben Namen bereits in der Datenbank existiert. Indexnamen sind groß-/klein-schreibungssensitiv.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüsselpfad eine Sequenz ist und `multiEntry` im `objectParameters`-Objekt auf `true` gesetzt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Methode nicht aus einem `versionchange` Transaktionsmodus-Callback aufgerufen wurde, d.h. von innerhalb eines [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Handlers.
    - Der Objektspeicher wurde gelöscht.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `keyPath` kein [gültiger Schlüsselpfad](https://w3c.github.io/IndexedDB/#valid-key-path) ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gehört, nicht aktiv ist (z. B. wurde gelöscht oder entfernt). In Firefox vor Version 41 wurde in diesem Fall ebenfalls ein `InvalidStateError` ausgelöst, was irreführend war; dies wurde jetzt behoben (siehe [Firefox Bug 1176165](https://bugzil.la/1176165)).

## Beispiele

Im folgenden Beispiel sehen Sie den [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Handler, der verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. `createIndex()` wird verwendet, um neue Indizes im Objektspeicher zu erstellen. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Nutzung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselfeldbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
