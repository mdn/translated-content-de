---
title: "IDBObjectStore: Methode createIndex()"
short-title: createIndex()
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`createIndex()`**-Methode der
[`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle erstellt und gibt ein neues
[`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt in der verbundenen Datenbank zurück. Sie erstellt ein neues
Feld/Spalte, das einen neuen Datenpunkt für jeden Datensatz in der Datenbank definiert.

Beachten Sie, dass IndexedDB-Indizes _jeden_ JavaScript-Datentyp enthalten können;
IndexedDB verwendet den [strukturierter Klon-Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um gespeicherte Objekte zu serialisieren, was die Speicherung einfacher und komplexer Objekte ermöglicht.

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
  - : Der Schlüsselpfad, den der Index verwenden soll. Beachten Sie, dass es möglich ist, einen Index mit einem leeren `keyPath` zu erstellen und auch eine Sequenz (Array) als `keyPath` zu übergeben.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden
    Eigenschaften enthalten kann:
    - `unique`
      - : Wenn `true`, erlaubt der Index keine doppelten Werte für einen einzelnen Schlüssel. Standardmäßig `false`.
    - `multiEntry`
      - : Wenn `true`, wird der Index für jedes Array-Element einen Eintrag im Index hinzufügen, wenn der `keyPath` auf ein Array aufgelöst wird.
        Wenn `false`, wird ein einzelner Eintrag hinzugefügt, der das Array enthält. Standardmäßig `false`.
    - `locale` {{non-standard_inline}} {{deprecated_inline}}
      - : Ermöglicht Ihnen, eine Locale für den Index anzugeben.
        Alle Sortieroperationen, die über Schlüsselbereiche auf den Daten ausgeführt werden, befolgen dann die Sortierregeln dieser Locale.
        Sie können seinen Wert auf eine von drei Arten angeben:
        - `string`: Ein String, der einen spezifischen Locale-Code enthält, z.B. `en-US` oder `pl`.
        - `auto`: Die Standard-Locale der Plattform wird verwendet (kann durch Benutzeragenten-Einstellungen geändert werden).
        - `null` oder `undefined`: Wenn keine Locale angegeben ist, wird die normale JavaScript-Sortierung verwendet – nicht Locale-abhängig.

### Rückgabewert

Ein [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekt: der neu erstellte Index.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Index mit demselben Namen bereits in der Datenbank existiert. Indexnamen sind groß-/kleinschreibungssensitiv.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüsselpfad eine Sequenz ist und `multiEntry` im `objectParameters`-Objekt auf `true` gesetzt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - Die Methode nicht aus einem `versionchange`-Transaktionsmodus-Callback aufgerufen wurde, d.h. aus einem [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Handler.
    - Der Objekt-Store gelöscht wurde.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene `keyPath` kein <a href="https://www.w3.org/TR/IndexedDB/#dfn-valid-key-path">gültiger Schlüsselpfad</a> ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gehört, nicht aktiv ist (z.B. gelöscht oder entfernt wurde). In Firefox vor Version 41 wurde in diesem Fall ebenfalls ein `InvalidStateError` ausgelöst, was irreführend war; dies wurde nun behoben (siehe [Firefox-Bug 1176165](https://bugzil.la/1176165)).

## Beispiele

Im folgenden Beispiel sehen Sie den [`onupgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)-Handler, der verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird.
`createIndex()` wird verwendet, um neue Indizes im Objekt-Store zu erstellen. Für ein vollständiges funktionsfähiges Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
