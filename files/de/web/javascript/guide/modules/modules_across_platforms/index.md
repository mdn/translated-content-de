---
title: Module über Plattformen hinweg
slug: Web/JavaScript/Guide/Modules/Modules_across_platforms
l10n:
  sourceCommit: 1dc2c39b38fcfe047ea29d33a3d97c01b2791539
---

MDN konzentriert sich auf JavaScript im Browser, aber die meisten Entwickler arbeiten auch mit anderen Laufzeitumgebungen wie Node, Deno oder Bun. Es liegt nahe anzunehmen, dass die [Regeln für das Web](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web) überall gelten. Jede dieser Umgebungen – und viele Werkzeuge wie Bundler und Typprüfer – hat jedoch eigene Regeln dafür, wie Module aufgelöst und interpretiert werden. Dieser Abschnitt dokumentiert nicht jedes Detail von Umgebungen außerhalb des Browsers. Stattdessen bietet er ein Denkmodell für Module auf verschiedenen Plattformen und praktische Hinweise zum Schreiben portablen Modulcodes.

## Andere Modulformate

ECMAScript-Module (ESM) wurden erst fast 20 Jahre nach der Entstehung von JavaScript standardisiert und implementiert. Zu diesem Zeitpunkt waren die meisten Anwendungen bereits komplex genug, um Modulsysteme zu benötigen. Deshalb hatten Laufzeitumgebungen und Bundler verschiedene Alternativen implementiert.

Im Wesentlichen benötigt jedes Modulsystem drei Bestandteile:

- Den Modulcode mit einem eigenen Gültigkeitsbereich zur Kapselung von Variablen, beispielsweise durch eine Wrapper-Funktion.
- Ein Verfahren, mit dem das Modul seine Exporte deklarieren kann.
- Einen Importmechanismus, um ein anderes Modul zu identifizieren und auf dessen Exporte zuzugreifen.

### CommonJS

