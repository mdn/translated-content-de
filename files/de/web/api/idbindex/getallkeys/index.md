---
title: "IDBIndex: Methode getAllKeys()"
short-title: getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("IndexedDB") }}

Die **`getAllKeys()`** Methode des {{domxref("IDBIndex")}}
Interfaces ruft asynchron die Primärschlüssel aller Objekte im Index ab und setzt diese als `result` des Anforderungsobjekts.

## Syntax

```js-nolint
getAllKeys()
getAllKeys(query)
getAllKeys(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein {{domxref("IDBKeyRange")}}, das die abzurufenden Schlüssel identifiziert. Wenn dieser Wert null oder nicht vorhanden ist, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, ruft der Browser nur das erste Element ab. Wenn er niedriger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}
    Ausnahme ausgelöst.

### Rückgabewert

Ein {{domxref("IDBRequest")}} Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}} Eigenschaft des Anforderungsobjekts ein {{jsxref("Array")}} der Schlüssel für alle Datensätze, die der gegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} inaktiv ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

Eine {{jsxref("TypeError")}} Ausnahme wird ausgelöst, wenn der `count` Parameter nicht zwischen `0` und `2^32 - 1` liegt.

## Beispiele

```js
const myIndex = objectStore.index("index");
const getAllKeysRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = () => {
  console.log(getAllKeysRequest.result);
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
- Einstellen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
