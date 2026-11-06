---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können anschließend mit der {{jsxref("Statements/import", "import")}}-Deklaration oder einem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) in andere Programme importiert werden. Der Wert einer importierten Bindung kann sich im exportierenden Modul ändern: Wenn ein Modul den Wert einer exportierten Bindung aktualisiert, ist die Änderung auch beim importierten Wert sichtbar.

Damit die `export`-Deklaration in einer Quelldatei verwendet werden kann, muss die Laufzeitumgebung die Datei als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretieren. In HTML geschieht dies, indem dem {{HTMLElement("script")}}-Tag `type="module"` hinzugefügt wird oder indem die Datei von einem anderen Modul importiert wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Bezeichner, der exportiert werden soll, damit er in einem anderen Skript über {{jsxref("Statements/import", "import")}} importiert werden kann. Wenn Sie mit `as` einen Alias verwenden, kann der tatsächliche Exportname als String-Literal angegeben werden. Er muss dann kein gültiger Bezeichner sein.

## Beschreibung

Jedes Modul kann zwei Arten von Exporten haben: _benannte Exporte_ und _Default-Exporte_. Ein Modul kann mehrere benannte Exporte haben, aber nur einen Default-Export. Jede Art entspricht einer der oben gezeigten Syntaxformen.

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

Nach dem Schlüsselwort `export` können Sie `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassendeklarationen verwenden. Mit der Syntax `export { name1, name2 }` können Sie auch eine Liste von Namen exportieren, die an anderer Stelle deklariert wurden. Beachten Sie, dass `export {}` kein leeres Objekt exportiert: Es handelt sich um eine Deklaration ohne Wirkung, die nichts exportiert (eine leere Namensliste).

Sie können `export` nicht für eine {{jsxref("Statements/using", "using")}}- oder {{jsxref("Statements/await_using", "await using")}}-Deklaration verwenden. Sie können jedoch eine Variable exportieren, die an anderer Stelle mit `using` oder `await using` deklariert wurde. Davon wird weiterhin dringend abgeraten, da die Variable freigegeben wird, sobald das Modul vollständig ausgeführt wurde. Dadurch erhalten alle importierenden Module einen Wert, der bereits freigegeben wurde.

```js-nolint example-bad
export using resource1 = getResource(); // SyntaxError

