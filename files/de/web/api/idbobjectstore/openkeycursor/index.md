---
title: "IDBObjectStore: Methode openKeyCursor()"
short-title: openKeyCursor()
slug: Web/API/IDBObjectStore/openKeyCursor
l10n:
  sourceCommit: ebaebbbbfe525fb69ed8d4f5b0d8f82da922cf5e
---

{{ APIRef("IndexedDB") }}

Die **`openKeyCursor()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, dessen Ergebnis auf einen [`IDBCursor`](/de/docs/Web/API/IDBCursor) gesetzt wird, der verwendet werden kann, um durch übereinstimmende Ergebnisse zu iterieren. Wird verwendet, um mit einem Cursor durch die Schlüssel eines Objektspeichers zu iterieren.

Um festzustellen, ob die Hinzufügungsoperation erfolgreich abgeschlossen wurde, hören Sie auf das `success`-Ereignis des Ergebnisses.

## Syntax

```js-nolint
openKeyCursor()
openKeyCursor(query)
openKeyCursor(query, direction)
```

### Parameter

- `query` {{optional_inline}}
  - : Der Schlüsselbereich, der abgefragt werden soll. Wenn ein einzelner gültiger Schlüssel übergeben wird, wird standardmäßig ein Bereich verwendet, der nur diesen Schlüssel enthält. Wenn nichts übergeben wird, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objektspeicher auswählt.
- `direction` {{optional_inline}}
  - : Ein String, der dem Cursor mitteilt, in welche Richtung er sich bewegen soll. Standardmäßig ist `next`. Gültige Werte sind:
    - `next`
      - : Der Cursor wird am Beginn des Speichers geöffnet; dann gibt der Cursor alle Datensätze, einschließlich Duplikate, in aufsteigender Reihenfolge der Schlüssel zurück.
    - `nextunique`
      - : Der Cursor wird am Beginn des Speichers geöffnet; dann gibt der Cursor alle Datensätze zurück, die keine Duplikate sind, in aufsteigender Reihenfolge der Schlüssel.
    - `prev`
      - : Der Cursor wird am Ende des Speichers geöffnet; dann gibt der Cursor alle Datensätze, einschließlich Duplikate, in absteigender Reihenfolge der Schlüssel zurück.
    - `prevunique`
      - : Der Cursor wird am Ende des Speichers geöffnet; dann gibt der Cursor alle Datensätze zurück, die keine Duplikate sind, in absteigender Reihenfolge der Schlüssel.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage:

- ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt, das auf den ersten Datensatz zeigt, der der gegebenen Abfrage entspricht
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieser [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder der Schlüsselbereich ungültig ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektspeicher zu iterieren:

```js
const transaction = db.transaction("name", "readonly");
const objectStore = transaction.objectStore("name");
const request = objectStore.openKeyCursor();
request.onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    // cursor.key contains the key of the current record being iterated through
    // note that there is no cursor.value, unlike for openCursor
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

- [Verwenden von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
