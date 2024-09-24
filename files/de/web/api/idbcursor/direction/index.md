---
title: "IDBCursor: direction-Eigenschaft"
short-title: direction
slug: Web/API/IDBCursor/direction
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`direction`** schreibgeschützte Eigenschaft der
{{domxref("IDBCursor")}}-Schnittstelle ist ein String, der die
Richtung der Traversierung des Cursors zurückgibt (gesetzt mit
{{domxref("IDBObjectStore.openCursor")}} zum Beispiel). Siehe den [Wert](#wert)-Abschnitt unten für mögliche Werte.

## Wert

Ein String, der die Richtung angibt, in der der Cursor die Daten durchläuft.
Mögliche Werte sind:

- `next`
  - : Diese Richtung führt dazu, dass der Cursor am Anfang der Quelle geöffnet wird.
- `nextunique`
  - : Diese Richtung führt dazu, dass der Cursor am Anfang der Quelle geöffnet wird.
    Für jeden Schlüssel mit doppelten Werten wird nur der zuerst besuchte Datensatz (nächste zum Anfang) ausgegeben.
- `prev`
  - : Diese Richtung führt dazu, dass der Cursor am Ende der Quelle geöffnet wird.
- `prevunique`
  - : Diese Richtung führt dazu, dass der Cursor am Ende der Quelle geöffnet wird.
    Für jeden Schlüssel mit doppelten Werten wird nur der zuerst besuchte Datensatz (nächste zum Ende) ausgegeben.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen
Cursor, um durch alle Datensätze im Objektspeicher zu iterieren. In jeder Iteration
protokollieren wir die Richtung des Cursors.

> [!NOTE]
> Wir können die Reiserichtung des Cursors nicht mit der
> `direction`-Eigenschaft ändern, da sie schreibgeschützt ist. Wir legen die Reiserichtung
> mit dem 2. Argument von {{domxref("IDBObjectStore.openCursor")}} fest.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle
abgreifen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen
Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges
funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwenden von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Daten abrufen und Änderungen vornehmen: {{domxref("IDBObjectStore")}}
- Verwenden von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
