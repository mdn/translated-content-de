---
title: "IDBObjectStore: createIndex()-Methode"
short-title: createIndex()
slug: Web/API/IDBObjectStore/createIndex
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`createIndex()`**-Methode des {{domxref("IDBObjectStore")}}-Interfaces erstellt und gibt ein neues {{domxref("IDBIndex")}}-Objekt in der verbundenen Datenbank zurück. Sie erstellt ein neues Feld/Spalte, das einen neuen Datenpunkt für jeden Datensatz in der Datenbank definiert.

Bedenken Sie, dass IndexedDB-Indizes _alle_ JavaScript-Datentypen enthalten können; IndexedDB verwendet den [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), um gespeicherte Objekte zu serialisieren, was die Speicherung von einfachen und komplexen Objekten ermöglicht.

Beachten Sie, dass diese Methode nur von einem `VersionChange`-Transaktionsmodus-Rückruf aufgerufen werden darf.

## Syntax

```js-nolint
createIndex(indexName, keyPath)
createIndex(indexName, keyPath, options)
```

### Parameter

- `indexName`
  - : Der Name des zu erstellenden Indexes. Beachten Sie, dass es möglich ist, einen Index mit einem leeren Namen zu erstellen.
- `keyPath`
  - : Der Schlüsselpfad, den der Index verwenden soll. Beachten Sie, dass es möglich ist, einen Index mit einem leeren `keyPath` zu erstellen und auch, eine Sequenz (Array) als `keyPath` zu übergeben.
- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `unique`
      - : Wenn `true`, wird der Index keine doppelten Werte für einen einzelnen Schlüssel zulassen. Standardmäßig ist dies `false`.
    - `multiEntry`
      - : Wenn `true`, wird der Index für jedes Array-Element, wenn der `keyPath` zu einem Array aufgelöst wird, einen Eintrag im Index hinzufügen. Wenn `false`, wird ein einzelner Eintrag hinzugefügt, der das Array enthält. Standardmäßig ist dies `false`.
    - `locale` {{non-standard_inline}} {{deprecated_inline}}
      - : Ermöglicht Ihnen, eine Gebietsschema für den Index anzugeben. Alle Sortierprozesse, die über Schlüsselbereiche auf den Daten durchgeführt werden, folgen dann den Sortierregeln des angegebenen Gebietsschemas. Der Wert kann auf drei Arten angegeben werden:
        - `string`: Ein String, der einen bestimmten Gebietsschemacode enthält, z.B. `en-US` oder `pl`.
        - `auto`: Das Standard-Gebietsschema der Plattform wird verwendet (kann durch Benutzereinstellungen geändert werden).
        - `null` oder `undefined`: Wenn kein Gebietsschema angegeben ist, wird die normale JavaScript-Sortierung verwendet — nicht gebietsschema-bewusst.

### Rückgabewert

Ein {{domxref("IDBIndex")}}-Objekt: der neu erstellte Index.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `ConstraintError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Index mit demselben Namen bereits in der Datenbank existiert. Indexnamen sind Groß- und Kleinschreibung beachten.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüsselpfad eine Sequenz ist und `multiEntry` im `objectParameters`-Objekt auf `true` gesetzt ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn:
    - Die Methode wurde nicht von einem `versionchange`-Transaktionsmodus-Rückruf aufgerufen, d.h. von innerhalb eines {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}}-Handlers.
    - Der Objektspeicher wurde gelöscht.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene `keyPath` kein <a href="https://www.w3.org/TR/IndexedDB/#dfn-valid-key-path">gültiger Schlüsselpfad</a> ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion, zu der dieses {{domxref("IDBObjectStore")}} gehört, nicht aktiv ist (z.B. gelöscht oder entfernt wurde). In Firefox vor Version 41 wurde in diesem Fall ebenfalls ein `InvalidStateError` ausgelöst, was irreführend war; dies wurde nun behoben (siehe [Firefox-Bug 1176165](https://bugzil.la/1176165)).

## Beispiele

Im folgenden Beispiel sehen Sie den {{domxref("IDBOpenDBRequest.upgradeneeded_event", "onupgradeneeded")}}-Handler, der verwendet wird, um die Datenbankstruktur zu aktualisieren, wenn eine Datenbank mit einer höheren Versionsnummer geladen wird. `createIndex()` wird verwendet, um neue Indizes im Objektspeicher zu erstellen. Ein vollständiges Arbeitsbeispiel finden Sie in unserer [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

// Lassen Sie uns unsere Datenbank öffnen
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Zwei Event-Handler, um die Datenbank zu öffnen.
DBOpenRequest.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Fehler beim Laden der Datenbank.";
};

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Datenbank initialisiert.";

  // Speichern Sie das Ergebnis des Öffnens der Datenbank in der db-Variable.
  // Dies wird unten oft verwendet.
  db = request.result;

  // Führen Sie die displayData()-Funktion aus, um die Aufgabenliste
  // mit allen bereits in der IDB befindlichen To-do-Liste-Daten zu füllen.
  displayData();
};

// Dieser Handler wird ausgelöst, wenn eine neue Datenbank erstellt wird und zeigt
// entweder an, dass zuvor keine erstellt wurde oder eine neue Version
// mit window.indexedDB.open() übermittelt wurde. (Siehe oben.)
// Es ist nur in neueren Browsern implementiert.
DBOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  db.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Fehler beim Laden der Datenbank.";
  };

  // Erstellen Sie einen Objektspeicher für diese Datenbank
  const objectStore = db.createObjectStore("toDoList", {
    keyPath: "taskTitle",
  });

  // Definieren Sie, welche Dateneinträge der Objektspeicher enthalten soll

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Cursors verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
