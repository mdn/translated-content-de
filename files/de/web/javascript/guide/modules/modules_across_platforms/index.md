---
title: Module über Plattformen hinweg
slug: Web/JavaScript/Guide/Modules/Modules_across_platforms
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

MDN konzentriert sich auf JavaScript im Browser, doch die meisten Entwickler arbeiten auch mit anderen Laufzeitumgebungen wie Node, Deno oder Bun. Man könnte leicht annehmen, dass die [Regeln für das Web](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web) überall gelten. Jede dieser Umgebungen – und viele Werkzeuge wie Bundler und Typprüfer – hat jedoch eigene Regeln dafür, wie Module aufgelöst und interpretiert werden. Dieser Abschnitt versucht nicht, jedes Detail von Umgebungen außerhalb des Browsers zu dokumentieren. Stattdessen bietet er ein gedankliches Modell für Module auf verschiedenen Plattformen und praktische Hinweise zum Schreiben portablen Modulcodes.

## Andere Modulformate

ECMAScript-Module (ESM) wurden erst fast 20 Jahre nach der Entstehung von JavaScript standardisiert und implementiert. Zu diesem Zeitpunkt waren die meisten Anwendungen bereits komplex genug, um Modulsysteme zu benötigen. Daher hatten Laufzeitumgebungen und Bundler verschiedene Alternativen implementiert.

Im Wesentlichen benötigt jedes Modulsystem drei Bestandteile:

- Den Modulcode mit einem eigenen Gültigkeitsbereich zur Kapselung von Variablen, beispielsweise durch eine Wrapper-Funktion.
- Ein Verfahren, mit dem das Modul seine Exporte deklarieren kann.
- Einen Importmechanismus, um ein anderes Modul zu identifizieren und auf dessen Exporte zuzugreifen.

### CommonJS

Node.js hat das [CommonJS-System](https://nodejs.org/api/modules.html) populär gemacht. In der CommonJS-Implementierung von Node.js wird jedes Modul implizit in eine Funktion eingeschlossen. Diese Funktion übergibt fünf Dinge an den Gültigkeitsbereich des Moduls: `exports`, `module`, `require`, `__dirname` und `__filename`. Der exportierte Wert jedes Moduls ist ein einzelner JavaScript-Wert in `module.exports`. Sie können diesen Wert abrufen, indem Sie `require()` mit der ID des Moduls aufrufen.

```js
// -- rectangle.cjs --
module.exports = {
  area: (a, b) => a * b,
};
```

```js
// -- square.cjs --
const rectangle = require("./rectangle.cjs");
// `rectangle` contains the `module.exports` object of rectangle.cjs

module.exports = {
  area: (side) => rectangle.area(side, side),
};
```

Anders als ESM, das die [Auflösung von Modulbezeichnern](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) vollständig der Host-Umgebung überlässt, definiert CommonJS [einige Regeln](https://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers) für die Modul-ID. Relative IDs, die mit `.` oder `..` beginnen, sollen relativ zum aktuellen Modul aufgelöst werden. IDs auf oberster Ebene, die mit keinem der beiden beginnen, sollen relativ zu einem „Stammverzeichnis des Modulnamensraums“ aufgelöst werden. Node.js führt die CommonJS-Spezifikation weiter und definiert einen [formalen Auflösungsalgorithmus](https://nodejs.org/api/modules.html#all-together). Dieser dient vielen Werkzeugen, die CJS unterstützen, als Grundlage für die Auflösung, darunter Bundler und TypeScript. Insbesondere legt die Auflösungslogik von Node.js den Ordner `node_modules` fest und bestimmt, wie Importpfade auf Verzeichnisse behandelt werden: Sie verwendet die `package.json` oder `index.js` des Verzeichnisses.

### AMD

CommonJS funktioniert gut in Node.js, ist aber synchron. Das ist für Browser nachteilig, da das Laden von Abhängigkeiten Netzwerkanfragen erfordern kann. [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) ist in Browsern verbreiteter, weil Importe damit asynchron erfolgen. In AMD ruft jedes Modul `define()` mit einem Array von Abhängigkeits-IDs und einer Factory-Funktion auf. Der Loader löst die Abhängigkeiten auf, bevor er die Factory aufruft, und übergibt deren exportierte Werte in derselben Reihenfolge als Argumente. Die Factory kann einen Wert zurückgeben, der aus dem Modul exportiert wird.

```js
// -- rectangle.js --
define([], function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
define(["./rectangle"], function (rectangle) {
  // `rectangle` contains the value returned by rectangle.js's factory
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

Die Funktion `define()` wird von einem AMD-Loader wie [RequireJS](https://requirejs.org/docs/api.html) bereitgestellt, nicht von der Laufzeitumgebung – Browser unterstützen AMD nicht nativ. Ähnlich wie CommonJS unterstützt AMD relative Modul-IDs und Modul-IDs auf oberster Ebene. Wie diese IDs Dateien zugeordnet werden, hängt vom Loader und seiner Konfiguration ab. RequireJS löst beispielsweise IDs auf oberster Ebene normalerweise relativ zu einer konfigurierten `baseUrl` auf und fügt die Erweiterung `.js` hinzu, weshalb Modul-IDs sie üblicherweise weglassen.

### UMD

Schon vor ESM bestand der Wunsch, Module plattformübergreifend nutzbar zu machen. [Universal Module Definition (UMD)](https://github.com/umdjs/umd) bezeichnet eine Reihe von Wrapper-Mustern, mit denen dieselbe Datei in verschiedenen Modulsystemen funktioniert. Ein typischer UMD-Wrapper prüft zuerst, ob ein AMD-Loader vorhanden ist, dann, ob eine CommonJS-Umgebung vorliegt, und stellt das Modul andernfalls als globale Variable bereit. Jeder Zweig verwendet dieselbe Factory-Funktion, um den exportierten Wert des Moduls zu erzeugen.

```js
// -- rectangle.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.rectangle = factory();
  }
})(globalThis, function () {
  return {
    area: (a, b) => a * b,
  };
});
```

```js
// -- square.js --
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./rectangle"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./rectangle.js"));
  } else {
    root.square = factory(root.rectangle);
  }
})(globalThis, function (rectangle) {
  return {
    area: (side) => rectangle.area(side, side),
  };
});
```

Damit kann dieselbe Datei ohne Änderungen am Quellcode sowohl in Node.js mit CommonJS als auch in Browsern mit AMD importiert werden. Im Zweig für globale Variablen müssen Sie die Abhängigkeiten selbst in der richtigen Reihenfolge laden, genau wie bei [herkömmlichen globalen Skripten](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module).

UMD definiert keine eigenen Regeln zur Auflösung von Abhängigkeiten; diese Aufgabe übernehmen die AMD- und CommonJS-Zweige. UMD wird nur selten von Hand geschrieben, sondern üblicherweise von [Bundlern](#bundler) und [Transpilern](#transpiler) erzeugt.

## Module in Node.js verwenden

Node.js unterstützt sowohl ESM- als auch CommonJS-Module. Bevor Node.js eine Datei ausführt, muss es entscheiden, ob es sich um CJS oder ESM handelt. Aus Gründen der Abwärtskompatibilität verwendet Node.js ohne weitere Hinweise standardmäßig CJS – es sei denn, die Datei enthält ESM-spezifische Syntax wie `import` oder `export`; dann wechselt es zu ESM. Um eine Datei ausdrücklich als ESM zu kennzeichnen, verwenden Sie die Erweiterung `.mjs` oder `.js` zusammen mit `"type": "module"` in der nächstgelegenen übergeordneten `package.json`-Datei:

```json
{
  "type": "module"
}
```

Um eine Datei ausdrücklich als CJS zu kennzeichnen, verwenden Sie die Erweiterung `.cjs` oder `"type": "commonjs"` in der nächstgelegenen übergeordneten `package.json`-Datei.

Erstellen Sie beispielsweise die folgenden beiden Dateien im selben Verzeichnis wie `package.json`, die `"type": "module"` enthält:

```js
// -- square.js --
export const area = (side) => side ** 2;
```

```js
// -- main.js --
import { area } from "./square.js";

