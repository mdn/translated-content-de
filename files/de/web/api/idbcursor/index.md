---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue), das ist eine **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft.

Die **`IDBCursor`**-Schnittstelle der [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren mehrerer Datensätze in einer Datenbank.

Der Cursor hat eine Quelle, die anzeigt, über welchen Index oder welches Objektlager er iteriert. Er hat eine Position innerhalb der Reichweite und bewegt sich in eine Richtung, die in der Reihenfolge der Schlüssel der Datensätze zunimmt oder abnimmt. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Sie können eine unbegrenzte Anzahl von Cursors gleichzeitig haben. Sie erhalten immer dasselbe `IDBCursor`-Objekt, das einen bestimmten Cursor repräsentiert. Operationen werden auf dem zugrunde liegenden Index oder Objektlager durchgeführt.

## Instanz-Eigenschaften

> **Hinweis:** [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) ist eine **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft.

- [`IDBCursor.source`](/de/docs/Web/API/IDBCursor/source) {{ReadOnlyInline}}
  - : Gibt den [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, den der Cursor durchläuft. Diese Funktion gibt niemals null zurück und wirft keine Ausnahme, selbst wenn der Cursor derzeit durchlaufen wird, über sein Ende hinaus iteriert ist oder seine Transaktion nicht aktiv ist.
- [`IDBCursor.direction`](/de/docs/Web/API/IDBCursor/direction) {{ReadOnlyInline}}
  - : Gibt die Durchlaufrichtung des Cursors zurück.
- [`IDBCursor.key`](/de/docs/Web/API/IDBCursor/key) {{ReadOnlyInline}}
  - : Gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Befindet sich der Cursor außerhalb seines Bereichs, ist dieser auf `undefined` gesetzt. Der Schlüssel des Cursors kann jeden Datentyp haben.
- [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey) {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wenn der Cursor derzeit durchlaufen wird oder außerhalb seines Bereichs iteriert hat, ist dieser auf `undefined` gesetzt. Der Primärschlüssel des Cursors kann jeden Datentyp haben.
- [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) {{ReadOnlyInline}}
  - : Gibt das [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, das verwendet wurde, um den Cursor zu erhalten.

## Instanz-Methoden

- [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance)
  - : Legt die Anzahl der Male fest, die ein Cursor seine Position nach vorne bewegen soll.
- [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)
  - : Setzt den Cursor auf die nächste Position in seiner Richtung, auf das Element, dessen Schlüssel mit dem optionalen `key`-Parameter übereinstimmt.
- [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)
  - : Setzt den Cursor auf den angegebenen Indexschlüssel und Primärschlüssel, die als Argumente angegeben sind.
- [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Dies kann verwendet werden, um spezifische Datensätze zu löschen.
- [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objektlager. Dies kann verwendet werden, um spezifische Datensätze zu aktualisieren.

## Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenkettenkonstanten direkt verwenden. ([Firefox-Bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze einschließlich Duplikate an. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts (monoton steigend in der Reihenfolge der Schlüssel).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze ohne Duplikate an. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte zurückgegeben. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze einschließlich Duplikate an. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts (monoton fallend in der Reihenfolge der Schlüssel).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze ohne Duplikate an. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte zurückgegeben. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen ein Objektlager ab und verwenden dann einen Cursor, um alle Datensätze im Objektlager zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Beginn von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
