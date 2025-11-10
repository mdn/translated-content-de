---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme begannen recht klein — die meisten Verwendungen in den frühen Tagen dienten isolierten Skriptaufgaben, um ein wenig Interaktivität dort bereitzustellen, wo sie auf Ihren Webseiten benötigt wurden, sodass große Skripte im Allgemeinen nicht erforderlich waren. Einige Jahre später haben wir jetzt vollständige Anwendungen, die mit einer Menge JavaScript in Browsern laufen, sowie JavaScript, das in anderen Kontexten verwendet wird (z. B. {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ ohne Übersetzung. Das kann nur positiv sein — Browser können das Laden von Modulen optimieren und effizienter machen, als wenn man eine Bibliothek verwenden müsste, die all diese zusätzliche Verarbeitung auf der Client-Seite und zusätzliche Rundreisen übernimmt. Dennoch macht das Bundler wie webpack nicht überflüssig — Bundler leisten weiterhin hervorragende Arbeit bei der Aufteilung von Code in sinnvoll große Teile und können andere Optimierungen wie Minifizierung, Entfernung von totem Code und Tree Shaking vornehmen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) Element auf einer Webseite erzeugen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar und deutlich zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver laufen lassen.

## Grundstruktur des Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben Genannte sollte Ihnen allmählich vertraut werden.

Die zwei Module des Modulverzeichnisses werden unten beschrieben:

- `canvas.js` — enthält Funktionen zum Einrichten der Leinwand:
  - `create()` — erstellt eine Leinwand mit einer bestimmten `width` und `height` innerhalb eines Wrapper-`<div>` mit einer bestimmten ID, die selbst innerhalb eines bestimmten Elternelements eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines bestimmten Wrapper-Elements angefügt wird und zur Ausgabe von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.

### Nebenbemerkung — .mjs gegenüber .js

In diesem Artikel haben wir die `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung stattdessen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs) zum Beispiel. Die angegebenen Gründe sind:

- Es sorgt für Klarheit, d.h. es wird deutlich, welche Dateien Module sind und welche reguläres JavaScript.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Buildtools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Module geparst werden.

Wir haben uns jedoch entschieden, weiterhin `.js` zu verwenden, zumindest vorerst. Damit Module im Browser korrekt funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, erhalten Sie einen strengen MIME-Typüberprüfungsfehler wie "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den korrekten Typ für `.js` Dateien, aber noch nicht für `.mjs` Dateien. Server, die `.mjs` Dateien bereits korrekt bedienen, schließen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js ein.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn Sie dies noch nicht tun, aber wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server konfigurieren, um den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien einzustellen). Es könnte jedoch zu Verwirrung führen, wenn Sie nicht den Server kontrollieren, von dem Sie Dateien bereitstellen, oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Aus Lern- und Portabilitätsgründen haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich den Wert auf die Klarheit der Verwendung von `.mjs` für Module gegenüber der Verwendung von `.js` für "normale" JavaScript-Dateien legen, aber nicht auf das oben beschriebene Problem stoßen möchten, können Sie immer während der Entwicklung `.mjs` verwenden und sie während Ihres Builds in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">` Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies erfolgt mit der {{jsxref("Statements/export", "export")}} Anweisung.

Am einfachsten ist es, diese vor jedes Element zu setzen, das Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen oberste Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Ein praktischeres Mittel, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzige Export-Anweisung am Ende Ihrer Moduldatei zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, umschlossen von geschweiften Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}} Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ bietet eine Zeichenfolge, die die JavaScript-Umgebung zu einem Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Stamm der Website sein, was für unser `basic-modules` Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt-(`.`)-Syntax, um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir suchen. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel wird weiterhin funktionieren, wenn Sie es an einen anderen Ort in der Websitehierarchie verschieben.

