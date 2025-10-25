---
title: "IDBIndex: getAllRecords()-Methode"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
l10n:
  sourceCommit: 55bb65bb6a84808896ed0f6c83e57c60dbd8480e
---

{{ APIRef("IndexedDB") }}{{SeeCompatTable}}

Die **`getAllRecords()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle ruft alle Datensätze (einschließlich Indexschlüsseln, Primärschlüsseln und Werten) aus dem Index ab.

`getAllRecords()` kombiniert effektiv die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBIndex/getAll), indem es sowohl Primärschlüssel als auch Werte gleichzeitig auflistet. Diese kombinierte Operation ermöglicht es, bestimmte Datenabrufmuster erheblich schneller durchzuführen als Alternativen wie die Iteration mit Cursors.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, dessen Eigenschaften enthalten können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` oder nicht angegeben ist, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung spezifiziert, in der die Datensätze durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der Datensatz, der dem Anfang am nächsten ist, ausgegeben.
    - `prev`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der Datensatz, der dem Anfang am nächsten ist, ausgegeben.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der `result`-Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von Objekten, die alle Datensätze repräsentieren, die mit der gegebenen Abfrage übereinstimmen, bis zu der durch `count` festgelegten Anzahl (falls angegeben).

Jedes Objekt enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes repräsentiert.
- `primaryKey`
  - : Ein Wert, der den Schlüssel des Datensatzes im mit dem Index verbundenen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) repräsentiert.
- `value`
  - : Ein Wert, der den Wert des Datensatzes repräsentiert.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen hervorrufen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder dessen zugehöriger [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht wurde oder entfernt ist.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1`, inklusive, liegt.

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
- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Abfragen mit getAllRecords()-Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
