---
title: "IDBIndex: getAllRecords() Methode"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
l10n:
  sourceCommit: 8623f4af1cb6a9f904d6c18f5f772675bdce3411
---

{{ APIRef("IndexedDB") }}

Die **`getAllRecords()`** Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex)
Interfaces ruft alle Datensätze (einschließlich Indexschlüssel, Primärschlüssel und Werte) aus dem Index ab.

`getAllRecords()` kombiniert effektiv die Funktionalitäten von [`getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBIndex/getAll), indem es sowohl Primärschlüssel als auch Werte gleichzeitig auflistet. Diese kombinierte Operation ermöglicht es, bestimmte Datenabrufmuster deutlich schneller auszuführen als Alternativen wie die Iteration mit Cursorn.

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
  - : Die Anzahl der zurückzugebenden Datensätze. Übersteigt dieser Wert die Anzahl der Datensätze in der Abfrage, ruft der Browser nur die angeforderten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Datensätze durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden von Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der dem Anfang am nächsten gelegene Datensatz ausgegeben.
    - `prev`
      - : Die Datensätze werden vom Ende her in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende her in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der dem Anfang am nächsten gelegene Datensatz ausgegeben.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanzen, die alle Datensätze repräsentieren, die mit der gegebenen Abfrage übereinstimmen, bis zu der angegebenen Anzahl durch `count` (falls bereitgestellt).

Jede [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanz enthält folgende Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes im Index darstellt.
- `primaryKey`
  - : Ein Wert, der den Schlüssel des Datensatzes im verbundenen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) des Index darstellt.
- `value`
  - : Ein Wert, der den Wert des Datensatzes darstellt.

### Ausnahmen

Diese Methode kann ein [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder sein zugehöriger [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Transaktion inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`count`](#count)-Parameter nicht zwischen `0` und `2^32 - 1` liegt, einschließlich.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel fragt einen [`IDBIndex`](/de/docs/Web/API/IDBIndex) nach bis zu 100 Datensätzen ab, deren `lastName`-Werte nach `"Smith"` kommen, wobei die Ergebnisse in umgekehrter Reihenfolge sortiert sind.

Der Code erstellt zunächst eine Transaktion in einer [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (der Code zum Öffnen der Datenbank wird weggelassen) und nutzt sie dann, um einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) mit einer Kontaktliste abzurufen und daraus einen `IDBIndex` für die Eigenschaft `lastName`.
Anschließend wird `getAllRecords()` auf dem Index aufgerufen, wodurch eine [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Instanz zurückgegeben wird.
Für diese Anfrage werden Event-Listener für die Ereignisse `success` und `error` hinzugefügt.
Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (dies ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen.
Beachten Sie, dass da es sich um eine Abfrage auf einem `IDBIndex` handelt, `key` und `primaryKey` in jedem Datensatz unterschiedliche Werte haben können: Der `key` ist der Indexschlüssel (hier der `lastName`), während der `primaryKey` der Schlüssel des Datensatzes im Objekt-Store ist.

```js
// Create a transaction on the database and use it to get the contained store
const transaction = db.transaction(["contactsList"], "readonly");
const objectStore = transaction.objectStore("contactsList");
const myIndex = objectStore.index("lastName");

const query = IDBKeyRange.lowerBound("Smith", true);

const request = myIndex.getAllRecords({
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

- [`IDBIndex.getAll()`](/de/docs/Web/API/IDBIndex/getAll), [`IDBIndex.getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit getAllRecords() Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
