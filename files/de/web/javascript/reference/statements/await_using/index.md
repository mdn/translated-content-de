---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die Deklaration **`await using`** deklariert lokale Variablen mit Block-Scope, deren Ressourcen _asynchron freigegeben_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen mit `await using` deklarierte Variablen initialisiert werden und dürfen danach keinen neuen Wert erhalten. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt mit einer Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) sein. Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die Methode `[Symbol.asyncDispose]()` oder `[Symbol.dispose]()` des Objekts aufgerufen und auf ihren Abschluss gewartet, damit die Ressourcen freigegeben werden.

## Syntax

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und darf _kein_ [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Er kann ein beliebiger gültiger Ausdruck sein, sein Wert muss jedoch entweder `null`, `undefined` oder ein Objekt mit einer Methode [`[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) oder [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) sein.

## Beschreibung

Diese Deklaration kann nur an Stellen verwendet werden, an denen sowohl {{jsxref("Operators/await", "await")}} als auch {{jsxref("Statements/using", "using")}} verwendet werden können. Dazu gehören:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block) (wenn sich der Block ebenfalls in einem asynchronen Kontext befindet)
- Innerhalb des Rumpfs einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder einer asynchronen Generatorfunktion
- Auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- Im Initialisierungsteil einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)- (wenn sich die `for`-Schleife ebenfalls in einem asynchronen Kontext befindet) oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Mit `await using` wird eine asynchron freizugebende Ressource deklariert, deren Lebensdauer an den Gültigkeitsbereich der Variablen (Block, Funktion, Modul usw.) gebunden ist. Beim Verlassen des Gültigkeitsbereichs wird die Ressource asynchron freigegeben. Die Syntax kann etwas verwirrend sein: Das `await` bewirkt beim Deklarieren der Variablen kein Warten, sondern erst dann, wenn die Variable ihren Gültigkeitsbereich verlässt.

Wenn eine Variable erstmals deklariert wird und ihr Wert weder `null` noch `undefined` ist, wird eine _Freigabefunktion_ aus dem Objekt abgerufen. Zuerst wird die Eigenschaft `[Symbol.asyncDispose]` geprüft; wenn sie `null` oder `undefined` ist, wird auf `[Symbol.dispose]` zurückgegriffen. Wenn keine der beiden Eigenschaften eine Funktion enthält, wird ein `TypeError` ausgelöst. Insbesondere wird die Methode `[Symbol.dispose]()` in eine Funktion eingebettet, die wie `async () => { object[Symbol.dispose](); }` aussieht. Wenn die Methode ein Promise zurückgibt, wird daher _nicht_ auf dessen Abschluss gewartet. Die Freigabefunktion wird für den Gültigkeitsbereich gespeichert.

Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die Freigabefunktion aufgerufen und auf ihren Abschluss gewartet. Enthält der Gültigkeitsbereich mehrere Deklarationen mit {{jsxref("Statements/using", "using")}} oder `await using`, werden alle Freigabefunktionen unabhängig vom Deklarationstyp nacheinander in umgekehrter Reihenfolge der Deklarationen ausgeführt. Die Ausführung aller Freigabefunktionen ist garantiert (ähnlich wie beim `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Treten mehrere Fehler auf, einschließlich des ursprünglichen Fehlers, der gegebenenfalls zum Verlassen des Gültigkeitsbereichs geführt hat, werden sie in einem {{jsxref("SuppressedError")}} zusammengefasst. Dabei steht jede frühere Ausnahme in der Eigenschaft `suppressed` und die spätere Ausnahme in der Eigenschaft `error`. Der `SuppressedError` wird ausgelöst, nachdem die Freigabe abgeschlossen ist.

Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Sobald in diesem Gültigkeitsbereich mindestens eine Variable mit `await using` deklariert wurde, findet beim Verlassen des Gültigkeitsbereichs garantiert mindestens ein `await` statt – selbst wenn die Variable tatsächlich den Wert `null` oder `undefined` hat. Dadurch wird verhindert, dass die Freigabe synchron erfolgt und Probleme mit der zeitlichen Abfolge verursacht (siehe [Auswirkungen von `await` auf den Kontrollfluss](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await)).

`await using` bindet die Ressourcenverwaltung an lexikalische Gültigkeitsbereiche. Das ist praktisch, kann aber manchmal verwirrend sein. Die folgenden Beispiele zeigen Situationen, in denen es sich möglicherweise anders verhält als erwartet. Wenn Sie die Freigabe von Ressourcen selbst steuern und dabei dieselben Garantien für die Fehlerbehandlung beibehalten möchten, können Sie stattdessen {{jsxref("AsyncDisposableStack")}} verwenden.

## Beispiele

Weitere Beispiele finden Sie unter {{jsxref("Statements/using", "using")}}, insbesondere zu allgemeinen Besonderheiten der an Gültigkeitsbereiche gebundenen Ressourcenverwaltung.

### Grundlegende Verwendung

Normalerweise verwenden Sie `await using` für eine von einer Bibliothek bereitgestellte Ressource, die das Protokoll für die asynchrone Freigabe bereits implementiert. Beispielsweise kann das Node.js-[`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) asynchron freigegeben werden:

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // Before `file` goes out of scope, it is disposed by calling `file[Symbol.asyncDispose]()` and awaited.
}
```

Beachten Sie, dass bei der Deklaration von `file` zwei `await`-Operationen vorkommen. Sie erfüllen unterschiedliche Aufgaben und sind beide notwendig. `await fs.open()` bewirkt ein Warten beim _Erwerben_ der Ressource: Es wartet, bis die Datei geöffnet ist, und entpackt das zurückgegebene Promise zu einem `FileHandle`-Objekt. `await using file` bewirkt ein Warten beim _Freigeben_ der Ressource: Es sorgt dafür, dass `file` asynchron freigegeben wird, wenn die Variable ihren Gültigkeitsbereich verlässt.

### `await using` mit `for await...of`

Die folgenden drei Syntaxvarianten lassen sich leicht verwechseln:

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

Noch verwirrender ist möglicherweise, dass sie miteinander kombiniert werden können.

```js
for await (await using x of await y) {
  // ...
}
```

Zunächst bewirkt `await y` das Erwartete: Mit {{jsxref("Operators/await", "await")}} warten wir auf das Promise `y`, das sich erwartungsgemäß zu einem Objekt auflöst, über das wir iterieren. Lassen wir diese Variante im Folgenden beiseite.

Die {{jsxref("Statements/for-await...of", "for await...of")}}-Schleife setzt voraus, dass das Objekt `y` _asynchron iterierbar_ ist. Ein asynchron iterierbares Objekt verfügt über eine Methode `[Symbol.asyncIterator]`, die einen _asynchronen Iterator_ zurückgibt. Dessen Methode `next()` gibt ein Promise zurück, das das Ergebnis repräsentiert. Dies ist für Fälle gedacht, in denen das iterierbare Objekt erst nach Abschluss einer asynchronen Operation weiß, was der nächste Wert ist oder ob die Iteration bereits beendet ist. (Wenn `[Symbol.asyncIterator]` `null` oder `undefined` ist, verwendet die Schleife stattdessen `[Symbol.iterator]` und verpackt jedes Ergebnis in ein Promise.)

Die Syntax `await using x` setzt dagegen voraus, dass das vom iterierbaren Objekt gelieferte Objekt `x` _asynchron freigegeben_ werden kann. Ein asynchron freigebbares Objekt verfügt über eine Methode `[Symbol.asyncDispose]`, die ein Promise zurückgibt, das die Freigabeoperation repräsentiert. (Wenn `[Symbol.asyncDispose]` `null` oder `undefined` ist, wird stattdessen `[Symbol.dispose]` verwendet.) Dies ist unabhängig von der Iteration selbst; die Freigabefunktion wird erst aufgerufen, wenn die Variable `x` ihren Gültigkeitsbereich verlässt.

Mit anderen Worten: Alle vier folgenden Kombinationen sind gültig und bewirken Unterschiedliches:

- `for (using x of y)`: Über `y` wird synchron iteriert. Dabei wird jeweils ein Ergebnis geliefert, das synchron freigegeben werden kann.
- `for await (using x of y)`: Über `y` wird asynchron iteriert. Nach dem Warten wird jeweils ein Ergebnis geliefert, dessen Wert jedoch synchron freigegeben werden kann.
- `for (await using x of y)`: Über `y` wird synchron iteriert. Dabei wird jeweils ein Ergebnis geliefert, auf dessen Freigabe jedoch gewartet wird.
- `for await (await using x of y)`: Über `y` wird asynchron iteriert. Nach dem Warten wird jeweils ein Ergebnis geliefert, auf dessen Freigabe ebenfalls gewartet wird.

Im Folgenden erstellen wir einige fiktive Werte für `y`, um ihre Anwendungsfälle zu veranschaulichen. Für asynchrone APIs basiert unser Code auf dem Node.js-Modul [`fs/promises`](https://nodejs.org/api/fs.html#promises-api).

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

### Implizites Warten beim Verlassen des Gültigkeitsbereichs

Sobald innerhalb eines Gültigkeitsbereichs eine Deklaration mit `await using` vorhanden ist, erfolgt beim Verlassen dieses Gültigkeitsbereichs immer ein `await`, auch wenn die Variable `null` oder `undefined` ist. Dies gewährleistet eine stabile Ausführungsreihenfolge und Fehlerbehandlung. Weitere Einzelheiten hierzu finden Sie in den Beispielen zu den [Auswirkungen von `await` auf den Kontrollfluss](/de/docs/Web/JavaScript/Reference/Operators/await#control_flow_effects_of_await).

Im folgenden Beispiel wird der Aufruf `example()` erst einen Durchlauf des Ereigniszyklus später abgeschlossen, weil bei der Rückkehr aus der Funktion implizit ein `await` erfolgt.

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

Betrachten Sie denselben Code mit einem synchronen {{jsxref("Statements/using", "using")}} anstelle von `await using`. Diesmal wird der Aufruf `example()` sofort abgeschlossen, sodass die beiden `then()`-Handler im selben Durchlauf aufgerufen werden.

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

Ein praxisnäheres Beispiel sind zwei gleichzeitige Aufrufe einer Funktion:

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
  {
    await using optional = createOptionalResource
      ? new Resource("optional")
      : null;
  }
  console.log(`Continuing ${id}`);
}

example(1, true);
example(2, false);
console.log("Both calls have started");
// Output:
// Disposing resource optional
// Both calls have started
// Continuing 1
// Continuing 2
```

Wie Sie sehen, werden die beiden Meldungen `Continuing` unmittelbar nacheinander ausgegeben. Würde die optionale Ressource `optional` kein zusätzliches `await` verursachen, würde der zweite Aufruf früher fortgesetzt und `Continuing 2` vor `Both calls have started` erscheinen.

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
