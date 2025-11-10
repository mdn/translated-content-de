---
title: "IDBDatabase: createObjectStore() Methode"
short-title: createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`createObjectStore()`** Methode der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Schnittstelle erstellt und gibt einen neuen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zurück.

Die Methode nimmt den Namen des Speichers sowie ein Parameterobjekt entgegen, das es Ihnen ermöglicht, wichtige optionale Eigenschaften zu definieren. Sie können die Eigenschaft verwenden, um einzelne Objekte im Speicher eindeutig zu identifizieren. Da die Eigenschaft ein Identifikator ist, sollte sie für jedes Objekt einzigartig sein, und jedes Objekt sollte diese Eigenschaft haben.

Diese Methode kann _nur_ innerhalb einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event) Transaktion aufgerufen werden.

## Syntax

```js-nolint
createObjectStore(name)
createObjectStore(name, options)
```

### Parameter

- `name`
  - : Der Name des neuen zu erstellenden Objektspeichers. Beachten Sie, dass es möglich ist, einen Objektspeicher mit einem leeren Namen zu erstellen.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, dessen Attribute optionale Parameter für die Methode sind. Es enthält die folgenden Eigenschaften:
    - `keyPath` {{optional_inline}}
      - : Der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path), der vom neuen Objektspeicher verwendet werden soll. Wenn leer oder nicht angegeben, wird der Objektspeicher ohne Schlüsselpfad erstellt und verwendet [außerhalb liegende Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#out-of-line_key). Sie können auch ein Array als `keyPath` übergeben.
    - `autoIncrement` {{optional_inline}}
      - : Wenn `true`, hat der Objektspeicher einen [Schlüsselerzeuger](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator). Standardmäßig ist <code>false</code>.

### Rückgabewert

Ein neuer [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) mit einem `name` der folgenden Typen auslösen:

- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Objektspeicher mit dem angegebenen Namen (basierend auf einem groß- und kleinschreibungssensitiven Vergleich) bereits in der verbundenen Datenbank existiert.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `autoIncrement` auf true gesetzt ist und `keyPath` entweder ein leerer String oder ein Array ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode nicht aus einem `versionchange` Transaktions-Callback aufgerufen wurde.
- `SyntaxError`
  - : Wird ausgelöst, wenn die `keyPath` Option einen ungültigen Schlüsselpfad enthält.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine Anfrage an eine Quell-Datenbank gestellt wird, die nicht existiert (zum Beispiel, wenn die Datenbank gelöscht oder entfernt wurde), oder wenn die zugehörige Upgrade-Transaktion abgeschlossen oder dabei ist, eine Anfrage zu verarbeiten.

## Beispiele

```js
// Let us open our database
const request = window.indexedDB.open("toDoList", 4);

// This handler is called when a new version of the database
// is created, either when one has not been created before
// or when a new version number is submitted by calling
// window.indexedDB.open().
// This handler is only supported in recent browsers.
request.onupgradeneeded = (event) => {
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

  note.appendChild(document.createElement("li")).textContent =
    "Object store created.";
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
