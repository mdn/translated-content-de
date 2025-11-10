---
title: Object.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als die Methode `Array.prototype.group()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Object.groupBy()`** gruppiert die Elemente eines gegebenen iterierbaren Objekts entsprechend der Zeichenfolgenwerte, die durch eine bereitgestellte Callback-Funktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Zeichenfolgen dargestellt werden können. Wenn Sie Elemente mithilfe eines Schlüssels gruppieren müssen, der einen beliebigen Wert darstellt, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

{{InteractiveExample("JavaScript-Demo: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterierbares Objekt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im iterierbaren Objekt ausgeführt wird. Sie sollte einen Wert zurückgeben, der zu einem Eigenschaftsschlüssel umgewandelt werden kann (Zeichenfolge oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)), der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, jede zu einem Array zugewiesen, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem iterierbaren Objekt auf. Die Callback-Funktion sollte eine Zeichenfolge oder ein Symbol zurückgeben (Werte, die keine der Typen sind, werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), die die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Object.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und das ursprüngliche iterierbare Objekt sind identisch (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente spiegeln sich sowohl im ursprünglichen iterierbaren Objekt als auch im zurückgegebenen Objekt wider.

## Beispiele

### Verwendung von Object.groupBy()

Zuerst definieren wir ein Array, das Objekte enthält, die ein Inventar verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der untenstehende Code gruppiert die Elemente nach dem Wert ihrer `type`-Eigenschaft.

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements jedes Mal zurück, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein grundlegendes Beispiel für die [Objektdestructuring-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `type`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie im Funktionskörper einer Variablen mit dem Namen `type` zu. Dies ist eine sehr knappe Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen erstellen, die aus Werten in einer oder mehreren Eigenschaften der Elemente abgeleitet sind. Unten ist ein sehr ähnliches Beispiel, das die Elemente in `ok`- oder `restock`-Gruppen aufteilt, basierend auf dem Wert des `quantity`-Feldes.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* Result is:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Object.groupBy` in `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [es-shims Polyfill von `Object.groupBy`](https://www.npmjs.com/package/object.groupby)
- [Leitfaden zu indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
