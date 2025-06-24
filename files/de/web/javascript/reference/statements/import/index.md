---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-{{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden _Live-Bindings_ genannt, weil sie vom Modul, das die Bindung exportiert, aktualisiert werden können, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Laufzeitsystem als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch einen funktionsähnlichen dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), der keine Skripte vom Typ `type="module"` benötigt.

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
  - : Name, der sich auf den Standard-Export aus dem Modul bezieht. Muss ein gültiger JavaScript-Identifier sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Nur einfache und doppelte Anführungszeichen sind erlaubt. Die Auswertung des Bezeichners ist host-spezifisch. Die meisten Hosts stimmen mit Browsern überein und lösen die Bezeichner als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere nicht-browserbasierte Umgebungen definieren oft ihre eigenen Funktionen darauf aufbauend, daher sollten Sie deren Dokumentation konsultieren, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modul-Bezeichner-Auflösung](#modul-bezeichner-auflösung) bietet weitere Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace dient, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Identifier sein.
- `exportN`
  - : Name der zu importierenden Exporte. Der Name kann entweder ein Identifier oder ein Stringliteral sein, abhängig davon, was `module-name` zu exportieren angibt. Wenn es ein Stringliteral ist, muss es einem gültigen Identifier aliasiert werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Identifier sein.

Der `"module-name"` kann von einem Satz von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen dürfen nur in Modulen und nur auf der obersten Ebene (d.h. nicht innerhalb von Blöcken, Funktionen usw.) vorhanden sein. Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "Script" oder "Funktionskörper" als Parsing-Ziele haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import]-Syntax (/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindings dürfen nicht im selben Scope wie jede andere Deklaration, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration, sein.

`import`-Deklarationen sind so gestaltet, dass sie syntaktisch starr sind (zum Beispiel, nur Stringliteral-Spezifizierer, nur auf oberster Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verbinden, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen, was Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) ermöglicht.

### Formen der Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Nachfolgend finden Sie Beispiele, um die Syntax zu verdeutlichen.

#### Benannter Import

Angenommen, ein Wert namens `myExport` wurde aus dem Modul `my-module` entweder implizit als `export * from "another.js"` oder explizit unter Verwendung der {{jsxref("Statements/export", "export")}}-Anweisung exportiert, wird dies `myExport` in den aktuellen Gültigkeitsbereich einfügen.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können beim Importieren einem Export einen anderen Namen geben. Zum Beispiel wird dies `shortName` in den aktuellen Gültigkeitsbereich einfügen.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Stringliteral exportieren, das kein gültiger Bezeichner ist; in diesem Fall müssen Sie ihn aliassen, um ihn im aktuellen Modul verwenden zu können.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE] > `import { x, y } from "mod"` ist nicht gleich `import defaultExport from "mod"` und dann das Zugreifen auf `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Standardimports-Syntax importiert werden. Diese Version importiert den Standard direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport den Namen nicht explizit spezifiziert, können Sie ihm jeden beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Imports oder benannten Imports zu spezifizieren. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat dieselbe Wirkung wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, weil `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein, das alle Exporte des Moduls enthält, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei repräsentiert `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise einen Export `doAllTheAmazingThings()` enthält, würden Sie ihn so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [abgedichtetes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel namens `default` verfügbar. Weitere Informationen finden Sie im [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Sternchen-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur wegen seiner Seiteneffekte, ohne etwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Gültigkeitsbereich des Moduls verfügbar sind und ihre Seiteneffekte erzeugt werden, bevor der Rest des Moduls ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Bezeichner-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modul-Bezeichner aufgelöst werden, und überlässt es der Host-Umgebung (z. B. Browser, Node.js, Deno). Das Verhalten des Browsers wird durch [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt, und dies hat sich zum _de facto_-Standard für alle Umgebungen entwickelt.

Es gibt drei Arten von weit verbreiteten Bezeichnern, wie sie von der HTML-Spezifikation, Node und vielen anderen implementiert wurden:

- _Relative Bezeichner_, die mit `/`, `./` oder `../` beginnen, die relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Bezeichner_, die analysierbare URLs sind, die wie angegeben aufgelöst werden.
- _Bare Bezeichner_, die keiner der oben genannten sind.

Das bemerkenswerteste Problem bei relativen Bezeichnern, besonders für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser verbieten, dass ein Bezeichner implizit zu vielen potenziellen Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importieren alle folgenden Zeilen den "Standardexport" von `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, da, wenn Sie `import x from "./utils"` schreiben, der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden muss, bis er ein importierbares Modul findet. Daher kann der Bezeichner in der HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wurde. Sie können die Dateiendung oder den Dateinamen `index.js` nicht weglassen. Dieses Verhalten wurde von der ESM-Implementierung von Node übernommen, ist aber nicht Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL und wenn der Server den richtigen Inhalt senden kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine bestimmte Auflösungslogik implementiert, da sonst normalerweise anforderungslose Anfragen als Anfragen für HTML-Dateien verstanden werden.

Absolute Bezeichner können jede Art von [URL](/de/docs/Web/URI) sein, die auf importierbaren Quellcode verweist. Am bemerkenswertesten:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das zunächst sein gesamtes Modulsystem auf HTTP-URLs basierte), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeitumgebungen wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber aufgrund von Sicherheitsgründen nicht von Browsern unterstützt werden.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen einschließlich Browsern, Node, Deno etc. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module etc. (Sie können immer noch [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden, weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` führt zu einem Fehler, weil der relative Bezeichner `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) lösen sich zu eingebauten Node.js-Modulen auf. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Kompatibilität mit Node beanspruchen, wie Bun.

Bare Bezeichner, populär durch CommonJS, werden innerhalb des `node_modules`-Verzeichnisses aufgelöst. Wenn Sie zum Beispiel `import x from "foo"` haben, wird die Laufzeitumgebung nach dem `foo`-Paket in jedem `node_modules`-Verzeichnis der übergeordneten Verzeichnisse des aktuellen Moduls suchen. Dieses Verhalten kann im Browser mittels [Import-Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modulauflösungsalgorithmus kann auch programmgesteuert mit der im HTML-Spezifikationsleitfaden definierten Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

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

### Importierte Werte können nur durch den Exporteur geändert werden

Der importierte Bezeichner ist ein _Live Binding_, weil das Modul, das ihn exportiert, ihn neu zuweisen und der importierte Wert würde sich ändern. Allerdings kann das Module, das ihn importiert, ihn nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt mutieren, und der veränderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

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
- [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
