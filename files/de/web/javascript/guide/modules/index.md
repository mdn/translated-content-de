---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modul-Syntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen sehr klein - die meiste Nutzung in den frühen Tagen beschränkte sich auf isolierte Scripting-Aufgaben, die etwas Interaktivität auf Ihre Webseiten brachten, wo nötig, sodass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird ({{Glossary("Node.js", "Node.js")}} zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js hat diese Fähigkeit schon lange, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Funktionen für Module nativ, ohne dass eine Transpilation erforderlich ist. Das ist nur eine gute Sache - Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all die zusätzliche clientseitige Verarbeitung und zusätzliche Rundreisen zu machen. Es macht jedoch Bundler wie webpack nicht obsolet - Bundler leisten immer noch gute Arbeit beim Partitionieren von Code in vernünftig dimensionierte Stücke und können andere Optimierungen wie Minifizierung, Toter Code-Elimination und Tree-Shaking vornehmen.

## Ein Beispiel einführen

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf dem Canvas zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundlegende Beispielstruktur

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine Dateistruktur wie folgt:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben Gesagte sollte ziemlich vertraut werden.

Die zwei Module im Verzeichnis modules sind unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung des Canvas verbunden sind:

  - `create()` — erstellt ein Canvas mit einer angegebenen `width` und `height` in einem Wrapper-`<div>` mit einer angegebenen ID, die selbst in einem angegebenen Elternelement angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapperelements angehängt ist und die zum Ausgeben von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einem angegebenen Canvas mit angegebener Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.

### Beiseite — .mjs versus .js

Throughout this article, we've used `.js` extensions for our module files, but in other resources you may see the `.mjs` extension used instead. [V8's documentation recommends this](https://v8.dev/features/modules#mjs), for example. The reasons given are:

- It is good for clarity, i.e. it makes it clear which files are modules, and which are regular JavaScript.
- It ensures that your module files are parsed as a module by runtimes such as [Node.js](https://nodejs.org/api/esm.html#esm_enabling), and build tools such as [Babel](https://babeljs.io/docs/options#sourcetype).

However, we decided to keep using `.js`, at least for the moment. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a `Content-Type` header that contains a JavaScript MIME type such as `text/javascript`. If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript. Most servers already set the correct type for `.js` files, but not yet for `.mjs` files. Servers that already serve `.mjs` files correctly include [GitHub Pages](https://pages.github.com/) and [`http-server`](https://github.com/http-party/http-server#readme) for Node.js.

This is OK if you are using such an environment already, or if you aren't but you know what you are doing and have access (i.e. you can configure your server to set the correct [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) for `.mjs` files). It could however cause confusion if you don't control the server you are serving files from, or are publishing files for public use, as we are here.

For learning and portability purposes, we decided to keep to `.js`.

If you really value the clarity of using `.mjs` for modules versus using `.js` for "normal" JavaScript files, but don't want to run into the problem described above, you could always use `.mjs` during development and convert them to `.js` during your build step.

It is also worth noting that:

- Some tools may never support `.mjs`.
- The `<script type="module">` attribute is used to denote when a module is being pointed to, as you'll see below.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, diese zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, es zu verwenden, besteht darin, es vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, z.B.:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und - wie wir später sehen werden - Klassen exportieren. Sie müssen sich auf Top-Level-Elemente beziehen: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Methode, alle Elemente, die Sie exportieren möchten, zu exportieren, ist, eine einzige Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt von dem Schlüsselwort `from`, gefolgt von dem _Modulespezifizierer_.

Der _Modulespezifizierer_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann. In einem Browser könnte dies ein Pfad relativ zur Website-Wurzel sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Standort" zu bedeuten, gefolgt von dem relativen Pfad zur Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL tragbar machen - das Beispiel funktioniert weiterhin, wenn Sie es an eine andere Stelle in der Website-Hierarchie verschieben.

Zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in Aktion in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In some module systems, you can use a module specifier like `modules/square` that isn't a relative or absolute path, and that doesn't have a file extension.
> This kind of specifier can be used in a browser environment if you first define an [import map](#importieren_von_modulen_mit_importmaps).

Once you've imported the features into your script, you can use them just like they were defined inside the same file. The following is found in `main.js`, below the import lines:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> The imported values are read-only views of the features that were exported. Similar to `const` variables, you cannot re-assign the variable that was imported, but you can still modify properties of object values. The value can only be re-assigned by the module exporting it. See the [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) for an example.

## Importieren von Modulen mit Importmaps

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importmaps](/de/docs/Web/HTML/Element/script/type/importmap) erlauben es Entwicklern stattdessen, fast jeden beliebigen Text im Modulspezifizierer beim Importieren eines Moduls anzugeben; die Map liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der untenstehenden Importmap ein JSON-Objekt „Modulspezifizierer-Map“, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die entsprechenden Werte werden bei der Auflösung der Modul-URL durch den Browser ersetzt. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden in absolute URL-Adressen mit der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments aufgelöst, das die Importmap enthält.

```html
<script type="importmap">
  {
    "imports": {
      "shapes": "./shapes/square.js",
      "shapes/square": "./modules/shapes/square.js",
      "https://example.com/shapes/square.js": "./shapes/square.js",
      "https://example.com/shapes/": "/shapes/square/",
      "../shapes/square": "./shapes/square.js"
    }
  }
</script>
```

The import map is defined using a [JSON object](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) inside a `<script>` element with the `type` attribute set to [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap). There can only be one import map in the document, and because it is used to resolve which modules are loaded in both static and dynamic imports, it must be declared before any `<script>` elements that import modules. Note that the import map only applies to the document — the specification does not cover how to apply an import map in a worker or worklet context. <!-- https://github.com/WICG/import-maps/issues/2 -->

With this map you can now use the property names above as module specifiers. If there is no trailing forward slash on the module specifier key then the whole module specifier key is matched and substituted. For example, below we match bare module names, and remap a URL to another path.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

If the module specifier has a trailing forward slash then the value must have one as well, and the key is matched as a "path prefix". This allows remapping of whole classes of URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

It is possible for multiple keys in an import map to be valid matches for a module specifier. For example, a module specifier of `shapes/circle/` could match the module specifier keys `shapes/` and `shapes/circle/`. In this case the browser will select the most specific (longest) matching module specifier key.

Import maps allow modules to be imported using bare module names (as in Node.js), and can also simulate importing modules from packages, both with and without file extensions. While not shown above, they also allow particular versions of a library to be imported, based on the path of the script that is importing the module. Generally they let developers write more ergonomic import code, and make it easier to manage the different versions and dependencies of modules used by a site. This can reduce the effort required to use the same JavaScript libraries in both browser and server.

The following sections expand on the various features outlined above.

### Featureerkennung

Sie können die Unterstützung für Importmaps mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module als Bare-Namen importieren

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare-Namen für den Modulspezifizierer verwenden. Dies funktioniert, weil die Umgebung Modulnamen in einen Standardstandort im Dateisystem auflösen kann. Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare-Namen in einem Browser zu verwenden, benötigen Sie eine Importmap, die dem Browser die Informationen liefert, die zur Auflösung von Modulspezifizierern auf URLs benötigt werden (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht auf einen Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Map, die einen `square` Modulspezifizierer-Schlüssel definiert, der in diesem Fall auf einen relativen Adresswert abbgebildet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Map können wir jetzt einen Bare-Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleitung von Modulpfaden

Module specifier map entries, where both the specifier key and its associated value have a trailing forward slash (`/`), can be used as a path-prefix. This allows the remapping of a whole set of import URLs from one location to another. It can also be used to emulate working with "packages and modules", such as you might see in the Node ecosystem.

> [!NOTE]
> The trailing `/` indicates that the module specifier key can be substituted as _part_ of a module specifier.
> If this is not present, the browser will only match (and substitute) the whole module specifier key.

#### Pakete von Modulen

Die folgende JSON-Importmap-Definition ordnet `lodash` als Bare-Namen und den Module-Spezifizierer-Prefix `lodash/` dem Pfad `/node_modules/lodash-es/` zu (gelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" importieren, indem Sie den Bare-Namen verwenden, als auch Module innerhalb davon (indem Sie die Pfadzuordnung verwenden):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modul-Spezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden. Dies könnte für nur ein Modul sinnvoll sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein – er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein. Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource verwendet, mit Ihren eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Modul-Scopes für Versionsmanagement

Ecosystems like Node use package managers such as npm to manage modules and their dependencies. The package manager ensures that each module is separated from other modules and their dependencies. As a result, while a complex application might include the same module multiple times with several different versions in different parts of the module graph, users do not need to think about this complexity.

> [!NOTE]
> You can also achieve version management using relative paths, but this is subpar because, among other things, this forces a particular structure on your project, and prevents you from using bare module names.

Import maps similarly allow you to have multiple versions of dependencies in your application and refer to them using the same module specifier. You implement this with the `scopes` key, which allows you to provide module specifier maps that will be used depending on the path of the script performing the import. The example below demonstrates this.

```json
{
  "imports": {
    "cool-module": "/node_modules/cool-module/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "cool-module": "/node_modules/some/other/location/cool-module/index.js"
    }
  }
}
```

With this mapping, if a script with an URL that contains `/node_modules/dependency/` imports `cool-module`, the version in `/node_modules/some/other/location/cool-module/index.js` will be used. The map in `imports` is used as a fallback if there is no matching scope in the scoped map, or the matching scopes don't contain a matching specifier. For example, if `cool-module` is imported from a script with a non-matching scope path, then the module specifier map in `imports` will be used instead, mapping to the version in `/node_modules/cool-module/index.js`.

Note that the path used to select a scope does not affect how the address is resolved. The value in the mapped path does not have to match the scopes path, and relative paths are still resolved to the base URL of the script that contains the import map.

Just as for module specifier maps, you can have many scope keys, and these may contain overlapping paths. If multiple scopes match the referrer URL, then the most specific scope path is checked first (the longest scope key) for a matching specifier. The browsers will fall back to the next most specific matching scoped path if there is no matching specifier, and so on. If there is no matching specifier in any of the matching scopes, the browser checks for a match in the module specifier map in the `imports` key.

### Caching verbessern durch Umleitung von gecachten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gecachte Dateinamen, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, jeder Modul, der es mit seinem gecachten Dateinamen importiert, ebenfalls aktualisiert/neugeneriert werden muss. Dies führt möglicherweise zu einer Kaskade von Updates, die die Netzwerkressourcen verschwendet.

Importmaps bieten eine bequeme Lösung für dieses Problem. Anstatt sich auf spezifische gecachte Dateinamen zu verlassen, hängen Anwendungen und Skripte stattdessen von einer ungecachten Version des Modulnamens (Adresse) ab. Eine Importmap wie die folgende bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importmap aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln. Wir müssen die Quelle von JavaScript-Code, der davon abhängt, nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Beispielsweise können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen ausdrücklich angeben, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und löst einen Fehler aus, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die Syntax [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser validieren auch den Modultyp und schlagen fehl, wenn z.B. `./data.json` nicht auf eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald der Import erfolgreich ist, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt nutzen.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Nun müssen wir das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ähnelt sehr der Art und Weise, wie wir ein reguläres Skript auf eine Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Es wird ein Fehler ausgelöst, wenn Ihr `<script>`-Element nicht das Attribut `type="module"` hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten alle Ihre Module im Allgemeinen in separaten Dateien definieren. Module, die inline in HTML deklariert werden, können nur andere Module importieren, aber alles, was sie exportieren, ist für andere Module nicht zugänglich (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten - wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund von Sicherheitsanforderungen für JavaScript-Module. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten beobachten, die innerhalb von Modulen definiert sind, im Gegensatz zu klassischen Skripten. Dies liegt daran, dass Module automatisch den {{jsxref("Strict_mode", "Strict-Modus", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulscripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zu guter Letzt machen wir das klar - Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert - sie sind nicht im globalen Bereich verfügbar. Daher werden Sie nur auf importierte Funktionen in dem Skript zugreifen können, in das sie importiert wurden, und Sie werden nicht in der Lage sein, von der JavaScript-Konsole aus darauf zuzugreifen. Sie erhalten immer noch Syntaxfehler in den Entwicklertools angezeigt, aber Sie können einige der Debugging-Techniken, die Sie erwartet haben zu verwenden, nicht verwenden.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt angehängt. Andererseits sind global-definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, bei folgendem Code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <link rel="stylesheet" href="" />
  </head>
  <body>
    <div id="main"></div>
    <script>
      // A var statement creates a global variable.
      var text = "Hello";
    </script>
    <script type="module" src="./render.js"></script>
  </body>
</html>
```

```js
/* render.js */
document.getElementById("main").innerText = text;
```

würde die Seite immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Exportanweisung benötigt - das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexports versus benannte Exporte

Die Funktionalität, die wir bislang exportiert haben, besteht aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const` usw.) wurde beim Export mit seinem Namen bezeichnet, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, die als **Standardexport** bezeichnet wird — dies soll es einfach machen, eine Standardfunktion von einem Modul bereitzustellen, und hilft auch, dass JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen interoperieren (wie in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff gut erklärt; suchen Sie nach "Default exports").

Sehen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem `basic-modules` `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standard exportieren, also schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion voranstellen und sie als anonyme Funktion definieren, wie dies:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Beachten Sie auch hier das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax für das Umbenennen exportierter Elemente wird unten im Abschnitt [Importe und Exporte umbenennen](#importe_und_exporte_umbenennen) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Kanvas-Form-Zeichenmodule gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das das Zeichnen einer anderen Form wie eines Kreises oder Dreiecks behandelt? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()` usw.; Wenn wir versuchten, verschiedene Funktionen mit demselben Namen in dasselbe Top-Level-Modul zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden dies in den folgenden Abschnitten betrachten.

## Importe und Exporte umbenennen

In den geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionalnamen verwenden, um den Identifikationsnamen zu ändern, den Sie für ein Feature innerhalb des Top-Level-Moduls verwenden.

So würden zum Beispiel beide der folgenden im Wesentlichen dasselbe tun, wenn auch auf etwas andere Weise:

```js
// inside module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// inside main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Sehen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes am Ende dieselbe `export`-Anweisung:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) auslösen.

Stattdessen müssen wir die Importe so umbenennen, dass sie einzigartig sind:

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

Beachten Sie, dass Sie das Problem auch in den Moduldaten selbst lösen könnten, z.B.

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

und es würde genauso funktionieren. Welchen Stil Sie verwenden, bleibt Ihnen überlassen; es ist jedoch sinnvoller, Ihren Modulcode unverändert zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modul-Objekts

Die oben beschriebene Methode funktioniert gut, ist jedoch ein wenig unübersichtlich und umständlich. Eine noch bessere Lösung ist es, die Funktionen jedes Moduls innerhalb eines Modul-Objekts zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle im `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv seinen eigenen Namensraum gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Sehen wir uns erneut ein echtes Beispiel an. Wenn Sie in unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, jedoch umgeschrieben, um diesen neuen Code aus dieser Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

```js
export { name, draw, reportArea, reportPerimeter };
```

Die Importen hingegen sehen so aus:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, beispielsweise:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Also können Sie jetzt den Code genauso schreiben wie zuvor (solange Sie die Objektnamen bei Bedarf einfügen), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Zeichnermoduls für Formate mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Zum Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js)-Datei nun alle ihre Funktionen in einer einzigen Klasse:

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    // …
  }

  draw() {
    // …
  }

  // …
}
```

welche wir dann exportieren:

```js
export { Square };
```

Über in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js), importieren wir es so:

```js
import { Square } from "./modules/square.js";
```

Und verwenden dann die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregation von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie haben vielleicht mehrere Ebenen von Abhängigkeiten, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Submodule in ein übergeordnetes Modul kombinieren. Dies ist möglich, indem Sie Export-Syntax der folgenden Formen im übergeordneten Modul verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen aus `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Submodule in ein Unterverzeichnis im `modules`-Verzeichnis namens `shapes` verschoben. Also ist die Modulstruktur in diesem Beispiel:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Submodule ist der Export von derselben Form, z.B.

```js
export { Square };
```

Als Nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte von den einzelnen Submodulen und machen sie effektiv über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde genommen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code innerhalb derselben Datei schreiben können.

Also können wir jetzt in der `main.js`-Datei auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

mit der folgenden einzigen Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamische Modulladung

Eine kürzliche Ergänzung zur JavaScript-Modul-Funktionalität ist das dynamische Laden von Modulen. Dadurch können Sie Module dynamisch laden, nur wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungs Vorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Modulobjekt erfüllt (siehe [Ein Modulobjekt erstellen](#erstellen_eines_modul-objekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamic import is permitted in the browser main thread, and in shared and dedicated workers.
> However `import()` will throw if called in a service worker or worklet.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf dem Canvas, wenn das Beispiel geladen wird. Stattdessen fügen wir drei Buttons hinzu - "Circle", "Square" und "Triangle" -, die beim Drücken das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen - die Modulausgaben bleiben unverändert wie zuvor.

In `main.js` haben wir einen Verweis auf jeden Button mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, beispielsweise:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jedem Button einen Ereignislistener hinzu, sodass beim Drücken das entsprechende Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square1 = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square1.draw();
    square1.reportArea();
    square1.reportPerimeter();
  });
});
```

Beachten Sie, dass, da die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann als Subfeature des Objekts gemacht wird, weshalb wir jetzt den Konstruktor mit `Module.` davor verwenden müssen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Wenn Sie also bereits ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie trotzdem Code, der als Module verteilt wird, durch dynamisches Importieren wiederverwenden.

```html
<script>
  import("./modules/square.js").then((module) => {
    // Do something with the module.
  });
  // Other code that operates on the global scope and is not
  // ready to be refactored into modules yet.
  var btn = document.querySelector(".square");
</script>
```

## Top-Level-Await

Top-Level-Await ist ein Feature, das innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es erlaubt Modulen, wie große [asynchrone Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu wirken, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werde kann, jedoch ohne dass Geschwistermodule daran gehindert werden, geladen zu werden.

Lassen Sie uns ein Beispiel betrachten. Sie können alle Dateien und den Code, der in diesem Abschnitt beschrieben wird, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis finden, das auf den vorherigen Beispielen aufbaut.

Zuerst deklarieren wir unsere Farbpalette in einer separaten Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json):

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie hier die letzte Exportzeile.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Das bedeutet, dass alle anderen Module, die dieses Modul enthalten, warten, bis `colors` heruntergeladen und analysiert wurde, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einbeziehen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Strings, wenn wir unsere Formfunktionen aufrufen:

```js
const square1 = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle1 = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle1 = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

Das ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht die Möglichkeit blockieren, andere Module zu laden. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` gefethcht wird.

## Importdeklarationen sind gehoben

Importdeklarationen sind {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls auch vor der Stelle verfügbar sind, die sie deklariert, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der Rest des Codes des Moduls ausgeführt wird.

Zum Beispiel würde in `main.js` der Import von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es allgemein als gute Praxis angesehen, alle Ihre Importe an den Anfang des Codes zu stellen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einer Tiefensuche-Traversierung ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import tritt auf, wenn Modul `a` das Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Ein Beispiel:

```js
// -- a.js --
import { b } from "./b.js";

// -- b.js --
import { a } from "./a.js";

// Cycle:
// a.js ───> b.js
//  ^         │
//  └─────────┘
```

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (daher werden [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert wurde, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

```js
// -- a.js --
import { b } from "./b.js";

setTimeout(() => {
  console.log(b); // 1
}, 10);

export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);

export const b = 1;
```

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird, wenn das Modul ausgewertet wird, weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird, und die beiden `export`-Deklarationen produzieren die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

Wenn Sie den Code so ändern, dass `a` synchron verwendet wird, schlägt die Modulauswertung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Der Grund dafür ist, dass wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Wenn Sie andererseits den Code so ändern, dass `b` synchron, aber `a` asynchron verwendet wird, gelingt die Modulauswertung:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

console.log(b); // 1
export const a = 2;

// -- b.js --
import { a } from "./a.js";

setTimeout(() => {
  console.log(a); // 2
}, 10);
export const b = 1;
```

Der Grund dafür ist, dass die Auswertung von `b.js` normal abgeschlossen wird, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Sie sollten in der Regel zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Methoden zur Eliminierung von Zyklen sind:

- Kombinieren Sie die beiden Module zu einem.
- Verschieben Sie den gemeinsam genutzten Code in ein drittes Modul.
- Verschieben Sie einen Teil des Codes von einem Modul in das andere.

Zyklische Importe können jedoch auch auftreten, wenn Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Autorisierung von „isomorphen“ Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code in modularer Weise zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie entdecken ein Modul, das SHA-Hashes des Passworts eines Benutzers generiert. Können Sie es im Browserfrontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul Verweise auf globale Variablen wie `window` enthält, kann es im Browser laufen, aber auf Ihrem Node.js-Server einen Fehler verursachen, da `window` dort nicht verfügbar ist. Darüber hinaus, wenn der Code Zugriff auf `process` erfordert, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, er weist in jeder Laufzeitumgebung dasselbe Verhalten auf. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in „Kern“ und „Bindung“. Im Kern konzentrieren Sie sich auf die pure JavaScript-Logik wie das Berechnen des Hashs, ohne Zugriff auf DOM, Netzwerk, Dateisystem und stellen Sie Dienstprogrammfunktionen bereit. Beim Teil "Bindungen" können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel, die Browser-Bindungen könnten wählen, den Wert aus einem Eingabefeld zu lesen, während die Node-Bindungen ihn aus `process.env` lesen könnten, aber Werte von beiden stellen weiterhin dieselbe Kernfunktion bereit und werden auf dieselbe Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur die Bindung, die normalerweise leichtgewichtig ist, plattformabhängig sein muss.
- Überprüfen Sie, ob eine bestimmte globale Variable existiert, bevor Sie sie verwenden. Zum Beispiel, wenn Sie testen, ob `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht auf das DOM zugreifen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich im Endeffekt dasselbe Verhalten aufweisen (isomorph). Wenn es unmöglich ist, dieselbe Funktionalität zu bieten, oder wenn dies das Laden erheblicher Mengen von Code erfordert, während ein großer Teil ungenutzt bleibt, sollten besser unterschiedliche Bindungen verwendet werden.

- Verwenden Sie ein Polyfill, um eine Ausweichmöglichkeit für fehlende Funktionen bereitzustellen. Beispielsweise, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die erst seit Node.js v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Sie können dies dynamisch durch Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Code-Wiederverwendbarkeit und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu ergänzen, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strikten MIME-Typ-Überprüfungsfehler wie "The server responded with a non-JavaScript MIME type".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund von Sicherheitsanforderungen für JavaScript-Module. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem korrekten MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` ans Ende von `.mjs`-Dateien anfügte und dann die Dateierweiterung automatisch versteckte. Alle unsere Dateien waren daher tatsächlich `x.mjs.js`. Sobald wir das automatische Verstecken von Dateierweiterungen deaktivierten und es trainierten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
