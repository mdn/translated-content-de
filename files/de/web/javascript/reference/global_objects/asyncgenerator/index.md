---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: ccaef74d1a4436097c9395f907ddbb2d477efda4
---

{{JSRef}}

Das **`AsyncGenerator`**-Objekt wird von einer {{jsxref("Statements/async_function*", "asynchronen Generatorfunktion", "", 1)}} zurückgegeben und es entspricht sowohl dem [asynchronen Iterable-Protokoll als auch dem asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Asynchrone Generator-Methoden geben immer {{jsxref("Promise")}} Objekte zurück.

`AsyncGenerator` ist eine Unterklasse der versteckten {{jsxref("AsyncIterator")}} Klasse.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `AsyncGenerator` Konstruktor entspricht. Instanzen von `AsyncGenerator` müssen von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben werden:

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

Es gibt nur ein verstecktes Objekt, welches das Prototypobjekt ist, das von allen Objekten geteilt wird, die durch asynchrone Generatorfunktionen erstellt wurden. Dieses Objekt wird oft als `AsyncGenerator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen, sollte jedoch treffender {{jsxref("AsyncGeneratorFunction.prototype.prototype")}} genannt werden, da `AsyncGeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototyp-Kette von `AsyncGenerator` Instanzen zu verstehen, siehe {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}.

## Instanzeigenschaften

Diese Eigenschaften sind auf `AsyncGenerator.prototype` definiert und werden von allen `AsyncGenerator` Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGenerator` Instanzen ist der Anfangswert [`AsyncGeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > **Note:** `AsyncGenerator` Objekte speichern keinen Verweis auf die asynchrone Generatorfunktion, die sie erstellt hat.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"AsyncGenerator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

_Erbt auch Instanzmethoden von seinem Elternteil {{jsxref("AsyncIterator")}}_.

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem durch den {{jsxref("Operators/yield", "yield")}} Ausdruck gelieferten Wert aufgelöst wird.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Wirkt so, als ob eine `return`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator beendet und es dem Generator ermöglicht, alle Aufräumaufgaben durchzuführen, wenn es mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block) Block kombiniert wird.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Wirkt so, als ob eine `throw`-Anweisung an der aktuellen angehaltenen Position im Körper des Generators eingefügt wird, was den Generator von einer Fehlerbedingung informiert und es ihm ermöglicht, den Fehler zu behandeln oder aufzuräumen und sich zu schließen.

## Beispiele

### Asynchrone Generatoriteration

Das folgende Beispiel iteriert über einen asynchronen Generator und protokolliert die Werte 1–6 in die Konsole bei abnehmenden Zeitabständen. Beachten Sie, wie jedes Mal ein Promise geliefert wird, das jedoch innerhalb der `for await...of`-Schleife automatisch aufgelöst wird.

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
- {{jsxref("GeneratorFunction", "Generatorfunktion", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Asynchrone Generatorfunktion", "", 1)}}
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
