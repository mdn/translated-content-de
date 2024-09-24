---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte aktuelle {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindungen werden _live bindings_ genannt, weil sie von dem Modul, das die Bindung exportiert, aktualisiert werden, aber vom importierenden Modul nicht neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Laufzeitsystem als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML erfolgt dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag. Module werden automatisch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch ein funktionsähnliches dynamisches [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), das keine Skripte vom Typ `type="module"` erfordert.

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
  - : Name, der sich auf den Standard-Export des Moduls bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Die Auswertung des Bezeichners ist hostspezifisch. Dies ist oft eine relative oder absolute URL zur `.js`-Datei, die das Modul enthält. In Node beziehen sich oft importierte Erweiterungen ohne Endungen auf Pakete in `node_modules`. Bestimmte Bundler können es erlauben, Dateien ohne Erweiterungen zu importieren; prüfen Sie Ihre Umgebung. Nur in einfachen und doppelten Anführungszeichen eingeschlossene Strings sind erlaubt.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der zu importierenden Exporte. Der Name kann entweder ein Bezeichner oder ein Stringliteral sein, abhängig davon, was `module-name` zum Export deklarieren. Wenn es sich um ein Stringliteral handelt, muss es in einen gültigen Bezeichner umbenannt werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Bezeichner sein.

Der `"module-name"` kann von einer Anzahl von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf oberster Ebene vorhanden sein (d. h. nicht innerhalb von Blöcken oder Funktionen usw.). Wenn eine `import`-Deklaration in nicht-modularen Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben) auftritt, wird ein `SyntaxError` ausgelöst. Um Module in nicht-modularen Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import-Syntax](/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindungen können nicht im gleichen Gültigkeitsbereich wie jede andere Deklaration stehen, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration.

`import`-Deklarationen sind darauf ausgelegt, syntaktisch rigide zu sein (zum Beispiel nur String-Literale als Bezeichner, nur auf oberster Ebene erlaubt, alle Bindungen müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen und Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen der Import-Deklarationen

Es gibt vier Formen der `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Nachfolgend sind Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Gegeben ein Wert namens `myExport`, der aus dem Modul `my-module` entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung exportiert wurde, fügt dies `myExport` in den aktuellen Gültigkeitsbereich ein.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Zum Beispiel fügt dieses Beispiel `shortName` in den aktuellen Gültigkeitsbereich ein.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Stringliteral exportieren, das kein gültiger Bezeichner ist, in diesem Fall müssen Sie es aliasieren, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann mit Destrukturierung `x` und `y` aus `defaultExport`. Benannte und Standard-Importe sind unterschiedliche Syntax in JavaScript-Modulen.

#### Standardimport

Standard-Exporte müssen mit der entsprechenden Standardimport-Syntax importiert werden. Die einfachste Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standard-Export keinen Namen explizit angibt, können Sie dem Bezeichner jeden gewünschten Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder benannten Importen anzugeben. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default und myDefault zeigen auf die gleiche Bindung
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat die gleiche Wirkung wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein und enthält alle Exporte aus dem Modul unter `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei repräsentiert `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul zum Beispiel ein Export `doAllTheAmazingThings()` enthält, würden Sie es folgendermaßen aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [sealed Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standard-Export ist als ein Schlüssel namens `default` verfügbar. Für weitere Informationen, siehe [Module-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein ganzes Modul ausschließlich für Seiteneffekte, ohne dass irgendwelche Werte importiert werden. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird oft für [Polyfills](/de/docs/Glossary/Polyfill) verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden [gehoisted](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte auftreten, bevor der Rest des Modulcodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings wird durch die nächste Zeile importiert

import * as myModule from "/modules/my-module.js";
```

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines gegebenen Bereichs zu erhalten.

```js
// getPrimes.js
/**
 * Gibt eine Liste der Primzahlen zurück, die kleiner als `max` sind.
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

Der importierte Bezeichner ist eine _live binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und sich der importierte Wert ändern würde. Das Modul, das ihn importiert, kann ihn jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt besitzt, das Objekt ändern, und der geänderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

Sie können den neuen Wert auch über das [Module-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

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
  console.log(myValue); // 2; my-module hat seinen Wert aktualisiert
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Zuweisung zu einer konstanten Variable.
  // Das importierende Modul kann nur den Wert lesen, ihn aber nicht neu zuweisen.
}, 1000);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/export", "export")}}
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Vorschau auf ES6-Module und mehr aus ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Ein cartoonhafter Deep-Dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
