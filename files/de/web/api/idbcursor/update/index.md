---
title: "IDBCursor: update() Methode"
short-title: update()
slug: Web/API/IDBCursor/update
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`update()`** Methode des [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objekt-Store. Wenn der Cursor auf einen Datensatz zeigt, der gerade gelöscht wurde, wird ein neuer Datensatz erstellt.

Beachten Sie, dass Sie `update()` (oder
[`IDBCursor.delete()`](/de/docs/Web/API/IDBCursor/delete)) nicht auf Cursorn aufrufen können, die aus
[`IDBIndex.openKeyCursor()`](/de/docs/Web/API/IDBIndex/openKeyCursor) heruntergeladen wurden. In solchen Fällen müssen Sie stattdessen [`IDBIndex.openCursor()`](/de/docs/Web/API/IDBIndex/openCursor) verwenden.

## Syntax

```js-nolint
update(value)
```

### Parameter

- `value`
  - : Der neue Wert, der an der aktuellen Position gespeichert werden soll.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse in Bezug auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anforderung der Schlüssel für den aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion des IDBCursors inaktiv ist.
- `ReadOnlyError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Transaktionsmodus nur lesen ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor mit [`IDBindex.openKeyCursor`](/de/docs/Web/API/IDBindex/openKeyCursor) erstellt wurde, gerade iteriert wird oder über sein Ende hinaus iteriert wurde.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der zugrunde liegende Objekt-Store Inline-Schlüssel verwendet und die Eigenschaft im Wert am Schlüsselpfad des Objekt-Stores nicht mit dem Schlüssel in der Position dieses Cursors übereinstimmt.
- `DataCloneError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Daten, die gespeichert werden sollen, nicht vom internen strukturierten Klonalgorithmus geklont werden konnten.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, greifen auf einen Objekt-Store zu und verwenden dann einen Cursor, um durch alle Datensätze im Objekt-Store zu iterieren. Wenn der `albumTitle` des aktuellen Cursors "A farewell to kings" ist, aktualisieren wir das Jahr, in dem das Album veröffentlicht wurde, indem wir `const request = cursor.update();` verwenden.

Beachten Sie, dass Sie mit `cursor.update()` keine Primärschlüssel ändern können, weshalb wir den Albumtitel nicht ändern; dies würde die Datenintegrität beeinträchtigen. In einer solchen Situation müssten Sie den Datensatz vollständig löschen und dann einen neuen mit [`IDBObjectStore.add`](/de/docs/Web/API/IDBObjectStore/add) hinzufügen. Beachten Sie auch, dass Sie `cursor.value` nicht direkt in einem Update-Aufruf verwenden können, daher wird im folgenden Beispiel eine Zwischenvariable `updateData` verwendet.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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

- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einstellen eines Schlüsselspektrums: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [Aufgabenbenachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
