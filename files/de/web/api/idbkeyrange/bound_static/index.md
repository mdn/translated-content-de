---
title: "IDBKeyRange: bound() statische Methode"
short-title: bound()
slug: Web/API/IDBKeyRange/bound_static
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

Die **`bound()`** statische Methode der {{domxref("IDBKeyRange")}}-Schnittstelle erzeugt einen neuen Schlüsselbereich mit den angegebenen oberen und unteren Grenzen. Die Grenzen können offen sein (das heißt, die Grenzen schließen die Endpunktwerte aus) oder geschlossen (das heißt, die Grenzen schließen die Endpunktwerte ein). Standardmäßig sind die Grenzen geschlossen.

## Syntax

```js-nolint
IDBKeyRange.bound(lower, upper)
IDBKeyRange.bound(lower, upper, lowerOpen)
IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen)
```

### Parameter

- `lower`
  - : Gibt die untere Grenze des neuen Schlüsselbereichs an.
- `upper`
  - : Gibt die obere Grenze des neuen Schlüsselbereichs an.
- `lowerOpen` {{optional_inline}}
  - : Gibt an, ob die untere Grenze den Endpunktwert ausschließt. Der Standardwert ist false.
- `upperOpen` {{optional_inline}}
  - : Gibt an, ob die obere Grenze den Endpunktwert ausschließt. Der Standardwert ist false.

### Rückgabewert

{{domxref("IDBKeyRange")}}: Der neu erstellte Schlüsselbereich.

### Ausnahmen

- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine der folgenden Bedingungen erfüllt ist:
    - Die Parameter lower oder upper hatten keinen gültigen Schlüssel.
    - Der untere Schlüssel ist größer als der obere Schlüssel.
    - Der untere und der obere Schlüssel stimmen überein und eine der Grenzen ist offen.

## Beispiele

Das folgende Beispiel zeigt, wie Sie einen gebundenen Schlüsselbereich verwenden würden. Hier definieren wir `keyRangeValue = IDBKeyRange.bound("A", "F");` — ein Bereich zwischen den Werten "A" und "F". Wir öffnen eine Transaktion (mit {{domxref("IDBTransaction")}}) und ein Objekt-Store, und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, wobei wir `keyRangeValue` als den optionalen Schlüsselbereichswert deklarieren. Das bedeutet, dass der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abrufen wird. Dieser Bereich schließt die Werte "A" und "F" ein, da wir nicht angegeben haben, dass sie offene Grenzen sein sollen. Wenn wir `IDBKeyRange.bound("A", "F", true, true);` verwendet hätten, würde der Bereich `"A"` und `"F"` nicht einschließen, sondern nur die Werte dazwischen.

> [!NOTE]
> Für ein umfassenderes Beispiel, das Ihnen ermöglicht, mit dem Schlüsselbereich zu experimentieren, werfen Sie einen Blick auf das idbkeyrange-Verzeichnis im [indexeddb-examples](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository. (Sehen Sie sich das Beispiel auch [live](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/) an.)

```js
function displayData() {
  const keyRangeValue = IDBKeyRange.bound("A", "F");

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
      console.log("Alle Einträge angezeigt.");
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
- Einen Bereich von Schlüsseln festlegen: {{domxref("IDBKeyRange")}}
- Ihre Daten abrufen und ändern: {{domxref("IDBObjectStore")}}
- Cursors verwenden: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Sehen Sie das Beispiel live](https://mdn.github.io/dom-examples/to-do-notifications/)).
