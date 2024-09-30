---
title: "IDBObjectStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, das alle Objekte im Objektstore enthält, die dem angegebenen Parameter entsprechen, oder alle Objekte im Store, wenn keine Parameter angegeben werden.

Wenn ein Wert erfolgreich gefunden wird, wird ein strukturierter Klon davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

Diese Methode führt zum gleichen Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz mit einem undefinierten Wert

Um diese Situationen auseinanderzuhalten, können Sie entweder

1. die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode mit demselben Schlüssel aufrufen. Diese Methode liefert einen Cursor, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.
2. die [`count()`](/de/docs/Web/API/IDBObjectStore/count)-Methode mit demselben Schlüssel aufrufen, die `1` zurückgibt, wenn die Reihe existiert, und `0`, wenn sie nicht existiert.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder eine [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der/die abgefragt werden soll. Wenn nichts übergeben wird, wird dies standardmäßig zu einem Schlüsselbereich, der alle Datensätze in diesem Objektstore auswählt.
- `count` {{optional_inline}}
  - : Gibt an, wie viele Werte zurückgegeben werden sollen, wenn mehr als einer gefunden wird. Wenn es kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Werte aller Datensätze, die der gegebenen Abfrage entsprechen, bis zu dem Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `count`-Parameter nicht zwischen `0` und `2^32 - 1` inklusive liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Ein Schlüsselbereich festlegen: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Änderungen an Ihren Daten vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