Node.js machte das [CommonJS](https://nodejs.org/api/modules.html)-System bekannt. In der CommonJS-Implementierung von Node.js wird jedes Modul implizit in eine Funktion eingeschlossen. Diese Funktion stellt im Gültigkeitsbereich des Moduls fünf Werte bereit: `exports`, `module`, `require`, `__dirname` und `__filename`. Der exportierte Wert jedes Moduls ist ein einzelner JavaScript-Wert in `module.exports`. Sie können diesen Wert abrufen, indem Sie `require()` mit der ID des Moduls aufrufen.

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

Anders als ESM, bei dem die [Auflösung von Spezifizierern](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web) vollständig von der Host-Umgebung bestimmt wird, legt CommonJS [einige Regeln](https://wiki.commonjs.org/wiki/Modules/1.1.1#Module_Identifiers) für Modul-IDs fest. Relative IDs, die mit `.` oder `..` beginnen, werden relativ zum aktuellen Modul aufgelöst. IDs der obersten Ebene, die mit keinem dieser Zeichen beginnen, werden relativ zu einem „module name space root“ aufgelöst. Node.js ergänzt die CommonJS-Spezifikation um einen [formalen Auflösungsalgorithmus](https://nodejs.org/api/modules.html#all-together). Dieser dient vielen Werkzeugen, die CJS unterstützen, darunter Bundlern und TypeScript, als Grundlage für die Auflösung. Insbesondere definiert die Auflösungslogik von Node.js den Ordner `node_modules` und legt fest, wie Importpfade auf Verzeichnisse aufgelöst werden: Sie verwendet die `package.json` oder `index.js` des Verzeichnisses.

### AMD

CommonJS funktioniert gut in Node.js, ist aber synchron. Für Browser ist das nachteilig, weil das Laden von Abhängigkeiten Netzwerkanfragen erfordern kann. [Asynchronous Module Definition (AMD)](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) ist in Browsern verbreiteter, da seine Importe asynchron sind. Bei AMD ruft jedes Modul `define()` mit einem Array von Abhängigkeits-IDs und einer Factory-Funktion auf. Der Loader löst die Abhängigkeiten auf, bevor er die Factory aufruft, und übergibt deren exportierte Werte als Argumente in derselben Reihenfolge. Die Factory kann einen Wert zurückgeben, der aus dem Modul exportiert wird.

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

Die Funktion `define()` wird von einem AMD-Loader wie [RequireJS](https://requirejs.org/docs/api.html) bereitgestellt und nicht von der Laufzeitumgebung selbst: Browser verstehen AMD nicht nativ. Ähnlich wie CommonJS unterstützt AMD relative Modul-IDs und IDs der obersten Ebene. Wie diese IDs Dateien zugeordnet werden, hängt vom Loader und seiner Konfiguration ab. RequireJS löst beispielsweise IDs der obersten Ebene normalerweise relativ zu einer konfigurierten `baseUrl` auf und ergänzt die Erweiterung `.js`. Modul-IDs lassen diese Erweiterung daher üblicherweise weg.

### UMD

Schon vor ESM bestand der Wunsch nach plattformübergreifenden Modulen! [Universal Module Definition (UMD)](https://github.com/umdjs/umd) umfasst Wrapper-Muster, mit denen dieselbe Datei in unterschiedlichen Modulsystemen funktioniert. Ein typischer UMD-Wrapper prüft zunächst, ob ein AMD-Loader vorhanden ist, dann, ob eine CommonJS-Umgebung vorliegt, und stellt das Modul andernfalls als globale Variable bereit. Jeder Zweig verwendet dieselbe Factory-Funktion, um den exportierten Wert des Moduls zu erzeugen.

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

Diese Datei kann nun ohne Änderungen am Quellcode sowohl in Node.js mit CommonJS als auch in Browsern mit AMD importiert werden. Im Zweig für globale Variablen müssen Sie die Abhängigkeiten selbst in der richtigen Reihenfolge laden, genau wie bei [klassischen globalen Skripten](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module).

UMD definiert keine eigenen Regeln zur Auflösung von Abhängigkeiten; diese Aufgabe übernehmen die AMD- und CommonJS-Zweige. UMD wird nur selten von Hand geschrieben. Üblicherweise wird es von [Bundlern](#bundler) und [Transpilern](#transpiler) erzeugt.

## Module in Node.js verwenden

Node.js unterstützt sowohl ESM- als auch CommonJS-Module. Bevor Node.js eine Datei ausführt, muss es entscheiden, ob sie CJS oder ESM ist. Aus Gründen der Abwärtskompatibilität verwendet Node.js ohne weitere Hinweise standardmäßig CJS – es sei denn, die Datei enthält ESM-spezifische Syntax wie `import`/`export`; dann wechselt es zu ESM. Um eine Datei ausdrücklich als ESM zu kennzeichnen, verwenden Sie die Erweiterung `.mjs` oder `.js` zusammen mit `"type": "module"` in der nächstgelegenen übergeordneten Datei `package.json`:

```json
{
  "type": "module"
}
```

Um eine Datei ausdrücklich als CJS zu kennzeichnen, verwenden Sie die Erweiterung `.cjs` oder `"type": "commonjs"` in der nächstgelegenen übergeordneten Datei `package.json`.

Erstellen Sie beispielsweise die folgenden zwei Dateien im selben Verzeichnis wie `package.json` (die `"type": "module"` enthält):

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

Node ESM stellt die modulspezifischen CJS-Variablen `__dirname`, `__filename`, `exports`, `module` und `require` nicht bereit. `exports` und `module` benötigen Sie wegen der `export`-Deklarationen wahrscheinlich nicht. `__dirname` und `__filename` können jedoch nützlich sein, um den Pfad des aktuellen Moduls zu ermitteln, und `require`, um eine Abhängigkeit synchron außerhalb der obersten Ebene zu laden. [`import.meta`](https://nodejs.org/api/esm.html#importmeta) ersetzt `__dirname` und `__filename` weitgehend und bietet Node-spezifische Eigenschaften wie `import.meta.dirname` und `import.meta.filename`. Wenn Sie Abhängigkeiten synchron laden möchten, stellt Node außerdem die Funktion [`createRequire`](https://nodejs.org/api/module.html#modulecreaterequirefilename) bereit, mit der Sie die Funktion `require` im Kontext dieses Moduls verfügbar machen können.

Node verwendet für ESM- und CJS-Modulspezifizierer unterschiedliche Auflösungsregeln. Seine ESM-Implementierung entspricht eher [der von Browsern](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#module_specifiers_on_the_web). Deshalb müssen Sie Dateierweiterungen angeben, etwa `"./square.js"` statt `"./square"`. Um mit dem bestehenden Ökosystem kompatibel zu bleiben, löst Node.js einfache Namen weiterhin zu installierten Paketen in `node_modules` auf. Integrierte Module stellt es über das Protokoll `node:` bereit.

```js
import { readFile } from "node:fs/promises"; // Import from built-in module
import _ from "lodash"; // Import from package in node_modules

const text = await readFile(new URL("./data.txt", import.meta.url), "utf8");
const wordCounts = _.countBy(_.words(text));
```

Ob die Auflösungsregeln für ESM- oder CJS-Spezifizierer gelten, hängt von der Importmethode ab, nicht vom Zielmodul. Mit `require` verwenden Sie CJS-Modulspezifizierer – auch bei Funktionen, die mit `createRequire` in ES-Modulen erstellt wurden. Mit `import` verwenden Sie ESM-Spezifizierer, auch bei dynamischen Importen in CJS-Modulen.

Die Auflösung von Spezifizierern in Node bietet weitere Funktionen, beispielsweise Import-Aliasse über `"imports"` in `package.json`. Weitere Informationen zu den Laderegeln und APIs finden Sie in der [Dokumentation zu ES-Modulen in Node.js](https://nodejs.org/api/esm.html).

### Zusammenspiel von ESM und CJS

In Node.js kann ein ES-Modul ein CJS-Modul importieren. Dabei wird der Wert von `module.exports` als Standardexport geladen:

```js
// -- main.mjs --
import square from "./square.cjs";

console.log(square.area(4)); // 16
```

Umgekehrt kann CommonJS-Code das asynchrone [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) verwenden, um ES-Module zu laden. Node.js unterstützt außerdem [`require()` für synchrone ES-Modulgraphen](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require):

```js
const square = require("./square.mjs");
// Assuming square.mjs and its dependencies do not use top-level await

console.log(square.area(4));

import("./module-with-top-level-await.mjs").then((mod) => {
  mod.foo();
});
```

Die einzige Einschränkung besteht darin, dass `require()` keinen Graphen laden kann, der [`await` auf oberster Ebene](/de/docs/Web/JavaScript/Guide/Modules#top-level_await) verwendet:

```js example-bad
const mod = require("./module-with-top-level-await.mjs");
// Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph with top-level await. Use import() instead.
```

Viele CJS-Pakete exportieren einzelne Namen, beispielsweise so:

```js
const { area } = require("./square.cjs");
```

Das lässt sich in ESM _nicht_ immer als benannter Import verwenden:

```js
import { area } from "./square.cjs";
```

Der Grund ist, dass [Module verknüpft werden müssen, bevor sie ausgewertet werden](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#from_module_source_to_execution). Node muss also feststellen können, ob ein Export namens `area` existiert, bevor `square.cjs` ausgeführt wird. Deshalb kann es nur nach bestimmten Codemustern suchen, etwa `module.exports = { area }` oder `module.exports.area = ...`. Das gelingt nicht in jedem Fall, insbesondere wenn CJS-Code von Hand geschrieben wurde und `module.exports` auf komplizierte Weise verändert. Die meisten gängigen, von Compilern erzeugten CJS-Muster lassen sich korrekt analysieren.

Im ungünstigsten Fall müssen Sie das gesamte `module.exports`-Objekt importieren und anschließend destrukturieren:

```js
import square from "./square.cjs";

const { area } = square;
```

Beachten Sie, dass CJS kein Konzept eines „Standardexports“ kennt. Wenn Sie ein CJS-Modul per Standardimport importieren, laden Sie tatsächlich das gesamte `module.exports`-Objekt. Darin können Eigenschaften enthalten sein, die konzeptionell „benannte Exporte“ darstellen. Compiler transpilieren `export default`-Deklarationen zu CJS-Code, der im Wesentlichen `module.exports.default = ...` entspricht. Dieser Wert kann nicht direkt in ein ES-Modul importiert werden: `import { default as area }` entspricht `import area` und lädt damit das gesamte `module.exports`-Objekt.

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

Wenn Sie ESM-Syntax schreiben, die zu CJS kompiliert und anschließend von nativen ES-Modulen importiert wird, sollten Sie deshalb Standardexporte vermeiden oder zusätzlich einen Alias als benannten Export bereitstellen.

```js
// -- square.js --
// Export the exact same value as the default export
export { area };
```

### Pakete

Bei der Veröffentlichung eines Pakets legt dessen [`"exports"`-Feld](https://nodejs.org/api/packages.html#package-entry-points) fest, welche Einstiegspunkte Nutzer importieren können. [Bedingte Exporte](https://nodejs.org/api/packages.html#conditional-exports) können für unterschiedliche Umgebungen oder Modulsysteme verschiedene Implementierungen auswählen. Diese Paketeinstellungen sind unabhängig von JavaScript-`export`-Deklarationen, die festlegen, welche Bindungen ein Modul bereitstellt. Das [`"main"`-Feld](https://nodejs.org/api/packages.html#main) ist inzwischen nicht mehr erforderlich und kann durch `"exports"` ersetzt werden.

Lange Zeit konnten CJS-Nutzer in Node ESM-Pakete nicht ohne das asynchrone `import()` importieren; die Unterstützung für das Laden von ESM mit `require()` kam erst deutlich später. Pakete, die natives ESM veröffentlichen wollten, mussten deshalb für Nutzer, die weiterhin CJS verwendeten, eine separate CJS-Version bereitstellen:

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

Diese Praxis wird als „Dual Packaging“ bezeichnet. In aktuellen Node.js-Versionen ist sie nicht mehr nötig, solange der Abhängigkeitsgraph des Pakets kein `await` auf oberster Ebene verwendet. Wenn verschiedene Teile Ihrer Anwendung dasselbe Paket in CJS- und ESM-Form laden, teilen sie möglicherweise nicht denselben Modulzustand. Dadurch können schwer erkennbare Fehler entstehen.

## Transpiler

In den vorherigen Abschnitten wurden Transpiler bereits kurz erwähnt. Sie wandeln bestimmte JavaScript-Syntax in andere JavaScript-Syntax um. Dazu gehört selbstverständlich auch die Umwandlung zwischen Modulformaten. Gängige Transpiler wie [Babel](https://babeljs.io/), [SWC](https://swc.rs/) und [tsc](https://www.typescriptlang.org/) können Module in nativer ESM-Syntax entgegennehmen und eines der [zuvor genannten Modulformate](#andere_modulformate) ausgeben.

Betrachten Sie beispielsweise den folgenden Quellcode:

```js
// -- src/square.js --
import * as rectangle from "./rectangle";

export function area(side) {
  return rectangle.area(side, side);
}
```

Wenn Sie ihn mit einem Transpiler in CJS umwandeln, könnte dieser Folgendes ausgeben:

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

Auch wenn Sie mit `import`- und `export`-Deklarationen schreiben und deshalb den Eindruck haben, ESM zu verwenden, schreiben Sie möglicherweise tatsächlich CJS-Code oder ein anderes Modulformat – sofern Sie Ihren Transpiler nicht so konfiguriert haben, dass er natives ESM ausgibt. Transpiler verarbeiten normalerweise nur einzelne Dateien und übernehmen Modulspezifizierer unverändert. Deshalb kann Code wie `import * as rectangle from "./rectangle"` trotz der fehlenden Erweiterung funktionieren: Er wird letztlich zu `require("./rectangle")` kompiliert, was in CJS gültig ist.

Transpiler sollen das Schreiben möglichst wie natives ESM erscheinen lassen, sofern sowohl das Zielmodul als auch das importierende Modul transpiliert werden. Insbesondere wandeln die meisten Transpiler `import rectangle from "./rectangle";` nicht immer so um, dass das gesamte `module.exports`-Objekt geladen wird. Beachten Sie im obigen Ausgabecode die Markierung `__esModule`. Sie zeigt an, dass dieses CJS-Modul durch die Transpilierung von ESM-Syntax entstanden ist. Ist diese Markierung vorhanden, kompilieren die meisten Transpiler Standardimporte so, dass sie `module.exports.default` lesen – also den Wert einer transpilierten `export default`-Deklaration. Andernfalls lesen sie `module.exports`.

Der Nachteil: Wenn nur eine Seite transpiliert wird, während die andere als natives ESM in Node ausgeführt wird, können plötzlich Unstimmigkeiten auftreten, wie unter [Zusammenspiel von ESM und CJS](#esmcjs_interop) beschrieben. Beispielsweise kann ein transpiliertes `export default` nicht mehr per Standardimport in nativem ESM importiert werden.

Lesen Sie die Dokumentation Ihres Transpilers oder führen Sie eigene Versuche durch, um zu verstehen, nach welchen Regeln verschiedene Arten von `import`- und `export`-Deklarationen transpiliert werden.

## Bundler

Bundler enthalten häufig Transpiler zur Umwandlung von Modulformaten. Sie gehen aber noch einen Schritt weiter und versuchen, den Abhängigkeitsgraphen zu verstehen, um ihn umzuwandeln und zu optimieren.

Ausgehend von einem oder mehreren Einstiegsmodulen verfolgt ein Bundler deren Abhängigkeiten und kombiniert den Code in Ausgabedateien. Ein sehr einfacher Bundler gibt nur eine einzige JavaScript-Datei aus – das „Bundle“. Es können aber auch mehrere Dateien erzeugt werden, insbesondere wenn dynamisches `import()` verwendet wird. Selbst wenn Sie ESM direkt ausführen möchten, sind Bundler sehr nützlich, weil sie wichtige Umwandlungen und Optimierungen vornehmen. Beispielsweise können mit [Vite](https://vite.dev/guide/) in ESM geschriebene Anwendungen durch [Vorab-Bündelung von Abhängigkeiten](https://vite.dev/guide/dep-pre-bundling.html) CommonJS- und UMD-Abhängigkeiten verwenden. Während der Entwicklung stellt Vite umgewandelte Module mithilfe von nativem ESM bereit; für die Produktion bündelt es die Anwendung zur Bereitstellung. Bundler sind auch außerhalb von Browsern nützlich: Selbst wenn Sie eine Node-Bibliothek oder -Anwendung entwickeln, können Sie mit einem Bundler die Codegröße optimieren und/oder nicht standardisierte Syntax verwenden.

Bundler sind keine JavaScript-Host-Umgebungen, denn sie _führen_ Code nicht _aus_. Sie analysieren Dateien lediglich statisch. Dennoch besitzen sie umfassende Regeln für den Umgang mit Modulen, vergleichbar mit Browsern oder Node.

### Modulauflösung

Anders als ein Transpiler, der Modulspezifizierer unverändert übernimmt, muss ein Bundler die einzubindenden Abhängigkeiten finden.

Die meisten Frontend-Pakete werden mit Node-Paketmanagern verwaltet und liegen im Ordner `node_modules`. Daher unterstützen Bundler standardmäßig Paketimporte nach Node-Art. Häufig unterstützen sie gleichzeitig die Auflösung nach ESM- und CJS-Art, also beispielsweise Verzeichnisimporte und Importe ohne Erweiterung. Sie können sich jedoch stärker an einer Variante orientieren, etwa wenn das Modul ausdrücklich die Erweiterung `.mjs` oder `.cjs` hat.

Bundler bieten oft konfigurierbare Auflösungsregeln. Mit der Option [`resolve.alias`](https://vite.dev/config/shared-options.html#resolve-alias) von Vite können Sie beispielsweise einen Alias konfigurieren:

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

Ihr Quellcode kann diesen Alias dann verwenden:

```js
import { area } from "@shapes/square";
```

Mit dieser Konfiguration kann Vite den Import zu `src/shapes/square.js` auflösen. Der Browser muss den Alias nicht verstehen, weil Vite den Import während der Entwicklung umschreibt und ihn beim Bündeln auflöst. Der ursprüngliche Quellcode kann allerdings nicht direkt in einem Browser ausgeführt werden, wenn keine Import Map eine entsprechende Zuordnung bereitstellt.

### Den Modulgraphen optimieren

Bundler fügen alle Dateien des Modulgraphen zusammen. Wenn Sie `lodash` importieren, kopieren Sie den gesamten Quellcode von [Lodash](https://lodash.com/) mit mehr als 100 Hilfsfunktionen in Ihr Bundle – das kann erheblich ins Gewicht fallen. Bundler können Code entfernen, den die Anwendung nicht verwendet. Dieser Vorgang wird üblicherweise als {{Glossary("tree_shaking", "Tree Shaking")}} bezeichnet. Die statischen Importe und Exporte von ESM helfen dem Bundler zu bestimmen, welche Bindungen verwendet werden.

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

Der Bundler kann erkennen, dass Ihre Anwendung die Exporte `filter` und `reduce` nie verwendet, und sie aus dem endgültigen Bundle entfernen. Er kann sogar noch einen Schritt weitergehen und feststellen, dass Sie `map` zwar importieren, aber nie aufrufen. Damit handelt es sich um ungenutzten Code, und der Bundler kann vermeiden, die gesamte `big-library` einzubinden.

> [!NOTE]
> Sie fragen sich vielleicht, warum ein ungenutzter Import überhaupt im Code bleibt. Er könnte unter einer Bedingung verwendet werden, deren Ergebnis zur Build-Zeit feststeht. Zum Beispiel:
>
> ```js
> if (import.meta.env.PROD) {
>   map();
> } else {
>   someOtherCode();
> }
> ```
>
> Der Wert von `import.meta.env.PROD` wird beim Build vom Bundler statisch gesetzt. Ist er `false`, enthält das endgültige Bundle nur den Zweig mit `someOtherCode()`, und der `import` wird nicht mehr verwendet.

Das bedeutet nicht, dass das gesamte Modul verworfen werden kann: Seine Ausführung kann Nebeneffekte haben, etwa einen Event-Listener registrieren oder ein globales Objekt verändern. Selbst nach dem Entfernen ungenutzten Codes kann deshalb ein Import allein wegen seiner Nebeneffekte wie `import "big-library";` übrig bleiben; dabei werden alle ungenutzten Deklarationen innerhalb dieses Moduls entfernt. Einige Bundler berücksichtigen ein `"sideEffects"`-Feld in `package.json`, das Dateien kennzeichnet, deren Ausführung erhalten bleiben muss. Wenn der Import Ihres Pakets keine Nebeneffekte hat – einschließlich anzuwendender CSS-Dateien –, können Sie `"sideEffects": false` setzen. Dadurch dürfen Bundler den gesamten `import` weglassen.

Beim Bündeln entsteht nicht zwangsläufig nur eine Datei. Durch Code-Splitting kann ein Bundler dynamisch importierten Code in separate Dateien, sogenannte _Chunks_, auslagern, die bei Bedarf geladen werden. Das ist nützlich, weil dadurch beim Start weniger Code geladen werden muss und Code, den Nutzer möglicherweise nicht benötigen, gar nicht erst geladen wird. Einige Bundler teilen Code automatisch auf. Im Allgemeinen müssen Sie Code-Splitting jedoch ausdrücklich durch [dynamische Importe](https://vite.dev/guide/features.html#dynamic-import) auslösen:

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

Der Bundler muss die einzubindenden Module beim Build erkennen können. Natives `import()` akzeptiert zur Laufzeit einen beliebigen String. Wenn Sie jedoch `import(someVariable)` schreiben und der Bundler nicht statisch bestimmen kann, welche Werte `someVariable` annehmen kann, bündelt er möglicherweise nicht alle erforderlichen Dateien. Die Unterstützung für [variable Modulspezifizierer](https://vite.dev/guide/features.html#dynamic-import) unterscheidet sich je nach Werkzeug. Bei einer bekannten Menge von Modulen macht eine ausdrückliche Auflistung der Importe die Abhängigkeiten eindeutig:

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

Bundler können Abhängigkeiten auch _extern_ belassen. Ihr Code wird dann nicht in das Bundle aufgenommen. Der [Bibliotheksmodus](https://vite.dev/guide/build.html#library-mode) von Vite unterstützt dies, wenn Sie eine Bibliothek veröffentlichen, deren Nutzer eine Abhängigkeit selbst bereitstellen sollen. Enthält die Ausgabe für diese Abhängigkeiten weiterhin `import`- oder `require()`-Aufrufe, muss die Laufzeitumgebung sie auflösen können. Ein einfacher Spezifizierer in einer ESM-Ausgabe für Browser benötigt weiterhin eine Import Map, selbst wenn der Bundler das Paket beim Build finden konnte.

### Ressourcen, die kein JavaScript sind

Bundler können Importe von Ressourcen, die kein JavaScript sind, mithilfe integrierter Funktionen oder Plugins interpretieren. Vite unterstützt beispielsweise [CSS-Importe](https://vite.dev/guide/features.html#css) und [Importe statischer Assets](https://vite.dev/guide/assets.html#importing-asset-as-url):

```js
import "./styles.css";
import logoURL from "./logo.svg";
```

Während der Entwicklung fügt Vite das CSS in die Seite ein; beim Produktions-Build extrahiert es das CSS normalerweise in ein separates Stylesheet. Der SVG-Import gibt eine Asset-URL zurück, die auf eine ausgegebene Bilddatei verweisen oder eine eingebettete Data-URL sein kann. Diese Bedeutung wird durch das Build-Werkzeug festgelegt. Mit eigenen Loadern können Sie auch eine benutzerdefinierte Zuordnung von `module specifier → module object` erstellen. Das ist nicht dasselbe wie native [Importe von Modulen, die kein JavaScript enthalten](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web#loading_non-javascript_resources): Diese verwenden Importattribute und folgen den Regeln der Laufzeitumgebung für Modultypen.

Lesen Sie die Dokumentation Ihres Bundlers, wenn Sie sich auf dessen Modulauflösung oder Verarbeitung von Ressourcen verlassen. Ein Import, der mit einem Bundler funktioniert, kann eine andere Konfiguration erfordern, wenn er direkt von einer Laufzeitumgebung geladen wird. Informationen zu Code, der direkt in Browsern ausgeführt werden soll, finden Sie unter [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web).

## Wie TypeScript Module versteht

[TypeScript](https://www.typescriptlang.org/docs/handbook/modules/theory.html) analysiert Module, um die Typen importierter Werte zu prüfen und beim Kompilieren JavaScript zu erzeugen, das für die Laufzeitumgebung oder den Bundler geeignet ist. Dafür muss TypeScript sowohl Ihren TypeScript-Quellcode als auch die Art verstehen, wie das resultierende JavaScript geladen wird. Die Compiler-Optionen `module` und `moduleResolution` beschreiben das Modulformat und die Auflösungsregeln dieser Umgebung. Diese Einstellungen sind auch dann wichtig, wenn ein anderes Werkzeug das JavaScript erzeugt und TypeScript nur die Typen prüft.

In TypeScript ist eine Datei entweder ein Skript oder ein Modul – genau wie bei [JavaScript selbst](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module). Ein solches „Modul“ muss allerdings nicht unbedingt ein „ES-Modul“ sein; es kann beispielsweise CJS sein. Der wichtigste Unterschied besteht darin, dass Variablendeklarationen in Skripten automatisch im gesamten Projekt sichtbar sind, während Module ihren eigenen Gültigkeitsbereich erzeugen. Standardmäßig ist jede Datei mit einem `import` oder `export` auf oberster Ebene ein Modul. Manchmal genügt daher ein ansonsten überflüssiges `export {}`, um eine Datei als Modul zu kennzeichnen und zu verhindern, dass ihre Variablendeklarationen global werden. Mit der Option [`moduleDetection`](https://www.typescriptlang.org/tsconfig/moduleDetection.html) können Sie erzwingen, dass alle Dateien außer Deklarationsdateien als Module behandelt werden.

### Das Modulformat

Dateien, die TypeScript als „Module“ versteht, können dennoch in verschiedene [Formate](#andere_modulformate) kompiliert werden, insbesondere ESM und CJS. AMD und UMD sind für Entwickler heute weniger relevant, weil Sie den Bundler üblicherweise direkt den TypeScript-Quellcode verarbeiten lassen. `tsc` ist ausdrücklich kein Bundler und optimiert Ihren Code daher nicht für die Bereitstellung im Web.

`tsc` ist ein Transpiler und kann ESM-Syntax in CJS kompilieren. Die TypeScript-Dokumentation empfiehlt inzwischen die Option [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax). Sie macht das Verhalten der Modulsystemsyntax leichter nachvollziehbar: Sie müssen sich beispielsweise nicht fragen, in was `import x from "mod"` kompiliert wird. Die folgenden Ausführungen setzen voraus, dass diese Option aktiviert ist.

TypeScript bietet zwei Arten von Modulsystemsyntax. Einerseits gibt es die vertraute ES-Syntax {{jsxref("Statements/import", "import")}} und {{jsxref("Statements/export", "export")}}, die einzelne benannte Exporte oder Standardexporte verarbeitet. Andererseits gibt es die spezielle CJS-Syntax, die das gesamte `module.exports`-Objekt verarbeitet.

```ts
import x = require("mod");
// Compiled to: const x = require("mod");

export = x;
// Compiled to: module.exports = x;
```

Mit `verbatimModuleSyntax` meldet TypeScript einen Fehler, wenn ES-Import-/Export-Syntax zu CJS kompiliert würde. Unter den Moduloptionen für Node.js funktioniert die Syntax `import = require()` sowohl in CJS als auch in ESM; im letzteren Fall wird ein `createRequire`-Aufruf erzeugt. `export =` funktioniert dagegen nur in CJS.

Den Modultyp legen Sie mit der Option [`module`](https://www.typescriptlang.org/tsconfig/#module) fest. Es gibt zwar viele Optionen, ähnlich wie bei einem Transpiler, aber wahrscheinlich möchten Sie eine der folgenden verwenden:

- `"nodenext"`, wenn Sie Code ausgeben, der in Node.js-kompatiblen Laufzeitumgebungen ausgeführt werden soll. Zur Auswahl zwischen CJS und ESM verwendet diese Einstellung den [Erkennungsalgorithmus von Node.js](#module_in_node.js_verwenden), beispielsweise anhand von `.mts` (dem `.ts`-Gegenstück zu `.mjs`) und `"type": "module"`. Es gibt auch versionsgebundene Werte wie `"node16"`, die Sie aber nur verwenden sollten, wenn Sie neues Verhalten ausdrücklich vermeiden möchten. TypeScript [empfiehlt](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) diese Option auch für Code, der nativ im Browser ausgeführt werden soll, weil dafür `"moduleResolution": "nodenext"` empfohlen wird und diese Einstellung `"module": "nodenext"` erfordert.
- `"preserve"`, wenn Sie Code für Bundler oder Bun ausgeben. Das Modulformat bleibt unverändert; `import = require()` und `export =` werden zu CJS kompiliert.
- `"esnext"`, wenn Sie ESM-Syntax ohne Umwandlungen erzwingen möchten. Die Ausgabe enthält ausschließlich ESM; `import = require()` und `export =` führen zu Fehlern. Es gibt auch versionsgebundene Werte wie `"es2020"`, die Sie aber nur verwenden sollten, wenn Sie neues Verhalten ausdrücklich vermeiden möchten.

Die Option `module` bestimmt außerdem, ob Sie auf `import.meta` zugreifen, `await` auf oberster Ebene verwenden oder andere ES-Module importieren können und mehr. In typischen Umgebungen liefert diese Option wahrscheinlich für die meisten anderen Optionen sinnvolle Standardeinstellungen.

### Auflösung von Spezifizierern

TypeScript bildet die Regeln zur Auflösung von Spezifizierern der Umgebung nach, in der das erzeugte JavaScript ausgeführt werden soll. Deshalb müssen Sie mit [`moduleResolution`](https://www.typescriptlang.org/tsconfig/#moduleResolution) festlegen, welche Auflösungsregeln verwendet werden. Derzeit werden nur folgende Werte empfohlen:

- `"nodenext"`, wenn Sie Code ausgeben, der in Node.js-kompatiblen Laufzeitumgebungen ausgeführt werden soll. Diese Einstellung verwendet den [Auflösungsalgorithmus von Node.js](#module_in_node.js_verwenden). Es gibt auch versionsgebundene Werte wie `"node16"`, die Sie aber nur verwenden sollten, wenn Sie neues Verhalten ausdrücklich vermeiden möchten.
- `"bundler"`, wenn Sie Code für Bundler oder Bun ausgeben. Diese Einstellung verwendet die [Auflösungsregeln, die die meisten Bundler gemeinsam unterstützen](#modulauflösung) – im Wesentlichen die Auflösung nach Node-Art, ohne ausdrücklich angegebene Erweiterungen zu verlangen.

Für Code, der direkt in Browsern ausgeführt werden soll, bietet TypeScript keine eigenen Auflösungsregeln für Browser. Die [empfohlene Annäherung](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html#im-writing-es-modules-for-the-browser-with-no-bundler-or-module-compiler) verwendet `"nodenext"` für `moduleResolution`; dadurch wird zugleich `module: "nodenext"` erforderlich. Sowohl `"nodenext"` als auch `"bundler"` unterstützen jedoch mehr als ein Browser nativ kann. Achten Sie daher darauf, keine Node-spezifischen Funktionen zu verwenden, die Browser nicht nativ verstehen, etwa Paketimporte oder den Import von CommonJS.

TypeScript liest weder Ihre Bundler-Konfiguration noch Import Maps, um benutzerdefinierte Regeln zur Auflösung von Spezifizierern nachzubilden. Sie können die Option [`paths`](https://www.typescriptlang.org/tsconfig/#paths) verwenden. Achten Sie beim oben gezeigten Vite-Alias darauf, dass TypeScript und Vite `@shapes/square` zum selben Modul auflösen. TypeScript bietet außerdem weitere [Konfigurationsoptionen](https://www.typescriptlang.org/tsconfig/#Modules_6244), damit es nachbilden kann, wie Spezifizierer zur Laufzeit aufgelöst werden.

Wie bei Transpilern werden Spezifizierer standardmäßig unverändert übernommen. Mit `paths` definierte Pfad-Aliasse werden nicht umgeschrieben. Verwenden Sie diese Option daher nur, wenn der nachgelagerte Verarbeiter Ihre Pfad-Aliasse selbst versteht. Außerdem verwenden Sie weiterhin `.js`, um auf eine `.ts`-Datei zu verweisen, denn zur Laufzeit importieren Sie die entsprechende JavaScript-Datei.

```ts
// -- src/main.ts --
import { area } from "./square.js";
// TypeScript can check this import against src/square.ts
// The emitted JavaScript still imports ./square.js
```

Tatsächlich meldet TypeScript bei `.ts`-Importen standardmäßig einen Fehler, weil sie nach der Kompilierung zu JavaScript wahrscheinlich nicht funktionieren. Wenn Sie gar nicht kompilieren müssen und TypeScript nativ ausführen möchten – entweder über einen Bundler oder in einer Laufzeitumgebung mit TypeScript-Unterstützung –, können Sie [`allowImportingTsExtensions`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions) aktivieren, um diese Fehler zu unterdrücken. Mit der Option [`rewriteRelativeImportExtensions`](https://www.typescriptlang.org/tsconfig/#rewriteRelativeImportExtensions) können Sie außerdem festlegen, dass relative Importe mit den Endungen `.ts`, `.tsx`, `.mts` oder `.cts` bei der Ausgabe auf ihre JavaScript-Erweiterungen umgeschrieben werden. Diese Option wird im Allgemeinen nur verwendet, wenn Sie TypeScript zugleich nativ ausführen und ausführbares JavaScript erzeugen möchten.

### Import und Export von Typen

Innerhalb eines Moduls können Sie mit TypeScript neben JavaScript-Werten auch Typen importieren und exportieren. Die Formen [`import type` und `export type`](https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax) werden aus dem ausgegebenen JavaScript entfernt. Wenn Sie Typen und Werte gemeinsam importieren, können Sie auch einzelne Bindungen mit `type` kennzeichnen, sodass nur diese Bindungen entfernt werden.

```ts
import { area, type Shape } from "./shapes.js"; // Only "type Shape" removed
import type { Square } from "./square.js"; // Entire declaration removed
```

Bei `import { type Shape }` bleibt eine Deklaration `import {} from "./shapes.js"` übrig. Das Modul wird dadurch weiterhin geladen und ausgewertet.

### Moduldeklarationen

Wenn Sie Werte aus lokalen Dateien importieren, liest TypeScript den TypeScript-Quellcode des Zielmoduls direkt, um deren Typen zu verstehen. Das ist aufwendig. Für veröffentlichte Bibliotheken empfiehlt TypeScript, _Deklarationsdateien_ mit der Erweiterung `.d.ts` zu erzeugen, damit nicht die gesamte Quelldatei gelesen werden muss. Die `.d.ts`-Datei wird üblicherweise von `tsc` erzeugt und enthält Typdeklarationen statt ausführbarer Implementierungen.

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

Selbst wenn Ihr Projekt JavaScript verwendet, sollten Sie erwägen, eine von Hand geschriebene `.d.ts`-Datei zu veröffentlichen, damit Ihre Nutzer die richtigen Typdefinitionen erhalten. In der Regel findet TypeScript beim Import des Paketquellcodes automatisch die passende `.d.ts`-Datei. Weitere Informationen finden Sie im [Leitfaden zu TypeScript-Deklarationsdateien](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html).

## „Isomorphe“ Module

Mit der Einführung von Modulen wird das JavaScript-Ökosystem dazu angeregt, Code modular bereitzustellen und wiederzuverwenden. Das bedeutet jedoch nicht zwangsläufig, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie finden ein Modul, das SHA-Hashes aus den Passwörtern Ihrer Nutzer erzeugt. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es kommt darauf an.

Module können weiterhin auf globale Variablen zugreifen, wie unter [Was ist ein Modul?](/de/docs/Web/JavaScript/Guide/Modules#whats_a_module) gezeigt wird. Wenn ein Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, löst aber auf Ihrem Node.js-Server einen Fehler aus, weil `window` dort nicht verfügbar ist. Ebenso kann Code, der für seine Funktion auf `process` zugreifen muss, nur in Node.js verwendet werden.

Um ein Modul möglichst gut wiederverwendbar zu machen, wird häufig empfohlen, den Code „isomorph“ zu gestalten – er soll sich also in jeder Laufzeitumgebung gleich verhalten. Dafür gibt es üblicherweise drei Ansätze:

- Trennen Sie Ihre Module in „Kern“ und „Anbindung“. Konzentrieren Sie sich beim Kern auf reine JavaScript-Logik, etwa die Berechnung eines Hashs, ohne Zugriff auf DOM, Netzwerk oder Dateisystem, und stellen Sie Hilfsfunktionen bereit. Die Anbindung kann aus dem globalen Kontext lesen und in ihn schreiben. Eine „Browser-Anbindung“ kann beispielsweise den Wert aus einem Eingabefeld lesen, während eine „Node-Anbindung“ ihn aus `process.env` liest. Die Werte werden in beiden Fällen an dieselbe Kernfunktion übergeben und auf dieselbe Weise verarbeitet. Der Kern kann in jeder Umgebung importiert und gleich verwendet werden; nur die meist schlanke Anbindung muss plattformspezifisch sein.
- Prüfen Sie vor der Verwendung, ob eine bestimmte globale Variable existiert. Der folgende Code prüft beispielsweise, ob `process` definiert ist, bevor er aus `process.env` liest – das ist spezifisch für Node.js und ähnliche Umgebungen. Andernfalls prüft er, ob `window` definiert ist, bevor er aus dem DOM liest – das ist spezifisch für Browser und ähnliche Umgebungen.

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

  Dieser Ansatz ist vorzuziehen, wenn beide Zweige tatsächlich zum gleichen Verhalten führen, also „isomorph“ sind. Ist es unmöglich, dieselbe Funktionalität bereitzustellen, oder müsste dafür viel Code geladen werden, der größtenteils ungenutzt bleibt, sind unterschiedliche „Anbindungen“ die bessere Wahl.

- Verwenden Sie ein Polyfill als Ersatz für fehlende Funktionen. Wenn Sie beispielsweise mit der API [`DOMParser`](/de/docs/Web/API/DOMParser) XML parsen möchten, steht diese in Browsern zur Verfügung, aber nicht nativ in Node.js. Dort können Sie eine ähnliche API verwenden, etwa die von [`@xmldom/xmldom`](https://github.com/xmldom/xmldom). Mithilfe dynamischer Importe können Sie dies bedingt tun:

  ```js
  // myModule.js
  if (typeof DOMParser === "undefined") {
    // Use @xmldom/xmldom when no native DOMParser is available
    globalThis.DOMParser = (await import("@xmldom/xmldom")).DOMParser;
  }
  // …
  ```

  Die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist ein globales Objekt, das in jeder Umgebung verfügbar ist. Sie ist nützlich, wenn Sie innerhalb von Modulen globale Variablen lesen oder erstellen möchten.

Diese Vorgehensweisen sind nicht auf Module beschränkt. Da die Wiederverwendung und Modularisierung von Code zunehmend wichtig sind, sollten Sie Ihren Code dennoch plattformübergreifend gestalten, damit möglichst viele Menschen ihn nutzen können. Laufzeitumgebungen wie Node.js implementieren nach Möglichkeit ebenfalls aktiv Web-APIs, um die Interoperabilität mit dem Web zu verbessern.

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
- [Umwandlung von CommonJS-Modulen in Babel](https://babeljs.io/docs/babel-plugin-transform-modules-commonjs)
- [Modulkonfiguration in SWC](https://swc.rs/docs/configuration/modules)
- TypeScript: [Modulkonzepte](https://www.typescriptlang.org/docs/handbook/modules/theory.html), [Modulreferenz](https://www.typescriptlang.org/docs/handbook/modules/reference.html) und [Compiler-Optionen auswählen](https://www.typescriptlang.org/docs/handbook/modules/guides/choosing-compiler-options.html)
- Vite: [Vorab-Bündelung von Abhängigkeiten](https://vite.dev/guide/dep-pre-bundling.html), [Funktionen](https://vite.dev/guide/features.html) und [Bibliotheksmodus](https://vite.dev/guide/build.html#library-mode)
