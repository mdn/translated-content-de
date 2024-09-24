---
title: "IDBIndex: Methode openKeyCursor()"
short-title: openKeyCursor()
slug: Web/API/IDBIndex/openKeyCursor
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`openKeyCursor()`**-Methode des {{domxref("IDBIndex")}}-Interfaces gibt ein {{domxref("IDBRequest")}}-Objekt zurück und erstellt in einem separaten Thread einen Cursor über den angegebenen Schlüsselbereich, wie er durch diesen Index angeordnet ist.

Die Methode setzt die Position des Cursors auf den entsprechenden Schlüssel basierend auf der angegebenen Richtung.

Wenn der Schlüsselbereich nicht spezifiziert oder null ist, umfasst der Bereich alle Schlüssel.

> [!NOTE]
> Von `openKeyCursor()` zurückgegebene Cursor machen den referenzierten Wert nicht verfügbar, wie es [`IDBIndex.openCursor`](/de/docs/Web/API/IDBIndex/openCursor) tut.
> Dies macht das Erhalten einer Liste von Schlüsseln deutlich effizienter.

## Syntax

```js-nolint
openKeyCursor()
openKeyCursor(range)
openKeyCursor(range, direction)
```

### Parameter

- `range` {{optional_inline}}
  - : Ein Schlüssel oder {{domxref("IDBKeyRange")}}, der als Bereich des Cursors verwendet werden soll. Wenn nichts übergeben wird, wird ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objekt-Store auswählt.
- `direction` {{optional_inline}}
  - : Die [Richtung](/de/docs/Web/API/IDBCursor#constants) des Cursors. Siehe [IDBCursor-Konstanten](/de/docs/Web/API/IDBCursor#constants) für mögliche Werte.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage:

- ein {{domxref("IDBCursor")}}-Objekt, das auf den ersten Datensatz zeigt, der der angegebenen Anfrage entspricht
- `null`, wenn keine passenden Datensätze gefunden wurden.

### Ausnahmen

Diese Methode kann ein {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert für den Richtungsparameter ungültig ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

## Beispiele

Im folgenden Beispiel öffnen wir eine Transaktion und einen Objekt-Store, rufen dann den Index `lName` aus einer einfachen Kontaktdatenbank ab. Wir öffnen dann einen Schlüssel-Cursor auf dem Index mithilfe von `openKeyCursor()` - dies funktioniert genauso wie das direkte Öffnen eines Cursors auf einem `ObjectStore` mit {{domxref("IDBObjectStore.openKeyCursor")}}, außer dass die zurückgegebenen Datensätze basierend auf dem Index und nicht dem Primärschlüssel sortiert sind.

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
      console.log("Alle Nachnamen angezeigt.");
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
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
