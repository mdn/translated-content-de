---
title: "IDBCursor: continuePrimaryKey()-Methode"
short-title: continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`continuePrimaryKey()`**-Methode der {{domxref("IDBCursor")}}-Schnittstelle bewegt den Cursor zu dem Element, dessen Schlüssel mit dem Schlüsselparameter übereinstimmt und dessen Primärschlüssel mit dem Primärschlüsselparameter übereinstimmt.

Ein typischer Anwendungsfall ist es, die Iteration dort fortzusetzen, wo ein vorheriger Cursor geschlossen wurde, ohne die Schlüssel einzeln vergleichen zu müssen.

Das mehrmalige Aufrufen dieser Methode, bevor neue Cursor-Daten geladen wurden – zum Beispiel das zweimalige Aufrufen von `continuePrimaryKey()` aus demselben onsuccess-Handler – führt dazu, dass beim zweiten Aufruf ein `InvalidStateError` ausgelöst wird, da das Wert-Flag des Cursors zurückgesetzt wurde.

Diese Methode ist nur für Cursor, die von einem Index stammen, gültig. Die Verwendung für Cursor, die von einem Objekt-Store stammen, führt zu einem Fehler.

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

Diese Methode kann eine {{domxref("DOMException")}} eines der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses IDBCursors inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Schlüsselparameter eine der folgenden Bedingungen erfüllt:
    - Der Schlüssel ist kein gültiger Schlüssel.
    - Der Schlüssel ist kleiner oder gleich der Position dieses Cursors und die Richtung des Cursors ist `next` oder `nextunique`.
    - Der Schlüssel ist größer oder gleich der Position dieses Cursors und die Richtung des Cursors ist `prev` oder `prevunique`.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Cursor derzeit iteriert wird oder über sein Ende hinaus iteriert hat.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Richtung des Cursors nicht `prev` oder `next` ist.

## Beispiele

So können Sie eine Iteration aller mit `"javascript"` getaggten Artikel seit Ihrem letzten Besuch fortsetzen:

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
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
