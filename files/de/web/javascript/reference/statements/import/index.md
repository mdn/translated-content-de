---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-{{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden _Live-Bindings_ genannt, da sie von dem Modul aktualisiert werden, das das Binding exportiert hat, aber nicht vom importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Laufzeitsystem als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML geschieht dies, indem `type="module"` zum {{HTMLElement("script")}}-Tag hinzugefügt wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch einen funktional ähnlichen dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), der keine Skripte vom Typ `module` erfordert.

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
  - : Name, der sich auf den Default-Export aus dem Modul bezieht. Muss ein gültiger JavaScript-Identifier sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur einzeln und doppelt gequotete String-Literale erlaubt. Die Auswertung des Bezeichners ist host-spezifiziert. Die meisten Hosts stimmen mit Browsern überein und lösen die Bezeichner als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren häufig eigene Regeln über diese hinaus, daher sollten Sie deren Dokumentation zurate ziehen, um die genauen Regeln zu verstehen. Der Abschnitt zur [Modul-Bezeichner-Auflösung](#modul-bezeichner-auflösung) enthält ebenfalls weitere Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, wenn auf die Importe verwiesen wird. Muss ein gültiger JavaScript-Identifier sein.
- `exportN`
  - : Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Identifier oder ein String-Literal sein, abhängig davon, was `module-name` zum Export erklärt. Wenn es ein String-Literal ist, muss es in einen gültigen Identifier umbenannt werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Identifier sein.

Der `"module-name"` kann von einer Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, beginnend mit dem Schlüsselwort `with`.

## Beschreibung

`import`-Deklarationen können nur in Modulen vorhanden sein und nur auf der obersten Ebene (d.h. nicht innerhalb von Blöcken, Funktionen, etc.). Wenn eine `import`-Deklaration in nicht-modularen Kontexten (z. B. `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle "Skript" oder "Funktionskörper" als Parsing-Ziele haben) gefunden wird, wird ein `SyntaxError` ausgelöst. Um Module in nicht-modularen Kontexten zu laden, verwenden Sie das [dynamische Import](/de/docs/Web/JavaScript/Reference/Operators/import)-Syntax anstelle davon.

Alle importierten Bindings können nicht im gleichen Gültigkeitsbereich wie jede andere Deklaration, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}}, und `import`-Deklaration, erscheinen.

`import`-Deklarationen sind so konzipiert, dass sie syntaktisch strikt sind (zum Beispiel nur String-Literal-Spezifizierer, nur auf oberster Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module asynchron von Natur aus zu machen und Funktionen wie [Top-Level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen der Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Im Folgenden finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Angenommen, ein Wert namens `myExport` wurde entweder implizit als `export * from "another.js"` oder explizit mithilfe der {{jsxref("Statements/export", "export")}}-Anweisung aus dem Modul `my-module` exportiert, dann fügt dies `myExport` in den aktuellen Gültigkeitsbereich ein.

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

Ein Modul kann auch ein Mitglied als String-Literal exportieren, das kein gültiger Identifier ist, in diesem Fall müssen Sie es umbenennen, um es im aktuellen Modul zu verwenden.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann Destrukturierung von `x` und `y` von `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexports müssen mit der entsprechenden Standardimport-Syntax importiert werden. Diese Version importiert direkt den Standard:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport den Namen explizit nicht angibt, können Sie dem Bezeichner einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport mit Namespace-Imports oder benannten Imports zu spezifizieren. In solchen Fällen muss der Standardimport zuerst angegeben werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens `default` hat die gleiche Wirkung wie ein Standardimport. Es ist notwendig, den Namen umzubenennen, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein, das alle Exporte aus dem Modul enthält, das sich unter `/modules/my-module.js` befindet.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei repräsentiert `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Zum Beispiel, wenn das oben importierte Modul einen Export `doAllTheAmazingThings()` enthält, würden Sie es folgendermaßen aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null` Prototypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Für weitere Informationen siehe [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript verfügt nicht über Wildcard-Imports wie `import * from "module-name"`, da die Möglichkeit von Namenskonflikten hoch ist.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne etwas zu importieren. Dies führt den globalen Code des Moduls aus, importiert aber tatsächlich keine Werte.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Import-Deklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die Bezeichner, die durch die Importe eingeführt werden, im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte auftreten, bevor der Rest des Moduls ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Bezeichner-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modul-Bezeichner aufgelöst werden und überlässt dies der Host-Umgebung (z. B. Browser, Node.js, Deno). Das Verhalten von Browsern wird von der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt, und dies ist die _de facto_ Grundlage für alle Umgebungen geworden.

Es gibt drei Arten von Bezeichnern, die weit anerkannt sind, wie sie durch die HTML-Spezifikation, Node und viele andere implementiert werden:

- _Relative Bezeichner_, die mit `/`, `./` oder `../` beginnen, die relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Bezeichner_, die analysierbare URLs sind, die als solche aufgelöst werden.
- _Unbestimmte Bezeichner_, die keines der oben genannten sind.

Die bemerkenswerteste Einschränkung bei relativen Bezeichnern, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, besteht darin, dass Browsern untersagt ist, einen Bezeichner implizit in viele potenzielle Kandidaten aufzulösen. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importieren alle folgenden die "Standard-Export" aus `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, denn wenn Sie `import x from "./utils"` schreiben, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden, bis er ein importierbares Modul findet. Daher kann der Bezeichner in der HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateiendung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, ist jedoch kein Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` niemals im Web funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL, und wenn der Server mit dem korrekten Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, da normalerweise anforderungslose Anfragen als Anfragen für HTML-Dateien verstanden werden.

Absolute Bezeichner können jede Art von [URL](/de/docs/Web/URI) sein, die auf importierbaren Quellcode verweist. Am bemerkenswertesten:

- [HTTP-URLs](/de/docs/Web/HTTP) sind im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (welches zunächst sein gesamtes Modulsystem auf HTTP-URLs basierte), aber es hat nur experimentelle Unterstützung in Node über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeiten wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben, aufgrund von Sicherheitsgründen jedoch nicht von Browsern unterstützt werden.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeiten unterstützt, einschließlich Browsern, Node, Deno usw. Sie sind nützlich für das Einbetten kleiner Module direkt in den Quellcode. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind jene, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können immer noch [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — weil die `data:`-URL nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` wird einen Fehler auslösen, weil der relative Bezeichner `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) verweisen auf eingebaute Node.js-Module. Sie werden von Node und anderen Laufzeiten unterstützt, die Kompatibilität mit Node beanspruchen, wie Bun.

Unbestimmte Bezeichner, die durch CommonJS popularisiert wurden, werden im `node_modules`-Verzeichnis aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, wird die Laufzeit nach dem `foo`-Paket in jedem `node_modules`-Verzeichnis in den übergeordneten Verzeichnissen des aktuellen Moduls suchen. Dieses Verhalten kann in Browsern mit [Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) reproduziert werden, die Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modulauflösungsalgorithmus kann auch programmgesteuert mithilfe der von der HTML-Spezifikation definierten Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines bestimmten Bereichs zu ermitteln.

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

Der importierte Bezeichner ist ein _Live-Binding_, da das Modul, das ihn exportiert, ihn neu zuweisen kann und der importierte Wert sich ändern würde. Das importierende Modul kann ihn jedoch nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

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
- [Previewing ES6 Modules und mehr von ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Eine tiefe cartoonhafte Untersuchung](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
