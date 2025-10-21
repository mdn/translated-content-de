---
title: "IDBIndex: getAllRecords() Methode"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }}

Die **`getAllRecords()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle ruft alle Datensätze (einschließlich Indexschlüssel, Primärschlüssel und Werte) aus dem Index ab.

`getAllRecords()` kombiniert effektiv die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBIndex/getAll), indem es sowohl Primärschlüssel als auch Werte gleichzeitig auflistet. Dieser kombinierte Vorgang ermöglicht es, bestimmte Datenabrufmuster erheblich schneller als Alternativen wie Iteration mit Cursoren zu gestalten.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, dessen Eigenschaften folgendes enthalten können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` ist oder nicht angegeben wird, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert weniger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Datensätze durchsucht werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Bei jedem Schlüssel mit doppelten Datensätzen wird nur der dem Anfang am nächsten gelegene Datensatz geliefert.
    - `prev`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Bei jedem Schlüssel mit doppelten Datensätzen wird nur der dem Anfang am nächsten gelegene Datensatz geliefert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, an dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von Objekten, die alle Datensätze darstellen, die der angegebenen Abfrage entsprechen, bis zu der durch `count` (falls angegeben) festgelegten Anzahl.

Jedes Objekt enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes darstellt.
- `primaryKey`
  - : Ein Wert, der den Schlüssel des Datensatzes im zugehörigen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) des Index darstellt.
- `value`
  - : Ein Wert, der den Wert des Datensatzes darstellt.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder sein zugehöriges [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1` liegt, einschließlich.

## Beispiele

```js
const query = IDBKeyRange.lowerBound("mykey", true);
const objectStore = transaction.objectStore("contactsList");
const myIndex = objectStore.index("lastName");

const myRecords = (myIndex.getAllRecords({
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

- [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll), [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit getAllRecords-Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
