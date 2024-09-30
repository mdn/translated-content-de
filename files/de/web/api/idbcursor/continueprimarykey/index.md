---
title: "IDBCursor: continuePrimaryKey() Methode"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continuePrimaryKey()`**-Methode der [`IDBCursor`](/de/docs/Web/API/IDBCursor) Schnittstelle bewegt den Cursor zu dem Element, dessen Schlüssel mit dem Schlüsselparameter übereinstimmt, sowie dessen Primärschlüssel mit dem Primärschlüsselparameter übereinstimmt.

Ein typischer Anwendungsfall ist das Fortsetzen der Iteration an der Stelle, an der ein vorheriger Cursor geschlossen wurde, ohne die Schlüssel einzeln vergleichen zu müssen.

Das mehrfache Aufrufen dieser Methode, bevor neue Cursordaten geladen wurden - zum Beispiel das zweimalige Aufrufen von `continuePrimaryKey()` aus demselben onsuccess-Handler - führt dazu, dass bei dem zweiten Aufruf ein `InvalidStateError` ausgelöst wird, da das got value-Flag des Cursors zurückgesetzt wurde.

Diese Methode ist nur für Cursor, die von einem Index stammen, gültig. Bei der Verwendung für Cursor, die aus einem Objektstore stammen, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
continuePrimaryKey(key, primaryKey)
```

### Parameter

- `key`
  - : Der Schlüssel, auf den der Cursor positioniert werden soll.
- `primaryKey`
  - : Der Primärschlüssel, auf den der Cursor positioniert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) eines der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüsselparameter eine der folgenden Bedingungen erfüllt:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors, und die Richtlinie des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors, und die Richtlinie dieses Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor gerade iteriert wird oder das Ende seiner Iteration erreicht hat.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Richtung des Cursors nicht `prev` oder `next` ist.

## Beispiele

So können Sie eine Iteration aller Artikel mit dem Tag `"javascript"` seit Ihrem letzten Besuch fortsetzen:

```js
let request = articleStore.index("tag").openCursor();
let count = 0;
let unreadList = [];
request.onsuccess = (event) => {
  let cursor = event.target.result;
  if (!cursor) {
    return;
  }
  let lastPrimaryKey = getLastIteratedArticleId();
  if (lastPrimaryKey > cursor.primaryKey) {
    cursor.continuePrimaryKey("javascript", lastPrimaryKey);
    return;
  }
  // update lastIteratedArticleId
  setLastIteratedArticleId(cursor.primaryKey);
  // preload 5 articles into the unread list;
  unreadList.push(cursor.value);
  if (++count < 5) {
    cursor.continue();
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
