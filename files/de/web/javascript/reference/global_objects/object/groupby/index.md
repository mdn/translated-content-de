---
title: Object.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 02c34c1efdc9b3623787fa2f3921fe3b776459ff
---

{{JSRef}}

> [!NOTE]
> In einigen Versionen einiger Browser wurde diese Methode als `Array.prototype.group()`-Methode implementiert. Aufgrund von Webkompatibilitätsproblemen wird sie jetzt als statische Methode implementiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **`Object.groupBy()`** statische Methode gruppiert die Elemente eines gegebenen Iterables entsprechend der Zeichenfolgenwerte, die von einer bereitgestellten Callback-Funktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.

Diese Methode sollte verwendet werden, wenn Gruppennamen durch Zeichenfolgen dargestellt werden können. Wenn Sie Elemente mit einem Schlüssel gruppieren müssen, der einen beliebigen Wert darstellen kann, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

<!-- {{EmbedInteractiveExample("pages/js/object-groupby.html")}} -->

## Syntax

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parameter

- `items`
  - : Ein [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (wie ein {{jsxref("Array")}}), dessen Elemente gruppiert werden sollen.
- `callbackFn`
  - : Eine Funktion, die für jedes Element im Iterable ausgeführt werden soll. Sie sollte einen Wert zurückgeben, der in einen Eigenschaftsschlüssel (Zeichenfolge oder [symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann, der die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Eigenschaften für alle Gruppen, wobei jede Eigenschaft einem Array zugewiesen ist, das die Elemente der zugehörigen Gruppe enthält.

## Beschreibung

`Object.groupBy()` ruft eine bereitgestellte `callbackFn`-Funktion einmal für jedes Element eines Iterables auf. Die Callback-Funktion sollte entweder eine Zeichenfolge oder ein Symbol zurückgeben (Werte, die weder Typ sind, werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)), die die Gruppe des zugehörigen Elements angibt. Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel des von `Object.groupBy()` zurückgegebenen Objekts verwendet. Jeder Schlüssel hat ein zugehöriges Array, das alle Elemente enthält, für die der Callback denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im originalen Iterable sind die gleichen (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente werden sowohl im originalen Iterable als auch im zurückgegebenen Objekt sichtbar.

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

Die Pfeilfunktion gibt einfach den `type` jedes Array-Elements jedes Mal zurück, wenn sie aufgerufen wird. Beachten Sie, dass das Funktionsargument `{ type }` ein grundlegendes Beispiel für die [Objektdestructuring-Syntax für Funktionsargumente](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#unpacking_properties_from_objects_passed_as_a_function_parameter) ist. Dies packt die `type`-Eigenschaft eines als Parameter übergebenen Objekts aus und ordnet sie einer Variablen mit dem Namen `type` im Funktionskörper zu. Dies ist eine sehr prägnante Art und Weise, um auf die relevanten Werte von Elementen innerhalb einer Funktion zuzugreifen.

Wir können auch Gruppen erstellen, die aus Werten in einer oder mehreren Eigenschaften der Elemente abgeleitet sind. Unten ist ein sehr ähnliches Beispiel, das die Elemente in `ok` oder `restock` Gruppen basierend auf dem Wert des `quantity` Feldes einteilt.

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
