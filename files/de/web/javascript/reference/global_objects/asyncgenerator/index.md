---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: ccaef74d1a4436097c9395f907ddbb2d477efda4
---

{{JSRef}}

Das **`AsyncGenerator`**-Objekt wird von einer {{jsxref("Statements/async_function*", "async generator function", "", 1)}} zurückgegeben und entspricht sowohl dem [async iterable Protokoll als auch dem async iterator Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Async-Generator-Methoden liefern immer {{jsxref("Promise")}}-Objekte.

`AsyncGenerator` ist eine Unterklasse der verborgenen {{jsxref("AsyncIterator")}}-Klasse.

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `AsyncGenerator`-Konstruktor entspricht. Instanzen von `AsyncGenerator` müssen von [Async-Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben werden:

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

Es gibt nur ein verstecktes Objekt, das das Prototyp-Objekt ist, das von allen Objekten geteilt wird, die von Async-Generator-Funktionen erstellt wurden. Dieses Objekt wird oft als `AsyncGenerator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen, aber es sollte angemessener als {{jsxref("AsyncGeneratorFunction.prototype.prototype")}} bezeichnet werden, da `AsyncGeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototyp-Kette von `AsyncGenerator`-Instanzen zu verstehen, siehe {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `AsyncGenerator.prototype` definiert und werden von allen `AsyncGenerator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGenerator`-Instanzen ist der Anfangswert [`AsyncGeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > **Hinweis:** `AsyncGenerator`-Objekte speichern keinen Verweis auf die async Generatorfunktion, die sie erstellt hat.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncGenerator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

_Erbt auch Instanzmethoden von seinem übergeordneten {{jsxref("AsyncIterator")}}_.

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem angegebenen Wert aufgelöst wird, der durch den {{jsxref("Operators/yield", "yield")}}-Ausdruck geliefert wird.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Wirkt so, als ob eine `return`-Anweisung an der aktuellen unterbrochenen Position im Körper des Generators eingefügt ist, was den Generator beendet und es dem Generator ermöglicht, Aufräumarbeiten auszuführen, wenn es mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block kombiniert wird.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Wirkt so, als ob eine `throw`-Anweisung an der aktuellen unterbrochenen Position im Körper des Generators eingefügt ist, was den Generator über einen Fehlerzustand informiert und ihm ermöglicht, den Fehler zu behandeln oder Aufräumarbeiten durchzuführen und sich zu schließen.

## Beispiele

### Async-Generator-Iteration

Das folgende Beispiel iteriert über einen Async-Generator und protokolliert die Werte 1–6 in der Konsole in abnehmenden Zeitintervallen. Beachten Sie, dass jedes Mal ein Promise geliefert wird, aber es automatisch innerhalb der `for await...of`-Schleife aufgelöst wird.

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
- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
