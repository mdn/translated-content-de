---
title: "IDBKeyRange: obere Grenze () statische Methode"
short-title: obere Grenze ()
slug: Web/API/IDBKeyRange/upperBound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`upperBound()`** statische Methode der
{{domxref("IDBKeyRange")}}-Schnittstelle erstellt einen neuen Schlüsselbereich mit oberer Grenze. Standardmäßig
enthält er den oberen Endwert und ist geschlossen.

## Syntax

```js-nolint
IDBKeyRange.upperBound(upper)
IDBKeyRange.upperBound(upper, open)
```

### Parameter

- `upper`
  - : Gibt die obere Grenze des neuen Schlüsselbereichs an.
- `open` {{optional_inline}}
  - : Gibt an, ob die obere Grenze den Endwert ausschließt. Der Standardwert ist false.

### Rückgabewert

{{domxref("IDBKeyRange")}}: Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der mit dem `upper`-Parameter verknüpfte Schlüssel kein gültiger Schlüssel ist.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich mit oberer Grenze verwenden würden. Hier deklarieren wir `keyRangeValue = IDBKeyRange.upperBound("F");` — ein Bereich, der den Wert "F" und alles davor einschließt. Wir öffnen eine Transaktion (mithilfe von {{domxref("IDBTransaction")}}) und einen Objekt-Store und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, wobei `keyRangeValue` als optionaler Schlüsselbereichswert deklariert wird.

Wenn wir `IDBKeyRange.upperBound("F", true);` verwenden würden, dann schließt der Bereich "F" aus und umfasst stattdessen nur die Werte davor.

> [!NOTE]
> Für ein vollständigeres Beispiel, das Ihnen ermöglicht, mit
> dem Schlüsselbereich zu experimentieren, schauen Sie sich unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repo an
> ([sehen Sie auch die Live-Ansicht des Beispiels](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.upperBound("F");

  const transaction = db.transaction(["fThings"], "readonly");
  const objectStore = transaction.objectStore("fThings");

  objectStore.openCursor(keyRangeValue).onsuccess = (event) => {
    const cursor = event.target.result;
    if (cursor) {
      const listItem = document.createElement("li");
      listItem.textContent = `${cursor.value.fThing}, ${cursor.value.fRating}`;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Entries all displayed.");
    }
  };
}
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
- Verwendung von Cursoren: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Live-Ansicht des Beispiels](https://mdn.github.io/dom-examples/to-do-notifications/)).
