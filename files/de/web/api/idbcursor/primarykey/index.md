---
title: "IDBCursor: primaryKey Eigenschaft"
short-title: primaryKey
slug: Web/API/IDBCursor/primaryKey
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{APIRef("IDBCursor")}} {{AvailableInWorkers}}

Die schreibgeschützte **`primaryKey`**-Eigenschaft des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt den aktuellen effektiven Schlüssel des Cursors zurück. Wenn der Cursor derzeit iteriert wird oder außerhalb seines Bereichs iteriert hat, wird dieser auf undefiniert gesetzt. Der Primärschlüssel des Cursors kann jeden Datentyp haben.

## Wert

Ein Wert eines beliebigen Datentyps.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor voranschreitet oder abgeschlossen ist.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um durch alle Datensätze im Objektspeicher zu iterieren. In jeder Iteration protokollieren wir den Primärschlüssel des Cursors in der Konsole.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle Daten erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständig funktionierendes Beispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

      console.log(cursor.primaryKey);
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
- Verwenden von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
