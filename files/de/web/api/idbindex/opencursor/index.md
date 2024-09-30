---
title: "IDBIndex: openCursor()-Methode"
short-title: openCursor()
slug: Web/API/IDBIndex/openCursor
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openCursor()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und erstellt in einem separaten Thread einen [Cursor](/de/docs/Web/API/IndexedDB_API/Basic_Terminology#cursor) über den angegebenen Schlüsselbereich.

Die Methode setzt die Position des Cursors auf den entsprechenden Datensatz basierend auf der angegebenen Richtung.

Wenn der Schlüsselbereich nicht angegeben ist oder null ist, umfasst der Bereich alle Datensätze.

## Syntax

```js-nolint
openCursor()
openCursor(range)
openCursor(range, direction)
```

### Parameter

- `range` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der als Bereich des Cursors verwendet wird. Wenn nichts übergeben wird, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objektstore auswählt.
- `direction` {{optional_inline}}
  - : Die [Richtung](/de/docs/Web/API/IDBCursor#constants) des Cursors. Siehe [IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants) für mögliche Werte.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage:

- ein [`IDBCursorWithValue`](/de/docs/Web/API/IDBCursorWithValue)-Objekt, das auf den ersten Datensatz zeigt, der mit der gegebenen Abfrage übereinstimmt
- `null`, wenn keine übereinstimmenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den Parameter `direction` ungültig ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektstore, dann holen wir den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit `openCursor()` – das funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel, siehe unser [IndexedDB-Beispiele Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");

  myIndex.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
      for (const cell of [
        cursor.value.id,
        cursor.value.lName,
        cursor.value.fName,
        cursor.value.jTitle,
        cursor.value.company,
        cursor.value.eMail,
        cursor.value.phone,
        cursor.value.age,
      ]) {
        const tableCell = document.createElement("td");
        tableCell.textContent = cell;
        tableRow.appendChild(tableCell);
      }
      tableEntry.appendChild(tableRow);

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
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie das Beispiel live](https://mdn.github.io/dom-examples/to-do-notifications/)).
