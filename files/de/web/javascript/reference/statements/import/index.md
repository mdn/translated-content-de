---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte Live-{{Glossary("binding", "Bindungen")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindungen werden als _Live-Bindungen_ bezeichnet, weil sie durch das Modul aktualisiert werden, das die Bindung exportiert hat, aber nicht durch das importierende Modul neu zugewiesen werden können.

Um die `import`-Deklaration in einer Quelldatei verwenden zu können, muss die Datei von der Laufzeitumgebung als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretiert werden. In HTML wird dies durch Hinzufügen von `type="module"` zum {{HTMLElement("script")}}-Tag erreicht. Module werden automatisch im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Es gibt außerdem ein funktionsähnliches dynamisches [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), das keine Skripte vom Typ `type="module"` erfordert.

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
  - : Name, der sich auf den Standardexport des Moduls bezieht. Muss ein gültiger JavaScript-Identifier sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Es sind nur Zeichenfolgenliterale mit einfachen oder doppelten Anführungszeichen zulässig. Die Auswertung des Spezifizierers wird durch den Host festgelegt. Die meisten Hosts orientieren sich an Browsern und lösen die Spezifizierer als URLs relativ zur URL des aktuellen Moduls auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Nicht-Browser-Umgebungen definieren häufig eigene Funktionen zusätzlich dazu. Daher sollten Sie deren Dokumentation konsultieren, um die genauen Regeln zu verstehen. Der Abschnitt [Auflösung von Modulspezifizierern](#auflösung_von_modulspezifizierern) enthält ebenfalls weitere Informationen.
- `name`
  - : Name des Modulobjekts, das beim Verweisen auf die Importe als eine Art Namespace verwendet wird. Muss ein gültiger JavaScript-Identifier sein.
- `exportN`
  - : Name der zu importierenden Exporte. Der Name kann entweder ein Identifier oder ein Zeichenfolgenliteral sein, abhängig davon, was `module-name` als Export deklariert. Wenn es sich um ein Zeichenfolgenliteral handelt, muss es mit einem Alias versehen werden, der ein gültiger Identifier ist.
- `aliasN`
  - : Namen, die sich auf die benannten Importe beziehen. Müssen gültige JavaScript-Identifier sein.

Auf `"module-name"` kann eine Reihe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, die mit dem Schlüsselwort `with` beginnen.

## Beschreibung

`import`-Deklarationen dürfen nur in Modulen und nur auf der obersten Ebene vorhanden sein (d.h. nicht innerhalb von Blöcken, Funktionen usw.). Wenn eine `import`-Deklaration in Nicht-Modul-Kontexten angetroffen wird (beispielsweise in `<script>`-Tags ohne `type="module"`, `eval`, `new Function`, die alle „script“ oder „function body“ als Parsing-Ziele haben), wird ein `SyntaxError` ausgelöst. Verwenden Sie stattdessen die Syntax für den [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import), um Module in Nicht-Modul-Kontexten zu laden.

Alle importierten Bindungen dürfen sich nicht im selben Gültigkeitsbereich wie irgendeine andere Deklaration befinden, einschließlich der Deklarationen {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und `import`.

`import`-Deklarationen sind bewusst syntaktisch strikt gestaltet (beispielsweise nur Zeichenfolgenliteral-Spezifizierer, nur auf der obersten Ebene zulässig, alle Bindungen müssen Identifier sein). Dadurch können Module statisch analysiert und verknüpft werden, bevor sie ausgewertet werden. Dies ist der Schlüssel dazu, Module von Natur aus asynchron zu machen, und ermöglicht Funktionen wie [top-level await](/de/docs/Web/JavaScript/Guide/Modules#top_level_await).

Auf das Schlüsselwort `import` kann ein „Phasenmodifizierer“ folgen, der den Modulimportprozess in einer bestimmten Phase anhält:

- [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer)
- [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)

Jede dieser Syntaxformen wird als eigener Deklarationstyp betrachtet.

### Formen von `import`-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Standardimport](#standardimport): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Import nur für Seiteneffekte](#ein_modul_nur_für_seine_seiteneffekte_importieren): `import "module-name";`

Nachfolgend finden Sie Beispiele zur Verdeutlichung der Syntax.

#### Benannter Import

Angenommen, ein Wert namens `myExport` wurde aus dem Modul `my-module` exportiert, entweder implizit als `export * from "another.js"` oder explizit mithilfe der {{jsxref("Statements/export", "export")}}-Anweisung. Dadurch wird `myExport` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Importieren umbenennen. Beispielsweise wird dadurch `shortName` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann ein Mitglied auch als Zeichenfolgenliteral exportieren, das kein gültiger Identifier ist. In diesem Fall müssen Sie ihm einen Alias geben, um es im aktuellen Modul verwenden zu können.

```js
// /modules/my-module.js
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` entspricht nicht `import defaultExport from "mod"` mit anschließendem Destrukturieren von `x` und `y` aus `defaultExport`. Benannte und Standardimporte sind in JavaScript-Modulen unterschiedliche Syntaxformen.

#### Standardimport

Standardexporte müssen mit der entsprechenden Syntax für Standardimporte importiert werden. Diese Variante importiert den Standardexport direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Standardexport nicht explizit einen Namen angibt, können Sie dem Identifier einen beliebigen Namen geben.

Es ist auch möglich, einen Standardimport zusammen mit Namespace-Importen oder benannten Importen anzugeben. In solchen Fällen muss der Standardimport zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Das Importieren eines Namens namens `default` hat denselben Effekt wie ein Standardimport. Der Name muss mit einem Alias versehen werden, da `default` ein reserviertes Wort ist.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein und enthält alle Exporte aus dem Modul unter `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Hier stellt `myModule` ein _Namespace_-Objekt dar, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise einen Export `doAllTheAmazingThings()` enthält, würden Sie ihn wie folgt aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Standardexport ist als Schlüssel namens `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript unterstützt keine Wildcard-Importe wie `import * from "module-name"`, da ein hohes Potenzial für Namenskonflikte besteht.

#### Ein Modul nur für seine Seiteneffekte importieren

Importieren Sie ein vollständiges Modul nur für Seiteneffekte, ohne etwas zu importieren. Dadurch wird der globale Code des Moduls ausgeführt, aber es werden tatsächlich keine Werte importiert.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die globale Variablen verändern.

### Hoisting

Importdeklarationen werden {{Glossary("Hoisting", "gehoistet")}}. In diesem Fall bedeutet das, dass die von den Importen eingeführten Identifier im gesamten Modul-Gültigkeitsbereich verfügbar sind und ihre Seiteneffekte erzeugt werden, bevor der übrige Code des Moduls ausgeführt wird.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Auflösung von Modulspezifizierern

Die ECMAScript-Spezifikation definiert nicht, wie Modulspezifizierer aufgelöst werden, und überlässt dies der Hostumgebung (z. B. Browsern, Node.js, Deno). Das Verhalten von Browsern wird durch [die HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt und ist zur _de facto_-Grundlage für alle Umgebungen geworden.

Es gibt drei weithin anerkannte Arten von Spezifizierern, wie sie von der HTML-Spezifikation, Node und vielen anderen implementiert werden:

- _Relative Spezifizierer_, die mit `/`, `./` oder `../` beginnen und relativ zur URL des aktuellen Moduls aufgelöst werden.
- _Absolute Spezifizierer_, die analysierbare URLs sind und unverändert aufgelöst werden.
- _Bare-Spezifizierer_, die keiner der oben genannten Arten entsprechen.

Die bemerkenswerteste Einschränkung bei relativen Spezifizierern, insbesondere für Personen, die mit den [CommonJS](https://wiki.commonjs.org/wiki/CommonJS)-Konventionen vertraut sind, besteht darin, dass Browser nicht zulassen, dass ein Spezifizierer implizit zu vielen potenziellen Kandidaten aufgelöst wird. Wenn Sie in CommonJS `main.js` und `utils/index.js` haben, importieren alle folgenden Varianten den „Standardexport“ aus `utils/index.js`:

```js
// main.js
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web ist dies kostspielig, denn wenn Sie `import x from "./utils"` schreiben, muss der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele weitere URLs senden, bis er ein importierbares Modul findet. Daher kann der Spezifizierer in der HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur URL des aktuellen Moduls aufgelöst wird. Sie können die Dateierweiterung oder den Dateinamen `index.js` nicht weglassen. Dieses Verhalten wurde von der ESM-Implementierung von Node übernommen, ist jedoch nicht Teil der ECMAScript-Spezifikation.

Beachten Sie, dass dies nicht bedeutet, dass `import x from "./utils"` im Web niemals funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL, und wenn der Server mit dem richtigen Inhalt antworten kann, ist der Import erfolgreich. Dies erfordert, dass der Server eine benutzerdefinierte Auflösungslogik implementiert, da Anfragen ohne Erweiterung normalerweise als Anfragen nach HTML-Dateien verstanden werden.

Absolute Spezifizierer können jede Art von [URL](/de/docs/Web/URI) sein, die zu importierbarem Quellcode aufgelöst wird. Besonders hervorzuheben sind:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte bereits HTTP-URLs haben. Deno unterstützt sie nativ, da sein gesamtes Modulsystem ursprünglich auf HTTP-URLs basiert, während Node sie nur experimentell über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https) unterstützt.
- `file:`-URLs werden von vielen Nicht-Browser-Laufzeitumgebungen wie Node unterstützt, da Skripte dort bereits `file:`-URLs haben. Aus Sicherheitsgründen werden sie jedoch nicht von Browsern unterstützt.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen unterstützt, einschließlich Browsern, Node, Deno usw. Sie sind nützlich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode bezeichnen, beispielsweise `text/javascript` für JavaScript, `application/json` für JSON-Module, `application/wasm` für WebAssembly-Module usw. (Sie können dennoch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erfordern.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden weiterhin als Module interpretiert, können jedoch keine relativen Importe verwenden — da das URL-Schema `data:` nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` löst einen Fehler aus, weil der relative Spezifizierer `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) werden zu integrierten Node.js-Modulen aufgelöst. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Kompatibilität mit Node beanspruchen, wie beispielsweise Bun.

Bare-Spezifizierer, die durch CommonJS populär wurden, werden innerhalb des Verzeichnisses `node_modules` aufgelöst. Wenn Sie beispielsweise `import x from "foo"` haben, sucht die Laufzeitumgebung nach dem Paket `foo` in jedem Verzeichnis `node_modules` in den übergeordneten Verzeichnissen des aktuellen Moduls. Dieses Verhalten kann in Browsern mithilfe von [Import Maps](/de/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) nachgebildet werden, die Ihnen außerdem ermöglichen, die Auflösung auf andere Weise anzupassen.

Der Modուլauflösungsalgorithmus kann auch programmgesteuert über die durch die HTML-Spezifikation definierte Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion exportiert, um alle Primzahlen innerhalb eines bestimmten Bereichs abzurufen.

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

Der importierte Identifier ist eine _Live-Bindung_, weil das Modul, das ihn exportiert, ihn neu zuweisen kann und sich der importierte Wert dadurch ändert. Das Modul, das ihn importiert, kann ihn jedoch nicht neu zuweisen. Dennoch kann jedes Modul, das ein exportiertes Objekt hält, das Objekt verändern, und der veränderte Wert kann von allen anderen Modulen beobachtet werden, die denselben Wert importieren.

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

Nicht-JavaScript-Module können ebenfalls mit der `import`-Anweisung importiert werden, ihre Typen müssen jedoch explizit mithilfe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) deklariert werden. Um beispielsweise ein JSON-Modul zu importieren, müssen Sie das Attribut `type: "json"` angeben.

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
- [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)
- [Vorschau auf ES6-Module und mehr aus ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Ein Cartoon-Tiefenblick](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [Exploring JS, Kap. 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
