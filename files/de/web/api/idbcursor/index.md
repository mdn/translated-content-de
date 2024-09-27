---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue), das nur eine **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft ist.

Die **`IDBCursor`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder Objekt-Store er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in der Reihenfolge der Aufzeichnungsschlüssel entweder zunimmt oder abnimmt. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Sie können eine unbegrenzte Anzahl von Cursor gleichzeitig haben. Sie erhalten immer dasselbe `IDBCursor`-Objekt, das einen bestimmten Cursor repräsentiert. Operationen werden auf dem zugrundeliegenden Index oder Objekt-Store durchgeführt.

## Instanz-Eigenschaften

> **Hinweis:** [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) ist eine **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft.

- [`IDBCursor.source`](/de/docs/Web/API/IDBCursor/source) {{ReadOnlyInline}}
  - : Gibt das [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, über das der Cursor iteriert. Diese Funktion gibt niemals null zurück und wirft keine Ausnahme, selbst wenn der Cursor gerade iteriert wird, über sein Ende hinaus iteriert wurde oder seine Transaktion nicht aktiv ist.
- [`IDBCursor.direction`](/de/docs/Web/API/IDBCursor/direction) {{ReadOnlyInline}}
  - : Gibt die Richtung der Traversierung des Cursors zurück.
- [`IDBCursor.key`](/de/docs/Web/API/IDBCursor/key) {{ReadOnlyInline}}
  - : Gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Wenn sich der Cursor außerhalb seines Bereichs befindet, wird dies auf `undefined` gesetzt. Der Schlüssel des Cursors kann jeden Datentyp haben.
- [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey) {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wenn der Cursor derzeit iteriert wird oder außerhalb seines Bereichs iteriert wurde, wird dies auf `undefined` gesetzt. Der Primärschlüssel des Cursors kann jeden Datentyp haben.
- [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) {{ReadOnlyInline}}
  - : Gibt das [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, das verwendet wurde, um den Cursor zu erhalten.

## Instanz-Methoden

- [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance)
  - : Legt fest, wie oft ein Cursor seine Position nach vorne bewegen soll.
- [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)
  - : Bewegt den Cursor zur nächsten Position entlang seiner Richtung, zum Element, dessen Schlüssel dem optionalen `key`-Parameter entspricht.
- [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)
  - : Setzt den Cursor auf den angegebenen Indexschlüssel und Primärschlüssel, die als Argumente angegeben werden.
- [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Dies kann verwendet werden, um bestimmte Datensätze zu löschen.
- [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objekt-Store. Dies kann verwendet werden, um bestimmte Datensätze zu aktualisieren.

## Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenfolgenkonstanten direkt verwenden. ([Firefox Fehler 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikaten. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts (monoton steigend in der Reihenfolge der Schlüssel).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze, ohne Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikaten. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts (monoton fallend in der Reihenfolge der Schlüssel).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze, ohne Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle davon abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
