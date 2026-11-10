---
title: IDBCursorWithValue
slug: Web/API/IDBCursorWithValue
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die Schnittstelle **`IDBCursorWithValue`** der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) dar, mit dem mehrere Datensätze in einer Datenbank durchlaufen werden können. Sie entspricht [`IDBCursor`](/de/docs/Web/API/IDBCursor), enthält jedoch zusätzlich die Eigenschaft `value`.

Der Cursor hat eine Quelle, die angibt, welchen Index oder Object Store er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in aufsteigender oder absteigender Reihenfolge der Datensatzschlüssel. Mit dem Cursor kann eine Anwendung alle Datensätze im Bereich des Cursors asynchron verarbeiten.

Sie können beliebig viele Cursor gleichzeitig verwenden. Für einen bestimmten Cursor erhalten Sie immer dasselbe `IDBCursorWithValue`-Objekt. Operationen werden auf dem zugrunde liegenden Index oder Object Store ausgeführt.

{{InheritanceDiagram}}

## Instanzeigenschaften

Erbt Eigenschaften von der übergeordneten Schnittstelle [`IDBCursor`](/de/docs/Web/API/IDBCursor).

- [`IDBCursorWithValue.value`](/de/docs/Web/API/IDBCursorWithValue/value) {{ReadOnlyInline}}
  - : Gibt den Wert an der aktuellen Cursorposition zurück.

## Instanzmethoden

Erbt Methoden von der übergeordneten Schnittstelle [`IDBCursor`](/de/docs/Web/API/IDBCursor).

## Beispiel

In diesem Beispiel erstellen wir eine Transaktion, rufen einen Object Store ab und durchlaufen anschließend mit einem Cursor alle Datensätze im Object Store. Bei einem Cursor müssen wir die Daten nicht anhand eines Schlüssels auswählen; wir können einfach alle abrufen. Beachten Sie außerdem, dass Sie bei jedem Schleifendurchlauf mit `cursor.value.foo` auf Daten des Datensatzes an der aktuellen Cursorposition zugreifen können. Ein vollständiges, lauffähiges Beispiel finden Sie in unserem [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
