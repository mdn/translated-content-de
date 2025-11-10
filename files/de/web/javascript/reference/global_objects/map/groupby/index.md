---
title: Map.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen wird sie nun als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables mithilfe der Werte, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Die endgültig zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte der Testfunktion als Schlüssel, die zum Abrufen des Arrays der Elemente in jeder Gruppe verwendet werden können.

Die Methode ist hauptsächlich nützlich, wenn Elemente gruppiert werden, die mit einem Objekt verknüpft sind, insbesondere wenn sich dieses Objekt im Laufe der Zeit ändern könnte. Wenn das Objekt unveränderlich ist, könnten Sie stattdessen einen String verwenden und die Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

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
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert ({{Glossary("object", "objekt")}} oder {{Glossary("primitive", "primitiv")}}) zurückgeben, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, wobei jeder Schlüssel einem Array zugewiesen ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Callback-Funktion denselben Wert zurückgegeben hat.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und dem ursprünglichen Iterable sind dieselben (keine {{Glossary("deep_copy", "tiefe Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} widergespiegelt.

Diese Methode ist nützlich, wenn Sie Informationen gruppieren müssen, die mit einem bestimmten Objekt verknüpft sind, das sich möglicherweise im Laufe der Zeit ändert. Dies liegt daran, dass das Objekt, selbst wenn es modifiziert wird, weiterhin als Schlüssel zur zurückgegebenen `Map` funktionieren wird. Wenn Sie stattdessen eine String-Darstellung für das Objekt erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Darstellung beibehalten, während sich das Objekt ändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie dasselbe Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften ändern können). Sie können kein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht. Es kann auf jedem Objekt aufgerufen werden und eine neue {{jsxref("Map")}}-Instanz wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zuerst definieren wir ein Array, das Objekte enthält, die ein Inventar verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der unten stehende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objektschlüssel `restock` oder `sufficient` zurückgibt, abhängig davon, ob das Element `quantity < 6` hat. Das zurückgegebene `result`-Objekt ist eine `Map`, sodass wir `get()` mit dem Schlüssel aufrufen müssen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein einfaches Beispiel für die [Destrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies packt die `quantity`-Eigenschaft eines als Parameter übergebenen Objekts aus und weist sie einer Variablen namens `quantity` im Funktionskörper zu. Dies ist eine sehr prägnante Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel zu einer `Map` kann geändert und weiterhin verwendet werden. Sie können jedoch den Schlüssel nicht neu erstellen und weiterhin verwenden. Aus diesem Grund ist es wichtig, dass alles, was die Map verwenden muss, einen Bezug zu seinen Schlüsseln beibehält.

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
- [es-shims polyfill von `Map.groupBy`](https://www.npmjs.com/package/map.groupby)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
