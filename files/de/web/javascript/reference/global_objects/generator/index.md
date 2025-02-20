---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`Generator`**-Objekt wird von einer {{jsxref("Statements/function*", "Generatorfunktion", "", 1)}} zurückgegeben und entspricht sowohl dem [iterierbaren Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) als auch dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

`Generator` ist eine Unterklasse der verborgenen {{jsxref("Iterator")}}-Klasse.

{{InteractiveExample("JavaScript Demo: Expressions - function* expression", "taller")}}

```js interactive-example
const foo = function* () {
  yield "a";
  yield "b";
  yield "c";
};

let str = "";
for (const val of foo()) {
  str = str + val;
}

console.log(str);
// Expected output: "abc"
```

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `Generator`-Konstruktor entspricht. Instanzen von `Generator` müssen von [Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben werden:

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

Es gibt nur ein verborgenes Objekt, das das Prototypobjekt ist, das von allen Objekten geteilt wird, die durch Generatorfunktionen erstellt wurden. Dieses Objekt wird oft als `Generator.prototype` stilisiert, damit es wie eine Klasse aussieht, sollte jedoch passender {{jsxref("GeneratorFunction.prototype.prototype")}} genannt werden, da `GeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototypenkette von `Generator`-Instanzen zu verstehen, siehe {{jsxref("GeneratorFunction.prototype.prototype")}}.

## Eigenschaften von Instanzen

Diese Eigenschaften sind auf `Generator.prototype` definiert und werden von allen `Generator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Generator`-Instanzen ist der Anfangswert [`GeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

    > **Hinweis:** `Generator`-Objekte speichern keinen Verweis auf die Generatorfunktion, die sie erstellt hat.

- `Generator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Generator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Methoden von Instanzen

_Erbt auch Instanzmethoden von seinem übergeordneten {{jsxref("Iterator")}}._

- {{jsxref("Generator.prototype.next()")}}
  - : Gibt einen Wert zurück, der durch den {{jsxref("Operators/yield", "yield")}}-Ausdruck bereitgestellt wird.
- {{jsxref("Generator.prototype.return()")}}
  - : Wirkt, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator beendet und es ihm ermöglicht, jegliche Aufräumarbeiten auszuführen, wenn er in Kombination mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block verwendet wird.
- {{jsxref("Generator.prototype.throw()")}}
  - : Wirkt, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator über einen Fehlerzustand informiert und es ihm ermöglicht, den Fehler zu behandeln, Aufräumarbeiten auszuführen und sich selbst zu schließen.

## Beispiele

### Ein unendlicher Iterator

Mit einer Generatorfunktion werden Werte erst ausgewertet, wenn sie benötigt werden. Daher ermöglicht ein Generator die Definition einer potenziell unendlichen Datenstruktur.

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/function*", "function*")}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
