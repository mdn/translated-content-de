---
title: "IDBCursor: advance()-Methode"
short-title: advance()
slug: Web/API/IDBCursor/advance
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`advance()`**-Methode der {{domxref("IDBCursor")}}-Schnittstelle legt fest, wie oft ein Cursor seine Position vorwärts bewegen soll.

## Syntax

```js-nolint
advance(count)
```

### Parameter

- `count`
  - : Die Anzahl der Schritte, um die der Cursor vorwärts bewegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann einen {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert, der in den `count`-Parameter übergeben wurde, null oder eine negative Zahl war.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Cursor derzeit iteriert wird oder sein Ende bereits überschritten hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um durch die Datensätze im Objekt-Store zu iterieren. Hier verwenden wir `cursor.advance(2)`, um jedes Mal 2 Positionen nach vorne zu springen, was bedeutet, dass nur jedes zweite Ergebnis angezeigt wird. `advance()` funktioniert ähnlich wie {{domxref("IDBCursor.continue")}}, mit dem Unterschied, dass Sie mehrere Datensätze auf einmal überspringen können, anstatt immer nur zum nächsten Datensatz zu gehen.

Beachten Sie, dass Sie in jeder Iteration der Schleife die Daten des aktuellen Datensatzes unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel siehe unser [IDBCursor-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function advanceResult() {
  list.textContent = "";
  const transaction = db.transaction(["rushAlbumList"], "readonly");
  const objectStore = transaction.objectStore("rushAlbumList");

  objectStore.openCursor().onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.albumTitle}, ${cursor.value.year}`;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log("Jeder zweite Eintrag angezeigt.");
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
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
