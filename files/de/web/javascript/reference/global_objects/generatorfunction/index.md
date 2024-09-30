---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`GeneratorFunction`**-Objekt bietet Methoden für [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*). In JavaScript ist jede Generatorfunktion tatsächlich ein `GeneratorFunction`-Objekt.

Beachten Sie, dass `GeneratorFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` ist eine Unterklasse von {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/functionasterisk-function.html", "taller")}}

## Konstruktor

- {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Erstellt ein neues `GeneratorFunction`-Objekt.

## Instanzeigenschaften

_Erbt auch Instanzeigenschaften von seinem Elternteil {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `GeneratorFunction.prototype` definiert und werden von allen `GeneratorFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `GeneratorFunction`-Instanzen ist der Anfangswert der {{jsxref("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}}-Konstruktor.
- {{jsxref("GeneratorFunction.prototype.prototype")}}
  - : Alle Generatorfunktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die [`Generator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) ist. Jede mit der `function*`-Syntax oder dem `GeneratorFunction()`-Konstruktor erstellte Generatorfunktion hat auch ihre eigene `prototype`-Eigenschaft, deren Prototyp `GeneratorFunction.prototype.prototype` ist. Wenn die Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen Generatorobjekts.
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"GeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind Eigeneigenschaften jeder `GeneratorFunction`-Instanz.

- {{jsxref("GeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Es wird zum Prototyp des neuen Objekts.

## Instanzmethoden

_Erbt Instanzmethoden von seinem Elternteil {{jsxref("Function")}}_.

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
