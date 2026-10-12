---
title: "IDBObjectStore: Methode getAllRecords()"
short-title: getAllRecords()
slug: Web/API/IDBObjectStore/getAllRecords
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die Methode **`getAllRecords()`** der Schnittstelle [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) ruft alle Datensätze (einschließlich Primärschlüsseln und Werten) aus dem Objektspeicher ab.

`getAllRecords()` kombiniert die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBObjectStore/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBObjectStore/getAll), indem Primärschlüssel und Werte gleichzeitig aufgelistet werden. Durch diese kombinierte Operation können bestimmte Datenzugriffe deutlich schneller sein als Alternativen wie die Iteration mit Cursorn.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, das folgende Eigenschaften enthalten kann:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder eine [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), mit dem bzw. der die abzurufenden Datensätze angegeben werden. Ist dieser Wert `null` oder nicht angegeben, verwendet der Browser einen unbegrenzten Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Übersteigt dieser Wert die Anzahl der Datensätze, die der Abfrage entsprechen, ruft der Browser nur die entsprechenden Datensätze ab. Ist der Wert kleiner als `0` oder größer als `2^32 - 1`, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Datensätze durchlaufen werden, und damit ihre Rückgabereihenfolge bestimmt. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang an in aufsteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Datensätze wie bei `next` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`-Instanzen nicht zulässig sind.
    - `prev`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende an in absteigender Schlüsselreihenfolge durchlaufen. Dabei werden dieselben Datensätze wie bei `prev` zurückgegeben, da doppelte Schlüssel in `IDBObjectStore`-Instanzen nicht zulässig sind.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, an dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Ist die Operation erfolgreich, enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage ein {{jsxref("Array", "Array")}} aus [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanzen. Diese stellen alle Datensätze dar, die der angegebenen Abfrage entsprechen, höchstens jedoch die durch `count` festgelegte Anzahl (falls angegeben).

Jede [`IDBRecord`](/de/docs/Web/API/IDBRecord)-Instanz enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes darstellt. Er ist mit der Eigenschaft `primaryKey` identisch.
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
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter [`count`](#count) nicht im Bereich von `0` bis einschließlich `2^32 - 1` liegt.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel fragt einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) nach bis zu 100 Datensätzen ab, deren Schlüssel nach `"myKey"` liegen. Die Ergebnisse werden in umgekehrter Reihenfolge sortiert.

Der Code erstellt zunächst eine Transaktion für eine [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (der Code zum Öffnen der Datenbank ist ausgelassen) und greift damit auf einen `IDBObjectStore` zu, der eine Kontaktliste enthält. Anschließend ruft er `getAllRecords()` für den Objektspeicher auf und erhält eine [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Instanz. Für diese Anfrage werden Event-Listener für die Ereignisse `success` und `error` hinzugefügt. Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (es ist auch als `request.result` verfügbar). Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen. Da die Abfrage für einen `IDBObjectStore` ausgeführt wird, haben `key` und `primaryKey` in jedem Datensatz denselben Wert.

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
- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Beispiel für schnelleres Lesen aus IndexedDB mit getAllRecords()](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
