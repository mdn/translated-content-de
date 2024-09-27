---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als Methode `Array.prototype.group()` implementiert. Aufgrund von Webkompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **`Object.groupBy()`**-statische Methode gruppiert die Elemente eines gegebenen Iterables entsprechend den von einer bereitgestellten Callback-Funktion zurückgegebenen Zeichenkettenwerten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Zeichenketten dargestellt werden können. Wenn Sie Elemente nach einem Schlüssel gruppieren müssen, der einen beliebigen Wert hat, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (Zeichenkette oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann und die Gruppe des aktuellen Elements anzeigt. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein [Objekt mit null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, wobei jede einem Array mit den Elementen der zugehörigen Gruppe zugewiesen ist.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion für jedes Element eines Iterables einmal auf. Die Callback-Funktion sollte eine Zeichenkette oder ein Symbol zurückgeben (Werte, die kein solcher Typ sind, werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), die die Gruppe des zugehörigen Elements anzeigen. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Map.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Callback-Funktion denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im ursprünglichen Iterable sind die gleichen (keine [Tiefenkopien](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch im zurückgegebenen Objekt widergespiegelt.

## Beispiele

### Verwendung von Object.groupBy()

Zuerst definieren wir ein Array, das Objekte repräsentiert, die ein Inventar verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

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

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements zurück, jedes Mal, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein einfaches Beispiel für die [Destrukturierungssyntax von Objekten für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `type`-Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer im Funktionskörper benannten Variablen `type` zu. Dies ist eine sehr knappe Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen erstellen, die aus Werten in einer oder mehreren Eigenschaften der Elemente abgeleitet sind. Unten ist ein sehr ähnliches Beispiel, das die Artikel in `ok`- oder `restock`-Gruppen aufteilt, basierend auf dem Wert des `quantity`-Feldes.

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
- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) Leitfaden
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
