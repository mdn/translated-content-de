---
title: "IDBObjectStore: put() Methode"
short-title: put()
slug: Web/API/IDBObjectStore/put
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`put()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces aktualisiert einen gegebenen Eintrag in einer Datenbank oder fügt einen neuen Eintrag hinzu, wenn der gegebene Eintrag nicht bereits existiert.

Sie gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [strukturierten Klon](https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#structured-clone) des Wertes. Dieser geklonte Wert wird dann im Objekt-Store gespeichert. Dies dient dazu, neue Datensätze hinzuzufügen oder bestehende Datensätze in einem Objekt-Store zu aktualisieren, wenn der Modus der Transaktion `readwrite` ist. Wenn der Datensatz erfolgreich gespeichert wird, wird ein Erfolgsevent auf dem zurückgegebenen Anforderungsobjekt ausgelöst, wobei das `result` auf den Schlüssel des gespeicherten Datensatzes und `transaction` auf die Transaktion gesetzt wird, in der sich dieser Objekt-Store befindet.

Die put-Methode ist eine _Aktualisierungs- oder Einfügemethode_.
Siehe die [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add)-Methode für eine _Nur-Einfüge-Methode_.

Beachten Sie, dass wenn Sie einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) für den Datensatz haben, den Sie aktualisieren möchten, es vorzuziehen ist, diesen mit [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update) zu aktualisieren, anstatt `IDBObjectStore.put()` zu verwenden. Dadurch wird deutlich, dass ein bestehender Datensatz aktualisiert wird, anstatt einen neuen Datensatz einzufügen.

## Syntax

```js-nolint
put(item)
put(item, key)
```

### Parameter

- `item`
  - : Das Element, das Sie aktualisieren (oder einfügen) möchten.
- `key` {{optional_inline}}
  - : Der Primärschlüssel des Datensatzes, den Sie aktualisieren möchten (z.B. von [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey)).

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der `result`-Eigenschaft der Anforderung der Schlüssel für den neuen oder aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann einen der folgenden Typen von [`DOMException`](/de/docs/Web/API/DOMException) auslösen:

- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die mit dieser Operation verbundene Transaktion im Lese-<a href="/de/docs/Web/API/IDBTransaction#mode_constants">Modus</a> ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen zutrifft:
    - Der Objekt-Store verwendet [in-line keys](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#in-line_key) oder hat einen [key generator](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#key_generator), und ein `key`-Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet out-of-line keys und hat keinen key generator, und kein `key`-Parameter wurde bereitgestellt.
    - Der Objekt-Store verwendet in-line keys, hat aber keinen key generator, und der key path des Objekt-Stores ergibt keinen gültigen Schlüssel.
    - Der `key`-Parameter wurde bereitgestellt, enthält aber keinen gültigen Schlüssel.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klon-Algorithmus geklont werden konnten.

## Beispiele

Im folgenden Beispiel wird ein bestimmter Datensatztitel angefordert; wenn diese Anforderung erfolgreich ist, ruft die `onsuccess`-Funktion den zugehörigen Datensatz von dem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ab (verfügbar als `objectStoreTitleRequest.result`), aktualisiert eine Eigenschaft des Datensatzes und legt dann den aktualisierten Datensatz in einer weiteren Anforderung mit `put()` zurück in den Objekt-Store. Für ein vollständiges funktionierendes Beispiel, siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
- Verwendung von Zeigern: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
