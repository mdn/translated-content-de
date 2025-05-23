---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden gibt Ihnen alles, was Sie brauchen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme haben klein angefangen — die meisten ihrer Anwendungsfälle in den frühen Tagen bestanden darin, isolierte Skripting-Aufgaben zu erledigen, um ein bisschen Interaktivität für Ihre Webseiten bereitzustellen, wo immer es nötig war, sodass große Skripte im Allgemeinen nicht benötigt wurden. Ein paar Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird ({{Glossary("Node.js", "Node.js")}}, zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus zum Aufteilen von JavaScript-Programmen in separate Module, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Modulanwendung ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modul-Systeme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation erforderlich ist. Das kann nur von Vorteil sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all die zusätzlichen clientseitigen Verarbeitungen und zusätzlichen Reisen durchzuführen. Es macht jedoch Bundler wie webpack nicht überflüssig — Bundler sind weiterhin gut darin, Code in angemessen große Stücke zu unterteilen und können andere Optimierungen wie Minifizierung, Eliminierung von totem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann Informationen über verschiedene Formen darauf zeichnen und berichten.

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar darzustellen.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur eines Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben Genannte sollte ziemlich vertraut werden.

Die zwei Module im Verzeichnis modules werden unten beschrieben:

- `canvas.js` — enthält Funktionen im Zusammenhang mit dem Einrichten des Canvas:

  - `create()` — erstellt ein Canvas mit einer angegebenen `width` (Breite) und `height` (Höhe) innerhalb eines umschließenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, das selbst in ein angegebenes Eltern-Element eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID der Umhüllung enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Umhüllungselements hinzugefügt wird, und die verwendet werden kann, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einem angegebenen Canvas mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, die Position und die Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.

### Beiseite — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, Sie sehen jedoch möglicherweise in anderen Ressourcen die `.mjs`-Erweiterung. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es sorgt für Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript darstellen.
- Es stellt sicher, dass Ihre Moduldateien von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst bei `.js` zu bleiben. Um Module korrekt in einem Browser zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, erhalten Sie einen strengen MIME-Typ-Fehler in der Art von "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet", und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn Sie das Potenzial haben, Ihren Server zu konfigurieren, um den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien zu setzen. Es könnte jedoch Verwirrung stiften, wenn Sie den Server, von dem Sie die Dateien bereitstellen, nicht kontrollieren oder wenn Sie Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich Wert auf die Klarheit legen, `.mjs` für Module zu verwenden, im Gegensatz zu `.js` für "normale" JavaScript-Dateien, aber nicht auf das oben beschriebene Problem stoßen möchten, könnten Sie immer noch `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools werden möglicherweise niemals `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun, um Zugang zu Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, sie zu nutzen, besteht darin, sie vor die zu exportierenden Elemente zu setzen, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Top-Level-Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Ein komfortablerer Weg, alle zu exportierenden Elemente zu exportieren, ist die Verwendung einer einzigen Export-Anweisung am Ende Ihrer Moduldatei, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldati umwandeln kann.
In einem Browser könnte dies ein Pfad relativ zur Website-Wurzel sein, der für unser Beispiel `basic-modules` /js-examples/module-examples/basic-modules sein würde.
Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Anweisung in der Bedeutung von "der aktuelle Ort", gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel wird weiterhin funktionieren, wenn Sie es an einen anderen Ort in der Website-Hierarchie verschieben.

Also zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in Aktion in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und auch keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#import_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Dateipfad definiert. Das Folgende findet sich in `main.js` unter den Import-Anweisungen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Importierte Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch die Eigenschaften von Objektwerten ändern. Der Wert kann nur durch das Modul neu zugewiesen werden, das ihn exportiert. Sehen Sie das [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Import von Modulen mit Importkarten

Wie oben gezeigt, kann ein Browser ein Modul mithilfe eines Modulspezifizierers importieren, der entweder eine absolute URL oder eine relative URL ist, die mithilfe der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Mappings (Import Maps)](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, im Modulspezifizierer beim Import eines Moduls nahezu jeden beliebigen Text zu spezifizieren; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die URL des Moduls aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in einer Importkarte unten ein "Modulspefizierer Mapping" JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die korrespondierenden Werte bei der Modul-URL-Auflösung ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs auf die Basis-URL des Dokuments aufgelöst, das die Importkarte enthält.

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

Die Importkarte wird mithilfe eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>` Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt definiert.
Beachten Sie, dass eine Importkarte nur auf das Dokument anzuwenden ist — die Spezifikation behandelt nicht den Fall einer Nutzung in einem Worker oder Worklet. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn es keinen Schrägstrich am Ende des Modulspezifizierers gibt, wird der gesamte Modulspezifizierer-Schlüssel gematcht und ersetzt.
Zum Beispiel werden unten "bare" Modulnamen gematcht und eine URL zu einem anderen Pfad umgeleitet.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen Schrägstrich am Ende hat, muss auch der Wert einen haben und der Schlüssel wird als "Pfadpräfix" gematcht.
Dies ermöglicht die Umleitung ganzer URL-Klassen.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Matches für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer `shapes/circle/` die Modulspezifiziererschlüssel `shapes/` und `shapes/circle/` matchen.
In diesem Fall wählt der Browser den spezifischsten (längsten) Modulspezifizierer-Schlüssel.

Mapping (Import Maps) ermöglichen es, Module mit "bare" Modulnamen zu importieren (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, erlauben sie auch den Import bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Scripts, das das Modul importiert.
Im Allgemeinen erlauben sie es Entwicklern, ergonomischeres Importieren von Code zu schreiben und die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Website verwendet werden, zu erleichtern.
Dies kann den Aufwand reduzieren, dieselben JavaScript-Bibliotheken sowohl auf dem Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben skizzierten Funktionen.

### Feature Detection

Sie können die Unterstützung für Importkarten mithilfe der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitreichend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als Bare Nams

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare Names für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulsnamen in einen Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square”-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare Names in einem Browser zu nutzen, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, die er benötigt, um Modulspezifizier zu URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn versucht wird, einen Modulspezifizierer zu importieren, der nicht auf einen Standort aufgelöst werden kann).

Im Folgenden sehen Sie eine Karte, die einen `square`-Modulspezifizierschlüssel definiert, der in diesem Fall zu einem relativen Adresswert auflöst.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen Bare Name verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleitung von Modulpfaden

Einträge in der Modulspezifiziererkarte, bei denen sowohl der Spezifizierschlüssel als auch sein zugehöriger Wert einen nachfolgenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht die Umleitung ganzer Sätze von Import-URLs von einem Ort zu einem anderen Ursprungsort.
Es kann auch verwendet werden, um zu simulieren, dass mit "Paketen und Modulen" gearbeitet wird, wie Sie es vielleicht im Node-Ökosystem sehen.

> [!NOTE]
> Der nachfolgende `/` zeigt an, dass der Modulspezifizierschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Ist dies nicht vorhanden, matcht der Browser nur (und ersetzt) den gesamten Modulspezifizierschlüssel.

#### Pakete von Modulen

Die folgende JSON-Importkarte-Definition mappt `lodash` als Bare Name und das Modulspezifizierer-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst auf die Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Mapping können Sie sowohl das gesamte "Paket" mit dem Bare Name als auch Module darin (mit dem Pfadmapping) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modulspezifizierschlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Das kann für nur ein Modul in Ordnung sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifizierschlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie möchten, dass ein Modul, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen umgeleitet wird.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gezielte Module für Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm zur Verwaltung von Modulen und deren Abhängigkeiten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Das Ergebnis ist, dass obwohl eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulnetzwerks enthält, die Benutzer müssen nicht über diese Komplexität nachdenken.

> [!NOTE]
> Sie können auch ein Versionsmanagement mithilfe relativer Pfade erreichen, jedoch ist dies suboptimal, da dies unter anderem eine bestimmte Struktur auf Ihr Projekt aufzwingt und Sie daran hindert, Bare-Modulnamen zu verwenden.

Importkarten ermöglichen es ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sich darauf zu beziehen, indem Sie denselben Modulspezifizierer verwenden.
Sie implementieren dies mit dem `scopes` Schlüssel, der es Ihnen ermöglicht, Modulspezifizierermaps bereitzustellen, die je nach Pfad des Scripts, das den Import durchführt, verwendet werden.
Das folgende Beispiel demonstriert dies.

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

Mit diesen Mapping, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Map in `imports` wird als Fallback verwendet, wenn keine passende Scope in der gezielten Map vorhanden ist, oder die passenden Scopes keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht passenden Scope-Pfad importiert wird, dann wird die Modulspezifiziererkarte in `imports` stattdessen verwendet, was auf die Version in `/node_modules/cool-module/index.js` verweist.

Beachten Sie, dass der Pfad, der verwendet wird, um eine Scopes anzuwenden, nicht beeinflusst, wie die Adresse aufgelöst wird.
Der Wert im zugeordneten Pfad muss nicht übereinstimmen mit dem Scope-Pfad und relative Pfade werden immer noch auf die Base-URL des Skripts aufgelöst, das die Importkarte enthält.

Wie bei Modulspezifizierermaps können Sie viele Scope-Schlüssel haben und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Scopes mit der Referenz-URL übereinstimmen, wird der spezifischste Scope-Pfad zuerst (der längste Scope-Schlüssel) aufgelöst, um einen passenden Spezifizierer zu finden.
Der Browser verwendet das nächste spezifischste übereinstimmende Scope-Pfad, wenn es keinen passenden Spezifizierer gibt, und so weiter.
Wenn es keinen passenden Spezifizierer in einem der passenden Scopes gibt, überprüft der Browser einen Match in der Modulspezifiziererkarte im `imports` Schlüssel.

### Verbesserung des Cachings durch Mapping von gehashten Dateinamen

Script-Dateien, die von Websites genutzt werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass wenn sich ein Modul ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert/regeneriert werden müssen.
Dies könnte zu einem Rutsch von Updates führen, den Netzwerk-Ressourcen verschwenden.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf bestimmte gehashte Dateinamen zu verlassen, beziehen sich Anwendungen und Skripte stattdessen auf eine ungehahte Version des Modulnamens (Adresse).
Eine Importkarte wie die untenstehende bietet dann eine Zuordnung zur tatsächlichen Script-Datei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, dann ändert sich sein Hash, der im Dateinamen enthalten ist, ebenfalls. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode eines JavaScript-Codes, der davon abhängt, nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modul-Architektur mit sich bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt importieren.

Sie müssen explizit angeben, um welche Art von Ressource es sich handelt, die Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Typen von Ressourcen zu importieren, verwenden Sie die [import-attributen](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Der Browser wird ebenfalls eine Validierung des Modultyps durchführen und scheitern, wenn, zum Beispiel `./data.json` nicht zu einer JSON-Datei gelöst werden kann. Das stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie beabsichtigen, Daten zu importieren. Einmal erfolgreich importiert, können Sie jetzt den importierten Wert als ein normales JavaScript-Objekt oder `CSSStyleSheet` Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anbringen des Moduls an Ihr HTML

Nun müssen wir nur noch das `main.js` Modul auf unserer HTML-Seite anwenden. Dies ist sehr ähnlich dazu, wie wir ein reguläres Skript auf einer Seite anwenden, mit ein paar bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Body des `<script>`-Elementes setzen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können nur `import`- und `export`-Anweisungen innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird geworfen, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten allgemein alle Ihre Module in separate Dateien definieren. Inline in HTML deklarierte Module können andere Module nur importieren, aber alles, was sie exportieren, ist für andere Module nicht zugänglich (da sie keine URL haben).

> [!NOTE]
> Module und deren Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), werden Sie CORS-Fehler aufgrund von JavaScript-Modul-Sicherheitsanforderungen erhalten. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein unterschiedliches Verhalten von in Modulen definierten Skripten im Vergleich zu klassischen Skripten erhalten. Das liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es besteht keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Reference/Elements/script#attributes)) beim Laden eines Moduls zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zuletzt, aber nicht zuletzt, stellen wir dies klar — Modulfunktionen werden in den Geltungsbereich eines einzigen Skripts importiert — sie sind im globalen Geltungsbereich nicht verfügbar. Daher werden Sie importierte Funktionen nur im Skript verwenden können, in das sie importiert werden, und Sie werden nicht in der Lage sein, auf sie von der JavaScript-Konsole aus zuzugreifen. Syntaxfehler werden weiterhin in den DevTools angezeigt, aber Sie können einige der Debugging-Techniken, die Sie möglicherweise erwartet haben, nicht verwenden.

In Modulen definierte Variablen sind im Bereich des Moduls, es sei denn, sie sind explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben der folgende Code:

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

Die Seite würde immer noch `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch in diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — das Einzige, was erforderlich ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standard-Exporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde beim Export mit seinem Namen referenziert, und dieser Name wurde auch beim Import zur Verfügung gestellt.

Es gibt auch eine Art Export, der als **Standard-Export** bezeichnet wird — dies ist dazu gedacht, es einfach zu machen, eine Standardfunktion bereitzustellen, und hilft JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie schön in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt; nach "Default exports" suchen).

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem Basic-Modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standard-Export bereitstellen, also schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` vor die Funktion setzen und diese als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Beachten Sie wiederum das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standard-Export pro Modul erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen von exportierten Objekten wird unten im Abschnitt [Renaming imports and exports](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Darstellungsmodule für Formzeichnen von Canvas in Ordnung zu arbeiten. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst? Diese Formen würden wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()` usw. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in das gleiche Top-Level-Modulfile zu importieren, würden wir mit Konflikten und Fehlern enden.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden diese in den folgenden Abschnitten betrachten.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion innerhalb des Top-Level-Moduls verwenden werden.