Zum Beispiel:

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
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Karte](#importieren_von_modulen_mit_import-karten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Dokument definiert. Das Folgende ist in `main.js` zu finden, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Eigenschaften von Objektwerten ändern. Der Wert kann nur durch das Modul neu zugewiesen werden, das es exportiert. Siehe das [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Karten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Import-Karten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) erlauben es Entwicklern, fast jeden beliebigen Text im Modulspezifizierer beim Import eines Moduls anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der Schlüssel `imports` in der Import-Karte unten ein JSON-Objekt "Modulspezifizierer-Karte", bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die entsprechenden Werte werden ersetzt, wenn der Browser die Modul-URL auflöst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URL-Adressen aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments, das die Import-Karte enthält, verwendet wird.

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

Die Import-Karte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut, das auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist, definiert.
Beachten Sie, dass eine Import-Karte nur für das Dokument gilt — die Spezifikation deckt nicht ab, wie eine Import-Karte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn der Modulspezifizierer-Schlüssel keinen abschließenden Schrägstrich hat, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel unten stimmen wir übere, indem wir Bare-Modulnamen verwenden und eine URL auf einen anderen Pfad umleiten.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss der Wert auch einen haben, und der Schlüssel wird als "Pfadpräfix" dargestellt.
Dies ermöglicht eine Neuzuordnung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Import-Karte gültige Übereinstimmungen für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) entsprechenden Modulspezifizierer-Schlüssel aus.

Import-Karten ermöglichen das Importieren von Modulen mit Bare-Modulnamen (wie in Node.js) und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, erlauben sie es auch, bestimmte Versionen einer Bibliothek zu importieren, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen erleichtern sie es Entwicklern, ergometrischen Import-Code zu schreiben und die unterschiedlichen Versionen und Abhängigkeiten von Modulen, die von einer Website verwendet werden, zu verwalten.
Dies kann den Aufwand für die Verwendung derselben JavaScript-Bibliotheken im Browser und auf dem Server reduzieren.

Die folgenden Abschnitte erweitern die oben beschriebenen Funktionen.

### Funktionserkennung

Sie können Unterstützung für Import-Karten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode prüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als Bare-Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare-Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulspezifizierer auf einen Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "Square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare-Namen in einem Browser verwenden zu können, benötigen Sie eine Import-Karte, die dem Browser die Informationen zur Verfügung stellt, die zur Auflösung von Modulspezifizierern zu URLs erforderlich sind (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht auf einen Modulort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall auf einen relativen Adresswert abbildet.

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

### Neuzuordnung von Modulpfaden

Modulspezifizierer-Mappeneinträge, bei denen sowohl der Spezifizierer-Schlüssel als auch der zugehörige Wert einen abschließenden Schrägstrich `/` haben, können als Pfadpräfix verwendet werden.
Dies erlaubt die Neuzuordnung eines ganzen Satzes von Import-URLs von einem Ort an einen anderen.
Dies kann auch verwendet werden, um mit "Paketen und Modulen" zu arbeiten, wie Sie es im Node-Ökosystem vielleicht sehen würden.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkartendefinition ordnet `lodash` als Bare-Namen zu und den Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das ganze "Paket" unter Verwendung des Bare-Namens als auch Module innerhalb davon (unter Verwendung der Pfadzuteilung) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Neuzuordnung

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein — es kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul mit absoluten Pfaden zu einer Ressource mit Ihren eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Anwendung spezifischer Module für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Daher könnte eine komplexe Anwendung mit demselben Modul mehrmals in verschiedenen Versionen in unterschiedlichen Teilen des Modulnetzes enthalten sein, dennoch müssen sich Benutzer nicht um diese Komplexität kümmern.

> [!NOTE]
> Sie können das Versionsmanagement auch über relative Pfade erreichen, aber das ist suboptimal, denn unter anderem erzwingt dies eine bestimmte Struktur für Ihr Projekt und hindert Sie daran, Bare-Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sich auf sie mit demselben Modulspezifizierer zu beziehen.
Sie implementieren dies mit dem Schlüssel `scopes`, der es Ihnen ermöglicht, Modulspezifizierer-Karten anzugeben, die abhängig vom Pfad des Skripts, das den Import ausführt, verwendet werden.
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
Die Karte in `imports` wird als Fallback verwendet, wenn keine entsprechende Reichweite in der Reichweitenkarte vorhanden ist oder die entsprechenden Reichweiten keine entsprechende Spezifikatoren enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, wird die Modulspezifiziererkarte in `imports` verwendet, die zur Version in `/node_modules/cool-module/index.js` abbildet.

