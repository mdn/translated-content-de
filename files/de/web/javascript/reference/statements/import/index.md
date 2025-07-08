---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, dynamische {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden _dynamische Bindings_ genannt, weil sie durch das Modul, das das Binding exportiert, aktualisiert werden, aber nicht durch das importierende Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei zur Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML geschieht dies, indem `type="module"` zum {{HTMLElement("script")}}-Tag hinzugefügt wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch eine funktionsähnliche dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), die keine Skripte des Typs `type="module"` erfordert.

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
  - : Der Name, der sich auf den Standardexport des Moduls bezieht. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur einfach- und doppelt-anfwendungszeichenkettenliterals erlaubt. Die Bewertung des Bezeichners ist hostspezifisch. Die meisten Hosts richten sich nach Browsern und lösen die Bezeichner als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft ihre eigenen Features darauf, also sollten Sie deren Dokumentation finden, um die genauen Regeln zu verstehen. Der Abschnitt [Modul-Bezeichnerauflösung](#modul-bezeichnerauflösung) enthält ebenfalls weitere Informationen.
- `name`
  - : Der Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Der Name der zu importierenden Exporte. Der Name kann entweder ein Bezeichner oder ein string-Literal sein, je nachdem, was `module-name` zu exportieren erklärt. Wenn es sich um ein string-Literal handelt, muss es zu einem gültigen Bezeichner aliasiert werden.
- `aliasN`
  - : Die Namen, die sich auf die benannten Importe beziehen werden. Muss ein gültiger JavaScript-Bezeichner sein.

Der `"module-name"` kann von einer Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf der obersten Ebene vorhanden sein (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle das Parsing-Ziel "Skript" oder "Funktionskörper" haben) angetroffen wird, wird ein `SyntaxError` ausgelöst. Um Module in Nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import) Syntax.

Alle importierten Bindings können sich nicht im selben Gültigkeitsbereich wie jede andere Deklaration befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und `import`-Deklaration.

`import`-Deklarationen sind so konzipiert, syntaktisch starr zu sein (zum Beispiel nur Zeichenkettenliteral-Spezifikatoren, nur auf der obersten Ebene zugelassen, alle Bindings müssen Bezeichner sein), was es ermöglicht, dass Module statisch analysiert und verknüpft werden, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen und Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu ermöglichen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Nebeneffekt-Import](#importieren_eines_moduls_nur_für_seine_nebeneffekte): `import "module-name";`

Unten befinden sich Beispiele, um die Syntax zu verdeutlichen.

#### Benannter Import

Angenommen, es gibt einen Wert namens `myExport`, der entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Erklärung aus dem Modul `my-module` exportiert wurde, fügt dies `myExport` in den aktuellen Gültigkeitsbereich ein.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Importieren umbenennen. Zum Beispiel fügt dies `shortName` in den aktuellen Gültigkeitsbereich ein.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als string-Literal exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie es aliasieren, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann das Destrukturieren von `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind in JavaScript-Modulen unterschiedliche Syntaxen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Standardimports-Syntax importiert werden. Diese Version importiert direkt den Standard:

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

Das Importieren eines Namens namens `default` hat den gleichen Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, weil `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein, der alle Exporte aus dem Modul enthält, das unter `/modules/my-module.js` zu finden ist.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei steht `myModule` für ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise einen Export `doAllTheAmazingThings()` enthält, würden Sie ihn wie folgt aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, wegen der hohen Wahrscheinlichkeit von Namenskonflikten.

#### Importieren eines Moduls nur für seine Nebeneffekte

Importieren Sie ein gesamtes Modul nur wegen der Nebeneffekte, ohne tatsächlich Werte zu importieren. Dies führt den globalen Code des Moduls aus, importiert jedoch keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen modifizieren.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulumfang verfügbar sind und ihre Nebeneffekte erzeugt werden, bevor der Rest des Modulcodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Bezeichnerauflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modulbezeichner aufgelöst werden, und überlässt es der Host-Umgebung (z.B. Browser, Node.js, Deno). Das Verhalten in Browsern wird durch [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt und ist zur _de facto_-Basis für alle Umgebungen geworden.

Es gibt drei allgemein anerkannte Typen von Bezeichnern, wie von der HTML-Spezifikation, Node und vielen anderen implementiert:

- _Relative Bezeichner_, die mit `/`, `./` oder `../` beginnen und relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Bezeichner_, die analysierbare URLs sind und wie sie sind aufgelöst werden.
- _Bare Bezeichner_, die keiner der obigen sind.

Die bemerkenswerteste Einschränkung für relative Bezeichner, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser verbieten, dass ein Bezeichner implizit zu vielen potenziellen Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann würden alle folgenden den "Standardexport" von `utils/index.js` importieren:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Internet ist dies kostspielig, denn wenn Sie `import x from "./utils"` schreiben, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden, bis er ein importierbares Modul findet. Daher kann in der HTML-Spezifikation der Bezeichner standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den Datei-Namen `index.js` nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, ist jedoch kein Bestandteil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` im Internet niemals funktioniert. Der Browser sendet trotzdem eine Anfrage an diese URL, und wenn der Server mit dem korrekten Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine spezielle Auflösungslogik implementiert, da anwendungsextensionsfreie Anfragen normalerweise als Anfragen für HTML-Dateien verstanden werden.

Absolute Bezeichner können jede Art von [URL](/de/docs/Web/URI) sein, die in importierbaren Quellcode aufgelöst wird. Besonders bemerkenswert:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Internet immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Sie werden von Deno (das ursprünglich sein gesamtes Modul-System auf HTTP-URLs stützte) nativ unterstützt, haben aber in Node nur experimentelle Unterstützung über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeitumgebungen wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, sind aber aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeiten einschließlich Browsern, Node, Deno usw. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können dennoch [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

`text/javascript`-Daten-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — da das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, weil der relative Bezeichner `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) wird zu eingebauten Node.js-Modulen aufgelöst. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Anspruch auf Kompatibilität mit Node erheben, wie Bun.

Bare Bezeichner, populär durch CommonJS, werden innerhalb des `node_modules`-Verzeichnisses aufgelöst. Wenn Sie zum Beispiel `import x from "foo"` haben, dann wird die Laufzeit nach dem `foo`-Paket innerhalb eines `node_modules`-Verzeichnisses in den übergeordneten Verzeichnissen des aktuellen Moduls suchen. Dieses Verhalten kann in Browsern mithilfe von [Import-Karten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) nachgeahmt werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modul-Auflösungsalgorithmus kann auch programmgesteuert unter Verwendung der [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)-Funktion, die von der HTML-Spezifikation definiert wird, ausgeführt werden.

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

### Importierte Werte können nur vom Exporteur modifiziert werden

Der importierte Bezeichner ist ein _dynamisches Binding_, weil das Modul, das es exportiert, es neu zuweisen kann und der importierte Wert sich ändern würde. Allerdings kann das importierende Modul es nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen, die denselben Wert importieren, beobachtet werden.

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
- [Vorschau auf ES6-Module und mehr aus ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Ein Cartoon-Tiefenblick](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
