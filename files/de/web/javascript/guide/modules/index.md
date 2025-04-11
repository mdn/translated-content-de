---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme waren anfangs ziemlich klein – die meiste Nutzung in den ersten Tagen bestand darin, isolierte Skriptaufgaben auszuführen und Ihren Webseiten dort, wo es erforderlich war, ein wenig Interaktivität zu verleihen, sodass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ, ohne dass Transpilation erforderlich ist. Das kann nur von Vorteil sein – Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all diese zusätzlichen clientseitigen Verarbeitungen und zusätzlichen Übertragungen durchführen zu müssen. Es macht Bundler wie webpack jedoch nicht überflüssig – Bundler leisten nach wie vor gute Arbeit darin, Code in sinnvoll große Abschnitte aufzuteilen, und können andere Optimierungen wie Minifizierung, Dead Code Elimination und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen darauf zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module deutlich zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben sollte ziemlich vertraut vorkommen.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen im Zusammenhang mit dem Einrichten der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines Wrapper [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, die selbst innerhalb eines angegebenen Elternelements angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements angehängt wird und für die Ausgabe von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtsliste, gegebenenfalls mit seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtsliste, gegebenenfalls mit seiner Länge.

### Hinweis — .mjs vs. .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen kann die `.mjs`-Erweiterung verwendet werden. [V8s-Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), beispielsweise. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es wird deutlich, welche Dateien Module sind und welche normale JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst `.js` beizubehalten. Um Module im Browser richtig funktionieren zu lassen, müssen Sie sicherstellen, dass Ihr Server diese mit einem `Content-Type`-Header ausliefert, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, tritt ein strenger MIME-Typ-Überprüfungsfehler in der Art von "Der Server antwortete mit einem Nicht-JavaScript MIME-Typ" auf, und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt ausliefern, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder nicht, aber wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch Verwirrung stiften, wenn Sie nicht den Server kontrollieren, von dem Sie Dateien bereitstellen, oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit von `.mjs` für Module im Gegensatz zu `.js` für "normale" JavaScript-Dateien wirklich wichtig ist, aber nicht in das oben beschriebene Problem geraten möchten, können Sie während der Entwicklung immer `.mjs` verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, diese zu exportieren. Dies erfolgt durch die {{jsxref("Statements/export", "export")}}-Anweisung.

Die einfachste Möglichkeit, dies zu verwenden, ist, es vor alle Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Toplevel-Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzelne Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, umschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie diese in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, umschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ stellt einen String bereit, den die JavaScript-Umgebung in einen Pfad zu den Moduldaten auflösen kann.
In einem Browser könnte dies ein pfad relativer zur Site-Root sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt-(`.`)-Syntax, um den „aktuellen Standort“ zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir zu finden versuchen. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen – das Beispiel funktioniert immer noch, wenn Sie es an einen anderen Ort in der Site-Hierarchie verschieben.

Zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen finden Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js).

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Dateipaket definiert. Das Folgende findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das es exportiert, neu zugewiesen werden. Siehe das [`import` Reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden gewünschten Text im Modulspezifizierer anzugeben, wenn ein Modul importiert wird; die Karte bietet einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports` Schlüssel in der folgenden Importkarte ein "Modulspezifiziererkarte" JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können, und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden in absolute URL-Adressen unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments aufgelöst, das die Importkarte enthält.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem Attribut `type` auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) definiert.
Beachten Sie, dass eine Importkarte nur für das Dokument gilt – die Spezifikation deckt nicht ab, wie eine Importkarte im Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn es keinen nachgestellten Schrägstrich am Modulspezifizierer-Schlüssel gibt, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel unten matchen wir eingängige Modulnamen und remappen einen URL zu einem anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, dann muss der Wert auch einen haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dadurch kann die Umleitung einer ganzen Klassen von URLs durchgeführt werden.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` entsprechen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel aus.

Importkarten ermöglichen es, Module mit eingängigen Modulnamen zu importieren (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl dies oben nicht gezeigt wurde, ermöglichen sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen lassen sie Entwickler ergonomischeren Import-Code schreiben und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten von Modulen, die durch eine Site verwendet werden.
Dies kann den Aufwand reduzieren, dieselben JavaScript-Bibliotheken sowohl im Browser- als auch im Server-Umfeld zu verwenden.

Die folgenden Abschnitte erweitern die oben skizzierten Funktionen.

### Funktionsunterstützung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst umfassend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als eingängige Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie eingängige Namen als Modulspezifizierer verwenden.
Das funktioniert, weil die Umgebung Modulnamen in einem Standardverzeichnis im Dateisystem auflösen kann.
Zum Beispiel verwenden Sie möglicherweise die folgende Syntax, um das „square“-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um eingängige Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen zur Verfügung stellt, die er benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn versucht wird, einen Modulspezifizierer zu importieren, der nicht in eine Modulposition aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square` Modulspezifizierer-Schlüssel definiert, der in diesem Fall einer relativen Adressangabe entspricht.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen eingängigen Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Neue Zuweisungen von Modulpfaden

Einträge in der Modulspezifiziererkarte, bei denen sowohl der spezifizierer Schlüssel als auch der dazugehörige Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfadpräfix genutzt werden.
Dies ermöglicht die Neue Zuweisung eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es in dem Node-Ökosystem sehen.

> [!NOTE]
> Der nachgestellte `/` gibt an, dass der Modulspezifizierer-Schlüssels als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgenden JSON-Importdefinitionskarte mappt `lodash` als eingängigen Namen und das Modulspezifiziererpräfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (gelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuweisung können Sie sowohl das gesamte "Paket" importieren, indem Sie den eingängigen Namen verwenden, als auch Module darin (indem Sie die Pfadzuweisung nutzen):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die Endung `.js` zu importieren, aber Sie müssten einen eingängigen Modulspezifizierer für diese Datei erstellen, z. B. `lodash/fp`, anstatt den Pfad zu verwenden.
Dies kann für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Zuweisungen

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein – es kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies könnte nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen ersetzen möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Spezifizierte Module für die Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und ihre Abhängigkeiten zu verwalten.
Der Paketmanager sorgt dafür, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Daher kann eine komplexe Anwendung zwar dasselbe Modul mehrmals mit mehreren verschiedenen Versionen an verschiedenen Stellen des Modulgraphen enthalten, Benutzer müssen sich jedoch nicht mit dieser Komplexität auseinandersetzen.

> [!NOTE]
> Sie können auch die Versionsverwaltung mit relativen Pfaden erreichen, aber dies ist suboptimal, weil es unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, eingängige Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie mit den gleichen Modulspezifizierern zu referenzieren.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifiziererkarten bereitzustellen, die basierend auf dem Pfad des Scripts, das den Import durchführt, genutzt werden.
Das untenstehende Beispiel demonstriert dies.

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

Mit dieser Zuweisung, wenn ein Script mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, falls keine übereinstimmende gelenkter Karteneintrag in der Modulspezifiziererkarte vorhanden ist, oder die übereinstimmenden Scopes keinen übereinstimmenden Spezifizierer enthalten. Beispielsweise, wenn `cool-module` von einem Script mit einem nicht übereinstimmenden Scope-Pfad importiert wird, wird stattdessen die Modulspezifiziererkarte in `imports` verwendet, die zur Version in `/node_modules/cool-module/index.js` abstimmt.

Beachten Sie, dass der Pfad, der zur Auswahl eines Scopes verwendet wird, die Art und Weise, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im zugeordneten Pfad muss nicht mit dem Scope-Pfad übereinstimmen, und relative Pfade werden immer noch auf die Basis-URL des Scripts, das die Importkarte enthält, bezogen.

Genau wie bei Modulspezifiziererkarten können Sie viele Scope-Schlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Scopes mit der Ursprungs-URL übereinstimmen, wird der spezifischste Scope-Pfad zuerst (der längste Scope-Schlüssel) überprüft, um einen übereinstimmenden Spezifizierer zu finden.
Die Browser setzen auf den nächsten spezifischsten übereinstimmenden geglätteten Bereich zurück, wenn kein übereinstimmender Spezifizierer vorhanden ist, und so weiter.
Wenn es keinen übereinstimmenden Spezifizierer in irgendeinem der übereinstimmenden Scopes gibt, überprüft der Browser auf eine Übereinstimmung in der Modulspezifiziererkarte im Schlüssel `imports`.

### Verbessern des Caching durch das Mapping von Hashed-Filenames

Von Websites verwendete Skriptdateien haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieser Vorgehensweise ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert/neu generiert werden müssen.
Dies führt möglicherweise zu einer Kaskade von Aktualisierungen, was eine Verschwendung von Netzressourcen ist.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf spezifische gehashte Dateinamen zu verlassen, hängen Anwendungen und Skripte ab sofort von einer ungehashte Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die unten aufgeführte liefert dann ein Mapping zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch der Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Codequellcode für das JavaScript nicht aktualisieren, der davon abhängt, weil sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Eine aufregende Funktion, die eine einheitliche Modularchitektur bietet, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit deklarieren, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und wirft einen Fehler, wenn die aufgelöste Ressource etwas anderes ist. Für den Import von JSON, CSS, oder anderen Ressourcentypen verwenden Sie die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und scheitern, wenn zum Beispiel `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald der Import erfolgreich abgeschlossen ist, können Sie den importierten Wert jetzt als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines normalen Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Erstens müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element enthalten, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elementkörpers platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht regulären Skripten. Ein Fehler wird geworfen, wenn Ihr `<script>`-Element nicht das Attribut `type="module"` hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module nur importieren, aber alles, was sie exportieren, ist nicht von anderen Modulen zugänglich (weil sie keine URL besitzen).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten – wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://` URL) zu laden, stoßen Sie aufgrund von JavaScript-Modul-Sicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie unterschiedliche Verhaltensweisen von Skriptabschnitten beobachten können, die in Modulen im Gegensatz zu klassischen Skripten definiert sind. Dies liegt daran, dass Module die {{jsxref("Strict_mode", "strict mode", "", 1)}} automatisch verwenden.
- Es ist nicht notwendig, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Reference/Elements/script#attributes)) beim Laden eines Modulskripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert werden.
- Zuletzt, aber nicht zuletzt, lassen Sie uns dies klarstellen – Modulfunktionen werden in den Scope eines einzelnen Skripts importiert – sie sind nicht im globalen Bereich verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert sind, und nicht über die JavaScript-Konsole. Sie erhalten immer noch Syntaxfehler, die in den DevTools angezeigt werden, aber können nicht einige der Debugging-Techniken verwenden, die Sie vielleicht erwartet haben.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden explizit an das globale Objekt angehängt. Andererseits stehen global definierte Variablen im Modul zur Verfügung. Zum Beispiel, gegeben der folgende Code:

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

Die Seite würde immer noch `Hello` anzeigen, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht notwendigerweise eine Import-/Export-Anweisung benötigt – das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** – jedes Element (sei es eine Funktion, `const`, etc.) wurde beim Export mit seinem Namen referenziert, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, die **Standardexport** genannt wird – dies ist so konzipiert, dass es einfach ist, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie dies anschaulich erklärt wird in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Betrachten wir ein Beispiel, während wir erklären, wie es funktioniert. In unserem `basic-modules` `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standard exportieren, also schreiben wir am Ende der Datei:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion voranstellen und es als anonyme Funktion definieren, wie dies:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Erneut beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die Syntax `as` für das Umbenennen von exportierten Elementen wird unten im Abschnitt [Umbenennen von Imports und Exports](#umbenennen_von_imports_und_exports) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Modulen zum Zeichnen von Formen auf der Leinwand zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form befasst, wie einem Kreis oder Dreieck? Diese Formen würden wahrscheinlich assoziierte Funktionen wie `draw()`, `reportArea()`, etc. haben; wenn wir versuchen, verschiedene Funktionen mit demselben Namen in dasselbe Toplevel-Moduldatei zu importieren, würden wir Konflikte und Fehler erhalten.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, um dieses Problem zu umgehen. Wir werden diese in den folgenden Abschnitten behandeln.

## Umbenennen von Imports und Exports

In den geschweiften Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Namen zu ändern, den Sie innerhalb des Toplevel-Moduls für eine Funktion verwenden werden.

Also zum Beispiel, beide der folgenden würden den gleichen Job machen, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein reales Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu melden.

In jedem dieser Module haben wir Funktionen mit denselben exportierten Namen, und daher hat jedes von ihnen dieselbe `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden, es zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler werfen, wie "SyntaxError: redeclaration of import name" (Firefox).

Stattdessen müssen wir die Importe umbenennen, so dass sie eindeutig sind:

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

Und es würde genauso funktionieren. Welchen Stil Sie verwenden, bleibt Ihnen überlassen, obwohl es argumentierbar mehr Sinn macht, Ihren Modulcode in Ruhe zu lassen, und Änderungen in den Importen vorzunehmen. Dies macht insbesondere Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber sie ist ein wenig unordentlich und umständlich. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls in einem Modulobjekt zu importieren. Die folgende Syntaxform macht genau das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle in `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, indem es ihm effektiv einen eigenen Namensraum gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns erneut in ein reales Beispiel schauen. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis öffnen, sehen Sie dasselbe Beispiel erneut, jedoch umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

```js
export { name, draw, reportArea, reportPerimeter };
```

Die Importe dagegen sehen so aus:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

So können Sie den Code jetzt genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einbeziehen), und die Importe sind viel eleganter.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Moduls zum Zeichnen von Formen sehen, das mit ES-Klassen umgeschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt ihre gesamte Funktionalität in einer einzigen Klasse:

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

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammen aggregieren möchten. Sie haben möglicherweise mehrere Ebenen von Abhängigkeiten, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule zu einem übergeordneten Modul kombinieren. Dies ist durch die Verwendung der folgenden Formen der Export-Syntax im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen aus `circle.js`, `square.js` und `triangle.js` zusammen aggregiert. Wir haben unsere Untermodule auch in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

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

Als nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) nehmen wir die folgenden Zeilen auf:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte der einzelnen Untermodule und machen sie effektiv aus dem `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

Jetzt in der `main.js`-Datei können wir auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modulladen

Eine kürzliche Ergänzung zur JavaScript-Module-Funktionalität ist das dynamische Modulladen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lesen wir weiter und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Modul-Objekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugang zu den Exporten dieses Objekts bietet. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers erlaubt sowie in gemeinsamen und dedizierten Arbeitern.
> `import()` wird jedoch einen Fehler werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) Verzeichnis haben wir ein weiteres Beispiel, das auf unserem Klassenbeispiel basiert. Diesmal zeichnen wir jedoch beim Laden des Beispiels nichts auf der Leinwand. Stattdessen haben wir drei Schaltflächen – "Circle", "Square" und "Triangle" –, die beim Drücken das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen – die Modulausgaben bleiben identisch mit zuvor.

In der `main.js`-Datei haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jedem Knopf einen Ereignislistener hinzu, sodass beim Drücken das entsprechende Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann zu einem Teilobjekt des Objekts wird, daher müssen wir jetzt auf den Konstruktor mit `Module.` davor zugreifen, z. B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen besteht darin, dass sie immer verfügbar sind, sogar in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie weiterhin den in Modulen verteilten Code verwenden, indem Sie ihn dynamisch importieren.

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

Top Level Await ist eine in Modulen verfügbare Funktion. Das bedeutet, dass das Schlüsselwort `await` verwendet werden kann. Es ermöglicht Modulen, wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, ohne das Laden von Geschwistermodulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie können alle Dateien und den Code, die in diesem Abschnitt beschrieben sind, im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) finden, das von den vorherigen Beispielen ausgeht.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Das bedeutet, dass alle Module, die dieses beinhalten, warten, bis `colors` heruntergeladen und verarbeitet wurde, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

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

