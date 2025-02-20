---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen von manchen Browsern wurde diese Methode als `Array.prototype.groupToMap()` implementiert. Aufgrund von Webkompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Sehen Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität) nach, um weitere Details zu erfahren.

Die statische Methode **`Map.groupBy()`** gruppiert die Elemente eines gegebenen Iterables, indem sie die von einer bereitgestellten Callback-Funktion zurückgegebenen Werte verwendet. Die zurückgegebene {{jsxref("Map")}} verwendet die eindeutigen Werte der Testfunktion als Schlüssel, mit denen das Array der Elemente in jeder Gruppe abgerufen werden kann.

Die Methode ist besonders nützlich, wenn Elemente gruppiert werden, die mit einem Objekt verbunden sind, insbesondere wenn sich dieses Objekt im Laufe der Zeit ändern könnte. Wenn das Objekt unveränderlich ist, könnten Sie es stattdessen mit einem String darstellen und die Elemente mit {{jsxref("Object.groupBy()")}} gruppieren.

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
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert ({{Glossary("object", "object")}} oder {{Glossary("primitive", "primitive")}}) zurückgeben, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle verarbeitete Element.
    - `index`
      - : Der Index des aktuellen verarbeiteten Elements.

### Rückgabewert

Ein {{jsxref("Map")}}-Objekt mit Schlüsseln für jede Gruppe, die jeweils mit einem Array der Elemente der zugeordneten Gruppe verbunden sind.

## Beschreibung

`Map.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte einen Wert zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für die von `Map.groupBy()` zurückgegebene {{jsxref("Map")}} verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Callback die gleiche Rückgabe hatte.

Die Elemente in der zurückgegebenen {{jsxref("Map")}} und im ursprünglichen Iterable sind identisch (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch in der zurückgegebenen {{jsxref("Map")}} widergespiegelt.

Diese Methode ist nützlich, wenn Informationen gruppiert werden müssen, die einem bestimmten Objekt zugeordnet sind, das sich potenziell im Laufe der Zeit ändern könnte. Dies liegt daran, dass das Objekt auch nach Änderungen weiterhin als Schlüssel für die zurückgegebene `Map` funktioniert. Wenn Sie stattdessen eine String-Darstellung für das Objekt erstellen und diese als Gruppierungsschlüssel in {{jsxref("Object.groupBy()")}} verwenden, müssen Sie die Zuordnung zwischen dem ursprünglichen Objekt und seiner Darstellung pflegen, während sich das Objekt verändert.

> [!NOTE]
> Um auf die Gruppen in der zurückgegebenen `Map` zuzugreifen, müssen Sie das gleiche Objekt verwenden, das ursprünglich als Schlüssel in der `Map` verwendet wurde (obwohl Sie dessen Eigenschaften ändern können). Sie können kein anderes Objekt verwenden, das zufällig denselben Namen und dieselben Eigenschaften hat.

`Map.groupBy` liest den Wert von `this` nicht. Es kann auf beliebigen Objekten aufgerufen werden, und eine neue {{jsxref("Map")}}-Instanz wird zurückgegeben.

## Beispiele

### Verwendung von Map.groupBy()

Zuerst definieren wir ein Array mit Objekten, die ein Inventar verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code verwendet `Map.groupBy()` mit einer Pfeilfunktion, die die Objekt-Schlüssel `restock` oder `sufficient` zurückgibt, abhängig davon, ob das Element `quantity < 6` hat. Das zurückgegebene `result`-Objekt ist eine `Map`, daher müssen wir `get()` mit dem Schlüssel aufrufen, um das Array zu erhalten.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Beachten Sie, dass das Funktionsargument `{ quantity }` ein einfaches Beispiel für die [Objektdestrukturierungssyntax in Funktionsargumenten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Diese entpackt die `quantity`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen namens `quantity` im Funktionskörper zu. Das ist eine sehr prägnante Art, die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Der Schlüssel einer `Map` kann modifiziert und weiterhin verwendet werden. Sie können ihn jedoch nicht erneut erstellen und verwenden. Deshalb ist es wichtig, dass alles, was die Map verwenden muss, eine Referenz auf ihre Schlüssel behält.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
