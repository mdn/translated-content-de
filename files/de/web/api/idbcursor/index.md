---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue), einer **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft.

Die **`IDBCursor`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) dar, mit dem mehrere Datensätze in einer Datenbank durchlaufen werden können.

Der Cursor hat eine Quelle, die angibt, welchen Index oder Object Store er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, in der die Reihenfolge der Datensatzschlüssel auf- oder absteigt. Mit dem Cursor kann eine Anwendung alle Datensätze im Bereich des Cursors asynchron verarbeiten.

Sie können beliebig viele Cursor gleichzeitig verwenden. Für einen bestimmten Cursor erhalten Sie immer dasselbe `IDBCursor`-Objekt. Operationen werden auf dem zugrunde liegenden Index oder Object Store ausgeführt.

## Konstanten

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar – sie wurden in Gecko 25 entfernt. Verwenden Sie stattdessen direkt die String-Konstanten. ([Firefox-Bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze einschließlich Duplikaten an. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts (in der Reihenfolge der Schlüssel monoton steigend).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze ohne Duplikate an. Wenn mehrere Datensätze mit demselben Schlüssel vorhanden sind, wird nur der erste beim Durchlaufen erfasst. Er beginnt an der unteren Grenze des Schlüsselbereichs und bewegt sich aufwärts.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze einschließlich Duplikaten an. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts (in der Reihenfolge der Schlüssel monoton fallend).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze ohne Duplikate an. Wenn mehrere Datensätze mit demselben Schlüssel vorhanden sind, wird nur der erste beim Durchlaufen erfasst. Er beginnt an der oberen Grenze des Schlüsselbereichs und bewegt sich abwärts.

## Instanzeigenschaften

> [!NOTE]
> [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue) ist eine **`IDBCursor`**-Schnittstelle mit einer zusätzlichen **`value`**-Eigenschaft.

- [`IDBCursor.source`](/de/docs/Web/API/IDBCursor/source) {{ReadOnlyInline}}
  - : Gibt den [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) oder [`IDBIndex`](/de/docs/Web/API/IDBIndex) zurück, den der Cursor durchläuft. Diese Eigenschaft gibt niemals null zurück und löst keine Ausnahme aus, selbst wenn der Cursor gerade durchlaufen wird, das Ende seines Bereichs überschritten hat oder seine Transaktion nicht aktiv ist.
- [`IDBCursor.direction`](/de/docs/Web/API/IDBCursor/direction) {{ReadOnlyInline}}
  - : Gibt die Durchlaufrichtung des Cursors zurück.
- [`IDBCursor.key`](/de/docs/Web/API/IDBCursor/key) {{ReadOnlyInline}}
  - : Gibt den Schlüssel des Datensatzes an der Position des Cursors zurück. Befindet sich der Cursor außerhalb seines Bereichs, ist der Wert `undefined`. Der Schlüssel des Cursors kann einen beliebigen Datentyp haben.
- [`IDBCursor.primaryKey`](/de/docs/Web/API/IDBCursor/primaryKey) {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wird der Cursor gerade durchlaufen oder hat er seinen Bereich verlassen, ist der Wert `undefined`. Der Primärschlüssel des Cursors kann einen beliebigen Datentyp haben.
- [`IDBCursor.request`](/de/docs/Web/API/IDBCursor/request) {{ReadOnlyInline}}
  - : Gibt den [`IDBRequest`](/de/docs/Web/API/IDBRequest) zurück, mit dem der Cursor abgerufen wurde.

## Instanzmethoden

- [`IDBCursor.advance()`](/de/docs/Web/API/IDBCursor/advance)
  - : Legt fest, um wie viele Positionen der Cursor vorwärts bewegt werden soll.
- [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue)
  - : Bewegt den Cursor in seiner Durchlaufrichtung zur nächsten Position oder zu dem Eintrag, dessen Schlüssel dem optionalen Parameter `key` entspricht.
- [`IDBCursor.continuePrimaryKey()`](/de/docs/Web/API/IDBCursor/continuePrimaryKey)
  - : Bewegt den Cursor zu dem als Argumente angegebenen Indexschlüssel und Primärschlüssel.
- [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne dessen Position zu ändern. Damit können bestimmte Datensätze gelöscht werden.
- [`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)
  - : Gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Object Store. Damit können bestimmte Datensätze aktualisiert werden.

## Beispiele

In diesem einfachen Codeausschnitt erstellen wir eine Transaktion, rufen einen Object Store ab und verwenden anschließend einen Cursor, um alle Datensätze im Object Store zu durchlaufen. Für den Cursor müssen wir die Daten nicht anhand eines Schlüssels auswählen; wir können einfach alle abrufen. Beachten Sie außerdem, dass Sie bei jedem Schleifendurchlauf mit `cursor.value.foo` über das Cursor-Objekt auf Daten des aktuellen Datensatzes zugreifen können. Ein vollständiges, funktionsfähiges Beispiel finden Sie in unserem [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