Zum Beispiel würde beides dasselbe tun, wenn auch auf leicht unterschiedliche Weise:

```js
// -- module.js --
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// -- main.js --
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// -- module.js --
export { function1, function2 };

// -- main.js --
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu beschreiben.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen zum Exportieren, und daher hat jedes dieselbe `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler werfen, wie zum Beispiel "SyntaxError: redeclaration of import name" (Firefox).

Stattdessen müssen wir die Importe so umbenennen, dass sie eindeutig sind:

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

Beachten Sie, dass Sie das Problem stattdessen in den Moduldaten lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, bleibt Ihnen überlassen, aber es wäre sinnvoll, den Modulcode unberührt zu lassen und die Änderungen in den Importen vorzunehmen. Das macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, die Sie nicht kontrollieren.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, ist jedoch ein wenig unordentlich und umständlich. Eine noch bessere Lösung ist es, die Funktionen des Moduls innerhalb eines Modulobjekts zu importieren. Der folgende Syntax-Formular macht dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle Exporte in `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv seinen eigenen Namespace gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns nochmals ein reales Beispiel an. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, werden Sie wieder dasselbe Beispiel sehen, aber umgeschrieben, um diese neue Syntax zu verwenden. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

```js
export { name, draw, reportArea, reportPerimeter };
```

Die Importe hingegen sehen so aus:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

In jedem Fall können Sie jetzt auf die Importe des Moduls zugreifen unter dem angegebenen Objektnamen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können den Code wie zuvor schreiben (sofern erforderlich, mit den Objektnamen), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir früher angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formzeichnungsmoduls mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis sehen. Zum Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) Datei jetzt alle Funktionalität in einer einzigen Klasse:

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

die wir dann exportieren:

```js
export { Square };
```

In [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir es so:

```js
import { Square } from "./modules/square.js";
```

und verwenden die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Vielleicht haben Sie mehrere Schichten an Abhängigkeiten, bei denen Sie alles vereinfachen möchten, indem Sie mehrere Teilmodule zu einem übergeordneten Modul kombinieren. Das ist möglich mit der Export-Syntax der folgenden Formen im übergeordneten Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Teilmodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Submodule ist der Export in der gleichen Form, z.B.

```js
export { Square };
```

Der nächste Schritt ist die Aggregation. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) haben wir die folgenden Zeilen hinzugefügt:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Submodule und machen sie effektiv über das `shapes.js` Modul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Grunde genommen durch die Datei weitergeleitet und existieren dort nicht wirklich, daher werden Sie keinen nützlichen verwandten Code in der gleichen Datei schreiben können.

Also können wir jetzt in der `main.js` Datei auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Linie ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modul-Loading

Eine Neuerung in der JavaScript-Modulfunktionalität ist das dynamische Modul-Loading. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dadurch eröffnen sich einige offensichtliche Leistungsverbesserungen; lassen Sie uns weiterlesen und sehen Sie, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, wobei der Pfad zum Modul als Parameter übergeben wird. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Creating a module object](#erstellen_eines_modulobjekts)) erfüllt ist, das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamische Importe sind im Browser-Hauptthread und in gemeinsamen und dedizierten Arbeitern erlaubt.
> `import()` wirft jedoch, wenn es in einem Service-Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Lassen Sie uns ein Beispiel betrachten. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel, das auf unserem Klassenbeispiel basiert. Dieses Mal jedoch wird nichts auf das Canvas gezeichnet, wenn das Beispiel geladen wird. Stattdessen haben wir drei Schaltflächen — "Circle", "Square" und "Triangle" —, die, wenn gedrückt, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulexporte bleiben wie zuvor.

In `main.js` haben wir einen Verweis auf jede Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Dann haben wir jeden Schaltfläche einen Ereignislistener zugefügt, sodass beim Drücken das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass die Erfüllung des Versprechens ein Modulobjekt zurückgibt, wodurch die Klasse dann zu einem Untermerkmal des Objekts wird. Daher müssen wir jetzt auf den Konstruktor mit `Module.` vorangestellt zugreifen, z.B., `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie jederzeit verfügbar sind, auch in Skriptumgebungen. Daher, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie trotzdem Code wiederverwenden, der als Module verteilt wurde, indem Sie ihn dynamisch importieren.

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

