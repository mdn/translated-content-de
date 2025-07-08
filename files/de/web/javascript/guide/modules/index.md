---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme waren ursprünglich recht klein – die meisten seiner Anwendungen in den frühen Tagen bestanden darin, isolierte Scripting-Aufgaben auszuführen, um Ihren Webseiten dort, wo es nötig war, ein wenig Interaktivität zu verleihen, so dass große Skripte in der Regel nicht erforderlich waren. Ein paar Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus zum Aufteilen von JavaScript-Programmen in separate Module, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Verwendung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ ohne Transpilation. Das kann nur positiv sein – Browser können das Laden von Modulen optimieren und effizienter gestalten, als wenn man eine Bibliothek verwenden und all die zusätzlichen Client-seitigen Verarbeitungen und zusätzlichen Rundreisen durchführen müsste. Es ersetzt jedoch nicht Bündler wie Webpack – Bündler leisten immer noch gute Arbeit beim Partitionieren von Code in sinnvoll große Stücke und können andere Optimierungen wie Minifizierung, Entfernung von nicht benötigtem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf die Leinwand zeichnen (und Informationen darüber berichten).

Diese sind relativ trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das obige sollte ziemlich vertraut werden.

Die beiden Module im Verzeichnis modules werden unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit dem Einrichten des Canvas zusammenhängen:
  - `create()` — erstellt ein Canvas mit einer angegebenen `width` und `height` innerhalb eines Wrapper-`<div>`-Elements mit einer angegebenen ID, das selbst innerhalb eines angegebenen Elternelements angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem angegebenen Wrapper-Element angefügt wird und zur Ausgabe von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf ein angegebenes Canvas mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, die Position und die Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.

### Nebenbei – .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung verwendet. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs) zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, das heißt, es macht deutlich, welche Dateien Module sind und welche normale JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst weiterhin `.js` zu verwenden. Damit Module im Browser korrekt funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strikten MIME-Typ-Überprüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie eine solche Umgebung bereits verwenden oder wenn nicht, aber Sie wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch Verwirrung stiften, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung bereitstellen, wie wir es hier tun.

Aus Lern- und Portabilitätsgründen haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich den Wert auf die Klarheit legen, `.mjs` für Module zu verwenden, im Gegensatz zu `.js` für "normale" JavaScript-Dateien, aber das oben beschriebene Problem vermeiden möchten, könnten Sie immer `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools unterstützen möglicherweise nie `.mjs`.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modul-Features

Das Erste, was Sie tun müssen, um Zugriff auf Modul-Features zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, sie zu verwenden, ist, sie vor alle Elemente zu stellen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Top-Level-Elemente sein: Sie können `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, ist die Verwendung einer einzigen Export-Anweisung am Ende Ihrer Modul-Datei, gefolgt von einer durch Komma getrennten Liste der Features, die Sie exportieren möchten, eingerahmt in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Features in Ihr Skript

Sobald Sie einige Features aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, sieht wie folgt aus:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Komma getrennten Liste der Features, die Sie importieren möchten, eingerahmt in geschweifte Klammern, gefolgt von dem Schlüsselwort `from`, gefolgt vom _Modul-Spezifizierer_.

Der _Modul-Spezifizierer_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann.
In einem Browser könnte dies ein Pfad relativ zur Site-Wurzel sein, der in unserem `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch die Punkt-Syntax (`.`), um den "aktuellen Speicherort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir finden möchten. Dies ist besser als jedes Mal den vollständigen absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen – das Beispiel wird weiterhin funktionieren, wenn Sie es an eine andere Stelle in der Site-Hierarchie verschieben.

So wird zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

zu

```bash
./modules/square.js
```

Solche Zeilen sehen Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modul-Spezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Karte](#importieren_von_modulen_mit_import-karten) definieren.

Sobald Sie die Features in Ihr Skript importiert haben, können Sie die genauso verwenden, als wären sie im selben Datei definiert. Das folgende Beispiel findet sich in `main.js`, unterhalb der Import-Zeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Features. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch die Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe das [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Karten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Import-Karten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, fast beliebigen Text im Modulspezifizierer beim Importieren eines Moduls anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Import-Karte ein "Modulspezifizierer-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments verwendet wird, das die Import-Karte enthält.

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

Die Import-Karte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements definiert, dessen `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist.
Beachten Sie, dass eine Import-Karte nur für das Dokument gilt – die Spezifikation deckt nicht ab, wie eine Import-Karte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein abschließendes Schrägstrich-Zeichen auf dem Modulspezifizierer-Schlüssel vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel wird unten mit unbenannten Modulnamen abgeglichen und eine URL auf einen anderen Pfad umgeleitet.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer ein abschließendes Schrägstrichzeichen hat, muss der Wert ebenfalls eines haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dies ermöglicht die Umleitung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Import-Karte gültige Treffer für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` zu den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` passen.
In diesem Fall wählt der Browser den am spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel aus.

