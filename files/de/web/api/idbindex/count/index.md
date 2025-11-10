---
title: "IDBIndex: count() Methode"
short-title: count()
slug: Web/API/IDBIndex/count
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`count()`** Methode des [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Interfaces gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück und liefert in einem separaten Thread die Anzahl der Datensätze innerhalb eines Schlüsselbereichs.

## Syntax

```js-nolint
count()
count(key)
```

### Parameter

- `key` {{optional_inline}}
  - : Der Schlüssel oder Schlüsselbereich, der den zu zählenden Datensatz identifiziert.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, bei dem nachfolgende Ereignisse, die mit dieser Operation zusammenhängen, ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft des Antrags die Anzahl der Datensätze, die dem angegebenen Schlüssel oder Schlüsselbereich entsprechen.

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektstore, dann erhalten wir den Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf dem Index mit [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) — dies funktioniert genauso wie das Öffnen eines Cursors direkt auf einem `ObjectStore` mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht auf dem Primärschlüssel sortiert sind.

`myIndex.count()` wird dann verwendet, um die Anzahl der Datensätze im Index zu zählen, und das Ergebnis dieser Anfrage wird in die Konsole protokolliert, wenn der Erfolg-Callback zurückkehrt.

Schließlich gehen wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges Arbeitsbeispiel finden Sie in unserem [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Nutzung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
