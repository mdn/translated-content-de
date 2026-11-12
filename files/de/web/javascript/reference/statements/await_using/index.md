---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: 0b0bdf5638d9b1bbff3c1738af61c4ac7fabd1ae
---

Die **`await using`**-Deklaration deklariert lokale Variablen mit Block-Gültigkeitsbereich, deren Ressourcen _asynchron freigegeben_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen mit `await using` deklarierte Variablen initialisiert werden und dürfen keinen neuen Wert zugewiesen bekommen. Der Wert einer solchen Variable muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose)- oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die `[Symbol.asyncDispose]()`- oder `[Symbol.dispose]()`-Methode des Objekts aufgerufen und auf ihr Ergebnis gewartet, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und darf _kein_ [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variable. Er kann ein beliebiger gültiger Ausdruck sein, sein Wert muss jedoch entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose)- oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein.

## Beschreibung

Diese Deklaration kann nur dort verwendet werden, wo sowohl {{jsxref("Operators/await", "await")}} als auch {{jsxref("Statements/using", "using")}} zulässig sind. Dazu gehören:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block) (sofern sich der Block ebenfalls in einem asynchronen Kontext befindet)
- Innerhalb des Rumpfs einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder einer asynchronen Generatorfunktion
- Auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- Im Initialisierer einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)- (sofern sich die `for`-Schleife ebenfalls in einem asynchronen Kontext befindet) oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Eine `await using`-Deklaration deklariert eine asynchron freizugebende Ressource, deren Lebensdauer an den Gültigkeitsbereich der Variable gebunden ist (Block, Funktion, Modul usw.). Beim Verlassen des Gültigkeitsbereichs wird die Ressource asynchron freigegeben. Die Syntax kann etwas verwirrend sein, da `await` nicht bei der ersten Deklaration der Variable eine Warteoperation auslöst, sondern erst, wenn die Variable ihren Gültigkeitsbereich verlässt.

Wenn die Variable erstmals deklariert wird und ihr Wert weder `null` noch `undefined` ist, wird eine _Freigabefunktion_ aus dem Objekt abgerufen. Zuerst wird die Eigenschaft `[Symbol.asyncDispose]` geprüft; ist sie `undefined`, wird auf `[Symbol.dispose]` zurückgegriffen. Enthält keine der beiden Eigenschaften eine Funktion, wird ein `TypeError` ausgelöst. Die `[Symbol.dispose]()`-Methode wird dabei in eine Funktion eingehüllt, die etwa wie `async () => { object[Symbol.dispose](); }` aussieht. Gibt die Methode ein Promise zurück, wird daher _nicht_ auf dieses Promise gewartet. Die Freigabefunktion wird für den Gültigkeitsbereich gespeichert.

Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die Freigabefunktion aufgerufen und auf ihr Ergebnis gewartet. Enthält der Gültigkeitsbereich mehrere {{jsxref("Statements/using", "using")}}- oder `await using`-Deklarationen, werden alle Freigabefunktionen unabhängig von der Art der Deklaration nacheinander in umgekehrter Deklarationsreihenfolge ausgeführt. Die Ausführung aller Freigabefunktionen ist garantiert (ähnlich wie beim `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Werden mehrere Fehler ausgelöst, einschließlich des ursprünglichen Fehlers, der gegebenenfalls zum Verlassen des Gültigkeitsbereichs geführt hat, werden sie in einem {{jsxref("SuppressedError")}} zusammengefasst. Dabei wird jeweils die frühere Ausnahme als `suppressed`-Eigenschaft und die spätere als `error`-Eigenschaft gespeichert. Der `SuppressedError` wird ausgelöst, nachdem die Freigabe abgeschlossen ist.

Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Sobald in einem Gültigkeitsbereich mindestens eine `await using`-Variable deklariert ist, findet beim Verlassen des Gültigkeitsbereichs garantiert mindestens eine `await`-Operation statt, selbst wenn die Variable tatsächlich den Wert `null` oder `undefined` hat. Dadurch wird verhindert, dass die Freigabe synchron erfolgt und Probleme mit der zeitlichen Abfolge entstehen (siehe [Auswirkungen von `await` auf den Kontrollfluss](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` bindet die Ressourcenverwaltung an lexikalische Gültigkeitsbereiche. Das ist praktisch, kann aber mitunter verwirrend sein. Weiter unten finden Sie Beispiele, in denen sich die Deklaration möglicherweise anders verhält als erwartet. Wenn Sie die Freigabe von Ressourcen selbst steuern möchten, ohne auf dieselben Garantien bei der Fehlerbehandlung zu verzichten, können Sie stattdessen {{jsxref("AsyncDisposableStack")}} verwenden.

## Beispiele

Weitere Beispiele finden Sie unter {{jsxref("Statements/using", "using")}}, insbesondere zu allgemeinen Fallstricken bei der Verwaltung von Ressourcen anhand von Gültigkeitsbereichen.

### Grundlegende Verwendung

Üblicherweise verwenden Sie `await using` für eine von einer Bibliothek bereitgestellte Ressource, die das Protokoll für asynchrone Freigabe bereits implementiert. Beispielsweise kann das Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) asynchron freigegeben werden:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Beachten Sie, dass die Deklaration von `file` zwei `await`-Operationen enthält. Sie erfüllen unterschiedliche Aufgaben und sind beide erforderlich. `await fs.open()` bewirkt eine Warteoperation beim _Erwerben_ der Ressource: Es wird gewartet, bis die Datei geöffnet ist, und das zurückgegebene Promise wird in ein `FileHandle`-Objekt aufgelöst. `await using file` bewirkt eine Warteoperation bei der _Freigabe_: `file` wird asynchron freigegeben, wenn die Variable ihren Gültigkeitsbereich verlässt.

