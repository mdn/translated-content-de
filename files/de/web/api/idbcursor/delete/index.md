---
title: "IDBCursor: delete() Methode"
short-title: delete()
slug: Web/API/IDBCursor/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`delete()`** Methode des [`IDBCursor`](/de/docs/Web/API/IDBCursor)
Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Sobald der Datensatz gelöscht ist, wird der Wert des Cursors auf null gesetzt.

Beachten Sie, dass `delete()` (oder
[`IDBCursor.update()`](/de/docs/Web/API/IDBCursor/update)) nicht für Cursor aufgerufen werden kann, die von
[`IDBIndex.openKeyCursor()`](/de/docs/Web/API/IDBIndex/openKeyCursor) erhalten wurden. Für solche Anforderungen müssen Sie stattdessen
[`IDBIndex.openCursor()`](/de/docs/Web/API/IDBIndex/openCursor) verwenden.

## Syntax

```js-nolint
delete()
```

### Parameter

Keine.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest) Objekt, auf dem nachfolgende Ereignisse zu dieser
Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft der Anfrage `undefined`.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsmodus schreibgeschützt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor mit [`IDBindex.openKeyCursor`](/de/docs/Web/API/IDBindex/openKeyCursor) erstellt wurde, gerade iteriert wird oder seine Endposition überschritten hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen
Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Wenn der
`albumTitle` des aktuellen Cursors "Grace under pressure" ist, löschen wir diesen
gesamten Datensatz mit `const request = cursor.delete();`.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle
greifen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen
Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein komplettes
funktionsfähiges Beispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function deleteResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "Grace under pressure") {
        const request = cursor.delete();
        request.onsuccess = () => {
          console.log(
            "Deleted that mediocre album from 1984. Even Power windows is better.",
          );
        };
      } else {
        const listItem = document.createElement("li");
        listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
        list.appendChild(listItem);
      }
      cursor.continue();
    } else {
      console.log("Entries displayed.");
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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
