---
title: "IDBIndex: getAllRecords() Methode"
short-title: getAllRecords()
slug: Web/API/IDBIndex/getAllRecords
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{ APIRef("IndexedDB") }}

Die **`getAllRecords()`** Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex) Interfaces ruft alle Datensätze (einschließlich Indexschlüssel, Primärschlüssel und Werte) aus dem Index ab.

`getAllRecords()` kombiniert effektiv die Funktionalität von [`getAllKeys()`](/de/docs/Web/API/IDBIndex/getAllKeys) und [`getAll()`](/de/docs/Web/API/IDBIndex/getAll) durch das gleichzeitige Aufzählen von Primärschlüsseln und Werten. Diese kombinierte Operation ermöglicht es, bestimmte Datenabrufmuster signifikant schneller als Alternativen wie Iteration mit Cursorn durchzuführen.

## Syntax

```js-nolint
getAllRecords()
getAllRecords(options)
```

### Parameter

Ein Optionsobjekt, dessen Eigenschaften Folgendes beinhalten können:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Falls dieser Wert `null` oder nicht angegeben ist, verwendet der Browser einen nicht gebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, ruft der Browser nur die abgefragten Datensätze ab. Wenn der Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}} Ausnahme ausgelöst.
- `direction` {{optional_inline}}
  - : Ein enumerierter Wert, der die Richtung angibt, in der die Datensätze durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Datensätze werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der Datensatz, der dem Anfang am nächsten liegt, geliefert.
    - `prev`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Datensätze werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit doppelten Datensätzen wird nur der Datensatz, der dem Anfang am nächsten liegt, geliefert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft der Anfrage ein {{jsxref("Array", "Array")}} von [`IDBRecord`](/de/docs/Web/API/IDBRecord) Instanzen, die alle Datensätze darstellen, die der gegebenen Abfrage entsprechen, bis zu der durch `count` angegebenen Anzahl (falls angegeben).

Jede [`IDBRecord`](/de/docs/Web/API/IDBRecord) Instanz enthält die folgenden Eigenschaften:

- `key`
  - : Ein Wert, der den Schlüssel des Datensatzes im Index darstellt.
- `primaryKey`
  - : Ein Wert, der den Schlüssel des Datensatzes im mit dem Index assoziierten [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) darstellt.
- `value`
  - : Ein Wert, der den Wert des Datensatzes darstellt.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen hervorrufen:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) oder sein assoziierter [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}} [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`count`](#count) Parameter nicht zwischen `0` und `2^32 - 1` liegt, einschließlich.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel fragt einen [`IDBIndex`](/de/docs/Web/API/IDBIndex) für bis zu 100 Datensätze ab, deren `lastName` Werte nach `"Smith"` kommen, wobei die Ergebnisse in umgekehrter Reihenfolge sortiert werden.

Der Code erstellt zuerst eine Transaktion auf einer [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (wobei der Code zum Öffnen der Datenbank weggelassen wird), und verwendet sie dann, um einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) zu erhalten, der eine Kontaktliste enthält, und davon einen `IDBIndex` auf der `lastName` Eigenschaft.
Danach wird `getAllRecords()` auf dem Index aufgerufen, was eine [`IDBRequest`](/de/docs/Web/API/IDBRequest) Instanz zurückgibt.
Es werden Ereignislistener zu dieser Anfrage für die `success` und `error` Ereignisse hinzugefügt.
Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (dies ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord` Instanzen.
Da es sich um eine Abfrage auf einem `IDBIndex` handelt, können `key` und `primaryKey` in jedem Datensatz unterschiedliche Werte haben: der `key` ist der Indexschlüssel (hier, der `lastName`), während der `primaryKey` der Schlüssel des Datensatzes im Objektstore ist.

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen nutzen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Ihre Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursorn verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- [Schnellere IndexedDB-Lesevorgänge mit dem getAllRecords() Beispiel](https://microsoftedge.github.io/Demos/idb-getallrecords/) von Microsoft, 2025