Import-Karten ermöglichen es, Module mit unbenannten Modulnamen (wie in Node.js) zu importieren, und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, ermöglichen sie auch das Importieren bestimmter Versionen einer Bibliothek basierend auf dem Pfad des Skriptes, das das Modul importiert.
Im Allgemeinen ermöglichen sie es Entwicklern, ergonomischere Import-Codes zu schreiben, und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten der Module, die von einer Site verwendet werden.
Dies kann den Aufwand für die Nutzung der gleichen JavaScript-Bibliotheken im Browser und auf dem Server verringern.

Die folgenden Abschnitte erweitern die oben skizzierten Funktionen.

### Funktionserkennung

Sie können die Unterstützung von Import-Karten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als unbenannte Namen

In einigen JavaScript-Umgebungen wie Node.js können Sie unbenannte Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulanamen auf einen Standardstandort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um unbenannte Namen im Browser zu verwenden, benötigen Sie eine Import-Karte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript gibt einen `TypeError` zurück, wenn versucht wird, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall einer relativen Adresswert zugeordnet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen unbenannten Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Neuaufteilung von Modulpfaden

Einträge in der Modulspezifizierer-Karte, bei denen sowohl der Spezifizierer-Schlüssel als auch sein zugehöriger Wert ein abschließendes Schrägstrich-Zeichen (`/`) haben, können als Pfadpräfix verwendet werden.
Dadurch ist die Umleitung eines gesamten URL-Satzes von einer Stelle zu einer anderen möglich.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der ganze Modulspezifizierer-Schlüssel ersetzt (und ausgetauscht).

#### Pakete von Modulen

Die folgende JSON-Import-Kartendefinition ordnet `lodash` als unbenannten Namen und das Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (auf die Basis-URL des Dokuments aufgelöst) zu:

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" unter Verwendung des unbenannten Namens als auch Module darin (durch die Pfadzuordnung) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen unbenannten Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Neuaufteilung

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein – er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen neu zu verweisen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Abgegrenzte Module zur Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm zur Verwaltung von Modulen und deren Abhängigkeiten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Daher kann eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgrafens enthalten, Benutzer müssen jedoch diese Komplexität nicht beachten.

> [!NOTE]
> Sie können die Versionsverwaltung auch mit relativen Pfaden erreichen, aber dies ist suboptimal, da dies unter anderem eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, unbenannte Modulnamen zu verwenden.

Import-Karten ermöglichen es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf diese mit dem gleichen Modulspezifizierer zu verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifizierer-Karten bereitzustellen, die je nach Pfad des Skripts, das den Import durchführt, verwendet werden.
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

Mit dieser Zuordnung wird, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Rückfall verwendet, wenn kein passender Bereich in der abgegrenzten Karte vorhanden ist oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, wird stattdessen die Modulspezifiziererkarte in `imports` verwendet und zu der Version in `/node_modules/cool-module/index.js` gemappt.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Bereich auszuwählen, die Art, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im zugeordneten Pfad muss nicht mit den Bereichspfaden übereinstimmen, und relative Pfade werden immer noch zur Basis-URL des Skripts aufgelöst, das die Import-Karte enthält.

Wie bei Modulspezifiziererkarten können Sie viele Bereichsschlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche zur Referrer-URL passen, wird der spezifischste Bereichspfad zuerst überprüft (der längste Bereichsschlüssel) auf einen passenden Spezifizierer.
Die Browser fallen auf den nächsten spezifischsten übereinstimmenden Bereichspfad zurück, wenn kein passender Spezifizierer vorhanden ist, und so weiter.
Wenn es keinen passenden Spezifizierer in einem der übereinstimmenden Bereiche gibt, prüft der Browser auf einen Treffer in der Modulspezifiziererkarte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Entfernung von Hashnamen in Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehashTen Dateinamen importieren, ebenfalls aktualisiert / neu generiert werden müssen.
Dies kann zu einer Kaskade von Updates führen, die verschwenderisch mit Netzwerkressourcen umgeht.

