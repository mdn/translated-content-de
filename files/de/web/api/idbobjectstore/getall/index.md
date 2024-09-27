---
title: "IDBObjectStore: Methode getAll()"
short-title: getAll()
slug: Web/API/IDBObjectStore/getAll
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ APIRef("IndexedDB") }}

Die **`getAll()`**-Methode der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)-Schnittstelle gibt ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt zurück, das alle Objekte im Objekt-Store enthält, die dem angegebenen Parameter entsprechen, oder alle Objekte im Store, wenn keine Parameter angegeben sind.

Wenn ein Wert erfolgreich gefunden wird, wird eine strukturelle Kopie davon erstellt und als Ergebnis des Anfrageobjekts gesetzt.

Diese Methode liefert dasselbe Ergebnis für:

- einen Datensatz, der nicht in der Datenbank existiert
- einen Datensatz, der einen undefinierten Wert hat

Um diese Situationen zu unterscheiden, können Sie entweder:

1. die [`openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor)-Methode mit demselben Schlüssel aufrufen. Diese Methode stellt einen Cursor bereit, wenn der Datensatz existiert, und keinen Cursor, wenn er nicht existiert.
2. die [`count()`](/de/docs/Web/API/IDBObjectStore/count)-Methode mit demselben Schlüssel aufrufen, die `1` zurückgibt, wenn die Zeile existiert, und `0`, wenn sie nicht existiert.

## Syntax

```js-nolint
getAll()
getAll(query)
getAll(query, count)
```

### Parameter

- `query` {{optional_inline}}
  - : Ein Schlüssel oder [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange), der abgefragt werden soll. Wenn nichts übergeben wird, wird dies standardmäßig auf einen Schlüsselbereich gesetzt, der alle Datensätze in diesem Objekt-Store auswählt.
- `count` {{optional_inline}}
  - : Gibt die Anzahl der zurückzugebenden Werte an, wenn mehr als einer gefunden wird. Wenn es kleiner als `0` oder größer als `2^32 - 1` ist, wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

### Rückgabewert

Ein [`IDBRequest`](/de/docs/Web/API/IDBRequest)-Objekt, auf dem nachfolgende Ereignisse im Zusammenhang mit dieser Operation ausgelöst werden.

Wenn die Operation erfolgreich ist, ist der Wert der [`result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft der Anfrage ein {{jsxref("Array")}} der Werte aller Datensätze, die der angegebenen Abfrage entsprechen, bis zum Wert von `count`, wenn `count` angegeben wurde.

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `TransactionInactiveError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Transaktion dieses [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) inaktiv ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der bereitgestellte Schlüssel oder Schlüsselbereich einen ungültigen Schlüssel enthält oder null ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) gelöscht oder entfernt wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `count`-Parameter nicht zwischen `0` und `2^32 - 1` eingeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Festlegung eines Schlüsselbereichs: [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange)
- Abrufen und Änderungen an Ihren Daten vornehmen: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Beispiel anzeigen](https://mdn.github.io/dom-examples/to-do-notifications/)).
