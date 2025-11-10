---
title: "IDBCursor: direction-Eigenschaft"
short-title: direction
slug: Web/API/IDBCursor/direction
l10n:
  sourceCommit: a2aab7a2f0d25c63b9fee9cd15f96478ac9186c8
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`direction`** schreibgeschützte Eigenschaft des [`IDBCursor`](/de/docs/Web/API/IDBCursor) Interfaces ist ein String, der die Richtung der Durchquerung des Cursors zurückgibt (zum Beispiel gesetzt mittels [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor)). Siehe den [Wert](#wert)-Abschnitt unten für mögliche Werte.

## Wert

Ein String, der angibt, in welche Richtung der Cursor die Daten durchläuft. Mögliche Werte sind:

- `next`
  - : Der Cursor wird am Anfang der Quelle geöffnet.
- `nextunique`
  - : Der Cursor wird am Anfang der Quelle geöffnet. Für jeden Schlüssel mit doppelten Werten wird nur der Datensatz, der dem Anfang am nächsten ist, ausgewählt.
- `prev`
  - : Der Cursor wird am Ende der Quelle geöffnet.
- `prevunique`
  - : Der Cursor wird am Ende der Quelle geöffnet. Für jeden Schlüssel mit doppelten Werten wird nur der Datensatz, der dem Anfang am nächsten ist, ausgewählt.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. In jeder Iteration loggen wir die Richtung des Cursors.

> [!NOTE]
> Wir können die Reiserichtung des Cursors nicht mit der `direction`-Eigenschaft ändern, da sie schreibgeschützt ist. Wir geben die Reiserichtung mittels des zweiten Arguments von [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor) an.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle abrufen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` erhalten können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Festlegung eines Schlüsselsortiments: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abruf und Änderung Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