// Allowed by syntax but discouraged
using resource2 = getResource();
export { resource2 };
```

Exportdeklarationen unterliegen nicht den Regeln der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz). Sie können festlegen, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert wird.

```js
export { x };
const x = 1;
// This works, because `export` is only a declaration, but doesn't
// utilize the value of `x`.
```

Default-Exporte:

```js
// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
```

`export { myFunction as default }` exportiert eine Live-Bindung. Dagegen wertet `export default myFunction` den Ausdruck `myFunction` aus und exportiert dessen Wert zu diesem Zeitpunkt. Eine spätere Neuzuweisung von `myFunction` aktualisiert den Default-Export nur bei der ersten Form.

> [!NOTE]
> Die Namen von Exportdeklarationen müssen eindeutig sein. Exporte mit doppelten Namen oder mehr als ein `default`-Export führen zu einem {{jsxref("SyntaxError")}} und verhindern, dass das Modul [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) wird.

Die Syntax `export default` erlaubt jeden beliebigen Ausdruck.

```js
export default 1 + 1;
```

Funktionen und Klassen werden als Sonderfall als _Deklarationen_ und nicht als Ausdrücke exportiert. Diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen per Hoisting vorgezogen werden.

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

Benannte Exporte sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Import eines solchen Moduls müssen benannte Exporte mit exakt demselben Namen referenziert werden (optional können sie mit `as` umbenannt werden). Der Default-Export kann dagegen unter einem beliebigen Namen importiert werden. Zum Beispiel:

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

Mithilfe eines String-Literals können Sie einen Namen in einen Namen ändern, der kein gültiger Bezeichner ist. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-Exportieren / Aggregieren

Ein Modul kann auch aus anderen Modulen exportierte Werte „weiterreichen“, ohne dafür zwei separate Import- und Exportanweisungen schreiben zu müssen. Das ist häufig nützlich, wenn Sie ein einzelnes Modul erstellen, das verschiedene Exporte aus mehreren Modulen bündelt (üblicherweise „Barrel-Modul“ genannt).

Dies lässt sich mit der „export from“-Syntax erreichen:

```js
export { default as function1, function2 } from "bar.js";
```

Das ist mit einer Kombination aus Import und Export vergleichbar. Allerdings stehen `function1` und `function2` innerhalb des aktuellen Moduls nicht zur Verfügung:

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

Außerdem gibt es `export * from "mod"`, obwohl kein `import * from "mod"` existiert. Damit werden alle **benannten** Exporte von `mod` als benannte Exporte des aktuellen Moduls re-exportiert. Der Default-Export von `mod` wird jedoch nicht re-exportiert. Wenn zwei Wildcard-Exportanweisungen implizit denselben Namen aus unterschiedlichen Bindungen re-exportieren, ist der Name mehrdeutig und wird aus dem Modul-Namespace ausgelassen. Wenn beide auf dieselbe Bindung verweisen, besteht keine Mehrdeutigkeit. Ein expliziter Export dieses Namens hat Vorrang vor Wildcard-Exporten.

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

Der Versuch, den mehrdeutigen Namen direkt zu importieren, führt während des [Linkens](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) zu einem Syntaxfehler, noch bevor die Auswertung beginnt.

```js
import { a } from "./barrel.js";
// SyntaxError: The requested module './barrel.js' contains conflicting star exports for name 'a'
```

Die folgende Syntax ist ungültig, obwohl es ein entsprechendes Import-Pendant gibt:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Invalid
```

> [!NOTE]
> Da diese Syntax fehlt, gibt es auch für [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) kein entsprechendes Re-Export-Pendant.

Die korrekte Vorgehensweise besteht darin, den Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Bei der „export from“-Syntax kann das Token `as` weggelassen werden. Dadurch wird der Default-Export weiterhin als Default-Export re-exportiert.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die auch `import` unterstützt, beispielsweise [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

> [!NOTE]
> Für die Deklaration [`import defer * as ns`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) gibt es kein entsprechendes Re-Export-Pendant, obwohl für `import * as ns` eines existiert. Verzögerte Re-Exporte werden in einem [separaten Vorschlag](https://github.com/tc39/proposal-deferred-reexports) entwickelt, da sie auch das [Laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) ungenutzter Module vermeiden können. Dafür ist eine zusätzliche Tree-Shaking-Semantik erforderlich. Stattdessen können Sie [Import und Export in zwei separaten Anweisungen durchführen](/de/docs/Web/JavaScript/Reference/Statements/import/defer#exporting_a_deferred_namespace). Dadurch wird das Modul allerdings sofort geladen.

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

Im obersten Modul, das in Ihre HTML-Seite eingebunden ist, könnte dann Folgendes stehen:

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

- Sie müssen dieses Skript in Ihrem HTML mit einem {{HTMLElement("script")}}-Element vom Typ `type="module"` einbinden, damit es als Modul erkannt und entsprechend behandelt wird.
- Sie können JS-Module nicht über eine `file://`-URL ausführen – dabei treten [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler auf. Sie müssen sie über einen HTTP-Server ausführen.

### Den Default-Export verwenden

Wenn wir einen einzelnen Wert exportieren möchten, der ein ganzes Modul repräsentiert, können wir einen Default-Export verwenden:

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

### Export from verwenden

Betrachten wir ein Beispiel mit der folgenden Struktur:

- `childModule1.js`: exportiert `myFunction` und `myVariable`
- `childModule2.js`: exportiert `MyClass`
- `parentModule.js`: dient als Aggregator (und übernimmt keine weitere Aufgabe)
- Modul der obersten Ebene: verwendet die Exporte von `parentModule.js`

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
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
