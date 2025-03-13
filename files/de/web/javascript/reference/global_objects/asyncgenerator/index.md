---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Das **`AsyncGenerator`**-Objekt wird von einer {{jsxref("Statements/async_function*", "async generator function", "", 1)}} zurückgegeben und entspricht sowohl dem [async iterable protocol als auch dem async iterator protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Async-Generator-Methoden geben immer {{jsxref("Promise")}}-Objekte zurück.

`AsyncGenerator` ist eine Unterklasse der versteckten {{jsxref("AsyncIterator")}}-Klasse.

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `AsyncGenerator`-Konstruktor entspricht. Instanzen von `AsyncGenerator` müssen von [async generator functions](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben werden:

```js
async function* createAsyncGenerator() {
  yield Promise.resolve(1);
  yield await Promise.resolve(2);
  yield 3;
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

Es gibt nur ein verstecktes Objekt, das das Prototyp-Objekt ist, das von allen Objekten geteilt wird, die durch async generator functions erstellt werden. Dieses Objekt wird oft als `AsyncGenerator.prototype` stilisiert, um wie eine Klasse auszusehen, sollte aber passenderweise {{jsxref("AsyncGeneratorFunction.prototype.prototype")}} genannt werden, da `AsyncGeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototypenkette von `AsyncGenerator`-Instanzen zu verstehen, siehe {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `AsyncGenerator.prototype` definiert und werden von allen `AsyncGenerator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGenerator`-Instanzen ist der anfängliche Wert [`AsyncGeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > **Hinweis:** `AsyncGenerator`-Objekte speichern keine Referenz zur async generator function, die sie erstellt hat.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncGenerator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

_Erbt auch Instanzmethoden von seinem Elternteil {{jsxref("AsyncIterator")}}_.

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem gegebenen Wert aufgelöst wird, der durch den {{jsxref("Operators/yield", "yield")}}-Ausdruck geliefert wurde.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Fungiert, als ob eine `return`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, was den Generator beendet und es dem Generator ermöglicht, alle Aufräumarbeiten durchzuführen, wenn er mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Fungiert, als ob eine `throw`-Anweisung im Körper des Generators an der aktuellen angehaltenen Position eingefügt wird, was den Generator über eine Fehlerbedingung informiert und es ihm ermöglicht, den Fehler zu behandeln oder Aufräumarbeiten durchzuführen und sich selbst zu schließen.

## Beispiele

### Async-Generator-Iteration

Das folgende Beispiel iteriert über einen async generator und protokolliert die Werte 1–6 in abnehmenden Zeitintervallen in die Konsole. Beachten Sie, wie jedes Mal ein Promise geliefert wird, das jedoch innerhalb der `for await...of`-Schleife automatisch aufgelöst wird.

```js
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve /*, reject*/) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(1000, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("All done!");
}

async function main() {
  for await (const value of generate()) {
    console.log("value", value);
  }
}

main().catch((e) => console.error(e));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/function*", "function*", "", 1)}}
- {{jsxref("Statements/async_function*", "async function*", "", 1)}}
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "Generator Function", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Async Generator Function", "", 1)}}
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
