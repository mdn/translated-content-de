---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen von bestimmten Browsern wurde diese Methode als Methode `Array.prototype.group()` implementiert. Aufgrund von Web-Kompatibilitätsproblemen ist sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **`Object.groupBy()`** statische Methode gruppiert die Elemente eines gegebenen Iterables gemäß den String-Werten, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Strings dargestellt werden können. Wenn Sie Elemente mithilfe eines Schlüssels gruppieren müssen, der einen beliebigen Wert darstellt, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein [`Null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, jede zugewiesen zu einem Array, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn` Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte einen String oder ein Symbol zurückgeben (Werte, die keine dieser Typen sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), die die Gruppe des zugehörigen Elements anzeigt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Object.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Callback denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im ursprünglichen Iterable sind dieselben (keine {{Glossary("deep_copy", "Tiefenkopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch im zurückgegebenen Objekt reflektiert.

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

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements jedes Mal zurück, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein einfaches Beispiel für [Destrukturierungssyntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `type`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen namens `type` im Funktionskörper zu. Dies ist eine sehr präzise Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen aus den Werten in einer oder mehreren Eigenschaften der Elemente ableiten. Unten ist ein sehr ähnliches Beispiel, das die Artikel in `ok` oder `restock` Gruppen einteilt, basierend auf dem Wert des `quantity` Feldes.

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
- [Indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
