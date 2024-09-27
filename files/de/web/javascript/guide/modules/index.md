---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen recht klein – die meisten Anwendungen in den frühen Tagen bestanden darin, isolierte Skriptaufgaben zu erledigen, um Ihren Webseiten dort, wo nötig, etwas Interaktivität zu verleihen. Große Skripte waren im Allgemeinen nicht erforderlich. Einige Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten ([Node.js](/de/docs/Glossary/Node.js), zum Beispiel) verwendet wird.

Komplexe Projekte erfordern einen Mechanismus zur Aufteilung von JavaScript-Programmen in separate Module, die bei Bedarf importiert werden können. Node.js hat diese Fähigkeit schon lange, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ ohne Transpilation. Das kann nur von Vorteil sein – Browser können das Laden von Modulen optimieren und effizienter gestalten als die Verwendung einer Bibliothek, die all diese zusätzliche clientseitige Verarbeitung und zusätzliche Rundenfahrten erfordert. Es bedeutet jedoch nicht das Ende von Bundlern wie Webpack – Bundler leisten immer noch gute Arbeit bei der Aufteilung von Code in angemessen große Teile und können andere Optimierungen wie Minifizierung, Eliminierung toten Codes und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [einfache Sammlung von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine einfache Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch bewusst einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur des Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine Datei-Struktur wie folgt:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; die obige Struktur sollte Ihnen bald sehr vertraut sein.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung des Canvas zusammenhängen:

  - `create()` — erstellt ein Canvas mit spezifierter `width` und `height` in einem Wrapper [`<div>`](/de/docs/Web/HTML/Element/div) mit einer spezifierten ID, welcher selbst in ein spezifiertes Elternelement eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem spezifierten Wrapper-Element eingefügt wird und verwendet werden kann, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einem spezifizierten Canvas mit einer spezifizierten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtsliste, gegeben seine Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtsliste, gegeben seine Länge.

### Beiseite – .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Übersichtlichkeit, d. h. es macht deutlich, welche Dateien Module und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldateien von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest im Moment, weiterhin `.js` zu verwenden. Um Module im Browser korrekt zu verwenden, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header überträgt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strikten MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem nicht-JavaScript-MIME-Typ" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt übermitteln, umfassen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn nicht, aber Sie wissen, was Sie tun und Zugriff haben (d. h., Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem Sie die Dateien bereitstellen, nicht steuern oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir hier.

Aus Lern- und Portabilitätsgründen haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit durch die Verwendung von `.mjs` für Module gegenüber `.js` für "normale" JavaScript-Dateien sehr wichtig ist, Sie jedoch nicht auf das oben beschriebene Problem stoßen möchten, können Sie `.mjs` während der Entwicklung verwenden und sie während Ihres Buildprozesses nach `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Werkzeuge möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies wird mit der {{jsxref("Statements/export", "export")}}-Anweisung durchgeführt.

Der einfachste Weg, dies zu tun, ist, sie vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen oberste Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzelne Exportanweisung am Ende Ihres Moduls zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie in geschweifte Klammern exportieren möchten. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie Features aus Ihrem Modul exportiert haben, müssen Sie sie in Ihrem Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, sieht wie folgt aus:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie in geschweifte Klammern importieren möchten, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ bietet eine Zeichenkette, die die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann.
In einem Browser könnte dies ein relativer Pfad zum Stammverzeichnis der Site sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punktnotation (`.`), um "den aktuellen Standort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabler machen — das Beispiel funktioniert immer noch, wenn Sie es an eine andere Stelle in der Site-Hierarchie verschieben.

Also zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen können Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Bezeichner kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Karte](#importieren_von_modulen_mit_import-karten) definieren.

Sobald Sie die Features in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie innerhalb derselben Datei definiert. Das Folgende befindet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Sehen Sie das [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Karten

Oben haben wir gesehen, wie ein Browser ein Modul mithilfe eines Modulspezifizierers importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mittels der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Import-Karten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern, fast beliebigen Text im Modulspezifizierer anzugeben, wenn ein Modul importiert wird; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Import-Karte ein "Modulspezifizierer-Karte"-JSON-Objekt, wobei die Eigenschafsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments aufgelöst, das die Import-Karte enthält.

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

Die Import-Karte ist mit einem [JSON-Objekt](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) eingestellt definiert.
Es kann nur eine Import-Karte im Dokument geben, und da sie zur Auflösung verwendet wird, welche Module in statischen und dynamischen Imports geladen werden, muss sie vor allen `<script>`-Elementen, die Module importieren, deklariert werden.
Beachten Sie, dass sich die Import-Karte nur auf das Dokument bezieht – die Spezifikation behandelt nicht, wie eine Import-Karte in einem Worker- oder Worklet-Kontext angewendet werden kann. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein Schrägstrich am Ende des Modulspezifizierer-Schlüssels vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel stimmen wir unten Bare-Modul-Namen ab und mappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss der Wert auch einen haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dies ermöglicht das Remapping ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Import-Karte gültige Übereinstimmungen für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` entsprechen.
In diesem Fall wird der Browser den spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel auswählen.

Import-Karten ermöglichen Module, die mit bare-Modul-Namen importiert werden, und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, ermöglichen sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen ermöglichen sie Entwicklern, ergonomischeren Import-Code zu schreiben, und erleichtern es, die verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Site verwendet werden, zu verwalten.
Dies kann den Aufwand reduzieren, um dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen Funktionsweisen.

### Feature-Erkennung

Sie können die Unterstützung für Import-Karten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als Bare-Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare-Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulnamen zu einem Standardstandort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare-Namen im Browser zu verwenden, benötigen Sie eine Import-Karte, die die Informationen liefert, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn versucht wird, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall zu einer relativen Adresswert-Karte führt.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir nun einen Bare-Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Remapping von Modulpfaden

Modulspezifizierer-Karteneinträge, bei denen sowohl der Spezifizierer-Schlüssel als auch der zugehörige Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht es, ein ganzes Set von Import-URLs von einem Ort zu einem anderen zu verschieben.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Paketmodule

Die folgende JSON-Importkarten-Definition ordnet `lodash` als Bare-Namen zu und den Modulspezifizierer-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (auflösbar zur Basis-URL-Dokument):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie das gesamte "Paket" importieren, indem Sie den Bare-Namen verwenden, und Module innerhalb davon (durch Verwendung des Pfadmappings):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstelle der Verwendung des Pfades.
Dies mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein – es kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul mit absoluten Pfaden zu einer Ressource auf Ihre eigenen lokalen Ressourcen ummappen möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module für die Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Als Ergebnis, während eine komplexe Anwendung dasselbe Modul möglicherweise mehrmals mit mehreren unterschiedlichen Versionen in verschiedenen Teilen des Modulgraphen umfasst, müssen sich Benutzer nicht um diese Komplexität kümmern.

> [!NOTE]
> Sie können auch die Versionsverwaltung mit relativen Pfaden erreichen, aber dies ist unterlegen, weil es unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, Bare-Modul-Namen zu verwenden.

Import-Karten ermöglichen es Ihnen auch, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie unter Verwendung desselben Modulspezifizierers zu verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifizierer-Karten bereitzustellen, die je nach Pfad des Skripts, das den Import durchführt, verwendet werden.
Das folgende Beispiel zeigt dies.

```json
{
  "imports": {
    "coolmodule": "/node_modules/coolmodule/index.js"
  },
  "scopes": {
    "/node_modules/dependency/": {
      "coolmodule": "/node_modules/some/other/location/coolmodule/index.js"
    }
  }
}
```

Mit dieser Zuordnung wird die Version in `/node_modules/some/other/location/coolmodule/index.js` verwendet, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `coolmodule` importiert.
Die Karte in `imports` wird als Fallback verwendet, wenn kein übereinstimmender Bereich in der gescopten Karte vorhanden ist oder die passenden Scopes keinen übereinstimmenden Spezifizierer enthalten. Zum Beispiel wird die Modulspezifizierer-Karte in `imports` stattdessen verwenden, wenn `coolmodule` aus einem Skript mit einem nicht zusammenhängenden Scoppfad importiert wird, was auf die Version in `/node_modules/coolmodule/index.js` verweist.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Scope auszuwählen, keinen Einfluss darauf hat, wie die Adresse aufgelöst wird.
Der Wert im abgebildeten Pfad muss nicht mit dem Pfad der Scopes übereinstimmen, und relative Pfade werden weiterhin auf die Basis-URL des Skripts aufgelöst, das die Import-Karte enthält.

Genau wie bei den Modulspezifizierer-Karten können Sie viele Scope-Schlüssel haben, und diese können überlappende Pfade enthalten.
Wenn mehrere Scopes mit dem Referrer-URL übereinstimmen, wird zuerst der spezifischste Scope-Pfad überprüft (der längste Scope-Schlüssel) für einen übereinstimmenden Spezifizierer.
Der Browser wird auf den nächst spezifischeren passenden Scoppfad zurückgreifen, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter.
Wenn es keinen übereinstimmenden Spezifizierer in einem der passenden Scopes gibt, prüft der Browser auf einen Treffer in der Modulspezifizierer-Karte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Entfernen von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben häufig gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn ein Modul sich ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert / neu generiert werden müssen.
Dies führt potenziell zu einer Kaskade von Updates, die die Netzwerkressourcen verschwendet.

Import-Karten bieten eine bequeme Lösung für dieses Problem.
Anstatt von spezifischen gehashten Dateinamen abhängig zu sein, hängen Anwendungen und Skripts stattdessen von einer nicht gehashten Version des Modulnamens (Adresse) ab.
Eine Import-Karte wie die untenstehende bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich sein Hash, der im Dateinamen enthalten ist, ebenfalls. In diesem Fall müssen wir nur die Import-Karte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode von abhängigem JavaScript nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine einheitliche Modularchitektur bietet, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Beispielsweise können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und wird einen Fehler auslösen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und scheitern, wenn beispielsweise `./data.json` nicht auf eine JSON-Datei verweist. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Einmal erfolgreich importiert, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ähnelt sehr dem Anwendung eines regulären Skripts auf einer Seite, mit ein paar bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` in das [`<script>`](/de/docs/Web/HTML/Element/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können auch das Skript des Moduls direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elementkörpers platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht jedoch in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und Standard-Skripten

- Sie müssen auf lokale Tests achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d. h. mit einer `file://`-URL), stoßen Sie aufgrund der Sicherheitsanforderungen für JavaScript-Module auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten feststellen, die in Modulen definiert sind, im Gegensatz zu Standardskripten. Dies liegt daran, dass Module automatisch den {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht nötig, das `defer`-Attribut (siehe [`<script>` Attribute](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulskripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert werden.
- Zu guter Letzt müssen wir klarstellen – Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert – sie sind nicht im globalen Gültigkeitsbereich verfügbar. Folglich können Sie nur in dem Skript, in das sie importiert wurden, auf importierte Funktionen zugreifen, und Sie können nicht über die JavaScript-Konsole darauf zugreifen. Sie erhalten nach wie vor Syntaxfehler in den Entwicklertools angezeigt, können jedoch nicht alle Debugging-Techniken verwenden, die Sie möglicherweise erwartet haben.

Modul-definierte Variablen sind lokal auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt gebunden. Andererseits sind global-definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel:

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

Die Seite würde nach wie vor `Hello` anzeigen, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Auch aus diesem Beispiel ersichtlich, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt – das einzige notwendige ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus namentliche Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **namentlichen Exporten** – jedes Element (sei es eine Funktion, `const`, usw.) wurde beim Export mit seinem Namen referenziert und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird – er soll es einfach machen, eine Standardfunktion vorzugeben, die von einem Modul bereitgestellt wird, und hilft JavaScript-Modulen dabei, mit den bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie es gut im Blogpost [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt wird; suchen Sie nach "Default exports").

Lassen Sie uns ein Beispiel betrachten, während wir erklären, wie es funktioniert. Unser `square.js` im `basic-modules`-Beispiel enthält eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, also schreiben wir dies am Ende der Datei:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion anhängen und sie als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier fehlt der Einsatz von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde eine Kurzform für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax zum Umbenennen exportierter Elemente wird im Abschnitt [Renaming imports and exports](#umbenennen_von_importen_und_exporten) weiter unten erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formen auf der Leinwand gut zu funktionieren. Was passiert jedoch, wenn wir ein Modul hinzufügen, das sich mit dem Zeichnen einer anderen Form beschäftigt, wie einem Kreis oder Dreieck? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, usw.; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dieselbe oberste Moduldatei zu importieren, würden Konflikte und Fehler auftreten.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

Innerhalb geschweifter Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Namen zu ändern, den Sie innerhalb Ihres obersten Moduls verwenden werden.

So würden zum Beispiel beide der folgenden den gleichen Job machen, wenn auch auf unterschiedliche Weise:

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

Betrachten wir ein reales Beispiel. In unserem [Renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir Module `circle.js` und `triangle.js` hinzugefügt haben, die Kreise und Dreiecke zeichnen und berichten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes dasselbe `export`-Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versucht hätten, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: Redeclaration of import name" (Firefox) werfen.

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

Beachten Sie, dass Sie das Problem auch in den Moduldaten lösen könnten, z. B.

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

und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, bleibt Ihnen überlassen, es macht jedoch zum Teil mehr Sinn, Ihren Modulkode unverändert zu lassen und die Änderungen in den Importen vorzunehmen. Das macht besonders Sinn, wenn Sie von Dritthersteller-Modulen importieren, die Sie nicht kontrollieren.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, ist jedoch ein wenig unordentlich und umständlich. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut das:

```js
import * as Module from "./modules/module.js";
```

Dadurch werden alle Exporte, die innerhalb von `module.js` verfügbar sind, aufgenommen und als Mitglieder eines Objekts `Module` verfügbar gemacht, wodurch es effektiv einen eigenen Namensraum erhält. So zum Beispiel:

```js
Module.function1();
Module.function2();
```

Betrachten wir erneut ein reales Beispiel. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis aufrufen, sehen Sie dasselbe Beispiel erneut, jedoch so umgeschrieben, dass es diese neue Syntax nutzt. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie nun auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

So können Sie den Code weiterhin gleich wie zuvor schreiben (solange Sie die Objektnamen dort, wo sie benötigt werden, einfügen), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden und besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formenzeichnungsmoduls sehen, das mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis umgeschrieben wurde. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalität in einer einzigen Klasse:

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

In [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir sie dann so:

```js
import { Square } from "./modules/square.js";
```

Und verwenden die Klasse dann, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Möglicherweise haben Sie mehrere Abhängigkeitsstufen, bei denen Sie Dinge vereinfachen und mehrere Untermodule in ein übergeordnetes Modul zusammenfassen möchten. Dies ist durch Export-Syntax der folgenden Form im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Als Beispiel, siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Außerdem haben wir unsere UnterModule in einem Unterverzeichnis innerhalb des `modules`-Verzeichnisses `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in der gleichen Form, z. B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Untermodule und machen sie im Grunde aus dem `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde durch die Datei weitergeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code innerhalb derselben Datei schreiben können.

Nun können wir in der `main.js`-Datei auf alle drei Modulklassen zugreifen, indem wir

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

Eine kürzliche Ergänzung zur JavaScript-Modulfunktionalität ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module dynamisch nur dann zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat offensichtliche Leistungsvorteile; lesen Sie weiter, um zu sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, die Ihnen den Pfad zum Modul als Parameter übergibt. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt wird, wodurch Sie Zugriff auf diese Objektexporte erhalten. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers sowie in geteilten und dedizierten Workern erlaubt.
> Jedoch wird `import()` einen Fehler werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Betrachten wir ein Beispiel. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Tasten - "Circle", "Square" und "Triangle" - die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen – die Modulausgaben bleiben wie zuvor.

In `main.js` haben wir einen Verweis auf jede Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erhalten, z. B.:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jedem Button einen Event Listener hinzu, der das relevante Modul dynamisch lädt und verwendet, um die Form zu zeichnen, wenn der Button gedrückt wird:

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

Da die Versprechens-Erfüllung ein Modulobjekt zurückgibt, wird die Klasse daher zu einer Unterfunktion des Objekts gemacht, daher benötigen wir nun den Zugriff auf den Konstruktor mit `Module.` davor, z. B. `Module.Squ

e uare( /_ … _/ )`.

Ein weiterer Vorteil dynamischer Importe besteht darin, dass sie immer verfügbar sind, auch in Skriptumgebungen. Wenn Sie also ein vorhandenes `<script>`-Tag in Ihrem HTML haben, das kein `type="module"` enthält, können Sie Code, der als Module verteilt wird, dennoch durch dynamischen Import wiederverwenden.

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

Top-Level-Await ist eine Funktion, die innerhalb von Modulen verfügbar ist. Das bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht, dass Module wie große asynchrone Funktionen handeln. Das bedeutet, dass der Code vor der Verwendung in übergeordneten Module evaluiert werden kann, ohne jedoch auf das Laden von Geschwistermodulen zu blockieren

Lassen Sie uns ein Beispiel betrachten. Sie finden alle beschrieben Dateien und Codes in diesem Abschnitt im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await), das aus den vorherigen Beispielen fortführt.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückgibt.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` zum Export angeben. Das bedeutet, dass alle anderen Module, die dieses Modul einbeziehen, darauf warten, dass `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Module in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei einbeziehen:

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

Dies ist nützlich, da der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es blockiert jedoch nicht das Laden anderer Module. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)-Modul weiter geladen, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden [gehoben](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet dies, dass die importierten Werte im Code des Moduls verfügbar sind, selbst vor der Stelle, an der sie deklariert werden, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der Rest des Modulkodes beginnt zu laufen.

Im `main.js`-Beispiel könnte zum Beispiel das Importieren von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Importe an die Spitze des Codes zu setzen, weshalb es einfacher ist, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), den wir als "Abhängigkeitsgraph" bezeichnen. In einer idealen Welt ist dieser Graph [acyclisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mithilfe einer tiefen Erstsuche ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, `b` jedoch direkt oder indirekt von `a` abhängt. Beispiel:

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

Zyklische Importe führen nicht immer zu einem Fehler. Der Wert der importierten Variablen wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (was "Live-Bindungen" ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird der Wert von `b` nicht gelesen, wenn das Modul ausgewertet werden muss, sodass der Rest des Codes normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` erzeugen. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, schlägt die Modulauswertung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Der Grund ist, dass wenn JavaScript `a.js` auswerten muss, es zunächst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. Jedoch wird in `b.js` `a` verwendet, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, hat die Modulauswertung Erfolg:

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

Dies liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wurde, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Normalerweise sollten Sie zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige häufige Techniken zur Eliminierung von Zyklen sind:

- Zusammenführen der beiden Module in eines.
- Verschieben Sie den gemeinsam genutzten Code in ein drittes Modul.
- Verschieben Sie einen Teil des Codes aus einem Modul ins andere.

Zyklische Importe können jedoch auch auftreten, wenn Bibliotheken voneinander abhängen, was schwieriger zu beheben ist.

## Erstellen "isomorpher" Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes für das Passwort Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: es hängt davon ab.

Module haben nach wie vor Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf Globale wie `window` verweist, kann es im Browser ausgeführt werden, aber auf Ihrem Node.js-Server zu einem Fehler führen, da `window` dort nicht verfügbar ist. Ähnlich, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code isomorphisch zu machen – das heißt, er zeigt das gleiche Verhalten in jeder Laufzeitumgebung. Dies wird oft auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Core" und "Binding". Für das "Core", legen Sie den Fokus auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateisystemzugriff, und bieten Sie Utility-Funktionen an. Für den "Binding"-Teil können Sie aus dem globalen Kontext lesen und schreiben. Beispielsweise wählt das "Browser-Binding", den Wert aus einem Eingabefeld zu lesen, während das "Node-Binding" diesen aus `process.env` liest, aber beide leiten den gelesenen Wert an dieselbe Core-Funktion weiter und behandeln ihn auf die gleiche Weise. Der Core-Teil kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur der Binding-Teil, der normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Prüfen, ob ein bestimmtes Global vorhanden ist, bevor Sie es verwenden. Beispielsweise, wenn Sie `typeof window === "undefined"` testen, wissen Sie wahrscheinlich, dass Sie sich in einer Node.js-Umgebung befinden, und sollten nicht auf den DOM zugreifen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige eigentlich das gleiche Verhalten zeigen ("isomorphisch"). Wenn es unmöglich ist, die gleiche Funktionalität bereitzustellen, oder wenn dies das Laden signifikanter Mengen an Code erfordern würde, während ein großer Teil ungenutzt bleibt, sollten Sie lieber verschiedene "Bindings" verwenden.

- Verwenden Sie ein Polyfill, um ein Fallback für fehlende Features bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die erst seit Node.js v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Sie können dies bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie innerhalb von Modulen globale Variablen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Wiederverwendbarkeit und Modularisierung des Codes, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Personen genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Problembehandlung

Hier sind einige Tipps, die Ihnen helfen könnten, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben es bereits erwähnt, aber noch einmal: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "The server responded with a non-JavaScript MIME type".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d. h., mit einer `file://`-URL), werden Sie aufgrund der Sicherheitsanforderungen für JavaScript-Module CORS-Fehler erleben. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es `.mjs`-Dateien auch mit dem richtigen MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, erkennen einige Betriebssysteme es möglicherweise nicht oder versuchen es durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` an das Ende von `.mjs`-Dateien anfügt und dann die Dateierweiterung automatisch versteckt. Daher kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Nachdem wir das automatische Verbergen von Dateierweiterungen deaktiviert und es dazu ausgebildet haben, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Kap.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
