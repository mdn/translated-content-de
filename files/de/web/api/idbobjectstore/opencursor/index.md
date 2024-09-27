---
title: "IDBObjectStore: openCursor()-Methode"
short-title: openCursor()
slug: Web/API/IDBObjectStore/openCursor
l10n:
  sourceCommit: ebaebbbbfe525fb69ed8d4f5b0d8f82da922cf5e
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openCursor()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und in einem separaten Thread ein neues [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt. Sie wird verwendet, um mithilfe eines Cursors durch einen Objektstore zu iterieren.

Um festzustellen, ob der Hinzufüge-Vorgang erfolgreich abgeschlossen wurde, hören Sie auf das `success`-Ereignis des Ergebnisses.

## Syntax

```js-nolint
openCursor()
openCursor(query)
openCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der abgefragt werden soll. Wird ein einzelner gültiger Schlüssel übergeben, entspricht dies standardmäßig einem Bereich, der nur diesen Schlüssel enthält. Wenn nichts übergeben wird, entspricht dies standardmäßig einem Schlüsselsortiment, das alle Einträge in diesem Objektstore auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er sich bewegen soll. Der Standardwert ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Einträge, auch Duplikate, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `nextunique`
      - : Der Cursor wird am Anfang des Stores geöffnet; dann gibt der Cursor alle Einträge zurück, die keine Duplikate sind, in aufsteigender Reihenfolge der Schlüssel.
    - `prev`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Einträge, auch Duplikate, in absteigender Reihenfolge der Schlüssel zurück.
    - `prevunique`
      - : Der Cursor wird am Ende des Stores geöffnet; dann gibt der Cursor alle Einträge zurück, die keine Duplikate sind, in absteigender Reihenfolge der Schlüssel.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Antrags:

- ein [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt, das auf den ersten Datensatz zeigt, der der angegebenen Abfrage entspricht
- `null`, wenn keine passenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselsortiment ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektstore ab und verwenden dann einen Cursor, um durch alle Einträge im Objektstore zu iterieren:

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.value contains the current record being iterated through
    // this is where you'd do something with the result
    cursor.continue();
  } else {
    // no more results
  }
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
- Einstellen eines Schlüsselsortiments: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