Import-Karten bieten eine bequeme Lösung für dieses Problem.
Anstatt sich auf spezifische Hashdateinamen zu verlassen, hängen Anwendungen und Skripte stattdessen von einer nicht-gehashten Version des Modulnamens (Adresse) ab.
Eine Import-Karte wie die unten gezeigte liefert dann eine Zuordnung zur eigentlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch der in der Datei enthaltene Hash. In diesem Fall müssen wir nur die Import-Karte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen keine Änderungen am Quelltext von JavaScript-Code, der davon abhängt, vornehmen, da sich der Spezifizierer in der Import-Aussage nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Merkmal, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt.

Sie müssen ausdrücklich deklarieren, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und löst einen Fehler aus, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn beispielsweise `./data.json` sich nicht zu einer JSON-Datei auflöst. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie lediglich Daten importieren möchten. Wenn der Import erfolgreich ist, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Nun müssen wir das `main.js`-Modul nur noch auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Erstens müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können auch das Skript des Moduls direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Inline-Module in HTML können nur andere Module importieren, aber alles, was sie exportieren, ist für andere Module nicht zugänglich (weil sie keine URL besitzen).

> [!NOTE]
> Module und deren Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten – wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten erhalten, die innerhalb von Modulen definiert sind, im Gegensatz zu klassischen Skripten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es besteht keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Reference/Elements/script#attributes)) beim Laden eines Modulschripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zu guter Letzt lassen Sie uns das klarstellen – Modul-Features werden in den Gültigkeitsbereich eines einzelnen Skripts importiert – sie sind nicht im globalen Gültigkeitsbereich verfügbar. Daher können Sie auf importierte Features nur in dem Skript zugreifen, in das sie importiert werden, und nicht über die JavaScript-Konsole, zum Beispiel. Sie erhalten immer noch Syntaxfehler in den DevTools angezeigt, aber Sie werden einige der Debugging-Techniken, von denen Sie erwartet haben, dass sie funktionieren, nicht verwenden können.

Modul-definierte Variablen sind im Modul eingeschränkt, es sei denn, sie werden explizit mit dem globalen Objekt verbunden. Andererseits sind global definierte Variablen innerhalb des Moduls zugänglich. Zum Beispiel könnte der folgende Code gegebenes Beispiel:

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

Die Seite würde immer noch `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt – das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** – jedes Element (sei es eine Funktion oder `const`, etc.) wurde mit seinem Namen beim Export versehen und mit demselben Namen beim Import darauf verwiesen.

Es gibt auch eine Art von Export, der als **Standardexport** bezeichnet wird – dieser ist darauf ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und außerdem hilft er JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff beschrieben; suchen Sie nach "Default exports").

Lassen Sie uns als Beispiel ansehen, wie es funktioniert. In unserem `square.js` unserer Basic-Module finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als Standard exportieren, daher schreiben wir am unteren Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` vor die Funktion stellen und sie als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier wird das Fehlen von geschweiften Klammern beachtet. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formzeichenmodule gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das eine andere Form wie einen Kreis oder ein Dreieck zeichnet? Diese Formen würden wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, etc. haben; Wenn wir versuchten, verschiedene Funktionen mit demselben Namen in die gleiche Top-Level-Moduldatei zu importieren, würden wir Konflikte und Fehler erhalten.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden diese in den folgenden Abschnitten behandeln.

## Umbenennen von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Featurenamen verwenden, um den Bezeichnernamen zu ändern, den Sie innerhalb des Top-Level-Moduls für ein Feature verwenden werden.

So zum Beispiel würden beide Folgenden die gleiche Aufgabe erfüllen, wenn auch auf leicht unterschiedliche Weise:

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

Sehen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis finden Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

