---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: 075e089ec955f14ed65dfaa0bf3311051c58f666
---

Die **`using`**-Deklaration erklärt block-skopierte lokale Variablen, die _synchron freigegeben_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen Variablen, die mit `using` deklariert werden, initialisiert werden und können nicht neu zugewiesen werden. Der Wert der Variable muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable außer Reichweite gerät, wird die `[Symbol.dispose]()`-Methode des Objekts aufgerufen, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variable. Jede muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und _kein_ [Destrukturierungs-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Anfangswert der Variablen. Es kann jeder gültige Ausdruck sein, aber sein Wert muss entweder `null`, `undefined` oder ein Objekt mit einer `[Symbol.dispose]()`-Methode sein.

## Beschreibung

Diese Deklaration kann verwendet werden:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block)
- Innerhalb eines [Funktionskörpers](/de/docs/Web/JavaScript/Reference/Statements/function) oder eines [statischen Initialisierungsblocks in der Klasse](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- Auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- In der Initialisierung einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)- oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Es kann nicht verwendet werden:

- Auf der obersten Ebene eines Skripts, da Skript-Skopen persistent sind.
- Auf der obersten Ebene einer [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Anweisung.
- In der Initialisierung einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife. Da die Schleifenvariable nur eine Zeichenkette oder ein Symbol sein kann, ergibt dies keinen Sinn.

Ein `using` erklärt eine freigebbare Ressource, die mit der Lebensdauer des Skopenumfangs der Variable (Block, Funktion, Modul usw.) verbunden ist. Wenn das Skopus endet, wird die Ressource synchron freigegeben. Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann.

Wenn die Variable zuerst deklariert wird und ihr Wert nicht null ist, wird ein _Disposer_ vom Objekt abgerufen. Wenn die `[Symbol.dispose]`-Eigenschaft keine Funktion enthält, wird ein `TypeError` ausgelöst. Dieser Disposer wird im Umfang gespeichert.

Wenn die Variable außer Reichweite gerät, wird der Disposer aufgerufen. Wenn der Skopus mehrere `using` oder {{jsxref("Statements/await_using", "await using")}}-Deklarationen enthält, werden alle Disposer in umgekehrter Reihenfolge der Deklaration ausgeführt, unabhängig von der Art der Deklaration. Alle Disposer werden garantiert ausgeführt (ähnlich wie der `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Alle während der Freigabe auftretenden Fehler, einschließlich des anfänglichen Fehlers, der das Skopus-Ende verursacht hat (falls zutreffend), werden alle in einem {{jsxref("SuppressedError")}} aggregiert, wobei jede frühere Ausnahme als `suppressed`-Eigenschaft und die spätere Ausnahme als `error`-Eigenschaft dient. Dieser `SuppressedError` wird geworfen, nachdem die Freigabe abgeschlossen ist.

`using` verknüpft das Ressourcenmanagement mit lexikalischen Skopen, was sowohl praktisch als auch manchmal verwirrend ist. Es gibt viele Möglichkeiten, den Wert der Variable zu bewahren, wenn die Variable selbst außer Reichweite ist, sodass Sie möglicherweise einen Verweis auf eine bereits freigegebene Ressource halten. Unten finden Sie Beispiele, bei denen es möglicherweise nicht wie erwartet funktioniert. Wenn Sie die Freigabe von Ressourcen selbst verwalten möchten, während Sie die gleichen Garantien für Fehlerbehandlung einhalten, können Sie stattdessen {{jsxref("DisposableStack")}} verwenden.

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

Die mit `using` deklarierte Ressource wird beim Verlassen des Blocks freigegeben.

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // resource disposed here
}
```

### `using` in einer Funktion

Sie können `using` in einem Funktionskörper verwenden. In diesem Fall wird die Ressource freigegeben, wenn die Funktion ihre Ausführung beendet, unmittelbar bevor die Funktion zurückkehrt.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Hier wird `resource[Symbol.dispose]()` nach `getValue()`, aber bevor die `return`-Anweisung ausgeführt wird, aufgerufen.

Die Ressource kann die Deklaration überleben, falls sie von einem [Closure](/de/docs/Web/JavaScript/Guide/Closures) eingefangen wird:

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

In diesem Fall, wenn Sie `example()()` aufrufen, wird stets `getValue` auf eine Ressource ausgeführt, die bereits freigegeben wurde, da die Ressource freigegeben wurde, als `example` zurückkehrte. Falls Sie die Ressource sofort nach einmaligem Aufrufen des Rückrufs freigeben möchten, erwägen Sie dieses Muster:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Hier, wir _aliasen_ eine mit `const` deklarierte Ressource zu einer mit `using` deklarierten Ressource, sodass die Ressource erst nach dem Aufruf des Rückrufs freigegeben wird; beachten Sie, dass die Ressource niemals bereinigt wird, wenn sie nie aufgerufen wird.

### `using` in einem Modul

Sie können `using` auf der obersten Ebene eines Moduls verwenden. In diesem Fall wird die Ressource freigegeben, wenn das Modul die Ausführung beendet.

```js
using resource = new Resource();
export const value = resource.getValue();
// resource disposed here
```

`export using` ist ungültige Syntax, aber Sie können eine anderswo mit `using` deklarierte Variable `exportieren`:

```js
using resource = new Resource();
export { resource };
```

Dies wird dennoch abgeraten, da der Importeur immer eine freigegebene Ressource erhält. Ähnlich wie beim Closure-Problem führt dies dazu, dass der Wert der Ressource länger besteht als die Variable.

### `using` mit `for...of`

Sie können `using` in der Initialisierung einer `for...of`-Schleife verwenden. In diesem Fall wird die Ressource in jeder Schleifeniteration freigegeben.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // resource disposed here
}
```

### Mehrere `using`

Die folgenden sind zwei gleichwertige Möglichkeiten, mehrere freigebbare Ressourcen zu deklarieren:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OR

using resource1 = new Resource();
using resource2 = new Resource();
```

In beiden Fällen wird, wenn das Skop endet, `resource2` vor `resource1` freigegeben. Dies liegt daran, dass `resource2` möglicherweise von `resource1` abhängt, daher wird es zuerst freigegeben, um sicherzustellen, dass `resource1` noch verfügbar ist, wenn `resource2` freigegeben wird.

### Optional `using`

`using` erlaubt der Variable, einen Wert von `null` oder `undefined` zu haben, sodass die Ressource optional vorhanden sein kann. Dies bedeutet, dass Sie beispielsweise bei der Überprüfung der Verfügbarkeit einer Ressource irgendeiner Art:

```js
function acquireResource() {
  // Imagine some real-world relevant condition here,
  // such as whether there's space to allocate for this resource
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}
```

nicht tun müssen:

```js example-bad
const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

Stattdessen können Sie dies tun:

```js example-good
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using`-Deklaration ohne Verwendung der Variable

Sie können automatisches Freigeben von Ressourcen mit `using` erreichen, ohne die Variable zu verwenden. Dies ist sehr nützlich, um einen Kontext innerhalb eines Blocks einzurichten, wie das Erstellen einer Sperre:

```js
{
  using _ = new Lock();
  // Perform concurrent operations here
  // Lock disposed (released) here
}
```

Beachten Sie, dass `_` ein normaler Bezeichner ist, jedoch konventionell als "Wegwerf"-Variable verwendet wird. Um mehrere ungenutzte Variablen zu erstellen, müssen Sie unterschiedliche Namen verwenden, z.B. indem Sie einen Variablennamen mit `_` voranstellen.

### Initialisierung und temporale tote Zonen

`using`-Variablen unterliegen den gleichen [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Einschränkungen wie `let`- und `const`-Variablen. Das bedeutet, dass Sie nicht auf die Variable zugreifen können, bevor sie initialisiert ist—die gültige Lebensdauer der Ressource reicht strikt von der Initialisierung bis zum Ende ihres Skopos. Dies ermöglicht [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)-ähnliches Ressourcenmanagement.

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

Die `using`-Deklaration ist am nützlichsten für das Verwalten der Ressourcenfreigabe bei Vorhandensein von Fehlern. Wenn Sie nicht vorsichtig sind, können einige Ressourcen auslaufen, weil der Fehler das nachfolgende Ausführen von Code verhindert.

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

Dies wird den von `handleResource` ausgelösten Fehler erfolgreich abfangen und protokollieren, und unabhängig davon, ob `handleResource` einen Fehler auslöst oder nicht, wird die Ressource vor dem Verlassen des `try`-Blocks freigegeben.

Hier, wenn Sie `using` nicht verwenden, könnten Sie so etwas tun:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

Wenn jedoch `handleResource()` einen Fehler auslöst, erreicht die Kontrolle niemals `resource[Symbol.dispose]()`, und die Ressource wird nicht freigegeben. Darüber hinaus können Fehler, die beim Freigeben früherer Ressourcen auftreten, verhindern, dass später freigegebene Ressourcen ausgeführt werden, was zu weiteren Lecks führt.

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

Sie können den in der Konsole Ihres Browsers geworfenen Fehler untersuchen. Er hat folgende Struktur:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

Wie Sie sehen, enthält `error` alle während der Freigabe geworfenen Fehler als {{jsxref("SuppressedError")}}. Jeder zusätzliche Fehler wird als die `error`-Eigenschaft hinzugefügt, und der ursprüngliche Fehler wird als die `suppressed`-Eigenschaft hinzugefügt.

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
