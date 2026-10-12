---
title: "IDBObjectStore: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die Methode `getAllKeys()` der Schnittstelle [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, mit dem die Datensatzschlüssel aller Objekte im Object Store abgerufen werden, die dem angegebenen Parameter entsprechen. Werden keine Parameter angegeben, werden die Schlüssel aller Objekte im Store abgerufen.

Wenn ein Wert erfolgreich gefunden wird, wird ein strukturierter Klon davon erstellt und als Ergebnis des Anfrageobjekts festgelegt.

Diese Methode liefert in den folgenden Fällen dasselbe Ergebnis:

- Ein Datensatz ist in der Datenbank nicht vorhanden.
- Ein Datensatz hat den Wert `undefined`.

Um diese Fälle zu unterscheiden, müssen Sie die Methode [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) mit demselben Schlüssel aufrufen. Diese Methode liefert einen Cursor, wenn der Datensatz vorhanden ist, andernfalls keinen.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
getAllKeys(options)
```

### Parameter

Die Methode `getAllKeys()` kann separate Parameter oder ein einzelnes Optionsobjekt entgegennehmen, das die Parameter als Eigenschaften enthält.

Die Parameter können Folgendes umfassen:

- `query` {{optional_inline}}
  - : Ein Wert, der ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) ist oder zu einem solchen aufgelöst wird. Wird dieser Wert nicht angegeben, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Object Store auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als einer gefunden wird. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben wird, kann er folgende Eigenschaften enthalten:

- `query` {{optional_inline}}
  - : Siehe die obige Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die obige Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Schlüssel wie bei `next` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`s nicht zulässig sind.
    - `prev`
      - : Die Objekte werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Schlüssel wie bei `prev` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`s nicht zulässig sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage ein {{jsxref("Array")}} mit den Schlüsseln aller Datensätze, die der angegebenen Abfrage entsprechen, höchstens jedoch so viele, wie durch `count` angegeben wurden.

### Ausnahmen

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
