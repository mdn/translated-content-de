---
title: "IDBObjectStore: getAllKeys() Methode"
short-title: getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die `getAllKeys()` Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück, das die Schlüssel von Datensätzen für alle Objekte im Objekt-Store abruft, die mit dem angegebenen Parameter übereinstimmen, oder alle Objekte im Store, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturelle Kopie davon erstellt und als Ergebnis des Anforderungsobjekts gesetzt.

Diese Methode erzeugt das gleiche Ergebnis für:

- einen Datensatz, der in der Datenbank nicht existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, müssen Sie die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) Methode mit dem gleichen Schlüssel aufrufen. Diese Methode liefert einen Cursor, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Wert, der ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist oder dazu aufgelöst wird.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als einer gefunden wird. Wenn es kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Anforderungsobjekts ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der angegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursor: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