In jedem dieser Module haben wir Features mit denselben Namen, die exportiert werden, und daher hat jedes dieselbe `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren und versuchen würden, Folgendes zu verwenden:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler wie "SyntaxError: Redeclaration of import name" (Firefox) auswerfen.

Stattdessen müssen wir die Importe umbenennen, damit sie eindeutig sind:

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie wählen, bleibt Ihnen überlassen, jedoch macht es mehr Sinn, Ihren Modulcode nicht zu verändern und die Änderungen bei den Importen vorzunehmen. Das gilt insbesondere, wenn Sie aus Drittanbietermodulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber sie ist etwas unordentlich und umständlich. Eine noch bessere Lösung ist, die Features jedes Moduls in einem Modulobjekt zu importieren. Der folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle verfügbaren Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar und verleiht ihm effektiv einen eigenen Namensraum. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns erneut ein echtes Beispiel an. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis besuchen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen sind die Exporte in der folgenden einfachen Form:

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

In jedem Fall können Sie die Importe des Moduls jetzt unter dem angegebenen Objektnamen aufrufen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

So können Sie den Code wie bisher schreiben (solange Sie an den entsprechenden Stellen die Objektnamen einfügen) und die Importe sind viel übersichtlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden und besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil erstellt haben.

Sie können ein Beispiel unseres Formzeichnungsmoduls sehen, das mit ES-Klassen umgeschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis. Als Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt all ihre Funktionalität in einer einzigen Klasse:

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

In [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir sie so:

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

## Aggregieren von Modulen

Es wird Situationen geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Abhängigkeitsstufen haben, bei denen Sie Dinge vereinfachen möchten, indem Sie mehrere Untermodule zu einem übergeordneten Modul zusammenfassen. Dies ist mit der folgenden Export-Syntax in dem übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Als Beispiel sehen Sie unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in einem Unterverzeichnis im `modules`-Verzeichnis namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in derselben Form, z.B.

```js
export { Square };
```

Der nächste Teil ist die Aggregation. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen hinzu:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Untermodule und machen sie effektiv über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Wesentlichen durch die Datei weitergeleitet und existieren dort nicht wirklich, sodass Sie dort keine nützlichen verwandten Codes schreiben können.

Also jetzt in der `main.js`-Datei können wir auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

mit der folgenden Einzelzeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine neuere Ergänzung zur Funktionalität von JavaScript-Modulen ist das dynamische Laden von Modulen. Damit können Sie Module nur bei Bedarf dynamisch laden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lesen Sie weiter, um zu sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Haupt-Thread des Browsers und in gemeinsam genutzten und dedizierten Workern erlaubt.
> `import()` wirft jedoch einen Fehler, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) finden Sie ein weiteres Beispiel, das auf unserem Klassen-Beispiel basiert. Diesmal jedoch zeichnen wir nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Tasten – „Circle“, „Square“ und „Triangle“, die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Datei vorgenommen – die Modulexporte bleiben wie zuvor.

In `main.js` haben wir einen Verweis auf jede Taste mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir haben dann einen Ereignislistener an jede Taste angefügt, sodass, wenn gedrückt, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, weil die Promiserfüllung ein Modulobjekt zurückgibt, die Klasse dann zu einem Unterfeature des Objekts wird, daher müssen wir jetzt mit `Module.` vorangestellten KonstruZugritz auf den Konstruktor erfolgen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das kein `type="module"` hat, können Sie immer noch verteilten Code als Module durch dynamische Importe wiederverwenden.

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

## Top-Level-Warteschlange

Top-Level-Warteschlange ist eine Funktion, die in Modulen zur Verfügung steht. Das bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu wirken, was bedeutet, dass der Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, ohne jedoch das Laden von Geschwistermodulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie finden alle Dateien und Codes, die in diesem Abschnitt beschrieben werden, im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await), das aus den vorherigen Beispielen erweitert wird.

Zunächst deklarieren wir unsere Farbpalette in einer separaten Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json):

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie hier die letzte Exportzeile.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Das bedeutet, dass jedes andere Modul, das dieses einbindet, wartet, bis `colors` heruntergeladen und analysiert wurde, bevor es verwendet wird.

Lasst uns dieses Modul in unsere Datei [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir werden `colors` anstelle der zuvor verwendeten Zeichenfolgen verwenden, wenn wir unsere Formfunktionen aufrufen:

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

Das ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es blockiert jedoch nicht das Laden anderer Module. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` abgerufen wird.

## Import-Deklarationen werden angehoben

