---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 21e2b8f4b57964e00899bf81d9457d04e1f1009d
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden bietet alles, was Sie benötigen, um mit JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen relativ klein — in den frühen Tagen wurde JavaScript hauptsächlich für isolierte Scripting-Aufgaben verwendet, um Ihren Webseiten bei Bedarf etwas Interaktivität zu verleihen, sodass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir jetzt vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js bietet diese Möglichkeit schon lange, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (z. B. andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ, ohne dass eine Transpilation erforderlich ist. Dies ist nur von Vorteil — Browser können das Laden von Modulen optimieren und es effizienter gestalten, als eine Bibliothek zu verwenden und all die zusätzlichen clientseitigen Verarbeitungen und zusätzlichen Roundtrips durchzuführen. Es obsolet jedoch keine Bundler wie webpack — Bundler leisten immer noch hervorragende Arbeit beim Aufteilen von Code in angemessen große Stücke und können andere Optimierungen wie Minifizierung, Entfernung von totem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf die Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden aber bewusst einfach gehalten, um Module klar zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das obige sollte Ihnen allmählich vertraut vorkommen.

Die beiden Module im Verzeichnis "modules" sind unten beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb einer umgebenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, die selbst innerhalb eines angegebenen Elternelements angefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID der Hülle enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Hüllenelements angefügt wird und zur Ausgabe von Berichtsdateien verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtsliste anhand seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtsliste anhand seiner Länge.

### Nebenbei — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduledateien verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung. [Die Dokumentation von V8 empfiehlt dies](https://v8.dev/features/modules#mjs). Die angegebenen Gründe sind:

- Es sorgt für Klarheit, da es deutlich macht, welche Dateien Module sind und welche reguläre JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduledateien von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Module geparst werden.

Wir haben uns jedoch entschieden, vorerst bei `.js` zu bleiben. Um Module in einem Browser korrekt arbeiten zu lassen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header versieht, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn dies nicht der Fall ist, erhalten Sie einen strengen MIME-Typprüfungsfehler in der Art von "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden, oder wenn Sie nicht, aber wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien festlegt). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem aus Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Aus Lernzwecken und zur Portabilität haben wir beschlossen, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit von `.mjs`-Moduldateien im Vergleich zu `.js`-Dateien für "normales" JavaScript wirklich wichtig ist, Sie jedoch das oben beschriebene Problem vermeiden möchten, können Sie `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch anzumerken, dass:

- Einige Werkzeuge möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie weiter unten sehen werden.

## Exportieren von Modul-Features

Das erste, was Sie tun müssen, um Zugriff auf Module-Features zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, sie zu verwenden, besteht darin, sie vor jedes Element zu setzen, das Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen oberste Ebene-Elemente sein: Sie können `export` beispielsweise nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente zu exportieren, die Sie exportieren möchten, besteht darin, am Ende Ihrer Moduledatei eine einzige Export-Anweisung zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Features, die Sie exportieren möchten, umschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Features in Ihr Skript

Sobald Sie einige Features aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Features, die Sie importieren möchten, umschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduledatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Seitenstamm sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Standort" zu bezeichnen, gefolgt vom relativen Pfad zur Datei, die wir suchen. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert weiterhin, wenn Sie es an einen anderen Standort in der Seitenhierarchie verschieben.

So zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der weder ein relativer noch absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Features in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Datei definiert. Das Folgende ist in `main.js` zu finden, unter den Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Features. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können die Eigenschaften von Objektwerten weiterhin ändern. Der Wert kann nur vom Modul neu zugewiesen werden, das ihn exportiert. Sehen Sie sich das [`import`-Referenzdokument](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel an.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die anhand der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, beinahe jeden gewünschten Text im Modulspezifizierer beim Import eines Moduls anzugeben; die Karte bietet einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Importkarte ein "Modulspezifizierer-Karten"-JSON-Objekt, in dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URL-Adressen aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments verwendet wird, das die Importkarte enthält.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem Attribut `type` auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) definiert.
Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird — die Spezifikation umfasst nicht, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein abschließender Schrägstrich im Modulspezifizierer-Schlüssel vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel wird unten nach Modulnamen ohne Endungen gesucht, und eine URL wird auf einen anderen Pfad umgeleitet.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss der Wert auch einen haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dies ermöglicht die Umleitung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass in einer Importkarte mehrere Schlüssel für einen Modulspezifizierer gültige Übereinstimmungen aufweisen.
Ein Modulspezifizierer von `shapes/circle/` könnte beispielsweise mit den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel aus.

Importkarten ermöglichen das Importieren von Modulen mit einfachen Modulenamen (wie in Node.js) und das Simulieren des Importierens von Modulen aus Paketen, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, ermöglichen sie auch das Importieren bestimmter Bibliotheksversionen basierend auf dem Pfad des Skripts, das das Modul importiert.
Sie erleichtern im Allgemeinen das Schreiben ergonomischerer Importcodes und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten der von einer Website verwendeten Module.
Dies kann den Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die verschiedenen oben beschriebenen Funktionen.

### Funktionserkennung

Sie können die Unterstützung von Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen mit einfachen Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie einfache Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulnamen in einem standardmäßigen Speicherort im Dateisystem auflösen kann.
Zum Beispiel können Sie folgende Syntax verwenden, um das "Quadrat"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um einfache Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht in eine Modulposition aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen Modulspezifizierer-Schlüssel für `square` definiert, der in diesem Fall auf einen relativen Adresswert abgebildet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen einfachen Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleiten von Modulpfaden

Einträge in der Modulspezifizierer-Karte, bei denen sowohl der Spezifizierer-Schlüssel als auch dessen zugeordneter Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dadurch wird die Umleitung eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen ermöglicht.
Es kann auch verwendet werden, um die Arbeit mit "Paketen und Modulen" zu emulieren, wie Sie sie im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkarte-Definition ordnet `lodash` als einfachen Namen zu, und das Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (die Basis-URL des Dokuments aufgelöst):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Abbildung können Sie sowohl das gesamte "Paket" unter Verwendung des einfachen Namens als auch Module darin importieren (unter Verwendung der Pfadabgleichung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen einfachen Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource hat, auf Ihre eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module zur Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm zur Verwaltung von Modulen und ihren Abhängigkeiten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und ihren Abhängigkeiten getrennt ist.
Infolgedessen, während eine komplexe Anwendung möglicherweise dasselbe Modul mehrfach mit mehreren Versionen in verschiedenen Teilen des Modulgraphens umfasst, müssen Benutzer sich nicht um diese Komplexität kümmern.

> [!NOTE]
> Sie können auch die Versionsverwaltung mit relativen Pfaden erreichen, aber dies ist suboptimal, weil, unter anderem, dies eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, einfache Modulnamen zu verwenden.

Importkarten erlauben es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie unter Verwendung desselben Modulspezifizierers zu referenzieren.
Dies wird mit dem `scopes`-Schlüssel implementiert, der es Ihnen ermöglicht, Modulspezifizierer-Karten bereitzustellen, die je nach Pfad des Skripts, das den Import ausführt, verwendet werden.
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

Mit dieser Zuordnung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn keine Übereinstimmung in der gescopten Karte vorhanden ist, oder die gematchten Scopes keinen passenden Spezifizierer enthalten. Beispielsweise, wenn `cool-module` aus einem Skript mit einem nicht übereinstimmenden SCOPE-Pfad importiert wird, dann wird die Modulspezifizierer-Karte in `imports` verwendet, die auf die Version in `/node_modules/cool-module/index.js` verweist.

Beachten Sie, dass der Pfad, der zur Auswahl eines Scopes verwendet wird, die Art und Weise, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im zugeordneten Pfad muss nicht mit dem Scopes-Pfad übereinstimmen, und relative Pfade werden weiterhin zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

So wie Modulspezifizierer-Karten können Sie auch viele SCOPE-Schlüssel haben, und diese können überlappende Pfade enthalten.
Wenn mehrere Scopes mit der URL des Referenzierungsdokuments übereinstimmen, dann wird der spezifischste (längste) SCOPE-Pfad zuerst überprüft, um einen passenden Spezifizierer zu finden.
Die Browser fallen auf den nächst spezifischen passenden SCOPED PATH zurück, wenn kein passender Spezifizierer vorhanden ist, und so weiter.
Wenn es keinen passenden Spezifizierer in einem der passenden Scopes gibt, überprüft der Browser die Modulspezifizierer-Karte im `imports`-Schlüssel auf eine Übereinstimmung.

### Verbessern des Cachings durch Mapping von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, alle Module, die es unter Verwendung seines gehashten Dateinamens importieren, ebenfalls aktualisiert/neu erstellt werden müssen.
Dies führt möglicherweise zu einer Kaskade von Updates, was eine Verschwendung von Netzwerkressourcen darstellt.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Anstatt von speziellen gehashten Dateinamen abhängig zu sein, hängen Anwendungen und Skripte stattdessen von einer ungehashten Version des Modulnamens (Adresse) ab.
Ein Importmap wie das folgende bietet dann eine Zuordnung zur eigentlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash im Dateinamen. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode eines JavaScript-Codes, der davon abhängt, nicht aktualisieren, da der Spezifizierer in der Importanweisung sich nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Sie können zum Beispiel JSON als JavaScript-Objekt importieren oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und wird einen Fehler auswerfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch die Validierung des Modultyps durchführen und fehlschlagen, wenn zum Beispiel `./data.json` nicht in eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Nun müssen wir das `main.js`-Modul nur noch auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zunächst einmal müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das Skript `main.js` zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modul-Skript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Body des `<script>`-Elements einfügen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut enthält und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Module, die inline in HTML deklariert werden, können andere Module importieren, aber alles, was sie exportieren, ist für andere Module nicht zugänglich (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorgeladen werden indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elemente mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokale Tests achten — wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie aufgrund der JavaScript-Modul-Sicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten, die innerhalb von Modulen definiert sind, im Vergleich zu klassischen Skripten erhalten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es besteht keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Reference/Elements/script#attributes)) beim Laden eines Modulscripts zu verwenden; Module werden automatisch verzögert geladen.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert sind.
- Zuletzt, aber nicht weniger wichtig, lassen Sie uns dies klarstellen — Modulfunktionen werden in den Anwendungsbereich eines einzelnen Skripts importiert — sie sind nicht im globalen Anwendungsbereich verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert wurden, und nicht von der JavaScript-Konsole aus darauf zugreifen. Sie erhalten nach wie vor Syntaxfehler, die in den DevTools angezeigt werden, aber Sie werden nicht in der Lage sein, einige der Debug-Methoden zu verwenden, die Sie möglicherweise erwartet haben.

Im Modul definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen im Modul verfügbar. Zum Beispiel, bei folgendem Code:

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

Würde die Seite trotzdem `Hello` anzeigen, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch bei diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Exportanweisung enthalten muss — das Einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standard-Exporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const` usw.) wurde beim Exportieren mit seinem Namen referenziert, und dieser Name wurde beim Importieren auch verwendet.

Es gibt auch eine Art von Export, den **Standard-Export** — dieser ist dazu gedacht, dass es einfach ist, eine Standardfunktion bereitzustellen, die von einem Modul exportiert wird, und hilft auch JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interoperieren (wie schön erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Sehen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem `square.js` der basic-modules finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, daher schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von Geschweiften Klammern.

Wir könnten stattdessen `export default` vor die Funktion setzen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Beachten Sie erneut das Fehlen von Geschweiften Klammern. Dies liegt daran, dass es pro Modul nur einen Standard-Export geben darf, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde eine Verkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die als Syntax zum Umbenennen von exportierten Elementen wird im folgenden Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formen auf der Leinwand gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst? Diese Formen würden wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()` usw. haben; wenn wir versuchen würden, verschiedene Funktionen mit dem gleichen Namen in die gleiche oberste Modulebene zu importieren, hätten wir Konflikte und Fehler.

Glücklicherweise gibt es einige Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten anschauen.

## Umbenennen von Importen und Exporten

Innerhalb der Geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identifizierungnamen, den Sie für eine Funktion innerhalb des obersten Moduls verwenden werden, zu ändern.

So zum Beispiel, würden beide der folgenden den gleichen Job tun, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorhergehenden Beispiel, nur dass wir `circle.js` und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu melden.

Innerhalb jedes dieser Module haben wir Features mit den gleichen Namen, die exportiert werden. Daher hat jedes am Ende die gleiche `export`-Anweisung:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren und versuchen würden, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) werfen.

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

Beachten Sie, dass Sie das Problem auch in den Moduledateien lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Art Sie verwenden, hängt von Ihnen ab. Es macht jedoch vermutlich mehr Sinn, Ihren Modulcode so zu belassen, wie er ist, und die Änderungen in den Importen vorzunehmen. Dies macht besonders dann Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Der obige Ansatz funktioniert zwar, ist aber etwas unordentlich und langwierig. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform erledigt das:

```js
import * as Module from "./modules/module.js";
```

Dies greift alle in `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, wodurch sie praktisch ihre eigene Namensraum erhalten. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns ein echtes Beispiel an. Wenn Sie in unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis schauen, sehen Sie dasselbe Beispiel noch einmal, aber umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie nun auf die Importe des Moduls unterhalb des angegebenen Objektnamens zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können also den Code genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einschließen), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden und besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Moduls zum Zeichnen von Formen sehen, das mit ES-Klassen umgeschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt all ihre Funktionalität in einer einzigen Klasse:

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

Und dann verwenden wir die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregation von Modulen

Es wird Zeiten geben, in denen Sie Module aggregieren möchten. Sie haben möglicherweise mehrere Ebenen von Abhängigkeiten, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule in ein übergeordnetes Modul kombinieren. Dies ist mithilfe der folgenden Export-Syntaxformen im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenführt. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export der gleichen Form, z.B.

```js
export { Square };
```

Dann kommt der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese holen die Exporte aus den einzelnen Untermodulen ab und machen sie effektiv aus dem `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde durch die Datei geleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

Jetzt, in der `main.js`-Datei, können wir auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine kürzliche Ergänzung zur JavaScript-Modul-Funktionalität ist das dynamische Laden von Modulen. Dadurch können Sie Module nur dann dynamisch laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat offensichtliche Leistungsverbesserungen; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, wobei Sie den Pfad zum Modul als Parameter übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erzeugung eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt wird und Ihnen Zugriff auf die Exporte dieses Objekts gewährt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Der dynamische Import ist im Hauptthread des Browsers sowie in geteilten und dedizierten Workern erlaubt.
> `import()` wirft jedoch einen Fehler, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Dieses Mal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen — die Modul-Exporte bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jeder Schaltfläche einen Ereignis-Listener hinzu, sodass, wenn sie gedrückt wird, das entsprechende Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann zu einem Untermerkmal des Objekts wird und wir daher nun auf den Konstruktor mit `Module.` davor zugreifen müssen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil dynamischer Importe besteht darin, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie weiterhin als Module verteilten Code wiederverwenden, indem Sie ihn dynamisch importieren.

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

## Top Level Await

Top Level Await ist eine Funktion, die innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es erlaubt Modulen wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen evaluiert werden kann, aber ohne zu verhindern, dass Geschwistermodule geladen werden.

Werfen wir einen Blick auf ein Beispiel. Alle in diesem Abschnitt beschriebenen Dateien und Codes finden Sie im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis, das aus den vorherigen Beispielen erweitert wird.

Zuerst deklarieren wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json)-Datei:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json)-Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das `await`-Schlüsselwort vor der Spezifizierung der Konstante `colors` zum Exportieren. Dies bedeutet, dass alle anderen Module, die dieses Modul einbeziehen, warten, bis `colors` heruntergeladen wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei einbinden:

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