Beachten Sie, dass der zur Auswahl eines Bereichs verwendete Pfad keinen Einfluss darauf hat, wie die Adresse aufgelöst wird.
Der Wert im zugeordneten Pfad muss nicht mit den Bereichspfaden übereinstimmen, und relative Pfade werden immer noch zur Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Ebenso wie für Modulspezifiziererkarten, können Sie viele Bereichsschlüssel haben, und diese können sich überlappende Pfade enthalten.
Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird der spezifischste Bereichspfad als erstes geprüft (die längste Bereichsschlüssel) für einen übereinstimmenden Spezifikator.
Die Browser fallen auf den nächst spezifischeren passenden Bereichspfad zurück, wenn kein übereinstimmender Spezifikator vorhanden ist, und so weiter.
Wenn kein übereinstimmender Spezifikator in einem der übereinstimmenden Bereiche vorhanden ist, überprüft der Browser nach einer Übereinstimmung in der Modulspezifiziererkarte im `imports`-Schlüssel.

### Verbesserung des Cachings durch das Mapping von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil bei diesem Ansatz ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehash

ten Dateinamen importieren, ebenfalls aktualisiert bzw. regeneriert werden müssen.
Dies kann zu einem Kaskadeneffekt von Updates führen, was verschwenderisch im Hinblick auf Netzressourcen ist.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Anstatt auf bestimmte gehashte Dateinamen angewiesen zu sein, hängen Anwendungen und Skripte stattdessen von einer ungehashten Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die folgende bietet dann eine Zuordnung zur eigentlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode des JavaScript-Codes, der davon abhängt, nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur bietet, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt importieren.

Sie müssen ausdrücklich deklarieren, welcher Ressourcentyp importiert wird. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht auf eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald die Inhalte erfolgreich importiert wurden, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet` Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls in Ihrem HTML

Jetzt müssen wir nur noch das `main.js` Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie bei einem regulären Script, mit einigen bemerkenswerten Unterschieden.

Zuallererst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Element einschließen, um dieses Script als Modul zu deklarieren. Um das `main.js` Script zu importieren, verwenden wir folgendes:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modul-Script auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des Körpers des `<script>` Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import` und `export` Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Es wird ein Fehler geworfen, wenn Ihr `<script>` Element nicht das `type="module"` Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link) Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen darauf achten, lokal zu testen — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie unterschiedliches Verhalten von Skriptabschnitten erhalten könnten, die in Modulen im Gegensatz zu klassischen Skripten definiert sind. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht notwendig, das `defer` Attribut (siehe [`<script>` Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)) zu verwenden, wenn ein Modulscript geladen wird; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>` Tags referenziert wurden.
- Zu guter Letzt lassen Sie uns das klar machen — Modulfunktionen werden in den Umfang eines einzelnen Skripts importiert — sie sind nicht im globalen Bereich verfügbar. Folglich können Sie nur auf importierte Funktionen im Skript zugreifen, in dem sie importiert wurden, und Sie können sie nicht aus der JavaScript-Konsole heraus aufrufen. Syntaxfehler werden weiterhin in den Entwicklertools angezeigt, aber einige der erwarteten Debugging-Techniken können Sie nicht verwenden.

In Modulen definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden ausdrücklich an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel würde mit dem folgenden Code:

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

Die Seite weiterhin `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch in diesem Beispiel, dass ein Modul nicht notwendigerweise eine Import-/Exportanweisung benötigt — das Einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte gegenüber benannten Exporten

Die Funktionalität, die wir bisher exportiert haben, besteht aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde bei seinem Namen bei Export referenziert, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art Export, der **Standardexport** genannt wird — dieser ist so konzipiert, dass eine Standardfunktion einfach bereitgestellt werden kann, und hilft auch JavaScript-Module mit bestehenden CommonJS und AMD Modulsystemen zu arbeiten (wie schön in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt; suchen Sie nach "Default exports").

