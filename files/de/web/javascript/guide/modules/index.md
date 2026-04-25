---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 134c1fbf9e021bfb009f82a4f6b53eefbe941085
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen recht klein — in den frühen Tagen wurde es hauptsächlich für isolierte Skriptaufgaben verwendet, die ein wenig Interaktivität auf Ihren Webseiten boten, wo es nötig war, sodass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit einer Menge JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt zahlreiche JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/), und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ ohne Notwendigkeit der Transpilation. Das kann nur vorteilhaft sein — Browser können das Laden von Modulen optimieren und es effizienter machen, als eine Bibliothek zu verwenden und all diese zusätzliche clientseitige Verarbeitung und zusätzliche Rundreisen durchzuführen. Es macht jedoch Bundler wie webpack nicht obsolet — Bundler leisten nach wie vor gute Arbeit beim Partitionieren von Code in angemessen große Stücke und können andere Optimierungen wie Minifizierung, Entfernung toten Codes und Tree-Shaking durchführen.

## Einführung in ein Beispiel

Um die Nutzung von Modulen zu demonstrieren, haben wir ein [Set von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, aber sie wurden absichtlich einfach gehalten, um Module eindeutig zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben gezeigte sollte ziemlich vertraut werden.

Die Module im Verzeichnis sind wie folgt:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung der Leinwand zu tun haben:
  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines Wrapper-[`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, das selbst innerhalb eines angegebenen Elternelements eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements angefügt wird und zur Ausgabe von Berichtsdatendaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtsliste, anhand seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtsliste, anhand seiner Länge.

### Anmerkung — .mjs vs. .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es wird deutlich, welche Dateien Module sind und welche normale JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest vorerst bei .js zu bleiben. Um Module korrekt in einem Browser zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strikten MIME-Typ-Überprüfung-Fehler wie "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn nicht, Sie wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server konfigurieren, um den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs` Dateien einzustellen). Es könnte jedoch Verwirrung stiften, wenn Sie nicht den Server kontrollieren, von dem Sie Dateien bereitstellen, oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich den Wert der Klarheit von `.mjs` für Module gegenüber `.js` für "normale" JavaScript-Dateien schätzen, aber nicht auf das beschriebene Problem stoßen möchten, könnten Sie `.mjs` während der Entwicklung verwenden und diese während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie im Abschnitt [Anwenden des Moduls auf Ihr HTML](#anwendung_des_moduls_auf_ihr_html) beschrieben.

## Exportieren von Modulfunktionen

Der erste Schritt, um Zugriff auf Modulfunktionen zu erhalten, besteht darin, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, es zu nutzen, ist, es vor jedem Element zu platzieren, das Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Elemente auf oberster Ebene sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzelne Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie diese in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ bietet einen String, den die JavaScript-Umgebung in einen Pfad zu den Moduldaten auflösen kann. In einem Browser könnte dies ein Pfad relativ zum Stamm des Standorts sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier verwenden wir jedoch stattdessen die Punkt-(`.`)-Syntax, um „den aktuellen Standort“ zu bedeuten, gefolgt vom relativen Pfad zu den Daten, die wir versuchen zu finden. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer und die URL portabel machen — das Beispiel funktioniert weiterhin, wenn Sie es an einen anderen Ort in der Standorthierarchie verschieben.

Also zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im gleichen Dateikörper definiert. Das folgende Beispiel ist in `main.js` unter den Importzeilen zu finden:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Sehen Sie sich den [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel an.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen Entwicklern, fast jeden Text, den sie möchten, im Modulspezifizierer anzugeben, wenn sie ein Modul importieren; die Karte liefert einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports`-Schlüssel in der unten stehenden Importkarte ein JSON-Objekt mit einer „Modulspezifiziererkarte“, in dem die Eigenschaftenamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte bei der Auflösung der Modul-URL ersetzt werden. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden mit der [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments, das die Importkarte enthält, zu absoluten URL-Adressen aufgelöst.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt definiert. Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird — die Spezifikation beschreibt nicht, wie eine Importkarte im Kontext eines Arbeiters oder Worker angewendet werden kann. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaften als Modulspezifizierer verwenden. Wenn kein nachgestellter Schrägstrich im Modulspezifizierer-Schlüssel vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt. Zum Beispiel: Unten vergleichen wir Bare Module-Namen und remap eine URL in einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, dann muss der Wert ebenfalls einen haben, und der Schlüssel wird als „Pfad-Präfix“ abgeglichen. Dies ermöglicht das Remapping ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind. Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` sowohl die Modulspezifizierer-Schlüssel `shapes/` als auch `shapes/circle/` abgleichen. In diesem Fall wählt der Browser den spezifischsten (längsten) übereinstimmenden Modulspezifizierer-Schlüssel aus.

Importkarten ermöglichen es, Module mit Bare-Namen zu importieren (wie in Node.js), und können auch das Importieren von Modulen aus Paketen mit und ohne Dateierweiterungen simulieren. Obwohl oben nicht gezeigt, erlauben sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert. Im Allgemeinen ermöglichen sie es Entwicklern, ergonomischere Import-Codes zu schreiben und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Website verwendet werden. Dies kann den Aufwand reduzieren, um die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen Funktionen.

### Feature-Erkennung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als Bare-Namen

In einigen JavaScript-Umgebungen wie Node.js können Sie Bare-Namen für den Modulspezifizierer verwenden. Dies funktioniert, weil die Umgebung Modulnamen in einem Standardort im Dateisystem auflösen kann. Zum Beispiel könnten Sie die folgende Syntax verwenden, um das Modul "square" zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare-Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen bietet, die erforderlich sind, um Modulspezifizierer in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall auf einen relativen Adresswert abgebildet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen Bare-Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Remapping von Modulpfaden

Einträge in der Modulspezifiziererkarte, bei denen sowohl der Spezifizierer-Schlüssel als auch der zugehörige Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden. Dies erlaubt das Remapping einer ganzen Reihe von Import-URLs von einem Ort zu einem anderen. Es kann auch verwendet werden, um zu emulieren, mit „Paketen und Modulen“ zu arbeiten, wie Sie es vielleicht im Node-Ökosystem sehen.

> [!NOTE]
> Der nachgestellte `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkartendefinition ordnet `lodash` als Bare-Namen zu und das Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments) zu:

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuweisung können Sie sowohl das gesamte „Paket“ mit dem Bare-Namen als auch Module darin entlang dem Pfad importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modulspezifizierer-Schlüssel für diese Datei erstellen, z.B. `lodash/fp`, anstatt den Pfad zu verwenden. Dies mag vernünftig für nur ein Modul sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Generelles URL-Remapping

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein. Dies kann nützlich sein, wenn Sie eine Modulressource mit Ihren eigenen lokalen Ressourcen remappen möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Geschichtete Module für Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten. Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist. Daher kann eine komplexe Anwendung dasselbe Modul mehrmals mit verschiedenen Versionen in verschiedenen Teilen des Modulgrafen enthalten, ohne dass sich die Benutzer mit dieser Komplexität auseinandersetzen müssen.

> [!NOTE]
> Sie können das Versionsmanagement auch mit relativen Pfaden erreichen, aber dies ist suboptimal, weil es unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, Bare-Modulnamen zu verwenden.

Importkarten erlauben es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie mit dem gleichen Modulspezifizierer zu verweisen. Dies setzen Sie mit dem `scopes`-Schlüssel um, der es Ihnen ermöglicht, Modulspezifizierer-Karten bereitzustellen, die je nach Pfad des Skripts, das den Import ausführt, verwendet werden. Das folgende Beispiel zeigt dies.

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

Mit dieser Zuweisung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet. Die Karte in `imports` wird als Rückfall verwendet, wenn es keinen passenden Geltungsbereich in der geschichteten Karte gibt oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Wenn zum Beispiel `cool-module` aus einem Skript mit einem nicht passenden Geltungsbereichspfad importiert wird, wird stattdessen die Modulspezifizierer-Karte in `imports` verwendet, wobei auf die Version in `/node_modules/cool-module/index.js` verwiesen wird.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Geltungsbereich auszuwählen, nicht beeinflusst, wie die Adresse aufgelöst wird. Der Wert im zugeordneten Pfad muss nicht mit dem Geltungsbereichspfad übereinstimmen, und relative Pfade werden weiterhin auf die Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Genau wie bei Modulspezifizierer-Karten können Sie viele Geltungsbereichs-Schlüssel haben, und diese können sich überschneidende Pfade enthalten. Wenn mehrere Geltungsbereiche mit der Verweis-URL übereinstimmen, dann wird der spezifischste Geltungsbereichspfad (der längste Geltungsbereichsschlüssel) zuerst überprüft. Wenn es keinen übereinstimmenden Spezifizierer gibt, fällt der Browser auf den zweit spezifischsten übereinstimmenden Geltungsbereichspfad zurück, und so weiter. Wenn es keinen übereinstimmenden Spezifizierer in einem der übereinstimmenden Geltungsbereiche gibt, überprüft der Browser auf eine Übereinstimmung in der Modulspezifizierer-Karte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Weglassen der hashes in Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft hashbasierte Dateinamen, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem hashbasierten Dateinamen importieren, ebenfalls aktualisiert bzw. neu generiert werden müssen. Dies führt möglicherweise zu einer Kaskade von Aktualisierungen, was verschwenderisch in Bezug auf Netzwerkauslastung ist.

Importkarten bieten eine bequeme Lösung für dieses Problem. Anstatt von spezifischen hashbasierten Dateinamen abhängig zu sein, können Anwendungen und Skripte stattdessen von einer nicht gehashten Version des Modulnamens (Adresse) abhängen. Eine Importkarte wie die folgende liefert dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls zu reflektieren. Wir müssen den Quellcode für abhängige JavaScript-Codes nicht aktualisieren, weil der Spezifizierer in der Importanweisung sich nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Eine spannende Funktion, die eine einheitliche Modularchitektur bringt, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und wird einen Fehler auslösen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Import-Attribut-Syntax](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht als JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ähnelt sehr dem, wie wir ein reguläres Skript auf eine Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Body des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn das `<script>`-Element nicht das `type="module"`-Attribut enthält und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können nur andere Module importieren, aber was auch immer sie exportieren, wird für andere Module nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorgeladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Andere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokale Tests achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von innerhalb von Modulen definierten Skriptabschnitten im Vergleich zu klassischen Skripten erhalten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strikten Modus", "", 1)}} verwenden.
- Es besteht keine Notwendigkeit, das `defer`-Attribut zu verwenden (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)), wenn Sie ein Modulskript laden; Module werden automatisch verzögert geladen.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert werden.
- Zuletzt, um dies deutlich zu machen — Modulfunktionen werden in den Bereich eines einzelnen Skripts importiert — sie sind im globalen Bereich nicht verfügbar. Daher können Sie nur auf importierte Funktionen in dem Skript zugreifen, in das sie importiert werden, und Sie können nicht auf sie von der JavaScript-Konsole zugreifen, beispielsweise. Sie erhalten weiterhin Syntaxfehler in den Entwicklertools angezeigt, aber Sie werden nicht in der Lage sein, einige der Debugging-Techniken zu verwenden, die Sie erwartet hätten.

Im Modul definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden explizit an das globale Objekt gebunden. Auf der anderen Seite sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, geben Sie den folgenden Code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Example page</title>
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

würde die Seite trotzdem `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch in diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — das Einzige, was erforderlich ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte vs. benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde beim Export namentlich genannt und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art Export, genannt **Standardexport** — entwickelt, um es einfach zu machen, eine Standardfunktion von einem Modul bereitzustellen, und es hilft JavaScript-Module, mit vorhandenen CommonJS- und AMD-Modulsystemen zu interagieren (wie es schön im Artikel [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erläutert wird; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem `square.js` im Verzeichnis `basic-modules` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standardexport definieren. Am Ende der Datei schreiben wir:

```js
export default randomSquare;
```

Beachten Sie das Fehlen geschweifter Klammern.

Wir könnten stattdessen `export default` an die Funktion anfügen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Beachten Sie auch hier das Fehlen geschweifter Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist und wir wissen, dass es sich um `randomSquare` handelt. Die obige Zeile ist im Wesentlichen eine Kurzform für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die Syntax "as" zum Umbenennen von exportierten Elementen wird im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) weiter unten erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Leinwandformen gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck beschäftigt? Diese Formen hätten wahrscheinlich ähnliche zugeordnete Funktionen wie `draw()`, `reportArea()`, etc.; wenn wir versuchen, verschiedene Funktionen mit demselben Namen in die gleiche Top-Level-Moduldatei zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es mehrere Möglichkeiten, dies zu umgehen. Wir werden diese in den folgenden Abschnitten betrachten.

## Umbenennen von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisung geschweifter Klammern können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Bezeichner zu ändern, den Sie innerhalb des Top-Level-Moduls für eine Funktion verwenden werden.

Zum Beispiel würden beide der folgenden die gleiche Aufgabe ausführen, jedoch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein reales Beispiel an. In unserem Verzeichnis [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir zusätzlich `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu berichten.

Innerhalb jedes dieser Module haben wir gleichnamige Funktionen, die exportiert werden, und daher hat jedes am Ende die gleiche `export`-Anweisung:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren in `main.js`, wenn wir versuchen,

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) werfen.

Stattdessen müssen wir die Importe umbenennen, damit sie einzigartig sind:

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

Beachten Sie, dass Sie das Problem stattdessen auch in den Moduldaten lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, bleibt Ihnen überlassen. Es macht jedoch möglicherweise mehr Sinn, Ihren Modulcode unberührt zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, ist aber etwas unübersichtlich und langwierig. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls in einem Modulobjekt zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle im `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts verfügbar, wodurch es effektiv seinen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns wieder ein reales Beispiel an. Wenn Sie in unser Verzeichnis [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) gehen, sehen Sie wieder das gleiche Beispiel, aber diesmal auf diese neue Syntax umgeschrieben. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen. Zum Beispiel:

```js
const square = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square.length, reportList);
Square.reportPerimeter(square.length, reportList);
```

Sie können den Code genauso wie zuvor schreiben, solange Sie die Objektnamen dort verwenden, wo nötig, und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; das ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel für unser Formenzeichenmodul, umgeschrieben mit ES-Klassen, in unserem Verzeichnis [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) sehen. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt ihre gesamte Funktionalität in einer einzelnen Klasse:

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

Über in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir es so:

```js
import { Square } from "./modules/square.js";
```

Und verwenden dann die Klasse, um unser Quadrat zu zeichnen:

```js
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, wo Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule in ein übergeordnetes Modul kombinieren. Dies ist mit der folgenden Export-Syntax möglich, in der das übergeordnete Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel, schauen Sie in unser Verzeichnis [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation). In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. So ist die Modulstruktur in diesem Beispiel:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist die Exportform gleich, z.B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) beinhalten wir die folgenden Zeilen:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte von den einzelnen Untermodule und stellen sie effektiv aus dem `shapes.js` Modul zur Verfügung.

> [!NOTE]
> Die Exporte, auf die in `shapes.js` verwiesen wird, werden im Grunde durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keine nützlichen verwandten Codes in derselben Datei schreiben können.

Jetzt können wir in der `main.js`-Datei auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende Einzelzeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modulladen

Eine kürzliche Ergänzung zur Funktionalität von JavaScript-Modulen ist das dynamische Laden von Modulen. Dies erlaubt Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile, lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Sie gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Modulobjekt erfüllt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers und in gemeinsamen und dedizierten Arbeitern erlaubt.
> `import()` wird jedoch einen Fehler werfen, falls es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Dieses Mal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel lädt. Stattdessen haben wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulexporte bleiben wie zuvor.

Über in `main.js` haben wir einen Verweis auf jede Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf erhalten, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jedem Button einen Event-Listener hinzu, sodass beim Drücken das entsprechende Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

```js
squareBtn.addEventListener("click", () => {
  import("./modules/square.js").then((Module) => {
    const square = new Module.Square(
      myCanvas.ctx,
      myCanvas.listId,
      50,
      50,
      100,
      "blue",
    );
    square.draw();
    square.reportArea();
    square.reportPerimeter();
  });
});
```

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann zu einem Unterfunktionsmerkmal des Objekts wird, daher müssen wir nun auf den Konstruktor mit `Module.` vorangestellt zugreifen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen besteht darin, dass sie immer verfügbar sind, sogar in Skriptumgebungen. Daher, wenn Sie bereits ein bestehendes `<script>`-Tag in Ihrem HTML haben, das `type="module"` nicht hat, können Sie dennoch Code, der als Module vertrieben wird, durch dynamisches Importieren wiederverwenden.

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

Top-Level-Await ist eine in Modulen verfügbare Funktion. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es erlaubt Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu funktionieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne das Laden von Geschwistermodulen zu blockieren.

Werfen wir einen Blick auf ein Beispiel. Sie können alle in diesem Abschnitt beschriebenen Dateien und Codes im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) Verzeichnis finden, das von den vorherigen Beispielen abgeleitet ist.

Zuerst deklarieren wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das einen Fetch-Request verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json)-Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Dies bedeutet, dass alle anderen Module, die dieses eine enthalten, solange warten, bis `colors` heruntergeladen und geparst wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserem [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Strings, wenn wir unsere Formfunktionen aufrufen:

```js
const square = new Module.Square(
  myCanvas.ctx,
  myCanvas.listId,
  50,
  50,
  100,
  colors.blue,
);

const circle = new Module.Circle(
  myCanvas.ctx,
  myCanvas.listId,
  75,
  200,
  100,
  colors.green,
);

const triangle = new Module.Triangle(
  myCanvas.ctx,
  myCanvas.listId,
  100,
  75,
  190,
  colors.yellow,
);
```

Dies ist nützlich, da der Code innerhalb der [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht andere Module blockieren, die geladen werden. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul während des Abrufs von `colors` weiterhin geladen.

## Importdeklarationen sind gehoben

Importdeklarationen sind {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Modulcode verfügbar sind, noch bevor die Stelle, die sie deklariert, erreicht wird und dass die Seiteneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes beginnt, zu laufen.

Zum Beispiel, in `main.js`, würde das Importieren von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es allgemein als gute Praxis angesehen, alle Ihre Importe am Anfang des Codes zu platzieren, was es erleichtert, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können wiederum andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph) namens „Abhängigkeitsgraph“. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph durch eine Tiefensuche ausgewertet werden.

Kreise sind jedoch oft unvermeidlich. Zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, `b` jedoch direkt oder indirekt auf `a` angewiesen ist. Zum Beispiel:

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

Zyklische Importe scheitern nicht immer. Der Wert der importierten Variablen wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (was so genannte [live bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zum Zeitpunkt der Modulevaluierung weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes wie gewohnt ausgeführt wird, und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, muss es zuerst `b.js` auswerten, die Abhängigkeit von `a.js`. `b.js` verwendet jedoch `a`, was zu diesem Zeitpunkt noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, gelingt die Modulevaluierung:

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

Generell sollten Sie zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige übliche Techniken zur Beseitigung von Zyklen sind:

- Die beiden Module zu einem zusammenführen.
- Der gemeinsame Code in ein drittes Modul verschieben.
- Einige Codes von einem Modul in das andere verschieben.

Zyklische Importe können jedoch auch auftreten, wenn Bibliotheken voneinander abhängen, was schwerer zu beheben ist.

## Verfassen "isomorpher" Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein JavaScript-Code in jeder Umgebung laufen kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend-Browser verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: Es hängt davon ab.

Module haben weiterhin Zugriff auf globale Variablen, wie bereits demonstriert. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, aber auf Ihrem Node.js-Server einen Fehler auslösen, da `window` dort nicht verfügbar ist. Ähnlich, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code „isomorph“ zu machen — das bedeutet, dass er sich in jeder Laufzeitumgebung gleich verhält. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in „Kern“ und „Binding“. Für den „Kern“ konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateizugriff, und exportieren Sie Dienstfunktionen. Für den „Binding“-Teil können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel könnte das „Browser-Binding“ wählen, den Wert aus einem Eingabefeld zu lesen, während das „Node-Binding“ es aus `process.env` lesen könnte, aber Werte aus beiden Orten werden zur gleichen Kernfunktion geführt und auf die gleiche Weise behandelt. Der Kern kann in jede Umgebung importiert und auf die gleiche Weise verwendet werden, während nur das Binding, das in der Regel leichtgewichtig ist, plattformspezifisch sein muss.
- Überprüfen Sie, ob eine bestimmte globale Variable existiert, bevor Sie sie verwenden. Zum Beispiel, wenn Sie prüfen, dass `typeof window === "undefined"` ist, wissen Sie, dass Sie wahrscheinlich in einer Node.js-Umgebung sind und den DOM nicht lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich das gleiche Verhalten ("isomorph") ergeben. Wenn es unmöglich ist, die gleiche Funktionalität bereitzustellen, oder wenn dies bedeutet, dass große Mengen an Code geladen werden, während ein großer Teil ungenutzt bleibt, verwenden Sie besser unterschiedliche „Bindings“.

- Verwenden Sie ein Polyfill, um eine Alternative für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die nur seit v18 in Node.js unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies optional durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Wiederverwendbarkeit und Modularisierung von Code, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, sodass er von so vielen Menschen wie möglich genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren auch aktiv Web-APIs dort, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Problembehebung

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben es vorher schon erwähnt, aber um es noch einmal zu betonen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen mit JavaScript kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, sonst erhalten Sie einen strikten MIME-Type-Prüfungsfehler wie "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihre Tests über einen Server durchführen. GitHub Pages ist ideal, da es ebenfalls `.mjs`-Dateien mit dem richtigen MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, können einige Betriebssysteme sie möglicherweise nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` am Ende von `.mjs`-Dateien hinzufügte und dann die Dateierweiterung automatisch versteckte. Also alle unsere Dateien waren tatsächlich als `x.mjs.js` herausgekommen. Sobald wir das automatische Verstecken der Dateierweiterungen abgeschaltet und es dazu trainiert hatten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon-Tiefen-Tauchgang](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
