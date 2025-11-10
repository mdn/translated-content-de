---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue), welches einfach ein **`IDBCursor`**-Interface mit einer zusätzlichen **`value`**-Eigenschaft ist.

Das **`IDBCursor`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder Objektstore er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die im Sortierverfahren der Datensätze zunimmt oder abnimmt. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Sie können eine unbegrenzte Anzahl an Cursors gleichzeitig haben. Sie erhalten immer dasselbe `IDBCursor`-Objekt, das einen bestimmten Cursor darstellt. Operationen werden auf dem zugrunde liegenden Index oder Objektstore durchgeführt.

## Instanz-Eigenschaften

> [!NOTE] > [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) ist ein **`IDBCursor`**-Interface mit einer zusätzlichen **`value`**-Eigenschaft.

- [`IDBCursor.source`](/de/docs/Web/API/IDBCursor/source) {{ReadOnlyInline}}
  - : Gibt den [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, über den der Cursor iteriert. Diese Funktion gibt niemals null zurück und wirft keine Ausnahme, selbst wenn der Cursor gerade iteriert wird, das Ende überschritten hat oder seine Transaktion nicht aktiv ist.
- [`IDBCursor.direction`](/de/docs/Web/API/IDBCursor/direction) {{ReadOnlyInline}}
  - : Gibt die Richtung der Traversierung des Cursors zurück.
- [`IDBCursor.key`](/de/docs/Web/API/IDBCursor/key) {{ReadOnlyInline}}
  - : Gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Wenn der Cursor außerhalb seines Bereichs ist, wird dies auf `undefined` gesetzt. Der Schlüssel des Cursors kann jeden Datentyp annehmen.
- [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey) {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wenn der Cursor derzeit iteriert wird oder außerhalb seines Bereichs iteriert ist, wird dies auf `undefined` gesetzt. Der Primärschlüssel des Cursors kann jeden Datentyp annehmen.
- [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) {{ReadOnlyInline}}
  - : Gibt das [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, das verwendet wurde, um den Cursor zu erhalten.

## Instanz-Methoden

- [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance)
  - : Legt die Anzahl der Male fest, die ein Cursor seine Position vorwärts bewegen soll.
- [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)
  - : Bewegt den Cursor zur nächsten Position in seiner Richtung, zu dem Element, dessen Schlüssel dem optionalen `key`-Parameter entspricht.
- [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)
  - : Setzt den Cursor auf den angegebenen Indexschlüssel und den als Argumente übergebenen Primärschlüssel.
- [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Dies kann verwendet werden, um bestimmte Datensätze zu löschen.
- [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objektstore. Dies kann verwendet werden, um bestimmte Datensätze zu aktualisieren.

## Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar — sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die Zeichenfolgenkonstanten direkt verwenden. ([Firefox-Bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze an, einschließlich Duplikate. Er beginnt beim unteren Ende des Schlüsselbereichs und bewegt sich nach oben (monoton steigend in der Reihenfolge der Schlüssel).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze an, ohne Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt beim unteren Ende des Schlüsselbereichs und bewegt sich nach oben.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze an, einschließlich Duplikate. Er beginnt beim oberen Ende des Schlüsselbereichs und bewegt sich nach unten (monoton fallend in der Reihenfolge der Schlüssel).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze an, ohne Duplikate. Wenn mehrere Datensätze mit demselben Schlüssel existieren, wird nur der erste iterierte abgerufen. Er beginnt beim oberen Ende des Schlüsselbereichs und bewegt sich nach unten.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektstore ab und verwenden dann einen Cursor, um alle Datensätze im Objektstore zu durchlaufen. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Ein vollständiges Arbeitsbeispiel finden Sie in unserem [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