console.log(area(4)); // 16
```

Führen Sie das Einstiegsmodul mit `node main.js` aus. Node.js lädt diese Dateien direkt aus dem Dateisystem; eine HTML-Seite oder ein HTTP-Server ist nicht erforderlich.

Node ESM stellt die auf CJS-Module beschränkten Variablen `__dirname`, `__filename`, `exports`, `module` und `require` nicht bereit. `exports` und `module` benötigen Sie dank der `export`-Deklarationen wahrscheinlich nicht. `__dirname` und `__filename` können jedoch nützlich sein, um den Pfad des aktuellen Moduls zu ermitteln, und `require`, um eine Abhängigkeit außerhalb der obersten Ebene synchron zu laden. [`import.meta`](https://nodejs.org/api/esm.html#importmeta) ersetzt `__dirname` und `__filename` weitgehend und bietet Node-spezifische Eigenschaften wie `import.meta.dirname` und `import.meta.filename`. Wenn Sie Abhängigkeiten synchron laden möchten, stellt Node außerdem die Funktion [`createRequire`](https://nodejs.org/api/module.html#modulecreaterequirefilename) bereit, mit der Sie die Funktion `require` im Kontext dieses Moduls verfügbar machen können.

Node verwendet für ESM- und CJS-Modulbezeichner unterschiedliche Auflösungsregeln. Seine ESM-Implementierung entspricht eher [der von Browsern](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web). Das bedeutet, dass Sie Dateierweiterungen angeben müssen, etwa `"./square.js"` statt `"./square"`. Um mit dem bestehenden Ökosystem kompatibel zu bleiben, löst Node.js bloße Paketnamen weiterhin zu installierten Paketen in `node_modules` auf. Integrierte Module stellt es über das Protokoll `node:` bereit.

```js
import { readFile } from "node:fs/promises"; // Import from built-in module
import _ from "lodash"; // Import from package in node_modules

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
const wordCounts = _.countBy(_.words(text));
```

Ob die Regeln zur Auflösung von ESM- oder CJS-Modulbezeichnern gelten, hängt von der Importmethode ab, nicht vom Zielmodul. Mit `require` verwenden Sie CJS-Modulbezeichner – auch bei Aufrufen, die in ES-Modulen mit `createRequire` erzeugt wurden. Mit `import` verwenden Sie ESM-Modulbezeichner, auch bei dynamischen Importen in CJS-Modulen.

Die Auflösung von Modulbezeichnern in Node bietet weitere Funktionen, beispielsweise Import-Aliasse über `"imports"` in `package.json`. Die [Dokumentation zu ES-Modulen in Node.js](https://nodejs.org/api/esm.html) beschreibt die Laderegeln und APIs.

### Zusammenspiel von ESM und CJS

In Node.js kann ein ES-Modul ein CJS-Modul importieren. Dabei wird der Wert von `module.exports` als Standardexport geladen:

```js
// -- main.mjs --
import square from "./square.cjs";

console.log(square.area(4)); // 16
```

Umgekehrt kann CommonJS-Code das asynchrone [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) verwenden, um ES-Module zu laden. Node.js unterstützt außerdem das [Laden synchroner ES-Modulgraphen mit `require()`](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require):

```js
const square = require("./square.mjs");
// Assuming square.mjs and its dependencies do not use top-level await

console.log(square.area(4));

