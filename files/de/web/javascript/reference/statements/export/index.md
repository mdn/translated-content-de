---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: a07ac6e396e3cc9632814ff03a0534e823270f48
---

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können anschließend mit der {{jsxref("Statements/import", "import")}}-Deklaration oder mit [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import) in andere Programme importiert werden. Der Wert einer importierten Bindung kann sich im Modul, das ihn exportiert, ändern — wenn ein Modul den Wert einer von ihm exportierten Bindung aktualisiert, wird die Aktualisierung auch beim importierten Wert sichtbar.

Um die `export`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Laufzeitsystem als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML geschieht dies, indem `type="module"` zum {{HTMLElement("script")}}-Tag hinzugefügt wird, oder indem das Modul von einem anderen Modul importiert wird. Module werden automatisch im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

## Syntax

```js-nolint
// Exporting declarations
export let name1, name2/*, … */; // also var
export const name1 = 1, name2 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// Export list
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// Default exports
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// Aggregating modules
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
```

- `nameN`
  - : Identifier, der exportiert werden soll (sodass er in einem anderen Skript via {{jsxref("Statements/import", "import")}} importiert werden kann). Wenn Sie ein Alias mit `as` verwenden, kann der tatsächlich exportierte Name als String-Literal angegeben werden, das möglicherweise kein gültiger Identifier ist.

## Beschreibung

Jedes Modul kann zwei verschiedene Arten von Exporten haben, _named export_ und _default export_. Ein Modul kann mehrere benannte Exporte haben, aber nur einen Standardexport. Jeder Typ entspricht einer der obigen Syntaxen.

Benannte Exporte:

```js
// export features declared elsewhere
export { myFunction2, myVariable2 };

// export individual features (can export var, let,
// const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}
```

Nach dem `export`-Schlüsselwort können Sie `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassendeklarationen verwenden. Sie können auch die Syntax `export { name1, name2 }` verwenden, um eine Liste von Namen zu exportieren, die anderweitig deklariert wurden. Beachten Sie, dass `export {}` kein leeres Objekt exportiert — es ist eine No-Op-Deklaration, die nichts exportiert (eine leere Namensliste).

Sie können `export` nicht auf eine {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration anwenden. Sie können jedoch eine anderswo deklarierte Variable mit `using` oder `await using` exportieren. Dies wird jedoch dringend abgeraten, da die Variable verworfen wird, sobald das Modul fertig ausgeführt ist, wodurch alle Importeure einen bereits verworfenen Wert erhalten.

```js-nolint example-bad
export using resource1 = getResource(); // SyntaxError

// Allowed by syntax but discouraged
using resource2 = getResource();
export { resource2 };
```

Export-Deklarationen unterliegen nicht den Regeln der [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz). Sie können deklarieren, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert ist.

```js
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `x`.
```

Standardexporte:

```js
// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
```

> [!NOTE]
> Namen für Exportdeklarationen müssen sich voneinander unterscheiden. Doppelte Namen bei Exporten oder die Verwendung von mehr als einem `default`-Export führen zu einem {{jsxref("SyntaxError")}} und verhindern, dass das Modul ausgewertet wird.

Die `export default`-Syntax erlaubt jeden Ausdruck.

```js
export default 1 + 1;
```

Als Sonderfall werden Funktionen und Klassen als _Deklarationen_ exportiert, nicht als Ausdrücke, und diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen gehoben werden.

```js
// Works because `foo` is a function declaration,
// not a function expression
foo();

export default function foo() {
  console.log("Hi");
}

// It's still technically a declaration, but it's allowed
// to be anonymous
export default function () {
  console.log("Hi");
}
```

Benannte Exporte sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Importieren dieses Moduls müssen benannte Exporte mit genau demselben Namen (optional mit `as` umbenannt) referenziert werden, aber der Standardexport kann mit jedem Namen importiert werden. Zum Beispiel:

```js
// file test.js
const k = 12;
export default k;
```

```js
// some other file
import m from "./test"; // note that we have the freedom to use import m instead of import k, because k was default export

