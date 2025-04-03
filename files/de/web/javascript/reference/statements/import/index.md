---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-{{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindungen werden _Live-Bindings_ genannt, weil sie vom Modul, das die Bindung exportiert hat, aktualisiert werden, aber vom importierenden Modul nicht neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. Im HTML wird dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht. Module werden automatisch im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch eine funktionale dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), die keine Skripte vom Typ `type="module"` benötigt.

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
  - : Das Modul, aus dem importiert werden soll. Es sind nur einfach- und doppelt-quotierte Zeichenfolgenliterale erlaubt. Die Bewertung des Bezeichners ist host-spezifisch. Die meisten Hosts richten sich nach Browsern und lösen die Bezeichner als URL relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft eigene Funktionen darauf, daher sollten Sie deren Dokumentation lesen, um die genauen Regeln zu verstehen. Der Abschnitt über die [Modul-Bezeichnerauflösung](#modul-bezeichnerauflösung) enthält ebenfalls mehr Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der zu importierenden Exporte. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgenliteral sein, abhängig davon, was `module-name` zum Exportieren deklariert. Wenn es sich um ein Zeichenfolgenliteral handelt, muss es in einen gültigen Bezeichner umbenannt werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Müssen gültige JavaScript-Bezeichner sein.

Dem `"module-name"` können eine Reihe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, beginnend mit dem `with`-Schlüsselwort.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf der obersten Ebene vorhanden sein (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (z. B. `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die Syntax für den [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindungen können sich nicht im selben Gültigkeitsbereich wie jede andere Deklaration befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration.

`import`-Deklarationen sind so konzipiert, dass sie syntaktisch starr sind (z. B. nur Zeichenfolgenliterale als Bezeichner, nur auf der obersten Ebene erlaubt, alle Bindungen müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu gestalten und Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu ermöglichen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standard-Import](#standard-import): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_dessen_seiteneffekte): `import "module-name";`

Nachfolgend finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Angenommen, ein Wert namens `myExport` wurde entweder implizit als `export * from "another.js"` oder explizit über die {{jsxref("Statements/export", "export")}}-Anweisung aus dem Modul `my-module` exportiert, dann wird `myExport` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Beispielsweise wird dadurch `shortName` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenfolgenliteral exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie es umbenennen, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und anschließendem Destructuring von `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standard-Import

Standard-Exporte müssen mit der entsprechenden Standard-Import-Syntax importiert werden. Diese Version importiert direkt das Standard-Element:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standard-Export keinen Namen explizit angibt, können Sie dem Bezeichner jeden beliebigen Namen geben.

Es ist auch möglich, einen Standard-Import mit Namespace-Importen oder benannten Importen zu spezifizieren. In solchen Fällen muss zuerst der Standard-Import deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat den gleichen Effekt wie ein Standard-Import. Es ist notwendig, den Namen zu aliasen, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein und enthält alle Exporte aus dem Modul, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul z. B. einen Export `doAllTheAmazingThings()` enthält, würden Sie diesen wie folgt aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie im [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Platzhalter-Importe wie `import * from "module-name"`, wegen der hohen Wahrscheinlichkeit von Namenskonflikten.

#### Import eines Moduls nur für dessen Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne irgendetwas zu importieren. Dies führt das globale Modulcode aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehostet")}}. Das bedeutet, dass die Bezeichner, die die Importe einführen, im gesamten Umfang des Moduls verfügbar sind und ihre Seiteneffekte vor dem Rest des Modulcodes erzeugt werden.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Bezeichnerauflösung

Die ECMAScript-Spezifikation legt nicht fest, wie Modulbezeichner aufgelöst werden und überlässt es der Host-Umgebung (z. B. Browsern, Node.js, Deno). Das Verhalten von Browsern wird von [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert, und dies ist zum _de facto_ Standard für alle Umgebungen geworden.

Es gibt drei Arten von Bezeichnern, die weitgehend anerkannt sind, wie sie von der HTML-Spezifikation, Node, und anderen implementiert werden:

- _Relative Bezeichner_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Bezeichner_, die analysierbare URLs sind und wie angegeben aufgelöst werden.
- _Bare Bezeichner_, die keines der oben genannten sind.

Die bemerkenswerteste Einschränkung für relative Bezeichner, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, besteht darin, dass Browser einem Bezeichner nicht erlauben, implizit zu vielen potenziellen Kandidaten aufgelöst zu werden. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importiert jedes der folgenden Beispiele den "Standard-Export" von `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, weil, wenn Sie `import x from "./utils"` schreiben, der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und potenziell viele andere URLs senden muss, bis er ein importierbares Modul findet. Daher kann in der HTML-Spezifikation der Bezeichner standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von der ESM-Implementierung von Node übernommen, ist jedoch kein Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` im Web niemals funktioniert. Der Browser sendet dennoch eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine eigene Auflösungslogik implementiert, da in der Regel Anfragen ohne Erweiterung als Anfragen für HTML-Dateien verstanden werden.

Absolute Bezeichner können jede Art von [URL](/de/docs/Web/URI) sein, die auf importierbaren Quellcode aufgelöst werden kann. Besonders bemerkenswert:

- [HTTP-URLs](/de/docs/Web/HTTP) werden immer im Web unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das sein gesamtes Modulsystem ursprünglich auf HTTP-URLs basierte), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeiten wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber sie werden von Browsern aus Sicherheitsgründen nicht unterstützt.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeiten, einschließlich Browsern, Node, Deno usw., unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können trotzdem [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden immer noch als Module interpretiert, können aber keine relativen Importe verwenden — weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, weil der relative Bezeichner `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) lösen sich zu eingebauten Node.js-Modulen auf. Sie werden von Node und anderen Laufzeiten unterstützt, die Kompatibilität mit Node beanspruchen, wie z. B. Bun.

Bare Bezeichner, die durch CommonJS populär wurden, werden im `node_modules`-Verzeichnis aufgelöst. Wenn Sie `import x from "foo"` haben, dann sucht die Laufzeit nach dem `foo`-Paket in jedem `node_modules`-Verzeichnis in den übergeordneten Verzeichnissen des aktuellen Moduls. Dieses Verhalten kann in Browsern mit [import maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modulauflösungsalgorithmus kann auch programmgesteuert mit der von der HTML-Spezifikation definierten Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

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

### Importierte Werte können nur durch den Exporteur verändert werden

Der zu importierende Bezeichner ist ein _Live Binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich ändern würde. Das Modul, das ihn importiert, kann ihn jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

Sie können den neuen Wert auch durch das [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

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