import("./module-with-top-level-await.mjs").then((mod) => {
  mod.foo();
});
```

Die einzige Einschränkung besteht darin, dass `require()` keinen Modulgraphen laden kann, der [`await` auf oberster Ebene](/de/docs/Web/JavaScript/Guide/Modules#top-level_await) verwendet:

```js example-bad
const mod = require("./module-with-top-level-await.mjs");
// Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead.
```

Von vielen CJS-Paketen wird erwartet, dass sie einzelne Namen exportieren, etwa so:

```js
const { area } = require("./square.cjs");
```

Das lässt sich _nicht_ immer auf benannte Importe in ESM übertragen:

```js
import { area } from "./square.cjs";
```

Der Grund ist, dass [Module vor ihrer Auswertung verknüpft werden müssen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#from_module_source_to_execution). Node muss also feststellen können, ob ein Export namens `area` existiert, bevor `square.cjs` ausgeführt wird. Daher kann es nur nach bestimmten Codemustern suchen, etwa `module.exports = { area }` oder `module.exports.area = ...`. Das gelingt nicht in jedem Fall, insbesondere wenn CJS-Code von Hand geschrieben wurde und `module.exports` auf komplizierte Weise verändert. Die meisten gängigen, von Compilern erzeugten CJS-Muster lassen sich korrekt analysieren.

Im ungünstigsten Fall müssen Sie das gesamte `module.exports`-Objekt importieren und anschließend destrukturieren:

```js
import square from "./square.cjs";

const { area } = square;
```

Beachten Sie, dass CJS keinen „Standardexport“ kennt. Wenn Sie ein CJS-Modul per Standardimport importieren, laden Sie tatsächlich das gesamte `module.exports`-Objekt. Darin können Eigenschaften liegen, die konzeptionell „benannte Exporte“ darstellen. Compiler übersetzen `export default`-Deklarationen in CJS-Code, der im Wesentlichen `module.exports.default = ...` entspricht. Dieser Wert kann nicht direkt in ein ES-Modul importiert werden: `import { default as area }` ist dasselbe wie `import area` und lädt das gesamte `module.exports`-Objekt.

```js
// -- square.js --
// This file will be compiled into CJS
export default function area(side) {
  return side ** 2;
}
// Compiled code:
// module.exports.default = function area(side) ...
```

```js
// -- main.mjs --
import square from "./square.js";

// Can't avoid this!
const { default: area } = square;
```

Wenn Sie ESM-Syntax schreiben, die zu CJS kompiliert und anschließend von nativen ES-Modulen importiert wird, sollten Sie deshalb Standardexporte vermeiden oder zusätzlich einen benannten Exportalias bereitstellen.

```js
// -- square.js --
// Export the exact same value as the default export
export { area };
```

### Pakete

Wenn Sie ein Paket veröffentlichen, legt dessen [Feld `"exports"`](https://nodejs.org/api/packages.html#package-entry-points) fest, welche Einstiegspunkte Nutzer importieren können. [Bedingte Exporte](https://nodejs.org/api/packages.html#conditional-exports) können für verschiedene Umgebungen oder Modulsysteme unterschiedliche Implementierungen auswählen. Diese Paketeinstellungen sind unabhängig von JavaScript-`export`-Deklarationen, die festlegen, welche Bindungen ein Modul bereitstellt. Das [Feld `"main"`](https://nodejs.org/api/packages.html#main) ist inzwischen nicht mehr erforderlich und kann durch `"exports"` ersetzt werden.

Lange Zeit konnten CJS-Nutzer in Node ESM-Pakete nur mit dem asynchronen `import()` importieren; die Möglichkeit, ESM mit `require()` zu laden, kam erst viel später hinzu. Pakete, die natives ESM veröffentlichen wollten, mussten daher zusätzlich eine CJS-Kopie für Nutzer bereitstellen, die noch CJS verwendeten:

```json
{
  "name": "dual-package",
  "type": "module",
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.cjs",
      "default": "./dist/esm/index.js"
    }
  }
}
```

Diese als „Dual Packaging“ bezeichnete Praxis ist in aktuellen Node.js-Versionen nicht mehr erforderlich, solange der Abhängigkeitsgraph des Pakets kein `await` auf oberster Ebene verwendet. Wenn verschiedene Teile Ihrer Anwendung dasselbe Paket sowohl in CJS- als auch in ESM-Form laden, teilen sich diese möglicherweise nicht denselben Modulzustand. Das kann schwer erkennbare Fehler verursachen.

## Transpiler

In den vorherigen Abschnitten wurden Transpiler bereits erwähnt. Sie wandeln bestimmte JavaScript-Syntaxformen in andere JavaScript-Syntaxformen um. Dazu gehört selbstverständlich auch die Umwandlung zwischen Modulformaten. Gängige Transpiler wie [Babel](https://babeljs.io/), [SWC](https://swc.rs/) und [tsc](https://www.typescriptlang.org/) können Module in nativer ESM-Syntax einlesen und eines der [zuvor beschriebenen Modulformate](#andere_modulformate) ausgeben.

Nehmen Sie beispielsweise den folgenden Quellcode:

```js
// -- src/square.js --
import * as rectangle from "./rectangle";

