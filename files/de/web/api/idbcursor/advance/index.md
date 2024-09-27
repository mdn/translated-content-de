---
title: "IDBCursor: advance() Methode"
short-title: advance()
slug: Web/API/IDBCursor/advance
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`advance()`**-Methode des [`IDBCursor`](/de/docs/Web/API/IDBCursor)
Interfaces legt fest, wie oft ein Cursor seine Position nach vorne verschieben soll.

## Syntax

```js-nolint
advance(count)
```

### Parameter

- `count`
  - : Die Anzahl der Schritte, die der Cursor nach vorne bewegen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert, der in den `count` Parameter übergeben wurde, null oder eine negative Zahl war.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor momentan iteriert wird oder über sein Ende hinaus iteriert hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objekt-Store ab und verwenden dann einen Cursor, um durch die Datensätze im Objekt-Store zu iterieren. Hier verwenden wir `cursor.advance(2)`, um jedes Mal 2 Stellen vorwärts zu springen, was bedeutet, dass nur jedes zweite Ergebnis angezeigt wird. `advance()` funktioniert ähnlich wie [`IDBCursor.continue`](/de/docs/Web/API/IDBCursor/continue), außer dass es erlaubt, mehrere Datensätze auf einmal zu überspringen, und nicht nur zum nächsten Datensatz zu wechseln.

Beachten Sie, dass Sie in jeder Iteration der Schleife Daten aus dem aktuellen Datensatz unter dem Cursor-Objekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel, siehe unser [IDBCursor Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
      console.log("Every other entry displayed.");
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
- Einstellen eines Schlüsselsbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
