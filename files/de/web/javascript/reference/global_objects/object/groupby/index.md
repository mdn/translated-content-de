---
title: Object.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als `Array.prototype.group()` implementiert. Aufgrund von Problemen mit der Webkompatibilität ist sie jetzt als statische Methode implementiert. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Die statische Methode **`Object.groupBy()`** gruppiert die Elemente eines übergebenen Iterables anhand der String-Werte, die eine bereitgestellte Callback-Funktion zurückgibt. Das zurückgegebene Objekt besitzt für jede Gruppe eine eigene Property, deren Wert ein Array mit den Elementen dieser Gruppe ist.

Diese Methode sollte verwendet werden, wenn sich die Gruppennamen als Strings darstellen lassen. Wenn Sie Elemente anhand eines beliebigen Werts als Schlüssel gruppieren müssen, verwenden Sie stattdessen {{jsxref("Map.groupBy()")}}.

{{InteractiveExample("JavaScript Demo: Object.groupBy()", "taller")}}

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
  - : Ein [Iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (z. B. ein {{jsxref("Array")}}), dessen Elemente gruppiert werden.
- `callbackFn`
  - : Eine Funktion, die für jedes Element des Iterables ausgeführt wird. Sie sollte einen Wert zurückgeben, der in einen Property-Schlüssel (String oder [Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) umgewandelt werden kann und die Gruppe des aktuellen Elements angibt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit Properties für alle Gruppen. Jeder Property ist ein Array mit den Elementen der jeweiligen Gruppe zugewiesen.

## Beschreibung

`Object.groupBy()` ruft die bereitgestellte Funktion `callbackFn` einmal für jedes Element eines Iterables auf. Die Callback-Funktion sollte einen String oder ein Symbol zurückgeben, der bzw. das die Gruppe des jeweiligen Elements angibt. Werte, die weder Strings noch Symbole sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Die von `callbackFn` zurückgegebenen Werte werden als Schlüssel für das von `Object.groupBy()` zurückgegebene Objekt verwendet. Jedem Schlüssel ist ein Array zugeordnet, das alle Elemente enthält, für die die Callback-Funktion denselben Wert zurückgegeben hat.

Die Elemente im zurückgegebenen Objekt und im ursprünglichen Iterable sind dieselben (keine {{Glossary("deep_copy", "tiefen Kopien")}}). Änderungen an der internen Struktur der Elemente sind daher sowohl im ursprünglichen Iterable als auch im zurückgegebenen Objekt sichtbar.

## Beispiele

### Object.groupBy() verwenden

Zunächst definieren wir ein Array mit Objekten, die einen Vorrat verschiedener Lebensmittel darstellen. Jedes Lebensmittel hat einen `type` und eine `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

Der folgende Code gruppiert die Elemente nach dem Wert ihrer Property `type`.

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

Die Arrow-Funktion gibt bei jedem Aufruf lediglich den `type` des jeweiligen Array-Elements zurück. Das Funktionsargument `{ type }` ist ein einfaches Beispiel für die [Destrukturierung von Objekten in Funktionsargumenten](/de/docs/Web/JavaScript/Reference/Operators/Destructuring#unpacking_properties_from_objects_passed_as_a_function_parameter). Dabei wird die Property `type` eines als Parameter übergebenen Objekts ausgelesen und im Funktionskörper einer Variablen namens `type` zugewiesen.
So lässt sich innerhalb einer Funktion sehr knapp auf die relevanten Werte der Elemente zugreifen.

Wir können Gruppen auch aus den Werten einer oder mehrerer Properties der Elemente ableiten. Das folgende, sehr ähnliche Beispiel ordnet die Einträge anhand des Werts des Felds `quantity` den Gruppen `ok` oder `restock` zu.

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

- [Polyfill für `Object.groupBy` in `core-js`](https://core-js.io/docs/features/ecmascript/object)
- [Polyfill für `Object.groupBy` von es-shims](https://www.npmjs.com/package/object.groupby)
- Leitfaden zu [indizierten Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
