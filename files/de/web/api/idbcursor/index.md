---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue), das lediglich ein **`IDBCursor`**-Interface mit einer zusätzlichen **`value`**-Eigenschaft ist.

Das **`IDBCursor`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder Objekt-Store er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in eine Richtung, die entweder zunehmend oder abnehmend in der Reihenfolge der Datensatzschlüssel ist. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Es kann eine unbegrenzte Anzahl von Cursorn gleichzeitig geben. Sie erhalten immer dasselbe `IDBCursor`-Objekt, das einen bestimmten Cursor repräsentiert. Operationen werden auf dem zugrunde liegenden Index oder Objekt-Store ausgeführt.

## Instanzeigenschaften

> [!NOTE]
> [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) ist ein **`IDBCursor`**-Interface mit einer zusätzlichen **`value`**-Eigenschaft.

- [`IDBCursor.source`](/de/docs/Web/API/IDBCursor/source) {{ReadOnlyInline}}
  - : Gibt den [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, über den der Cursor iteriert. Diese Funktion gibt niemals null zurück oder löst eine Ausnahme aus, selbst wenn der Cursor gerade iteriert wird, über sein Ende hinaus ist oder seine Transaktion nicht aktiv ist.
- [`IDBCursor.direction`](/de/docs/Web/API/IDBCursor/direction) {{ReadOnlyInline}}
  - : Gibt die Richtung der Traversierung des Cursors zurück.
- [`IDBCursor.key`](/de/docs/Web/API/IDBCursor/key) {{ReadOnlyInline}}
  - : Gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Wenn der Cursor außerhalb seines Bereichs ist, wird dies auf `undefined` gesetzt. Der Schlüssel des Cursors kann ein beliebiger Datentyp sein.
- [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey) {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wenn der Cursor gerade iteriert wird oder außerhalb seines Bereichs iteriert hat, wird dies auf `undefined` gesetzt. Der Primärschlüssel des Cursors kann ein beliebiger Datentyp sein.
- [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) {{ReadOnlyInline}}
  - : Gibt das [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, das verwendet wurde, um den Cursor zu erhalten.

## Instanzmethoden

- [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance)
  - : Legt fest, wie oft ein Cursor seine Position vorwärts bewegen soll.
- [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)
  - : Setzt den Cursor auf die nächste Position entlang seiner Richtung, auf das Element, dessen Schlüssel mit dem optionalen `key`-Parameter übereinstimmt.
- [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)
  - : Setzt den Cursor auf den gegebenen Indexschlüssel und Primärschlüssel, die als Argumente übergeben werden.
- [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Dies kann verwendet werden, um spezifische Datensätze zu löschen.
- [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objekt-Store. Dies kann verwendet werden, um spezifische Datensätze zu aktualisieren.

## Konstanten

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die String-Konstanten direkt verwenden. ([Firefox-Bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikaten. Er beginnt am unteren Ende des Schlüsselbereichs und bewegt sich aufwärts (monoton zunehmend in der Reihenfolge der Schlüssel).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze, exklusive Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt am unteren Ende des Schlüsselbereichs und bewegt sich aufwärts.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikate. Er beginnt am oberen Ende des Schlüsselbereichs und bewegt sich abwärts (monoton abnehmend in der Reihenfolge der Schlüssel).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze, exklusive Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt am oberen Ende des Schlüsselbereichs und bewegt sich abwärts.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um durch alle Datensätze im Objekt-Store zu iterieren. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alles erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
