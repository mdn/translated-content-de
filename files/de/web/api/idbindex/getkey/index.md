---
title: "IDBIndex: getKey()-Methode"
short-title: getKey()
slug: Web/API/IDBIndex/getKey
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`getKey()`**-Methode der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und findet in einem separaten Thread entweder den Primärschlüssel, der dem angegebenen Schlüssel in diesem Index entspricht, oder den ersten entsprechenden Primärschlüssel, wenn `key` auf ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange) gesetzt ist.

Wenn ein Primärschlüssel gefunden wird, wird dieser als `result`-Eigenschaft des Anfrageobjekts festgelegt. Beachten Sie, dass dies nicht den gesamten Datensatz zurückgibt, wie es [`IDBIndex.get`](/de/docs/Web/API/IDBIndex/get) tut.

## Syntax

```js-nolint
getKey()
getKey(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), das einen Datensatz identifiziert, der abgerufen werden soll. Wenn dieser Wert null oder nicht angegeben ist, verwendet der Browser einen ungebundenen Schlüsselbereich.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Antrags der Schlüssel für den ersten Datensatz, der dem angegebenen Schlüssel oder Schlüsselbereich entspricht.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher, um dann den Index `lName` aus einer einfachen Kontaktdatenbank zu erhalten. Anschließend öffnen wir einen einfachen Cursor auf dem Index mithilfe von [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

`myIndex.getKey('Bungle')` wird dann verwendet, um den Primärschlüssel des Datensatzes mit einem `lName` von `Bungle` abzurufen, und das Ergebnis dieser Anfrage wird in der Konsole protokolliert, wenn der Erfolgs-Callback zurückkehrt.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges funktionierendes Beispiel finden Sie in unserem [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  const getKeyRequest = myIndex.getKey("Bungle");
  getKeyRequest.onsuccess = () => {
    console.log(getKeyRequest.result);
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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
