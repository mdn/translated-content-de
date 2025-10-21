---
title: "IDBObjectStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, das alle Objekte im Objekt-Store enthält, die dem angegebenen Parameter entsprechen, oder alle Objekte im Store, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturierte Kopie davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

Diese Methode erzeugt dasselbe Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, rufen Sie entweder

1. die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode mit demselben Schlüssel auf. Diese Methode bietet einen Cursor, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.
2. die [`count()`](/de/docs/Web/API/IDBObjectStore/count)-Methode mit demselben Schlüssel auf, die `1` zurückgibt, wenn die Zeile existiert und `0`, wenn sie nicht existiert.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
getAll(options)
```

### Parameter

Die `getAll()`-Methode kann separate Parameter oder ein einzelnes Options-Objekt, das die Parameter als Eigenschaften enthält, annehmen.

Die Parameter können umfassen:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der abgefragt werden soll. Wenn dieser Wert nicht angegeben ist, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objekt-Store auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als eins gefunden wird. Wenn er kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben ist, können seine Eigenschaften umfassen:

- `query` {{optional_inline}}
  - : Siehe die frühere Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die frühere Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein aufgezählter Wert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies liefert die gleichen Objekte wie `next`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.
    - `prev`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Dies liefert die gleichen Objekte wie `prev`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Werte aller Datensätze, die der angegebenen Anfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1`, einschließlich liegt.

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
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
