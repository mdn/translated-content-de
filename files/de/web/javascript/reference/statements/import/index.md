---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 3d3046d13482ca979db8b98b6eb55927b9b3a51f
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, laufzeitlich gebundene {{Glossary("binding", "bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindungen werden _laufzeitliche Bindungen_ genannt, weil sie vom Modul, das die Bindung exportiert hat, aktualisiert werden, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei von der Laufzeit als ein [Module](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch einen funktionsähnlichen dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), der keine Skripte vom Typ `type="module"` erfordert.

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
  - : Namen, der sich auf den Standardexport aus dem Modul bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur einfache und doppelte Anführungszeichen erlaubt. Die Auswertung des Spezifizierers ist host-spezifisch. Die meisten Hosts stimmen mit Browsern überein und lösen die Spezifizierer als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft ihre eigenen Funktionen darüber hinaus, daher sollten Sie die Dokumentation für diese lesen, um die genauen Regeln zu verstehen. Der Abschnitt [Modulspezifizierer-Auflösung](#modulspezifizierer-auflösung) enthält ebenfalls weitere Informationen.
- `name`
  - : Name des Modulobjekts, das als Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Namen der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgenliteral sein, je nachdem, was `module-name` zum Exportieren angibt. Wenn es ein Zeichenfolgenliteral ist, muss es zu einem gültigen Bezeichner aliasiert werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Bezeichner sein.

Dem `"module-name"` können eine Reihe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen vorhanden sein, und nur auf oberster Ebene (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax.

Alle importierten Bindungen dürfen sich nicht im selben Geltungsbereich wie jede andere Deklaration befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration.

`import`-Deklarationen sind dafür konzipiert, syntaktisch streng zu sein (zum Beispiel nur Spezifizierer als Stringliterale, nur auf oberster Ebene erlaubt, alle Bindungen müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und vor der Auswertung zu verknüpfen. Dies ist der Schlüssel dazu, Module von Natur aus asynchron zu machen und Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Named import](#named_import): `import { export1, export2 } from "module-name";`
- [Default import](#default_import): `import defaultExport from "module-name";`
- [Namespace import](#namespace_import): `import * as name from "module-name";`
- [Side effect import](#importieren_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Unten finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Named import

Angenommen, ein Wert namens `myExport` wurde aus dem Modul `my-module` entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung exportiert, dieser wird in den aktuellen Geltungsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Zum Beispiel wird dadurch `shortName` in den aktuellen Geltungsbereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Stringliteral exportieren, das kein gültiger Bezeichner ist; in diesem Fall müssen Sie es aliasieren, um es im aktuellen Modul verwenden zu können.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und anschließendem Destructuring von `x` und `y` aus `defaultExport`. Named und Default Importe sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Default import

Standardexporte müssen mit der entsprechenden Standardimportsytax importiert werden. Diese Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen Namen explizit angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Importen oder Named-Importen zu spezifizieren. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens mit dem Namen `default` hat denselben Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace import

Der folgende Code fügt `myModule` in den aktuellen Geltungsbereich ein, das alle Exporte aus dem Modul enthält, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hier stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise einen Export `doAllTheAmazingThings()` enthält, würden Sie es so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [Sealed](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)-Objekt mit [`null` prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Importieren eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne etwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch tatsächlich keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen sind {{Glossary("Hoisting", "Hoisted")}}. In diesem Fall bedeutet das, dass die von den Importen eingeführten Bezeichner im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte vor dem Rest des Modulcodes ausgeführt werden.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modulspezifizierer-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modulspezifizierer aufgelöst werden, und überlässt dies der Host-Umgebung (z. B. Browser, Node.js, Deno). Das Browserverhalten wird von [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert, und dies ist zur _de facto_ Basis für alle Umgebungen geworden.

Es gibt drei Typen von Spezifizierern, die weitläufig anerkannt sind, wie sie von der HTML-Spezifikation, Node und vielen anderen implementiert werden:

- _Relative Spezifizierer_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Spezifizierer_, die parsierbare URLs sind und so aufgelöst werden, wie sie sind.
- _Bare Spezifizierer_, die keiner der obigen sind.

Die bemerkenswerteste Einschränkung für relative Spezifizierer, insbesondere für Personen, die mit Konventionen von [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) vertraut sind, ist, dass Browser einem Spezifizierer verbieten, sich implizit auf viele potenzielle Kandidaten aufzulösen. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, importieren dann alle folgenden den "Standardexport" von `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, da, wenn Sie `import x from "./utils"` schreiben, der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und potenziell viele andere URLs senden muss, bis es ein importierbares Modul findet. Daher kann in der HTML-Spezifikationen der Spezifizierer standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den Dateinamen `index.js` nicht weglassen. Dieses Verhalten wurde von der ESM-Implementierung von Node vererbt, aber es ist kein Teil der ECMAScript-Spezifikation.

Das bedeutet nicht, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet immer noch eine Anfrage an diese URL, und wenn der Server mit dem korrekten Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, da Anfrage ohne Erweiterung üblicherweise als Anfrage nach HTML-Dateien verstanden werden.

Absolute Spezifizierer können jede Art von [URL](/de/docs/Web/URI) sein, die sich auf importierbaren Quellcode auflöst. Am bemerkenswertesten:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs besitzen. Es wird nativ von Deno unterstützt (das anfänglich sein gesamtes Modulsystem auf HTTP-URLs stützte), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden durch viele Nicht-Browser-Laufzeiten wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber sie werden aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden durch viele Laufzeiten einschließlich Browsern, Node, Deno, usw. unterstützt. Sie sind nützlich zum Einbetten von kleinen Modulen direkt in den Quellcode. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind jene, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module, usw. (Sie können immer noch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Daten-URLs werden weiterhin als Module interpretiert, aber sie können keine relativen Importe verwenden — weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler werfen, da der relative Spezifizierer `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) lösen sich zu eingebauten Node.js-Modulen auf. Sie werden von Node und anderen Laufzeiten unterstützt, die Kompatibilität mit Node beanspruchen, wie Bun.

Bare Spezifizierer, die von CommonJS popularisiert wurden, werden im `node_modules`-Verzeichnis aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, wird die Laufzeit nach dem `foo`-Paket innerhalb eines `node_modules`-Verzeichnisses in den übergeordneten Verzeichnissen des aktuellen Moduls suchen. Dieses Verhalten kann in Browsern mit [Import-Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) nachgebildet werden, die Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modulauflösungsalgorithmus kann auch programmatisch mittels der Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve), die von der HTML-Spezifikation definiert wird, ausgeführt werden.

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

Die Bezeichner, die importiert werden, sind _laufzeitliche Bindungen_, weil das Modul, das sie exportiert, sie neu zuweisen kann und sich der importierte Wert ändern würde. Das Modul, das sie importiert, kann sie jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen, die denselben Wert importieren, beobachtet werden.

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

### Importieren von Nicht-JavaScript-Modulen

Nicht-JavaScript-Module können auch unter Verwendung der `import`-Anweisung importiert werden, aber ihre Typen müssen explizit mit [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) deklariert werden. Um zum Beispiel ein JSON-Modul zu importieren, müssen Sie das `type: "json"`-Attribut angeben.

```js
import data from "./data.json" with { type: "json" };
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/export", "export")}}
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Import Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
