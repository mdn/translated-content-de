---
title: "IDBIndex: getAllKeys() Methode"
short-title: getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die **`getAllKeys()`** Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Interfaces ruft asynchron die Primärschlüssel aller Objekte innerhalb des Index ab und setzt sie als `result` des Anfrageobjekts.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
getAllKeys(options)
```

### Parameter

Die `getAllKeys()` Methode kann separate Parameter oder ein einzelnes Optionsobjekt, das die Parameter als Eigenschaften enthält, übernehmen.

Die Parameter können umfassen:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Schlüssel identifiziert. Wenn dieser Wert `null` ist oder nicht angegeben wurde, verwendet der Browser einen unbeschränkten Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur das erste Element ab. Wenn er kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben ist, können seine Eigenschaften umfassen:

- `query` {{optional_inline}}
  - : Siehe die frühere Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die frühere Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselfolge durchlaufen. Schlüssel, die über mehrere Objekte hinweg dupliziert sind, werden nur einmal ausgegeben.
    - `prev`
      - : Die Objekte werden von Ende an in absteigender Schlüsselfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden von Ende an in absteigender Schlüsselfolge durchlaufen. Schlüssel, die über mehrere Objekte hinweg dupliziert sind, werden nur einmal ausgegeben.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die mit der angegebenen Abfrage übereinstimmen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1` (einschließlich) liegt.

## Beispiele

```js
const myIndex = objectStore.index("index");
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
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
- Einrichten eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
