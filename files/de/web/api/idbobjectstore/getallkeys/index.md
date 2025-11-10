---
title: "IDBObjectStore: getAllKeys() Methode"
short-title: getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die `getAllKeys()`-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, das Datensatzschlüssel für alle Objekte im Objektspeicher abruft, die dem angegebenen Parameter entsprechen, oder für alle Objekte im Speicher, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

Diese Methode führt zu demselben Ergebnis bei:

- einem Datensatz, der nicht in der Datenbank existiert
- einem Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, müssen Sie die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode mit demselben Schlüssel aufrufen. Diese Methode liefert einen Cursor, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
getAllKeys(options)
```

### Parameter

Die `getAllKeys()`-Methode kann separate Parameter oder ein einzelnes Optionsobjekt entgegennehmen, das die Parameter als Eigenschaften enthält.

Die Parameter können umfassen:

- `query` {{optional_inline}}
  - : Ein Wert, der einem [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) entspricht oder darauf aufgelöst wird. Wenn dieser Wert nicht spezifiziert ist, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objektspeicher auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der Werte an, die zurückgegeben werden sollen, wenn mehr als einer gefunden wird. Wenn dies niedriger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben ist, können dessen Eigenschaften umfassen:

- `query` {{optional_inline}}
  - : Siehe die frühere Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die frühere Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden vom Anfang in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden vom Anfang in aufsteigender Schlüsselreihenfolge durchlaufen. Dies liefert dieselben Schlüssel wie `next`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.
    - `prev`
      - : Die Objekte werden vom Ende in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende in absteigender Schlüsselreihenfolge durchlaufen. Dies liefert dieselben Schlüssel wie `prev`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der gegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1` liegt, inklusive.

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
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
