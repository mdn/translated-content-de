---
title: "IDBObjectStore: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die `getAllKeys()`-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, das Datensatzschlüssel für alle Objekte im Objektspeicher abruft, die dem angegebenen Parameter entsprechen, oder für alle Objekte im Speicher, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird ein strukturierter Klon davon erstellt und als Ergebnis des Anfrageobjekts festgelegt.

Diese Methode erzeugt dasselbe Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, müssen Sie die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode mit dem gleichen Schlüssel aufrufen. Diese Methode stellt einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Wert, der eine [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist oder zu einer solchen aufgelöst wird.
- `count` {{optional_inline}}
  - : Gibt an, wie viele Werte zurückgegeben werden sollen, wenn mehr als einer gefunden wird. Sollte er kleiner als `0` oder größer als `2^32 - 1` sein, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, an dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der angegebenen Anfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder der bereitgestellte Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
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
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Einsatz von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
