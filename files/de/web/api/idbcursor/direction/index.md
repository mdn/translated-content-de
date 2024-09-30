---
title: "IDBCursor: direction-Eigenschaft"
short-title: direction
slug: Web/API/IDBCursor/direction
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`direction`** des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces ist ein String, der die Richtung der Traversierung des Cursors zurückgibt (zum Beispiel festgelegt durch [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor)). Siehe den Abschnitt [Werte](#wert) unten für mögliche Werte.

## Wert

Ein String, der die Richtung angibt, in der der Cursor die Daten durchläuft. Mögliche Werte sind:

- `next`
  - : Diese Richtung bewirkt, dass der Cursor am Anfang der Quelle geöffnet wird.
- `nextunique`
  - : Diese Richtung bewirkt, dass der Cursor am Anfang der Quelle geöffnet wird. Bei jedem Schlüssel mit doppelten Werten wird nur der zuerst erfasste Datensatz (der dem Anfang am nächsten ist) ausgegeben.
- `prev`
  - : Diese Richtung bewirkt, dass der Cursor am Ende der Quelle geöffnet wird.
- `prevunique`
  - : Diese Richtung bewirkt, dass der Cursor am Ende der Quelle geöffnet wird. Bei jedem Schlüssel mit doppelten Werten wird nur der zuerst erfasste Datensatz (der dem Ende am nächsten ist) ausgegeben.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. In jeder Iteration protokollieren wir die Richtung des Cursors.

> [!NOTE]
> Wir können die Reiserichtung des Cursors nicht mit der `direction`-Eigenschaft ändern, da sie schreibgeschützt ist. Wir geben die Reiserichtung mit dem zweiten Argument von [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) an.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können sie einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erfassen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Festlegung eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern von Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