export function area(side) {
  return rectangle.area(side, side);
}
```

Wenn Sie ihn mit einem Transpiler in CJS umwandeln, könnte folgende Ausgabe entstehen:

```js
// -- dist/square.js --
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true,
});
Object.defineProperty(exports, "area", {
  enumerable: true,
  get: function () {
    return area;
  },
});
const _rectangle = /*#__PURE__*/ _interop_require_wildcard(
  require("./rectangle"),
);
// ... definition for _interop_require_wildcard ...
function area(side) {
  return _rectangle.area(side, side);
}
```

Auch wenn Sie durch das Schreiben von `import`- und `export`-Deklarationen den Eindruck haben, ESM zu schreiben, erzeugen Sie möglicherweise weiterhin CJS-Code – oder ein anderes Modulformat –, sofern Sie Ihren Transpiler nicht für die Ausgabe von nativem ESM konfiguriert haben. Transpiler verarbeiten üblicherweise nur einzelne Dateien und übernehmen Modulbezeichner unverändert. Deshalb kann Code wie `import * as rectangle from "./rectangle"` trotz der fehlenden Erweiterung funktionieren: Er wird schließlich zu `require("./rectangle")` kompiliert, was in CJS gültig ist.

Transpiler sollen Ihnen möglichst das Gefühl geben, natives ESM zu schreiben, wenn sowohl das Zielmodul als auch das importierende Modul transpiliert werden. Insbesondere wandeln die meisten Transpiler `import rectangle from "./rectangle";` nicht immer so um, dass das gesamte `module.exports`-Objekt geladen wird. Beachten Sie in der obigen Ausgabe die Markierung `__esModule`. Sie zeigt an, dass dieses CJS-Modul durch das Transpilieren von ESM-Syntax entstanden ist. Wenn die Markierung vorhanden ist, kompilieren die meisten Transpiler Standardimporte so, dass sie `module.exports.default` lesen – also den Wert einer transpilierten `export default`-Deklaration. Andernfalls lesen sie `module.exports`.

Der Nachteil: Wird nur eine Seite transpiliert, während die andere in Node als natives ESM ausgeführt wird, können unerwartete Probleme auftreten, wie unter [Zusammenspiel von ESM und CJS](#esmcjs_interop) beschrieben. Beispielsweise lässt sich ein transpiliertes `export default` in nativem ESM nicht mehr per Standardimport importieren.

Lesen Sie die Dokumentation Ihres Transpilers oder führen Sie Versuche durch, um die konkreten Regeln für das Transpilieren verschiedener Arten von `import`- und `export`-Deklarationen zu verstehen.

## Bundler

Bundler enthalten in der Regel Transpiler, die Modulformate umwandeln. Sie gehen jedoch noch einen Schritt weiter und versuchen, den Abhängigkeitsgraphen zu verstehen, um ihn zu transformieren und zu optimieren.

Ausgehend von einem oder mehreren Einstiegsmodulen verfolgt ein Bundler deren Abhängigkeiten und kombiniert den Code in Ausgabedateien. Ein einfacher Bundler gibt nur eine JavaScript-Datei aus – das „Bundle“. Es können aber auch mehrere Dateien entstehen, insbesondere wenn dynamisches `import()` verwendet wird. Selbst wenn Sie ESM direkt ausführen möchten, sind Bundler sehr nützlich, da sie wichtige Transformationen und Optimierungen vornehmen. [Vite](https://vite.dev/guide/) ermöglicht es beispielsweise, in ESM geschriebene Anwendungen über [Vorab-Bündelung von Abhängigkeiten](https://vite.dev/guide/dep-pre-bundling.html) mit CommonJS- und UMD-Abhängigkeiten zu verwenden. Während der Entwicklung stellt Vite transformierte Module als natives ESM bereit; für die Produktion bündelt es die Anwendung zur Bereitstellung. Bundler sind auch außerhalb von Browsern nützlich: Selbst bei der Entwicklung einer Node-Bibliothek oder -Anwendung können Sie einen Bundler verwenden, um die Codegröße zu optimieren und/oder nicht standardisierte Syntax zu nutzen.

Bundler sind keine JavaScript-Host-Umgebungen, da sie Code nicht _ausführen_. Sie analysieren Dateien lediglich statisch. Dennoch verfügen sie über umfassende Regeln für den Umgang mit Modulen, vergleichbar mit denen von Browsern oder Node.

### Modulauflösung

Anders als ein Transpiler, der Modulbezeichner unverändert übernimmt, muss ein Bundler die Abhängigkeiten finden, die er einbindet.

Die meisten Frontend-Pakete werden ebenfalls mit Node-Paketmanagern im Ordner `node_modules` verwaltet. Deshalb verstehen Bundler standardmäßig Paketimporte nach Node-Art. Meist unterstützen sie gleichzeitig die Auflösung nach ESM- und CJS-Art, also etwa Verzeichnisimporte und Importe ohne Dateierweiterung. Sie können sich allerdings stärker an einem der beiden Formate orientieren, beispielsweise wenn ein Modul ausdrücklich die Erweiterung `.mjs` oder `.cjs` hat.

Bundler bieten häufig konfigurierbare Auflösungsregeln. Mit der Option [`resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias) von Vite können Sie beispielsweise einen Alias konfigurieren:

```js
// -- vite.config.js --
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@shapes": fileURLToPath(new URL("./src/shapes", import.meta.url)),
    },
  },
});
```

Ihr Quellcode kann diesen Alias anschließend verwenden:

```js
import { area } from "@shapes/square";
```

Mit dieser Konfiguration kann Vite den Import zu `src/shapes/square.js` auflösen. Der Browser muss den Alias nicht verstehen, da Vite den Import während der Entwicklung umschreibt und ihn beim Bündeln auflöst. Der ursprüngliche Quellcode kann jedoch nicht direkt in einem Browser ausgeführt werden, wenn keine Import-Map eine entsprechende Zuordnung bereitstellt.

### Den Modulgraphen optimieren