Lassen Sie uns ein Beispiel anschauen, um zu erklären, wie es funktioniert. In unserem basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir wollen dies als unseren Standard exportieren, daher schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` zu der Funktion hinzufügen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Erneut, achten Sie auf das Fehlen von geschweiften Klammern. Das liegt daran, dass pro Modul nur ein Standardexport erlaubt ist und wir wissen, dass `randomSquare` dies ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax für das Umbenennen exportierter Elemente wird weiter unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bis jetzt scheinen unsere Canvas-Formenzeichnungs-Module gut zu funktionieren. Was passiert jedoch, wenn wir ein Modul hinzufügen, das eine andere Form, wie einen Kreis oder ein Dreieck, handhabt? Diese Formen würden wahrscheinlich auch Funktionen wie `draw()`, `reportArea()`, usw. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dasselbe oberste Moduldokument zu importieren, würden wir Konflikte und Fehler erhalten.

Glücklicherweise gibt es mehrere Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie in Ihrem obersten Modul für eine Funktion verwenden.

Zum Beispiel würden beide folgenden Beispiele dieselbe Aufgabe erfüllen, und zwar auf leicht unterschiedliche Weise:

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

Lassen Sie uns ein echtes Beispiel betrachten. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis werden Sie dasselbe Modulsystem wie im vorherigen Beispiel sehen, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes dieselbe `export`-Anweisung am Boden:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren wollen und

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

verwenden, würde der Browser einen Fehler wie "SyntaxError: Redeclaration of import name" (Firefox) werfen.

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

Beachten Sie, dass Sie das Problem auch in den Moduldateien lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie wählen, ist Ihnen überlassen, allerdings macht es vermutlich mehr Sinn, Ihren Modulcode unangetastet zu lassen und die Änderungen in den Importen vorzunehmen. Dies ist insbesondere dann sinnvoll, wenn Sie Importe aus Drittanbieter-Modulen verwenden, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, ist aber etwas umständlich und langatmig. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls in einem Modulobjekt zu importieren. Die folgende Syntaxform tut genau das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle verfügbaren Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv einen eigenen Namensraum gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns erneut ein echtes Beispiel betrachten. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, jedoch umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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
const square = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square.length, reportList);
Square.reportPerimeter(square.length, reportList);
```

Sie können den Code nun wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einfügen), und die Importe sind viel aufgeräumter.

## Module und Klassen

Wie bereits angedeutet, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Ihr Modulcode bereits im objektorientierten Stil geschrieben ist.

Ein Beispiel für unser Formzeichnungsmodul, das mit ES-Klassen neu geschrieben wurde, finden Sie in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalität in einer einzigen Klasse:

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

In [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir sie auf diese Weise:

```js
import { Square } from "./modules/square.js";
```

Und verwenden die Klasse, um unser Quadrat zu zeichnen:

```js
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Aggregieren von Modulen

Es gibt Zeiten, in denen Sie Module zusammenführen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, bei denen Sie Dinge vereinfachen und mehrere Untermodule in ein Elternmodul kombinieren möchten. Dies ist möglich mit der folgenden Export-Syntax im Elternmodul:

```js
export * from "x.js";
export { name } from "x.js";
```

Ein Beispiel dazu finden Sie in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenführt. Wir haben unsere Untermodule auch in ein Unterverzeichnis innerhalb des Moduls-Verzeichnisses namens `shapes` verschoben. Die Modustruktur in diesem Beispiel lautet:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in der folgenden Form:

```js
export { Square };
```

Der nächste Schritt ist der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) haben wir die folgenden Zeilen hinzugefügt:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte aus den einzelnen Untermodulen ab und machen sie effektiv über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die Exporte, auf die in `shapes.js` verwiesen wird, werden im Grunde durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen zusammenhängenden Code in derselben Datei schreiben können.

Daher können wir in der Datei `main.js` auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende Einzelzeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine aktuelle Erweiterung der JavaScript-Module ist das dynamische Laden von Modulen. Dadurch können Sie Module dynamisch laden, nur wenn sie benötigt werden, anstatt alles von Anfang an laden zu müssen. Dies hat offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt resolves (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exportwerte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Haupt-Thread des Browsers und in gemeinschaftlichen und dedizierten Arbeitern erlaubt.
> Jedoch wirft `import()` einen Fehler, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Lassen Sie uns ein Beispiel betrachten. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) Verzeichnis haben wir ein weiteres Beispiel, das auf unserem Klassenbeispiel basiert. Dieses Mal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Tasten — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die entsprechende Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen in unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulausgaben bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Taste mit einem Aufruf von [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Dann fügen wir jedem Knopf einen Ereignis-Listener hinzu, sodass wenn er gedrückt wird, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann zu einer Unterfunktion des Objekts wird, daher müssen wir jetzt auf den Konstruktor mit `Module.` vorangestellt zugreifen, z.B., `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Wenn Sie also einen bestehenden `<script>` Tag in Ihrem HTML haben, der `type="module"` nicht hat, können Sie weiterhin Code nutzen, der als Module verteilt wird, indem Sie es dynamisch importieren.

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

Top-Level-Await ist ein Feature, das in Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu fungieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, ohne dass dabei das Laden von Geschwistermodulen blockiert wird.

Lassen Sie uns ein Beispiel anschauen. Sie können alle Dateien und Codes, die in diesem Abschnitt beschrieben werden, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) Verzeichnis finden, das sich von den vorherigen Beispielen ableitet.

