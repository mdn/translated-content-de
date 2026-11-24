---
title: Array-Initialisierer (Array-Literal)
slug: Web/JavaScript/Reference/Operators/Array_initializer
l10n:
  sourceCommit: 52efe757952fde32b197b8ae9395f8f2a3bc7a9f
---

Ein **Array-Initialisierer**, manchmal auch **Array-Literal** genannt, ist eine durch Kommas getrennte Liste von null oder mehr Ausdrücken, die zu Array-Elementen ausgewertet wird und in eckige Klammern (`[]`) eingeschlossen ist. Arrays können auch mit dem Konstruktor {{jsxref("Array/Array", "Array()")}} initialisiert werden.

{{InteractiveExample("JavaScript Demo: Array initializer")}}

```js interactive-example
const array1 = ["foo", 42];
console.log(array1[1]);
// Expected output: 42

const array2 = [...array1, "something else"];
console.log(array2[2]);
// Expected output: "something else"
```

## Syntax

```js-nolint
[
  "foo",
  42,
  {},
  [],
  () => {},
  /* empty slot */,
  ...spreadElement,
]
```

## Beschreibung

Ein Array-Initialisierer ist ein Ausdruck, der die Initialisierung eines {{jsxref("Array")}} beschreibt. JavaScript-Arrays können Elemente beliebiger und unterschiedlicher Typen enthalten.

[Abschließende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind erlaubt. Abgesehen von einem abschließenden Komma erzeugen Kommas, die nicht zwischen zwei Ausdrücken stehen, jedoch leere Stellen und machen das Array zu einem [Sparse Array](/de/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

## Beispiele

### Arrays erstellen

Ein leeres Array ohne Elemente lässt sich wie folgt erstellen:

```js
const array = [];
```

Sie können durch Kommas getrennte Elemente hinzufügen. Dabei können Sie auch weitere Objekte, Arrays oder andere Ausdrücke verschachteln:

```js
const array = [
  365 * 24 * 60,
  "minutes",
  365 * 24 * 60 - 600,
  { moments: "so dear" },
];
```

### Spread-Elemente

Array-Literale unterstützen die [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Diese iteriert über einen Ausdruck und fügt jedes dabei gelieferte Element zum neuen Array hinzu, ohne das Element selbst zu kopieren. So können Sie eine {{Glossary("Shallow_copy", "flache Kopie")}} einer anderen Sammlung erstellen oder Arrays aus iterierbaren Objekten erzeugen, die keine Arrays sind, beispielsweise {{jsxref("Map")}} oder {{jsxref("Set")}}.

```js
const array1 = [3, 1, 4];
const array2 = [1, 5, 9];

const clonedArray1 = [...array1];
// [3, 1, 4]

const mergedArray = [...array1, ...array2];
// [3, 1, 4, 1, 5, 9]

const unique = [...new Set(mergedArray)];
// [3, 1, 4, 5, 9]
```

### Sparse Arrays

> [!WARNING]
> Sparse Arrays haben eine schlechtere Performance und ein [uneinheitliches Verhalten](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots). Sie entstehen fast immer unbeabsichtigt. Wenn Sie Arrays mit leeren Stellen erstellen müssen, fügen Sie Kommentare hinzu.

```js-nolint
const sparse1 = [/* empty */, 1];
const sparse2 = [0, /* empty */, 2];
const sparse3 = [0, 1, /* empty */, ];

console.log(sparse1.length, sparse2.length, sparse3.length); // 2 3 3
console.log(0 in sparse1); // false
console.log(1 in sparse2); // false
console.log(2 in sparse3); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
