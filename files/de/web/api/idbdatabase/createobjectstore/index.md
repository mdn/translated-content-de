---
title: "IDBDatabase: Methode createObjectStore()"
short-title: createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die Methode **`createObjectStore()`** der
{{domxref("IDBDatabase")}}-Schnittstelle erstellt und gibt ein neues {{domxref("IDBObjectStore")}} zurück.

Die Methode erfordert den Namen des Speichers sowie ein Parameterobjekt, das Ihnen ermöglicht,
wichtige optionale Eigenschaften zu definieren. Sie können die Eigenschaft nutzen, um individuelle
Objekte im Speicher eindeutig zu identifizieren. Da die Eigenschaft ein Bezeichner ist, sollte sie
für jedes Objekt einzigartig sein, und jedes Objekt sollte diese Eigenschaft haben.

Diese Methode kann _nur_ innerhalb einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)
Transaktion aufgerufen werden.

## Syntax

```js-nolint
createObjectStore(name)
createObjectStore(name, options)
```

### Parameter

- `name`
  - : Der Name des neuen zu erstellenden Objektspeichers. Beachten Sie, dass es möglich ist,
    einen Objektspeicher mit einem leeren Namen zu erstellen.
- `options` {{optional_inline}}

  - : Ein Optionen-Objekt, dessen Attribute optionale Parameter für die Methode sind. Es
    beinhaltet die folgenden Eigenschaften:
    - `keyPath` {{optional_inline}}
      - : Der [key path](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path),
        der vom neuen Objektspeicher verwendet werden soll. Falls leer oder nicht angegeben,
        wird der Objektspeicher ohne einen `keyPath` erstellt und nutzt
        [out-of-line keys](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#out-of-line_key).
        Sie können auch ein Array als `keyPath` übergeben.
    - `autoIncrement` {{optional_inline}}
      - : Wenn `true`, hat der Objektspeicher einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator).
        Standardmäßig auf <code>false</code> gesetzt.

### Rückgabewert

Ein neues {{domxref("IDBObjectStore")}}.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} mit einem `name` von
einem der folgenden Typen auslösen:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Methode nicht aus einem
    `versionchange`-Transaktions-Callback aufgerufen wurde.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine Anforderung an eine Quellendatenbank gestellt wird, die nicht existiert
    (zum Beispiel, wenn die Datenbank gelöscht oder entfernt wurde). In Firefox vor Version 41
    wurde in diesem Fall auch ein `InvalidStateError` ausgelöst, was
    irreführend war; dies wurde nun behoben (siehe [Firefox Bug 1176165](https://bugzil.la/1176165)).
- `ConstraintError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Objektspeicher mit dem angegebenen Namen (basierend auf einem Groß-/Kleinschreibung-sensitiven Vergleich)
    bereits in der verbundenen Datenbank existiert.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `autoIncrement` auf true gesetzt ist und `keyPath`
    entweder ein leerer String ist oder ein Array enthält, das einen leeren String enthält.

## Beispiele

```js
// Lassen Sie uns unsere Datenbank öffnen
const request = window.indexedDB.open("toDoList", 4);

// Dieser Handler wird aufgerufen, wenn eine neue Version der Datenbank
// erstellt wird, entweder wenn zuvor keine erstellt wurde
// oder wenn eine neue Versionsnummer über den Aufruf von
// window.indexedDB.open() übermittelt wird.
// Dieser Handler wird nur in neueren Browsern unterstützt.
request.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Erstellen Sie einen Objektspeicher für diese Datenbank

  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren Sie, welche Datenelemente der Objektspeicher enthalten wird

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.appendChild(document.createElement("li")).textContent =
    "Objektspeicher erstellt.";
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
