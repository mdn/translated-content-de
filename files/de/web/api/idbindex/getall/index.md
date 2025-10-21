---
title: "IDBIndex: getAll() Methode"
short-title: getAll()
slug: Web/API/IDBIndex/getAll
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle ruft alle Objekte ab, die sich im Index befinden.

Es gibt einen Leistungseinbruch beim Betrachten der `value`-Eigenschaft eines Cursors, weil das Objekt verzögert erstellt wird. Um ein Feature wie `getAll()` zu verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie z.B. nur daran interessiert sind, die einzelnen Schlüssel anzuschauen, ist es effizienter, einen [Cursor](/de/docs/Web/API/IDBCursor) zu verwenden. Wenn Sie jedoch versuchen, ein Array aller Objekte in einem Objektstore zu erhalten, sollten Sie `getAll()` verwenden.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
getAll(options)

```

### Parameter

Die `getAll()`-Methode kann einzelne Parameter oder ein einzelnes Optionsobjekt, das die Parameter als Eigenschaften enthält, übernehmen.

Die Parameter können beinhalten:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` ist oder nicht angegeben wird, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der Datensätze, die zurückgegeben werden sollen. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur die abgefragten Datensätze ab. Wenn er niedriger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben ist, können dessen Eigenschaften umfassen:

- `query` {{optional_inline}}
  - : Siehe die frühere Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die frühere Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Objekten wird nur das Objekt, das dem Anfang am nächsten liegt, geliefert.
    - `prev`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Objekten wird nur das Objekt, das dem Anfang am nächsten liegt, geliefert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Werte aller Datensätze, die der angegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

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
const getAllRequest = myIndex.getAll();
getAllRequest.onsuccess = () => {
  console.log(getAllRequest.result);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
