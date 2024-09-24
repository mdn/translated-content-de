---
title: export
slug: Web/JavaScript/Reference/Statements/export
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

Die **`export`**-Deklaration wird verwendet, um Werte aus einem JavaScript-Modul zu exportieren. Exportierte Werte können dann mit der {{jsxref("Statements/import", "import")}}-Deklaration oder [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) in andere Programme importiert werden. Der Wert einer importierten Bindung kann sich im Modul, das ihn exportiert, ändern — wenn ein Modul den Wert einer von ihm exportierten Bindung aktualisiert, ist die Aktualisierung in seinem importierten Wert sichtbar.

Um die `export`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Laufzeitsystem als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch das Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht oder indem es von einem anderen Modul importiert wird. Module werden automatisch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

## Syntax

```js-nolint
// Exportierende Deklarationen
export let name1, name2/*, … */; // auch var
export const name1 = 1, name2 = 2/*, … */; // auch var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// Exportliste
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// Default-Exporte
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// Module aggregieren
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
```

- `nameN`
  - : Bezeichner, der exportiert wird (sodass er in einem anderen Skript über {{jsxref("Statements/import", "import")}} importiert werden kann). Wenn Sie ein Alias mit `as` verwenden, kann der tatsächlich exportierte Name als String-Literal angegeben werden, das möglicherweise kein gültiger Bezeichner ist.

## Beschreibung

Jedes Modul kann zwei verschiedene Exporttypen besitzen: _benannter Export_ und _Standardexport_. Sie können mehrere benannte Exporte pro Modul haben, aber nur einen Standardexport. Jeder Typ entspricht einer der obigen Syntaxen.

Benannte Exporte:

```js
// exportiert Funktionen, die anderswo deklariert wurden
export { myFunction2, myVariable2 };

// exportiert einzelne Funktionen (kann var, let,
// const, function, class exportieren)
export let myVariable = Math.sqrt(2);
export function myFunction() {
  // …
}
```

Nach dem `export`-Schlüsselwort können Sie `let`-, `const`- und `var`-Deklarationen sowie Funktions- oder Klassen-Deklarationen verwenden. Sie können auch die Syntax `export { name1, name2 }` verwenden, um eine Liste von anderswo deklarierten Namen zu exportieren. Beachten Sie, dass `export {}` kein leeres Objekt exportiert — es ist eine No-Op-Deklaration, die nichts exportiert (eine leere Namensliste).

Exporte-Deklarationen unterliegen nicht den [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) Regeln. Sie können deklarieren, dass das Modul `X` exportiert, bevor der Name `X` selbst deklariert wird.

```js
export { x };
const x = 1;
// Dies funktioniert, weil `export` nur eine Deklaration ist und nicht
// den Wert von `x` nutzt.
```

Standardexporte:

```js
// exportiert Funktion, die anderswo als Standard deklariert wurde
export { myFunction as default };
// Dies entspricht:
export default myFunction;

// exportiert einzelne Funktionen als Standard
export default function () { /* … */ }
export default class { /* … */ }
```

> [!NOTE]
> Namen für Export-Deklarationen müssen eindeutig sein. Exporte mit doppelten Namen zu haben oder mehr als einen `default`-Export zu verwenden, führt zu einem {{jsxref("SyntaxError")}} und verhindert, dass das Modul ausgewertet wird.

Die `export default`-Syntax erlaubt jeden Ausdruck.

```js
export default 1 + 1;
```

Als spezieller Fall werden Funktionen und Klassen als _Deklarationen_ und nicht als Ausdrücke exportiert, und diese Deklarationen können anonym sein. Das bedeutet, dass Funktionen hochgehoben werden.

```js
// Funktioniert, weil `foo` eine Funktionsdeklaration ist,
// kein Funktionsausdruck
foo();

export default function foo() {
  console.log("Hi");
}

// Es ist technisch gesehen immer noch eine Deklaration, aber es
// ist erlaubt, anonym zu sein
export default function () {
  console.log("Hi");
}
```

Benannte Exporte sind nützlich, wenn Sie mehrere Werte exportieren müssen. Beim Import dieses Moduls müssen benannte Exporte mit dem exakt gleichen Namen referenziert werden (optional mit Umbenennung durch `as`), aber der Standardexport kann mit jedem Namen importiert werden. Zum Beispiel:

```js
// Datei test.js
const k = 12;
export default k;
```

```js
// eine andere Datei
import m from "./test"; // Beachten Sie, dass wir die Freiheit haben, import m anstelle von import k zu verwenden, weil k der Standardexport war
console.log(m); // 12
```

