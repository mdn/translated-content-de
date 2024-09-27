---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Generator`**-Objekt wird von einer {{jsxref("Statements/function*", "Generator-Funktion", "", 1)}} zurückgegeben und entspricht sowohl dem [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) als auch dem [iterator protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

`Generator` ist eine Unterklasse der versteckten {{jsxref("Iterator")}} Klasse.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html", "taller")}}

## Konstruktor

Es gibt kein JavaScript-Element, das dem `Generator` Konstruktor entspricht. Instanzen von `Generator` müssen von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben werden:

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

Es gibt nur ein verstecktes Objekt, das das Prototyp-Objekt ist, das von allen Objekten, die durch Generator-Funktionen erstellt wurden, geteilt wird. Dieses Objekt wird oft als `Generator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen, aber es sollte korrekterweise {{jsxref("GeneratorFunction.prototype.prototype")}} genannt werden, da `GeneratorFunction` ein tatsächliches JavaScript-Element ist. Um die Prototypen-Kette von `Generator` Instanzen zu verstehen, siehe {{jsxref("GeneratorFunction.prototype.prototype")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Generator.prototype` definiert und werden von allen `Generator` Instanzen geteilt.

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Generator` Instanzen ist der Anfangswert [`GeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

    > **Note:** `Generator` Objekte speichern keinen Verweis auf die Generator-Funktion, die sie erstellt hat.

- `Generator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Generator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

_Erbt auch Instanzmethoden von seinem Elternteil {{jsxref("Iterator")}}_.

- {{jsxref("Generator.prototype.next()")}}
  - : Gibt einen Wert zurück, der von der {{jsxref("Operators/yield", "yield")}} Ausdruck geliefert wurde.
- {{jsxref("Generator.prototype.return()")}}
  - : Wirkt, als ob eine `return` Anweisung in den Körper des Generators an der aktuellen suspendierten Position eingefügt wird, was den Generator beendet und es ihm ermöglicht, alle Aufräumarbeiten durchzuführen, wenn es mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block kombiniert wird.
- {{jsxref("Generator.prototype.throw()")}}
  - : Wirkt, als ob eine `throw` Anweisung in den Körper des Generators an der aktuellen suspendierten Position eingefügt wird, was den Generator über einen Fehlerzustand informiert und es ihm ermöglicht, den Fehler zu behandeln oder eine Reinigung durchzuführen und sich selbst zu schließen.

## Beispiele

### Ein infiniter Iterator

Mit einer Generator-Funktion werden Werte erst ausgewertet, wenn sie benötigt werden. Daher ermöglicht uns ein Generator, eine potenziell unendliche Datenstruktur zu definieren.

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
