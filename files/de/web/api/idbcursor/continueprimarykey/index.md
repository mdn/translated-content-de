---
title: "IDBCursor: continuePrimaryKey()-Methode"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
l10n:
  sourceCommit: 733c40043bfb7a55fb01644d52000149b2dab13c
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continuePrimaryKey()`**-Methode des
[`IDBCursor`](/de/docs/Web/API/IDBCursor)-Interfaces bewegt den Cursor zu dem Element, dessen Schlüssel mit dem Schlüsselparameter übereinstimmt und dessen Primärschlüssel dem Primärschlüsselparameter entspricht.

Ein typischer Anwendungsfall ist das Fortsetzen der Iteration dort, wo ein vorheriger Cursor geschlossen wurde, ohne die Schlüssel einzeln vergleichen zu müssen.

Diese Methode mehr als einmal aufzurufen, bevor neue Cursor-Daten geladen werden - zum Beispiel `continuePrimaryKey()` zweimal im selben onsuccess-Handler aufzurufen - führt dazu, dass beim zweiten Aufruf ein `InvalidStateError` geworfen wird, da das Markierungsflag für den aktuellen Wert des Cursors zurückgesetzt wurde.

Diese Methode ist nur für Cursor gültig, die von einem Index stammen. Bei Verwendung für Cursor, die von einem Objektspeicher stammen, wird ein Fehler geworfen.

## Syntax

```js-nolint
continuePrimaryKey(key, primaryKey)
```

### Parameter

- `key`
  - : Der Schlüssel, bei dem der Cursor positioniert werden soll.
- `primaryKey`
  - : Der Primärschlüssel, bei dem der Cursor positioniert werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen hervorrufen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Transaktion dieses `IDBCursor` inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Schlüsselparameter eine der folgenden Bedingungen aufweist:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors und die Richtung dieses Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn der Cursor derzeit iteriert wird oder bereits sein Ende erreicht hat.
- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Richtung des Cursors nicht `prev` oder `next` ist.

## Beispiele

So können Sie eine Iteration aller Artikel, die mit `"javascript"` getaggt sind, seit Ihrem letzten Besuch fortsetzen:

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
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
