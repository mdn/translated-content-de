---
title: "IDBCursor: delete()-Methode"
short-title: delete()
slug: Web/API/IDBCursor/delete
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`delete()`**-Methode der {{domxref("IDBCursor")}}-Schnittstelle gibt ein {{domxref("IDBRequest")}}-Objekt zurück und löscht in einem separaten Thread den Datensatz an der Position des Cursors, ohne die Position des Cursors zu ändern. Sobald der Datensatz gelöscht ist, wird der Wert des Cursors auf null gesetzt.

Beachten Sie, dass Sie `delete()` (oder {{domxref("IDBCursor.update()")}}) nicht für Cursor aufrufen können, die von {{domxref("IDBIndex.openKeyCursor()")}} erhalten wurden. In solchen Fällen müssen Sie stattdessen {{domxref("IDBIndex.openCursor()")}} verwenden.

## Syntax

```js-nolint
delete()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Requests `undefined`.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} vom folgenden Typ auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Transaktionsmodus schreibgeschützt ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Cursor mit {{domxref("IDBindex.openKeyCursor")}} erstellt wurde, derzeit durchlaufen wird oder über sein Ende hinaus durchlaufen hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. Wenn das `albumTitle` des aktuellen Cursors "Grace under pressure" ist, löschen wir den gesamten Datensatz mit `const request = cursor.delete();`.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern von Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