### `await using` mit `for await...of`

Die folgenden drei Syntaxformen lassen sich leicht verwechseln:

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

Noch verwirrender ist möglicherweise, dass sie miteinander kombiniert werden können.

```js
for await (await using x of await y) {
  // ...
}
```

Zunächst bewirkt `await y` das Erwartete: Mit {{jsxref("Operators/await", "await")}} warten wir auf das Promise `y`, das zu einem Objekt aufgelöst werden soll, über das wir iterieren. Diese Variante lassen wir im Folgenden außer Acht.

Die {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife setzt voraus, dass das Objekt `y` _asynchron iterierbar_ ist. Ein asynchron iterierbares Objekt besitzt eine `[Symbol.asyncIterator]`-Methode, die einen _asynchronen Iterator_ zurückgibt. Dessen `next()`-Methode gibt ein Promise zurück, das das Ergebnis repräsentiert. Dies ist für Fälle gedacht, in denen das iterierbare Objekt erst nach Abschluss einer asynchronen Operation weiß, was der nächste Wert ist oder ob die Iteration bereits beendet ist. (Ist `[Symbol.asyncIterator]` `null` oder `undefined`, verwendet die Schleife stattdessen `[Symbol.iterator]` und verpackt jedes Ergebnis in ein Promise.)

Die Syntax `await using x` setzt hingegen voraus, dass das vom iterierbaren Objekt gelieferte Objekt `x` _asynchron freigegeben werden kann_. Ein solches Objekt besitzt eine `[Symbol.asyncDispose]`-Methode, die ein Promise zurückgibt, das die Freigabeoperation repräsentiert. (Ist `[Symbol.asyncDispose]` `null` oder `undefined`, wird stattdessen `[Symbol.dispose]` verwendet.) Dies ist unabhängig von der Iteration selbst; die Freigabefunktion wird erst aufgerufen, wenn die Variable `x` ihren Gültigkeitsbereich verlässt.

Mit anderen Worten: Alle folgenden vier Kombinationen sind gültig und bewirken Unterschiedliches:

- `for (using x of y)`: Über `y` wird synchron iteriert. Dabei wird jeweils ein Ergebnis geliefert, das synchron freigegeben werden kann.
- `for await (using x of y)`: Über `y` wird asynchron iteriert. Nach jeder Warteoperation wird ein Ergebnis geliefert, dessen Wert jedoch synchron freigegeben werden kann.
- `for (await using x of y)`: Über `y` wird synchron iteriert. Dabei wird jeweils ein Ergebnis geliefert, auf dessen Freigabe gewartet wird.
- `for await (await using x of y)`: Über `y` wird asynchron iteriert. Nach jeder Warteoperation wird ein Ergebnis geliefert, auf dessen Freigabe ebenfalls gewartet wird.

Im Folgenden erstellen wir einige fiktive Werte für `y`, um die jeweiligen Anwendungsfälle zu veranschaulichen. Für asynchrone APIs stützen wir unseren Code auf das Node.js-Modul [`fs/promises`](https://nodejs.org/api/fs.html#promises-api).

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
import fs from "node:fs";
import fsPromises from "node:fs/promises";

const syncIterableOfAsyncDisposables = await Promise.all(
  fs.globSync("*.txt").map((path) => fsPromises.open(path, "r")),
);
for (await using file of syncIterableOfAsyncDisposables) {
  console.log(await file.readFile("utf8"));
}
```

```js
import fs from "node:fs/promises";

async function* globHandles(pattern) {
  for await (const path of fs.glob(pattern)) {
    yield await fs.open(path, "r");
  }
}
const asyncIterableOfAsyncDisposables = globHandles("*.txt");
for await (await using file of asyncIterableOfAsyncDisposables) {
  console.log(await file.readFile("utf8"));
}
```

### Implizites await beim Verlassen des Gültigkeitsbereichs

Sobald in einem Gültigkeitsbereich eine `await using`-Variable deklariert wird, findet beim Verlassen des Gültigkeitsbereichs immer eine `await`-Operation statt, auch wenn die Variable `null` oder `undefined` ist. Dies gewährleistet eine stabile Ausführungsreihenfolge und Fehlerbehandlung. Die Beispiele zu den [Auswirkungen von await auf den Kontrollfluss](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await) erläutern dies genauer.

Im folgenden Beispiel wird der Aufruf `example()` erst einen Tick später abgeschlossen, da bei der Rückkehr aus der Funktion ein implizites `await` stattfindet.

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

Betrachten Sie denselben Code, aber mit einem synchronen {{jsxref("Statements/using", "using")}}. Diesmal wird der Aufruf `example()` sofort abgeschlossen, sodass die beiden `then()`-Handler im selben Tick aufgerufen werden.

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

Ein praxisnäheres Beispiel sind zwei gleichzeitig stattfindende Aufrufe einer Funktion:

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

Wie Sie sehen, wird die Ressource `required 2` im selben Tick wie `required 1` freigegeben. Würde die Ressource `optional` keine zusätzliche `await`-Operation bewirken, würde `required 2` früher freigegeben, nämlich gleichzeitig mit `optional`.

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
