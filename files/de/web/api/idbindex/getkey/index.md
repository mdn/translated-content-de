---
title: "IDBIndex: getKey()-Methode"
short-title: getKey()
slug: Web/API/IDBIndex/getKey
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`getKey()`**-Methode des {{domxref("IDBIndex")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück. In einem separaten Thread sucht sie entweder den Primärschlüssel, der dem angegebenen Schlüssel in diesem Index entspricht, oder den ersten entsprechenden Primärschlüssel, wenn `key` auf einen {{domxref("IDBKeyRange")}} gesetzt ist.

Wenn ein Primärschlüssel gefunden wird, wird er als `result` des Request-Objekts festgelegt. Beachten Sie, dass dies nicht den gesamten Datensatz zurückgibt, wie es {{domxref("IDBIndex.get")}} tut.

## Syntax

```js-nolint
getKey()
getKey(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Ein Schlüssel oder {{domxref("IDBKeyRange")}}, der einen Datensatz identifiziert, der abgerufen werden soll. Wenn dieser Wert null oder nicht vorhanden ist, verwendet der Browser einen ungebundenen Schlüsselbereich.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Requests der Schlüssel für den ersten Datensatz, der dem angegebenen Schlüssel oder Schlüsselbereich entspricht.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder der Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store, dann holen wir den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

`myIndex.getKey('Bungle')` wird dann verwendet, um den Primärschlüssel des Datensatzes mit einem `lName` von `Bungle` abzurufen, und das Ergebnis dieser Anfrage wird bei Rückgabe des Erfolgs-Callbacks in die Konsole protokolliert.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein vollständiges funktionierendes Beispiel siehe unser [IndexedDB-Beispiele-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
