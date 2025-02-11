---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`GeneratorFunction`**-Objekt bietet Methoden für [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). In JavaScript ist jede Generator-Funktion tatsächlich ein `GeneratorFunction`-Objekt.

Beachten Sie, dass `GeneratorFunction` _kein_ globales Objekt ist. Es kann durch den folgenden Code abgerufen werden:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` ist eine Unterklasse von {{jsxref("Function")}}.

{{InteractiveExample("JavaScript Demo: GeneratorFunction()", "taller")}}

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## Konstruktor

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Erstellt ein neues `GeneratorFunction`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternobjekt {{jsxref("Function")}}._

Diese Eigenschaften sind auf `GeneratorFunction.prototype` definiert und werden von allen `GeneratorFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `GeneratorFunction`-Instanzen ist der Anfangswert der {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}}-Konstruktor.
- {{jsxref("GeneratorFunction.prototype.prototype")}}
  - : Alle Generator-Funktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die [`Generator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist. Jede Generator-Funktion, die mit der `function*`-Syntax oder dem `GeneratorFunction()`-Konstruktor erstellt wurde, hat ebenfalls ihre eigene `prototype`-Eigenschaft, deren Prototyp `GeneratorFunction.prototype.prototype` ist. Wenn die Generator-Funktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen Generator-Objekts.
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"GeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind die eigenen Eigenschaften jeder `GeneratorFunction`-Instanz.

- {{jsxref("GeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Es wird zum Prototyp des neuen Objekts.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternobjekt {{jsxref("Function")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
