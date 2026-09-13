---
title: import source
slug: Web/JavaScript/Reference/Statements/import/source
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Die **`import source`**-Deklaration ähnelt der regulären [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration, führt jedoch zu einem Objekt, das den kompilierten Quellcode des Moduls darstellt. Das Modul wird abgerufen und kompiliert, aber seine Abhängigkeiten werden nicht geladen und es wird weder gelinkt noch ausgewertet. Es kann später imperativ ausgewertet werden, etwa mithilfe von [dynamischem Import](/de/docs/Web/JavaScript/Reference/Operators/import) oder [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Um `import source` zu verwenden, muss das Zielmodul von einer Art sein, die Source-Phase-Imports unterstützt. Derzeit unterstützen nur WebAssembly-Module Source-Phase-Imports und führen zu [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekten. JavaScript-Modulquellobjekte werden durch den Vorschlag [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) hinzugefügt.

## Syntax

```js-nolint
import source x from "module-name";
```

- `x`
  - : Name, der auf das Modulquellobjekt verweist. Muss ein gültiger JavaScript-Identifier sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Wird auf dieselbe Weise behandelt wie der [`module-name`](/de/docs/Web/JavaScript/Reference/Statements/import#module-name) in regulären `import`-Deklarationen.

[Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden ebenfalls unterstützt, indem nach dem Modulspezifizierer eine `with`-Klausel verwendet wird.

`source` ist kein reserviertes Wort. Beispielsweise ist `import source from "./module.js"` weiterhin ein regulärer Standardimport, dessen lokale Bindung `source` heißt.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn das Zielmodul keine Source-Phase-Imports unterstützt.

## Beschreibung

Standardmäßig führt die `import`-Deklaration mehrere Aufgaben gleichzeitig aus: Auflösen des Modulspezifizierers, Abrufen des Modulquellcodes, Parsen (wobei möglicherweise transitive Abhängigkeiten erkannt werden), Linken und Auswerten. Diese Form der sofortigen Auswertung ist nicht immer erwünscht, insbesondere wenn der Modulquellcode in einem anderen Kontext ausgewertet werden soll, etwa in einem Worker-Thread.

Der _Import-Phasenmodifikator_ ermöglicht es, den Modulimportprozess bei einer bestimmten Phase anzuhalten. Durch Hinzufügen von `source` nach `import` wird der Quellcode geparst und kompiliert, bleibt jedoch ungelinkt und unausgewertet. Der Quellimport lädt die transitiven Abhängigkeiten des Moduls nicht.

Traditionell bestand die einzige Möglichkeit, einen Teil dieser Pipeline auszuführen, darin, sie vollständig manuell zu implementieren. Bei WebAssembly verwenden Sie beispielsweise zuerst [`fetch()`](/de/docs/Web/API/Fetch_API), um die binären Bytes des Moduls abzurufen, und kompilieren sie später mit [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) oder kompilieren den Antwortstream mit [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu einem `WebAssembly.Module`-Objekt.

```js
const myModuleSource = await WebAssembly.compileStreaming(
  fetch("./my-module.wasm"),
);
```

Diese Art manueller Workflow ist aus mehreren Gründen problematisch:

- Sie erfordert zu viele Manipulationen auf niedriger Ebene, die mit dem Verhalten des Standard-Modulladers, etwa Caching, HTTP-Header-Einstellungen und der Auflösung von Modulspezifizierern, nicht übereinstimmen können.
- Sie ist imperativ, wodurch es schwierig wird, die Abhängigkeiten eines Moduls und ihre Auswertungsreihenfolge nachzuvollziehen, insbesondere für Bundler oder andere Analysetools.
- Die Auswertung des rohen Quellcodes im Userland ist mit strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen inkompatibel.

Die Verwendung von Source-Phase-Imports vermeidet diese Probleme.

```js
import source myModuleSource from "./my-module.wasm";
```

Das durch diesen Import erhaltene Objekt ist eine Instanz einer Unterklasse von {{jsxref("AbstractModuleSource")}}. Jeder Modultyp, der Source-Phase-Imports unterstützt, definiert seine eigene Unterklasse. Für WebAssembly ist die Unterklasse [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module). Dieses Objekt wird für das jeweilige Modul zwischengespeichert, sodass spätere Source-Imports desselben Spezifizierers exakt dasselbe Objekt zurückgeben.

Anders als bei [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) wird durch die Verwendung von Source-Import auch das Linken verzögert. Vorab zu linken ermöglicht dem Modullader, Abhängigkeiten aufzulösen und fehlende Abhängigkeiten oder ungültige Imports zu erkennen, bevor das Modul verwendet wird. Das Modul ungelinkt zu lassen, vermeidet das Laden von Abhängigkeiten, die Sie möglicherweise nicht benötigen, und ermöglicht Ihnen, zu steuern, wie es instanziiert wird. Sie können beispielsweise ein per Source-Import importiertes WebAssembly-Modul mehrfach mit unterschiedlichen Imports instanziieren oder es zur Instanziierung an einen Worker senden.

Anders als bei [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird das per Source-Import importierte Modul vorab abgerufen und kompiliert, ohne ausgewertet zu werden. `import source` bietet außerdem die meisten Vorteile einer statischen Deklaration, etwa eine bessere statische Analyse.

Beachten Sie, dass nur die Syntax für den „Standardimport“ unterstützt wird. Sie können nicht `import source { property } from "./my-module.wasm"` usw. verwenden.

### Importieren von WebAssembly-Quellcode

Für WebAssembly geben Sie die importierten Werte bei der Instanziierung des Moduls an:

```js
import source myModuleSource from "./my-module.wasm";

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

Anders als bei einem gewöhnlichen WebAssembly-Modulimport erstellt dies eine neue Instanz mit den von Ihnen bereitgestellten Imports, statt die vom Modullader gelinkte zwischengespeicherte Instanz zu verwenden. Ihr `exports`-Objekt ist kein JavaScript-Modul-Namespace-Objekt. Beispielsweise werden WebAssembly-Globals über `instance.exports` als `WebAssembly.Global`-Objekte verfügbar gemacht, während die ESM-Integration ihre Werte für JavaScript-Importierende bereitstellt.

> [!NOTE]
> Die Unterstützung für Source-Phase-Imports von WebAssembly bedeutet nicht, dass gewöhnliche WebAssembly-Modulimports unterstützt werden. Ein Host kann `import source mod from "./mod.wasm"` unterstützen und gleichzeitig `import * as ns from "./mod.wasm"` ablehnen.

Source-Imports verwenden den Modullader des Hosts, einschließlich dessen Kompilierungseinstellungen. Sie entsprechen nicht notwendigerweise einem Aufruf von `WebAssembly.compileStreaming()` mit Standardoptionen. Beispielsweise [aktiviert Node.js JavaScript-String-Built-ins für Wasm-Imports](https://nodejs.org/api/esm.html#javascript-string-builtins) und lehnt reservierte Import- und Exportnamen ab. Verwenden Sie die direkten WebAssembly-Kompilierungs-APIs, wenn Sie benutzerdefinierte Kompilierungsoptionen benötigen.

### Importieren von JavaScript-Quellcode

Für JavaScript (unter der Annahme der vorgeschlagenen Unterstützung für `import(moduleSource)`, ebenfalls in [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports)):

```js
import * as namespace from "./my-module.js";

// Is equivalent to:

import source myModuleSource from "./my-module.js";

const namespace = await import(myModuleSource);
```

### Caching-Semantik

Der Modifikator gilt für einen Import, nicht für das Modul selbst. Wenn ein anderer Teil der Anwendung dasselbe Modul ohne `source` importiert, wird das Modul wie üblich ausgewertet. Beide Formen teilen denselben Modulzustand, und der Code des Moduls wird höchstens einmal ausgeführt. Das Ändern der Importphase erstellt kein separates Modul im Cache:

```js
import * as x from "foo";
import source xSource from "foo";

console.log((await import(xSource)) === x); // true
```

> [!NOTE]
> Diese zwischengespeicherte Instanz wird bei Verwendung von `import()` wiederverwendet, jedoch nicht bei manueller Instanziierung von WebAssembly. Jeder Aufruf von `WebAssembly.instantiate(modSource, imports)` oder `new WebAssembly.Instance(modSource, imports)` erstellt eine neue Instanz und führt ihre Initialisierung aus, einschließlich einer möglichen Startfunktion. Im Gegensatz dazu kompiliert `WebAssembly.compileStreaming()` nur; es führt das Modul nicht aus und verwendet nicht den ESM-Modulcache.

Im Gegensatz dazu können [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) die Modulidentität beeinflussen. Beispielsweise fordern diese beiden Deklarationen bei einem Host, der Textmodule unterstützt, unterschiedliche Modultypen an:

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

Die beiden Imports gelten als von unterschiedlichen Modulen stammend, die zufällig denselben Zeichenkettenspezifizierer teilen (im Web werden sie mit unterschiedlichen HTTP-Headern angefordert). Die unterstützten Attribute und ihre Auswirkungen auf das Laden und die Modulidentität werden vom Host definiert.

## Beispiele

### Instanziieren eines Moduls mit unterschiedlichen Imports

Angenommen, `counter.wasm` importiert einen unveränderlichen `i32`-Global namens `initial` aus `env`, initialisiert daraus einen internen Zähler und exportiert eine Funktion namens `increment`. Sie können den kompilierten Quellcode mit unterschiedlichen Imports und unabhängigen internen Zählern wiederverwenden:

```js
import source counterSource from "./counter.wasm";

const first = await WebAssembly.instantiate(counterSource, {
  env: { initial: 0 },
});
const second = await WebAssembly.instantiate(counterSource, {
  env: { initial: 100 },
});

console.log(first.exports.increment()); // 1
console.log(first.exports.increment()); // 2
console.log(second.exports.increment()); // 101
```

Jede Instanz besitzt ihren eigenen internen Zustand, obwohl explizit importierte Speicher, Tabellen oder andere veränderliche Objekte zwischen Instanzen geteilt werden können. Sie können den [kompilierten Quellcode auch zur Instanziierung an einen Worker senden](/de/docs/WebAssembly/Reference/JavaScript_interface/Module#obtaining_the_module_using_import_source).

### Exportieren eines Modulquellcodes

Es gibt keine `export source`-Syntax (weitere Informationen finden Sie unter [`export`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)). Sie können einen Modulquellcode importieren und anschließend seine Bindung exportieren, ohne das Modul zu instanziieren oder auszuwerten:

```js
// -- sources.js --
import source counterSource from "./counter.wasm";

export { counterSource };
```

```js
// -- main.js --
import { counterSource } from "./sources.js";

const instance = new WebAssembly.Instance(counterSource, {
  env: { initial: 0 },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("AbstractModuleSource")}}
