---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-[Bindings](/de/docs/Glossary/binding) zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden als _Live-Bindings_ bezeichnet, weil sie durch das Modul aktualisiert werden, das das Binding exportiert hat, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei von der Laufzeit als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies erreicht, indem `type="module"` zum {{HTMLElement("script")}}-Tag hinzugefügt wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Name, der sich auf den Standardexport des Moduls bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, von dem importiert wird. Die Bewertung des Specifiers ist host-spezifisch. Dies ist oft eine relative oder absolute URL zur `.js`-Datei, die das Modul enthält. In Node beziehen sich oft imports ohne Erweiterung auf Pakete in `node_modules`. Bestimmte Bundler können das Importieren von Dateien ohne Erweiterungen erlauben; überprüfen Sie Ihre Umgebung. Nur einfach- oder doppelt-quotierte Strings sind erlaubt.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Stringliteral sein, abhängig davon, was `module-name` exportiert. Wenn es ein Stringliteral ist, muss es zu einem gültigen Bezeichner aliasiert werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Bezeichner sein.

Dem `"module-name"` kann eine Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, die mit dem Schlüsselwort `with` beginnen.

## Beschreibung

`import`-Deklarationen dürfen nur in Modulen und nur auf der obersten Ebene (d.h. nicht innerhalb von Blöcken, Funktionen usw.) auftreten. Wenn eine `import`-Deklaration in nicht-modularen Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "Script" oder "Funktionskörper" als Parsing-Ziele haben) entdeckt wird, wird ein `SyntaxError` ausgelöst. Um Module in nicht-modularen Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax.

Alle importierten Bindings dürfen sich nicht im gleichen Gültigkeitsbereich wie andere Deklarationen befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklarationen.

`import`-Deklarationen sind so gestaltet, dass sie syntaktisch starr sind (zum Beispiel nur Stringliteral-Specifiers, nur auf oberster Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen und Funktionen wie [Top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu ermöglichen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Gebennte Importe](#gebenannte_importe): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Side-Effect-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Im Folgenden sind Beispiele aufgeführt, um die Syntax zu verdeutlichen.

#### Gebenannte Importe

Gegeben ein Wert namens `myExport`, der entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung aus dem Modul `my-module` exportiert wurde, wird `myExport` in den aktuellen Bereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Zum Beispiel wird dadurch `shortName` in den aktuellen Bereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Stringliteral exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie es aliasieren, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann die Destrukturierung von `x` und `y` aus `defaultExport`. Gebenannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Standardimport-Syntax importiert werden. Die einfachste Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen Namen explizit angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder benannten Importen anzugeben. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Ein Name als `default` zu importieren hat denselben Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein, der alle Exporte aus dem Modul enthält, das sich im `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Zum Beispiel, wenn das oben importierte Modul einen Export `doAllTheAmazingThings()` enthält, würden Sie es so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [sealed](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null` prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel unter `default` verfügbar. Für mehr Informationen siehe [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Ein gesamtes Modul nur für seine Seiteneffekte importieren, ohne irgendetwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch eigentlich keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für [Polyfills](/de/docs/Glossary/Polyfill) verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden [gehoisted](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulbereich verfügbar sind, und ihre Seiteneffekte erzeugt werden, bevor der Rest des Modulcodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen in einem gegebenen Bereich zu erhalten.

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

Der importierte Bezeichner ist ein _Live-Binding_, weil das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich ändern würde. Das importierende Modul kann ihn jedoch nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen, die denselben Wert importieren, beobachtet werden.

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
- [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Vorschau auf ES6-Module und mehr von ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Ein Cartoon-Tiefenblick](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