Import-Deklarationen werden {{Glossary("Hoisting", "angehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls bereits vor der Stelle verfügbar sind, die sie deklariert, und dass die Seiteneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes gestartet wird.

So zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Trotzdem gilt es als gute Praxis, alle Ihre Importe am Anfang des Codes zu platzieren, wodurch es einfacher wird, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren usw. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), den sogenannten "Abhängigkeitsgraphen". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einem tiefen ersten Durchlauf ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängig ist. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (und ermöglicht so [live bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), und nur dann wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen, wenn die Variable zu diesem Zeitpunkt unausgewählt bleibt.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird, wenn das Modul ausgewertet wird, weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird, und die beiden `export`-Deklarationen bilden die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, scheitert die Modulauswertung:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Dies liegt daran, dass JavaScript beim Auswerten von `a.js` zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Wenn Sie jedoch den Code ändern, sodass `b` synchron, `a` jedoch asynchron verwendet wird, funktioniert die Modulauswertung:

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

Sie sollten in Ihrem Projekt normalerweise zyklische Importe vermeiden, da sie Ihren Code fehleranfälliger machen. Einige häufige Techniken zur Beseitigung von Zyklen sind:

- Kombinieren Sie die beiden Module zu einem.
- Verschieben Sie den gemeinsamen Code in ein drittes Modul.
- Verschieben Sie einen Teil des Codes von einem Modul in das andere.

Allerdings können zyklische Importe auch entstehen, wenn sich Bibliotheken gegenseitig abhängen, was schwerer zu beheben ist.

## Autorisierung "isomorpher" Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend-Browser verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie bereits demonstriert. Wenn das Modul globale wie `window` referenziert, kann es im Browser ausgeführt werden, wirft jedoch einen Fehler auf Ihrem Node.js-Server, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen – das bedeutet, er zeigt das gleiche Verhalten in jeder Laufzeitumgebung. Dies wird häufig auf drei Arten erreicht:

- Trennen Sie Ihre Module in "core" und "binding". Im "Kern" konzentrieren Sie sich auf die reine JavaScript-Logik wie das Berechnen des Hashes, ohne DOM-, Netzwerk- oder Dateisystemzugriff, und bieten Sie Hilfsfunktionen. Im "binding"-Teil können Sie aus dem globalen Kontext lesen und in diesen schreiben. Zum Beispiel könnte die "Browser-Bindung" lesen, den Wert aus einem Eingabefeld lesen, während die "Node-Bindung" es von `process.env` liest, aber Werte, die von beiden Orten gelesen werden, werden zu derselben Kernfunktion und auf die gleiche Weise verarbeitet. Der Kern kann in jeder Umgebung importiert und in der gleichen Weise verwendet werden, während nur die Bindung, die in der Regel leichtgewichtig ist, plattformabhängig sein muss.
- Ermitteln, ob ein bestimmtes globales Element vorhanden ist, bevor es verwendet wird. Zum Beispiel testen Sie, ob `typeof window === "undefined"`, um zu wissen, dass Sie wahrscheinlich in einer Node.js-Umgebung sind, und sollten nicht aus dem DOM lesen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten enden ("isomorph"). Wenn es unmöglich ist, die gleiche Funktionalität bereitzustellen, oder wenn dies das Laden erheblicher Code-Mengen zur Folge hat, während ein großer Teil ungenutzt bleibt, ist es besser, verschiedene "Bindings" zu verwenden.

- Verwenden Sie ein Polyfill, um eine Ersatzlösung für fehlende Features bereitzustellen. Wenn Sie beispielsweise die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst seit Version 18 unterstützt wird, können Sie ein ähnliches API verwenden, wie das von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch werden Sie ermutigt, mit dem Trend des Code-Wiederverwendens und der Modularisierung Ihren Code plattformübergreifend zu gestalten, damit er von so vielen Menschen wie möglich genossen werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs nach Möglichkeit, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu ergänzen, wenn Sie weitere entdecken!

- Wir haben das bereits erwähnt, aber um es noch einmal zu sagen: `.mjs` Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strikten MIME-Typ-Überprüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), geraten Sie in CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen. GitHub-Pages ist ideal, da es auch .mjs-Dateien mit dem richtigen MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, erkennen einige Betriebssysteme diese möglicherweise nicht oder versuchen stattdessen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS .js automatisch am Ende von .mjs-Dateien anhängt und dann automatisch die Dateierweiterung ausblendet. Alle unsere Dateien waren tatsächlich `x.mjs.js`. Sobald wir das automatische Ausblenden von Dateierweiterungen deaktiviert und es traineriet haben, `.mjs` zu akzeptieren, hat es funktioniert.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
