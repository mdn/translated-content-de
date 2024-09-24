---
title: "IDBIndex: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBIndex/getAll
l10n:
  sourceCommit: 19082e4db1735e6789eda6987a47d5ecc05791d3
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode des {{domxref("IDBIndex")}}-Interfaces ruft alle Objekte ab, die sich im Index befinden.

Es gibt einen Leistungseinbußen, wenn Sie die `value`-Eigenschaft eines Cursors betrachten, da das Objekt verzögert erstellt wird. Um eine Funktion wie `getAll()` zu verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie sich nur dafür interessieren, jeden der Schlüssel zu betrachten, ist es effizienter, einen [Cursor](/de/docs/Web/API/IDBCursor) zu verwenden. Wenn Sie jedoch versuchen, ein Array aller Objekte in einem Objektspeicher zu erhalten, sollten Sie `getAll()` verwenden.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein {{domxref("IDBKeyRange")}}, der die zu holenden Datensätze identifiziert. Wenn dieser Wert null oder nicht vorhanden ist, wird der Browser einen unbegrenzten Schlüsselbereich verwenden.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, wird der Browser nur die abgefragten Datensätze abrufen. Wenn es niedriger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Werte aller Datensätze, die mit der gegebenen Abfrage übereinstimmen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} von folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBIndex")}} nicht aktiv ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("IDBIndex")}} gelöscht oder entfernt wurde.

Eine {{jsxref("TypeError")}}-Ausnahme wird ausgelöst, wenn sich der `count`-Parameter nicht zwischen `0` und `2^32 - 1` (einschließlich) befindet.

## Beispiele

```js
const myIndex = objectStore.index("index");
const getAllRequest = myIndex.getAll();
getAllRequest.onsuccess = () => {
  console.log(getAllRequest.result);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Schlüsselbereichs: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursorn: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Das Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
