---
title: import
slug: Web/JavaScript/Reference/Statements/import
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die statische **`import`**-Deklaration wird verwendet, um schreibgeschützte, dynamisch aktualisierte {{Glossary("binding", "Bindings")}} zu importieren, die von einem anderen Modul [exportiert](/de/docs/Web/JavaScript/Reference/Statements/export) werden. Die importierten Bindings werden als _Live-Bindings_ bezeichnet: Sie werden von dem Modul aktualisiert, das sie exportiert hat, können aber vom importierenden Modul nicht neu zugewiesen werden.

Um eine `import`-Deklaration in einer Quelldatei zu verwenden, muss die Laufzeitumgebung die Datei als [Modul](/de/docs/Web/JavaScript/Guide/Modules) interpretieren. In HTML geschieht dies, indem dem {{HTMLElement("script")}}-Tag `type="module"` hinzugefügt wird. Module werden automatisch im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) interpretiert.

Daneben gibt es das funktionsähnliche dynamische [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import), für das Skripte nicht `type="module"` verwenden müssen.

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
  - : Das Modul, aus dem importiert wird. Zulässig sind nur String-Literale in einfachen oder doppelten Anführungszeichen. Wie der Spezifizierer ausgewertet wird, legt die Host-Umgebung fest. Die meisten Host-Umgebungen orientieren sich an Browsern und lösen Spezifizierer als URLs relativ zur URL des aktuellen Moduls auf (siehe [`import.meta.url`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)). Node, Bundler und andere Umgebungen außerhalb des Browsers definieren darauf aufbauend häufig eigene Funktionen. Lesen Sie daher deren Dokumentation, um die genauen Regeln zu verstehen. Weitere Informationen finden Sie auch im Abschnitt [Auflösung von Modulspezifizierern](#auflösung_von_modulspezifizierern).
- `name`
  - : Name des [Modul-Namespace-Objekts](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object), das beim Verweis auf die Importe als eine Art Namespace verwendet wird. Muss ein gültiger JavaScript-Bezeichner sein.
- `exportN`
  - : Name des zu importierenden Exports. Der Name kann ein Bezeichner oder ein String-Literal sein, je nachdem, was `module-name` als Export deklariert. Handelt es sich um ein String-Literal, muss ihm ein gültiger Bezeichner als Alias zugewiesen werden.
- `aliasN`
  - : Namen, die auf die benannten Importe verweisen. Müssen gültige JavaScript-Bezeichner sein.

Auf `"module-name"` kann eine Reihe von [Importattributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) folgen, die mit dem Schlüsselwort `with` eingeleitet werden.

## Beschreibung

`import`-Deklarationen dürfen nur in Modulen und nur auf oberster Ebene stehen (also nicht innerhalb von Blöcken, Funktionen usw.). Wird eine `import`-Deklaration in einem Nicht-Modul-Kontext gefunden – etwa in `<script>`-Tags ohne `type="module"`, in `eval` oder in `new Function`, deren Parsing-Ziele „script“ beziehungsweise „function body“ sind –, wird ein `SyntaxError` ausgelöst. Verwenden Sie stattdessen die Syntax für [dynamische Importe](/de/docs/Web/JavaScript/Reference/Operators/import), um Module in Nicht-Modul-Kontexten zu [laden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph).

Importierte Bindings dürfen sich nicht im selben Gültigkeitsbereich wie andere Deklarationen befinden, darunter {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/class", "class")}}, {{jsxref("Statements/function", "function")}}, {{jsxref("Statements/var", "var")}} und weitere `import`-Deklarationen.

`import`-Deklarationen sind bewusst syntaktisch streng geregelt: Beispielsweise sind nur String-Literale als Spezifizierer zulässig, Deklarationen dürfen nur auf oberster Ebene stehen und alle Bindings müssen Bezeichner sein. Dadurch können Module statisch analysiert und [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) werden, bevor sie [ausgewertet](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules) werden. Das ermöglicht das asynchrone Laden von Abhängigkeiten und unterstützt Funktionen wie [Top-Level-Await](/de/docs/Web/JavaScript/Guide/Modules#top-level_await).

Auf das Schlüsselwort `import` kann ein „Phasenmodifikator“ folgen, der den Importvorgang an einer bestimmten Phase anhält:

- [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer)
- [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source)

Jede dieser Syntaxformen gilt als eigenständiger Deklarationstyp.

### Formen von import-Deklarationen

Es gibt vier Formen von `import`-Deklarationen:

- [Benannter Import](#benannter_import): `import { export1, export2 } from "module-name";`
- [Default-Import](#default-import): `import defaultExport from "module-name";`
- [Namespace-Import](#namespace-import): `import * as name from "module-name";`
- [Import ausschließlich für Seiteneffekte](#ein_modul_ausschließlich_für_seine_seiteneffekte_importieren): `import "module-name";`

Die folgenden Beispiele verdeutlichen die Syntax.

#### Benannter Import

Wenn ein Wert namens `myExport` aus dem Modul `my-module` exportiert wurde – entweder implizit durch `export * from "another.js"` oder explizit mit der {{jsxref("Statements/export", "export")}}-Anweisung –, wird `myExport` damit in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { myExport } from "/modules/my-module.js";
```

Sie können mehrere Namen aus demselben Modul importieren.

```js
import { foo, bar } from "/modules/my-module.js";
```

Beim Import können Sie einen Export umbenennen. Im folgenden Beispiel wird dadurch `shortName` in den aktuellen Gültigkeitsbereich eingefügt.

```js
import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```

Ein Modul kann ein Element auch unter einem String-Literal exportieren, das kein gültiger Bezeichner ist. In diesem Fall müssen Sie ihm einen Alias zuweisen, um es im aktuellen Modul verwenden zu können.

```js
// -- /modules/my-module.js --
const a = 1;
export { a as "a-b" };
```

```js
import { "a-b" as a } from "/modules/my-module.js";
```

> [!NOTE]
> `import { x, y } from "mod"` ist nicht gleichbedeutend mit `import defaultExport from "mod"` und dem anschließenden Destrukturieren von `x` und `y` aus `defaultExport`. Benannte Importe und Default-Importe sind unterschiedliche Syntaxformen in JavaScript-Modulen.

#### Default-Import

Default-Exporte können mit der entsprechenden Syntax für Default-Importe importiert werden. Die folgende Variante importiert den Default-Export direkt:

```js
import myDefault from "/modules/my-module.js";
```

Da der Default-Export keinen Namen ausdrücklich angibt, können Sie den Bezeichner frei wählen.

Ein Default-Import kann auch zusammen mit Namespace-Importen oder benannten Importen angegeben werden. In diesen Fällen muss der Default-Import zuerst deklariert werden. Zum Beispiel:

```js
import myDefault, * as myModule from "/modules/my-module.js";
// myModule.default and myDefault point to the same binding
```

oder

```js
import myDefault, { foo, bar } from "/modules/my-module.js";
```

Der Import eines Namens namens `default` hat denselben Effekt wie ein Default-Import. Da `default` ein reserviertes Wort ist, muss dem Namen ein Alias zugewiesen werden.

```js
import { default as myDefault } from "/modules/my-module.js";
```

#### Namespace-Import

Der folgende Code fügt `myModule` in den aktuellen Gültigkeitsbereich ein. Es enthält alle Exporte des Moduls unter `/modules/my-module.js`.

```js
import * as myModule from "/modules/my-module.js";
```

Hier steht `myModule` für ein _Namespace_-Objekt, das alle Exporte als Eigenschaften enthält. Wenn das oben importierte Modul beispielsweise `doAllTheAmazingThings()` exportiert, rufen Sie die Funktion so auf:

```js
myModule.doAllTheAmazingThings();
```

`myModule` ist ein [versiegeltes](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed) Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects). Der Default-Export ist unter dem Schlüssel `default` verfügbar. Weitere Informationen finden Sie unter [Modul-Namespace-Objekt](/de/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object).

> [!NOTE]
> JavaScript unterstützt keine Wildcard-Importe wie `import * from "module-name"`, da dabei leicht Namenskonflikte entstehen können.

#### Ein Modul ausschließlich für seine Seiteneffekte importieren

Sie können ein vollständiges Modul ausschließlich wegen seiner Seiteneffekte importieren, ohne Werte zu importieren. Dabei wird der globale Code des Moduls ausgeführt, aber es werden keine Werte importiert.

```js
import "/modules/my-module.js";
```

Dies wird häufig für {{Glossary("Polyfill", "Polyfills")}} verwendet, die globale Variablen verändern.

### Hoisting

Importdeklarationen unterliegen dem {{Glossary("Hoisting", "Hoisting")}}. Das bedeutet hier, dass die durch Importe eingeführten Bindings im gesamten Gültigkeitsbereich des Moduls verfügbar sind und die Seiteneffekte der importierten Module eintreten, bevor der übrige Code des Moduls ausgeführt wird. Bei [zyklischen Importen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#cyclic_imports) ist die Auswertung eines importierten Moduls möglicherweise noch nicht abgeschlossen, sodass ein importiertes Binding noch nicht initialisiert sein kann.

```js
myModule.doAllTheAmazingThings(); // myModule.doAllTheAmazingThings is imported by the next line

import * as myModule from "/modules/my-module.js";
```

### Auflösung von Modulspezifizierern

Die ECMAScript-Spezifikation legt nicht fest, wie Modulspezifizierer aufgelöst werden. Sie überlässt dies der Host-Umgebung, beispielsweise Browsern, Node.js oder Deno. Das Verhalten von Browsern ist in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#resolve-a-module-specifier) festgelegt und hat sich _de facto_ als Grundlage für alle Umgebungen etabliert.

Drei Arten von Spezifizierern sind weithin anerkannt und werden von der HTML-Spezifikation, Node und vielen weiteren Umgebungen unterstützt:

- _Relative Spezifizierer_ beginnen mit `/`, `./` oder `../` und werden relativ zur URL des aktuellen Moduls aufgelöst.
- _Absolute Spezifizierer_ sind als URL parsebar und werden unverändert aufgelöst.
- _Bare Specifiers_ gehören zu keiner der beiden vorgenannten Kategorien.

Eine wichtige Einschränkung bei relativen Spezifizierern – insbesondere für Personen, die mit den Konventionen von [CommonJS](https://wiki.commonjs.org/wiki/CommonJS) vertraut sind – besteht darin, dass Browser einen Spezifizierer nicht implizit auf mehrere mögliche Kandidaten auflösen dürfen. Wenn in CommonJS `main.js` und `utils/index.js` vorhanden sind, importieren alle folgenden Varianten den „Default-Export“ aus `utils/index.js`:

```js
// -- main.js --
const utils = require("./utils"); // Omit the "index.js" file name
const utils = require("./utils/index"); // Omit only the ".js" extension
const utils = require("./utils/index.js"); // The most explicit form
```

Im Web wäre das aufwendig: Wenn Sie `import x from "./utils"` schreiben, müsste der Browser Anfragen an `utils`, `utils/index.js`, `utils.js` und möglicherweise viele weitere URLs senden, bis er ein importierbares Modul findet. Deshalb kann ein Spezifizierer laut HTML-Spezifikation standardmäßig nur eine URL sein, die relativ zur URL des aktuellen Moduls aufgelöst wird. Sie können weder die Dateiendung noch den Dateinamen `index.js` weglassen. Dieses Verhalten wurde von Nodes ESM-Implementierung übernommen, ist aber nicht Bestandteil der ECMAScript-Spezifikation.

Das bedeutet allerdings nicht, dass `import x from "./utils"` im Web niemals funktioniert. Der Browser sendet weiterhin eine Anfrage an diese URL. Wenn der Server mit dem passenden Inhalt antwortet, gelingt der Import. Dafür muss der Server eine eigene Auflösungslogik implementieren, da Anfragen ohne Dateiendung üblicherweise als Anfragen nach HTML-Dateien verstanden werden.

Absolute Spezifizierer können jede Art von [URL](/de/docs/Web/URI) sein, die auf importierbaren Quellcode verweist. Besonders relevant sind:

- [HTTP-URLs](/de/docs/Web/HTTP) werden im Web immer unterstützt, da die meisten Skripte ohnehin HTTP-URLs haben. Deno unterstützt sie nativ (sein Modulsystem beruhte anfangs vollständig auf HTTP-URLs). In Node gibt es dafür nur experimentelle Unterstützung über [benutzerdefinierte HTTPS-Loader](https://nodejs.org/api/module.html#import-from-https).
- `file:`-URLs werden von vielen Laufzeitumgebungen außerhalb des Browsers unterstützt, etwa Node, da Skripte dort bereits `file:`-URLs haben. Browser unterstützen sie aus Sicherheitsgründen nicht.
- [Data-URLs](/de/docs/Web/URI/Reference/Schemes/data) werden von vielen Laufzeitumgebungen unterstützt, darunter Browser, Node und Deno. Sie eignen sich, um kleine Module direkt in den Quellcode einzubetten. Unterstützte [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types) sind solche, die importierbaren Quellcode kennzeichnen, beispielsweise `text/javascript` für JavaScript, `application/json` für JSON-Module und `application/wasm` für WebAssembly-Module. (Möglicherweise sind dafür dennoch [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) erforderlich.)

  ```js
  // HTTP URLs
  import x from "https://example.com/x.js";
  // Data URLs
  import x from "data:text/javascript,export default 42;";
  // Data URLs for JSON modules
  import x from 'data:application/json,{"foo":42}' with { type: "json" };
  ```

  `text/javascript`-Data-URLs werden weiterhin als Module interpretiert, können aber keine relativen Importe verwenden, weil das `data:`-URL-Schema nicht hierarchisch ist. Das heißt, `import x from "data:text/javascript,import y from './y.js';"` löst einen Fehler aus, weil der relative Spezifizierer `'./y.js'` nicht aufgelöst werden kann.

- [`node:`-URLs](https://nodejs.org/api/esm.html#node-imports) verweisen auf integrierte Node.js-Module. Sie werden von Node und anderen Laufzeitumgebungen unterstützt, die Kompatibilität mit Node beanspruchen, etwa Bun.

Bare Specifiers, die durch CommonJS verbreitet wurden, werden nach den Regeln der jeweiligen Host-Umgebung aufgelöst. In Node.js verweisen Paketnamen in der Regel auf Pakete in `node_modules`-Verzeichnissen. Bei `import x from "foo"` sucht Node.js beispielsweise nach dem Paket `foo` in `node_modules`-Verzeichnissen, beginnend beim Verzeichnis des aktuellen Moduls und weiter in dessen übergeordneten Verzeichnissen. Browser benötigen [Import Maps](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#importing_modules_using_import_maps), um Bare Specifiers aufzulösen. Diese ordnen Namen URLs zu, statt `node_modules`-Verzeichnisse zu durchsuchen.

Der Algorithmus zur Modulauflösung kann auch programmgesteuert über die in der HTML-Spezifikation definierte Funktion [`import.meta.resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) ausgeführt werden.

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

### Importierte Werte können nur vom exportierenden Modul geändert werden

Der importierte Bezeichner ist ein _Live-Binding_: Das Modul, das ihn exportiert, kann ihm einen neuen Wert zuweisen, wodurch sich der importierte Wert ändert. Das importierende Modul kann ihm jedoch keinen neuen Wert zuweisen. Ein exportiertes Objekt kann allerdings von jedem Modul verändert werden, das Zugriff darauf hat. Der geänderte Wert ist dann für alle anderen Module sichtbar, die denselben Wert importieren.

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

Mit der `import`-Anweisung können auch Nicht-JavaScript-Module importiert werden. Bei manchen Modultypen muss der Typ ausdrücklich über [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) angegeben werden. Um beispielsweise ein JSON-Modul zu importieren, müssen Sie das Attribut `type: "json"` angeben.

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
- [Ein Ausblick auf ES6-Module und mehr aus ES2015, ES2016 und darüber hinaus](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/) auf blogs.windows.com (2016)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [ES-Module: Eine ausführliche Erklärung als Comic](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [JavaScript erkunden, Kapitel 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer
- [Export und Import](https://javascript.info/import-export) auf javascript.info
