---
title: "IDBCursor: advance()-Methode"
short-title: advance()
slug: Web/API/IDBCursor/advance
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`advance()`**-Methode der [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Schnittstelle legt fest, wie oft ein Cursor seine Position nach vorne verschieben soll.

## Syntax

```js-nolint
advance(count)
```

### Parameter

- `count`
  - : Die Anzahl der Schritte, um die der Cursor nach vorne bewegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses `IDBCursor` inaktiv ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der übergebene Wert im Parameter `count` null oder eine negative Zahl war.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor derzeit iteriert wird oder über sein Ende hinaus iteriert hat.

## Beispiele

In diesem einfachen Fragment erstellen wir eine Transaktion, rufen einen Objektspeicher ab und verwenden dann einen Cursor, um die Datensätze im Objektspeicher zu durchlaufen. Hier verwenden wir `cursor.advance(2)`, um jedes Mal 2 Plätze vorzuspringen, was bedeutet, dass nur jedes zweite Ergebnis angezeigt wird. `advance()` funktioniert ähnlich wie [`IDBCursor.continue`](/de/docs/Web/API/IDBCursor/continue), ermöglicht jedoch das Springen über mehrere Datensätze gleichzeitig, anstatt immer nur zum nächsten Datensatz zu gehen.

Beachten Sie, dass Sie in jeder Schleifeniteration Daten aus dem aktuellen Datensatz unter dem Cursorobjekt mit `cursor.value.foo` abrufen können. Für ein vollständiges funktionierendes Beispiel, siehe unser [Beispiel für IDBCursor](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
