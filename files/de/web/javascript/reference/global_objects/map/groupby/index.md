---
title: Map.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen mancher Browser wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Kompatibilitätsproblemen im Web wird sie nun als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables, indem die Werte verwendet werden, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Die endgültig zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die verwendet werden können, um das Array der Elemente in jeder Gruppe zu erhalten.

Die Methode ist hauptsächlich nützlich, wenn man Elemente gruppiert, die mit einem Objekt verbunden sind, insbesondere dann, wenn sich dieses Objekt im Laufe der Zeit ändern kann. Wenn das Objekt unveränderlich ist, könnte man es stattdessen mit einem String darstellen und Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

{{InteractiveExample("JavaScript-Demo: Map.groupBy()", "taller")}}

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
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie zum Beispiel ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben ({{Glossary("object", "object")}} oder {{Glossary("primitive", "primitive")}}), der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, die jeweils einem Array zugeordnet sind, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und dem ursprünglichen Iterable sind identisch (keine {{Glossary("deep_copy", "deep copies")}}). Änderungen an der internen Struktur der Elemente spiegeln sich sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} wider.

Diese Methode ist nützlich, wenn Sie Informationen gruppieren müssen, die mit einem bestimmten Objekt in Verbindung stehen, das sich möglicherweise im Laufe der Zeit ändern kann. Dies liegt daran, dass selbst wenn das Objekt modifiziert wird, es weiterhin als Schlüssel für die zurückgegebene `Map` funktioniert. Wenn Sie stattdessen eine String-Repräsentation für das Objekt erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Repräsentation pflegen, während sich das Objekt ändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften ändern können). Sie können kein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht. Es kann auf jedem Objekt aufgerufen werden und eine neue {{jsxref("Map")}}-Instanz wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zuerst definieren wir ein Array, das Objekte enthält, die ein Inventar verschiedener Lebensmittel repräsentieren. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objektkeys `restock` oder `sufficient` zurückgibt, abhängig davon, ob das Element `quantity < 6` hat. Das zurückgegebene `result`-Objekt ist eine `Map`, daher müssen wir `get()` mit dem Schlüssel aufrufen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein einfaches Beispiel für die [Objektdestrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `quantity`-Eigenschaft eines Objekts, das als Parameter übergeben wird, und weist es einer Variablen namens `quantity` im Funktionskörper zu. Dies ist eine sehr prägnante Art, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel zu einer `Map` kann geändert und weiterhin verwendet werden. Sie können jedoch den Schlüssel nicht neu erstellen und ihn immer noch verwenden. Aus diesem Grund ist es wichtig, dass alles, was die map verwenden muss, einen Verweis auf ihre Schlüssel behält.

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

- [Polyfill von `Map.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [es-shims Polyfill von `Map.groupBy`](https://www.npmjs.com/package/map.groupby)
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