Dies ist nützlich, da der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es verhindert jedoch nicht, dass andere Module geladen werden. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)-Modul weiterhin geladen, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet dies, dass die importierten Werte im Code des Moduls auch vor der Stelle, die sie deklariert, verfügbar sind, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der restliche Code des Moduls gestartet wird.

Zum Beispiel in `main.js`, das Importieren von `Canvas` in der Mitte des Codes würde nach wie vor funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es als gute Praxis angesehen, alle Importe an den Anfang des Codes zu setzen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einer tiefenorientierten Überprüfung evaluiert werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (daher werden [Livebindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt uninitialisiert bleibt, wird eine [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird, wenn das Modul evaluiert wird, weder `b` noch `a` tatsächlich gelesen, sodass der restliche Code normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass JavaScript, wenn es `a.js` evaluiert, zuerst `b.js` auswerten muss, die Abhängigkeit von `a.js`. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Wenn Sie andererseits den Code so ändern, dass `b` synchron verwendet wird, aber `a` asynchron, dann funktioniert die Modulevaluierung:

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

Dies ist, weil die Auswertung von `b.js` normal abgeschlossen wird, sodass der Wert von `b` verfügbar ist, wenn `a.js` evaluiert wird.

Sie sollten im Allgemeinen zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfällig machen. Einige gängige Techniken zur Zyklen-Eliminierung sind:

- Die beiden Module in eins zusammenführen.
- Den gemeinsam genutzten Code in ein drittes Modul verschieben.
- Einigen Code von einem Modul in das andere verschieben.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängen, was schwieriger zu beheben ist.

## Erstellen von "isomorphen" Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes von den Passwörtern Ihrer Benutzer generiert. Können Sie es im Frontend im Browser verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es hängt davon ab.

Module haben nach wie vor Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, wird jedoch einen Fehler in Ihrem Node.js-Server auslösen, da `window` dort nicht verfügbar ist. Ebenso kann es nur in Node.js verwendet werden, wenn der Code Zugriff auf `process` benötigt, um funktionsfähig zu sein.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, in jeder Laufzeitumgebung das gleiche Verhalten zu zeigen. Dies wird häufig auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Bindung". Beim "Kern" liegt der Fokus auf reiner JavaScript-Logik wie der Berechnung des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateisystemzugriff und vor allem auf Dienstfunktionsfähigkeit. Bei der "Bindung" können Sie in den globalen Kontext lesen und schreiben. Zum Beispiel kann die "Browser-Bindung" den Wert möglicherweise aus einem Eingabefeld lesen, während die "Node-Bindung" ihn möglicherweise aus `process.env` liest, aber Werte aus beiden Orten werden an die gleiche zentrale Funktion weitergeleitet und in gleicher Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Bindung, die in der Regel leichtgewichtig ist, plattformspezifisch sein muss.
- Prüfen Sie, ob ein bestimmtes Globalobjekt existiert, bevor Sie es verwenden. Prüfen Sie beispielsweise, ob `typeof window === "undefined"`, dann wissen Sie, dass Sie wahrscheinlich in einer Node.js-Umgebung sind und nicht auf DOM zugreifen sollten.

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

  Dies ist vorzuziehen, wenn beide Verzweigungen tatsächlich mit gleichem Verhalten enden ("isomorph"). Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dies das Laden von beträchtlichen Mengen an Code erfordert, während ein großer Teil ungenutzt bleibt, verwenden Sie besser stattdessen unterschiedliche "Bindungen".

- Verwenden Sie ein Polyfill, um eine Alternative für fehlende Funktionen bereitzustellen. Wenn Sie beispielsweise die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst seit v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Sie können es bedingt durch dynamische Importe:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Objekt ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen.

Diese Praktiken sind nicht einzigartig für Module. Dennoch werden Sie mit dem Trend der Wiederverwendbarkeit und Modularisierung von Code ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Personen genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wann immer dies möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie weitere entdecken!

- Wir haben dies zuvor erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie aufgrund der JavaScript-Modul-Sicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen. GitHub-Seiten sind ideal, da sie `.mjs`-Dateien auch mit dem richtigen MIME-Typ bedienen.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie mit etwas anderem zu ersetzen. Wir haben beispielsweise festgestellt, dass macOS `.js` stillschweigend zum Ende von `.mjs`-Dateien hinzufügte und dann die Dateierweiterung automatisch ausblendet. Dadurch kamen all unsere Dateien als `x.mjs.js` heraus. Nachdem wir das automatische Ausblenden von Dateierweiterungen ausgeschaltet und gelehrt haben, `.mjs` zu akzeptieren, funktionierte es gut.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
