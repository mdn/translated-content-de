---
title: IDBCursor
slug: Web/API/IDBCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

> [!NOTE]
> Nicht zu verwechseln mit {{domxref("IDBCursorWithValue")}}, welches einfach eine **`IDBCursor`** Schnittstelle mit einer zusätzlichen **`value`** Eigenschaft ist.

Die **`IDBCursor`** Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) zum Durchlaufen oder Iterieren über mehrere Datensätze in einer Datenbank.

Der Cursor hat eine Quelle, die angibt, über welchen Index oder welchen Objektstore er iteriert. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in aufsteigender oder absteigender Reihenfolge der Datensatzzugriffsschlüssel verläuft. Der Cursor ermöglicht es einer Anwendung, alle Datensätze im Bereich des Cursors asynchron zu verarbeiten.

Sie können eine unbegrenzte Anzahl von Cursors gleichzeitig haben. Sie erhalten immer das gleiche `IDBCursor` Objekt, das einen bestimmten Cursor repräsentiert. Operationen werden auf dem zugrundeliegenden Index oder Objektstore ausgeführt.

## Instanz-Eigenschaften

> **Hinweis:** {{domxref("IDBCursorWithValue")}} ist eine **`IDBCursor`** Schnittstelle mit einer zusätzlichen **`value`** Eigenschaft.

- {{domxref("IDBCursor.source")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("IDBObjectStore")}} oder {{domxref("IDBIndex")}} zurück, über den der Cursor iteriert. Diese Funktion gibt niemals null zurück und löst keine Ausnahme aus, selbst wenn der Cursor momentan iteriert wird, über das Ende hinaus iteriert wurde oder seine Transaktion nicht aktiv ist.

- {{domxref("IDBCursor.direction")}} {{ReadOnlyInline}}
  - : Gibt die Richtung der Traversierung des Cursors zurück.

- {{domxref("IDBCursor.key")}} {{ReadOnlyInline}}
  - : Gibt den Schlüssel für den Datensatz an der Position des Cursors zurück. Wenn der Cursor außerhalb seines Bereichs ist, wird dies auf `undefined` gesetzt. Der Schlüssel des Cursors kann jede Art von Datentyp sein.

- {{domxref("IDBCursor.primaryKey")}} {{ReadOnlyInline}}
  - : Gibt den aktuellen effektiven Primärschlüssel des Cursors zurück. Wenn der Cursor derzeit iteriert wird oder außerhalb seines Bereichs iteriert wurde, wird dies auf `undefined` gesetzt. Der Primärschlüssel des Cursors kann jeder Datentyp sein.

- {{domxref("IDBCursor.request")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("IDBRequest")}} zurück, das verwendet wurde, um den Cursor zu erhalten.

## Instanz-Methoden

- {{domxref("IDBCursor.advance()")}}
  - : Legt fest, wie oft ein Cursor seine Position vorwärts bewegen soll.

- {{domxref("IDBCursor.continue()")}}
  - : Bringt den Cursor zur nächsten Position entlang seiner Richtung, zu dem Element, dessen Schlüssel dem optionalen `key` Parameter entspricht.

- {{domxref("IDBCursor.continuePrimaryKey()")}}
  - : Setzt den Cursor auf den gegebenen Index-Schlüssel und Primärschlüssel, die als Argumente übergeben werden.

- {{domxref("IDBCursor.delete()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Dies kann verwendet werden, um bestimmte Datensätze zu löschen.

- {{domxref("IDBCursor.update()")}}
  - : Gibt ein {{domxref("IDBRequest")}}-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objektstore. Dies kann verwendet werden, um bestimmte Datensätze zu aktualisieren.

## Konstanten

{{Deprecated_Header}}

> [!WARNING]
> Diese Konstanten sind nicht mehr verfügbar – sie wurden in Gecko 25 entfernt. Sie sollten stattdessen die String-Konstanten direkt verwenden. ([Firefox Bug 891944](https://bugzil.la/891944))

- `NEXT`: `"next"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikaten. Er beginnt am unteren Bereich der Schlüsselspanne und bewegt sich nach oben (monoton ansteigend in der Reihenfolge der Schlüssel).
- `NEXTUNIQUE` : `"nextunique"` : Der Cursor zeigt alle Datensätze außer Duplikaten. Wenn mehrere Datensätze mit dem gleichen Schlüssel existieren, wird nur der erste iterierte Datensatz abgerufen. Er beginnt am unteren Bereich der Schlüsselspanne und bewegt sich nach oben.
- `PREV`: `"prev"` : Der Cursor zeigt alle Datensätze, einschließlich Duplikaten. Er beginnt am oberen Bereich der Schlüsselspanne und bewegt sich nach unten (monoton fallend in der Reihenfolge der Schlüssel).
- `PREVUNIQUE`: `"prevunique"` : Der Cursor zeigt alle Datensätze außer Duplikaten. Wenn mehrere Datensätze mit dem gleichen Schlüssel existieren, wird nur der erste iterierte Datensatz abgerufen. Er beginnt am oberen Bereich der Schlüsselspanne und bewegt sich nach unten.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektstore ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektstore zu iterieren. Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/).)

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
