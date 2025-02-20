---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{jsSidebar("Statements")}}

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, aktualisierbare {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden als _aktualisierbare Bindings_ bezeichnet, da sie von dem Modul, das das Binding exportiert hat, aktualisiert werden, aber nicht von dem importierenden Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei zu verwenden, muss die Datei vom Runtime-System als ein [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies erreicht, indem dem {{HTMLElement("script")}}-Tag `type="module"` hinzugefügt wird. Module werden automatisch im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt auch ein funktionales dynamisches [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), das keine Scripts vom Typ `type="module"` erfordert.

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
  - : Das Modul, aus dem importiert wird. Es sind nur Einzel- und Doppelanführungszeichen für Zeichenfolgenliterale erlaubt. Die Bewertung des Spezifizierers ist host-spezifiziert. Die meisten Hosts stimmen mit Browsern überein und lösen die Spezifizierer als URLs relativ zur aktuellen Modul-URL auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere nicht-Browser-Umgebungen definieren oft ihre eigenen Features dazu, sodass Sie die Dokumentation für diese konsultieren sollten, um die genauen Regeln zu verstehen. Der Abschnitt [Modul-Spezifizierer-Auflösung](#modul-spezifizierer-auflösung) enthält ebenfalls mehr Informationen.
- `name`
  - : Name des Modulobjekts, das als eine Art Namespace verwendet wird, um auf die Importe zu verweisen. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name der Exporte, die importiert werden sollen. Der Name kann entweder ein Bezeichner oder ein Zeichenfolgeliteral sein, abhängig davon, was `module-name` als Export deklariert. Ist es ein Zeichenfolgeliteral, muss es einem gültigen Bezeichner zugeordnet werden.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Muss ein gültiger JavaScript-Bezeichner sein.

Der `"module-name"` kann von einer Reihe von [Import-Attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) gefolgt werden, die mit dem Schlüsselwort `with` beginnen.

## Beschreibung

`import`-Deklarationen können nur in Modulen vorhanden sein und nur auf der obersten Ebene stehen (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in nicht-Modul-Kontexten auftritt (zum Beispiel `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle das Parsing-Ziel "script" oder "function body" haben), wird ein `SyntaxError` ausgelöst. Um Module in nicht-Modul-Kontexten zu laden, verwenden Sie stattdessen die [dynamische Importsyntax](/de/docs/Web/JavaScript/Reference/Operators/import).

Alle importierten Bindings dürfen sich nicht im gleichen Geltungsbereich wie jede andere Deklaration befinden, einschließlich {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`-Deklarationen.

`import`-Deklarationen sind so gestaltet, dass sie syntaktisch starr sind (zum Beispiel nur Zeichenfolgenliterale als Spezifizierer, nur auf der obersten Ebene erlaubt, alle Bindings müssen Bezeichner sein), was es ermöglicht, Module statisch zu analysieren und zu verknüpfen, bevor sie ausgewertet werden. Dies ist der Schlüssel, um Module von Natur aus asynchron zu machen und Funktionen wie [Top-Level-Await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await) zu unterstützen.

### Formen von Import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Seiteneffekt-Import](#import_eines_moduls_nur_für_seine_seiteneffekte): `import "module-name";`

Nachfolgend sind Beispiele zur Klärung der Syntax.

#### Benannter Import

Angenommen, es gibt einen Wert namens `myExport`, der aus dem Modul `my-module` entweder implizit mit `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung exportiert wurde, wird dieser in den aktuellen Geltungsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Importieren umbenennen. Zum Beispiel wird dieser `shortName` in den aktuellen Geltungsbereich einfügen.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann auch ein Mitglied als Zeichenfolgeliteral exportieren, das kein gültiger Bezeichner ist, in diesem Fall müssen Sie es umbenennen, um es im aktuellen Modul verwenden zu können.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> **Hinweis:** `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dann Destrukturierung von `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind unterschiedliche Syntaxen in JavaScript-Modulen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Standardimportsynthaxe importiert werden. Diese Version importiert direkt den Standard:

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

Das Importieren eines Namens namens `default` hat dieselbe Wirkung wie ein Standardimport. Es ist notwendig, den Namen zu aliasieren, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Geltungsbereich ein, das alle Exporte vom Modul unter `/modules/my-module.js` enthält.

```js
import * as myModule from "/modules/my-module.js";
```

Hierbei stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise einen Export `doAllTheAmazingThings()` enthält, würden Sie es so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [abgeschlossenes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null` Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel `default` verfügbar. Für weitere Informationen siehe [Module-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript unterstützt keine Wildcard-Importe wie `import * from "module-name"`, aufgrund der hohen Möglichkeit von Namenskonflikten.

#### Import eines Moduls nur für seine Seiteneffekte

Importieren Sie ein gesamtes Modul nur für Seiteneffekte, ohne tatsächlich etwas zu importieren. Dies führt den globalen Code des Moduls aus, ohne jedoch Werte tatsächlich zu importieren.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die die globalen Variablen verändern.

### Hoisting

Importdeklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die Bezeichner, die die Importe einführen, im gesamten Modulbereich verfügbar sind und ihre Seiteneffekte auftreten, bevor der Rest des Modulcodes ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Modul-Spezifizierer-Auflösung

Die ECMAScript-Spezifikation definiert nicht, wie Modul-Spezifizierer aufgelöst werden, und überlässt es der Host-Umgebung (z.B. Browser, Node.js, Deno). Das Verhalten des Browsers wird von [der HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) spezifiziert, und dies ist zum _de facto_ Standard für alle Umgebungen geworden.

Es gibt drei weit anerkannte Typen von Spezifizierern, wie sie von der HTML-Spezifikation, Node und vielen anderen implementiert werden:

- _Relative Spezifizierer_, die mit `/`, `./` oder `../` beginnen, die relativ zur aktuellen Modul-URL aufgelöst werden.
- _Absolute Spezifizierer_, die analysierbare URLs sind, die unverändert aufgelöst werden.
- _Bare Spezifizierer_, die keiner der oben genannten sind.

Das bemerkenswerteste Problem bei relativen Spezifizierern, besonders für Menschen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, ist, dass Browser das implizite Auflösen eines Spezifizierers zu vielen potenziellen Kandidaten verbieten. In CommonJS, wenn Sie `main.js` und `utils/index.js` haben, dann importieren alle folgenden den "Standardexport" von `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, denn wenn Sie `import x from "./utils"` schreiben, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele andere URLs senden, bis es ein importierbares Modul findet. Daher kann der Spezifizierer in der HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur aktuellen Modul-URL aufgelöst wird. Sie können die Dateierweiterung oder den `index.js`-Dateinamen nicht weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, ist jedoch kein Bestandteil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` im Web niemals funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, wird der Import erfolgreich sein. Dies erfordert vom Server, eine benutzerdefinierte Auflösungslogik zu implementieren, da normalerweise anlagefreie Anfragen als Anfragen nach HTML-Dateien verstanden werden.

Absolute Spezifizierer können jede Art von [URL](/de/docs/Web/URI) sein, die zu importierbaren Quellcodes aufgelöst wird. Am bemerkenswertesten:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Scripts bereits HTTP-URLs haben. Es wird nativ von Deno unterstützt (das anfangs sein gesamtes Modulsystem auf HTTP-URLs stützte), aber es hat in Node nur experimentelle Unterstützung über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Nicht-Browser-Runtimes wie Node unterstützt, da Scripts dort bereits `file:`-URLs haben, sie werden jedoch aus Sicherheitsgründen nicht von Browsern unterstützt.
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen einschließlich Browsern, Node, Deno usw. unterstützt. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/MIME_types) sind diejenigen, die importierbaren Quellcode bezeichnen, wie `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können immer noch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

Daten-URLs mit `text/javascript` werden immer noch als Module interpretiert, aber sie können keine relativen Importe verwenden — da das `data:`-URL-Schema nicht hierarchisch ist. Das bedeutet, dass `import x from "data:text/javascript,import y from './y.js';"` einen Fehler auslösen wird, da der relative Spezifizierer `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) lösen sich zu eingebauten Node.js-Modulen auf. Sie werden von Node und anderen Runtimes unterstützt, die behaupten, mit Node kompatibel zu sein, wie Bun.

Bare Spezifizierer, die durch CommonJS populär gemacht wurden, werden im `node_modules`-Verzeichnis aufgelöst. Zum Beispiel, wenn Sie `import x from "foo"` haben, dann sucht die Laufzeitumgebung nach dem `foo`-Paket innerhalb eines `node_modules`-Verzeichnisses in den übergeordneten Verzeichnissen des aktuellen Moduls. Dieses Verhalten kann in Browsern mit [Importkarten](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) nachgestellt werden, die es Ihnen auch ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Algorithmus zur Modulauflösung kann auch programmgesteuert mit der [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)-Funktion ausgeführt werden, die von der HTML-Spezifikation definiert wird.

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

Der importierte Bezeichner ist ein _aktualisierbares Binding_, da das Modul, das es exportiert, es neu zuweisen und der importierte Wert sich ändern würde. Jedoch kann das importierende Modul es nicht neu zuweisen. Trotzdem kann jedes Modul, das ein exportiertes Objekt hält, das Objekt mutieren, und der mutierte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

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
- [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
