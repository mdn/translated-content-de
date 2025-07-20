---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein - der meiste seiner Nutzung in den frühen Tagen bestand darin, isolierte Skripting-Aufgaben zu erledigen und Ihren Webseiten dort, wo es nötig war, ein wenig Interaktivität zu bieten. Daher waren im Allgemeinen keine großen Skripte nötig. Einige Jahre später haben wir jetzt vollständige Anwendungen, die in Browsern mit viel JavaScript laufen, ebenso wie JavaScript in anderen Kontexten verwendet wird ({{Glossary("Node.js", "Node.js")}}, zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js hat diese Fähigkeit schon lange, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Modulanwendung ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation erforderlich ist. Dies kann nur positiv sein - Browser können das Laden von Modulen optimieren und es effizienter machen, als eine Bibliothek verwenden zu müssen, die all diese zusätzliche clientseitige Verarbeitung und zusätzliche Roundtrips durchführt. Es macht Bundler wie Webpack jedoch nicht überflüssig - Bundler leisten immer noch gute Arbeit beim Partitionieren von Code in sinnvoll große Blöcke und können andere Optimierungen wie Minifizierung, Dead-Code-Eliminierung und Tree-Shaking ausführen.

## Einführung in ein Beispiel

Um die Verwendung von Modulen zu demonstrieren, haben wir ein [Set von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele veranschaulichen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch bewusst einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur eines Beispiels

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

Die zwei Module im Verzeichnis `modules` sind wie folgt beschrieben:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung der Leinwand zu tun haben:
  - `create()` — erstellt eine Leinwand mit einer angegebenen `width`- und `height`-Eigenschaft innerhalb eines umhüllenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) Elements mit einer angegebenen ID, welches wiederum innerhalb eines angegebenen Elternelements angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID der Umhüllung enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Umhüllungselements angehängt wird, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt eine Fläche eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichts-Liste, basierend auf seiner Länge.

### Anmerkung — .mjs vs. .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten benutzt, aber in anderen Ressourcen können Sie die `.mjs`-Erweiterung stattdessen sehen. [V8s Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die Gründe dafür sind:

- Es ist gut zur Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest im Moment `.js` zu verwenden. Um Module im Browser korrekt arbeiten zu lassen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type` Header bedient, der einen JavaScript-MIME-Typ enthält, wie `text/javascript`. Wenn nicht, werden Sie einen strikten MIME-Typ-Prüfungsfehler erhalten, etwa "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bedienen, umfassen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits solch eine Umgebung verwenden oder wenn nicht, aber Sie wissen, was Sie tun und Zugriff darauf haben (d.h. Sie können Ihren Server konfigurieren, um den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien zu setzen). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server nicht kontrollieren, von dem Sie Dateien bereitstellen, oder wenn Sie Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich die Klarheit schätzen, `.mjs` für Module zu verwenden im Gegensatz zu `.js` für "normale" JavaScript-Dateien, aber nicht in das oben beschriebene Problem laufen möchten, können Sie immer `.mjs` während der Entwicklung verwenden und diese in Ihrem Build-Schritt in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">` Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie weiter unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, diese zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, dies zu nutzen, ist, es vor jedes Element zu setzen, das Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen oberste Ebene-Elemente sein: zum Beispiel, Sie können `export` nicht innerhalb einer Funktion verwenden.

Eine praktischere Methode, alle Elemente zu exportieren, die Sie exportieren möchten, ist die Verwendung einer einzigen Export-Anweisung am Ende Ihrer Moduldatei, gefolgt von einer durch Komma getrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Features in Ihr Skript importieren

Wenn Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie diese in Ihr Skript importieren, um sie nutzen zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Komma getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein pfadbezogener Pfad zum Site-Root sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch die Punkt (`.`)-Syntax, um "den aktuellen Speicherort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir suchen möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer und die URL portable machen — das Beispiel funktioniert weiterhin, wenn Sie es an einen anderen Ort in der Site-Hierarchie verschieben.

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
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_unter_verwendung_von_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, wie wenn sie im gleichen Datei definiert wären. Das folgende findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Eigenschaften. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können dennoch Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe die [`import` Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen unter Verwendung von Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul unter Verwendung eines Modulspezifizierers importieren kann, der entweder eine absolute URL oder eine relative URL ist, die unter Verwendung der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) erlauben es Entwicklern, stattdessen fast beliebigen Text im Modulspezifizierer anzugeben, wenn ein Modul importiert wird; die Karte liefert einen entsprechenden Wert, der beim Auflösen der Modul-URL ersetzt wird.

Zum Beispiel definiert der `imports` Schlüssel in der untenstehenden Importkarte ein "Modulspezifizierer-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die entsprechenden Werte bei der Auflösung der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden in absolute URL-Adressen unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments, das die Importkarte enthält, aufgelöst.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) definiert.
Beachten Sie, dass eine Importkarte nur auf das Dokument Anwendung findet – die Spezifikation deckt nicht ab, wie eine Importkarte im Kontext von Arbeitern oder Arbeitern angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein abschließender Schrägstrich auf dem Modulspezifizierer-Schlüssel vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel, unten haben wir Bare-Modulnamen abgeglichen und eine URL auf einen anderen Pfad umgeleitet.

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

Es ist möglich, dass für einen Modulspezifizierer mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel aus.

Importkarten erlauben es, Module unter Verwendung von einfachen Modulnamen (wie in Node.js) zu importieren, und sie können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Zwar nicht obig gezeigt, aber sie erlauben auch, dass bestimmte Versionen einer Bibliothek importiert werden, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen lassen sie Entwickler ergonomischeren Importcode schreiben und erleichtern das Verwalten von verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden.
Dies kann den Aufwand reduzieren, die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu nutzen.

Die folgenden Abschnitte vertiefen die oben beschriebenen Funktionen.

### Funktionsprüfung

Sie können die Unterstützung für Importkarten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als bare Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie bare Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulenamen auf einen standardmäßigen Standort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax nutzen, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um bare Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, die er braucht, um Modulspezifizierer in URLs aufzulösen (JavaScript wird einen `TypeError` auslösen, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht in einen Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall zu einem relativen Adresswert mappt.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir nun einen bare name verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleitung von Modulpfaden

Einträge in Modulspezifiziererkarten, bei denen sowohl der Spezifizierer-Schlüssel als auch sein zugehöriger Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht die Umleitung eines ganzen Satzes von Import-URLs von einem Ort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende Definition einer JSON-Importkarte mappt `lodash` als einen bare name, sowie das Modulspezifizierer-Prefix `lodash/` auf den Pfad `/node_modules/lodash-es/` (auf die Basis-URL des Dokuments aufgelöst):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Abbildung können Sie sowohl das gesamte "Paket" importieren, indem Sie den bare name verwenden, als auch Module darin (indem Sie die Pfadabbildung verwenden):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen bare-Modulspezifizierer-Schlüssel für diese Datei erstellen, z.B. `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul vernünftig sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein - er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul mit absoluten Pfaden zu einer Ressource mit Ihren eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gezielte Module für die Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und ihre Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Infolgedessen kann eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen enthalten, ohne dass die Benutzer über diese Komplexität nachdenken müssen.

> [!NOTE]
> Sie können die Versionsverwaltung auch mit relativen Pfaden erreichen, aber dies ist suboptimal, da es unter anderem eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, bare Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie unter Verwendung des gleichen Modulspezifizierers zu referenzieren.
Sie implementieren dies mit dem `scopes` Schlüssel, der es Ihnen erlaubt, Modulspezifiziererkarten bereitzustellen, die je nach dem Pfad des Skripts, das den Import vornimmt, verwendet werden.
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

Mit dieser Abbildung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte unter `imports` wird als Rückfall verwendet, wenn es keinen passenden Bereich in der gescoped Karte gibt, oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht-passenden Bereichspfad importiert wird, dann wird die Modulspezifiziererkarte in `imports` stattdessen verwendet, die auf die Version in `/node_modules/cool-module/index.js` mappt.

Beachten Sie, dass der zur Auswahl eines Bereichs verwendete Pfad keine Auswirkungen darauf hat, wie die Adresse aufgelöst wird.
Der Wert im gemappten Pfad muss nicht mit dem Bereichspfad übereinstimmen, und relative Pfade werden immer noch auf die Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Wie bei Modulspezifiziererkarten können Sie viele Bereichsschlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche mit der verweisenden URL übereinstimmen, wird der spezifischste Bereichspfad zuerst überprüft (der längste Bereichsschlüssel) auf einen passenden Spezifizierer.
Die Browser fallen auf den nächsten spezifischsten passenden Bereichspfad zurück, wenn es keinen passenden Spezifizierer gibt, und so weiter.
Wenn es keinen passenden Spezifizierer in einem der passenden Bereiche gibt, überprüft der Browser auf eine Übereinstimmung in der Modulspezifiziererkarte im `imports` Schlüssel.

### Caching durch Herausgreifen von gehashten Dateinamen verbessern

Skriptdateien, die von Websites verwendet werden, haben oft gehashed Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieser Methode ist, dass, wenn sich ein Modul ändert, alle Module, die es unter Verwendung seines gehashten Dateinamens importieren, ebenfalls aktualisiert/neu erstellt werden müssen.
Dies führt möglicherweise zu einer Kaskade von Updates, was eine Verschwendung von Netzwerkressourcen darstellt.

Importkarten liefern eine bequeme Lösung für dieses Problem.
Anstatt auf bestimmte gehashte Dateinamen zu verlassen, beziehen sich Anwendungen und Skripte stattdessen auf eine ungehashte Version des Modulnamens (Adresse).
Eine Importkarte wie die untenstehende bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch der Hash im Dateinamen. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls zu reflektieren.
Wir müssen den Quellcode von keinem JavaScript-Code aktualisieren, der von ihm abhängt, weil sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Merkmal, das eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren, oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt.

Sie müssen ausdrücklich angeben, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und scheitern, wenn z.B. `./data.json` nicht in eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Nachdem Sie erfolgreich importiert wurden, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Nun müssen wir nur das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element enthalten, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einfügen, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements einfügen:

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

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Module, die inline in HTML deklariert sind, können nur andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Andere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), werden Sie auf CORS-Fehler wegen der Sicherheitsanforderungen von JavaScript-Modulen stoßen. Sie müssen Ihr Testen über einen Server durchführen.
- Außerdem beachten Sie, dass Sie möglicherweise ein anderes Verhalten von Skriptabschnitten, die innerhalb von Modulen definiert sind, im Vergleich zu klassischen Skripten erhalten. Dies liegt daran, dass Module automatisch den {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut (siehe [`<script>` Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)) zu verwenden, wenn Sie ein Modulskript laden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zu guter Letzt, machen wir das klar — Modulfunktionen werden in den Geltungsbereich eines einzelnen Skripts importiert — sie sind nicht im globalen Geltungsbereich verfügbar. Daher werden Sie nur in der Lage sein, importierte Funktionen in dem Skript zu verwenden, in das sie importiert wurden, und Sie werden nicht in der Lage sein, von der JavaScript-Konsole auf sie zuzugreifen. Sie werden immer noch Syntaxfehler in den Entwicklertools angezeigt bekommen, aber Sie werden nicht in der Lage sein, einige der Debugging-Techniken zu verwenden, die Sie zu verwenden erwartet haben.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind ausdrücklich an das globale Objekt angehängt. Andererseits sind global-definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, mit dem folgenden Code:

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

wird die Seite immer noch `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import/-Export-Anweisung benötigt — das einzige, was benötigt wird, ist, dass der Einstiegspunkt das `type="module"` haben muss.)

## Standard-Exporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jeder Artikel (sei es eine Funktion, `const`, etc.) wurde bei seinem Export mit seinem Namen referenziert, und dieser Name wurde auch bei seinem Import verwendet.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird — dieser ist dazu gedacht, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff schön erklärt; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserer basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, deshalb schreiben wir dies am Ende der Datei:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion voranstellen und es als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

Im `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` dies ist. Die obige Zeile ist im Wesentlichen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen exportierter Elemente wird im folgenden Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formen auf der Leinwand in Ordnung zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form befasst, wie einem Kreis oder Dreieck? Diese Formen würden wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()`, etc. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dieselbe Top-Level-Moduldatei zu importieren, würden wir Konflikte und Fehler bekommen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dieses Problem zu umgehen. Wir werden diese in den folgenden Abschnitten betrachten.

## Umbenennen von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Namen zu ändern, den Sie innerhalb des Top-Level-Moduls für eine Funktion verwenden werden.

Zum Beispiel würden beide der folgenden dasselbe tun, wenn auch auf eine etwas andere Weise:

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

Schauen wir uns ein echtes Beispiel an. Im [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes die gleiche `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren, wenn wir versuchen würden, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler werfen, wie "SyntaxError: redeclaration of import name" (Firefox).

Stattdessen müssen wir die Importe umbenennen, sodass sie einzigartig sind:

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

und es würde genauso funktionieren. Welchen Stil Sie verwenden, hängt von Ihnen ab, aber es macht arguably mehr Sinn, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Das macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, die Sie nicht kontrollieren können.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert in Ordnung, aber sie ist ein wenig unübersichtlich und umständlich. Eine noch bessere Lösung ist, die Funktionen eines jeden Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle verfügbaren Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv seinen eigenen Namensraum gibt. Also zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns erneut ein echtes Beispiel betrachten. Wenn Sie in unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel, aber umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

Sie können den Code nun genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einschließen), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option zur Vermeidung von Konflikten in Ihrem Code und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formzeichnungsmoduls sehen, das mit ES-Klassen im [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis neu geschrieben wurde. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle Funktionen in einer einzigen Klasse:

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

Drüben in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir sie so:

```js
import { Square } from "./modules/square.js";
```

Und nutzen dann die Klasse, um unser Quadrat zu zeichnen:

```js
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrfach Abhängigkeitsebenen haben, bei denen Sie Dinge vereinfachen möchten, indem Sie mehrere Untermodule in ein übergeordnetes Modul kombinieren. Dies ist möglich mit der Exportsyntax der folgenden Formen im übergeordneten Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel, siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. Also die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export von derselben Form, z.B.

```js
export { Square };
```

Der nächste Schritt ist der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte aus den einzelnen Untermodulen und machen sie effektiv aus dem `shapes.js` Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde durch die Datei umgeleitet und existieren dort nicht wirklich, so dass Sie keinen nützlichen zugehörigen Code in derselben Datei schreiben können.

Jetzt können Sie im `main.js`-Dateiblatt auf alle drei Modulklassen zugreifen, indem Sie

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine kürzliche Ergänzung zu JavaScript-Modulfunktionalitäten ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, bei der der Pfad zum Modul als Parameter übergeben wird. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) aufgelöst wird, das Ihnen Zugriff auf dessen Exporte gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers sowie in geteilten und dedizierten Arbeitern erlaubt.
> `import()` wird jedoch werfen, wenn es in einem Service-Arbeiter oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Betrachten Sie ein Beispiel. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Dieses Mal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulausgaben bleiben wie zuvor.

In `main.js` haben wir zunächst eine Referenz zu jeder Schaltfläche mithilfe eines [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufrufs erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Dann hängen wir einen Ereignis-Listener an jede Schaltfläche, sodass bei Drücken das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Versprechensauflösung ein Modulobjekt zurückgibt, die Klasse dann zu einem Subfeature des Objekts gemacht wird, daher müssen wir jetzt auf den Konstruktor mit `Module.` davor zugreifen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie dennoch

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

Top-Level-Await ist eine Funktion, die innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht, dass Module wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) funktionieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne die Verhinderung der Ladevorgänge von Geschwistermodulen.

Lassen Sie uns einen Blick auf ein Beispiel werfen. Sie können alle Dateien und den Code, der in diesem Abschnitt beschrieben wird, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis finden, das von den vorherigen Beispielen erweitert wird.

Zuerst werden wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei deklarieren:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie hier die letzte Exportzeile.

Wir verwenden das Schlüsselwort `await` bevor wir die konstante `colors` angeben, um zu exportieren. Dies bedeutet, dass alle anderen Module, die dieses verwenden, warten werden, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir werden `colors` anstelle der zuvor verwendeten Strings verwenden, wenn wir unsere Formfunktionen aufrufen:

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

Dies ist nützlich, da der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bevor der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) gelaufen ist. Es wird jedoch nicht die Ladezeiten ihrer Geschwistermodule blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen werden, während `colors` abgerufen wird.

## Importerklärungen sind hoisted

Importerklärungen sind {{Glossary("Hoisting", "hoisted")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls verfügbar sind, selbst bevor sie deklariert werden, und dass die Seiteneffekte des importierten Moduls bevor, dass der Rest des Codes im Modul gestartet wird.

Zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` trotzdem funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es als gute Praxis angesehen, alle Ihre Importe am Anfang des Codes zu setze, was es leichter macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen sogenannten "gerichteten Graphen", genannt "Dependenzgraphen". In einer idealen Welt ist dieses Graphen [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann das Graphen unter Verwendung einer tiefen-erst Traversierung ausgewertet werden.

Jedoch sind Zyklen oft unvermeidlich. Zyklischer Import tritt auf, wenn das Modul `a` das Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe scheitern nicht immer. Der Wert einer importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (und ermöglicht [Live Binding](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher, zu dem Zeitpunkt, an dem das Modul ausgewertet wird, weder `b` noch `a` wird tatsächlich gelesen, so wird der Rest des Codes wie gewohnt ausgeführt, und die beiden `export`-Deklarationen erzeugen die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` und `b` verfügbar, so dass die beiden `console.log`-Anweisungen auch wie gewohnt ausgeführt werden.

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

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, es zuerst `b.js` auswerten muss, die Abhängigkeit von `a.js`. Jedoch verwendet `b.js` `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron zu verwenden, aber `a` asynchron, gelingt die Modulauswertung:

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

Dies liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird, so dass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Sie sollten zyklische Importe in Ihrem Projekt in der Regel vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Zyklus-Beseitigungstechniken sind:

- Die beiden Module zu einem zusammenfügen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Ein Teil des Codes von einem Modul in das andere verschieben.

Jedoch können zyklische Importe auch auftreten, wenn die Bibliotheken voneinander abhängen, was schwerer zu beheben ist.

## Authoring „isomorphic“ modules

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code in modularer Weise zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes für das Passwort Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: Es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, aber wird einen Fehler auf Ihrem Node.js-Server auslösen, weil `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` erfordert, um funktional zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird häufig empfohlen, den Code „isomorphic“ zu machen — das heißt, dass er das gleiche Verhalten in jeder Laufzeitumgebung zeigt. Dies wird häufig auf drei Arten erreicht:

- Teilen Sie Ihre Module in einen "Core" und eine "Binding" auf. Im "Core" konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateisystem-Zugriff, und bieten Sie Utilitätsfunktionen an. Im "Binding"-Teil können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel könnte das "Browser-Binding" wählen, den Wert aus einem Eingabefeld zu lesen, während das "Node-Binding" es aus `process.env` lesen kann, aber Werte, die von beiden Orten gelesen werden, in dieselbe Kernfunktion geleitet werden und auf die gleiche Weise behandelt werden. Der Kern kann in jeder Umgebung importiert und in derselben Weise verwendet werden, während nur das Binding, das normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Erkennen Sie, ob ein bestimmter globaler Wert existiert, bevor Sie ihn verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht auf den DOM zugreifen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten ("isomorphic") enden. Wenn es unmöglich ist, die gleiche Funktionalität zu bieten, oder wenn dies das Laden von erheblichen Mengen Code erfordert, während ein Großteil nicht verwendet wird, verwenden Sie besser unterschiedliche "Bindings" stattdessen.

- Verwenden Sie ein Polyfill, um eine Rückfallebene für fehlende Funktionen bereitzustellen. Wenn Sie beispielsweise die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst ab v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trends zur Code-Wiederverwendbarkeit und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, der Liste hinzuzufügen, wenn Sie mehr entdecken!

- Wir haben dies zuvor erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, sonst erhalten Sie einen strikten MIME-Typ-Fehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), werden Sie CORS-Fehler wegen der Sicherheitsanforderungen von JavaScript-Modulen erhalten. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem korrekten MIME-Typ bedient.
- Da `.mjs` eine nicht-standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme es möglicherweise nicht oder versuchen es mit etwas anderem zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS `.js` stillschweigend an das Ende von `.mjs`-Dateien anhängte und dann die Dateierweiterung automatisch verbarg. Also kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verbergen von Dateierweiterungen ausgeschaltet hatten und es trainierten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
