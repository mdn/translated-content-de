---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Generator`**-Objekt wird von einer {{jsxref("Statements/function*", "generator function", "", 1)}} zurückgegeben und entspricht sowohl dem [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) als auch dem [iterator protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

`Generator` ist eine Unterklasse der verborgenen {{jsxref("Iterator")}} Klasse.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `Generator` Konstruktor entspricht. Instanzen von `Generator` müssen von [generator functions](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben werden:

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

Es gibt nur ein verborgenes Objekt, das das Prototypobjekt ist, das von allen Objekten geteilt wird, die durch generator functions erstellt wurden. Dieses Objekt wird oft als `Generator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen, aber es sollte passender {{jsxref("GeneratorFunction.prototype.prototype")}} genannt werden, da `GeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototypkette von `Generator` Instanzen zu verstehen, siehe {{jsxref("GeneratorFunction.prototype.prototype")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Generator.prototype` definiert und werden von allen `Generator` Instanzen geteilt.

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}

  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Generator` Instanzen ist der Anfangswert [`GeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

    > **Note:** `Generator` Objekte speichern keinen Verweis auf die generator function, die sie erstellt hat.

- `Generator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Generator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

_Erbt auch Instanzmethoden von seinem übergeordneten {{jsxref("Iterator")}}._

- {{jsxref("Generator.prototype.next()")}}
  - : Gibt einen Wert zurück, der von dem {{jsxref("Operators/yield", "yield")}} Ausdruck geliefert wird.
- {{jsxref("Generator.prototype.return()")}}
  - : Agiert so, als ob eine `return`-Anweisung an der aktuellen, ausgesetzten Position im Körper des Generators eingefügt wird, was den Generator beendet und es dem Generator ermöglicht, alle Aufräumarbeiten in Kombination mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block durchzuführen.
- {{jsxref("Generator.prototype.throw()")}}
  - : Agiert so, als ob eine `throw`-Anweisung an der aktuellen, ausgesetzten Position im Körper des Generators eingefügt wird, was den Generator über einen Fehlerzustand informiert und ihm ermöglicht, den Fehler zu behandeln oder Aufräumarbeiten durchzuführen und sich zu schließen.

## Beispiele

### Ein unendlicher Iterator

Mit einer generator function werden Werte erst ausgewertet, wenn sie benötigt werden. Daher ermöglicht ein Generator es uns, eine potenziell unendliche Datenstruktur zu definieren.

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
