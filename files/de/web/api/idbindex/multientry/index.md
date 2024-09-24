---
title: "IDBIndex: multiEntry-Eigenschaft"
short-title: multiEntry
slug: Web/API/IDBIndex/multiEntry
l10n:
  sourceCommit: ff1e97da7ade9fcb05fb3de064011d4f05debe82
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`multiEntry`** der
{{domxref("IDBIndex")}} Schnittstelle gibt einen booleschen Wert zurück, der beeinflusst, wie der Index
sich verhält, wenn das Ergebnis der Auswertung des Schlüsselpfads des Index ein Array ergibt.

Dies wird festgelegt, wenn der Index erstellt wird, unter Verwendung der
{{domxref("IDBObjectStore.createIndex")}} Methode. Diese Methode nimmt einen optionalen
`options` Parameter an, dessen `multiEntry` Eigenschaft auf `true`/`false` gesetzt wird.

## Wert

Ein boolescher Wert:

| Wert  | Effekt                                                               |
| ----- | -------------------------------------------------------------------- |
| true  | Es gibt einen Eintrag im Index für jedes Element in einem Array von Schlüsseln. |
| false | Es gibt einen Eintrag für jeden Schlüssel, der ein Array ist.        |

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objektspeicher und holen den
Index `lName` aus einer einfachen Kontaktdatenbank. Wir öffnen dann einen einfachen Cursor auf
dem Index mit {{domxref("IDBIndex.openCursor")}} — dies funktioniert genauso wie das Öffnen eines
Cursors direkt auf einem `ObjectStore` mit
{{domxref("IDBObjectStore.openCursor")}}, außer dass die zurückgegebenen Datensätze basierend
auf dem Index und nicht auf dem Primärschlüssel sortiert werden.

Der Multi-Entry-Status des Index wird in der Konsole protokolliert: Er sollte als `false` zurückgegeben
werden.

Schließlich iterieren wir durch jeden Datensatz und fügen die Daten in eine HTML-Tabelle ein. Für ein
vollständig funktionierendes Beispiel, siehe unser [IndexedDB-Beispiel-Demo-Repo](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.textContent = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const myIndex = objectStore.index("lName");
  console.log(myIndex.multiEntry);

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
      console.log("Einträge sind alle angezeigt.");
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
- Festlegen eines Schlüsselspektrums: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
