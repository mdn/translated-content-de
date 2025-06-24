---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Das **`IDBKeyRange`**-Interface der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können aus [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore) und [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekten unter Verwendung von Schlüsseln oder einem Schlüsselbereich abgerufen werden. Sie können den Bereich mithilfe von unteren und oberen Grenzen einschränken. Zum Beispiel können Sie über alle Werte eines Schlüssels im Wertebereich von A bis Z iterieren.

Ein Schlüsselbereich kann einen einzelnen Wert oder einen Bereich mit oberen und unteren Grenzen oder Endpunkten darstellen. Wenn der Schlüsselbereich sowohl obere als auch untere Grenzen hat, ist er _begrenzt_; wenn er keine Grenzen hat, ist er _unbegrenzt_. Ein begrenzter Schlüsselbereich kann entweder offen (die Endpunkte sind ausgeschlossen) oder geschlossen (die Endpunkte sind eingeschlossen) sein. Um alle Schlüssel innerhalb eines bestimmten Bereichs abzurufen, können Sie die folgenden Codekonstruktionen verwenden:

| Bereich                           | Code                                   |
| --------------------------------- | -------------------------------------- |
| Alle Schlüssel ≥ **x**            | `IDBKeyRange.lowerBound(x)`            |
| Alle Schlüssel > **x**            | `IDBKeyRange.lowerBound(x, true)`      |
| Alle Schlüssel ≤ **y**            | `IDBKeyRange.upperBound(y)`            |
| Alle Schlüssel < **y**            | `IDBKeyRange.upperBound(y, true)`      |
| Alle Schlüssel ≥ **x** && ≤ **y** | `IDBKeyRange.bound(x, y)`              |
| Alle Schlüssel > **x** && < **y** | `IDBKeyRange.bound(x, y, true, true)`  |
| Alle Schlüssel > **x** && ≤ **y** | `IDBKeyRange.bound(x, y, true, false)` |
| Alle Schlüssel ≥ **x** && < **y** | `IDBKeyRange.bound(x, y, false, true)` |
| Der Schlüssel = **z**             | `IDBKeyRange.only(z)`                  |

Ein Schlüssel befindet sich in einem Schlüsselbereich, wenn die folgenden Bedingungen zutreffen:

- Der untere Wert des Schlüsselbereichs ist einer der folgenden:

  - `undefined`
  - Kleiner als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `lowerOpen` `false` ist.

- Der obere Wert des Schlüsselbereichs ist einer der folgenden:
  - `undefined`
  - Größer als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `upperOpen` `false` ist.

## Instanz-Eigenschaften

- [`IDBKeyRange.lower`](/de/docs/Web/API/IDBKeyRange/lower) {{ReadOnlyInline}}
  - : Untere Grenze des Schlüsselbereichs.
- [`IDBKeyRange.upper`](/de/docs/Web/API/IDBKeyRange/upper) {{ReadOnlyInline}}
  - : Obere Grenze des Schlüsselbereichs.
- [`IDBKeyRange.lowerOpen`](/de/docs/Web/API/IDBKeyRange/lowerOpen) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn der niedrige Grenzwert im Schlüsselbereich enthalten ist.
- [`IDBKeyRange.upperOpen`](/de/docs/Web/API/IDBKeyRange/upperOpen) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn der obere Grenzwert im Schlüsselbereich enthalten ist.

## Statische Methoden

- [`IDBKeyRange.bound()`](/de/docs/Web/API/IDBKeyRange/bound_static)
  - : Erstellt einen neuen Schlüsselbereich mit oberen und unteren Grenzen.
- [`IDBKeyRange.only()`](/de/docs/Web/API/IDBKeyRange/only_static)
  - : Erstellt einen neuen Schlüsselbereich, der einen einzelnen Wert enthält.
- [`IDBKeyRange.lowerBound()`](/de/docs/Web/API/IDBKeyRange/lowerBound_static)
  - : Erstellt einen neuen Schlüsselbereich mit nur einer unteren Grenze.
- [`IDBKeyRange.upperBound()`](/de/docs/Web/API/IDBKeyRange/upperBound_static)
  - : Erstellt einen neuen Schlüsselbereich mit nur einer oberen Grenze.

## Instanz-Methoden

- [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein angegebener Schlüssel innerhalb des Schlüsselbereichs liegt.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie einen Schlüsselbereich verwenden würden. Hier deklarieren wir einen `keyRangeValue` als Bereich zwischen den Werten `"A"` und `"F"`. Wir öffnen eine Transaktion (mithilfe von [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objekt-Store und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei wir `keyRangeValue` als seinen optionalen Schlüsselbereichswert deklarieren. Das bedeutet, dass der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abruft. Dieser Bereich schließt die Werte `"A"` und `"F"` ein, da wir nicht angegeben haben, dass sie offene Grenzen sein sollen. Wenn wir `IDBKeyRange.bound("A", "F", true, true);` verwenden würden, dann würde der Bereich `"A"` und `"F"` nicht einschließen, nur die dazwischenliegenden Werte.

> [!NOTE]
> Für ein vollständigeres Beispiel, mit dem Sie mit dem Schlüsselbereich experimentieren können, werfen Sie einen Blick auf unser [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)-Repo ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Transaktionen starten: [`IDBDatabase`](/de/docs/Web/API/IDBDatabase)
- Verwendung von Transaktionen: [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)
- Abrufen und Ändern Ihrer Daten: [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)
- Verwendung von Cursors: [`IDBCursor`](/de/docs/Web/API/IDBCursor)
- Referenzbeispiel: [To-do Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
