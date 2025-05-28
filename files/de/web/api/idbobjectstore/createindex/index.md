---
title: "IDBObjectStore: createIndex() Methode"
short-title: createIndex()
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`createIndex()`** Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Schnittstelle erstellt und gibt ein neues [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekt in der verbundenen Datenbank zurück. Es erstellt ein neues Feld beziehungsweise eine neue Spalte, die einen neuen Datenpunkt für jeden Datensatz in der Datenbank definiert.

Bitte beachten Sie, dass IndexedDB-Indizes _jeden_ JavaScript-Datentyp enthalten können; IndexedDB verwendet den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um gespeicherte Objekte zu serialisieren, was die Speicherung einfacher und komplexer Objekte ermöglicht.

Beachten Sie, dass diese Methode nur aus einem `VersionChange` Transaktionsmodus-Callback aufgerufen werden darf.

## Syntax

```js-nolint
createIndex(indexName, keyPath)
createIndex(indexName, keyPath, options)
```

### Parameter

- `indexName`
  - : Der Name des zu erstellenden Index. Beachten Sie, dass es möglich ist, einen Index mit einem leeren Namen zu erstellen.
- `keyPath`
  - : Der Schlüsselpfad, den der Index verwenden soll. Beachten Sie, dass es möglich ist, einen Index mit einem leeren `keyPath` zu erstellen und auch eine Sequenz (ein Array) als `keyPath` zu übergeben.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `unique`
      - : Wenn `true`, lässt der Index keine doppelten Werte für einen einzelnen Schlüssel zu. Standardmäßig `false`.
    - `multiEntry`
      - : Wenn `true`, fügt der Index einen Eintrag im Index für jedes Array-Element hinzu, wenn der `keyPath` zu einem Array aufgelöst wird.
        Wenn `false`, wird ein einzelner Eintrag mit dem gesamten Array hinzugefügt. Standardmäßig `false`.
    - `locale` {{non-standard_inline}} {{deprecated_inline}}
      - : Ermöglicht Ihnen, eine Gebietsschema für den Index festzulegen.
        Alle Sortieroperationen, die auf den Daten über Schlüsselbereiche durchgeführt werden, befolgen dann die Sortierregeln dieses Gebietsschemas.
        Sie können den Wert auf eine der folgenden Arten angeben:
        - `string`: Ein String, der einen spezifischen Gebietsschema-Code enthält, z.B. `en-US` oder `pl`.
        - `auto`: Das Standardgebietsschema der Plattform wird verwendet (kann durch die Einstellungen des Benutzeragenten geändert werden).
        - `null` oder `undefined`: Wenn kein Gebietsschema angegeben ist, wird die normale JavaScript-Sortierung verwendet — nicht sprachabhängig.

### Rückgabewert

Ein [`IDBIndex`](/de/docs/Web/API/IDBIndex) Objekt: der neu erstellte Index.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Index mit demselben Namen bereits in der Datenbank existiert. Indexnamen sind groß-/kleinschreibungssensitiv.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüsselpfad eine Sequenz ist und `multiEntry` im `objectParameters` Objekt auf `true` gesetzt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Methode nicht von einem `versionchange` Transaktionsmodus-Callback aus aufgerufen wurde, d.h. aus einem [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Handler.
    - Der Objektspeicher gelöscht wurde.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `keyPath` kein [gültiger Schlüsselpfad](https://w3c.github.io/IndexedDB/#valid-key-path) ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gehört, nicht aktiv ist (z.B. gelöscht oder entfernt wurde.) In Firefox vor Version 41 wurde in diesem Fall ebenfalls ein `InvalidStateError` ausgelöst, was irreführend war; dies wurde nun behoben (siehe [Firefox Bug 1176165](https://bugzil.la/1176165).)

## Beispiele

Im folgenden Beispiel sehen Sie, wie der [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) Handler verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. `createIndex()` wird verwendet, um neue Indizes im Objektspeicher zu erstellen. Für ein vollständiges funktionierendes Beispiel sehen Sie unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Beispielreferenz: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
