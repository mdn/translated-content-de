---
title: IDBCursorWithValue
slug: Web/API/IDBCursorWithValue
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBCursorWithValue`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank. Sie ist die gleiche wie die {{domxref("IDBCursor")}}, außer dass sie die `value`-Eigenschaft beinhaltet.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder Objekt-Store er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die sich entsprechend der Reihenfolge der Schlüssel der Datensätze erhöht oder verringert. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Es können unbegrenzt viele Cursor gleichzeitig vorhanden sein. Sie erhalten immer dasselbe `IDBCursorWithValue`-Objekt, das einen gegebenen Cursor repräsentiert. Operationen werden auf dem zugrunde liegenden Index oder Objekt-Store ausgeführt.

{{InheritanceDiagram}}

## Instanzmethoden

Erbt Methoden von seiner übergeordneten Schnittstelle, {{domxref("IDBCursor")}}.

## Instanzeigenschaften

Erbt Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("IDBCursor")}}.

- {{domxref("IDBCursorWithValue.value")}} {{ReadOnlyInline}}
  - : Gibt den Wert des aktuellen Cursors zurück.

## Beispiel

In diesem Beispiel erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alles erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abfragen können. Für ein vollständig funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

```js
function displayData() {
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
