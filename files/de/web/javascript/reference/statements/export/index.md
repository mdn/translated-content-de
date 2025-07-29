---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können dann in andere Programme mit der {{jsxref("Statements/import", "import")}}-Deklaration oder durch [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) importiert werden. Der Wert einer importierten Bindung kann sich im Modul, das es exportiert, ändern — wenn ein Modul den Wert einer Bindung aktualisiert, die es exportiert, wird die Aktualisierung im importierten Wert sichtbar.

Um die `export`-Deklaration in einer Quelldatei zu verwenden, muss die Datei von der Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. Dies wird in HTML durch das Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht oder indem die Datei von einem anderen Modul importiert wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Bezeichner, der exportiert werden soll (damit er über `import` in einem anderen Skript importiert werden kann). Wenn Sie ein Alias mit `as` verwenden, kann der tatsächlich exportierte Name als Zeichenfolgenliteral angegeben werden, das möglicherweise kein gültiger Bezeichner ist.

## Beschreibung

Jedes Modul kann zwei verschiedene Arten von Exporten haben: _Named Export_ und _Default Export_. Sie können mehrere Named Exports pro Modul haben, aber nur einen Default Export. Jeder Type entspricht einer der obigen Syntaxe.

Named Exports:

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

Nach dem `export`-Schlüsselwort können `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassendeklarationen verwendet werden. Sie können auch die `export { name1, name2 }`-Syntax verwenden, um eine Liste von Namen zu exportieren, die anderswo deklariert wurden. Beachten Sie, dass `export {}` kein leeres Objekt exportiert — es ist eine Nicht-Operation-Deklaration, die nichts exportiert (eine leere Namensliste).

Sie können `export` nicht für eine {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration verwenden. Sie können jedoch eine Variable exportieren, die anderswo mit `using` oder `await using` deklariert wurde. Dies wird jedoch dringend abgeraten, da die Variable entsorgt wird, sobald das Modul fertig ist, was dazu führt, dass alle Importeure einen schon entsorgten Wert erhalten.

```js-nolint example-bad
export using resource1 = getResource(); // SyntaxError

// Allowed by syntax but discouraged
using resource2 = getResource();
export { resource2 };
```

Export-Deklarationen unterliegen nicht den [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Regeln. Sie können deklarieren, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert ist.

```js
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `x`.
```

Default Exports:

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
> Namen für Export-Deklarationen müssen sich voneinander unterscheiden. Exporte mit doppelten Namen oder die Nutzung von mehr als einem `default`-Export führen zu einem {{jsxref("SyntaxError")}} und hindern das Modul daran, ausgewertet zu werden.

Die `export default`-Syntax erlaubt jeden Ausdruck.

```js
export default 1 + 1;
```

Als Spezialfall werden Funktionen und Klassen als _Deklarationen_ exportiert, nicht als Ausdrücke, und diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen gehoben werden.

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

Named Exports sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Import dieses Moduls müssen Named Exports mit genau dem gleichen Namen angesprochen werden (optional kann dieser mit `as` umbenannt werden), aber der Default-Export kann mit jedem beliebigen Namen importiert werden. Zum Beispiel:

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

Sie können auch Named Exports umbenennen, um Namenskonflikte zu vermeiden:

```js
export { myFunction as function1, myVariable as variable };
```

Sie können einen Namen in etwas umbenennen, das kein gültiger Bezeichner ist, indem Sie ein Zeichenfolgenliteral verwenden. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-exporting / Aggregating

Ein Modul kann auch die von anderen Modulen exportierten Werte weiterleiten, ohne zwei separate Import/Export-Deklarationen schreiben zu müssen. Dies ist oft nützlich, wenn ein einzelnes Modul erstellt wird, das verschiedene Exporte aus verschiedenen Modulen bündelt (häufig als "Barrel-Modul" bezeichnet).

Dies kann mit der "export from"-Syntax erreicht werden:

```js
export { default as function1, function2 } from "bar.js";
```

Dies ist vergleichbar mit einer Kombination aus Import und Export, außer dass `function1` und `function2` im aktuellen Modul nicht zur Verfügung stehen:

```js
import { default as function1, function2 } from "bar.js";

export { function1, function2 };
```

Die meisten der "import from"-Syntaxen haben "export from"-Gegenstücke.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

Es gibt auch `export * from "mod"`, obwohl es kein `import * from "mod"` gibt. Dies exportiert alle **Named** Exporte von `mod` als Named Exporte des aktuellen Moduls weiter, aber der Default-Export von `mod` wird nicht weiterexportiert. Wenn es zwei Wildcard-Export-Aussagen gibt, die denselben Namen implizit weiterexportieren, wird keiner von ihnen weiterexportiert.

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

Der Versuch, den doppelten Namen direkt zu importieren, wird einen Fehler verursachen.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Folgendes ist trotz der importäquivalenten Syntax syntaktisch ungültig:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

Der korrekte Weg, dies zu tun, ist der Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Die "export from"-Syntax erlaubt es, das `as`-Token wegzulassen, wodurch der Default-Export trotzdem als Default-Export weiterexportiert wird.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die `import` unterstützt — beispielsweise [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

## Beispiele

### Verwendung von Named Exports

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

Dann könnten wir im Top-Level-Modul, das in Ihre HTML-Seite eingebunden ist, Folgendes haben:

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

Beachten Sie Folgendes:

- Sie müssen dieses Skript in Ihrem HTML mit einem {{HTMLElement("script")}}-Element vom `type="module"` einfügen, damit es als Modul erkannt und entsprechend behandelt wird.
- Sie können JS-Module nicht über eine `file://`-URL ausführen — Sie erhalten [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler. Sie müssen es über einen HTTP-Server laufen lassen.

### Verwendung des Default-Exports

Wenn wir einen einzigen Wert exportieren möchten, der ein ganzes Modul darstellt, könnten wir einen Default-Export verwenden:

```js
// module "cube.js"

export default function cube(x) {
  return x * x * x;
}
```

Dann ist es in einem anderen Skript unkompliziert, den Default-Export zu importieren:

```js
import cube from "./cube.js";

console.log(cube(3)); // 27
```

### Verwendung von "Export from"

Nehmen wir ein Beispiel, in dem wir die folgende Hierarchie haben:

- `childModule1.js`: Exportiert `myFunction` und `myVariable`
- `childModule2.js`: Exportiert `MyClass`
- `parentModule.js`: Fungiert als Aggregator (und tut sonst nichts)
- Top-Level-Modul: Konsumiert die Exporte von `parentModule.js`

So würde es in Code-Snippets aussehen:

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
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
