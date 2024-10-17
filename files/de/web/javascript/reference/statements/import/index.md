---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 488adf9e687cb0491d7c184f5cbfc6c2c9d0e451
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-{{Glossary("binding", "Bindings")}}, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden, zu importieren. Die importierten Bindings werden als _Live-Bindings_ bezeichnet, weil sie vom Modul, das das Binding exportiert hat, aktualisiert werden, aber vom importierenden Modul nicht neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch das Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht. Module werden automatisch im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch eine funktionale dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), die keine Skripte vom Typ `type="module"` erfordert.

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
  - : Der Name, der sich auf den Standard-Export aus dem Modul bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert wird. Es sind nur einfache und doppelte Anführungszeichen für Zeichenfolgenliterale erlaubt. Die Auswertung des Spezifizierers ist host-spezifisch. Die meisten Hosts stimmen mit Browsern überein und lösen die Spezifizierer als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft ihre eigenen Funktionen zusätzlich zu diesem, daher sollten Sie die Dokumentation für sie finden, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modulspezifizierer-Auflösung](#modulspezifizierer-auflösung) enthält ebenfalls weitere Informationen.
- `name`
  - : Der Name des Modulobjekts, das beim Verweis auf die Importe als eine Art Namensraum verwendet wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Der Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgenliteral sein, abhängig davon, was `module-name` zum Export erklärt. Wenn es sich um ein Zeichenfolgenliteral handelt, muss es einem gültigen Bezeichner zugeordnet werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Bezeichner sein.

Der `"module-name"` kann von einem Satz von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, der mit dem `with`-Schlüsselwort beginnt.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf der obersten Ebene (d.h. nicht innerhalb von Blöcken, Funktionen usw.) vorhanden sein. Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (z.B. `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import]-Syntax(/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindings können nicht im gleichen Geltungsbereich wie jede andere Deklaration, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration, vorhanden sein.

`import`-Deklarationen sind so konzipiert, dass sie syntaktisch starr sind (z.B. nur Zeichenfolgenliterale als Spezifizierer, nur auf der obersten Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module asynchron zu gestalten, was Funktionen wie [Top-Level Await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) ermöglicht.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standard-Import](#standard-import): `import defaultExport from "module-name";`
- [Namensraum-Import](#namensraum-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#importieren_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Unten finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Angenommen, es gibt einen Wert namens `myExport`, der aus dem Modul `my-module` entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung exportiert wurde, wird `myExport` in den aktuellen Geltungsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export umbenennen, wenn Sie ihn importieren. Zum Beispiel wird `shortName` in den aktuellen Geltungsbereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenfolgenliteral exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie es umbenennen, um es im aktuellen Modul verwenden zu können.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichwertig mit `import defaultExport from "mod"` und dann die Destrukturierung von `x` und `y` von `defaultExport`. Benannte und Standard-Importe sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standard-Import

Standardexporte müssen mit der entsprechenden Standard-Import-Syntax importiert werden. Die einfachste Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standard-Export keinen Namen explizit angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standard-Import mit Namensraum-Importen oder benannten Importen anzugeben. In solchen Fällen muss der Standard-Import zuerst deklariert werden. Beispielsweise:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat den gleichen Effekt wie ein Standard-Import. Es ist notwendig, den Namen umzubenennen, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namensraum-Import

Der folgende Code fügt `myModule` in den aktuellen Geltungsbereich ein, das alle Exporte aus dem Modul enthält, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei stellt `myModule` ein _Namensraum_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul zum Beispiel einen Export `doAllTheAmazingThings()` enthält, würde man ihn so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel namens `default` verfügbar. Für weitere Informationen siehe [Modul-Namensraum-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Importieren eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne irgendetwas zu importieren. Dadurch wird der globale Code des Moduls ausgeführt, aber es werden keine Werte tatsächlich importiert.

```js
import "/modules/my-module.js";
```

Dies wird oft für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoist")}}. In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte erzeugt werden, bevor der Rest des Modulcodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modulspezifizierer-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modulspezifizierer aufgelöst werden und überlässt es der Host-Umgebung (z.B. Browser, Node.js, Deno). Das Verhalten der Browser ist im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert, und dies ist die _de facto_-Baseline für alle Umgebungen geworden.

Es gibt drei Typen von Spezifizierern, die weithin anerkannt sind, wie in der HTML-Spezifikation, Node und vielen anderen implementiert:

- _Relative Spezifizierer_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Spezifizierer_, die analysierbare URLs sind und unverändert aufgelöst werden.
- _Bare Spezifizierer_, die keine der oben genannten sind.

Die bemerkenswerteste Einschränkung für relative Spezifizierer, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser verhindern, dass ein Spezifizierer implizit auf viele potenzielle Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, würde alles das folgende den "Standard-Export" von `utils/index.js` importieren:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, denn wenn man `import x from "./utils"` schreibt, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden, bis er ein importierbares Modul findet. Daher kann in der HTML-Spezifikation der Spezifizierer standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung geerbt, ist jedoch nicht Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet trotzdem eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, da Anfragen ohne Erweiterung normalerweise als Anfragen für HTML-Dateien verstanden werden.

Absolute Spezifizierer können jede Art von [URL](/de/docs/Web/URI) sein, die zu importierbarem Quellcode aufgelöst wird. Besonders bemerkenswert:

- [HTTP-URLs](/de/docs/Web/HTTP) werden immer im Web unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das ursprünglich sein gesamtes Modulsystem auf HTTP-URLs aufgebaut hat), hat jedoch nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeitumgebungen wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber sie werden aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Data-URLs](/de/docs/Web/URI/Schemes/data) werden von vielen Laufzeitumgebungen unterstützt, einschließlich Browsern, Node, Deno usw. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können dennoch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, weil der relative Spezifizierer `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) werden auf eingebaute Node.js-Module aufgelöst. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Kompatibilität mit Node beanspruchen, wie z.B. Bun.

Bare Spezifizierer, die mit CommonJS populär wurden, werden im `node_modules`-Verzeichnis aufgelöst. Wenn Sie zum Beispiel `import x from "foo"` haben, dann wird die Laufzeit nach dem `foo`-Paket in jedem `node_modules`-Verzeichnis in den übergeordneten Verzeichnissen des aktuellen Moduls suchen. Dieses Verhalten kann in Browsern unter Verwendung von [Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Algorithmus zur Modulspezifizierer-Auflösung kann auch programmgesteuert mit der [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)-Funktion, die in der HTML-Spezifikation definiert ist, ausgeführt werden.

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines bestimmten Bereichs zu erhalten.

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

Der importierte Bezeichner ist ein _Live Binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich dadurch ändert. Das Modul, das ihn importiert, kann ihn jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen, die denselben Wert importieren, beobachtet werden.

Sie können den neuen Wert auch über das [Modul-Namensraum-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

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
- [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
