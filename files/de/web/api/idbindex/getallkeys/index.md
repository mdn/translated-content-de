---
title: "IDBIndex: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die Methode **`getAllKeys()`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) ruft asynchron die Primärschlüssel aller Objekte im Index ab und legt sie als `result` des Anfrageobjekts fest.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
getAllKeys(options)
```

### Parameter

Die Methode `getAllKeys()` kann entweder einzelne Parameter oder ein Optionsobjekt entgegennehmen, das die Parameter als Eigenschaften enthält.

Die Parameter können Folgendes umfassen:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Schlüssel bestimmt. Ist dieser Wert `null` oder nicht angegeben, verwendet der Browser einen unbegrenzten Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Übersteigt dieser Wert die Anzahl der Datensätze, die der Abfrage entsprechen, ruft der Browser nur das erste Element ab. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wird ein Objekt als Parameter angegeben, kann es folgende Eigenschaften enthalten:

- `query` {{optional_inline}}
  - : Siehe die obige Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die obige Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Schlüssel, die bei mehreren Objekten vorkommen, werden nur einmal zurückgegeben.
    - `prev`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Schlüssel, die bei mehreren Objekten vorkommen, werden nur einmal zurückgegeben.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage ein {{jsxref("Array")}} mit den Schlüsseln aller Datensätze, die der angegebenen Abfrage entsprechen, gegebenenfalls begrenzt durch `count`.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter [`count`](#count) nicht im Bereich von `0` bis einschließlich `2^32 - 1` liegt.

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
