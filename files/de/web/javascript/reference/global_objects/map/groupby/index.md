---
title: Map.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Problemen mit der Webkompatibilität ist sie jetzt als statische Methode implementiert. Weitere Informationen finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines übergebenen iterierbaren Objekts anhand der Werte, die eine bereitgestellte Callback-Funktion zurückgibt. Die zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Rückgabewerte der Funktion als Schlüssel. Über diese Schlüssel lässt sich das Array der Elemente in der jeweiligen Gruppe abrufen.

Die Methode ist besonders nützlich, wenn Elemente anhand eines Objekts gruppiert werden sollen, das sich im Laufe der Zeit ändern kann. Wenn das Objekt unveränderlich ist, können Sie es stattdessen als String darstellen und die Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

{{InteractiveExample("JavaScript Demo: Map.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Syntax

```js-nolint
Map.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (z. B. ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element des iterierbaren Objekts ausgeführt wird. Sie sollte einen Wert ({{Glossary("object", "Objekt")}} oder {{Glossary("primitive", "primitiven Wert")}}) zurückgeben, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit einem Schlüssel für jede Gruppe. Jedem Schlüssel ist ein Array mit den Elementen der zugehörigen Gruppe zugeordnet.

## Beschreibung

`Map.groupBy()` ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element eines iterierbaren Objekts auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des jeweiligen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jedem Schlüssel ist ein Array mit allen Elementen zugeordnet, für die die Callback-Funktion denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und im ursprünglichen iterierbaren Objekt sind dieselben (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente sind daher sowohl im ursprünglichen iterierbaren Objekt als auch in der zurückgegebenen {{jsxref("Map")}} sichtbar.

Diese Methode ist nützlich, wenn Sie Informationen anhand eines bestimmten Objekts gruppieren müssen, das sich im Laufe der Zeit ändern kann. Auch nach einer Änderung kann das Objekt weiterhin als Schlüssel in der zurückgegebenen `Map` verwendet werden. Wenn Sie stattdessen eine String-Darstellung des Objekts erstellen und diese mit {{jsxref("Object.groupBy()")}} als Gruppierungsschlüssel verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Darstellung bei Änderungen am Objekt selbst aktualisieren.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (seine Eigenschaften dürfen Sie jedoch ändern). Ein anderes Objekt mit zufällig demselben Namen und denselben Eigenschaften funktioniert nicht.

`Map.groupBy` liest den Wert von `this` nicht. Die Methode kann für ein beliebiges Objekt aufgerufen werden und gibt eine neue {{jsxref("Map")}}-Instanz zurück.

## Beispiele

### Map.groupBy() verwenden

Zunächst definieren wir ein Array mit Objekten, die einen Bestand verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die je nachdem, ob für das Element `quantity < 6` gilt, den Objektschlüssel `restock` oder `sufficient` zurückgibt. Das zurückgegebene Objekt `result` ist eine `Map`. Deshalb müssen wir `get()` mit dem jeweiligen Schlüssel aufrufen, um das Array abzurufen.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Das Funktionsargument `{ quantity }` ist ein einfaches Beispiel für die [Destrukturierung von Objekten in Funktionsargumenten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter). Dabei wird die Eigenschaft `quantity` eines als Parameter übergebenen Objekts entnommen und innerhalb der Funktion einer Variablen namens `quantity` zugewiesen. So können Sie innerhalb einer Funktion auf knappe Weise auf die relevanten Werte der Elemente zugreifen.

Ein Schlüssel einer `Map` kann verändert und weiterhin verwendet werden. Er kann jedoch nicht neu erstellt und dann als derselbe Schlüssel verwendet werden. Deshalb ist es wichtig, dass Code, der die Map verwenden muss, Referenzen auf ihre Schlüssel behält.

```js
// The key can be modified and still used
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// A new key can't be used, even if it has the same structure!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Map.groupBy` in `core-js`](https://core-js.io/docs/features/ecmascript/collections#h-map)
- [Polyfill für `Map.groupBy` von es-shims](https://www.npmjs.com/package/map.groupby)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
