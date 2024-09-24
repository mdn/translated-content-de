---
title: "IDBCursor: update()-Methode"
short-title: update()
slug: Web/API/IDBCursor/update
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`update()`**-Methode der {{domxref("IDBCursor")}}-Schnittstelle gibt ein {{domxref("IDBRequest")}}-Objekt zurück und aktualisiert in einem separaten Thread den Wert an der aktuellen Position des Cursors im Objekt-Store. Wenn der Cursor auf einen Datensatz zeigt, der gerade gelöscht wurde, wird ein neuer Datensatz erstellt.

Beachten Sie, dass Sie `update()` (oder {{domxref("IDBCursor.delete()")}}) nicht auf Cursor aufrufen können, die von {{domxref("IDBIndex.openKeyCursor()")}} erhalten wurden. Für solche Anforderungen müssen Sie {{domxref("IDBIndex.openCursor()")}} verwenden.

## Syntax

```js-nolint
update(value)
```

### Parameter

- `value`
  - : Der neue Wert, der an der aktuellen Position gespeichert werden soll.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Antrags der Schlüssel für den aktualisierten Datensatz.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `ReadOnlyError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Transaktionsmodus nur-Lesen ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Cursor mit {{domxref("IDBindex.openKeyCursor")}} erstellt wurde, derzeit durchlaufen wird oder über sein Ende hinaus iteriert hat.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der zugrunde liegende Objekt-Store Inline-Schlüssel verwendet und die Eigenschaft im Wert entlang des Schlüsselpfads des Objekt-Stores nicht mit dem Schlüssel in der Position dieses Cursors übereinstimmt.
- `DataCloneError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die zu speichernden Daten nicht durch den internen strukturierten Klonalgorithmus geklont werden konnten.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um alle Datensätze im Objekt-Store zu durchlaufen. Wenn der `albumTitle` des aktuellen Cursors "A farewell to kings" ist, aktualisieren wir das Jahr, in dem das Album veröffentlicht wurde, mit `const request = cursor.update();`.

Beachten Sie, dass Sie Primärschlüssel nicht mit `cursor.update()` ändern können, weshalb wir den Albumtitel nicht ändern; dies würde die Integrität der Daten zerstören. In einem solchen Fall müssten Sie den Datensatz insgesamt löschen und dann einen neuen mit {{domxref("IDBObjectStore.add")}} hinzufügen. Beachten Sie auch, dass Sie `cursor.value` nicht direkt in einem update-Aufruf verwenden können, daher wird im folgenden Beispiel eine Zwischenvariable `updateData` verwendet.

Der Cursor erfordert nicht, dass wir die Daten basierend auf einem Schlüssel auswählen; wir können einfach alle erfassen. Beachten Sie auch, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges Arbeitsbeispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
      console.log("Einträge angezeigt.");
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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselsbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursor: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