Top-Level-Warten ist eine Funktion, die innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass Code vor der Verwendung in Elternmodulen ausgewertet werden kann, jedoch ohne gleichzeitige Modulimporte zu blockieren.

Lassen Sie uns ein Beispiel anschauen. Sie können alle Dateien und den Code, die in diesem Abschnitt beschrieben werden, im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) finden, das auf den vorherigen Beispielen basiert.

Zuerst erstellen wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das einen Fetch-Aufruf verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, die exportiert wird. Dies bedeutet, dass andere Module, die dieses Modul einbeziehen, warten, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden können.

Lassen Sie uns dieses Modul in unser [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) einfügen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Zeichenfolgen, wenn wir unsere Formenfunktionen aufrufen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch das Laden anderer Module nicht blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` geladen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls verfügbar sind, auch vor der Stelle, die sie deklariert, und dass die Nebeneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes ausgeführt wird.

Zum Beispiel, in `main.js`, würde die Importdeklaration von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Trotzdem wird es als gute Praxis betrachtet, alle Ihre Importe oben im Code zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Imports

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der "Abhängigkeitsgraph" genannt wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einem Tiefen-First-Durchgang ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt auf `a` angewiesen ist. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (daher erlauben sie [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zum Zeitpunkt der Modulevaluierung weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes als normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Anschließend, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, daher werden die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, schlägt die Modulevaluierung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Das liegt daran, dass wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js` auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron zu verwenden, aber `a` asynchron, wird die Modulevaluierung erfolgreich:

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

