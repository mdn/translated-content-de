---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als `Array.prototype.group()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Überprüfen Sie die [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität) für Details.

Die statische Methode **`Object.groupBy()`** gruppiert die Elemente eines gegebenen Iterables entsprechend den Zeichenfolgenwerten, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Zeichenfolgen dargestellt werden können. Wenn Sie Elemente mit einem Schlüssel gruppieren müssen, der irgendein beliebiger Wert ist, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

{{InteractiveExample("JavaScript Demo: Object.groupBy()", "taller")}}

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
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (Zeichenfolge oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann und die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein [Null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, jeweils zu einem Array zugeordnet, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte eine Zeichenfolge oder ein Symbol zurückgeben (andere Typen werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), das die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Object.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im ursprünglichen Iterable sind dieselben (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch im zurückgegebenen Objekt reflektiert.

## Beispiele

### Verwendung von Object.groupBy()

Zuerst definieren wir ein Array, das Objekte enthält, die ein Inventar verschiedener Lebensmittel repräsentieren. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code gruppiert die Elemente nach dem Wert ihrer `type`-Eigenschaft.

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

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements zurück, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein grundlegendes Beispiel für [Destrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `type`-Eigenschaft eines Objekts, das als Parameter übergeben wird, und weist sie einer Variablen namens `type` im Funktionskörper zu.
Dies ist eine sehr prägnante Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen basierend auf Werten in einer oder mehreren Eigenschaften der Elemente erstellen. Unten ist ein sehr ähnliches Beispiel, das die Elemente in `ok` oder `restock`-Gruppen basierend auf dem Wert des `quantity`-Feldes einteilt.

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
