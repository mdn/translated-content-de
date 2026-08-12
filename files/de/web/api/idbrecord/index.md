---
title: IDBRecord
slug: Web/API/IDBRecord
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBRecord`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen Schnappschuss eines einzelnen Datensatzes in einem [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex).

Eine Anfrage nach Datensätzen mit [`IDBObjectStore.getAllRecords()`](/de/docs/Web/API/IDBObjectStore/getAllRecords) oder [`IDBIndex.getAllRecords()`](/de/docs/Web/API/IDBIndex/getAllRecords) gibt eine Instanz von [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück.
Im Erfolgsfall wird die zurückgegebene [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Objekts mit einem Array von `IDBRecord`-Instanzen gefüllt.

## Instanz-Eigenschaften

- `key` {{ReadOnlyInline}}
  - : Ein Wert, der den sekundären Schlüssel des Datensatzes darstellt.
    Für einen Datensatz im Object Store ist dies derselbe wie `primaryKey`.
    Für einen Indexdatensatz wird es der Schlüssel des Datensatzes innerhalb des Index sein.
- `primaryKey` {{ReadOnlyInline}}
  - : Ein Wert, der den primären Schlüssel des Datensatzes darstellt.
    Dieser Schlüssel wird verwendet, um den Datensatz im [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) darzustellen.
- `value` {{ReadOnlyInline}}
  - : Ein Wert, der den Wert des Datensatzes darstellt.

## Instanz-Methoden

_Keine._

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel fragt einen [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) nach bis zu 100 Datensätzen ab, deren Schlüssel nach `"myKey"` kommen, wobei die Ergebnisse in umgekehrter Reihenfolge sortiert sind.

Der Code erstellt zuerst eine Transaktion auf einer [`IDBDatabase`](/de/docs/Web/API/IDBDatabase) namens `db` (ohne den Code zum Öffnen der Datenbank) und verwendet sie dann, um einen `IDBObjectStore` mit einer Kontaktliste zu erhalten.
Anschließend wird `getAllRecords()` auf dem Object Store aufgerufen, was eine Instanz von [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurückgibt.
Für diese Anfrage werden Event-Listener für die Ereignisse `success` und `error` hinzugefügt.
Bei Erfolg wird das Ergebnis `event.target.result` protokolliert (dies ist auch als `request.result` verfügbar).
Dieses Ergebnis enthält ein Array von `IDBRecord`-Instanzen.
Beachten Sie, dass aufgrund dieser Abfrage auf einem `IDBObjectStore` der `key` und `primaryKey` in jedem Datensatz denselben Wert haben.

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