Bundler fügen alle Dateien des Modulgraphen zusammen. Wenn Sie `lodash` importieren, übernehmen Sie den gesamten Quellcode von [Lodash](https://lodash.com/) – mit über 100 Hilfsfunktionen – in Ihr Bundle. Das kann die Größe erheblich erhöhen. Bundler können Code entfernen, den die Anwendung nicht verwendet. Dies wird üblicherweise {{Glossary("tree_shaking", "Tree Shaking")}} genannt. Die statischen Importe und Exporte von ESM helfen dem Bundler festzustellen, welche Bindungen verwendet werden.

> [!NOTE]
> Das ist ein wichtiger Grund, ein Paket in ESM-Syntax zu veröffentlichen, wenn es von Bundlern verarbeitet und nicht direkt ausgeführt werden soll: Bundler können es so leichter analysieren.

Zum Beispiel:

```js
// -- big-library --
export function map() {}

export function filter() {}

export function reduce() {}
```

```js
// -- my-app.js --
import { map } from "big-library";
```

Der Bundler kann erkennen, dass Ihre Anwendung die Exporte `filter` und `reduce` nie verwendet, und sie aus dem endgültigen Bundle entfernen. Er kann sogar feststellen, dass Sie `map` zwar importiert, aber nie aufgerufen haben – es handelt sich also um „toten Code“. Dadurch kann er darauf verzichten, `big-library` überhaupt einzubinden.

> [!NOTE]
> Sie fragen sich vielleicht, warum ein solcher Import bestehen bleiben sollte, wenn er nicht verwendet wird. Der Grund ist, dass er möglicherweise nur unter bestimmten Bedingungen verwendet wird und die Bedingung erst beim Erstellen feststeht. Zum Beispiel:
>
> ```js
> if (import.meta.env.PROD) {
>   map();
> } else {
>   someOtherCode();
> }
> ```
>
> Der Bundler legt den Wert von `import.meta.env.PROD` beim Erstellen statisch fest. Ist er `false`, enthält das endgültige Bundle nur den Zweig mit `someOtherCode()`, und der `import` wird nicht mehr benötigt.

Das bedeutet nicht, dass das gesamte Modul verworfen werden kann: Seine Ausführung kann Seiteneffekte haben, etwa einen Event Listener registrieren oder ein globales Objekt verändern. Daher kann nach dem Entfernen toten Codes ein Import allein wegen seiner Seiteneffekte übrig bleiben, etwa `import "big-library";`, während alle ungenutzten Deklarationen innerhalb dieses Moduls entfernt werden. Einige Bundler beachten ein Feld `"sideEffects"` in `package.json`, das Dateien kennzeichnet, deren Ausführung erhalten bleiben muss. Wenn der Import Ihres Pakets keine Seiteneffekte hat – einschließlich CSS-Dateien, die angewendet werden müssen –, können Sie `"sideEffects": false` setzen. So können Bundler den gesamten `import` weglassen.

Beim Bündeln entsteht nicht zwangsläufig nur eine Datei. Durch Code-Splitting kann ein Bundler dynamisch importierten Code in separate Dateien, sogenannte _Chunks_, auslagern, die bei Bedarf geladen werden. Das ist nützlich, weil beim Start weniger Code geladen werden muss und Code, den Nutzer möglicherweise nicht benötigen, gar nicht geladen wird. Manche Bundler teilen Code automatisch auf; in der Regel müssen Sie Code-Splitting jedoch ausdrücklich mit [dynamischen Importen](https://vite.dev/guide/features.html#dynamic-import) auslösen:

```js
button.addEventListener("click", async () => {
  const { showChart } = await import("./chart.js");
  showChart();
});
```

Je nach Build-Konfiguration können `chart.js` und seine Abhängigkeiten getrennt vom anfänglichen Anwendungscode ausgegeben werden. Der Bundler schreibt den Import so um, dass er den erzeugten Chunk lädt:

```js
button.addEventListener("click", async () => {
  // A unique hash is appended for caching purposes
  const { showChart } = await import("./chart-ABCDEF.js");
  showChart();
});
```

Sie müssen diese zusätzlichen Dateien zusammen mit der Einstiegsdatei bereitstellen.

Der Bundler muss beim Erstellen erkennen können, welche Module eingebunden werden sollen. Natives `import()` akzeptiert zur Laufzeit eine beliebige Zeichenfolge. Wenn Sie jedoch `import(someVariable)` schreiben und der Bundler nicht statisch ermitteln kann, welche Werte `someVariable` annehmen könnte, kann er die benötigten Dateien möglicherweise nicht bündeln. Die Unterstützung für [variable Modulbezeichner](https://vite.dev/guide/features.html#dynamic-import) unterscheidet sich je nach Werkzeug. Bei einer bekannten Menge von Modulen machen ausdrücklich aufgeführte Importe die Abhängigkeiten deutlich:

```js example-bad
// A bundler may need to bundle everything under shapes/
const shape = await import(`./shapes/${shapeName}.js`);
```

```js
// The bundler knows exactly which files to bundle
const loaders = {
  square: () => import("./shapes/square.js"),
  circle: () => import("./shapes/circle.js"),
};

const shape = await loaders[shapeName]();
```

Bundler können Abhängigkeiten auch _extern_ belassen. Das bedeutet, dass deren Code nicht im Bundle enthalten ist. Der [Bibliotheksmodus](https://vite.dev/guide/build.html#library-mode) von Vite unterstützt dies bei der Veröffentlichung einer Bibliothek, deren Nutzer eine Abhängigkeit selbst bereitstellen sollen. Wenn die Ausgabe weiterhin `import`- oder `require()`-Aufrufe für diese Abhängigkeiten enthält, muss die Laufzeitumgebung sie auflösen können. Ein bloßer Paketbezeichner in einer ESM-Ausgabe für Browser benötigt weiterhin eine Import-Map, selbst wenn der Bundler das Paket beim Erstellen finden konnte.

### Ressourcen, die kein JavaScript sind

Bundler können Importe von Ressourcen, die kein JavaScript sind, mithilfe integrierter Funktionen oder Plugins interpretieren. Vite unterstützt beispielsweise [CSS-Importe](https://vite.dev/guide/features.html#css) und [Importe statischer Assets](https://vite.dev/guide/assets.html#importing-asset-as-url):

```js
import "./styles.css";
import logoURL from "./logo.svg";
```

Während der Entwicklung fügt Vite das CSS in die Seite ein; beim Erstellen der Produktionsversion lagert es dieses normalerweise in ein separates Stylesheet aus. Der SVG-Import gibt eine Asset-URL zurück, die auf eine ausgegebene Bilddatei verweisen oder eine eingebettete Daten-URL sein kann. Diese Bedeutungen legt das Build-Werkzeug fest. Mit benutzerdefinierten Loadern können Sie auch eine eigene Zuordnung von `module specifier → module object` erstellen. Das ist nicht gleichbedeutend mit nativen [Importen von Modulen, die kein JavaScript sind](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#loading_non-javascript_resources): Diese verwenden Importattribute und folgen den Regeln der Laufzeitumgebung für Modultypen.

Lesen Sie die Dokumentation Ihres Bundlers, wenn Sie sich auf dessen Modulauflösung oder Ressourcenverarbeitung verlassen. Ein Import, der über einen Bundler funktioniert, benötigt möglicherweise eine andere Konfiguration, wenn er direkt von einer Laufzeitumgebung geladen wird. Informationen zu Code, der direkt in Browsern ausgeführt werden soll, finden Sie unter [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).

## Wie TypeScript Module versteht

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html) analysiert Module, um die Typen importierter Werte zu prüfen und beim Kompilieren JavaScript zu erzeugen, das für die Laufzeitumgebung oder den Bundler geeignet ist. Dazu muss TypeScript sowohl Ihren TypeScript-Quellcode als auch die Art verstehen, wie das erzeugte JavaScript geladen wird. Die Compileroptionen `module` und `moduleResolution` beschreiben das Modulformat und die Auflösungsregeln dieser Umgebung. Diese Einstellungen sind auch dann wichtig, wenn ein anderes Werkzeug das JavaScript erzeugt und TypeScript nur die Typen prüft.

In TypeScript ist eine Datei entweder ein Skript oder ein Modul – genau wie in [JavaScript selbst](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module). Ein solches „Modul“ ist aber nicht unbedingt ein „ES-Modul“; es kann beispielsweise auch CJS sein. Der wesentliche Unterschied besteht darin, dass Variablendeklarationen in Skripten automatisch im gesamten Projekt sichtbar sind, während Module einen eigenen Gültigkeitsbereich schaffen. Standardmäßig ist jede Datei mit einem `import` oder `export` auf oberster Ebene ein Modul. Manchmal kann daher ein ansonsten unnötiges `export {}` eine Datei als Modul kennzeichnen und verhindern, dass ihre Variablendeklarationen global werden. Mit der Option [`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html) können Sie erzwingen, dass alle Dateien außer Deklarationsdateien als Module behandelt werden.

### Das Modulformat

Dateien, die im Sinne von TypeScript „Module“ sind, können dennoch in verschiedene [Formate](#andere_modulformate) kompiliert werden, insbesondere ESM und CJS. AMD und UMD sind für Entwickler heute weniger relevant, da Sie den Bundler üblicherweise direkt mit dem TypeScript-Quellcode arbeiten lassen. `tsc` ist ausdrücklich kein Bundler und optimiert Ihren Code daher nicht für die Bereitstellung im Web.

`tsc` ist ein Transpiler und kann ESM-Syntax in CJS kompilieren. Die TypeScript-Dokumentation empfiehlt inzwischen die Option [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax). Sie macht das Verhalten der Modulsyn­tax leichter nachvollziehbar: Beispielsweise müssen Sie sich keine Gedanken darüber machen, in was `import x from "mod"` kompiliert wird. Die folgenden Erläuterungen setzen voraus, dass diese Option aktiviert ist.

TypeScript bietet zwei Arten von Modulsyn­tax. Zum einen gibt es die vertraute ES-Syntax {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}} für einzelne benannte Exporte oder Standardexporte. Zum anderen gibt es die spezielle CJS-Syntax, die sich auf das gesamte `module.exports`-Objekt bezieht.

```ts
import x = require("mod");
// Compiled to: const x = require("mod");

export = x;
// Compiled to: module.exports = x;
```

Mit `verbatimModuleSyntax` meldet TypeScript einen Fehler, wenn ES-Import-/Export-Syntax zu CJS kompiliert würde. Mit den Node.js-Moduloptionen funktioniert die Syntax `import = require()` sowohl in CJS als auch in ESM; im zweiten Fall wird ein `createRequire`-Aufruf erzeugt. `export =` funktioniert dagegen nur in CJS.

Den Modultyp legen Sie mit der Option [`module`](https://www.typescriptlang.org/tsconfig/#module) fest. Es gibt viele Auswahlmöglichkeiten, ähnlich wie bei einem Transpiler. Wahrscheinlich möchten Sie eine der folgenden verwenden:

- `"nodenext"`, wenn Sie Code für Node.js-kompatible Laufzeitumgebungen ausgeben. Diese Einstellung verwendet den [Erkennungsalgorithmus von Node.js](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#using_modules_in_node.js), um zwischen CJS und ESM zu wählen. Dazu gehören beispielsweise `.mts` – das `.ts`-Gegenstück zu `.mjs` – und `"type": "module"`. Es gibt auch versionsgebundene Werte wie `"node16"`; verwenden Sie diese aber nur, wenn Sie neues Verhalten ausdrücklich vermeiden möchten. TypeScript [empfiehlt](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) diese Option auch für Code, der nativ in Browsern ausgeführt werden soll, weil es dafür `"moduleResolution": "nodenext"` empfiehlt und diese Einstellung `"module": "nodenext"` voraussetzt.
- `"preserve"`, wenn Sie Code für Bundler oder Bun ausgeben. Das Modulformat bleibt unverändert; `import = require()` und `export =` werden zu CJS kompiliert.
- `"esnext"`, wenn Sie ESM-Syntax ohne Transformationen erzwingen möchten. Es wird ausschließlich ESM ausgegeben; `import = require()` und `export =` führen zu Fehlern. Es gibt auch versionsgebundene Werte wie `"es2020"`; verwenden Sie diese aber nur, wenn Sie neues Verhalten ausdrücklich vermeiden möchten.

Die Option `module` bestimmt außerdem, ob Sie auf `import.meta` zugreifen, `await` auf oberster Ebene verwenden und andere ES-Module importieren können. In typischen Umgebungen liefert allein das Setzen dieser Option wahrscheinlich sinnvolle Standardwerte für die meisten anderen Optionen.

### Auflösung von Modulbezeichnern

TypeScript bildet die Auflösungslogik der Umgebung nach, in der das erzeugte JavaScript ausgeführt werden soll. Deshalb müssen Sie mit [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution) festlegen, welche Auflösungsregeln verwendet werden. Derzeit werden nur folgende Werte empfohlen:

- `"nodenext"`, wenn Sie Code für Node.js-kompatible Laufzeitumgebungen ausgeben. Diese Einstellung verwendet den [Auflösungsalgorithmus von Node.js](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#using_modules_in_node.js). Es gibt auch versionsgebundene Werte wie `"node16"`; verwenden Sie diese aber nur, wenn Sie neues Verhalten ausdrücklich vermeiden möchten.
- `"bundler"`, wenn Sie Code für Bundler oder Bun ausgeben. Diese Einstellung verwendet [Auflösungsregeln, die von den meisten Bundlern unterstützt werden](/de/docs/Web/JavaScript/Guide/Modules/Modules_across_platforms#module_resolution). Im Wesentlichen handelt es sich um die Node-Auflösung, ohne dass Dateierweiterungen ausdrücklich angegeben werden müssen.

Für Code, der direkt in Browsern ausgeführt werden soll, bietet TypeScript keine eigene Browser-Auflösung. Die [empfohlene Annäherung](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) verwendet `"nodenext"` für `moduleResolution`, was gleichzeitig `module: "nodenext"` erfordert. Sowohl `"nodenext"` als auch `"bundler"` unterstützen jedoch mehr, als Browser selbst können. Achten Sie daher darauf, keine Node-spezifischen Funktionen zu verwenden, die Browser nicht nativ verstehen, etwa Paketimporte oder den Import von CommonJS.

TypeScript liest weder Ihre Bundler-Konfiguration noch Import-Maps, um benutzerdefinierte Regeln zur Auflösung von Modulbezeichnern nachzubilden. Sie können die Option [`paths`](https://www.typescriptlang.org/tsconfig/#paths) verwenden. Stellen Sie beim oben gezeigten Vite-Alias sicher, dass TypeScript und Vite `@shapes/square` zum selben Modul auflösen. TypeScript bietet weitere [Konfigurationsoptionen](https://www.typescriptlang.org/tsconfig/#Modules_6244), die ebenfalls sicherstellen sollen, dass TypeScript die Auflösung von Modulbezeichnern zur Laufzeit nachbilden kann.

Wie bei Transpilern werden Modulbezeichner standardmäßig unverändert übernommen. Pfadaliase aus `paths` werden nicht umgeschrieben. Verwenden Sie diese Option also nur, wenn nachgelagerte Werkzeuge Ihre Pfadaliase verstehen. Außerdem verweisen Sie weiterhin mit `.js` auf eine `.ts`-Datei, weil dies die Datei ist, die Sie zur Laufzeit tatsächlich importieren.

```ts
// -- src/main.ts --
import { area } from "./square.js";
// TypeScript can check this import against src/square.ts
// The emitted JavaScript still imports ./square.js
```

Standardmäßig meldet TypeScript sogar Fehler bei Importen mit `.ts`, weil diese nach dem Kompilieren zu JavaScript wahrscheinlich nicht mehr funktionieren. Wenn Sie überhaupt nicht kompilieren müssen und TypeScript nativ ausführen möchten – entweder über einen Bundler oder in einer Laufzeitumgebung mit TypeScript-Unterstützung –, können Sie [`allowImportingTsExtensions`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions) aktivieren, um diese Fehler zu unterdrücken. Mit der Option [`rewriteRelativeImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteRelativeImportExtensions) können Sie beim Ausgeben des Codes relative Importe, die auf `.ts`, `.tsx`, `.mts` oder `.cts` enden, auf ihre JavaScript-Erweiterungen umschreiben lassen. Diese Option wird normalerweise nur verwendet, wenn Sie TypeScript gleichzeitig nativ ausführen und ausführbares JavaScript erzeugen möchten.

### Import und Export von Typen

Innerhalb eines Moduls können Sie mit TypeScript neben JavaScript-Werten auch Typen importieren und exportieren. Die Formen [`import type` und `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax) werden aus dem ausgegebenen JavaScript entfernt. Wenn Sie Typen und Werte gemeinsam importieren, können Sie auch einzelne Bindungen mit `type` kennzeichnen, sodass nur diese Bindungen entfernt werden.

```ts
import { area, type Shape } from "./shapes.js"; // Only "type Shape" removed
import type { Square } from "./square.js"; // Entire declaration removed
```

Bei `import { type Shape }` bleibt eine Deklaration `import {} from "./shapes.js"` bestehen, die das Modul weiterhin lädt und auswertet.

### Moduldeklarationen

Wenn Sie Werte aus lokalen Dateien importieren, liest TypeScript den TypeScript-Quellcode des Zielmoduls direkt, um deren Typen zu verstehen. Das ist aufwendig. Für veröffentlichte Bibliotheken empfiehlt TypeScript, _Deklarationsdateien_ mit der Erweiterung `.d.ts` zu erzeugen. So muss es nicht die gesamte Quelldatei lesen. Die `.d.ts`-Datei wird üblicherweise von `tsc` erzeugt und enthält Typdeklarationen statt ausführbarer Implementierungen.

```ts
// -- src/square.ts --
export function area(side: number) {
  return side ** 2;
}
```

```ts
// -- dist/square.d.ts --
export function area(side: number): number;
```

Selbst wenn Ihr Projekt in JavaScript geschrieben ist, sollten Sie erwägen, eine von Hand geschriebene `.d.ts`-Datei zu veröffentlichen, damit Ihre Nutzer die richtigen Typdefinitionen erhalten. Im Allgemeinen kann TypeScript beim Import des Paketquellcodes die passende `.d.ts`-Datei automatisch finden. Weitere Informationen finden Sie im [Leitfaden zu TypeScript-Deklarationsdateien](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## „Isomorphe“ Module

Die Einführung von Modulen fördert die modulare Verteilung und Wiederverwendung von Code im JavaScript-Ökosystem. Das bedeutet jedoch nicht zwangsläufig, dass ein JavaScript-Codeabschnitt in jeder Umgebung ausgeführt werden kann. Angenommen, Sie finden ein Modul, das SHA-Hashes für die Passwörter Ihrer Nutzer erzeugt. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es kommt darauf an.

Module haben weiterhin Zugriff auf globale Variablen, wie unter [Was ist ein Modul?](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module) gezeigt. Wenn ein Modul auf globale Variablen wie `window` zugreift, kann es im Browser ausgeführt werden. Auf Ihrem Node.js-Server löst es jedoch einen Fehler aus, weil `window` dort nicht verfügbar ist. Wenn der Code für seine Funktion auf `process` angewiesen ist, kann er entsprechend nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu erhöhen, wird häufig empfohlen, den Code „isomorph“ zu gestalten – er soll sich also in jeder Laufzeitumgebung gleich verhalten. Dafür gibt es drei übliche Ansätze:

- Trennen Sie Ihre Module in „Kern“ und „Anbindung“. Konzentrieren Sie sich im „Kern“ auf reine JavaScript-Logik, etwa die Berechnung eines Hashes, ohne Zugriff auf DOM, Netzwerk oder Dateisystem, und stellen Sie Hilfsfunktionen bereit. Im Teil für die „Anbindung“ können Sie aus dem globalen Kontext lesen und in ihn schreiben. Die „Browser-Anbindung“ könnte beispielsweise den Wert aus einem Eingabefeld lesen, während die „Node-Anbindung“ ihn aus `process.env` bezieht. In beiden Fällen werden die gelesenen Werte an dieselbe Kernfunktion weitergegeben und auf dieselbe Weise verarbeitet. Der Kern kann in jeder Umgebung importiert und gleich verwendet werden; nur die meist schlanke Anbindung muss plattformspezifisch sein.
- Prüfen Sie vor der Verwendung, ob eine bestimmte globale Variable vorhanden ist. Der folgende Code prüft beispielsweise, ob `process` definiert ist, bevor er aus `process.env` liest – was spezifisch für Node.js und ähnliche Umgebungen ist. Andernfalls prüft er, ob `window` definiert ist, bevor er aus dem DOM liest – was spezifisch für Browser und ähnliche Umgebungen ist.

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // We are running in Node.js; read it from `process.env`
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // We are running in the browser; read it from the input box
    password = document.getElementById("password").value;
  }
  ```

  Dieser Ansatz ist vorzuziehen, wenn beide Zweige tatsächlich dasselbe Verhalten ergeben, also „isomorph“ sind. Wenn dieselbe Funktionalität nicht bereitgestellt werden kann oder dafür erhebliche Mengen an Code geladen werden müssten, von denen ein großer Teil ungenutzt bliebe, sind unterschiedliche „Anbindungen“ die bessere Wahl.

- Verwenden Sie ein Polyfill als Ersatz für fehlende Funktionen. Wenn Sie beispielsweise die API [`DOMParser`](/de/docs/Web/API/DOMParser) zum Parsen von XML verwenden möchten, ist sie in Browsern verfügbar, aber nicht nativ in Node.js. Dort können Sie eine ähnliche API verwenden, etwa die von [`@xmldom/xmldom`](https://github.com/xmldom/xmldom). Mithilfe dynamischer Importe können Sie dies bedingt tun:

  ```js
  // myModule.js
  if (typeof DOMParser === "undefined") {
    // Use @xmldom/xmldom when no native DOMParser is available
    globalThis.DOMParser = (await import("@xmldom/xmldom")).DOMParser;
  }
  // …
  ```

  Die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist ein globales Objekt, das in jeder Umgebung verfügbar ist. Sie ist nützlich, wenn Sie innerhalb von Modulen globale Variablen lesen oder erstellen möchten.

Diese Vorgehensweisen gelten nicht nur für Module. Angesichts der zunehmenden Wiederverwendung und Modularisierung von Code empfiehlt es sich dennoch, Ihren Code plattformübergreifend zu gestalten, damit möglichst viele Menschen ihn nutzen können. Laufzeitumgebungen wie Node.js implementieren nach Möglichkeit ebenfalls aktiv Web-APIs, um die Interoperabilität mit dem Web zu verbessern.

## Siehe auch

- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
- [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)
- [Den Modulgraphen verstehen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph)
- [CommonJS-Modulspezifikation](https://wiki.commonjs.org/wiki/Modules/1.1.1)
- [AMD-Spezifikation](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)
- [UMD-Muster](https://github.com/umdjs/umd)
- [RequireJS-API](https://requirejs.org/docs/api.html)
- Node.js: [ECMAScript-Module](https://nodejs.org/api/esm.html), [CommonJS-Module](https://nodejs.org/api/modules.html) und [Pakete](https://nodejs.org/api/packages.html)
- [Module in Deno](https://docs.deno.com/runtime/fundamentals/modules/)
- [Modulauflösung in Bun](https://bun.sh/docs/runtime/module-resolution)
- [CommonJS-Modultransformation in Babel](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs)
- [Modulkonfiguration in SWC](https://swc.rs/docs/configuration/modules)
- TypeScript: [Theorie zu Modulen](https://www.typescriptlang.org/docs/handbook/modules/theory.html), [Modulreferenz](https://www.typescriptlang.org/docs/handbook/modules/reference.html) und [Auswahl von Compileroptionen](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
- Vite: [Vorab-Bündelung von Abhängigkeiten](https://vite.dev/guide/dep-pre-bundling.html), [Funktionen](https://vite.dev/guide/features.html) und [Bibliotheksmodus](https://vite.dev/guide/build.html#library-mode)
