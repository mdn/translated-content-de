---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBKeyRange`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können aus {{domxref("IDBObjectStore")}} und {{domxref("IDBIndex")}} Objekten mithilfe von Schlüsseln oder einem Bereich von Schlüsseln abgerufen werden. Sie können den Bereich mit unteren und oberen Grenzen begrenzen. Zum Beispiel können Sie über alle Werte eines Schlüssels im Wertebereich A–Z iterieren.

Ein Schlüsselbereich kann einen einzelnen Wert oder einen Bereich mit oberen und unteren Grenzen oder Endpunkten sein. Wenn der Schlüsselbereich sowohl obere als auch untere Grenzen hat, ist er _begrenzt_; wenn er keine Grenzen hat, ist er _unbegrenzt_. Ein begrenzter Schlüsselbereich kann entweder offen sein (die Endpunkte sind ausgeschlossen) oder geschlossen (die Endpunkte sind eingeschlossen). Um alle Schlüssel innerhalb eines bestimmten Bereichs abzurufen, können Sie die folgenden Codekonstruktionen verwenden:

| Bereich                      | Code                                   |
| ---------------------------- | -------------------------------------- |
| Alle Schlüssel ≥ **x**       | `IDBKeyRange.lowerBound(x)`            |
| Alle Schlüssel > **x**       | `IDBKeyRange.lowerBound(x, true)`      |
| Alle Schlüssel ≤ **y**       | `IDBKeyRange.upperBound(y)`            |
| Alle Schlüssel < **y**       | `IDBKeyRange.upperBound(y, true)`      |
| Alle Schlüssel ≥ **x** && ≤ **y** | `IDBKeyRange.bound(x, y)`              |
| Alle Schlüssel > **x** &&< **y**  | `IDBKeyRange.bound(x, y, true, true)`  |
| Alle Schlüssel > **x** && ≤ **y** | `IDBKeyRange.bound(x, y, true, false)` |
| Alle Schlüssel ≥ **x** &&< **y**  | `IDBKeyRange.bound(x, y, false, true)` |
| Der Schlüssel = **z**        | `IDBKeyRange.only(z)`                  |

Ein Schlüssel befindet sich in einem Schlüsselbereich, wenn die folgenden Bedingungen erfüllt sind:

- Der untere Wert des Schlüsselbereichs ist eine der folgenden:

  - `undefined`
  - Kleiner als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `lowerOpen` `false` ist.

- Der obere Wert des Schlüsselbereichs ist eine der folgenden:

  - `undefined`
  - Größer als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `upperOpen` `false` ist.

## Instanz-Eigenschaften

- {{domxref("IDBKeyRange.lower")}} {{ReadOnlyInline}}
  - : Untere Grenze des Schlüsselbereichs.
- {{domxref("IDBKeyRange.upper")}} {{ReadOnlyInline}}
  - : Obere Grenze des Schlüsselbereichs.
- {{domxref("IDBKeyRange.lowerOpen")}} {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn der Wert der unteren Grenze im Schlüsselbereich enthalten ist.
- {{domxref("IDBKeyRange.upperOpen")}} {{ReadOnlyInline}}
  - : Gibt `false` zurück, wenn der Wert der oberen Grenze im Schlüsselbereich enthalten ist.

## Statische Methoden

- {{domxref("IDBKeyRange.bound_static", "IDBKeyRange.bound()")}}
  - : Erstellt einen neuen Schlüsselbereich mit oberen und unteren Grenzen.
- {{domxref("IDBKeyRange.only_static", "IDBKeyRange.only()")}}
  - : Erstellt einen neuen Schlüsselbereich, der einen einzelnen Wert enthält.
- {{domxref("IDBKeyRange.lowerBound_static", "IDBKeyRange.lowerBound()")}}
  - : Erstellt einen neuen Schlüsselbereich mit nur einer unteren Grenze.
- {{domxref("IDBKeyRange.upperBound_static", "IDBKeyRange.upperBound()")}}
  - : Erstellt einen neuen Schlüsselbereich mit einer oberen Grenze.

## Instanz-Methoden

- {{domxref("IDBKeyRange.includes()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein angegebener Schlüssel innerhalb des Schlüsselbereichs liegt.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir einen `keyRangeValue` als einen Bereich zwischen den Werten `"A"` und `"F"`. Wir öffnen eine Transaktion (unter Verwendung von {{domxref("IDBTransaction")}}) und einen Objektspeicher und öffnen einen Cursor mit {{domxref("IDBObjectStore.openCursor")}}, wobei wir `keyRangeValue` als optionalen Schlüsselbereichswert deklarieren. Dies bedeutet, dass der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abrufen wird. Dieser Bereich schließt die Werte `"A"` und `"F"` ein, da wir nicht angegeben haben, dass sie offene Grenzen sein sollten. Wenn wir `IDBKeyRange.bound("A", "F", true, true);` verwendet hätten, würde der Bereich nicht `"A"` und `"F"` einschließen, sondern nur die Werte dazwischen.

> [!NOTE]
> Für ein umfassenderes Beispiel, das Ihnen das Experimentieren mit Schlüsselbereichen ermöglicht, schauen Sie sich unser [IDBKeyRange-Example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) Repository an ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Starten von Transaktionen: {{domxref("IDBDatabase")}}
- Verwendung von Transaktionen: {{domxref("IDBTransaction")}}
- Abrufen und Ändern Ihrer Daten: {{domxref("IDBObjectStore")}}
- Verwendung von Cursors: {{domxref("IDBCursor")}}
- Referenzbeispiel: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
