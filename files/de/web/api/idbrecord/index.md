---
title: IDBRecord
slug: Web/API/IDBRecord
l10n:
  sourceCommit: 8623f4af1cb6a9f904d6c18f5f772675bdce3411
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBRecord`**-Interface der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) repräsentiert eine Momentaufnahme eines einzelnen Datensatzes in einem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex).

Eine Anfrage nach Datensätzen mittels [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) oder [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) gibt eine Instanz von [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück.
Bei Erfolg wird die `result`-Eigenschaft des zurückgegebenen Objekts mit einem Array von `IDBRecord`-Instanzen gefüllt.

## Instanzeigenschaften

- `key` {{ReadOnlyInline}}
  - : Ein Wert, der den sekundären Schlüssel des Datensatzes darstellt.
    Für einen Datensatz in einem Objektspeicher wird dies derselbe Wert wie `primaryKey` sein.
    Für einen Indexdatensatz wird dies der Schlüssel des Datensatzes innerhalb des Index sein.
- `primaryKey` {{ReadOnlyInline}}
  - : Ein Wert, der den primären Schlüssel des Datensatzes darstellt.
    Dieser Schlüssel wird verwendet, um den Datensatz im [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) darzustellen.
- `value` {{ReadOnlyInline}}
  - : Ein Wert, der den Wert des Datensatzes darstellt.

## Instanzmethoden

_Keine._

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel fragt einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) nach bis zu 100 Datensätzen ab, deren Schlüssel nach `"myKey"` kommen, wobei die Ergebnisse in umgekehrter Reihenfolge sortiert sind.

Der Code erstellt zuerst eine Transaktion auf einer [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (ohne den Code zum Öffnen der Datenbank zu zeigen) und verwendet diese, um ein `IDBObjectStore` mit einer Kontaktliste zu erhalten.
Dann ruft er `getAllRecords()` auf dem Objektspeicher auf, was eine Instanz von [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurückgibt.
Ereignis-Listener werden zu dieser Anfrage für die `success`- und `error`-Ereignisse hinzugefügt.
Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (dies ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen.
Beachten Sie, dass, da dies eine Abfrage auf einem `IDBObjectStore` ist, der `key` und `primaryKey` in jedem Datensatz denselben Wert haben.

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

- [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords)
- [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
