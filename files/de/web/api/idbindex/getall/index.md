---
title: "IDBIndex: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBIndex/getAll
l10n:
  sourceCommit: 19082e4db1735e6789eda6987a47d5ecc05791d3
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Schnittstelle ruft alle Objekte ab, die sich im Index befinden.

Es gibt einen Leistungskostenfaktor beim Betrachten der `value`-Eigenschaft eines Cursors, da das Objekt verzögert erstellt wird. Um eine Funktion wie `getAll()` zu verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie sich zum Beispiel nur dafür interessieren, jeden der Schlüssel anzusehen, ist es effizienter, einen [Cursor](/de/docs/Web/API/IDBCursor) zu verwenden. Wenn Sie jedoch versuchen, ein Array aller Objekte in einem Object Store zu erhalten, sollten Sie `getAll()` verwenden.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze identifiziert. Wenn dieser Wert null oder nicht angegeben ist, verwendet der Browser einen ungebundenen Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Überschreitet dieser Wert die Anzahl der Datensätze in der Abfrage, wird der Browser nur die abgefragten Datensätze abrufen. Wenn er niedriger als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse in Bezug auf diese Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der `result`-Eigenschaft der Anforderung ein {{jsxref("Array")}} der Werte aller Datensätze, die der gegebenen Abfrage entsprechen, bis zum Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) nicht aktiv ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.

Eine {{jsxref("TypeError")}}-Ausnahme wird ausgelöst, wenn der `count`-Parameter nicht zwischen `0` und `2^32 - 1` (einschließlich) liegt.

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegen eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursorn: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
