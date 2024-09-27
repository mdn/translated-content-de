---
title: "IDBCursor: direction-Eigenschaft"
short-title: direction
slug: Web/API/IDBCursor/direction
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`direction`** schreibgeschützte Eigenschaft der [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Schnittstelle ist ein String, der die Richtung der Bewegung des Cursors zurückgibt (eingestellt mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), zum Beispiel). Siehe den [Werte](#wert)-Abschnitt unten für mögliche Werte.

## Wert

Ein String, der die Richtung angibt, in der der Cursor die Daten durchläuft. Mögliche Werte sind:

- `next`
  - : Diese Richtung führt dazu, dass der Cursor am Start der Quelle geöffnet wird.
- `nextunique`
  - : Diese Richtung führt dazu, dass der Cursor am Start der Quelle geöffnet wird. Für jeden Schlüssel mit doppelten Werten wird nur der zuerst besuchte Datensatz (nächst dem Start) geliefert.
- `prev`
  - : Diese Richtung führt dazu, dass der Cursor am Ende der Quelle geöffnet wird.
- `prevunique`
  - : Diese Richtung führt dazu, dass der Cursor am Ende der Quelle geöffnet wird. Für jeden Schlüssel mit doppelten Werten wird nur der zuerst besuchte Datensatz (nächst dem Ende) geliefert.

## Beispiele

In diesem einfachen Beispiel erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. Innerhalb jeder Iteration protokollieren wir die Richtung des Cursors.

> [!NOTE]
> Wir können die Reiserichtung des Cursors nicht mithilfe der `direction`-Eigenschaft ändern, da sie schreibgeschützt ist. Wir geben die Reiserichtung mit dem 2. Argument von [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) an.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständiges Arbeitsbeispiel sehen Sie sich unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function backwards() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor(null, "prev").onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);

      console.log(cursor.direction);
      cursor.continue();
    } else {
      console.log("Entries displayed backwards.");
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
- Einstellen eines Schlüsselsortiments: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
