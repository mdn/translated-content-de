---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen von einigen Browsern wurde diese Methode als `Array.prototype.group()` implementiert. Aufgrund von Webkompatibilitätsproblemen wird sie nun als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die statische Methode **`Object.groupBy()`** gruppiert die Elemente eines gegebenen Iterables gemäß den von einer bereitgestellten Rückruffunktion zurückgegebenen Stringwerten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Strings dargestellt werden können. Wenn Sie Elemente mit einem Schlüssel gruppieren müssen, der ein beliebiger Wert ist, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (String oder [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein [`null`-Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, von denen jede einem Array zugeordnet ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element in einem Iterable auf. Die Rückruffunktion sollte einen String oder ein Symbol (Werte, die kein solcher Typ sind, werden in [Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)) zurückgeben, der die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Map.groupBy()` zurückgegebene Objekt verwendet. Jeder Schlüssel hat ein zugeordnetes Array, das alle Elemente enthält, für die die Rückruffunktion denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im ursprünglichen Iterable sind identisch (keine [deep copies](/de/docs/Glossary/deep_copy)). Änderungen an der internen Struktur der Elemente werden sowohl im ursprünglichen Iterable als auch im zurückgegebenen Objekt reflektiert.

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

Der nachstehende Code gruppiert die Elemente nach dem Wert ihrer `type`-Eigenschaft.

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

Die Pfeilfunktion gibt einfach bei jedem Aufruf den `type` jedes Array-Elements zurück. Beachten Sie, dass das Funktionsargument `{ type }` ein grundlegendes Beispiel für die [Objektdestructuring-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dieses entpackt die `type`-Eigenschaft eines als Parameter übergebenen Objekts und ordnet sie einer Variablen namens `type` im Funktionskörper zu. Dies ist eine sehr prägnante Methode, um in einer Funktion auf die relevanten Werte von Elementen zuzugreifen.

Wir können auch Gruppen erstellen, die aus Werten in einer oder mehreren Eigenschaften der Elemente abgeleitet werden. Nachfolgend ist ein sehr ähnliches Beispiel, das die Artikel in die Gruppen `ok` oder `restock` basierend auf dem Wert des `quantity`-Feldes einteilt.

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
