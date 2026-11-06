---
title: import source
slug: Web/JavaScript/Reference/Statements/import/source
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

{{SeeCompatTable}}

Die **`import source`**-Deklaration ähnelt der regulären [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklaration. Sie liefert jedoch ein Objekt, das den kompilierten Quellcode des Moduls repräsentiert. Das Modul wird [abgerufen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) und kompiliert, seine Abhängigkeiten werden jedoch nicht [geladen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph), und es wird weder [verknüpft](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#linking_modules) noch [ausgeführt](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules). Es kann später explizit ausgeführt werden, beispielsweise mit einem [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import) oder [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Um `import source` zu verwenden, muss das Zielmodul Source-Phase-Imports unterstützen. Derzeit unterstützen nur WebAssembly-Module Source-Phase-Imports; sie liefern [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte. Quellobjekte für JavaScript-Module sollen durch den Vorschlag [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) ergänzt werden.

## Syntax

```js-nolint
import source x from "module-name";
```

- `x`
  - : Name, der auf das Modulquellobjekt verweist. Muss ein gültiger JavaScript-Bezeichner sein.
- `module-name`
  - : Das Modul, aus dem importiert werden soll. Wird genauso behandelt wie [`module-name`](/de/docs/Web/JavaScript/Reference/Statements/import#module-name) in regulären `import`-Deklarationen.

[Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) werden ebenfalls unterstützt. Dafür wird nach dem Modulbezeichner eine `with`-Klausel verwendet.

`source` ist kein reserviertes Wort. Beispielsweise ist `import source from "./module.js"` weiterhin ein regulärer Default-Import, dessen lokale Bindung `source` heißt.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn das Zielmodul Source-Phase-Imports nicht unterstützt.

## Beschreibung

Standardmäßig führt die `import`-Deklaration mehrere Aufgaben auf einmal aus: Sie löst den Modulbezeichner auf, ruft den Modulquellcode ab, parst ihn (wobei möglicherweise transitive Abhängigkeiten erkannt werden), verknüpft das Modul und führt es aus. Diese Form der sofortigen Ausführung ist nicht immer erwünscht, insbesondere wenn der Modulquellcode in einem anderen Kontext ausgeführt werden soll, etwa in einem Worker-Thread.

Mit dem _Importphasen-Modifikator_ lässt sich der Importvorgang in einer bestimmten Phase anhalten. Wenn Sie `source` nach `import` hinzufügen, wird der Quellcode geparst und kompiliert, bleibt aber unverknüpft und wird nicht ausgeführt. Der Source-Import lädt die transitiven Abhängigkeiten des Moduls nicht.

Bisher bestand die einzige Möglichkeit, nur einen Teil dieses Ablaufs auszuführen, darin, den gesamten Ablauf selbst zu implementieren. Bei WebAssembly verwenden Sie beispielsweise zunächst [`fetch()`](/de/docs/Web/API/Fetch_API), um die binären Daten des Moduls abzurufen. Anschließend kompilieren Sie diese mit [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static) oder kompilieren den Antwortstream mit [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) zu einem `WebAssembly.Module`-Objekt.

```js
const myModuleSource = await WebAssembly.compileStreaming(
  fetch("./my-module.wasm"),
);
```

Ein solcher manueller Ablauf ist aus mehreren Gründen problematisch:

- Er erfordert zu viele Operationen auf niedriger Ebene, die sich möglicherweise anders verhalten als der standardmäßige Modullader, etwa beim Caching, bei HTTP-Header-Einstellungen und beim Auflösen von Modulbezeichnern.
- Er ist imperativ. Das erschwert es, die Abhängigkeiten eines Moduls und deren Ausführungsreihenfolge nachzuvollziehen, insbesondere für Bundler oder andere Analysewerkzeuge.
- Die Ausführung des rohen Quellcodes durch Anwendungscode ist mit strengen [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen nicht vereinbar.

Source-Phase-Imports vermeiden diese Probleme.

```js
import source myModuleSource from "./my-module.wasm";
```

Das durch diesen Import erhaltene Objekt ist eine Instanz einer Unterklasse von {{jsxref("AbstractModuleSource")}}. Jeder Modultyp, der Source-Phase-Imports unterstützt, definiert eine eigene Unterklasse. Für WebAssembly ist dies [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module). Dieses Objekt wird für das jeweilige Modul zwischengespeichert, sodass spätere Source-Imports, die zum selben Modul aufgelöst werden, exakt dasselbe Objekt zurückgeben.

Anders als bei [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer) wird bei einem Source-Import auch das Verknüpfen aufgeschoben. Wenn Abhängigkeiten vorab geladen und verknüpft werden, lassen sich fehlende Abhängigkeiten oder ungültige Importe erkennen, bevor das Modul verwendet wird. Source-Phase-Imports lassen die Abhängigkeiten hingegen ungeladen und ermöglichen es Ihnen, die Instanziierung des Moduls zu steuern. Beispielsweise können Sie ein per Source-Import geladenes WebAssembly-Modul mehrfach mit unterschiedlichen Importen instanziieren oder es zur Instanziierung an einen Worker senden.

Anders als bei [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird das per Source-Import geladene Modul vorab abgerufen und kompiliert, ohne ausgeführt zu werden. `import source` bietet außerdem die meisten Vorteile einer statischen Deklaration, etwa eine bessere statische Analyse.

Beachten Sie, dass nur die Syntax für den „Default-Import“ unterstützt wird. Sie können beispielsweise nicht `import source { property } from "./my-module.wasm"` verwenden.

### WebAssembly-Quellcode importieren

Bei WebAssembly geben Sie die importierten Werte an, wenn Sie das Modul instanziieren:

```js
import source myModuleSource from "./my-module.wasm";

const instance = await WebAssembly.instantiate(myModuleSource, {
  env: { log: console.log },
});
const { exports } = instance;
```

Anders als bei einem gewöhnlichen WebAssembly-Modulimport wird dadurch eine neue Instanz mit den von Ihnen angegebenen Importen erstellt, statt die vom Modullader verknüpfte, zwischengespeicherte Instanz zu verwenden. Ihr `exports`-Objekt ist kein JavaScript-Modul-Namespace-Objekt. Beispielsweise werden WebAssembly-Globals über `instance.exports` als `WebAssembly.Global`-Objekte bereitgestellt, während die ESM-Integration JavaScript-Importeuren deren Werte bereitstellt.

> [!NOTE]
> Die Unterstützung von Source-Phase-Imports für WebAssembly bedeutet nicht, dass auch gewöhnliche WebAssembly-Modulimporte unterstützt werden. Eine Host-Umgebung kann `import source mod from "./mod.wasm"` unterstützen, aber `import * as ns from "./mod.wasm"` ablehnen.

Source-Imports verwenden den Modullader der Host-Umgebung einschließlich seiner Kompilierungseinstellungen. Sie sind nicht unbedingt gleichbedeutend mit einem Aufruf von `WebAssembly.compileStreaming()` mit Standardoptionen. Beispielsweise [aktiviert Node.js JavaScript-String-Builtins für Wasm-Importe](https://nodejs.org/api/esm.html#javascript-string-builtins) und lehnt reservierte Import- und Exportnamen ab. Verwenden Sie die direkten WebAssembly-Kompilierungs-APIs, wenn Sie eigene Kompilierungsoptionen benötigen.

### JavaScript-Quellcode importieren

Für JavaScript (unter der Annahme, dass das vorgeschlagene `import(moduleSource)` unterstützt wird, das ebenfalls Teil von [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) ist):

```js
import * as namespace from "./my-module.js";

// Is equivalent to:

import source myModuleSource from "./my-module.js";

const namespace = await import(myModuleSource);
```

### Caching-Semantik

Der Modifikator gilt für einen Import, nicht für das Modul selbst. Wenn ein anderer Teil der Anwendung dasselbe Modul ohne `source` importiert, wird es wie gewohnt ausgeführt. Beide Formen verwenden denselben Modulzustand, und der Code des Moduls wird höchstens einmal ausgeführt. Eine Änderung der Importphase erzeugt kein separates Modul im Cache:

```js
import * as x from "foo";
import source xSource from "foo";

console.log((await import(xSource)) === x); // true
```

> [!NOTE]
> Diese zwischengespeicherte Instanz wird bei Verwendung von `import()` wiederverwendet, nicht jedoch, wenn Sie WebAssembly manuell instanziieren. Jeder Aufruf von `WebAssembly.instantiate(modSource, imports)` oder `new WebAssembly.Instance(modSource, imports)` erstellt eine neue Instanz und führt deren Initialisierung aus, einschließlich einer etwaigen Startfunktion. Im Gegensatz dazu kompiliert `WebAssembly.compileStreaming()` nur; es führt das Modul nicht aus und verwendet den ESM-Modulcache nicht.

Im Gegensatz dazu können [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) die Modulidentität beeinflussen. In einer Host-Umgebung, die Textmodule unterstützt, fordern diese beiden Deklarationen beispielsweise unterschiedliche Modultypen an:

```js
import * as mod from "./module.js";
import text from "./module.js" with { type: "text" };
```

Die beiden Importe gelten als Importe aus unterschiedlichen Modulen, die lediglich denselben String als Modulbezeichner verwenden (im Web werden sie mit unterschiedlichen HTTP-Headern angefordert). Welche Attribute unterstützt werden und wie sie sich auf das Laden und die Modulidentität auswirken, legt die Host-Umgebung fest.

## Beispiele

### Ein Modul mit unterschiedlichen Importen instanziieren

Angenommen, `counter.wasm` importiert aus `env` ein unveränderliches `i32`-Global namens `initial`, initialisiert damit einen internen Zähler und exportiert eine Funktion namens `increment`. Sie können den kompilierten Quellcode mit unterschiedlichen Importen und voneinander unabhängigen internen Zählern wiederverwenden:

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

Jede Instanz hat ihren eigenen internen Zustand. Explizit importierte Speicher, Tabellen oder andere veränderliche Objekte können jedoch von mehreren Instanzen gemeinsam genutzt werden. Sie können den [kompilierten Quellcode auch an einen Worker senden](/de/docs/WebAssembly/Reference/JavaScript_interface/Module#obtaining_the_module_using_import_source), um ihn dort zu instanziieren.

### Ein Modulquellobjekt exportieren

Es gibt keine `export source`-Syntax (weitere Informationen finden Sie unter [`export`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)). Sie können ein Modulquellobjekt importieren und anschließend seine Bindung exportieren, ohne das Modul zu instanziieren oder auszuführen:

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

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) – Leitfaden
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("AbstractModuleSource")}}
