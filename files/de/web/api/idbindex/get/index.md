---
title: "IDBIndex: get()-Methode"
short-title: get()
slug: Web/API/IDBIndex/get
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`get()`**-Methode der Schnittstelle {{domxref("IDBIndex")}} gibt ein {{domxref("IDBRequest")}}-Objekt zurück und findet in einem separaten Thread entweder den Wert im referenzierten Objektspeicher, der dem angegebenen Schlüssel entspricht, oder den ersten entsprechenden Wert, wenn `key` auf einen {{domxref("IDBKeyRange")}} gesetzt ist.

Wenn ein Wert gefunden wird, wird eine strukturierte Kopie davon erstellt und als `result` des Anforderungsobjekts festgelegt: Dies gibt den Datensatz zurück, mit dem der Schlüssel verknüpft ist.

## Syntax

```js-nolint
get()
get(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Ein Schlüssel oder {{domxref("IDBKeyRange")}}, der den abzurufenden Datensatz identifiziert. Wenn dieser Wert null oder nicht vorhanden ist, verwendet der Browser einen ungebundenen Schlüsselbereich.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage der Wert des ersten Datensatzes, der dem angegebenen Schlüssel oder Schlüsselbereich entspricht.

### Ausnahmen

Diese Methode kann ein {{domxref("DOMException")}} vom folgenden Typ auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher, dann holen wir den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen grundlegenden Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

`myIndex.get('Bungle')` wird dann verwendet, um den Datensatz mit einem `lName` von `Bungle` abzurufen, und das Ergebnis dieser Anfrage wird in die Konsole protokolliert, wenn der Erfolgscallback zurückkehrt.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel siehe unser [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Transaktionen verwenden: {{domxref("IDBTransaction")}}
- Einen Schlüsselbereich festlegen: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Cursor verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
