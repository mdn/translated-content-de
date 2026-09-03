---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, dynamische {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden als _dynamisch_ bezeichnet, weil sie von dem Modul aktualisiert werden, das das Binding exportiert, aber vom importierenden Modul nicht neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei von der Laufzeit als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML erfolgt dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag. Module werden automatisch im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

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
  - : Name, der sich auf den Standardexport des Moduls bezieht. Muss ein gültiger JavaScript-Identifikator sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur ein- und doppel-quotierte Zeichenfolgenliterale erlaubt. Die Auswertung des Spezifikators ist host-spezifiziert. Die meisten Hosts orientieren sich an Browsern und lösen die Spezifikatoren als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren oft ihre eigenen Funktionen obendrauf, daher sollten Sie deren Dokumentation konsultieren, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modulspezifikator-Auflösung](#modulspezifikator-auflösung) enthält ebenfalls weitere Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Identifikator sein.
- `exportN`
  - : Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Identifikator oder ein Zeichenfolgenliteral sein, je nachdem, was `module-name` zu exportieren erklärt. Wenn es sich um ein Zeichenfolgenliteral handelt, muss es zu einem gültigen Identifikator aliased werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Identifikator sein.

Der `"module-name"` kann von einer Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, beginnend mit dem Stichwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen und nur auf der obersten Ebene vorhanden sein (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in nicht-modulbezogenen Kontexten angetroffen wird (z. B. `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "script" oder "function body" als Parsing-Ziele haben), wird ein `SyntaxError` ausgelöst. Um Module in nicht-modulbezogenen Kontexten zu laden, verwenden Sie stattdessen die Syntax für [dynamisches Importieren](/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindings können nicht im gleichen Gültigkeitsbereich wie andere Deklarationen einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklaration sein.

`import`-Deklarationen sind syntaktisch starr gestaltet (zum Beispiel nur Zeichenfolgenliterale als Spezifikatoren, nur auf der obersten Ebene erlaubt, alle Bindings müssen Identifikatoren sein), was es erlaubt, Module statisch zu analysieren und zu verlinken, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen und Funktionen wie [Top-Level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen der Import-Deklarationen

Es gibt vier Formen der `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#importieren_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Im Folgenden finden Sie Beispiele zur Klarstellung der Syntax.

#### Benannter Import

Angenommen, es gibt einen Wert namens `myExport`, der entweder implizit als `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung aus dem Modul `my-module` exportiert wurde, dann fügt dies `myExport` in den aktuellen Gültigkeitsbereich ein.

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

Ein Modul kann auch ein Mitglied als Zeichenfolgenliteral exportieren, das kein gültiger Identifikator ist. In diesem Fall müssen Sie es aliasen, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichwertig zu `import defaultExport from "mod"` und dann `x` und `y` von `defaultExport` zu destrukturieren. Benannte und Standard-Importe sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Syntax für Standardimporte importiert werden. Diese Version importiert den Standard direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport keinen expliziten Namen angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Imports oder benannten Imports zu spezifizieren. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat den gleichen Effekt wie ein Standardimport. Es ist notwendig, den Namen zu aliasen, weil `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein, das alle Exporte aus dem Modul unter `/modules/my-module.js` enthält.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei repräsentiert `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn zum Beispiel das oben importierte Modul einen Export `doAllTheAmazingThings()` enthält, würden Sie es folgendermaßen aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [sealed](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript hat keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Importieren eines Moduls nur für seine Seiteneffekte

Importieren Sie ein ganzes Modul nur für Seiteneffekte, ohne etwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert aber keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die von den Importen eingeführten Identifikatoren im gesamten Modulumfang verfügbar sind, und deren Seiteneffekte treten auf, bevor der übrige Code des Moduls ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modulspezifikator-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modulspezifikatoren aufgelöst werden und überlässt es der Host-Umgebung (z. B. Browser, Node.js, Deno). Das Verhalten von Browsern wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt, und dies ist zum de facto Baseline für alle Umgebungen geworden.

Es gibt drei Typen von Spezifikatoren, die weithin anerkannt sind, wie in der HTML-Spezifikation, Node und vielen anderen implementiert:

- _Relative Spezifikatoren_, die mit `/`, `./` oder `../` beginnen, werden relativ zur aktuellen Modul-URL aufgelöst.
- _Absolute Spezifikatoren_, die analysierbare URLs sind, werden unverändert aufgelöst.
- _Bare Spezifikatoren_, die keiner der obigen sind.

Die bemerkenswerteste Einschränkung für relative Spezifikatoren, besonders für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser es verbieten, dass ein Spezifikator implizit zu vielen potenziellen Kandidaten aufgelöst wird. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, werden alle folgenden die "Standardexporte" von `utils/index.js` importieren:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, denn wenn Sie `import x from "./utils"` schreiben, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden, bis er ein importierbares Modul findet. Daher kann in der HTML-Spezifikation der Spezifikator standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateiendung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von Node's ESM-Implementierung übernommen, ist jedoch kein Teil der ECMAScript-Spezifikation.

Das bedeutet nicht, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet immer noch eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, denn in der Regel werden Anfragen ohne Erweiterung als Anfragen für HTML-Dateien verstanden.

Absolute Spezifikatoren können jede Art von [URL](/de/docs/Web/URI) sein, die auf importierbaren Quellcode aufgelöst werden. Am bemerkenswertesten:

- [HTTP-URLs](/de/docs/Web/HTTP) sind im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das sein gesamtes Modulsystem ursprünglich auf HTTP-URLs aufgebaut hat), hat jedoch in Node nur experimentellen Support über [kundenspezifische HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeiten wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aber sie werden aufgrund von Sicherheitsbedenken von Browsern nicht unterstützt.
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeiten einschließlich Browsern, Node, Deno usw. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind diejenigen, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können immer noch [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Daten-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — da das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, da der relative Spezifikator `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) auflösen zu den integrierten Node.js-Modulen. Sie werden von Node und anderen Laufzeiten unterstützt, die Kompatibilität mit Node beanspruchen, wie Bun.

Bare Spezifikatoren, die durch CommonJS populär gemacht wurden, werden innerhalb des Verzeichnisses `node_modules` aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, dann wird die Laufzeit nach dem `foo`-Paket innerhalb jeglicher `node_modules`-Verzeichnisse in den Elternverzeichnissen des aktuellen Moduls suchen. Dieses Verhalten kann in Browsern mit [Import-Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Algorithmus zur Modulspezifikator-Auflösung kann auch programmatisch mit der Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden, die durch die HTML-Spezifikation definiert ist.

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines angegebenen Bereichs zu erhalten.

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

Der importierte Bezeichner ist eine _dynamische Bindung_, weil das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich ändern würde. Allerdings kann das importierende Modul ihn nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt mutieren, und der mutierte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

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

Nicht-JavaScript-Module können auch mit der `import`-Anweisung importiert werden, aber deren Typen müssen ausdrücklich mit [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) deklariert werden. Zum Beispiel, um ein JSON-Modul zu importieren, müssen Sie das Attribut `type: "json"` angeben.

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
- [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