Zuerst deklarieren wir unsere Farbpalette in einer separaten Datei, [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json):

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

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, die exportiert werden soll. Das bedeutet, dass andere Module, die dieses beinhalten, warten, bis `colors` heruntergeladen und geparst wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir werden `colors` anstelle der zuvor verwendeten Zeichenfolgen verwenden, wenn wir unsere Formenfunktionen aufrufen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Trotzdem blockiert er nicht das Laden anderer Module. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` geholt wird.

## Importdeklarationen werden gehiest

Importdeklarationen werden {{Glossary("Hoisting", "gehiest")}}. In diesem Fall bedeutet dies, dass die importierten Werte im Code des Moduls verfügbar sind, selbst vor der Stelle, die sie erklärt, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der restliche Code des Moduls ausgeführt wird.

Zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` weiterhin funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird empfohlen, all Ihre Importe am Anfang des Codes zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der "Abhängigkeits-Graph" genannt wird. Im Idealfall ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mithilfe einer tiefenführenden Traversierung ausgewertet werden.

Jedoch sind Kreise oft unvermeidlich. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was lebendige Bindungen ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird beim Auswerten des Moduls weder `b` noch `a` tatsächlich gelesen, sodass der restliche Code wie gewohnt ausgeführt wird, und die beiden `export`-Deklarationen die Werte von `a` und `b` erzeugen. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log` Anweisungen ebenfalls normal ausgeführt werden.

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

Das liegt daran, als JavaScript `a.js` auswertet, muss es zuerst `b.js` auswerten, die Abhängigkeit von `a.js`. Jedoch verwendet `b.js` `a`, was noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, jedoch `a` asynchron zu verwenden, wird die Modulauswertung erfolgreich:

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

Das liegt daran, dass die Bewertung von `b.js` wird normal abgeschlossen, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Zyklische Importe sollten normalerweise in Ihrem Projekt vermieden werden, da sie Ihren Code anfälliger für Fehler machen. Einige gängige Methoden zur Beseitigung von Kreisen sind:

- Die beiden Module in eines zusammenführen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Einen Teil des Codes von einem Modul in das andere verschieben.

Jedoch können zyklische Importe auch dann auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwerer zu beheben ist.

## Autor von "isomorphen" Modulen

Die Einführung von Modulen fördert das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes für das Passwort Ihres Benutzers generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es hängt davon ab.

Module haben weiterhin Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, wird jedoch einen Fehler auf Ihrem Node.js-Server werfen, weil `window` dort nicht verfügbar ist. Gleichermaßen, wenn der Code Zugriff auf `process` benötigt, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen — das heißt, er zeigt dasselbe Verhalten in jeder Laufzeit. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Bindung". Für den "Kern" konzentrieren Sie sich auf reine JavaScript-Logik wie die Berechnung des Hashs, ohne auf DOM, Netzwerk, Dateisystemzugriff zuzugreifen, und stellen Sie Dienstprogrammfunktionen bereit. Für den "Bindungsteil" können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel könnte die "Browser-Bindung" wählen, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" ihn aus `process.env` lesen könnte, aber Werte, die von beiden Orten gelesen wurden, werden derselben Kernfunktion übergeben und in derselben Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Bindung, die normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Prüfen Sie, ob ein bestimmter globaler Wert existiert, bevor Sie ihn verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und sollten nicht auf den DOM zugreifen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten enden ("isomorph"). Wenn es unmöglich ist, dieselbe Funktionalität zu bieten, oder wenn dies das Laden erheblicher Mengen von Code beinhaltet, während ein großer Teil ungenutzt bleibt, ist es besser, verschiedene "Bindungen" zu verwenden.

- Verwenden Sie ein Polyfill, um einen Fallback für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die nur in Node.js seit Version 18 unterstützt wird, könenn Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Codewiederverwendbarkeit und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von so vielen Menschen wie möglich genutzt wird. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo immer es möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen könnten, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu ergänzen, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber um es zu wiederholen: `.mjs` Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie aufgrund der JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs` Dateien mit dem korrekten MIME-Typ bedient.
- Aufgrund der Tatsache, dass `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` ans Ende von `.mjs` Dateien hinzufügte und dann automatisch die Dateierweiterung versteckte. Also kamen all unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verbergen von Dateierweiterungen deaktivierten und das System schulten `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
