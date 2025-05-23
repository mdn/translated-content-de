---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{JSRef}}

Das **`GeneratorFunction`**-Objekt bietet Methoden für [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). In JavaScript ist jede Generatorfunktion tatsächlich ein `GeneratorFunction`-Objekt.

Beachten Sie, dass `GeneratorFunction` _kein_ globales Objekt ist. Es kann mit folgendem Code erhalten werden:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` ist eine Unterklasse von {{jsxref("Function")}}.

{{InteractiveExample("JavaScript Demo: GeneratorFunction", "taller")}}

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// Expected output: "abc"
```

## Konstruktor

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Erstellt ein neues `GeneratorFunction`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `GeneratorFunction.prototype` definiert und werden von allen `GeneratorFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `GeneratorFunction`-Instanzen ist der Anfangswert der {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}}-Konstruktor.
- {{jsxref("GeneratorFunction.prototype.prototype")}}
  - : Alle Generatorfunktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die [`Generator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist. Jede mit der `function*`-Syntax oder dem `GeneratorFunction()`-Konstruktor erstellte Generatorfunktion hat ebenfalls ihre eigene `prototype`-Eigenschaft, deren Prototype `GeneratorFunction.prototype.prototype` ist. Wenn die Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototype des zurückgegebenen Generatorobjekts.
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"GeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind eigene Eigenschaften jeder `GeneratorFunction`-Instanz.

- {{jsxref("GeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Sie wird zum Prototype des neuen Objekts.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Function")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
