---
title: "IDBIndex: count()-Methode"
short-title: count()
slug: Web/API/IDBIndex/count
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`count()`**-Methode des {{domxref("IDBIndex")}}
Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück und liefert in einem separaten Thread die Anzahl der Datensätze innerhalb eines Schlüsselbereichs.

## Syntax

```js-nolint
count()
count(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Der Schlüssel oder Schlüsselbereich, der den zu zählenden Datensatz identifiziert.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, bei dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Antrags die Anzahl der Datensätze, die mit dem angegebenen Schlüssel oder Schlüsselbereich übereinstimmen.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} einer der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store und holen uns den
Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen grundlegenden Cursor auf
dem Index mit {{domxref("IDBIndex.openCursor")}} — das funktioniert genauso wie das Öffnen eines
Cursors direkt auf einem `ObjectStore` mit
{{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend
auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

`myIndex.count()` wird dann verwendet, um die Anzahl der Datensätze im Index zu zählen,
und das Ergebnis dieser Anforderung wird in die Konsole protokolliert, wenn der Erfolgscallback
zurückkehrt.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein
vollständig funktionierendes Beispiel siehe unser [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  const countRequest = myIndex.count();
  countRequest.onsuccess = () => {
    console.log(countRequest.result);
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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegung eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Bearbeiten Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