Dies ist nützlich, weil der Code innerhalb [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) erst ausgeführt wird, wenn der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht das Laden anderer Module blockieren. Beispielsweise lädt unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin, während `colors` abgerufen wird.

## Importdeklarationen werden gehostet

Importdeklarationen werden {{Glossary("Hoisting", "gehostet")}}. In diesem Fall bedeutet dies, dass die importierten Werte im Modulcode verfügbar sind, noch bevor die Stelle erklärt wird, an der sie deklariert werden, und dass die Seiteneffekte des importierten Moduls vor dem Starten des restlichen Modulcodes ausgeführt werden.

Zum Beispiel würde das Importieren von `Canvas` in `main.js` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Ihre Importe am Anfang des Codes zu platzieren, was die Analyse der Abhängigkeiten erleichtert.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, usw. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph) namens "Abhängigkeitsgraphen". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einer Tiefendurchsuchung ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import tritt auf, wenn Modul `a` das Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (daher Erlauben von [Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), und nur wenn die Variable zu diesem Zeitpunkt uninitialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zu dem Zeitpunkt, an dem das Modul ausgewertet wird, weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird und die beiden `export` Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log` Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass JavaScript `a.js` auswerten muss, benötigt es zuerst `b.js` auszuwerten, die Abhängigkeit von `a.js`. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron verwenden, wird die Modulauswertung erfolgreich sein:

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

Sie sollten zyklische Importe in Ihrem Projekt in der Regel vermeiden, weil sie Ihren Code fehleranfälliger machen. Einige übliche Zyklus-Eliminierungs-Techniken sind:

- Kombinieren Sie die beiden Module in eins.
- Verschieben Sie den gemeinsamen Code in ein drittes Modul.
- Verschieben Sie einige Code von einem Modul zu dem anderen.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängen, was schwieriger zu beheben ist.

## Autorisierende "isomorphe" Module

Die Einführung von Modulen fördert das JavaScript-Ökosystem, um Code in modularer Form zu verteilen und wiederzuverwendet zu machen. Dies bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es hängt davon ab.

Module haben immer noch Zugriff auf globale Variablen, wie vorher gezeigt. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, verursacht jedoch einen Fehler auf Ihrem Node.js-Server, weil `window` dort nicht verfügbar ist. Wenn der Code hingegen Zugriff auf `process` benötigt, um funktional zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird häufig empfohlen, den Code "isomorph" zu gestalten – das heißt, in jeder Laufzeitumgebung das gleiche Verhalten zu zeigen. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Verbindung". Für den "Kern" konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne irgendeine DOM-, Netzwerk- oder Dateisystemzugriff zu haben und nützliche Funktionen bereitzustellen. Für den "Verbindungsteil" können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel kann das "Browser-Bindeglied" wählen, den Wert von einem Eingabefeld zu lesen, während das "Node-Bindeglied" es aus `process.env` liest, aber Werte, die von beiden Orten gelesen werden, fließen in dieselbe Kernfunktion und werden in der gleichen Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Verbindung, die normalerweise leichtgewichtig ist, plattformabhängig sein muss.
- Prüfen Sie, ob ein bestimmter globaler Wert existiert, bevor Sie ihn verwenden. Wenn Sie z. B. prüfen, dass `typeof window === "undefined"` ist, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und keinen DOM verwenden sollten.

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

  Dies ist bevorzugt, wenn die beiden Zweige tatsächlich mit demselben Verhalten enden ("isomorph"). Wenn es unmöglich ist, die gleiche Funktionalität zu bieten, oder wenn dies bedeutet, dass erhebliche Code-Mengen geladen werden, während ein großer Teil ungenutzt bleibt, ist es besser, unterschiedliche Bindungen zu verwenden.

- Verwenden Sie ein Polyfill, um ein Fallback für fehlende Funktionen bereitzustellen. Wenn Sie beispielsweise die Funktion [`fetch`](/de/docs/Web/API/Fetch_API) verwenden möchten, die erst seit Node.js v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist eine vorhandene globale variable in jeder Umgebung und nützlich, wenn Sie globale variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend zur Wiederverwendbarkeit von Code und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, sodass er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, zur Liste hinzuzufügen, wenn Sie mehr entdecken!

- Wir haben das schon erwähnt, aber nochmals zur Erinnerung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einem `file://` URL) zu laden, stoßen Sie aufgrund von JavaScript-Modul-Sicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem richtigen MIME-Typ ausliefert.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS den Dateinamen .mjs stillschweigend durch .js ergänzt hat und dann die Dateiendung automatisch versteckte. Alle unsere Dateien wurden tatsächlich als `x.mjs.js` ausgegeben. Nachdem wir das automatische Verstecken der Dateiendungen abgeschaltet hatten und es akzeptiert haben, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
