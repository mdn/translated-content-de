---
title: "IDBIndex: name Eigenschaft"
short-title: name
slug: Web/API/IDBIndex/name
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`name`**-Eigenschaft der {{domxref("IDBIndex")}}-Schnittstelle enthält einen String, der den Index benennt.

## Wert

Ein String, der einen Namen für den Index angibt.

### Ausnahmen

Es gibt mehrere Ausnahmen, die auftreten können, wenn Sie versuchen, den Namen eines Indexes zu ändern.

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Index oder sein Objekt-Speicher gelöscht wurde oder wenn die aktuelle Transaktion keine Upgrade-Transaktion ist. Sie können Indexe nur während Upgrade-Transaktionen umbenennen; das heißt, wenn der Modus `"versionchange"` ist.
- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die aktuelle Transaktion nicht aktiv ist.
- `ConstraintError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein Index bereits den angegebenen `name` verwendet.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Speicher, dann holen wir uns den Index `lName` aus einer einfachen Kontaktdatenbank. Anschließend öffnen wir einen einfachen Cursor auf dem Index mit {{domxref("IDBIndex.openCursor()")}} — dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem {{domxref("IDBObjectStore")}} mit {{domxref("IDBObjectStore.openCursor", "openCursor()")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index sortiert sind, nicht nach dem Primärschlüssel.

Der Name des Indexes wird in die Konsole protokolliert: Er sollte als `lName` zurückgegeben werden.

Schließlich durchlaufen wir jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Ein vollständiges funktionierendes Beispiel finden Sie in unserem [IndexedDB-examples Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.name);

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
- Nutzung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie sich das Beispiel live an](https://mdn.github.io/dom-examples/to-do-notifications/)).
