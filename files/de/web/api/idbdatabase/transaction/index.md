---
title: "IDBDatabase: transaction()-Methode"
short-title: transaction()
slug: Web/API/IDBDatabase/transaction
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`transaction`**-Methode der [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Schnittstelle gibt sofort ein Transaktionsobjekt ([`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) zurück, das die Methode [`IDBTransaction.objectStore`](/de/docs/Web/API/IDBTransaction/objectStore) enthält, mit der Sie auf Ihren Objekt-Store zugreifen können.

## Syntax

```js-nolint
transaction(storeNames)
transaction(storeNames, mode)
transaction(storeNames, mode, options)
```

### Parameter

- `storeNames`

  - : Die Namen der Objekt-Stores, die im Geltungsbereich der neuen Transaktion sind, deklariert als ein Array von Strings. Geben Sie nur die Objekt-Stores an, auf die Sie zugreifen müssen.
    Wenn Sie nur auf einen Objekt-Store zugreifen müssen, können Sie dessen Namen als String angeben.
    Daher sind die folgenden Zeilen gleichwertig:

    ```js
    db.transaction(["my-store-name"]);
    db.transaction("my-store-name");
    ```

    Wenn Sie auf alle Objekt-Stores in der Datenbank zugreifen müssen, können Sie die Eigenschaft [`IDBDatabase.objectStoreNames`](/de/docs/Web/API/IDBDatabase/objectStoreNames) verwenden:

    ```js
    const transaction = db.transaction(db.objectStoreNames);
    ```

    Das Übergeben eines leeren Arrays führt zu einer Ausnahme.

- `mode` {{optional_inline}}

  - : Die Arten des Zugriffs, die in der Transaktion durchgeführt werden können.
    Transaktionen werden in einem von drei Modi geöffnet:
    - `readonly`
      - : Öffnet eine Transaktion zum Lesen aus einem Objekt-Store. Dies ist der Standardmodus.
    - `readwrite`
      - : Öffnet eine Transaktion zum sowohl Lesen als auch Schreiben aus einem Objekt-Store.
        Dies sollte nur verwendet werden, wenn Sie in die Datenbank schreiben müssen.
    - `readwriteflush` {{non-standard_inline}} {{experimental_inline}}
      - : Erzwingt, dass eine Transaktion vor der Auslieferung des `complete`-Events auf die Festplatte geschrieben wird.
        Dies könnte zum Speichern kritischer Daten verwendet werden, die später nicht neu berechnet werden können.

- `options` {{optional_inline}}
  - : Objekt, das zusätzliche Optionen definiert, einschließlich:
    - `durability`
      - : Einer der drei unten aufgeführten String-Literalwerte:
        - `"strict"`
          - : Der User-Agent kann die Transaktion erst dann als erfolgreich abgeschlossen betrachten, nachdem überprüft wurde, dass alle ausstehenden Änderungen erfolgreich auf ein permanentes Speichermedium geschrieben wurden.
            Dies wird empfohlen, wenn das Risiko eines Datenverlustes stärker wiegt als die Auswirkungen auf Leistung und Stromverbrauch (verglichen mit `relaxed`).
        - `"relaxed"`
          - : Der User-Agent kann die Transaktion als erfolgreich abgeschlossen betrachten, sobald alle ausstehenden Änderungen auf das Betriebssystem geschrieben wurden, ohne nachfolgende Verifizierung.
            Dies bietet bessere Leistung als `strict` und wird für flüchtige Daten wie Caches oder schnell wechselnde Datensätze empfohlen.
        - `"default"`
          - : Der User-Agent sollte sein Standardverhalten zur Haltbarkeit für den Speicher-Bucket verwenden.
            Dies ist die Voreinstellung für Transaktionen, wenn nicht anders angegeben.

### Rückgabewert

Ein [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Methode [`close()`](/de/docs/Web/API/IDBDatabase/close) zuvor auf dieser [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)-Instanz aufgerufen wurde.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn ein im 'storeNames'-Parameter angegebenes Objekt-Store gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der Wert für den `mode`-Parameter ungültig ist.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Funktion mit einer leeren Liste von Store-Namen aufgerufen wurde.

## Beispiele

In diesem Beispiel öffnen wir eine Datenbankverbindung und verwenden dann transaction(), um eine Transaktion in der Datenbank zu öffnen.
Für ein vollständiges Beispiel siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Transaktionen beginnen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
