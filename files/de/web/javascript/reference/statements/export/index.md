---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: 3d53de838dbcb25b210ccd708c681771cdeb14e4
---

{{jsSidebar("Statements")}}

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können dann in andere Programme mit der {{jsxref("Statements/import", "import")}}-Deklaration oder dem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) importiert werden. Der Wert einer importierten Bindung kann sich im Modul, das sie exportiert, ändern — wenn ein Modul den Wert einer exportierten Bindung aktualisiert, wird die Aktualisierung im importierten Wert sichtbar.

Um die `export`-Deklaration in einer Quelldatei verwenden zu können, muss die Datei zur Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch das Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht oder indem es von einem anderen Modul importiert wird. Module werden automatisch im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Bezeichner, der exportiert werden soll (damit er in einem anderen Skript über {{jsxref("Statements/import", "import")}} importiert werden kann). Wenn Sie ein Alias mit `as` verwenden, kann der tatsächlich exportierte Name als String-Literal angegeben werden, das möglicherweise kein gültiger Bezeichner ist.

## Beschreibung

Jedes Modul kann zwei verschiedene Exporttypen haben, _Named Export_ und _Default Export_. Sie können mehrere Named Exports pro Modul haben, aber nur einen Default Export. Jeder Typ entspricht einer der oben genannten Syntaxen.

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

Nach dem `export`-Schlüsselwort können Sie `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassendeklarationen verwenden. Sie können auch die Syntax `export { name1, name2 }` verwenden, um eine Liste von anderswo deklarierten Namen zu exportieren. Beachten Sie, dass `export {}` kein leeres Objekt exportiert — es ist eine No-Op-Deklaration, die nichts exportiert (eine leere Namensliste).

Exportdeklarationen unterliegen nicht den [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Regeln. Sie können deklarieren, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert wird.

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
> Namen für Exportdeklarationen müssen sich voneinander unterscheiden. Das Vorhandensein von Exporten mit doppelten Namen oder die Verwendung von mehr als einem `default`-Export führt zu einem {{jsxref("SyntaxError")}} und verhindert, dass das Modul ausgewertet wird.

Die `export default`-Syntax erlaubt jeden Ausdruck.

```js
export default 1 + 1;
```

Als Sonderfall werden Funktionen und Klassen als _Deklarationen_ und nicht als Ausdrücke exportiert, und diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen gehoben werden.

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

Named Exports sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Import dieses Moduls müssen Named Exports mit genau demselben Namen referenziert werden (optional mit `as` umbenennen), aber der Default Export kann mit einem beliebigen Namen importiert werden. Zum Beispiel:

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

Sie können Named Exports auch umbenennen, um Namenskonflikte zu vermeiden:

```js
export { myFunction as function1, myVariable as variable };
```

Sie können einen Namen in etwas umbenennen, das kein gültiger Bezeichner ist, indem Sie ein String-Literal verwenden. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-Export / Zusammenführen

Ein Modul kann auch Werte, die aus anderen Modulen exportiert wurden, "weiterleiten", ohne zwei separate Import-/Exportanweisungen schreiben zu müssen. Dies ist oft nützlich, wenn Sie ein einziges Modul erstellen, das verschiedene Exporte aus verschiedenen Modulen (gewöhnlich "Barrel Module" genannt) konzentriert.

Dies kann mit der "export from"-Syntax erreicht werden:

```js
export { default as function1, function2 } from "bar.js";
```

Dies ist vergleichbar mit einer Kombination aus Import und Export, außer dass `function1` und `function2` im aktuellen Modul nicht verfügbar werden:

```js
import { default as function1, function2 } from "bar.js";

export { function1, function2 };
```

Die meisten "import from"-Syntaxen haben "export from"-Entsprechungen.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

Es gibt auch `export * from "mod"`, obwohl es kein `import * from "mod"` gibt. Dies re-exportiert alle **Named Exports** von `mod` als Named Exports des aktuellen Moduls, aber der Default Export von `mod` wird nicht re-exportiert. Wenn es zwei Wildcard Export-Anweisungen gibt, die denselben Namen implizit re-exportieren, wird keiner von beiden re-exportiert.

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

Der Versuch, den doppelten Namen direkt zu importieren, wird einen Fehler auslösen.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Das Folgende ist syntaktisch ungültig, trotz seines Importequivalents:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

Der richtige Weg, dies zu tun, besteht darin, den Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Die "export from"-Syntax ermöglicht es, dass das `as`-Token weggelassen wird, wodurch der Default Export weiterhin als Default Export re-exportiert wird.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die `import` unterstützt — zum Beispiel [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

## Beispiele

### Verwenden von Named Exports

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

Dann könnten wir im Top-Level-Modul, das in Ihre HTML-Seite eingebunden ist, folgendes haben:

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

- Sie müssen dieses Skript in Ihrem HTML mit einem {{HTMLElement("script")}}-Element vom Typ `type="module"` einfügen, damit es als Modul erkannt und entsprechend behandelt wird.
- Sie können JS-Module nicht über eine `file://` URL ausführen — das führt zu [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehlern. Sie müssen es über einen HTTP-Server ausführen.

### Verwenden des Default Exports

Wenn wir einen einzelnen Wert exportieren möchten, der ein ganzes Modul repräsentiert, könnten wir einen Default Export verwenden:

```js
// module "cube.js"

export default function cube(x) {
  return x * x * x;
}
```

Dann ist es in einem anderen Skript einfach, den Default Export zu importieren:

```js
import cube from "./cube.js";

console.log(cube(3)); // 27
```

### Verwenden von Export from

Nehmen wir ein Beispiel, bei dem wir folgende Hierarchie haben:

- `childModule1.js`: exportiert `myFunction` und `myVariable`
- `childModule2.js`: exportiert `MyClass`
- `parentModule.js`: fungiert als Aggregator (und macht nichts anderes)
- Top-Level-Modul: nutzt die Exporte von `parentModule.js`

So würde das mit Codeausschnitten aussehen:

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
- [Exploring JS, Kap. 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
