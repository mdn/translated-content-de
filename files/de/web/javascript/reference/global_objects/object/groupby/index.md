---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als Methode `Array.prototype.group()` implementiert. Aufgrund von Webkompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Siehe die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Object.groupBy()`** gruppiert die Elemente eines gegebenen Iterables entsprechend der Zeichenkettenwerte, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Das zurückgegebene Objekt besitzt separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Zeichenketten dargestellt werden können. Wenn Sie Elemente mithilfe eines Schlüssels gruppieren müssen, der einen beliebigen Wert darstellt, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann und die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein [`null`-prototypisiertes Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, die jeweils einem Array zugeordnet sind, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Callback-Funktion sollte eine Zeichenkette oder ein Symbol zurückgeben (Werte, die nicht diesen Typen entsprechen, werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), die die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Map.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die der Callback den gleichen Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im originalen Iterable sind die gleichen (keine {{Glossary("tiefe Kopie", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im originalen Iterable als auch im zurückgegebenen Objekt reflektiert.

## Beispiele

### Verwendung von Object.groupBy()

Zuerst definieren wir ein Array, das Objekte enthält, die einen Bestand verschiedener Lebensmittel repräsentieren. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code gruppiert die Elemente nach dem Wert ihrer `type` Eigenschaft.

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* Ergebnis ist:
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

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements zurück, jedes Mal, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein grundlegendes Beispiel für die [Objektdestructuring-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies entpackt die `type` Eigenschaft eines als Parameter übergebenen Objekts und weist sie einer Variablen namens `type` im Körper der Funktion zu.
Dies ist eine sehr prägnante Möglichkeit, auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen aus Werten in einer oder mehreren Eigenschaften der Elemente ableiten. Unten ist ein sehr ähnliches Beispiel, das die Artikel in `ok` oder `restock` Gruppen auf Basis des Wertes des `quantity` Feldes einteilt.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* Ergebnis ist:
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
- [Anleitung für indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
