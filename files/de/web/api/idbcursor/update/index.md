---
title: "IDBCursor: update() Methode"
short-title: update()
slug: Web/API/IDBCursor/update
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`update()`**-Methode des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objektspeicher. Wenn der Cursor auf einen Datensatz zeigt, der gerade gelöscht wurde, wird ein neuer Datensatz erstellt.

Es sei darauf hingewiesen, dass Sie `update()` (oder [`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)) nicht für Cursors aufrufen können, die von [`IDBIndex.openKeyCursor()`](/de/docs/Web/API/IDBIndex/openKeyCursor) erhalten wurden. Für solche Anforderungen müssen Sie stattdessen [`IDBIndex.openCursor()`](/de/docs/Web/API/IDBIndex/openCursor) verwenden.

## Syntax

```js-nolint
update(value)
```

### Parameter

- `value`
  - : Der neue Wert, der an der aktuellen Position gespeichert werden soll.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Schlüssel für den aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann ein [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsmodus schreibgeschützt ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor mit [`IDBindex.openKeyCursor`](/de/docs/Web/API/IDBindex/openKeyCursor) erstellt wurde, gerade iteriert wird oder über sein Ende hinaus iteriert hat.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der zugrunde liegende Objektspeicher eingebettete Schlüssel verwendet und die Eigenschaft im Wert des Schlüsselfeldpfades des Objektspeichers nicht mit dem Schlüssel in der Position dieses Cursors übereinstimmt.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um alle Datensätze im Objektspeicher zu durchlaufen. Wenn der `albumTitle` des aktuellen Cursors "A farewell to kings" ist, aktualisieren wir das Jahr, in dem das Album veröffentlicht wurde, mit `const request = cursor.update();`.

Beachten Sie, dass Sie keine Primärschlüssel mit `cursor.update()` ändern können, daher ändern wir nicht den Albumtitel; dies würde die Integrität der Daten beeinträchtigen. In einem solchen Fall müssten Sie den Datensatz vollständig löschen und dann mit [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add) einen neuen hinzufügen. Beachten Sie auch, dass Sie `cursor.value` nicht direkt in einem Update-Aufruf verwenden können, weshalb im untenstehenden Beispiel eine zwischengeschaltete `updateData`-Variable verwendet wird.

Der Cursor erfordert von uns nicht, die Daten basierend auf einem Schlüssel auszuwählen; wir können einfach alle davon abrufen. Beachten Sie außerdem, dass Sie pro Iteration der Schleife die Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function updateResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readwrite");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      if (cursor.value.albumTitle === "A farewell to kings") {
        const updateData = cursor.value;

        updateData.year = 2050;
        const request = cursor.update(updateData);
        request.onsuccess = () => {
          console.log("A better album year?");
        };
      }

      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Bereich von Schlüsseln festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
