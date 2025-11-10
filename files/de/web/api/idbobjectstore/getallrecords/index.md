---
title: "IDBObjectStore: getAllRecords() Methode"
short-title: getAllRecords()
slug: Web/API/IDBObjectStore/getAllRecords
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

{{ APIRef("IndexedDB") }}{{SeeCompatTable}}

Die **`getAllRecords()`** Methode des [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
Interfaces ruft alle Datensätze (einschließlich Primärschlüssel und Werte) aus dem Objekt-Store ab.

`getAllRecords()` kombiniert effektiv die Funktionalitäten von [`getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), indem es gleichzeitig sowohl Primärschlüssel als auch Werte aufzählt. Diese kombinierte Operation ermöglicht es, bestimmte Datenabrufmuster erheblich schneller als Alternativen wie die Iteration mit Cursoren auszuführen.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, dessen Eigenschaften Folgendes beinhalten können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` ist oder nicht angegeben wird, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Datensätze durchlaufen werden, was wiederum die Reihenfolge definiert, in der sie zurückgegeben werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies wird die gleichen Datensätze wie `next` liefern, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.
    - `prev`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Dies wird die gleichen Datensätze wie `prev` liefern, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Falls die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft des Anforderungsobjekts ein {{jsxref("Array", "Array")}} von Objekten, die alle Datensätze darstellen, die zu der angegebenen Abfrage passen, bis zur Anzahl, die durch `count` (falls angegeben) spezifiziert wird.

Jedes Objekt enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes repräsentiert.
- `primaryKey`
  - : Der Schlüssel des Datensatzes; identisch mit der `key`-Eigenschaft.
- `value`
  - : Ein Wert, der den Wert des Datensatzes repräsentiert.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieser [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count) Parameter nicht zwischen `0` und `2^32 - 1`, inklusive, liegt.

## Beispiele

```js
const query = IDBKeyRange.lowerBound("myKey", true);
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
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit dem getAllRecords() Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
