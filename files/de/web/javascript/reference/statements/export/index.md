---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können anschließend mit der {{jsxref("Statements/import", "import")}}-Deklaration oder einem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) in andere Programme importiert werden. Der Wert einer importierten Bindung kann sich im exportierenden Modul ändern: Wenn ein Modul den Wert einer exportierten Bindung aktualisiert, ist diese Änderung auch beim importierten Wert sichtbar.

Damit die `export`-Deklaration in einer Quelldatei verwendet werden kann, muss die Laufzeitumgebung die Datei als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretieren. In HTML geschieht dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag oder dadurch, dass die Datei von einem anderen Modul importiert wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Zu exportierender Bezeichner (damit er in einem anderen Skript über {{jsxref("Statements/import", "import")}} importiert werden kann). Wenn Sie mit `as` einen Alias verwenden, kann der tatsächliche Exportname als String-Literal angegeben werden; er muss kein gültiger Bezeichner sein.

## Beschreibung

Jedes Modul kann zwei verschiedene Arten von Exporten haben: _benannte Exporte_ und _Default-Exporte_. Ein Modul kann mehrere benannte Exporte haben, aber nur einen Default-Export. Jede Art entspricht einer der oben aufgeführten Syntaxformen.

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

Nach dem Schlüsselwort `export` können Sie Deklarationen mit `let`, `const` und `var` sowie Funktions- oder Klassendeklarationen verwenden. Mit der Syntax `export { name1, name2 }` können Sie auch eine Liste von Namen exportieren, die an anderer Stelle deklariert wurden. Beachten Sie, dass `export {}` kein leeres Objekt exportiert – es handelt sich um eine Deklaration ohne Wirkung, die nichts exportiert (eine leere Namensliste).

Sie können `export` nicht für eine {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration verwenden. Sie können jedoch eine Variable exportieren, die an anderer Stelle mit `using` oder `await using` deklariert wurde. Davon wird dringend abgeraten, da die Variable bereits freigegeben wird, sobald die Ausführung des Moduls abgeschlossen ist. Alle importierenden Module erhalten dadurch einen Wert, der bereits freigegeben wurde.

```js-nolint example-bad
export using resource1 = getResource(); // SyntaxError

// Allowed by syntax but discouraged
using resource2 = getResource();
export { resource2 };
```

Exportdeklarationen unterliegen nicht den Regeln der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz). Sie können festlegen, dass ein Modul `X` exportiert, bevor der Name `X` selbst deklariert wird.

```js
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `x`.
```

Default-Exporte:

```js
// export a binding declared elsewhere as default
export { myFunction as default };
// export the current value of myFunction as default
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
```

`export { myFunction as default }` exportiert eine Live-Bindung. Dagegen wertet `export default myFunction` den Ausdruck `myFunction` aus und exportiert dessen Wert zu diesem Zeitpunkt. Eine spätere Neuzuweisung von `myFunction` aktualisiert nur bei der ersten Form den Default-Export.

