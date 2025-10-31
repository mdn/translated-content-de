---
title: "IDBObjectStore: put() Methode"
short-title: put()
slug: Web/API/IDBObjectStore/put
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`put()`** Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) Schnittstelle aktualisiert einen gegebenen Datensatz in einer Datenbank oder fügt einen neuen Datensatz ein, wenn der gegebene Eintrag noch nicht existiert.

Sie gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Wertes und speichert den geklonten Wert im Objekt-Store. Dies dient dazu, neue Datensätze hinzuzufügen oder bestehende Datensätze in einem Objekt-Store zu aktualisieren, wenn der Modus der Transaktion `readwrite` ist. Wenn der Datensatz erfolgreich gespeichert wird, wird ein Erfolgsevent auf dem zurückgegebenen Anfrageobjekt ausgelöst, wobei das `result` auf den Schlüssel des gespeicherten Datensatzes gesetzt wird und die `transaction` auf die Transaktion, in der dieser Objekt-Store geöffnet ist.

Die put-Methode ist eine _Update- oder Einfügen-Methode_. Siehe die [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add) Methode für eine _Nur-Einfügen-Methode_.

Beachten Sie, dass, wenn Sie einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) auf den Datensatz haben, den Sie aktualisieren möchten, es vorzuziehen ist, ihn mit [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update) zu aktualisieren, anstatt `IDBObjectStore.put()` zu verwenden. Auf diese Weise wird deutlich gemacht, dass ein bestehender Datensatz aktualisiert wird, anstatt einen neuen Datensatz einzufügen.

## Syntax

```js-nolint
put(item)
put(item, key)
```

### Parameter

- `item`
  - : Der Eintrag, den Sie aktualisieren (oder einfügen) möchten.
- `key` {{optional_inline}}
  - : Der Primärschlüssel des Datensatzes, den Sie aktualisieren möchten (z.B. von [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey)).

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, auf dem nachfolgende Ereignisse bezogen auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der `result`-Eigenschaft der Anfrage der Schlüssel für den neuen oder aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) von einem der folgenden Typen auslösen:

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im schreibgeschützten <a href="/de/docs/Web/API/IDBTransaction#mode_constants">Modus</a> ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn einer der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet [In-line-Schlüssel](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#in-line_key) oder hat einen [Schlüsselgenerator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator), und ein `key` Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet Out-of-line-Schlüssel und hat keinen Schlüsselgenerator, und kein `key` Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet In-line-Schlüssel, aber keinen Schlüsselgenerator, und der Schlüsselpfad des Objekt-Stores ergibt keinen gültigen Schlüssel.
    - Der `key` Parameter wurde bereitgestellt, enthält aber keinen gültigen Schlüssel.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klon-Algorithmus geklont werden konnten.

## Beispiele

Das folgende Beispiel fordert einen bestimmten Datensatz an; wenn diese Anfrage erfolgreich ist, erhält die `onsuccess` Funktion den zugehörigen Datensatz vom [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt dann den aktualisierten Datensatz in einer anderen Anfrage mit `put()` zurück in den Objekt-Store. Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
