---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("IndexedDB")}} {{AvailableInWorkers}}

Die **`IDBKeyRange`**-Schnittstelle der [IndexedDB API](/de/docs/Web/API/IndexedDB_API) repräsentiert ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können von [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore)- und [`IDBIndex`](/de/docs/Web/API/IDBIndex)-Objekten mittels Schlüsseln oder einem Schlüsselspektrum abgerufen werden. Sie können den Bereich durch untere und obere Grenzen einschränken. Zum Beispiel können Sie über alle Werte eines Schlüssels im Wertebereich A–Z iterieren.

Ein Schlüsselspektrum kann ein einzelner Wert oder ein Bereich mit oberen und unteren Grenzen oder Endpunkten sein. Wenn das Schlüsselspektrum sowohl obere als auch untere Grenzen hat, dann ist es _begrenzt_; wenn es keine Grenzen hat, ist es _unbegrenzt_. Ein begrenztes Schlüsselspektrum kann entweder offen sein (die Endpunkte sind ausgeschlossen) oder geschlossen (die Endpunkte sind eingeschlossen). Um alle Schlüssel innerhalb eines bestimmten Bereichs abzurufen, können Sie die folgenden Codestücke verwenden:

| Bereich                           | Code                                   |
| --------------------------------- | -------------------------------------- |
| Alle Schlüssel ≥ **x**            | `IDBKeyRange.lowerBound(x)`            |
| Alle Schlüssel > **x**            | `IDBKeyRange.lowerBound(x, true)`      |
| Alle Schlüssel ≤ **y**            | `IDBKeyRange.upperBound(y)`            |
| Alle Schlüssel < **y**            | `IDBKeyRange.upperBound(y, true)`      |
| Alle Schlüssel ≥ **x** && ≤ **y** | `IDBKeyRange.bound(x, y)`              |
| Alle Schlüssel > **x** &&< **y**  | `IDBKeyRange.bound(x, y, true, true)`  |
| Alle Schlüssel > **x** && ≤ **y** | `IDBKeyRange.bound(x, y, true, false)` |
| Alle Schlüssel ≥ **x** &&< **y**  | `IDBKeyRange.bound(x, y, false, true)` |
| Der Schlüssel = **z**             | `IDBKeyRange.only(z)`                  |

Ein Schlüssel befindet sich in einem Schlüsselspektrum, wenn die folgenden Bedingungen wahr sind:

- Der untere Wert des Schlüsselspektrums ist einer der folgenden:

  - `undefined`
  - Kleiner als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `lowerOpen` `false` ist.

- Der obere Wert des Schlüsselspektrums ist einer der folgenden:

  - `undefined`
  - Größer als der Schlüsselwert
  - Gleich dem Schlüsselwert, wenn `upperOpen` `false` ist.

## Instanz-Eigenschaften

- [`IDBKeyRange.lower`](/de/docs/Web/API/IDBKeyRange/lower) {{ReadOnlyInline}}
  - : Untere Grenze des Schlüsselspektrums.
- [`IDBKeyRange.upper`](/de/docs/Web/API/IDBKeyRange/upper) {{ReadOnlyInline}}
  - : Obere Grenze des Schlüsselspektrums.
- [`IDBKeyRange.lowerOpen`](/de/docs/Web/API/IDBKeyRange/lowerOpen) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn der untere Grenzwert im Schlüsselspektrum enthalten ist.
- [`IDBKeyRange.upperOpen`](/de/docs/Web/API/IDBKeyRange/upperOpen) {{ReadOnlyInline}}
  - : Gibt false zurück, wenn der obere Grenzwert im Schlüsselspektrum enthalten ist.

## Statische Methoden

- [`IDBKeyRange.bound()`](/de/docs/Web/API/IDBKeyRange/bound_static)
  - : Erstellt ein neues Schlüsselspektrum mit oberen und unteren Grenzen.
- [`IDBKeyRange.only()`](/de/docs/Web/API/IDBKeyRange/only_static)
  - : Erstellt ein neues Schlüsselspektrum, das einen einzelnen Wert enthält.
- [`IDBKeyRange.lowerBound()`](/de/docs/Web/API/IDBKeyRange/lowerBound_static)
  - : Erstellt ein neues Schlüsselspektrum mit nur einer unteren Grenze.
- [`IDBKeyRange.upperBound()`](/de/docs/Web/API/IDBKeyRange/upperBound_static)
  - : Erstellt ein neues Schlüsselspektrum mit einer oberen Grenze.

## Instanz-Methoden

- [`IDBKeyRange.includes()`](/de/docs/Web/API/IDBKeyRange/includes)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein bestimmter Schlüssel innerhalb des Schlüsselspektrums liegt.

## Beispiele

Das folgende Beispiel veranschaulicht, wie Sie ein Schlüsselspektrum verwenden würden. Hier deklarieren wir ein `keyRangeValue` als einen Bereich zwischen den Werten `"A"` und `"F"`. Wir öffnen eine Transaktion (mit [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)) und einen Objektspeicher und öffnen einen Cursor mit [`IDBObjectStore.openCursor`](/de/docs/Web/API/IDBObjectStore/openCursor), wobei `keyRangeValue` als optionales Schlüsselspektrum deklariert wird. Dies bedeutet, dass der Cursor nur Datensätze mit Schlüsseln innerhalb dieses Bereichs abruft. Dieser Bereich schließt die Werte `"A"` und `"F"` ein, da wir nicht deklariert haben, dass sie offene Grenzen sein sollen.
Wenn wir `IDBKeyRange.bound("A", "F", true, true);` verwenden würden, dann würde der Bereich `"A"` und `"F"` nicht einschließen, nur die Werte dazwischen.

> [!NOTE]
> Ein vollständigeres Beispiel, das Ihnen ermöglicht, mit dem Schlüsselspektrum zu experimentieren, finden Sie in unserem [IDBKeyRange-Beispiel](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange)-Repo ([sehen Sie sich das Beispiel auch live an](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/).)

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
- Referenzbeispiel: [To-do-Benachrichtigungen](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).