Sie können benannte Exporte auch umbenennen, um Namenskonflikte zu vermeiden:

```js
export { myFunction as function1, myVariable as variable };
```

Sie können einen Namen in etwas umbenennen, das kein gültiger Bezeichner ist, indem Sie ein String-Literal verwenden. Zum Beispiel:

```js
export { myFunction as "my-function" };
```

### Re-Export / Aggregation

Ein Modul kann auch Werte exportieren, die von anderen Modulen exportiert wurden, ohne den Aufwand von zwei separaten Import/Export-Deklarationen. Dies ist oft nützlich, wenn Sie ein einzelnes Modul erstellen, das verschiedene Exporte aus verschiedenen Modulen konzentriert (meistens als "Barrel-Modul" bezeichnet).

Dies kann mit der "export from"-Syntax erreicht werden:

```js
export { default as function1, function2 } from "bar.js";
```

Was einer Kombination aus Import und Export entspricht, außer dass `function1` und `function2` im aktuellen Modul nicht verfügbar sind:

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

Es gibt auch `export * from "mod"`, obwohl es kein `import * from "mod"` gibt. Dies re-exportiert alle **benannten** Exporte von `mod` als die benannten Exporte des aktuellen Moduls, aber der Standardexport von `mod` wird nicht re-exportiert. Wenn es zwei Wildcard-Export-Deklarationen gibt, die denselben Namen implizit re-exportieren, wird keiner der beiden re-exportiert.

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
// SyntaxError: Das angeforderte Modul './barrel.js' enthält widersprüchliche
// Stern-Exporte für den Namen 'a'
```

Das Folgende ist syntaktisch ungültig, trotz seines Import-Äquivalents:

```js-nolint example-bad
export DefaultExport from "bar.js"; // Ungültig
```

Der korrekte Weg, dies zu tun, besteht darin, den Export umzubenennen:

```js
export { default as DefaultExport } from "bar.js";
```

Die "export from"-Syntax erlaubt es, das `as`-Token auszulassen, wodurch der Standardexport immer noch als Standardexport re-exportiert wird.

```js
export { default, function2 } from "bar.js";
```

`export from` unterstützt alle Funktionen, die `import` unterstützt — z. B. [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
export { default } from "./data.json" with { type: "json" };
```

## Beispiele

### Verwendung benannter Exporte

In einem Modul `my-module.js` könnten wir den folgenden Code haben:

```js
// Modul "my-module.js"
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

Dann im Top-Level-Modul, das in Ihrer HTML-Seite enthalten ist, könnten wir:

```js
import { cube, foo, graph } from "./my-module.js";

graph.options = {
  color: "blue",
  thickness: "3px",
};

graph.draw(); // Gibt "From graph draw function" aus
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

Es ist wichtig, Folgendes zu beachten:

- Sie müssen dieses Skript in Ihrem HTML mit einem {{HTMLElement("script")}}-Element des Typs `type="module"` einbinden, damit es als Modul erkannt und entsprechend behandelt wird.
- Sie können JS-Module nicht über eine `file://`-URL ausführen — Sie erhalten [CORS](/de/docs/Web/HTTP/CORS)-Fehler. Sie müssen es über einen HTTP-Server ausführen.

### Verwendung des Standardexports

Wenn Sie einen einzelnen Wert exportieren oder einen Fallback-Wert für Ihr Modul haben möchten, können Sie einen Standardexport verwenden:

```js
// Modul "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

Dann ist es in einem anderen Skript unkompliziert, den Standardexport zu importieren:

```js
import cube from "./my-module.js";
console.log(cube(3)); // 27
```

### Verwendung von export from

Nehmen wir ein Beispiel, bei dem wir die folgende Hierarchie haben:

- `childModule1.js`: Exportiert `myFunction` und `myVariable`
- `childModule2.js`: Exportiert `MyClass`
- `parentModule.js`: Agiert als Aggregator (und tut nichts anderes)
- Top-Level-Modul: Nutzt die Exporte von `parentModule.js`

Dies würde mit Code-Snippets folgendermaßen aussehen:

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
// Nur die Exporte von childModule1 und childModule2 aggregieren,
// um sie erneut zu exportieren
export { myFunction, myVariable } from "childModule1.js";
export { MyClass } from "childModule2.js";
```

```js
// Im Top-Level-Modul
// Wir können die Exporte eines einzelnen Moduls nutzen, da parentModule
// sie in einer einzigen Quelle "gesammelt"/"gebündelt" hat
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
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
