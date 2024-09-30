---
title: "IDBObjectStore: Methode add()"
short-title: add()
slug: Web/API/IDBObjectStore/add
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`add()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Wertes und speichert den geklonten Wert im Objekt-Store. Diese Methode dient dazu, neue Datensätze zu einem Objekt-Store hinzuzufügen.

Um festzustellen, ob die Hinzufügung erfolgreich abgeschlossen wurde, sollten Sie sowohl auf das `complete`-Ereignis der Transaktion als auch auf das `success`-Ereignis der `IDBObjectStore.add`-Anfrage hören, da die Transaktion noch nach dem Auslösen des Erfolg-Ereignisses fehlschlagen könnte. Mit anderen Worten: Das Erfolg-Ereignis wird nur ausgelöst, wenn die Transaktion erfolgreich in die Warteschlange gestellt wurde.

Die add-Methode ist eine _Nur-Einfüge_-Methode. Wenn bereits ein Datensatz im Objekt-Store mit dem `key`-Parameter als Schlüssel existiert, wird ein `ConstraintError`-Ereignis auf dem zurückgegebenen Anfrageobjekt ausgelöst. Um vorhandene Datensätze zu aktualisieren, sollten Sie stattdessen die [`IDBObjectStore.put`](/de/docs/Web/API/IDBObjectStore/put)-Methode verwenden.

## Syntax

```js-nolint
add(value)
add(value, key)
```

### Parameter

- `value`
  - : Der zu speichernde Wert.
- `key` {{optional_inline}}
  - : Der Schlüssel, um den Datensatz zu identifizieren. Wenn nicht angegeben, wird er zu null.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Schlüssel für den neuen Datensatz.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der
folgenden Typen auslösen:

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion, die mit diesem Vorgang verbunden ist, sich im <a href="/de/docs/Web/API/IDBTransaction#mode_constants">Read-Only-Modus</a> befindet.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet Inline-Schlüssel oder hat einen Schlüsselgenerator, und ein Schlüsselparameter wurde übergeben.
    - Der Objekt-Store verwendet Out-of-line-Schlüssel und hat keinen Schlüsselgenerator, und es wurde kein Schlüsselparameter übergeben.
    - Der Objekt-Store verwendet Inline-Schlüssel, hat aber keinen Schlüsselgenerator, und der Schlüsselpfad des Objekt-Stores liefert keinen gültigen Schlüssel.
    - Der Schlüsselparameter wurde übergeben, enthält jedoch keinen gültigen Schlüssel.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.
- `ConstraintError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Einfügevorgang fehlschlug, weil die Primärschlüsselbedingung verletzt wurde (aufgrund eines bereits existierenden Datensatzes mit demselben Primärschlüsselwert).

## Beispiele

Im folgenden Code-Snippet öffnen wir eine Lese-/Schreib-Transaktion in unserer Datenbank und fügen einige Daten mithilfe von `add()` zu einem Objekt-Store hinzu. Beachten Sie auch die Funktionen, die an Transaktions-Ereignishandler angehängt sind, um über den Ausgang des Öffnens der Transaktion im Falle eines Erfolgs oder Fehlers zu berichten. Für ein vollständig funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und Änderungen vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
