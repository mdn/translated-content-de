---
title: "IDBObjectStore: add() Methode"
short-title: add()
slug: Web/API/IDBObjectStore/add
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`add()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Werts und speichert den geklonten Wert im Object Store. Dies dient dem Hinzufügen neuer Datensätze in einen Object Store.

Um festzustellen, ob der Hinzufügungsvorgang erfolgreich abgeschlossen wurde, hören Sie auf das `complete`-Ereignis der Transaktion sowie auf das `success`-Ereignis der `IDBObjectStore.add`-Anfrage, da die Transaktion nach dem Auslösen des Erfolgsevents immer noch fehlschlagen kann. Mit anderen Worten, das Erfolgsevent wird nur ausgelöst, wenn die Transaktion erfolgreich in die Warteschlange gestellt wurde.

Die Add-Methode ist eine _nur Einfügen_-Methode. Wenn ein Datensatz bereits im Object Store mit dem `key`-Parameter als Schlüssel existiert, wird ein `ConstraintError`-Ereignis auf dem zurückgegebenen Anfrageobjekt ausgelöst. Zum Aktualisieren bestehender Datensätze sollten Sie stattdessen die [`IDBObjectStore.put`](/de/docs/Web/API/IDBObjectStore/put)-Methode verwenden.

## Syntax

```js-nolint
add(value)
add(value, key)
```

### Parameter

- `value`
  - : Der zu speichernde Wert.
- `key` {{optional_inline}}
  - : Der Schlüssel, der verwendet wird, um den Datensatz zu identifizieren. Wenn nicht angegeben, ist der Wert null.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Schlüssel für den neuen Datensatz.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im schreibgeschützten <a href="/de/docs/Web/API/IDBTransaction#mode_constants">Modus</a> ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet Inline-Schlüssel oder hat einen Schlüsselgenerator, und ein Schlüsselparameter wurde bereitgestellt.
    - Der Objekt-Store verwendet Out-of-line-Schlüssel und hat keinen Schlüsselgenerator, und es wurde kein Schlüsselparameter bereitgestellt.
    - Der Objekt-Store verwendet Inline-Schlüssel, aber keinen Schlüsselgenerator, und der Schlüsselpfad des Objekt-Stores ergibt keinen gültigen Schlüssel.
    - Der Schlüsselparameter wurde bereitgestellt, enthält jedoch keinen gültigen Schlüssel.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.
- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Einfügevorgang fehlgeschlagen ist, weil die Primärschlüsselbeschränkung verletzt wurde (aufgrund eines bereits vorhandenen Datensatzes mit demselben Primärschlüsselwert).

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreib-Transaktion in unserer Datenbank und fügen mit `add()` einige Daten in einen Object Store ein. Beachten Sie auch die Funktionen, die den Ereignis-Handlern der Transaktion beigefügt sind, um über das Ergebnis der Transaktionsöffnung im Falle eines Erfolgs oder Fehlschlags zu berichten. Für ein vollständiges, funktionierendes Beispiel sehen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// Let us open our database
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = (event) => {
  note.appendChild(document.createElement("li")).textContent =
    "Database initialized.";

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready to insert into the IDB
  const newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction completed.";
  };

  transaction.onerror = (event) => {
    note.appendChild(document.createElement("li")).textContent =
      "Transaction not opened due to error. Duplicate items not allowed.";
  };

  // create an object store on the transaction
  const objectStore = transaction.objectStore("toDoList");

  // Make a request to add our newItem object to the object store
  const objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = (event) => {
    // report the success of our request
    note.appendChild(document.createElement("li")).textContent =
      "Request successful.";
  };
}
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
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
