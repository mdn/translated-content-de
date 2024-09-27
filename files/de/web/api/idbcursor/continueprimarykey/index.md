---
title: "IDBCursor: continuePrimaryKey() Methode"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continuePrimaryKey()`** Methode der [`IDBCursor`](/de/docs/Web/API/IDBCursor) Schnittstelle bewegt den Cursor zu dem Element, dessen Schlüssel mit dem Schlüsselparameter übereinstimmt, sowie dessen Primärschlüssel mit dem Primärschlüsselparameter übereinstimmt.

Ein typischer Anwendungsfall ist es, die Iteration dort wieder aufzunehmen, wo ein vorheriger Cursor geschlossen wurde, ohne die Schlüssel einzeln vergleichen zu müssen.

Mehrfaches Aufrufen dieser Methode, bevor neue Cursordaten geladen wurden - beispielsweise das zweimalige Aufrufen von `continuePrimaryKey()` im selben onsuccess-Handler - führt dazu, dass beim zweiten Aufruf ein `InvalidStateError` ausgelöst wird, da das got value-Flag des Cursors zurückgesetzt wurde.

Diese Methode ist nur für Cursor gültig, die von einem Index stammen. Die Verwendung für Cursor, die aus einem Object Store stammen, führt zu einem Fehler.

## Syntax

```js-nolint
continuePrimaryKey(key, primaryKey)
```

### Parameter

- `key`
  - : Der Schlüssel, um den Cursor zu positionieren.
- `primaryKey`
  - : Der Primärschlüssel, um den Cursor zu positionieren.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Schlüsselparameter eine der folgenden Bedingungen erfüllt:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors und die Richtung des Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Cursor derzeit iteriert oder über sein Ende hinaus iteriert wurde.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Richtung des Cursors nicht `prev` oder `next` ist.

## Beispiele

Hier ist, wie Sie die Iteration aller Artikel, die mit `"javascript"` getaggt sind, seit Ihrem letzten Besuch fortsetzen können:

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
- Starten von Transaktionen: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
