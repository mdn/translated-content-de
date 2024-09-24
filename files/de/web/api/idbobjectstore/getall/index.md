---
title: "IDBObjectStore: getAll()-Methode"
short-title: getAll()
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der {{domxref("IDBObjectStore")}}-Schnittstelle gibt ein {{domxref("IDBRequest")}}-Objekt zurück, das alle Objekte im Objekt-Store enthält, die dem angegebenen Parameter entsprechen, oder alle Objekte im Store, wenn keine Parameter angegeben werden.

Wenn ein Wert erfolgreich gefunden wird, wird ein strukturierter Klon davon erstellt und als Ergebnis des Anforderungsobjekts festgelegt.

Diese Methode produziert dasselbe Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, rufen Sie entweder

1. die Methode {{domxref("IDBObjectStore.openCursor","openCursor()")}} mit demselben Schlüssel auf. Diese Methode stellt einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.
2. die Methode {{domxref("IDBObjectStore.count","count()")}} mit demselben Schlüssel auf, die `1` zurückgibt, wenn die Zeile existiert, und `0`, wenn sie nicht existiert.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder {{domxref("IDBKeyRange")}}, der abgefragt werden soll. Wenn nichts übergeben wird, wird standardmäßig ein Schlüsselbereich verwendet, der alle Datensätze in diesem Objekt-Store auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als einer gefunden wird. Wenn dieser Wert kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein {{domxref("IDBRequest")}}-Objekt, an dem die nachfolgenden Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der {{domxref("IDBRequest.result", "result")}}-Eigenschaft des Anforderungsobjekts ein {{jsxref("Array")}} der Werte aller Datensätze, die der gegebenen Abfrage entsprechen, bis zu dem Wert von `count`, falls `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine {{domxref("DOMException")}} der folgenden Typen auslösen:

- `TransactionInactiveError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Transaktion dieses {{domxref("IDBObjectStore")}} inaktiv ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das {{domxref("IDBObjectStore")}} gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `count`-Parameter nicht zwischen `0` und `2^32 - 1` liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Festlegen eines Bereichs von Schlüsseln: {{domxref("IDBKeyRange")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
