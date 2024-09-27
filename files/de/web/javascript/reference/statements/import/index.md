---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-[Bindings](/de/docs/Glossary/binding) zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden als _Live-Bindings_ bezeichnet, da sie von dem Modul, das die Bindings exportiert hat, aktualisiert werden, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML geschieht dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag. Module werden automatisch im [Strict-Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch eine funktionsähnliche dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), die keine Skripte vom Typ `type="module"` erfordert.

## Syntax

```js-nolint
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

- `defaultExport`
  - : Name, der sich auf den Standardexport aus dem Modul bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Die Bewertung des Spezifizierers wird host-spezifisch durchgeführt. Dies ist oft eine relative oder absolute URL zur `.js`-Datei, die das Modul enthält. In Node beziehen sich importierte Module ohne Erweiterung oft auf Pakete in `node_modules`. Bestimmte Bundler können das Importieren von Dateien ohne Erweiterung erlauben; überprüfen Sie Ihre Umgebung. Nur einfach- und doppelt-quotierte Strings sind erlaubt.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace beim Bezug auf die Importe verwendet wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgenliteral sein, abhängig davon, was `module-name` zu exportieren erklärt. Handelt es sich um ein Zeichenfolgenliteral, muss es einem gültigen Bezeichner zugeordnet werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen werden. Muss ein gültiger JavaScript-Bezeichner sein.

Dem `"module-name"` kann eine Reihe von [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf der obersten Ebene vorhanden sein (d. h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten angetroffen wird (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben), wird ein `SyntaxError` geworfen. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die Syntax des [dynamischen Imports](/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindings dürfen sich nicht im selben Gültigkeitsbereich wie andere Deklarationen befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration.

`import`-Deklarationen sind syntaktisch rigide gestaltet (zum Beispiel nur stringliteral-Spezifizierer, nur auf der obersten Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es erlaubt, Module statisch zu analysieren und zu verlinken, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen, wodurch Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) ermöglicht werden.

### Formen der Import-Deklarationen

Es gibt vier Formen der `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Import für Seiteneffekte](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Im Folgenden finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Angenommen, ein Wert namens `myExport` wurde aus dem Modul `my-module` entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung exportiert, wird `myExport` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Zum Beispiel fügt dies `shortName` in den aktuellen Gültigkeitsbereich ein.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenfolgenliteral exportieren, das kein gültiger Bezeichner ist; in diesem Fall müssen Sie es aliassen, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` entspricht nicht `import defaultExport from "mod"` und dann `x` und `y` aus `defaultExport` zu destrukturieren. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexports müssen mit der entsprechenden Standardimport-Syntax importiert werden. Die einfachste Version importiert den Standard direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen Namen explizit angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder benannten Importen zu spezifizieren. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat denselben Effekt wie ein Standardimport. Es ist erforderlich, den Namen zu aliassen, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein und enthält alle Exporte aus dem Modul, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul einen Export `doAllTheAmazingThings()` einschließt, würden Sie ihn folgendermaßen aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur wegen seiner Seiteneffekte, ohne irgendetwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird oft für [Polyfills](/de/docs/Glossary/Polyfill) verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden [gehoben](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulumfeld verfügbar sind und ihre Seiteneffekte vor dem Rest des Modulcodes entstehen.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines gegebenen Bereichs zu erhalten.

```js
// getPrimes.js
/**
 * Returns a list of prime numbers that are smaller than `max`.
 */
export function getPrimes(max) {
  const isPrime = Array.from({ length: max }, () => true);
  isPrime[0] = isPrime[1] = false;
  isPrime[2] = true;
  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      for (let j = i ** 2; j < max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return [...isPrime.entries()]
    .filter(([, isPrime]) => isPrime)
    .map(([number]) => number);
}
```

```js
import { getPrimes } from "/modules/getPrimes.js";

console.log(getPrimes(10)); // [2, 3, 5, 7]
```

### Importierte Werte können nur vom Exporteur geändert werden

Der importierte Bezeichner ist ein _Live-Binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und sich der importierte Wert ändern würde. Das importierende Modul kann ihn jedoch nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

Sie können den neuen Wert auch über das [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

```js
// my-module.js
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// main.js
import { myValue } from "/modules/my-module.js";
import * as myModule from "/modules/my-module.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2; my-module has updated its value
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // The importing module can only read the value but can't re-assign it.
}, 1000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/export", "export")}}
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export and Import](https://javascript.info/import-export) auf javascript.info
