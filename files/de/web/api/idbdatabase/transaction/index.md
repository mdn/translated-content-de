---
title: "IDBDatabase: transaction() Methode"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`** Methode der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Schnittstelle gibt sofort ein Transaktionsobjekt ([`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) zurück. Dieses enthält die Methode [`IDBTransaction.objectStore`](/de/docs/Web/API/IDBTransaction/objectStore), die Sie verwenden können, um auf Ihren Objektspeicher zuzugreifen.

## Syntax

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameter

- `storeNames`

  - : Die Namen der Objektspeicher, die im Geltungsbereich der neuen Transaktion liegen. Diese werden als ein Array von Strings angegeben. Geben Sie nur die Objektspeicher an, auf die Sie zugreifen müssen.
    Wenn Sie nur auf einen Objektspeicher zugreifen müssen, können Sie dessen Namen als String angeben.
    Daher sind die folgenden Zeilen gleichwertig:

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    Wenn Sie auf alle Objektspeicher in der Datenbank zugreifen müssen, können Sie die Eigenschaft [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames) verwenden:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Das Übergeben eines leeren Arrays wirft eine Ausnahme.

- `mode` {{optional_inline}}

  - : Die Arten des Zugriffs, die in der Transaktion durchgeführt werden können.
    Transaktionen werden in einem von drei Modi geöffnet:

    - `readonly`
      - : Öffnet eine Transaktion zum Lesen aus einem Objektspeicher. Dies ist der Standardmodus.
    - `readwrite`
      - : Öffnet eine Transaktion sowohl zum Lesen als auch zum Schreiben aus einem Objektspeicher.
        Dies sollte nur verwendet werden, wenn in die Datenbank geschrieben werden muss.
    - `readwriteflush` {{non-standard_inline}} {{experimental_inline}}
      - : Erzwingt, dass eine Transaktion vor dem Ausliefern des `complete`-Ereignisses auf die Festplatte geschrieben wird.
        Dies könnte zum Speichern kritischer Daten verwendet werden, die später nicht mehr neu berechnet werden können.

- `options` {{optional_inline}}

  - : Ein Objekt, das zusätzliche Optionen definiert, einschließlich:

    - `durability`

      - : Einer der drei string-literal Werte unten:

        - `"strict"`
          - : Der Benutzeragent kann der Meinung sein, dass die Transaktion nur dann erfolgreich abgeschlossen wurde, wenn alle ausstehenden Änderungen erfolgreich auf ein permanentes Speichermedium geschrieben wurden.
            Dies wird empfohlen, wenn das Risiko eines Datenverlusts die Leistungsauswirkungen und den Stromverbrauch überwiegt (im Vergleich zu `relaxed`).
        - `"relaxed"`
          - : Der Benutzeragent kann der Meinung sein, dass die Transaktion erfolgreich abgeschlossen wurde, sobald alle ausstehenden Änderungen in das Betriebssystem geschrieben wurden, ohne nachfolgende Überprüfung.
            Dies bietet eine bessere Leistung als `strict` und wird für kurzlebige Daten wie Cache oder sich schnell ändernde Datensätze empfohlen.
        - `"default"`
          - : Der Benutzeragent sollte sein Standardverhalten zur Haltbarkeit für den Speicherbereich verwenden.
            Dies ist der Standard für Transaktionen, wenn nicht anders angegeben.

### Rückgabewert

Ein [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode [`close()`](/de/docs/Web/API/IDBDatabase/close) zuvor auf dieser Instanz von [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) aufgerufen wurde.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein im 'storeNames'-Parameter angegebenes Objektspeicher gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den `mode` Parameter ungültig ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion mit einer leeren Liste von Objektspeichernamen aufgerufen wurde.

## Beispiele

In diesem Beispiel öffnen wir eine Datenbankverbindung und verwenden dann `transaction()`, um eine Transaktion für die Datenbank zu öffnen.
Für ein vollständiges Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let db;

// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the displayData() function to populate the task list with
  // all the to-do list data already in the IDB
  displayData();
};

// open a read/write db transaction, ready for adding the data
const transaction = db.transaction(["toDoList"], "readwrite");

// report on the success of opening the transaction
transaction.oncomplete = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaction completed: database modification finished.";
};

transaction.onerror = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Transaction not opened due to error. Duplicate items not allowed.";
};

// you would then go on to do something to this database
// via an object store
const objectStore = transaction.objectStore("toDoList");
// etc.
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
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
