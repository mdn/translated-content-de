---
title: "IDBObjectStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück. Dieses enthält alle Objekte im Object Store, die dem angegebenen Parameter entsprechen, oder alle Objekte im Object Store, wenn keine Parameter angegeben werden.

Wenn ein Wert gefunden wird, wird ein strukturierter Klon davon erstellt und als Ergebnis des Request-Objekts festgelegt.

Diese Methode liefert dasselbe Ergebnis für:

- einen Datensatz, der in der Datenbank nicht vorhanden ist
- einen Datensatz mit dem Wert `undefined`

Um diese Fälle zu unterscheiden, können Sie entweder:

1. die Methode [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) mit demselben Schlüssel aufrufen. Sie liefert einen Cursor, wenn der Datensatz vorhanden ist, andernfalls keinen Cursor.
2. die Methode [`count()`](/de/docs/Web/API/IDBObjectStore/count) mit demselben Schlüssel aufrufen. Sie gibt `1` zurück, wenn der Datensatz vorhanden ist, andernfalls `0`.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
getAll(options)
```

### Parameter

Die Methode `getAll()` kann separate Parameter oder ein einzelnes Optionsobjekt entgegennehmen, das die Parameter als Eigenschaften enthält.

Die Parameter können Folgendes umfassen:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder eine [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), die abgefragt werden soll. Wird dieser Wert nicht angegeben, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Object Store auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als einer gefunden wird. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Exception ausgelöst.

Wenn ein Objekt als Parameter angegeben wird, kann es folgende Eigenschaften enthalten:

- `query` {{optional_inline}}
  - : Siehe die obige Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die obige Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Objekte wie bei `next` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`s nicht zulässig sind.
    - `prev`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Objekte wie bei `prev` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`s nicht zulässig sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) des Request-Objekts ein {{jsxref("Array")}} mit den Werten aller Datensätze, die der angegebenen Abfrage entsprechen. Falls `count` angegeben wurde, ist die Anzahl der Werte auf diesen Wert begrenzt.

### Exceptions

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder `null` ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter [`count`](#count) nicht im Bereich von `0` bis einschließlich `2^32 - 1` liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
