---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können dann mit der {{jsxref("Statements/import", "import")}}-Deklaration oder dem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) in andere Programme importiert werden. Der Wert einer importierten Bindung kann sich in dem Modul ändern, das sie exportiert — wenn ein Modul den Wert einer von ihm exportierten Bindung aktualisiert, wird die Aktualisierung in ihrem importierten Wert sichtbar.

Um die `export`-Deklaration in einer Quelldatei verwenden zu können, muss die Datei von der Laufzeitumgebung als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML geschieht dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag oder dadurch, dass sie von einem anderen Modul importiert wird. Module werden automatisch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Zu exportierender Bezeichner (damit er in einem anderen Skript über {{jsxref("Statements/import", "import")}} importiert werden kann). Wenn Sie einen Alias mit `as` verwenden, kann der tatsächlich exportierte Name als String-Literal angegeben werden, das möglicherweise kein gültiger Bezeichner ist.

## Beschreibung

Jedes Modul kann zwei verschiedene Arten von Exporten haben: _benannte Exporte_ und _Standardexporte_. Sie können mehrere benannte Exporte pro Modul, aber nur einen Standardexport haben. Jeder Typ entspricht einer der oben genannten Syntaxformen.

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

Nach dem Schlüsselwort `export` können Sie `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassendeklarationen verwenden. Sie können auch die Syntax `export { name1, name2 }` verwenden, um eine Liste von an anderer Stelle deklarierten Namen zu exportieren. Beachten Sie, dass `export {}` kein leeres Objekt exportiert — es ist eine No-Op-Deklaration, die nichts exportiert (eine leere Namensliste).

Sie können `export` nicht für eine {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration verwenden. Sie können jedoch eine Variable exportieren, die an anderer Stelle mit `using` oder `await using` deklariert wurde. Davon wird dennoch dringend abgeraten, da die Variable verworfen wird, sobald das Modul die Ausführung beendet, wodurch alle Importierenden einen bereits verworfenen Wert erhalten.

```js-nolint example-bad
export using resource1 = getResource(); // SyntaxError

// Allowed by syntax but discouraged
using resource2 = getResource();
export { resource2 };
```

Exportdeklarationen unterliegen nicht den Regeln der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz). Sie können deklarieren, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert wird.

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
> Namen für Exportdeklarationen müssen voneinander verschieden sein. Exporte mit doppelten Namen oder die Verwendung von mehr als einem `default`-Export führen zu einem {{jsxref("SyntaxError")}} und verhindern, dass das Modul ausgewertet wird.

Die Syntax `export default` erlaubt jeden Ausdruck.

```js
export default 1 + 1;
```

Als Sonderfall werden Funktionen und Klassen als _Deklarationen_ und nicht als Ausdrücke exportiert; diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen hochgezogen werden.

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

Benannte Exporte sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Importieren dieses Moduls müssen benannte Exporte mit genau demselben Namen referenziert werden (optional mit `as` umbenannt), aber der Standardexport kann unter einem beliebigen Namen importiert werden. Zum Beispiel:

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

Sie können einen Namen mithilfe eines String-Literals in etwas umbenennen, das kein gültiger Bezeichner ist. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-Exportieren / Aggregieren

Ein Modul kann auch von anderen Modulen exportierte Werte „weiterleiten“, ohne dass zwei separate Import-/Export-Anweisungen geschrieben werden müssen. Dies ist häufig nützlich, wenn ein einzelnes Modul erstellt wird, das verschiedene Exporte aus verschiedenen Modulen zusammenfasst (üblicherweise als „Barrel-Modul“ bezeichnet).

Dies kann mit der Syntax „export from“ erreicht werden:

```js
export { default as function1, function2 } from "bar.js";
```

Dies ist vergleichbar mit einer Kombination aus Import und Export, außer dass `function1` und `function2` nicht innerhalb des aktuellen Moduls verfügbar werden:

```js
import { default as function1, function2 } from "bar.js";

export { function1, function2 };
```

Die meisten Syntaxformen von „import from“ haben Gegenstücke in „export from“.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

Es gibt auch `export * from "mod"`, obwohl es kein `import * from "mod"` gibt. Dies re-exportiert alle **benannten** Exporte aus `mod` als benannte Exporte des aktuellen Moduls, aber der Standardexport von `mod` wird nicht re-exportiert. Wenn es zwei Wildcard-Exportanweisungen gibt, die implizit denselben Namen re-exportieren, wird keiner von beiden re-exportiert.

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

Der Versuch, den doppelten Namen direkt zu importieren, löst einen Fehler aus.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Das Folgende ist trotz seines Import-Äquivalents syntaktisch ungültig:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

> [!NOTE]
> Aufgrund des Fehlens dieser Syntax hat [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) ebenfalls kein Gegenstück zum Re-Exportieren.

Die korrekte Vorgehensweise besteht darin, den Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Die Syntax „export from“ erlaubt das Weglassen des `as`-Tokens, wodurch der Standardexport weiterhin als Standardexport re-exportiert wird.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die auch `import` unterstützt — zum Beispiel [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

## Beispiele

### Benannte Exporte verwenden

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

Dann könnten wir im obersten Modul, das in Ihrer HTML-Seite eingebunden ist, Folgendes haben:

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

Folgendes ist wichtig zu beachten:

- Sie müssen dieses Skript mit einem {{HTMLElement("script")}}-Element des Typs `type="module"` in Ihr HTML einbinden, damit es als Modul erkannt und entsprechend verarbeitet wird.
- Sie können JS-Module nicht über eine `file://`-URL ausführen — Sie erhalten [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler. Sie müssen es über einen HTTP-Server ausführen.

### Den Standardexport verwenden

Wenn wir einen einzelnen Wert exportieren möchten, der ein gesamtes Modul repräsentiert, könnten wir einen Standardexport verwenden:

```js
// module "cube.js"

export default function cube(x) {
  return x * x * x;
}
```

Dann ist es in einem anderen Skript unkompliziert, den Standardexport zu importieren:

```js
import cube from "./cube.js";

console.log(cube(3)); // 27
```

### Export from verwenden

Betrachten wir ein Beispiel mit der folgenden Hierarchie:

- `childModule1.js`: exportiert `myFunction` und `myVariable`
- `childModule2.js`: exportiert `MyClass`
- `parentModule.js`: fungiert als Aggregator (und tut sonst nichts)
- Modul der obersten Ebene: verwendet die Exporte von `parentModule.js`

So würde dies mit Codeausschnitten aussehen:

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
- Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
