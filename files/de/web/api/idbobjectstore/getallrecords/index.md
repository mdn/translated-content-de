---
title: "IDBObjectStore: getAllRecords()-Methode"
short-title: getAllRecords()
slug: Web/API/IDBObjectStore/getAllRecords
l10n:
  sourceCommit: 8623f4af1cb6a9f904d6c18f5f772675bdce3411
---

{{ APIRef("IndexedDB") }}

Die **`getAllRecords()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle ruft alle Datensätze (einschließlich Primärschlüssel und Werte) aus dem Objekt-Store ab.

`getAllRecords()` kombiniert effektiv die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), indem es sowohl Primärschlüssel als auch Werte gleichzeitig auflistet. Diese kombinierte Operation ermöglicht bestimmte Datenabfragemuster, die erheblich schneller sind als Alternativen wie die Iteration mit Cursors.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionen-Objekt, dessen Eigenschaften Folgendes enthalten können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert `null` ist oder nicht angegeben wird, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage überschreitet, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der angibt, in welcher Richtung die Datensätze durchlaufen werden, was wiederum die Reihenfolge definiert, in der sie zurückgegeben werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ergibt die gleichen Datensätze wie `next`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.
    - `prev`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Dies ergibt die gleichen Datensätze wie `prev`, da doppelte Schlüssel in `IDBObjectStore`s nicht erlaubt sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanzen, die alle Datensätze darstellen, die der gegebenen Abfrage entsprechen, bis zu der durch `count` (falls angegeben) bestimmten Menge.

Jede [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanz enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes darstellt.
    Dies ist identisch mit der `primaryKey`-Eigenschaft.
- `primaryKey`
  - : Der Primärschlüssel des Datensatzes.
- `value`
  - : Ein Wert, der den Wert des Datensatzes darstellt.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1`, einschließlich, liegt.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel fragt einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) nach bis zu 100 Datensätzen ab, deren Schlüssel nach `"myKey"` kommen, wobei die Ergebnisse in umgekehrter Reihenfolge sortiert sind.

Der Code erstellt zunächst eine Transaktion in einer [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (ohne den Code zum Öffnen der Datenbank) und verwendet sie dann, um einen `IDBObjectStore` abzurufen, der eine Kontaktliste enthält.
Anschließend wird `getAllRecords()` im Objekt-Store aufgerufen, was eine [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Instanz zurückgibt. Es werden Ereignislistener für die Ereignisse `success` und `error` zu dieser Anfrage hinzugefügt. Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (dies ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen.
Es ist zu beachten, dass, da dies eine Abfrage an einen `IDBObjectStore` ist, der `key` und `primaryKey` in jedem Datensatz denselben Wert haben.

```js
// Create a transaction on the database and use it to get the contained store
const transaction = db.transaction(["contactsList"], "readonly");
const objectStore = transaction.objectStore("contactsList");

const query = IDBKeyRange.lowerBound("myKey", true);

const request = objectStore.getAllRecords({
  query,
  count: 100,
  direction: "prev",
});

request.addEventListener("success", (event) => {
  const myRecords = event.target.result; // Array of IDBRecord instances
  console.log(myRecords);
});

request.addEventListener("error", (event) => {
  console.error("Error retrieving records:", event.target.error);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`IDBObjectStore.getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), [`IDBObjectStore.getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit getAllRecords()-Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
