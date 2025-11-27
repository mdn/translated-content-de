---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: 419694495e070daaf466c923b413b3f476740fd6
---

Die **`await using`**-Deklaration deklariert lokale Variablen mit Blockumfang, die _asynchron entsorgt_ werden. Wie {{jsxref("Statements/const", "const")}} müssen Variablen, die mit `await using` deklariert wurden, initialisiert werden und können nicht neu zugewiesen werden. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt sein, das über eine [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode verfügt. Wenn die Variable außer Geltungsbereich gerät, wird die Methode `[Symbol.asyncDispose]()` oder `[Symbol.dispose]()` des Objekts aufgerufen und erwartet, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jede muss ein legaler JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und _kein_ [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Initialwert der Variablen. Es kann jeder legale Ausdruck sein, aber sein Wert muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein.

## Beschreibung

Diese Deklaration kann nur dort verwendet werden, wo sowohl {{jsxref("Operators/await", "await")}} als auch {{jsxref("Statements/using", "using")}} verwendet werden können, dazu gehören:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block) (wenn sich der Block auch in einem asynchronen Kontext befindet)
- Innerhalb eines [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder async-Generator-Funktionskörpers
- Auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- In der Initialisierung einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) (wenn die `for`-Schleife sich auch in einem asynchronen Kontext befindet) oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Ein `await using` deklariert eine asynchron entbehrliche Ressource, die an die Lebensdauer des Variablenbereichs (Block, Funktion, Modul, etc.) gebunden ist. Wenn der Bereich beendet wird, wird die Ressource asynchron entsorgt. Die Syntax mag etwas verwirrend sein, da `await` keinen Wartungseffekt hat, wenn die Variable zuerst deklariert wird, sondern nur, wenn die Variable außer Geltungsbereich gerät.

Wenn eine Variable zuerst deklariert wird und ihr Wert nicht null ist, wird ein _Disposer_ vom Objekt abgerufen. Die `[Symbol.asyncDispose]`-Eigenschaft wird zuerst versucht und fällt auf `[Symbol.dispose]` zurück, wenn `[Symbol.asyncDispose]` `undefined` ist. Wenn keine der beiden Eigenschaften eine Funktion enthält, wird ein `TypeError` ausgelöst. Bemerkenswert ist, dass die `[Symbol.dispose]()`-Methode in eine Funktion eingeschlossen wird, die aussieht wie `async () => { object[Symbol.dispose](); }`, was bedeutet, dass, wenn sie ein Versprechen zurückgibt, dieses Versprechen _nicht_ erwartet wird. Dieser Disposer wird im Bereich gespeichert.

Wenn die Variable außer Geltungsbereich gerät, wird der Disposer aufgerufen und erwartet. Wenn der Bereich mehrere {{jsxref("Statements/using", "using")}}- oder `await using`-Deklarationen enthält, werden alle Disposer in umgekehrter Reihenfolge ihrer Deklaration sequenziell ausgeführt, unabhängig von der Art der Deklaration. Alle Disposer werden garantierterweise ausgeführt (ähnlich dem `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Alle während der Entsorgung ausgelösten Fehler, einschließlich des initialen Fehlers, der den Skope-Verlust verursachte (falls zutreffend), werden alle innerhalb eines {{jsxref("SuppressedError")}} aggregiert, wobei jede frühere Ausnahme die Eigenschaft `suppressed` und die spätere Ausnahme die Eigenschaft `error` ist. Dieser `SuppressedError` wird nach Abschluss der Entsorgung ausgelöst.

Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Solange eine `await using`-Variable in diesem Bereich deklariert wird, wird mindestens ein `await` beim Verlassen des Bereichs garantiert, auch wenn die Variable tatsächlich den Wert `null` oder `undefined` hat. Dies verhindert, dass die Entsorgung synchron erfolgt und verursacht zeitliche Probleme (siehe [Kontrollflusseffekte von `await`](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` bindet das Ressourcenmanagement an lexikalische Bereiche, was sowohl bequem als auch manchmal verwirrend ist. Schauen Sie sich unten einige Beispiele an, in denen es möglicherweise nicht so funktioniert, wie Sie es erwarten. Wenn Sie die Entsorgung von Ressourcen manuell verwalten möchten, während Sie die gleichen Fehlerbehandlungsgarantien beibehalten, können Sie stattdessen {{jsxref("AsyncDisposableStack")}} verwenden.

## Beispiele

Sie sollten auch {{jsxref("Statements/using", "using")}} für weitere Beispiele überprüfen, insbesondere einige allgemeine Vorbehalte in Bezug auf das bereichsbasierte Ressourcenmanagement.

### Grundlegende Verwendung

Normalerweise verwenden Sie `await using` auf einigen bibliotheksbereitgestellten Ressourcen, die bereits das asynchrone Entsorgungsprotokoll implementieren. Zum Beispiel ist das Node.js [`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) asynchron entsorgbar:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Beachten Sie, dass es zwei `await`-Operationen in der Deklaration für `file` gibt, die unterschiedliche Dinge tun und beide notwendig sind. `await fs.open()` bewirkt ein Warten während der _Erwerbung_: es wartet darauf, dass die Datei geöffnet wird und entpackt das zurückgegebene Versprechen in ein `FileHandle`-Objekt. `await using file` bewirkt ein Warten während der _Entsorgung_: es sorgt dafür, dass `file` asynchron entsorgt wird, wenn die Variable außer Geltungsbereich gerät.

### `await using` mit `for await...of`

Es ist sehr einfach, die folgenden drei Syntaxen zu verwechseln:

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

Es kann noch verwirrender sein zu wissen, dass sie zusammen verwendet werden können.

```js
for await (await using x of await y) {
  // ...
}
```

Zuerst macht `await y` das, was Sie erwarten: wir {{jsxref("Operators/await", "await")}} das Versprechen `y`, welches erwartet wird, um sich in ein Objekt aufzulösen, das wir durchlaufen. Lassen Sie uns diese Variante beiseitelegen.

Die {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife erfordert, dass das Objekt `y` ein _asynchroner Iterierbar_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncIterator]`-Methode haben muss, die einen _asynchronen Iterator_ zurückgibt, dessen `next()`-Methode ein Versprechen zurückgibt, das das Ergebnis darstellt. Dies ist der Fall, wenn der Iterator nicht weiß, was der nächste Wert ist oder sogar, ob es schon fertig ist, bis eine asynchrone Operation abgeschlossen ist.

Andererseits verlangt die `await using x`-Syntax, dass das Objekt `x`, das aus dem Iterator stammt, ein _asynchron entsorgbar_ ist. Das bedeutet, dass das Objekt eine `[Symbol.asyncDispose]`-Methode haben muss, die ein Versprechen zurückgibt, das die Entsorgungsoperation darstellt. Dies ist ein separates Anliegen vom eigentlichen Iterationsvorgang und wird nur aufgerufen, wenn die Variable `x` außer Geltungsbereich gerät.

Mit anderen Worten, alle folgenden vier Kombinationen sind gültig und tun unterschiedliche Dinge:

- `for (using x of y)`: `y` wird synchron durchlaufen und liefert ein Ergebnis nach dem anderen, das synchron entsorgt werden kann.
- `for await (using x of y)`: `y` wird asynchron durchlaufen und liefert ein Ergebnis nach dem anderen, nachdem gewartet wird, aber der Ergebniswert kann synchron entsorgt werden.
- `for (await using x of y)`: `y` wird synchron durchlaufen und liefert ein Ergebnis nach dem anderen, aber der Ergebniswert kann nur asynchron entsorgt werden.
- `for await (await using x of y)`: `y` wird asynchron durchlaufen und liefert ein Ergebnis nach dem anderen, nachdem gewartet wird, und der Ergebniswert kann nur asynchron entsorgt werden.

Unten erstellen wir einige fiktive Werte von `y`, um ihre Anwendungsfälle zu demonstrieren. Für asynchrone APIs basiert unser Code auf dem Node.js [`fs/promises`](https://nodejs.org/api/fs.html#promises-api)-Modul.

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
const syncIterableOfAsyncDisposables = await Promise.all(
  fs.globSync("*.txt").map((path) => fs.open(path, "r")),
);
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

### Implizites Warten beim Beenden des Geltungsbereichs

Sobald ein `await using` in einem Geltungsbereich deklariert wird, wird der Bereich immer ein `await` beim Beenden haben, selbst wenn die Variable `null` oder `undefined` ist. Dies stellt eine stabile Ausführungsreihenfolge und Fehlerbehandlung sicher. Die Beispiele unter [Kontrollflusseffekte von await](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await) enthalten mehr Details dazu.

Im Beispiel unten löst der `example()`-Aufruf unten erst eine Takt später auf, aufgrund eines impliziten `await`, wenn die Funktion zurückkehrt.

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

Betrachten Sie den gleichen Code, aber mit einem synchronen {{jsxref("Statements/using", "using")}} stattdessen. Dieses Mal wird der `example()`-Aufruf sofort aufgelöst, sodass die beiden `then()`-Handler im gleichen Takt aufgerufen werden.

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

Wie Sie sehen, wird die Ressource `required 2` im gleichen Takt wie `required 1` entsorgt. Wenn die `optional`-Ressource kein redundantes `await` verursacht hätte, wäre `required 2` früher entsorgt worden, was gleichzeitig mit `optional` wäre.

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