Dies liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Sie sollten zyklische Importe in Ihrem Projekt normalerweise vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Eliminierung von Zyklen sind:

- Zusammenführen der beiden Module in eines.
- Verschieben des gemeinsam genutzten Codes in ein drittes Modul.
- Verschieben bestimmter Codes von einem Modul in das andere.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwer zu beheben ist.

## Autorisierung von "isomorphen" Modulen

Die Einführung von Modulen fördert das JavaScript-Ökosystem dazu, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie entdecken ein Modul, das SHA-Hashes des Passwortes Ihrer Benutzer generiert. Können Sie es im Frontend-Browser verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie bereits demonstriert. Wenn das Modul auf globale wie `window` verweist, kann es im Browser ausgeführt werden, aber es wird auf Ihrem Node.js-Server einen Fehler auslösen, weil `window` dort nicht verfügbar ist. Ähnlich kann der Code, der Zugriff auf `process` erfordert, nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen — das heißt, in jeder Laufzeitumgebung dasselbe Verhalten zu zeigen. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Binding". Für den "Kern" konzentrieren Sie sich auf die reine JavaScript-Logik wie das Berechnen des Hashs, ohne Zugang zum DOM, Netzwerk oder Dateisystem, und exponieren Sie Dienstprogramme. Für den "Binding"-Teil können Sie vom globalen Kontext lesen und auf ihn schreiben. Zum Beispiel kann die "Browser-Bindung" sich entscheiden, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" ihn von `process.env` lesen kann, aber Werte, die von beiden Orten gelesen werden, werden in dieselbe Kernfunktion geleitet und auf gleiche Weise bearbeitet. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Binding, die normalerweise leicht ist, spezifisch für die Plattform sein muss.
- Erkennen Sie, ob ein bestimmtes global existiert, bevor Sie es benutzen. Wenn Sie zum Beispiel überprüfen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht vom DOM lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten enden ("isomorph"). Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder dies erfordert, dass erhebliche Mengen an Code geladen werden, während ein großer Teil ungenutzt bleibt, sollten Sie besser verschiedene "Bindings" verwenden.

- Verwenden Sie eine Polyfill, um eine Fallback-Option für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die nur in Node.js seit v18 unterstützt wird, können Sie eine ähnliche API wie die, die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellt wird, verwenden. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Code-Wiederverwendbarkeit und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu machen, damit er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben dies zuvor erwähnt, aber um es zu wiederholen: `.mjs` Dateien müssen mit einem MIME-Type vom Typ `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Type, aber `text/javascript` wird empfohlen) geladen werden, ansonsten erhalten Sie einen Fehler wie "Der Server hat mit einem Nicht-JavaScript-MIME-Type geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), erhalten Sie CORS-Fehler aufgrund von JavaScript-Modulsicherheitsanforderungen. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages eignet sich ideal, da es auch `.mjs` Dateien mit dem richtigen MIME-Type serviert.
- Weil `.mjs` eine nicht standardisierte Dateierweiterung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie mit etwas anderem zu ersetzen. Zum Beispiel stellten wir fest, dass macOS stillschweigend `.js` an das Ende der `.mjs` Dateien anhängt und dann automatisch die Dateierweiterung verbirgt. Also kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verbergen der Dateierweiterungen deaktiviert haben und es so eingestellt haben, dass `.mjs` akzeptiert wird, war alles in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
