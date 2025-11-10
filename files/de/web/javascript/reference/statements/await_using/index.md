---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`await using`**-Deklaration deklariert block-skopierte lokale Variablen, die _asynchron entsorgt_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen Variablen, die mit `await using` deklariert werden, initialisiert werden und können nicht neu zugewiesen werden. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable außerhalb des Gültigkeitsbereichs liegt, wird die `[Symbol.asyncDispose]()`- oder `[Symbol.dispose]()`-Methode des Objekts aufgerufen und erwartet, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und _keine_ [Destrukturierungsbindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein, aber sein Wert muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein.

## Beschreibung

Diese Deklaration kann nur an Stellen verwendet werden, an denen sowohl {{jsxref("Operators/await", "await")}} als auch {{jsxref("Statements/using", "using")}} verwendet werden können, dazu gehören:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block) (wenn der Block sich ebenfalls in einem asynchronen Kontext befindet)
- Innerhalb eines [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function)- oder async-Generatorfunktion-Körpers
- Auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- In der Initialisierung eines [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) (wenn die `for`-Schleife sich ebenfalls in einem asynchronen Kontext befindet) oder einer [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Ein `await using` deklariert eine asynchron entsorgbare Ressource, die an die Lebensdauer des Variablenbereichs gebunden ist (Block, Funktion, Modul usw.). Wenn der Gültigkeitsbereich endet, wird die Ressource asynchron entsorgt. Die Syntax mag etwas verwirrend erscheinen, da das `await` keine wartende Wirkung hat, wenn die Variable zuerst deklariert wird, sondern erst, wenn die Variable außerhalb des Gültigkeitsbereichs liegt.

Wenn eine Variable zuerst deklariert wird und ihr Wert nicht null ist, wird ein _Disposer_ aus dem Objekt abgeleitet. Die `[Symbol.asyncDispose]`-Eigenschaft wird zuerst versucht und fällt auf `[Symbol.dispose]` zurück, wenn `[Symbol.asyncDispose]` `undefined` ist. Wenn keine der Eigenschaften eine Funktion enthält, wird ein `TypeError` ausgelöst. Bemerkenswert ist, dass die `[Symbol.dispose]()`-Methode in eine Funktion wie `async () => { object[Symbol.dispose](); }` eingewickelt wird, was bedeutet, dass wenn sie ein Versprechen zurückgibt, dieses Versprechen _nicht_ erwartet wird. Dieser Disposer wird im Bereich gespeichert.

Wenn die Variable außerhalb des Gültigkeitsbereichs liegt, wird der Disposer aufgerufen und erwartet. Enthält der Bereich mehrere {{jsxref("Statements/using", "using")}}- oder `await using`-Deklarationen, werden alle Disposer in umgekehrter Deklarationsreihenfolge in Folge ausgeführt, unabhängig von der Art der Deklaration. Alle Disposer werden garantiert ausgeführt (wie der `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Alle während der Entsorgung geworfenen Fehler, einschließlich des ersten Fehlers, der den Bereichsabschluss verursacht hat (falls zutreffend), werden alle innerhalb eines einzelnen {{jsxref("SuppressedError")}} aggregiert, wobei jede frühere Ausnahme als `suppressed`-Eigenschaft und die spätere Ausnahme als `error`-Eigenschaft dient. Dieser `SuppressedError` wird nach Abschluss der Entsorgung geworfen.

Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Solange mindestens eine `await using`-Variable in diesem Bereich deklariert ist, wird mindestens ein `await` beim Bereichsende garantiert, selbst wenn die Variable tatsächlich den Wert `null` oder `undefined` hat. Dies verhindert, dass die Entsorgung synchron geschieht, was zu Timing-Problemen führen würde (siehe [Kontrollfluss-Effekte von `await`](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` bindet das Ressourcenmanagement an lexikalische Bereiche, was sowohl praktisch als auch manchmal verwirrend ist. Unten finden Sie einige Beispiele, bei denen es möglicherweise nicht wie erwartet funktioniert. Wenn Sie die Entsorgung von Ressourcen manuell verwalten möchten, während Sie die gleichen Fehlerbehandlungsrichtlinien beibehalten, können Sie stattdessen {{jsxref("AsyncDisposableStack")}} verwenden.

## Beispiele

Sie sollten auch {{jsxref("Statements/using", "using")}} für weitere Beispiele prüfen, insbesondere einige allgemeine Vorbehalte in Bezug auf das bereichsbasierte Ressourcenmanagement.

### Grundlegende Nutzung

Normalerweise verwenden Sie `await using` für eine von einer Bibliothek bereitgestellte Ressource, die bereits das asynchrone entsorgbare Protokoll implementiert. Zum Beispiel ist der Node.js [`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) asynchron entsorgbar:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Beachten Sie, dass es zwei `await`-Operationen in der Deklaration für `file` gibt, die unterschiedliche Dinge tun und beide notwendig sind. `await fs.open()` bewirkt ein Await während der _Akquisition_: Es wartet darauf, dass die Datei geöffnet wird und das zurückgegebene Versprechen in ein `FileHandle`-Objekt umgewandelt wird. `await using file` bewirkt ein Await während der _Entsorgung_: Es bewirkt, dass `file` asynchron entsorgt wird, wenn die Variable außerhalb des Gültigkeitsbereichs liegt.

### `await using` mit `for await...of`

Es ist sehr leicht, die folgenden drei Syntaxen zu verwechseln:

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

Es kann noch verwirrender sein zu wissen, dass sie zusammen verwendet werden können.

```js
for await (await using x of await y) {
  // ...
}
```

Zuerst macht `await y` das, was Sie erwarten: wir {{jsxref("Operators/await", "await")}} das Versprechen `y`, das erwartet wird, um zu einem Objekt aufzulösen, das wir iterieren. Lassen Sie uns diese Variante beiseite legen.

Die {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife erfordert, dass das `y`-Objekt ein _asynchrones iterierbares_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncIterator]`-Methode haben muss, die einen _asynchronen Iterator_ zurückgibt, dessen `next()`-Methode ein Versprechen zurückgibt, das das Ergebnis darstellt. Dies ist, wenn der Iterable nicht weiß, was der nächste Wert ist oder sogar ob es schon fertig ist, bis eine asynchrone Operation abgeschlossen ist.

Auf der anderen Seite erfordert die `await using x`-Syntax, dass das `x`-Objekt, wie vom Iterable geliefert, ein _asynchron entsorgbares_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncDispose]`-Methode haben muss, die ein Versprechen zurückgibt, das die Entsorgungsoperation darstellt. Dies ist ein separates Anliegen von der Iteration selbst und wird nur aufgerufen, wenn die Variable `x` außerhalb des Gültigkeitsbereichs liegt.

Mit anderen Worten, alle der folgenden vier Kombinationen sind gültig und tun unterschiedliche Dinge:

- `for (using x of y)`: `y` wird synchron iteriert, liefert ein Ergebnis nach dem anderen, das synchron entsorgt werden kann.
- `for await (using x of y)`: `y` wird asynchron iteriert, liefert ein Ergebnis nach dem anderen nach dem Awaiting, aber der Ergebniswert kann synchron entsorgt werden.
- `for (await using x of y)`: `y` wird synchron iteriert, liefert ein Ergebnis nach dem anderen, aber der Ergebniswert kann nur asynchron entsorgt werden.
- `for await (await using x of y)`: `y` wird asynchron iteriert, liefert ein Ergebnis nach dem anderen nach dem Awaiting, und der Ergebniswert kann nur asynchron entsorgt werden.

Im Folgenden erzeugen wir einige fiktive Werte von `y`, um ihre Anwendungsfälle zu demonstrieren. Für asynchrone APIs basieren wir unseren Code auf dem Node.js [`fs/promises`](https://nodejs.org/api/fs.html#promises-api)-Modul.

```js
const syncIterableOfSyncDisposables = [
  stream1.getReader(),
  stream2.getReader(),
];
for (using reader of syncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
async function* requestMany(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    yield res.body.getReader();
  }
}
const asyncIterableOfSyncDisposables = requestMany([
  "https://example.com",
  "https://example.org",
]);
for await (using reader of asyncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
const syncIterableOfAsyncDisposables = fs
  .globSync("*.txt")
  .map((path) => fs.open(path, "r"));
for (await using file of syncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

```js
async function* globHandles(pattern) {
  for await (const path of fs.glob(pattern)) {
    yield await fs.open(path, "r");
  }
}
const asyncIterableOfAsyncDisposables = globHandles("*.txt");
for await (await using file of asyncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

### Implizites Await beim Bereichsende

Sobald ein `await using` in einem Bereich deklariert ist, wird der Bereich beim Verlassen immer ein `await` haben, selbst wenn die Variable `null` oder `undefined` ist. Dies gewährleistet eine stabile Ausführungsreihenfolge und Fehlerbehandlung. Die [Kontrollfluss-Effekte von await](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)-Beispiele enthalten mehr Details dazu.

Im folgenden Beispiel wird der `example()`-Aufruf unten nicht aufgelöst, bis ein Takt später, wegen eines impliziten `await`, wenn die Funktion zurückkehrt.

```js
async function example() {
  await using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// Output:
// Example call
// Microtask done
// Example done
```

Betrachten Sie denselben Code, aber mit einem synchronen {{jsxref("Statements/using", "using")}} stattdessen. Dieses Mal wird der `example()`-Aufruf sofort aufgelöst, sodass die beiden `then()`-Handler im gleichen Takt aufgerufen werden.

```js
async function example() {
  using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// Output:
// Example call
// Example done
// Microtask done
```

Für ein realistischeres Beispiel betrachten Sie zwei gleichzeitige Aufrufe einer Funktion:

```js
class Resource {
  #name;
  constructor(name) {
    this.#name = name;
  }
  async [Symbol.asyncDispose]() {
    console.log(`Disposing resource ${this.#name}`);
  }
}

async function example(id, createOptionalResource) {
  await using required = new Resource(`required ${id}`);
  await using optional = createOptionalResource
    ? new Resource("optional")
    : null;
  await using another = new Resource(`another ${id}`);
}

example(1, true);
example(2, false);
// Output:
// Disposing resource another 1
// Disposing resource another 2
// Disposing resource optional
// Disposing resource required 1
// Disposing resource required 2
```

Wie Sie sehen können, wird die Ressource `required 2` im gleichen Takt wie `required 1` entsorgt. Wenn die `optional`-Ressource nicht ein redundantes `await` verursacht hätte, wäre `required 2` früher entsorgt worden, was gleichzeitig mit `optional` wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("AsyncDisposableStack")}}
