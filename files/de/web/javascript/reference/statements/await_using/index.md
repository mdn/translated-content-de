---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`await using`**-Deklaration deklariert block-skopierte lokale Variablen, die _asynchron entsorgt_ werden. Wie {{jsxref("Statements/const", "const")}}, müssen Variablen, die mit `await using` deklariert wurden, initialisiert werden und können nicht neu zugewiesen werden. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable außer Reichweite gerät, wird die `[Symbol.asyncDispose]()` oder `[Symbol.dispose]()`-Methode des Objekts aufgerufen und abgewartet, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und _kein_ [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Initialwert der Variablen. Es kann jeder gültige Ausdruck sein, aber sein Wert muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein.

## Beschreibung

Diese Deklaration kann nur an Stellen verwendet werden, an denen sowohl {{jsxref("Operators/await", "await")}} als auch {{jsxref("Statements/using", "using")}} verwendet werden können, die Folgendes umfassen:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block) (wenn der Block auch in einem asynchronen Kontext ist)
- Innerhalb eines [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder asynchronen Generatorfunktionenkörpers
- Auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- In der Initialisierung einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) (wenn die `for`-Schleife auch in einem asynchronen Kontext ist) oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Ein `await using` deklariert eine asynchrone entsorgbare Ressource, die mit der Lebensdauer des Variablen-Skopes (Block, Funktion, Modul, etc.) verknüpft ist. Wenn der Scope endet, wird die Ressource asynchron entsorgt. Seine Syntax kann etwas verwirrend sein, da das `await` beim ersten Deklarieren der Variablen keine Auswirkungen hat, sondern nur, wenn die Variable außer Reichweite gerät.

Wenn eine Variable zum ersten Mal deklariert wird und ihr Wert nicht-`nullish` ist, wird ein _Disposer_ aus dem Objekt abgerufen. Die `[Symbol.asyncDispose]`-Eigenschaft wird zuerst versucht und fällt auf `[Symbol.dispose]` zurück, wenn `[Symbol.asyncDispose]` `undefined` ist. Wenn keine der Eigenschaften eine Funktion enthält, wird ein `TypeError` ausgelöst. Bemerkenswert ist, dass die `[Symbol.dispose]()`-Methode in eine Funktion verpackt wird, die wie `async () => { object[Symbol.dispose](); }` aussieht, was bedeutet, dass, wenn sie ein Promise zurückgibt, dieses Promise _nicht_ abgewartet wird. Dieser Disposer wird im Scope gespeichert.

