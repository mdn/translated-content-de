---
title: "IDBIndex: openKeyCursor() Methode"
short-title: openKeyCursor()
slug: Web/API/IDBIndex/openKeyCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openKeyCursor()`** Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen Cursor über den angegebenen Schlüsselbereich, wie durch diesen Index sortiert.

Die Methode setzt die Position des Cursors auf den entsprechenden Schlüssel, basierend auf der angegebenen Richtung.

Wenn der Schlüsselbereich nicht spezifiziert oder null ist, umfasst der Bereich alle Schlüssel.

> [!NOTE]
> Die Cursors, die von `openKeyCursor()` zurückgegeben werden, stellen den referenzierten Wert nicht so zur Verfügung wie [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor).
> Dies macht das Abrufen einer Liste von Schlüsseln wesentlich effizienter.

## Syntax

```js-nolint
openKeyCursor()
openKeyCursor(range)
openKeyCursor(range, direction)
```

### Parameter

- `range` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der als Bereich des Cursors verwendet wird. Wenn nichts übergeben wird, wird dies standardmäßig zu einem Schlüsselbereich, der alle Datensätze in diesem Objekt-Store auswählt.
- `direction` {{optional_inline}}
  - : Die [Richtung](/de/docs/Web/API/IDBCursor#constants) des Cursors. Siehe [IDBCursor Konstanten](/de/docs/Web/API/IDBCursor#constants) für mögliche Werte.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse, die sich auf diese Operation beziehen, ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Requests:

- ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt, das auf den ersten Datensatz zeigt, der der gegebenen Abfrage entspricht
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den Parameter direction ungültig ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen Schlüsselcursor auf dem Index mit `openKeyCursor()` — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit [`IDBObjectStore.openKeyCursor`](/de/docs/Web/API/IDBObjectStore/openKeyCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert werden.

Schließlich iterieren wir durch jeden Datensatz im Index und fügen den Nachnamen und den entsprechenden Primärschlüssel des referenzierten Datensatzes in eine HTML-Tabelle ein.

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");

  myIndex.openKeyCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      tableRow.appendChild(document.createElement("td")).textContent =
        cursor.key;
      tableRow.appendChild(document.createElement("td")).textContent =
        cursor.primaryKey;
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log("All last names displayed.");
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
- Festlegen eines Bereichs von Schlüsseln: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
