---
title: "IDBIndex: get()-Methode"
short-title: get()
slug: Web/API/IDBIndex/get
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`get()`**-Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread entweder den Wert im referenzierten Objektspeicher, der dem angegebenen Schlüssel entspricht, oder den ersten entsprechenden Wert, wenn `key` auf ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) gesetzt ist.

Wenn ein Wert gefunden wird, wird ein struktureller Klon davon erstellt und als `result` des Anfrageobjekts gesetzt: Dies gibt den Datensatz zurück, mit dem der Schlüssel verknüpft ist.

## Syntax

```js-nolint
get()
get(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der den abzurufenden Datensatz identifiziert. Wenn dieser Wert null oder nicht vorhanden ist, verwendet der Browser einen ungebundenen Schlüsselbereich.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage der Wert des ersten Datensatzes, der dem angegebenen Schlüssel oder Schlüsselbereich entspricht.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und erhalten dann den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) – dies funktioniert gleich wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert werden.

`myIndex.get('Bungle')` wird dann verwendet, um den Datensatz mit einem `lName` von `Bungle` abzurufen, und das Ergebnis dieser Anfrage wird in die Konsole geloggt, wenn deren Erfolgs-Callback zurückkehrt.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges Arbeitsbeispiel siehe unser [IndexedDB-Beispiele-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  const getRequest = myIndex.get("Bungle");
  getRequest.onsuccess = () => {
    console.log(getRequest.result);
  };

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
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursoren: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