Wenn die Variable außer Reichweite gerät, wird der Disposer aufgerufen und abgewartet. Wenn der Scope mehrere {{jsxref("Statements/using", "using")}}- oder `await using`-Deklarationen enthält, werden alle Disposer in umgekehrter Reihenfolge der Deklaration in Sequenz ausgeführt, unabhängig vom Typ der Deklaration. Alle Disposer werden garantiert ausgeführt (ähnlich wie der `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Alle während der Entsorgung ausgelösten Fehler, einschließlich des ursprünglichen Fehlers, der den Scope-Exit verursachte (falls zutreffend), werden alle innerhalb eines {{jsxref("SuppressedError")}} aggregiert, wobei jede frühere Ausnahme als die `suppressed`-Eigenschaft und die spätere Ausnahme als die `error`-Eigenschaft behandelt wird. Dieser `SuppressedError` wird nach Abschluss der Entsorgung geworfen.

Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Solange eine `await using`-Variable in diesem Scope deklariert ist, wird beim Verlassen des Scopes mindestens ein `await` ausgeführt, selbst wenn die Variable tatsächlich den Wert `null` oder `undefined` hat. Dies verhindert, dass die Entsorgung synchron erfolgt, was Timing-Probleme verursachen würde (siehe [Control flow effects of `await`](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` bindet das Ressourcenmanagement an lexikalische Scopes, was sowohl praktisch als auch manchmal verwirrend ist. Siehe unten einige Beispiele, in denen es möglicherweise nicht wie erwartet funktioniert. Wenn Sie das Ressourcenmanagement jedoch selbst verwalten möchten, während Sie die gleichen Fehlerbehandlungsgarantien aufrechterhalten, können Sie stattdessen {{jsxref("AsyncDisposableStack")}} verwenden.

## Beispiele

Sie sollten auch {{jsxref("Statements/using", "using")}} für weitere Beispiele überprüfen, insbesondere einige allgemeine Vorsichtsmaßnahmen in Bezug auf scope-basiertes Ressourcenmanagement.

### Grundlegende Verwendung

Normalerweise verwenden Sie `await using` für einige von der Bibliothek bereitgestellte Ressourcen, die bereits das asynchrone entsorgbare Protokoll implementieren. Zum Beispiel ist der Node.js [`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) asynchron entsorgbar:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Beachten Sie, dass es zwei `await`-Operationen in der Deklaration von `file` gibt, die unterschiedliche Dinge tun und beide notwendig sind. `await fs.open()` bewirkt ein Await während der _Akquisition_: Es wartet darauf, dass die Datei geöffnet wird, und entpackt das zurückgegebene Promise in ein `FileHandle`-Objekt. `await using file` bewirkt ein Await während der _Entsorgung_: Es sorgt dafür, dass `file` asynchron entsorgt wird, wenn die Variable außer Reichweite gerät.

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

Zuerst, `await y` tut, was Sie erwarten: Wir {{jsxref("Operators/await", "await")}} das Promise `y`, das erwartet wird, sich in ein Objekt aufzulösen, über das wir iterieren. Lassen Sie uns diese Variante beiseite legen.

Die {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife erfordert, dass das `y`-Objekt ein _asynchrones Iterable_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncIterator]`-Methode haben muss, die einen _asynchronen Iterator_ zurückgibt, dessen `next()`-Methode ein Promise zurückgibt, das das Ergebnis darstellt. Dies ist für den Fall, dass das Iterable nicht weiß, was der nächste Wert ist oder ob es bereits fertig ist, bis eine asynchrone Operation abgeschlossen ist.

Auf der anderen Seite erfordert die `await using x`-Syntax, dass das `x`-Objekt, wie vom Iterable zurückgegeben, ein _asynchron entsorgbar_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncDispose]`-Methode haben muss, die ein Promise zurückgibt, das die Entsorgung darstellt. Dies ist ein separates Anliegen von der eigentlichen Iteration und wird nur aufgerufen, wenn die Variable `x` außer Reichweite gerät.

Mit anderen Worten, alle der folgenden vier Kombinationen sind gültig und tun unterschiedliche Dinge:

- `for (using x of y)`: `y` wird synchron iteriert und gibt ein Ergebnis nach dem anderen zurück, das synchron entsorgt werden kann.
- `for await (using x of y)`: `y` wird asynchron iteriert und gibt ein Ergebnis nach dem anderen zurück, nachdem es abgewartet wurde, aber der Ergebniswert kann synchron entsorgt werden.
- `for (await using x of y)`: `y` wird synchron iteriert und gibt ein Ergebnis nach dem anderen zurück, aber der Ergebniswert kann nur asynchron entsorgt werden.
- `for await (await using x of y)`: `y` wird asynchron iteriert und gibt ein Ergebnis nach dem anderen zurück, nachdem es abgewartet wurde, und der Ergebniswert kann nur asynchron entsorgt werden.

Im Folgenden erstellen wir einige fiktive Werte von `y`, um ihre Anwendungsfälle zu demonstrieren. Für asynchrone APIs basieren wir unseren Code auf dem Node.js-Modul [`fs/promises`](https://nodejs.org/api/fs.html#promises-api).

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

### Implizites Await bei Scope-Abschluss

Sobald ein `await using` in einem Scope deklariert ist, wird beim Verlassen des Scopes immer ein `await` ausgeführt, selbst wenn die Variable `null` oder `undefined` ist. Dies stellt eine stabile Ausführungsreihenfolge und Fehlerbehandlung sicher. Die [Control flow effects of await](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)-Beispiele enthalten weitere Details hierzu.

Im folgenden Beispiel wird der `example()`-Aufruf erst einen Takt später aufgelöst, wegen eines impliziten `await`, wenn die Funktion zurückkehrt.

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

Betrachten Sie denselben Code, jedoch mit einem synchronen {{jsxref("Statements/using", "using")}}. Dieses Mal wird der `example()`-Aufruf sofort aufgelöst, sodass die beiden `then()`-Handler im selben Takt aufgerufen werden.

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

Wie Sie sehen können, wird die Ressource `required 2` im selben Takt wie `required 1` entsorgt. Wenn die Ressource `optional` kein überflüssiges `await` verursacht hätte, wäre `required 2` früher entsorgt worden, was mit `optional` gleichzeitig gewesen wäre.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("AsyncDisposableStack")}}