console.log(m); // 12
```

Sie können benannte Exporte auch umbenennen, um Namenskonflikte zu vermeiden:

```js
export { myFunction as function1, myVariable as variable };
```

Sie können einen Namen in etwas umbenennen, das kein gültiger Identifier ist, indem Sie ein String-Literal verwenden. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-exporting / Aggregating

Ein Modul kann auch Werte, die von anderen Modulen exportiert werden, "weiterleiten", ohne den Aufwand des Schreibens von zwei separaten Import-/Exportanweisungen. Dies ist oft nützlich, wenn man ein einzelnes Modul erstellt, das verschiedene Exporte aus verschiedenen Modulen an einem Ort konzentriert (üblicherweise als "Barrel-Modul" bezeichnet).

Dies kann mit der "export from"-Syntax erreicht werden:

```js
export { default as function1, function2 } from "bar.js";
```

Was vergleichbar ist mit einer Kombination aus Import und Export, außer dass `function1` und `function2` im aktuellen Modul nicht verfügbar werden:

```js
import { default as function1, function2 } from "bar.js";

export { function1, function2 };
```

Die meisten "import from"-Syntaxen haben "export from"-Gegenstücke.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

Es gibt auch `export * from "mod"`, obwohl es kein `import * from "mod"` gibt. Dies re-exportiert alle **benannten** Exporte von `mod` als die benannten Exporte des aktuellen Moduls, aber der Standardexport von `mod` wird nicht re-exportiert. Wenn zwei Wildcard-Exportanweisungen denselben Namen implizit re-exportieren, wird keiner re-exportiert.

```js
// -- mod1.js --
export const a = 1;

// -- mod2.js --
export const a = 3;

// -- barrel.js --
export * from "./mod1.js";
export * from "./mod2.js";

// -- main.js --
import * as ns from "./barrel.js";

console.log(ns.a); // undefined
```

Der Versuch, den doppelten Namen direkt zu importieren, führt zu einem Fehler.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Das Folgende ist syntaktisch ungültig, trotz des gleichwertigen Imports:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

Die korrekte Methode dazu ist, den Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Die "export from"-Syntax erlaubt es, das `as`-Token wegzulassen, was den Standardexport immer noch als Standardexport re-exportiert.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Features, die `import` unterstützt — zum Beispiel [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

## Beispiele

### Verwendung von benannten Exporten

In einem Modul `my-module.js` könnten wir den folgenden Code einfügen:

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw() {
    console.log("From graph draw function");
  },
};

export { cube, foo, graph };
```

Dann im Top-Level-Modul, das in Ihrer HTML-Seite enthalten ist, könnten wir haben:

```js
import { cube, foo, graph } from "./my-module.js";

graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw(); // Logs "From graph draw function"
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

Es ist wichtig, Folgendes zu beachten:

- Sie müssen dieses Skript in Ihr HTML mit einem {{HTMLElement("script")}}-Element des Typs `type="module"` einfügen, damit es als Modul erkannt und entsprechend behandelt wird.
- Sie können keine JS-Module über eine `file://`-URL ausführen — Sie erhalten [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler. Sie müssen es über einen HTTP-Server ausführen.

### Verwendung des Standardexports

Wenn wir einen einzelnen Wert exportieren wollen, der ein ganzes Modul repräsentiert, könnten wir einen Standardexport verwenden:

```js
// module "cube.js"

export default function cube(x) {
  return x * x * x;
}
```

Dann, in einem anderen Skript, ist es einfach, den Standardexport zu importieren:

```js
import cube from "./cube.js";

console.log(cube(3)); // 27
```

### Verwendung von export from

Nehmen wir ein Beispiel, bei dem wir die folgende Hierarchie haben:

- `childModule1.js`: exportiert `myFunction` und `myVariable`
- `childModule2.js`: exportiert `MyClass`
- `parentModule.js`: dient als Aggregator (und tut nichts anderes)
- Top-Level-Modul: konsumiert die Exporte von `parentModule.js`

So würde es mit Code-Snippets aussehen:

```js
// In childModule1.js
function myFunction() {
  console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };
```

```js
// In childModule2.js
class MyClass {
  constructor(x) {
    this.x = x;
  }
}

export { MyClass };
```

```js
// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export { myFunction, myVariable } from "childModule1.js";
export { MyClass } from "childModule2.js";
```

```js
// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
import { myFunction, myVariable, MyClass } from "parentModule.js";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/import", "import")}}
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) Leitfaden
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
