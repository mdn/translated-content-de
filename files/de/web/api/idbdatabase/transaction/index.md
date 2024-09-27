---
title: "IDBDatabase: transaction() Methode"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`** Methode der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Schnittstelle gibt sofort ein Transaktionsobjekt ([`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) zurück, das die Methode [`IDBTransaction.objectStore`](/de/docs/Web/API/IDBTransaction/objectStore) enthält, mit der Sie auf Ihren Objekt-Store zugreifen können.

## Syntax

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameter

- `storeNames`

  - : Die Namen der Objekt-Stores, die im Bereich der neuen Transaktion liegen, angegeben als ein Array von Zeichenfolgen. Geben Sie nur die Objekt-Stores an, auf die Sie zugreifen müssen.
    Wenn Sie nur auf einen Objekt-Store zugreifen müssen, können Sie seinen Namen als Zeichenfolge angeben.
    Daher sind die folgenden Zeilen gleichwertig:

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    Wenn Sie auf alle Objekt-Stores in der Datenbank zugreifen müssen, können Sie die Eigenschaft [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames) verwenden:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Ein leeres Array zu übergeben, führt zu einer Ausnahme.

- `mode` {{optional_inline}}

  - : Die Arten des Zugriffs, die in der Transaktion durchgeführt werden können.
    Transaktionen werden in einem von drei Modi geöffnet:

    - `readonly`
      - : Öffnen Sie eine Transaktion zum Lesen aus einem Objekt-Store. Dies ist der Standardmodus.
    - `readwrite`
      - : Öffnen Sie eine Transaktion sowohl zum Lesen als auch zum Schreiben aus einem Objekt-Store.
        Dies sollte nur verwendet werden, wenn Sie in die Datenbank schreiben müssen.
    - `readwriteflush` {{non-standard_inline}} {{experimental_inline}}
      - : Erzwingt, dass eine Transaktion auf die Festplatte geschrieben wird, bevor das `complete` Ereignis geliefert wird.
        Dies kann verwendet werden, um kritische Daten zu speichern, die später nicht mehr berechnet werden können.

- `options` {{optional_inline}}

  - : Objekt, das zusätzliche Optionen definiert, einschließlich:

    - `durability`

      - : Einer der drei unten aufgeführten String-Literal-Werte:

        - `"strict"`
          - : Der Nutzer-Agent kann berücksichtigen, dass die Transaktion erfolgreich abgeschlossen wurde, nur nachdem alle ausstehenden Änderungen erfolgreich auf ein dauerhaftes Speichermedium geschrieben wurden.
            Dies wird empfohlen, wenn das Risiko von Datenverlust größer ist als die Auswirkungen auf Leistung und Stromverbrauch (im Vergleich zu `relaxed`).
        - `"relaxed"`
          - : Der Nutzer-Agent kann berücksichtigen, dass die Transaktion erfolgreich abgeschlossen wurde, sobald alle ausstehenden Änderungen auf das Betriebssystem geschrieben wurden, ohne nachträgliche Überprüfung.
            Dies bietet eine bessere Leistung als `strict` und wird für kurzlebige Daten wie Caches oder sich schnell ändernde Datensätze empfohlen.
        - `"default"`
          - : Der Nutzer-Agent sollte sein Standardverhalten für die Haltbarkeit des Speicherbereichs verwenden.
            Dies ist der Standard für Transaktionen, wenn nichts anderes angegeben ist.

### Rückgabewert

Ein [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode [`close()`](/de/docs/Web/API/IDBDatabase/close) zuvor bei dieser [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) Instanz aufgerufen wurde.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein in 'storeNames' angegebener Objekt-Store gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den `mode` Parameter ungültig ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Funktion mit einer leeren Liste von Store-Namen aufgerufen wurde.

## Beispiele

In diesem Beispiel öffnen wir eine Datenbankverbindung und verwenden dann `transaction()`, um eine Transaktion in der Datenbank zu öffnen.
Für ein vollständiges Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Festlegen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
