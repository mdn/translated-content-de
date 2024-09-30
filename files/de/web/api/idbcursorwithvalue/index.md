---
title: IDBCursorWithValue
slug: Web/API/IDBCursorWithValue
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBCursorWithValue`** Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank. Es ist identisch mit dem [`IDBCursor`](/de/docs/Web/API/IDBCursor), außer dass es die Eigenschaft `value` beinhaltet.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder Objekt-Store er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in aufsteigender oder absteigender Reihenfolge der Datensatzschlüssel liegt. Der Cursor ermöglicht einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Sie können eine unbegrenzte Anzahl von Cursorn gleichzeitig haben. Sie erhalten immer dasselbe `IDBCursorWithValue` Objekt, das einen gegebenen Cursor repräsentiert. Operationen werden auf dem zugrunde liegenden Index oder Objekt-Store durchgeführt.

{{InheritanceDiagram}}

## Instanzmethoden

Erbt Methoden von seinem Mutter-Interface, [`IDBCursor`](/de/docs/Web/API/IDBCursor).

## Instanzeigenschaften

Erbt Eigenschaften von seinem Mutter-Interface, [`IDBCursor`](/de/docs/Web/API/IDBCursor).

- [`IDBCursorWithValue.value`](/de/docs/Web/API/IDBCursorWithValue/value) {{ReadOnlyInline}}
  - : Gibt den Wert des aktuellen Cursors zurück.

## Beispiel

In diesem Beispiel erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um durch alle Datensätze im Objekt-Store zu iterieren. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständig funktionierendes Beispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
