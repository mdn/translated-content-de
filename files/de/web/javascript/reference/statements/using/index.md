---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: 0b0bdf5638d9b1bbff3c1738af61c4ac7fabd1ae
---

Die **`using`**-Deklaration deklariert lokale Variablen mit Block-Scope, deren Ressourcen _synchron freigegeben_ werden. Wie bei {{jsxref("Statements/const", "const")}} müssen mit `using` deklarierte Variablen initialisiert werden und dürfen nicht neu zugewiesen werden. Der Wert der Variablen muss entweder `null`, `undefined` oder ein Objekt mit einer [`[Symbol.dispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose)-Methode sein. Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die `[Symbol.dispose]()`-Methode des Objekts aufgerufen, um sicherzustellen, dass Ressourcen freigegeben werden.

## Syntax

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Der Name der zu deklarierenden Variablen. Jeder Name muss ein gültiger JavaScript-[Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sein und darf _kein_ [Destructuring-Bindungsmuster](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) sein.
- `valueN`
  - : Anfangswert der Variablen. Er kann ein beliebiger gültiger Ausdruck sein, sein Wert muss jedoch entweder `null`, `undefined` oder ein Objekt mit einer `[Symbol.dispose]()`-Methode sein.

## Beschreibung

Diese Deklaration kann verwendet werden:

- Innerhalb eines [Blocks](/de/docs/Web/JavaScript/Reference/Statements/block)
- Innerhalb eines [Funktionskörpers](/de/docs/Web/JavaScript/Reference/Statements/function) oder eines [statischen Initialisierungsblocks einer Klasse](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- Auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules)
- Im Initialisierungsteil einer [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-, [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)- oder [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleife

Insbesondere kann sie nicht verwendet werden:

- Auf der obersten Ebene eines Skripts, da der Gültigkeitsbereich eines Skripts bestehen bleibt.
- Auf der obersten Ebene einer [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch)-Anweisung.
- Im Initialisierungsteil einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife. Da die Schleifenvariable nur eine Zeichenfolge sein kann, wäre dies nicht sinnvoll.

Eine `using`-Deklaration deklariert eine freizugebende Ressource, deren Lebensdauer an den Gültigkeitsbereich der Variablen gebunden ist (Block, Funktion, Modul usw.). Beim Verlassen dieses Gültigkeitsbereichs wird die Ressource synchron freigegeben. Die Variable darf den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann.

Wenn die Variable deklariert wird und ihr Wert weder `null` noch `undefined` ist, wird aus dem Objekt eine _Freigabefunktion_ abgerufen. Enthält die `[Symbol.dispose]`-Eigenschaft keine Funktion, wird ein `TypeError` ausgelöst. Diese Freigabefunktion wird für den Gültigkeitsbereich gespeichert.

Wenn die Variable ihren Gültigkeitsbereich verlässt, wird die Freigabefunktion aufgerufen. Enthält der Gültigkeitsbereich mehrere `using`- oder {{jsxref("Statements/await_using", "await using")}}-Deklarationen, werden alle Freigabefunktionen unabhängig von der Art der Deklaration in umgekehrter Reihenfolge ihrer Deklaration ausgeführt. Die Ausführung aller Freigabefunktionen ist gewährleistet (ähnlich wie beim `finally`-Block in {{jsxref("Statements/try...catch", "try...catch...finally")}}). Werden mehrere Fehler ausgelöst, einschließlich des ursprünglichen Fehlers, der zum Verlassen des Gültigkeitsbereichs geführt hat (falls vorhanden), werden sie in einem {{jsxref("SuppressedError")}} zusammengefasst. Dabei wird jede frühere Ausnahme als `suppressed`-Eigenschaft und die spätere Ausnahme als `error`-Eigenschaft gespeichert. Nach Abschluss der Freigabe wird der `SuppressedError` ausgelöst.

`using` bindet die Ressourcenverwaltung an lexikalische Gültigkeitsbereiche. Das ist praktisch, kann aber manchmal auch verwirrend sein. Es gibt viele Möglichkeiten, den Wert einer Variablen zu erhalten, nachdem die Variable selbst ihren Gültigkeitsbereich verlassen hat. Daher können Sie weiterhin eine Referenz auf eine bereits freigegebene Ressource besitzen. Weiter unten finden Sie einige Beispiele für möglicherweise unerwartetes Verhalten. Wenn Sie die Freigabe von Ressourcen selbst steuern und dabei dieselben Garantien für die Fehlerbehandlung behalten möchten, können Sie stattdessen {{jsxref("DisposableStack")}} verwenden.

## Beispiele

In den folgenden Beispielen gehen wir von einer einfachen `Resource`-Klasse mit einer `getValue`-Methode und einer `[Symbol.dispose]()`-Methode aus:

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

Sie können `using` in einem Funktionskörper verwenden. In diesem Fall wird die Ressource freigegeben, wenn die Ausführung der Funktion endet, unmittelbar bevor die Funktion zurückkehrt.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Hier wird `resource[Symbol.dispose]()` nach `getValue()` aufgerufen, bevor die `return`-Anweisung ausgeführt wird.

Die Ressource kann über die Deklaration hinaus bestehen bleiben, wenn sie von einer [Closure](/de/docs/Web/JavaScript/Guide/Closures) erfasst wird:

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

Wenn Sie in diesem Fall `example()()` aufrufen, führen Sie `getValue` immer für eine bereits freigegebene Ressource aus, da die Ressource bei der Rückkehr aus `example` freigegeben wurde. Wenn Sie die Ressource unmittelbar nach dem ersten Aufruf der Callback-Funktion freigeben möchten, können Sie folgendes Muster verwenden:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Hier weisen wir einer mit `const` deklarierten Ressource über eine mit `using` deklarierte Variable einen _Alias_ zu. Dadurch wird die Ressource erst nach dem Aufruf der Callback-Funktion freigegeben. Beachten Sie, dass die Ressource nie freigegeben wird, wenn die Callback-Funktion nie aufgerufen wird.

### `using` in einem Modul

Sie können `using` auf der obersten Ebene eines Moduls verwenden. In diesem Fall wird die Ressource freigegeben, wenn die Ausführung des Moduls endet.

```js
using resource = new Resource();
export const value = resource.getValue();
// resource disposed here
```

`export using` ist keine gültige Syntax. Sie können aber eine an anderer Stelle mit `using` deklarierte Variable mit `export` exportieren:

```js
using resource = new Resource();
export { resource };
```

Davon wird dennoch abgeraten, da der Importeur immer eine bereits freigegebene Ressource erhält. Ähnlich wie beim Closure-Problem bleibt der Wert der Ressource dadurch länger bestehen als die Variable.

### `using` mit `for...of`

Sie können `using` im Initialisierungsteil einer `for...of`-Schleife verwenden. In diesem Fall wird die Ressource bei jedem Schleifendurchlauf freigegeben.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // resource disposed here
}
```

### Mehrere `using`-Deklarationen

Die folgenden beiden Möglichkeiten, mehrere freizugebende Ressourcen zu deklarieren, sind gleichwertig:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OR

using resource1 = new Resource();
using resource2 = new Resource();
```

In beiden Fällen wird beim Verlassen des Gültigkeitsbereichs `resource2` vor `resource1` freigegeben. Der Grund dafür ist, dass `resource2` von `resource1` abhängen kann. Durch diese Reihenfolge bleibt `resource1` verfügbar, während `resource2` freigegeben wird.

### Optionales `using`

Bei `using` darf die Variable den Wert `null` oder `undefined` haben, sodass die Ressource optional vorhanden sein kann. Wenn Sie beispielsweise prüfen, ob eine bestimmte Ressource verfügbar ist:

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

Müssen Sie nicht Folgendes tun:

```js example-bad
const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

Stattdessen können Sie Folgendes tun:

```js example-good
using resource = acquireResource();
console.log(resource?.getValue());
```

### `using`-Deklaration ohne Verwendung der Variablen

Mit `using` können Sie Ressourcen automatisch freigeben, ohne die Variable selbst zu verwenden. Das ist sehr nützlich, um innerhalb eines Blocks einen Kontext einzurichten, etwa durch das Anlegen einer Sperre:

```js
{
  using _ = new Lock();
  // Perform concurrent operations here
  // Lock disposed (released) here
}
```

Beachten Sie, dass `_` ein gewöhnlicher Bezeichner ist. Seine Verwendung als Variable, deren Wert nicht benötigt wird, ist jedoch eine Konvention. Wenn Sie mehrere ungenutzte Variablen anlegen möchten, benötigen Sie unterschiedliche Namen, beispielsweise Variablennamen mit dem Präfix `_`.

### Initialisierung und temporäre tote Zonen

Für `using`-Variablen gilt dieselbe Einschränkung durch die [temporäre tote Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) wie für `let`- und `const`-Variablen. Das bedeutet, dass Sie vor der Initialisierung nicht auf die Variable zugreifen können. Die gültige Lebensdauer der Ressource reicht somit genau von ihrer Initialisierung bis zum Ende ihres Gültigkeitsbereichs. Dies ermöglicht eine Ressourcenverwaltung nach dem [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)-Prinzip.

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

Die `using`-Deklaration ist besonders nützlich, um die Freigabe von Ressourcen bei Fehlern zu gewährleisten. Wenn Sie nicht vorsichtig sind, können Ressourcen unfreigegeben bleiben, weil ein Fehler die Ausführung des nachfolgenden Codes verhindert.

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

Damit wird ein von `handleResource` ausgelöster Fehler abgefangen und protokolliert. Unabhängig davon, ob `handleResource` einen Fehler auslöst, wird die Ressource vor dem Verlassen des `try`-Blocks freigegeben.

Ohne `using` könnten Sie stattdessen etwa Folgendes tun:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

Wenn `handleResource()` jedoch einen Fehler auslöst, erreicht die Ausführung `resource[Symbol.dispose]()` nicht mehr, und die Ressource bleibt unfreigegeben. Wenn Sie zwei Ressourcen haben, können außerdem Fehler bei einer früheren Freigabe die Freigabe weiterer Ressourcen verhindern.

Betrachten Sie einen komplizierteren Fall, in dem die Freigabefunktion selbst einen Fehler auslöst:

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

Sie können den ausgelösten Fehler in der Konsole Ihres Browsers untersuchen. Er hat die folgende Struktur:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Error in main block
    error: Error: Can't dispose resource2
  error: Error: Can't dispose resource1
```

Wie Sie sehen, enthält `error` alle bei der Freigabe ausgelösten Fehler in Form eines {{jsxref("SuppressedError")}}. Jeder weitere Fehler wird als `error`-Eigenschaft hinzugefügt, der vorherige Fehler als `suppressed`-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Ressourcenverwaltung](/de/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/await_using", "await using")}}
- {{jsxref("Symbol.dispose")}}
- {{jsxref("DisposableStack")}}
