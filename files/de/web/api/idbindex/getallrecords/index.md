---
title: "IDBIndex: getAllRecords()-Methode"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die Methode **`getAllRecords()`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) ruft alle Datensätze aus dem Index ab, einschließlich Indexschlüsseln, Primärschlüsseln und Werten.

`getAllRecords()` kombiniert praktisch die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBIndex/getAll), indem Primärschlüssel und Werte gleichzeitig aufgelistet werden. Dadurch können bestimmte Datenabrufe deutlich schneller sein als Alternativen wie die Iteration mit Cursorn.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze bestimmt. Ist dieser Wert `null` oder nicht angegeben, verwendet der Browser einen unbegrenzten Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Übersteigt dieser Wert die Anzahl der Datensätze, die der Abfrage entsprechen, ruft der Browser nur diese Datensätze ab. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Datensätze durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit mehreren Datensätzen wird nur der Datensatz zurückgegeben, der dem Anfang am nächsten liegt.
    - `prev`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit mehreren Datensätzen wird nur der Datensatz zurückgegeben, der dem Anfang am nächsten liegt.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Bei erfolgreichem Abschluss des Vorgangs enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage ein {{jsxref("Array", "Array")}} aus [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanzen. Diese repräsentieren alle Datensätze, die der angegebenen Abfrage entsprechen, bis zur durch `count` festgelegten Anzahl (sofern angegeben).

Jede [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanz enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes im Index repräsentiert.
- `primaryKey`
  - : Ein Wert, der den Schlüssel des Datensatzes im zugehörigen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) des Index repräsentiert.
- `value`
  - : Ein Wert, der den Wert des Datensatzes repräsentiert.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder sein zugehöriger [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter [`count`](#count) nicht im Bereich von `0` bis einschließlich `2^32 - 1` liegt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel fragt einen [`IDBIndex`](/de/docs/Web/API/IDBIndex) nach bis zu 100 Datensätzen ab, deren `lastName`-Werte nach `"Smith"` kommen. Die Ergebnisse werden in umgekehrter Reihenfolge sortiert.

Der Code erstellt zunächst eine Transaktion für eine [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (der Code zum Öffnen der Datenbank ist ausgelassen). Anschließend verwendet er die Transaktion, um einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) mit einer Kontaktliste und daraus einen `IDBIndex` für die Eigenschaft `lastName` abzurufen.
Danach ruft er `getAllRecords()` für den Index auf und erhält eine [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Instanz.
Dieser Anfrage werden Event-Listener für die Ereignisse `success` und `error` hinzugefügt.
Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (es ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen.
Beachten Sie, dass `key` und `primaryKey` in jedem Datensatz unterschiedliche Werte haben können, da die Abfrage auf einem `IDBIndex` ausgeführt wird: `key` ist der Indexschlüssel (hier `lastName`), während `primaryKey` der Schlüssel des Datensatzes im Object Store ist.

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
- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Beispiel für schnellere IndexedDB-Lesezugriffe mit getAllRecords()](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
