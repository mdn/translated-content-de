---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`using`**-Deklaration deklariert block-skopierte lokale Variablen, die _synchron entsorgt_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen Variablen, die mit `using` deklariert werden, initialisiert werden und können nicht neu zugewiesen werden. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable den Gültigkeitsbereich verlässt, wird die `[Symbol.dispose]()`-Methode des Objekts aufgerufen, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und _kein_ [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Initialwert der Variable. Es kann jedem gültigen Ausdruck entsprechen, aber sein Wert muss entweder `null`, `undefined` oder ein Objekt mit einer `[Symbol.dispose]()`-Methode sein.

## Beschreibung

Diese Deklaration kann verwendet werden:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block)
- Innerhalb eines [Funktionskörpers](/de/docs/Web/JavaScript/Reference/Statements/function) oder [statischen Initialisierungsblocks einer Klasse](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- Auf Modulebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- In der Initialisierung einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Insbesondere kann es nicht verwendet werden:

- Auf oberster Ebene eines Skripts, da Skriptbereiche persistent sind.
- Auf oberster Ebene einer [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Anweisung.
- In der Initialisierung einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife. Da die Schleifenvariable nur ein String oder Symbol sein kann, ist dies nicht sinnvoll.

Ein `using` deklariert eine verfügbare Ressource, die an die Lebensdauer des Gültigkeitsbereichs der Variablen (Block, Funktion, Modul, etc.) gebunden ist. Wenn der Gültigkeitsbereich beendet wird, wird die Ressource synchron entsorgt. Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann.

Wenn die Variable zuerst deklariert wird und ihr Wert nicht null ist, wird ein _Disposer_ aus dem Objekt abgerufen. Wenn die `[Symbol.dispose]`-Eigenschaft keine Funktion enthält, wird ein `TypeError` ausgelöst. Dieser Disposer wird im Gültigkeitsbereich gespeichert.

Wenn die Variable aus dem Gültigkeitsbereich verschwindet, wird der Disposer aufgerufen. Wenn der Gültigkeitsbereich mehrere `using`- oder {{jsxref("Statements/await_using", "await using")}}-Deklarationen enthält, werden alle Disposer in umgekehrter Reihenfolge der Deklaration ausgeführt, unabhängig vom Deklarationstyp. Es wird garantiert, dass alle Disposer ausgeführt werden (ähnlich wie der `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Alle während der Entsorgung ausgelösten Fehler, einschließlich des ursprünglichen Fehlers, der den Gültigkeitsbereich verlassen hat (falls zutreffend), werden alle in einem {{jsxref("SuppressedError")}} aggregiert, wobei jeder frühere Ausnahmefall als die „suppressed“-Eigenschaft und der spätere als die „error“-Eigenschaft hinzugefügt wird. Dieser `SuppressedError` wird ausgelöst, nachdem die Entsorgung abgeschlossen ist.

`using` verbindet das Ressourcenmanagement mit lexikalischen Gültigkeitsbereichen, was sowohl praktisch als auch manchmal verwirrend ist. Es gibt viele Möglichkeiten, den Wert der Variablen beizubehalten, auch wenn die Variable selbst außerhalb des Gültigkeitsbereichs ist, sodass Sie möglicherweise eine Referenz auf eine bereits entsorgte Ressource halten. Im Folgenden finden Sie einige Beispiele, in denen es möglicherweise nicht wie erwartet funktioniert. Wenn Sie das Ressourcenmanagement manuell verwalten möchten, während Sie dieselben Fehlermanagementgarantien beibehalten, können Sie stattdessen {{jsxref("DisposableStack")}} verwenden.

## Beispiele

In den folgenden Beispielen nehmen wir eine einfache `Resource`-Klasse an, die eine `getValue`-Methode und eine `[Symbol.dispose]()`-Methode hat:

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("Resource is disposed");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("Resource disposed");
  }
}
```

### `using` in einem Block

Die mit `using` deklarierte Ressource wird beim Verlassen des Blocks entsorgt.

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // resource disposed here
}
```

### `using` in einer Funktion

Sie können `using` im Funktionskörper verwenden. In diesem Fall wird die Ressource entsorgt, wenn die Funktion die Ausführung beendet, unmittelbar bevor die Funktion zurückkehrt.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Hier wird `resource[Symbol.dispose]()` nach `getValue()` aufgerufen, bevor die `return`-Anweisung ausgeführt wird.

Die Ressource kann die Deklaration überleben, falls sie von einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) erfasst wird:

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

In diesem Fall, wenn Sie `example()()` aufrufen, werden Sie immer `getValue` auf einer bereits entsorgten Ressource ausführen, da die Ressource entsorgt wurde, als `example` zurückkehrt. Wenn Sie die Ressource unmittelbar nach dem einmaligen Aufruf des Rückrufs entsorgen möchten, sollten Sie dieses Muster betrachten:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Hier _aliasen_ wir eine mit `const` deklarierte Ressource zu einer mit `using` deklarierten Ressource, sodass die Ressource erst entsorgt wird, nachdem der Rückruf aufgerufen wurde; beachten Sie, dass sie nie aufgeräumt wird, wenn sie nie aufgerufen wird.

### `using` in einem Modul

Sie können `using` auf oberster Ebene eines Moduls verwenden. In diesem Fall wird die Ressource entsorgt, wenn das Modul die Ausführung beendet.

```js
using resource = new Resource();
export const value = resource.getValue();
// resource disposed here
```

`export using` ist ungültige Syntax, aber Sie können eine anderswo mit `using` deklarierte Variable exportieren:

```js
using resource = new Resource();
export { resource };
```

Dies ist dennoch nicht empfehlenswert, da der Importeur immer eine entsorgte Ressource erhält. Ähnlich wie beim Closure-Problem führt dies dazu, dass der Wert der Ressource länger lebt als die Variable.

### `using` mit `for...of`

Sie können `using` in der Initialisierung einer `for...of`-Schleife verwenden. In diesem Fall wird die Ressource bei jeder Schleifeniteration entsorgt.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // resource disposed here
}
```

### Mehrere `using`

Die folgenden sind zwei gleichwertige Möglichkeiten, mehrere verfügbare Ressourcen zu deklarieren:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OR

using resource1 = new Resource();
using resource2 = new Resource();
```

In beiden Fällen wird bei Beendigung des Gültigkeitsbereichs `resource2` vor `resource1` entsorgt. Dies liegt daran, dass `resource2` eine Abhängigkeit von `resource1` haben könnte, daher wird es zuerst entsorgt, um sicherzustellen, dass `resource1` noch verfügbar ist, wenn `resource2` entsorgt wird.

### Optionales `using`

`using` erlaubt der Variable, den Wert `null` oder `undefined` zu haben, sodass die Ressource optional vorhanden sein kann. Das bedeutet, dass Sie nicht das Folgende tun müssen:

```js
function acquireResource() {
  // Imagine some real-world relevant condition here,
  // such as whether there's space to allocate for this resource
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}

const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

Sondern dies tun können:

```js
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using`-Deklaration ohne Verwendung der Variablen

Sie können eine automatische Ressourcendisponierung mit `using` erreichen, ohne die Variable tatsächlich zu verwenden. Dies ist sehr nützlich, um einen Kontext innerhalb eines Blocks einzurichten, wie zum Beispiel das Erstellen eines Locks:

```js
{
  using _ = new Lock();
  // Perform concurrent operations here
  // Lock disposed (released) here
}
```

Beachten Sie, dass `_` ein normaler Bezeichner ist, es ist jedoch eine Konvention, ihn als "Wegwerf"-Variable zu verwenden. Um mehrere ungenutzte Variablen zu erstellen, müssen Sie unterschiedliche Namen verwenden, beispielsweise durch Verwendung eines mit `_` vorgestellten Variablennamens.

### Initialisierung und temporäre tote Zonen

`using`-Variablen unterliegen denselben [temporären toten Zonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Einschränkungen wie `let`- und `const`-Variablen. Das bedeutet, dass Sie nicht auf die Variable zugreifen können, bevor die Initialisierung erfolgt ist—die gültige Lebensdauer der Ressource reicht streng von ihrer Initialisierung bis zum Ende ihres Gültigkeitsbereichs. Dies ermöglicht [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)-basiertes Ressourcenmanagement.

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Error: Cannot access 'resource' before initialization
  using resource = new Resource();
  useResource(); // Valid
}
useResource(); // Error: Resource is disposed
```

### Fehlerbehandlung

Die `using`-Deklaration ist am nützlichsten für das Ressourcenmanagement unter Berücksichtigung von Fehlern. Wenn Sie nicht aufpassen, können einige Ressourcen verloren gehen, weil der Fehler verhindert, dass nachfolgender Code ausgeführt wird.

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("Resource value too high");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

Dies wird den von `handleResource` geworfenen Fehler erfolgreich abfangen und protokollieren, und unabhängig davon, ob `handleResource` einen Fehler auslöst oder nicht, wird die Ressource vor dem Verlassen des `try`-Blocks entsorgt.

Hier, wenn Sie `using` nicht verwenden, könnten Sie etwas tun wie:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

Aber wenn `handleResource()` einen Fehler auslöst, erreicht die Kontrolle niemals `resource[Symbol.dispose]()`, und die Ressource geht verloren. Darüber hinaus können bei zwei Ressourcen Fehler, die bei früheren Entsorgungen geworfen werden, verhindern, dass spätere Entsorgungen ausgeführt werden, was zu weiteren Verlusten führt.

Betrachten Sie einen komplizierteren Fall, bei dem der Disposer selbst einen Fehler auslöst:

```js
class CantDisposeMe {
  #name;
  constructor(name) {
    this.#name = name;
  }
  [Symbol.dispose]() {
    throw new Error(`Can't dispose ${this.#name}`);
  }
}

let error;

try {
  using resource1 = new CantDisposeMe("resource1");
  using resource2 = new CantDisposeMe("resource2");
  throw new Error("Error in main block");
} catch (e) {
  error = e;
}
```

Sie können den Fehler, der in der Konsole Ihres Browsers geworfen wurde, inspizieren. Er hat die folgende Struktur:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

Wie Sie sehen können, enthält `error` alle Fehler, die während der Entsorgung geworfen wurden, als {{jsxref("SuppressedError")}}. Jeder zusätzliche Fehler wird als `error`-Eigenschaft hinzugefügt, und der ursprüngliche Fehler wird als `suppressed`-Eigenschaft hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Ressourcenmanagement](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
