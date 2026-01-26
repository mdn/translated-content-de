---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 8ee475f0fd4e606f1cb94b44eb5380d769c2452c
---

Das **`Generator`**-Objekt wird von einer {{jsxref("Statements/function*", "Generator-Funktion", "", 1)}} zurückgegeben und entspricht sowohl dem [iterablen Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) als auch dem [Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol).

`Generator` ist eine Unterklasse der {{jsxref("Iterator")}}-Klasse.

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `Generator`-Konstruktor entspricht. Instanzen von `Generator` müssen von [Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/function*) zurückgegeben werden:

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

Es gibt nur ein verstecktes Objekt, das das Prototypobjekt ist, das von allen Objekten gemeinsam genutzt wird, die von Generator-Funktionen erstellt wurden. Dieses Objekt wird oft als `Generator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen, aber es sollte eher als {{jsxref("GeneratorFunction.prototype.prototype")}} bezeichnet werden, da `GeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototypen-Kette von `Generator`-Instanzen zu verstehen, siehe {{jsxref("GeneratorFunction.prototype.prototype")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Generator.prototype` definiert und werden von allen `Generator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Generator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Generator`-Instanzen ist der Anfangswert [`GeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

    > [!NOTE]
    > `Generator`-Objekte speichern keinen Verweis auf die Generator-Funktion, die sie erstellt hat.

- `Generator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Generator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

_Erbt auch Instanzmethoden von seinem übergeordneten {{jsxref("Iterator")}}_.

- {{jsxref("Generator.prototype.next()")}}
  - : Gibt einen Wert zurück, der durch den {{jsxref("Operators/yield", "yield")}}-Ausdruck erzeugt wurde.
- {{jsxref("Generator.prototype.return()")}}
  - : Wirkt, als ob eine `return`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wodurch der Generator beendet wird und der Generator alle Aufräumarbeiten durchführen kann, wie sie mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert sind.
- {{jsxref("Generator.prototype.throw()")}}
  - : Wirkt, als ob eine `throw`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, wodurch der Generator über eine Fehlerbedingung informiert wird und es ermöglicht wird, den Fehler zu behandeln oder Aufräumarbeiten durchzuführen und sich zu schließen.

## Beispiele

### Ein unendlicher Iterator

Mit einer Generator-Funktion werden Werte nicht ausgewertet, bis sie benötigt werden. Daher ermöglicht ein Generator die Definition einer potenziell unendlichen Datenstruktur.

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
- [`function*`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
