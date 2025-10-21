---
title: "IDBObjectStore: getAllRecords() Methode"
short-title: getAllRecords()
slug: Web/API/IDBObjectStore/getAllRecords
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die **`getAllRecords()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
Schnittstelle ruft alle Datensätze (einschließlich Primärschlüssel und Werte) aus dem Objektspeicher ab.

`getAllRecords()` kombiniert effektiv die Funktionalitäten von [`getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), indem sowohl Primärschlüssel als auch Werte gleichzeitig aufgezählt werden. Diese kombinierte Operation ermöglicht es, bestimmte Datenabrufmuster deutlich schneller auszuführen als Alternativen wie etwa die Iteration mit Cursor.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, dessen Eigenschaften folgende sein können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` oder nicht angegeben ist, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Datensätze durchlaufen werden, was wiederum die Reihenfolge bestimmt, in der sie zurückgegeben werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang in aufsteigender Schlüsselfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang in aufsteigender Schlüsselfolge durchlaufen. Dies liefert die gleichen Datensätze wie `next`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.
    - `prev`
      - : Die Datensätze werden vom Ende in absteigender Schlüsselfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende in absteigender Schlüsselfolge durchlaufen. Dies liefert die gleichen Datensätze wie `prev`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von Objekten, die alle Datensätze darstellen, die der angegebenen Abfrage entsprechen, bis zu der durch `count` (falls angegeben) spezifizierten Anzahl.

Jedes Objekt enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes darstellt.
- `primaryKey`
  - : Der Schlüssel des Datensatzes; identisch mit der `key`-Eigenschaft.
- `value`
  - : Ein Wert, der den Wert des Datensatzes darstellt.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1` liegt, einschließlich.

## Beispiele

```js
const query = IDBKeyRange.lowerBound("mykey", true);
const objectStore = transaction.objectStore("contactsList");

const myRecords = (objectStore.getAllRecords({
  query,
  count: "100",
  direction: "prev",
}).onsuccess = (event) => {
  console.log("Records successfully retrieved");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`IDBObjectStore.getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), [`IDBObjectStore.getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys)
- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwenden von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit einem getAllRecords()-Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
