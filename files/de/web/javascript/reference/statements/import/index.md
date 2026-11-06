---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, dynamisch aktualisierte {{Glossary("binding", "Bindungen")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindungen heißen _Live-Bindungen_, weil sie von dem Modul aktualisiert werden, das sie exportiert hat. Das importierende Modul kann ihnen jedoch keinen neuen Wert zuweisen.

Damit eine `import`-Deklaration in einer Quelldatei verwendet werden kann, muss die Laufzeitumgebung die Datei als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretieren. In HTML geschieht dies, indem dem {{HTMLElement("script")}}-Tag `type="module"` hinzugefügt wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Daneben gibt es den funktionsähnlichen dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), der keine Skripte mit `type="module"` voraussetzt.

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
  - : Name, der auf den Default-Export des Moduls verweist. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Zulässig sind nur Zeichenfolgenliterale in einfachen oder doppelten Anführungszeichen. Wie der Modulspezifizierer ausgewertet wird, legt die Host-Umgebung fest. Die meisten Host-Umgebungen verhalten sich wie Browser und lösen Modulspezifizierer als URLs relativ zur URL des aktuellen Moduls auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Umgebungen außerhalb des Browsers definieren häufig zusätzliche Funktionen. Lesen Sie daher deren Dokumentation, um die genauen Regeln zu verstehen. Weitere Informationen finden Sie auch im Abschnitt [Auflösung von Modulspezifizierern](#auflösung_von_modulspezifizierern).
- `name`
  - : Name des [Modul-Namespace-Objekts](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object), das beim Zugriff auf die Importe als eine Art Namespace dient. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name eines zu importierenden Exports. Je nachdem, was `module-name` als Export deklariert, kann der Name ein Bezeichner oder ein Zeichenfolgenliteral sein. Ein Zeichenfolgenliteral muss mit einem Alias versehen werden, der ein gültiger Bezeichner ist.
- `aliasN`
  - : Namen, die auf die benannten Importe verweisen. Müssen gültige JavaScript-Bezeichner sein.

Auf `"module-name"` kann eine Reihe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, die mit dem Schlüsselwort `with` beginnt.

## Beschreibung

`import`-Deklarationen sind nur in Modulen und nur auf oberster Ebene zulässig, also nicht innerhalb von Blöcken, Funktionen usw. Wird eine `import`-Deklaration außerhalb eines Moduls verwendet, wird ein `SyntaxError` ausgelöst. Das gilt beispielsweise für `<script>`-Tags ohne `type="module"`, `eval` und `new Function`, deren Parsing-Ziele „script“ oder „function body“ sind. Verwenden Sie stattdessen die Syntax des [dynamischen Imports](/de/docs/Web/JavaScript/Reference/Operators/import), um Module außerhalb eines Modulkontexts zu [laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph).

Importierte Bindungen dürfen sich nicht im selben Gültigkeitsbereich wie andere Deklarationen befinden. Dazu gehören {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und weitere `import`-Deklarationen.

Die Syntax von `import`-Deklarationen ist bewusst streng festgelegt: Beispielsweise sind als Modulspezifizierer nur Zeichenfolgenliterale zulässig, Deklarationen dürfen nur auf oberster Ebene stehen und alle Bindungen müssen Bezeichner sein. Dadurch können Module statisch analysiert und [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) werden, bevor sie [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) werden. Dies ermöglicht das asynchrone Laden von Abhängigkeiten und unterstützt Funktionen wie [Top-Level-Await](/de/docs/Web/JavaScript/Guide/Modules#top-level_await).

Auf das Schlüsselwort `import` kann ein „Phasenmodifikator“ folgen, der den Importvorgang in einer bestimmten Phase beendet:

- [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer)
- [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)

Jede dieser Syntaxformen gilt als eigener Deklarationstyp.

### Formen von import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Default-Import](#default-import): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Import nur für Seiteneffekte](#ein_modul_nur_für_seine_seiteneffekte_importieren): `import "module-name";`

Die folgenden Beispiele verdeutlichen die Syntax.

#### Benannter Import

Wenn ein Wert namens `myExport` aus dem Modul `my-module` exportiert wurde – entweder implizit durch `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung –, fügt die folgende Anweisung `myExport` zum aktuellen Gültigkeitsbereich hinzu.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Sie können einen Export beim Import umbenennen. Das folgende Beispiel fügt `shortName` zum aktuellen Gültigkeitsbereich hinzu.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann ein Element auch unter einem Zeichenfolgenliteral exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie einen Alias vergeben, um es im aktuellen Modul verwenden zu können.

```js
// -- /modules/my-module.js --
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dem anschließenden Destrukturieren von `x` und `y` aus `defaultExport`. Benannte Importe und Default-Importe sind in JavaScript-Modulen unterschiedliche Syntaxformen.

#### Default-Import

Default-Exporte können mit der entsprechenden Syntax für Default-Importe importiert werden. Die folgende Variante importiert den Default-Export direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Default-Export keinen Namen ausdrücklich festlegt, können Sie den Bezeichner frei wählen.

Ein Default-Import lässt sich auch mit Namespace-Importen oder benannten Importen kombinieren. In solchen Fällen muss der Default-Import zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Der Import eines Exports namens `default` hat dieselbe Wirkung wie ein Default-Import. Da `default` ein reserviertes Wort ist, muss dem Namen ein Alias zugewiesen werden.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` zum aktuellen Gültigkeitsbereich hinzu. Es enthält alle Exporte des Moduls unter `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Hier ist `myModule` ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise `doAllTheAmazingThings()` exportiert, können Sie die Funktion so aufrufen:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Default-Export ist unter dem Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript unterstützt aufgrund der hohen Wahrscheinlichkeit von Namenskonflikten keine Wildcard-Importe wie `import * from "module-name"`.

#### Ein Modul nur für seine Seiteneffekte importieren

Sie können ein vollständiges Modul ausschließlich wegen seiner Seiteneffekte importieren, ohne Werte daraus zu importieren. Dabei wird der globale Code des Moduls ausgeführt, aber es werden keine Werte importiert.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die globale Variablen verändern.

### Hoisting

Importdeklarationen unterliegen dem {{Glossary("Hoisting", "Hoisting")}}. Das bedeutet hier, dass die durch die Importe eingeführten Bindungen im gesamten Gültigkeitsbereich des Moduls verfügbar sind und die Seiteneffekte der importierten Module auftreten, bevor der übrige Code des Moduls ausgeführt wird. Bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#cyclic_imports) kann es sein, dass die Auswertung eines importierten Moduls noch nicht abgeschlossen ist. Eine importierte Bindung kann deshalb noch nicht initialisiert sein.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Auflösung von Modulspezifizierern

Die ECMAScript-Spezifikation legt nicht fest, wie Modulspezifizierer aufgelöst werden, sondern überlässt dies der Host-Umgebung, beispielsweise Browsern, Node.js oder Deno. Das Verhalten von Browsern ist in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt und bildet inzwischen _de facto_ die Grundlage für alle Umgebungen.

Drei Arten von Modulspezifizierern sind weit verbreitet und werden von der HTML-Spezifikation, Node und vielen anderen Umgebungen unterstützt:

- _Relative Modulspezifizierer_ beginnen mit `/`, `./` oder `../` und werden relativ zur URL des aktuellen Moduls aufgelöst.
- _Absolute Modulspezifizierer_ sind gültige URLs und werden unverändert aufgelöst.
- _Bare Specifiers_ fallen in keine der beiden vorherigen Kategorien.

Eine wichtige Einschränkung bei relativen Modulspezifizierern betrifft besonders Personen, die mit den Konventionen von [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) vertraut sind: Browser lassen nicht zu, dass ein Modulspezifizierer implizit auf mehrere mögliche Ziele aufgelöst wird. Wenn in CommonJS `main.js` und `utils/index.js` vorhanden sind, importieren alle folgenden Anweisungen den „Default-Export“ aus `utils/index.js`:

```js
// -- main.js --
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web wäre dies aufwendig: Wenn Sie `import x from "./utils"` schreiben, müsste der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele weitere URLs senden, bis er ein importierbares Modul findet. Deshalb kann ein Modulspezifizierer gemäß der HTML-Spezifikation standardmäßig nur als URL relativ zur URL des aktuellen Moduls aufgelöst werden. Die Dateiendung oder den Dateinamen `index.js` können Sie nicht weglassen. Dieses Verhalten wurde von der ESM-Implementierung von Node übernommen, ist aber nicht Teil der ECMAScript-Spezifikation.

Das bedeutet nicht, dass `import x from "./utils"` im Web niemals funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL. Wenn der Server den richtigen Inhalt zurückliefert, gelingt der Import. Dafür muss der Server eine eigene Auflösungslogik implementieren, da Anfragen ohne Dateiendung üblicherweise als Anfragen nach HTML-Dateien verstanden werden.

Absolute Modulspezifizierer können beliebige [URLs](/de/docs/Web/URI) sein, die zu importierbarem Quellcode führen. Dazu gehören insbesondere:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte ohnehin HTTP-URLs haben. Deno unterstützt sie nativ und baute sein Modulsystem ursprünglich vollständig auf HTTP-URLs auf. Node unterstützt sie dagegen nur experimentell über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Laufzeitumgebungen außerhalb des Browsers unterstützt, etwa Node, da Skripte dort bereits `file:`-URLs haben. Browser unterstützen sie aus Sicherheitsgründen nicht.
- [Daten-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen unterstützt, darunter Browser, Node und Deno. Sie eignen sich dazu, kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode kennzeichnen, beispielsweise `text/javascript` für JavaScript, `application/json` für JSON-Module oder `application/wasm` für WebAssembly-Module. (Möglicherweise sind dafür dennoch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erforderlich.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Daten-URLs werden weiterhin als Module interpretiert, können aber keine relativen Importe verwenden, da das `data:`-URL-Schema nicht hierarchisch ist. Daher löst `import x from "data:text/javascript,import y from './y.js';"` einen Fehler aus: Der relative Modulspezifizierer `'./y.js'` kann nicht aufgelöst werden.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) werden zu integrierten Node.js-Modulen aufgelöst. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Kompatibilität mit Node beanspruchen, etwa Bun.

Bare Specifiers wurden durch CommonJS verbreitet und nach Regeln aufgelöst, die von der jeweiligen Host-Umgebung abhängen. In Node.js verweisen Paketnamen normalerweise auf Pakete in `node_modules`-Verzeichnissen. Bei `import x from "foo"` sucht Node.js beispielsweise nach dem Paket `foo` in `node_modules`-Verzeichnissen, beginnend beim Verzeichnis des aktuellen Moduls und weiter in dessen übergeordneten Verzeichnissen. Browser benötigen [Import Maps](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps), um Bare Specifiers aufzulösen. Diese Maps ordnen Namen URLs zu, statt `node_modules`-Verzeichnisse zu durchsuchen.

Der Algorithmus zur Modulauflösung kann auch programmatisch mit der in der HTML-Spezifikation definierten Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

## Beispiele

### Standardimport

In diesem Beispiel erstellen wir ein wiederverwendbares Modul, das eine Funktion zum Ermitteln aller Primzahlen innerhalb eines bestimmten Bereichs exportiert.

```js
// -- getPrimes.js --
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

### Importierte Werte können nur vom exportierenden Modul neu zugewiesen werden

Der importierte Bezeichner ist eine _Live-Bindung_: Das exportierende Modul kann ihm einen neuen Wert zuweisen, wodurch sich auch der importierte Wert ändert. Das importierende Modul kann ihm dagegen keinen neuen Wert zuweisen. Allerdings kann jedes Modul, das ein exportiertes Objekt verwendet, dieses Objekt verändern. Alle anderen Module, die denselben Wert importieren, können die Änderung sehen.

Sie können den neuen Wert auch über das [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object) beobachten.

```js
// -- my-module.js --
export let myValue = 1;
setTimeout(() => {
  myValue = 2;
}, 500);
```

```js
// -- main.js --
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

### Nicht-JavaScript-Module importieren

Auch Nicht-JavaScript-Module können mit der `import`-Anweisung importiert werden. Bei einigen Modultypen muss der Typ ausdrücklich über [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) angegeben werden. Um beispielsweise ein JSON-Modul zu importieren, müssen Sie das Attribut `type: "json"` angeben.

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
- [ES-Module: Eine vertiefte Erklärung als Comic](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [JavaScript erkunden, Kapitel 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
