---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Das **`AsyncGenerator`**-Objekt wird von einer {{jsxref("Statements/async_function*", "asynchronen Generatorfunktion", "", 1)}} zurückgegeben und entspricht sowohl dem [asynchronen iterierbaren Protokoll als auch dem asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Asynchrone Generator-Methoden geben immer {{jsxref("Promise")}}-Objekte zurück.

`AsyncGenerator` ist eine Unterklasse der versteckten {{jsxref("AsyncIterator")}}-Klasse.

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## Konstruktor

Es gibt keine JavaScript-Entität, die dem `AsyncGenerator`-Konstruktor entspricht. Instanzen von `AsyncGenerator` müssen von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben werden:

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

Es gibt nur ein verstecktes Objekt, das das Prototyp-Objekt ist, welches von allen Objekten geteilt wird, die durch asynchrone Generatorfunktionen erstellt wurden. Dieses Objekt wird oft als `AsyncGenerator.prototype` stilisiert, um es wie eine Klasse aussehen zu lassen. Es sollte jedoch eher {{jsxref("AsyncGeneratorFunction.prototype.prototype")}} genannt werden, da `AsyncGeneratorFunction` eine tatsächliche JavaScript-Entität ist. Um die Prototyp-Kette von `AsyncGenerator`-Instanzen zu verstehen, siehe {{jsxref("AsyncGeneratorFunction.prototype.prototype")}}.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `AsyncGenerator.prototype` definiert und werden von allen `AsyncGenerator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGenerator.prototype.constructor")}}

  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGenerator`-Instanzen ist der Anfangswert [`AsyncGeneratorFunction.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > **Hinweis:** `AsyncGenerator`-Objekte speichern keinen Verweis auf die asynchrone Generatorfunktion, die sie erstellt hat.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncGenerator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

_Erbt außerdem Instanz-Methoden von seinem übergeordneten {{jsxref("AsyncIterator")}}._

- {{jsxref("AsyncGenerator.prototype.next()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem im {{jsxref("Operators/yield", "`yield`")}}-Ausdruck übergebenen Wert aufgelöst wird.
- {{jsxref("AsyncGenerator.prototype.return()")}}
  - : Führt so, als ob eine `return`-Anweisung in den Körper des Generators an der aktuellen unterbrochenen Position eingefügt wird. Dadurch wird der Generator beendet und ermöglicht es, dass der Generator Aufräumaufgaben durchführen kann, wenn er zusammen mit einem [`try...finally`](/de/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block)-Block verwendet wird.
- {{jsxref("AsyncGenerator.prototype.throw()")}}
  - : Führt so, als ob eine `throw`-Anweisung in den Körper des Generators an der aktuellen unterbrochenen Position eingefügt wird. Dies informiert den Generator über eine Fehlersituation und ermöglicht es ihm, den Fehler zu behandeln, oder führt Bereinigung durch und schließt sich selbst.

## Beispiele

### Asynchrone Generator-Iteration

Das folgende Beispiel iteriert über einen asynchronen Generator und protokolliert die Werte 1–6 in der Konsole mit abnehmenden Zeitintervallen. Beachten Sie, dass jedes Mal ein Promise zurückgegeben wird, das automatisch innerhalb der `for await...of`-Schleife aufgelöst wird.

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
- [`function*`-Expression](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("GeneratorFunction", "Generator-Funktion", "", 1)}}
- {{jsxref("AsyncGeneratorFunction", "Asynchrone Generator-Funktion", "", 1)}}
- [Iterators und Generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Leitfaden
