---
title: "IDBObjectStore: put() Methode"
short-title: put()
slug: Web/API/IDBObjectStore/put
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`put()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle aktualisiert einen vorhandenen Datensatz in einer Datenbank oder fügt einen neuen Datensatz ein, wenn das angegebene Element noch nicht existiert.

Sie gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Wertes und speichert den geklonten Wert im Object Store. Dies dient dazu, neue Datensätze hinzuzufügen oder vorhandene Datensätze in einem Object Store zu aktualisieren, wenn der Modus der Transaktion `readwrite` ist. Wenn der Datensatz erfolgreich gespeichert wird, wird ein Erfolgsevent auf dem zurückgegebenen Anfrageobjekt ausgelöst, wobei das `result` auf den Schlüssel des gespeicherten Datensatzes gesetzt wird und die `transaction` auf die Transaktion, in der dieser Object Store geöffnet ist.

Die `put`-Methode ist eine _Update- oder Insert_-Methode.
Siehe die [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add)-Methode für eine _Insert-only_-Methode.

Bedenken Sie, dass, wenn Sie einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) für den Datensatz haben, den Sie aktualisieren möchten, es vorzuziehen ist, diesen mit [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update) zu aktualisieren, anstatt `IDBObjectStore.put()` zu verwenden. Dies macht deutlich, dass ein vorhandener Datensatz aktualisiert wird, anstatt einen neuen Datensatz einzufügen.

## Syntax

```js-nolint
put(item)
put(item, key)
```

### Parameter

- `item`
  - : Das Element, das Sie aktualisieren (oder einfügen) möchten.
- `key` {{optional_inline}}
  - : Der Primärschlüssel des Datensatzes, den Sie aktualisieren möchten (z. B. von [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey)).

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Schlüssel für den neuen oder aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Transaktion, die mit dieser Operation verbunden ist, im schreibgeschützten <a href="/de/docs/Web/API/IDBTransaction#mode_constants">Modus</a> ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Object Store verwendet [Inline-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#in-line_key) oder hat einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator) und ein `key`-Parameter wurde angegeben.
    - Der Object Store verwendet Out-of-Line-Schlüssel und hat keinen Schlüsselgenerator, und es wurde kein `key`-Parameter angegeben.
    - Der Object Store verwendet Inline-Schlüssel, aber keinen Schlüsselgenerator, und der [Schlüsselpfad](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_path) des Object Stores liefert keinen gültigen Schlüssel.
    - Das `key`-Parameter wurde angegeben, enthält aber keinen gültigen Schlüssel.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Daten, die gespeichert werden sollten, nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.

## Beispiele

Das folgende Beispiel fordert einen gegebenen Datensatztitel an; wenn diese Anfrage erfolgreich ist, holt die `onsuccess`-Funktion den zugehörigen Datensatz aus dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar gemacht durch `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt dann den aktualisierten Datensatz in einer weiteren Anfrage mit `put()` wieder in den Object Store zurück. Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Walk dog";

// Open up a transaction as usual
const objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Get the to-do list object that has this title as its title
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Grab the data object returned as the result
  const data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back into the database
  const updateTitleRequest = objectStore.put(data);

  // Log the transaction that originated this request
  console.log(
    `The transaction that originated this request is ${updateTitleRequest.transaction}`,
  );

  // When this new request succeeds, run the displayData() function again to update the display
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
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
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und Änderungen vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
