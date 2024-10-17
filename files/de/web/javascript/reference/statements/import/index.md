---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: ce9feb386f99fdd94c99689d48915fcc48c39397
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden _live bindings_ genannt, da sie vom Modul, das das Binding exportiert hat, aktualisiert werden, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies erreicht, indem `type="module"` zum {{HTMLElement("script")}}-Tag hinzugefügt wird. Module werden automatisch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Der Name, der sich auf den Standardexport aus dem Modul bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert wird. Nur einzeln und doppelt angegebene Zeichenfolgenliterale sind erlaubt. Die Auswertung des Spezifiers ist host-spezifisch. Die meisten Hosts stimmen mit Browsern überein und lösen die Spezifikatoren als URLs auf, die relativ zur aktuellen Modul-URL sind (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft eigene Funktionen darauf, daher sollten Sie die Dokumentation für sie finden, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modul-Spezifikator-Auflösung](#modul-spezifikator-auflösung) bietet ebenfalls weitere Informationen.
- `name`
  - : Der Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Der Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgenliteral sein, abhängig davon, was `module-name` zum Exportieren deklariert. Wenn es ein Zeichenfolgenliteral ist, muss es einem gültigen Bezeichner aliasiert werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Müssen gültige JavaScript-Bezeichner sein.

Nach dem `"module-name"` kann eine Menge von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen vorhanden sein und nur auf der obersten Ebene (d. h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "Skript" oder "Funktionskörper" als Parsing-Ziele haben) auftritt, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie die [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax.

Alle importierten Bindings können nicht im gleichen Geltungsbereich wie jede andere Deklaration, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration, vorhanden sein.

`import`-Deklarationen sind so gestaltet, dass sie syntaktisch starr sind (zum Beispiel nur Zeichenfolgenliterale als Spezifikatoren, nur auf der obersten Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verlinken, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module asynchron von Natur aus zu machen und Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Unten sind Beispiele zur Veranschaulichung der Syntax.

#### Benannter Import

Angenommen, es gibt einen Wert namens `myExport`, der entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung aus dem Modul `my-module` exportiert wurde, dann fügt dies `myExport` in den aktuellen Geltungsbereich ein.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Zum Beispiel fügt dies `shortName` in den aktuellen Geltungsbereich ein.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenfolgenliteral exportieren, das kein gültiger Bezeichner ist, in welchem Fall Sie es aliassen müssen, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und anschließendes Destrukturieren von `x` und `y` von `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Standardimport-Syntax importiert werden. Die einfachste Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen Namen explizit angibt, können Sie dem Bezeichner jeden beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder benannten Importen zu spezifizieren. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat denselben Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliassen, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Geltungsbereich ein, der alle Exporte aus dem Modul `/modules/my-module.js` enthält.

```js
import * as myModule from "/modules/my-module.js";
```

Hier stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Zum Beispiel, wenn das oben importierte Modul einen Export `doAllTheAmazingThings()` enthält, würden Sie es so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie im [Module Namespace Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein vollständiges Modul nur für seine Seiteneffekte, ohne irgendetwas tatsächlich zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen ändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die Bezeichner, die durch die Importe eingeführt werden, im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte produziert werden, bevor der Rest des Modulkodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Spezifikator-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modulspezifikatoren aufgelöst werden und überlässt dies der Host-Umgebung (z. B. Browser, Node.js, Deno). Das Verhalten der Browser wird durch [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert, und dies ist zur _de-facto_-Basis für alle Umgebungen geworden.

Es gibt drei Typen von Spezifikatoren, die weitgehend anerkannt sind, wie sie durch die HTML-Spezifikation, Node und viele andere implementiert werden:

- _Relative Spezifikatoren_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Spezifikatoren_, die parsbare URLs sind, die unverändert aufgelöst werden.
- _Bare Spezifikatoren_, die keiner der oben genannten sind.

Das bemerkenswerteste Problem bei relativen Spezifikatoren, besonders für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser es verbieten, dass ein Spezifikator implizit auf viele potenzielle Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importieren alle der folgenden Beispiele den "Standardexport" aus `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, weil, wenn Sie `import x from "./utils"` schreiben, der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und potenziell viele andere URLs senden muss, bis er ein importierbares Modul findet. Daher kann in der HTML-Spezifikation der Spezifikator standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den Dateinamen `index.js` nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, ist jedoch kein Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server einige benutzerdefinierte Auflösungslogik implementiert, da normalerweise anforderungslose Anfragen als Anfragen für HTML-Dateien verstanden werden.

Absolute Spezifikatoren können jede Art von [URL](/de/docs/Web/URI) sein, die zu importierbarem Quellcode aufgelöst wird. Besonders hervorzuheben:

- [HTTP-URLs](/de/docs/Web/HTTP) werden immer im Web unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das anfangs sein gesamtes Modulsystem auf HTTP-URLs gründete), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeiten wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber sie werden aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Daten-URLs](/de/docs/Web/URI/Schemes/data) werden von vielen Laufzeiten einschließlich Browsern, Node, Deno usw. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, wie zum Beispiel `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie dürfen dennoch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Daten-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden – weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, weil der relative Spezifikator `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) werden zu eingebauten Node.js-Modulen aufgelöst. Sie werden von Node und anderen Laufzeiten unterstützt, die Kompatibilität mit Node beanspruchen, wie Bun.

Bare Spezifikatoren, popularisiert durch CommonJS, werden im `node_modules`-Verzeichnis aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, sucht die Laufzeit nach dem `foo`-Paket in jedem `node_modules`-Verzeichnis in den übergeordneten Verzeichnissen des aktuellen Moduls. Dieses Verhalten kann in Browsern durch [Import-Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modul-Auflösungsalgorithmus kann auch programmgesteuert mit der Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden, wie in der HTML-Spezifikation definiert.

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

Der Identifier, der importiert wird, ist ein _live binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich ändern würde. Das importierende Modul kann ihn jedoch nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt ändern, und der geänderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

Sie können auch den neuen Wert über das [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

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
- [Export and Import](https://javascript.info/import-export) auf javascript.info
