---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: bb43ed4a630f0d2912370b66b6d149bc4d26a6da
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, lebende {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) wurden. Die importierten Bindings werden _lebende Bindings_ genannt, weil sie durch das Modul, das das Binding exportiert, aktualisiert werden können, aber nicht durch das importierende Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. Im HTML wird dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}} Tag erreicht. Module werden automatisch im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch eine funktionsähnliche, dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), die keine Skripte vom Typ `module` erfordert.

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
  - : Name, der sich auf den Standardexport aus dem Modul beziehen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur einfach- und doppelt-quoted Zeichenkettenliterale erlaubt. Die Bewertung des Bezeichners ist host-spezifisch. Die meisten Hosts stimmen mit Browsern überein und lösen die Bezeichner als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft ihre eigenen Features darauf aufbauend, daher sollten Sie die Dokumentation dieser Umgebungen konsultieren, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modul-Bezeichner-Auflösung](#modul-bezeichner-auflösung) enthält auch weitere Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der zu importierenden Exporte. Der Name kann entweder ein Bezeichner oder ein Zeichenkettenliteral sein, abhängig davon, was `module-name` zum Exportieren deklariert. Wenn es ein Zeichenkettenliteral ist, muss es in ein gültiges Bezeichner umbenannt werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen werden. Muss ein gültiger JavaScript-Bezeichner sein.

Der `"module-name"` kann von einer Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt sein, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf oberster Ebene (d.h. nicht in Blöcken, Funktionen usw.) vorhanden sein. Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (z.B. `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script"- oder "function body" als Parsing-Ziele haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie die [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax stattdessen.

Alle importierten Bindings können sich nicht im selben Umfang wie jede andere Deklaration befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration.

`import`-Deklarationen sind so gestaltet, dass sie syntaktisch starr sind (z.B. nur Zeichenkettenliteralbezeichner, nur auf oberster Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen, was Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) ermöglicht.

### Formen der Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannte Importe](#benannte_importe): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Im Folgenden finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannte Importe

Gegeben einen Wert namens `myExport`, der entweder implizit als `export * from "another.js"` oder explizit mittels der {{jsxref("Statements/export", "export")}} Anweisung aus dem Modul `my-module` exportiert wurde, fügt dies `myExport` in den aktuellen Umfang ein.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Beispielsweise fügt dies `shortName` in den aktuellen Umfang ein.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenkettenliteral exportieren, das kein gültiger Bezeichner ist, in diesem Fall müssen Sie es aliasieren, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann Destrukturierung von `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standard-Exporte müssen mit der entsprechenden Standardimport-Syntax importiert werden. Diese Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen Namen explizit angibt, können Sie dem Bezeichner jeden beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder benannten Importen anzugeben. In solchen Fällen muss der Standardimport zuerst deklariert werden. Beispielsweise:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens, der `default` genannt wird, hat denselben Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, denn `default` ist ein reserviertes Wort.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Umfang ein, das alle Exporte aus dem Modul, das unter `/modules/my-module.js` liegt, enthält.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei repräsentiert `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Beispielsweise, wenn das oben importierte Modul ein Export `doAllTheAmazingThings()` enthält, würden Sie es folgendermaßen aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [sealed](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne irgendetwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte tatsächlich.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die durch den Import eingeführten Bezeichner im gesamten Modulumfang verfügbar sind und ihre Seiteneffekte vor dem Rest des Modulcodes erzeugt werden.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Bezeichner-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modul-Bezeichner aufgelöst werden und überlässt es der Host-Umgebung (z. B. Browsern, Node.js, Deno). Das Verhalten im Browser wird durch [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert und ist zum _de facto_ Standard für alle Umgebungen geworden.

Es gibt drei weit anerkannte Typen von Bezeichnern, wie sie von der HTML-Spezifikation, Node und vielen anderen implementiert wurden:

- _Relative Bezeichner_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Bezeichner_, die analysierbare URLs sind und als solche aufgelöst werden.
- _Bare Bezeichner_, die keines der oben genannten sind.

Das bemerkenswerteste Problem bei relativen Bezeichnern, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser verhindern, dass ein Bezeichner implizit zu vielen potenziellen Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importieren alle der folgenden den "Standard-Export" aus `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies teuer, weil, wenn Sie `import x from "./utils"` schreiben, der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden muss, bis es ein importierbares Modul findet. Daher kann der Bezeichner in der HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateiendung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, es ist jedoch kein Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet dennoch eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, da normalerweise extensionslose Anfragen als Anfragen für HTML-Dateien verstanden werden.

Absolute Bezeichner können jede Art von [URL](/de/docs/Web/URI) sein, die zu importierbarem Quellcode auflöst. Am bemerkenswertesten sind:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird von Deno nativ unterstützt (das sein ganzes Modulsystem ursprünglich auf HTTP-URLs basierte), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:` URLs werden von vielen Nicht-Browser-Laufzeitumgebungen wie Node unterstützt, da Skripte dort bereits `file:` URLs haben, aber sie werden aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen einschließlich Browsern, Node, Deno usw. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubinden. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind diejenigen, die importierbaren Quellcode kennzeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können trotzdem [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript` Data-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — da das `data:` URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler werfen, da der relative Bezeichner `'./y.js'` nicht aufgelöst werden kann.

- [`node:` URLs](https://nodejs.org/api/esm.html#node-imports) lösen zu eingebauten Node.js-Modulen auf. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die behaupten, kompatibel mit Node zu sein, wie Bun.

Bare Bezeichner, populär gemacht von CommonJS, werden innerhalb des `node_modules`-Verzeichnisses aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, sucht die Laufzeitumgebung nach dem `foo`-Paket innerhalb eines beliebigen `node_modules`-Verzeichnisses in den übergeordneten Verzeichnissen des aktuellen Moduls. Dieses Verhalten kann in Browsern mit [Import-Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modul-Auflösungs-Algorithmus kann auch programmatisch unter Verwendung der [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)-Funktion ausgeführt werden, die von der HTML-Spezifikation definiert ist.

## Beispiele

### Standard-Import

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

Der importierte Bezeichner ist ein _lebendes Binding_, da das Modul, das es exportiert, es neu zuweisen kann und der importierte Wert sich ändern würde. Das Modul, das es importiert, kann es jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen, die denselben Wert importieren, beobachtet werden.

Sie können auch den neuen Wert durch das [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

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
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
