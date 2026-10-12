---
title: "IDBIndex: Methode getAll()"
short-title: getAll()
slug: Web/API/IDBIndex/getAll
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{ APIRef("IndexedDB") }}

Die Methode **`getAll()`** der Schnittstelle [`IDBIndex`](/de/docs/Web/API/IDBIndex) ruft alle Objekte ab, die sich im Index befinden.

Der Zugriff auf die Eigenschaft `value` eines Cursors ist mit einem Leistungsaufwand verbunden, da das Objekt erst bei Bedarf erstellt wird. Um eine Funktion wie `getAll()` zu verwenden, muss der Browser alle Objekte auf einmal erstellen. Wenn Sie beispielsweise nur die einzelnen Schlüssel betrachten möchten, ist die Verwendung eines [Cursors](/de/docs/Web/API/IDBCursor) effizienter. Wenn Sie hingegen ein Array aller Objekte in einem Object Store abrufen möchten, sollten Sie `getAll()` verwenden.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
getAll(options)

```

### Parameter

Die Methode `getAll()` kann separate Parameter oder ein einzelnes Optionsobjekt entgegennehmen, das die Parameter als Eigenschaften enthält.

Die Parameter können Folgendes umfassen:

- `query` {{optional_inline}}
  - : Ein Schlüssel oder ein [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der die abzurufenden Datensätze bestimmt. Wenn dieser Wert `null` ist oder nicht angegeben wird, verwendet der Browser einen unbegrenzten Schlüsselbereich.
- `count` {{optional_inline}}
  - : Die Anzahl der zurückzugebenden Datensätze. Wenn dieser Wert die Anzahl der Datensätze in der Abfrage übersteigt, ruft der Browser nur die abgefragten Datensätze ab. Wenn er kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

Wenn ein Objektparameter angegeben wird, kann er folgende Eigenschaften enthalten:

- `query` {{optional_inline}}
  - : Siehe die obige Definition von [`query`](#query).
- `count` {{optional_inline}}
  - : Siehe die obige Definition von [`count`](#count).
- `direction` {{optional_inline}}
  - : Ein Aufzählungswert, der die Richtung angibt, in der die Objekte durchlaufen werden. Mögliche Werte sind:
    - `next`
      - : Die Objekte werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Dies ist der Standardwert.
    - `nextunique`
      - : Die Objekte werden vom Anfang aus in aufsteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit mehreren Objekten wird nur das Objekt geliefert, das dem Anfang am nächsten liegt.
    - `prev`
      - : Die Objekte werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen.
    - `prevunique`
      - : Die Objekte werden vom Ende aus in absteigender Schlüsselreihenfolge durchlaufen. Für jeden Schlüssel mit mehreren Objekten wird nur das Objekt geliefert, das dem Anfang am nächsten liegt.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit diesem Vorgang ausgelöst werden.

Wenn der Vorgang erfolgreich ist, enthält die Eigenschaft [`result`](/de/docs/Web/API/IDBRequest/result) der Anfrage ein {{jsxref("Array")}} mit den Werten aller Datensätze, die der angegebenen Abfrage entsprechen, gegebenenfalls begrenzt durch `count`.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBIndex`](/de/docs/Web/API/IDBIndex) inaktiv ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBIndex`](/de/docs/Web/API/IDBIndex) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter [`count`](#count) nicht zwischen `0` und `2^32 - 1` einschließlich liegt.

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

- [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Transaktionen verwenden: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Einen Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Daten abrufen und ändern: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Cursor verwenden: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