> [!NOTE]
> Die Namen von Exportdeklarationen müssen voneinander verschieden sein. Exporte mit doppelten Namen oder mehr als ein `default`-Export führen zu einem {{jsxref("SyntaxError")}} und verhindern, dass das Modul [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wird.

Die Syntax `export default` erlaubt einen beliebigen Ausdruck.

```js
export default 1 + 1;
```

Funktionen und Klassen bilden einen Sonderfall: Sie werden als _Deklarationen_ exportiert, nicht als Ausdrücke. Diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen durch Hoisting vorgezogen werden.

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

Benannte Exporte sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Import eines solchen Moduls müssen benannte Exporte mit genau demselben Namen referenziert werden (optional mit `as` umbenannt). Ein Default-Export kann dagegen unter einem beliebigen Namen importiert werden. Zum Beispiel:

```js
// -- test.js --
const k = 12;
export default k;
```

```js
// some other file
import m from "./test.js"; // note that we have the freedom to use import m instead of import k, because k was default export

console.log(m); // 12
```

Sie können benannte Exporte auch umbenennen, um Namenskonflikte zu vermeiden:

```js
export { myFunction as function1, myVariable as variable };
```

Mithilfe eines String-Literals können Sie einen Namen in etwas umbenennen, das kein gültiger Bezeichner ist. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Reexportieren / Aggregieren

Ein Modul kann auch Werte aus anderen Modulen „weiterreichen“, ohne dafür zwei separate Import- und Exportanweisungen schreiben zu müssen. Das ist häufig nützlich, wenn Sie ein einzelnes Modul erstellen, das verschiedene Exporte aus verschiedenen Modulen bündelt (üblicherweise „Barrel-Modul“ genannt).

Dazu dient die Syntax „export from“:

```js
export { default as function1, function2 } from "bar.js";
```

Dies entspricht ungefähr einer Kombination aus Import und Export, mit dem Unterschied, dass `function1` und `function2` innerhalb des aktuellen Moduls nicht verfügbar sind:

```js
import { default as function1, function2 } from "bar.js";

export { function1, function2 };
```

Für die meisten „import from“-Syntaxformen gibt es entsprechende „export from“-Syntaxformen.

```js
export { x } from "mod";
export { x as v } from "mod";
export * as ns from "mod";
```

Außerdem gibt es `export * from "mod"`, obwohl kein `import * from "mod"` existiert. Dadurch werden alle **benannten** Exporte aus `mod` als benannte Exporte des aktuellen Moduls reexportiert; der Default-Export von `mod` wird jedoch nicht reexportiert. Wenn zwei Wildcard-Exportanweisungen implizit denselben Namen aus unterschiedlichen Bindungen reexportieren, ist der Name mehrdeutig und wird aus dem Modul-Namespace ausgelassen. Wenn beide auf dieselbe Bindung verweisen, besteht keine Mehrdeutigkeit. Ein expliziter Export dieses Namens hat Vorrang vor Wildcard-Exporten.

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

Der Versuch, den mehrdeutigen Namen direkt zu importieren, löst während des [Verknüpfens](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) einen Syntaxfehler aus, noch bevor die Auswertung beginnt.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Die folgende Syntax ist ungültig, obwohl die entsprechende Import-Syntax gültig ist:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

> [!NOTE]
> Da diese Syntax fehlt, gibt es auch für [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) keine entsprechende Reexport-Syntax.

Stattdessen müssen Sie den Export umbenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Bei der „export from“-Syntax kann das Token `as` weggelassen werden. Dadurch wird der Default-Export weiterhin als Default-Export reexportiert.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die auch `import` unterstützt – beispielsweise [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

> [!NOTE]
> Für die Deklaration [`import defer * as ns`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) gibt es keine entsprechende Reexport-Syntax, obwohl es für `import * as ns` eine gibt. Verzögerte Reexporte werden in einem [separaten Vorschlag](https://github.com/tc39/proposal-deferred-reexports) entwickelt, da sie auch das [Laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) ungenutzter Module vermeiden können. Das erfordert zusätzliche Tree-Shaking-Semantik. Alternativ können Sie [Import und Export in zwei separaten Anweisungen durchführen](/de/docs/Web/JavaScript/Reference/Statements/import/defer#exporting_a_deferred_namespace); dadurch wird das Modul allerdings sofort geladen.

## Beispiele

### Benannte Exporte verwenden

```js
// -- my-module.js --
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

Im übergeordneten Modul, das in Ihre HTML-Seite eingebunden ist, könnte dann Folgendes stehen:

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

- Sie müssen dieses Skript mit einem {{HTMLElement("script")}}-Element des Typs `type="module"` in Ihr HTML einbinden, damit es als Modul erkannt und entsprechend verarbeitet wird.
- Sie können JS-Module nicht über eine `file://`-URL ausführen – dabei treten [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler auf. Sie müssen sie über einen HTTP-Server ausführen.

### Den Default-Export verwenden

Wenn Sie einen einzelnen Wert exportieren möchten, der ein gesamtes Modul repräsentiert, können Sie einen Default-Export verwenden:

```js
// -- cube.js --

export default function cube(x) {
  return x * x * x;
}
```

In einem anderen Skript lässt sich der Default-Export dann einfach importieren:

```js
import cube from "./cube.js";

console.log(cube(3)); // 27
```

### „export from“ verwenden

Betrachten wir ein Beispiel mit der folgenden Struktur:

- `childModule1.js`: exportiert `myFunction` und `myVariable`
- `childModule2.js`: exportiert `MyClass`
- `parentModule.js`: dient als Aggregator (und tut sonst nichts)
- Übergeordnetes Modul: verwendet die Exporte von `parentModule.js`

Mit Codebeispielen sieht das so aus:

```js
// -- childModule1.js --
function myFunction() {
  console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };
```

```js
// -- childModule2.js --
class MyClass {
  constructor(x) {
    this.x = x;
  }
}

export { MyClass };
```

```js
// -- parentModule.js --
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export { myFunction, myVariable } from "./childModule1.js";
export { MyClass } from "./childModule2.js";
```

```js
// -- top-level module --
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
import { myFunction, myVariable, MyClass } from "./parentModule.js";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/import", "import")}}
- Leitfaden zu [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Ein ausführlicher Einblick als Comic](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
