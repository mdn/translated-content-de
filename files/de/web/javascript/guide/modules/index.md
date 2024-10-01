---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen zunächst ziemlich klein – in den frühen Tagen wurde es hauptsächlich für isolierte Scripting-Aufgaben verwendet, um ein wenig Interaktivität zu Ihren Webseiten hinzuzufügen, wo nötig, daher waren große Skripte im Allgemeinen nicht notwendig. Ein paar Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird ([Node.js](/de/docs/Glossary/Node.js) zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus zum Aufteilen von JavaScript-Programmen in separate Module, die bei Bedarf importiert werden können. Node.js verfügt seit langem über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Verwendung von Modulen ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ, ohne dass eine Transpilation erforderlich ist. Dies kann nur positiv sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all diese zusätzlichen Client-seitigen Verarbeitungen und zusätzlichen Rundreisen durchzuführen. Dies macht Bundler wie Webpack jedoch nicht überflüssig — Bundler leisten immer noch gute Arbeit beim Partitionieren von Code in vernünftig große Teile und können andere Optimierungen wie Minimierung, Tote-Code-Eliminierung und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [einfache Liste von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine einfache Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann (und berichtende Informationen zu) verschiedene Formen auf der Leinwand zeichnen.

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur des Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine Dateistruktur wie folgt:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das Obige sollte ziemlich vertraut werden.

Die beiden Module im Verzeichnis „modules“ werden unten beschrieben:

- `canvas.js` — enthält Funktionen zum Einrichten der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `Breite` und `Höhe` in einem Wrapper-<div> mit einer angegebenen ID, die selbst innerhalb eines angegebenen Elternelements eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements eingefügt wird und die verwendet werden kann, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die die Zeichenkette 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtsliste, basierend auf seiner Länge.

### Abseits — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen können Sie die `.mjs`-Erweiterung sehen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es sorgt für Klarheit, d.h. es wird deutlich, welche Dateien Module sind und welche normale JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, weiterhin `.js` zu verwenden, zumindest momentan. Um Module korrekt in einem Browser zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn Sie das nicht tun, erhalten Sie einen strikten MIME-Typ-Fehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen den entsprechenden Typ bereits für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die bereits `.mjs`-Dateien korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn Sie dies nicht tun, aber Sie wissen, was Sie tun und darauf zugreifen können (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch zu Verwirrungen führen, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich auf die Klarheit von `.mjs` für Module gegenüber `.js` für „normale“ JavaScript-Dateien Wert legen, aber das oben beschriebene Problem vermeiden wollen, könnten Sie während der Entwicklung immer `.mjs` verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das Attribut `<script type="module">` wird verwendet, um anzugeben, wann ein Modul angesprochen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun, um Zugriff auf Modulfunktionen zu bekommen, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, sie zu verwenden, besteht darin, sie vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Top-Level-Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine praktischere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, ist die Verwendung einer einzigen Exporterklärung am Ende Ihrer Moduldaten, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten und die in geschweifte Klammern eingeschlossen ist. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Funktionen in Ihr Skript importieren

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie diese in Ihr Skript importieren, um sie nutzen zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ bietet eine Zeichenkette, die die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann. In einem Browser könnte dies ein Pfad relativ zum Stamm der Seite sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir zu finden versuchen. Dies ist viel besser als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel wird noch funktionieren, wenn Sie es an einen anderen Ort in der Seitenhierarchie verschieben.

So zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen können Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und der keine Dateierweiterung aufweist. Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, genau so, als wären sie im selben Script definiert. Das folgende Beispiel finden Sie in `main.js`, unter den Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der Funktionen, die exportiert wurden. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch Eigenschaften von Objektwerten ändern. Der Wert kann nur durch das Modul, das ihn exportiert, neu zugewiesen werden. Siehe die [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul importieren kann, indem ein Modulspezifizierer verwendet wird, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) erlauben es Entwicklern, stattdessen fast beliebigen Text im Modulspezifizierer anzugeben, wenn ein Modul importiert wird; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Importkarte ein "Modulspezifizierer-Karten"-JSON-Objekt, in dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden auf absolute URL-Adressen unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, aufgelöst.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut, das auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt ist, definiert. Es kann nur eine Importkarte im Dokument geben, und da sie dazu verwendet wird, zu bestimmen, welche Module sowohl bei statischen als auch dynamischen Importen geladen werden, muss sie vor den `<script>`-Elementen, die Module importieren, deklariert werden. Beachten Sie, dass die Importkarte nur auf das Dokument anwendbar ist — die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können nun die oben genannten Eigenschaftsnamen als Modulspezifizierer verwendet werden. Wenn es keinen abschließenden Schrägstrich im Modulspezifizierer-Schlüssel gibt, wird der gesamte Modulspezifizierer-Schlüssel übereinstimmend ersetzt. Zum Beispiel unten passen wir nackte Modulnamen an und remappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfad-Präfix" abgestimmt. Dies ermöglicht das Remapping ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind. Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifizierer-Schlüsseln `shapes/` und `shapes/circle/` übereinstimmen. In diesem Fall wählt der Browser den spezifischsten (längsten) übereinstimmenden Modulspezifizierer-Schlüssel.

Importkarten erlauben es, Module mit nackten Modulnamen zu importieren (wie in Node.js), und sie können außerdem das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen. Obwohl oben nicht gezeigt, erlauben sie auch, bestimmte Versionen einer Bibliothek zu importieren, basierend auf dem Pfad des Skripts, das das Modul importiert. Im Allgemeinen lassen sie Entwickler ergonomischeren Importcode schreiben und erleichtern die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden. Dies kann den Aufwand reduzieren, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden. Die folgenden Abschnitte erweitern die oben umrissenen verschiedenen Funktionen.

### Funktionsunterstützung erkennen

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module mit nackten Namen importieren

In einigen JavaScript-Umgebungen wie Node.js können Sie nackte Namen für den Modulspezifizierer verwenden. Dies funktioniert, weil die Umgebung Modulnamen zu einem Standardort im Dateisystem auflösen kann. So könnten Sie zum Beispiel die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser verwenden zu können, brauchen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten können Sie eine Karte sehen, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall auf einen relativen Adresswert gemappt wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir nun einen nackten Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Modulpfade neu zuordnen

Einträge im Modulspezifizierer-Mapping, bei denen sowohl der Spezifiziererschlüssel als auch dessen zugehöriger Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden. Dies ermöglicht das Remapping eines ganzen Sets von Import-URLs von einem Ort zu einem anderen. Es kann auch verwendet werden, um zu emulieren, wie mit "Paketen und Modulen" wie im Node-Ökosystem gearbeitet wird.

> [!NOTE]
> Der nachgestellte `/` zeigt an, dass der Modulspezifiziererschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann. Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifiziererschlüssel übereinstimmen (und ersetzen).

#### Modulelemente in Paketen

Die folgende JSON-Importkarten-Definition mappt `lodash` als nackten Namen und das Modul-Spezifizierer-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das ganze "Paket" mit dem nackten Namen als auch Module darin (mit der Pfadmapping) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber dafür müssten Sie einen nackten Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden. Dies könnte für nur ein Modul vernünftig sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifiziererschlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein. Dies kann nützlich sein, wenn Sie ein Modul remappen möchten, das absolute Pfade zu einer Ressource hat, um stattdessen Ihre eigenen lokalen Ressourcen zu verwenden.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module zur Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und ihre Abhängigkeiten zu verwalten. Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und ihren Abhängigkeiten getrennt ist. Infolgedessen, während eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen enthalten könnte, müssen Benutzer sich nicht um diese Komplexität kümmern.

> [!NOTE]
> Sie können auch Versionsverwaltung mit relativen Pfaden erreichen, aber das ist suboptimal, weil es unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten erlauben es Ihnen, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie mit demselben Modulspezifizierer zu referenzieren. Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen erlaubt, Modulspezifizierer-Karten bereitzustellen, die in Abhängigkeit vom Pfad des Skripts, das den Import vornimmt, verwendet werden. Das folgende Beispiel demonstriert dies.

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

Mit dieser Zuordnung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `coolmodule` importiert, wird die Version in `/node_modules/some/other/location/coolmodule/index.js` verwendet. Die Karte in `imports` wird als Fallback verwendet, wenn es keinen passenden Bereich in der gescopten Karte gibt oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `coolmodule` aus einem Skript mit einem nicht passenden Bereichspfad importiert wird, dann wird die Modulspezifiziererkarte in `imports` stattdessen verwendet, die zu der Version in `/node_modules/coolmodule/index.js` mappt.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Geltungsbereich auszuwählen, die Art, wie die Adresse aufgelöst wird, nicht beeinflusst. Der Wert im gemappten Pfad muss nicht die Geltungsbereichsadresse widerspiegeln und relative Pfade werden noch zur Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Genau wie bei Modulspezifiziererkarten können Sie viele Scope-Schlüssel haben, und diese können sich überschneidende Pfade enthalten. Wenn mehrere Geltungsbereiche mit der Referrer-URL übereinstimmen, dann wird der spezifischste Bereichspfad (der längste Scope-Schlüssel) zuerst auf einen übereinstimmenden Spezifizierer geprüft. Die Browser fallen zurück auf den nächsten spezifischsten passenden gescopten Pfad, wenn es keinen passenden Spezifizierer gibt, und so weiter. Wenn es in keinem der passenden Bereiche einen übereinstimmenden Spezifizierer gibt, prüft der Browser auf eine Übereinstimmung in der Modulspezifizierer-Karte im `imports`-Schlüssel.

### Verbesserung der Zwischenspeicherung durch Weglassen von hashbasierten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft hashbasierte Dateinamen, um die Zwischenspeicherung zu vereinfachen. Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, auch alle Module, die es mit seinem hashbasierten Dateinamen importieren, aktualisiert/neu generiert werden müssen. Dies kann potenziell zu einer Kaskade an Updates führen, was verschwenderisch für Netzwerkressourcen ist.

Importkarten bieten eine praktische Lösung für dieses Problem. Anstatt auf bestimmte hashbasierte Dateinamen zu setzen, abhängen Anwendungen und Skripte stattdessen von einer nicht-gehashten Version des Modulnamens (Adresse). Eine Importkarte wie unten bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln. Wir müssen den Quellcode von JavaScript-Code, der davon abhängt, nicht aktualisieren, da sich der Spezifizierer im Import keine Änderung erfahren hat.

## Laden von nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit deklarieren, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die Syntax [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with):

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und versagen, wenn zum Beispiel `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren wollten. Sobald erfolgreich importiert, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit ein paar bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir Folgendes:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des Hauptteils des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird geworfen, wenn Ihr `<script>`-Element nicht das Attribut `type="module"` hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugreifbar sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorgeladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreloaded"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden. Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Andere Unterschiede zwischen Modulen und Standardskripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie ein unterschiedliches Verhalten von Skriptabschnitten feststellen könnten, die innerhalb von Modulen definiert sind, im Vergleich zu Standardskripten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)) zu verwenden, wenn ein Modulskript geladen wird; Module werden automatisch aufgeschoben.
- Module werden nur einmal ausgeführt, selbst wenn sie mehrfach in `<script>`-Tags referenziert wurden.
- Last but not least, machen wir dies klar — Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert — sie stehen nicht im globalen Gültigkeitsbereich zur Verfügung. Daher können Sie nur auf importierte Funktionen in dem Skript zugreifen, in das sie importiert wurden, und Sie können nicht über die JavaScript-Konsole darauf zugreifen, zum Beispiel. Sie erhalten weiterhin Syntaxfehler in den DevTools angezeigt, aber Sie können möglicherweise nicht einige der Debugging-Techniken verwenden, von denen Sie erwartet haben, dass Sie sie verwenden können.

In Modulen definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden ausdrücklich an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, mit dem folgenden Code:

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

Die Seite würde immer noch `Hello` anzeigen, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch an diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — alles, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde bei seinem Export mit seinem Namen referenziert, und dieser Name wurde auch beim Import verwendet, um es zu referenzieren.

Es gibt auch einen Typ von Export, der als **Standardexport** bezeichnet wird — dieser ist so konzipiert, dass er es einfach macht, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie schön erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; durchsuchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, um zu erklären, wie es funktioniert. In unserem basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standard exportieren, also schreiben wir am Ende der Datei:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` vor die Funktion setzen und es als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass es nur einen Standardexport pro Modul geben darf, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Namingkonflikte vermeiden

Bis jetzt scheinen unsere Leinwandform-Zeichenmodule in Ordnung zu sein. Aber was geschieht, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form, wie einem Kreis oder Dreieck, befasst? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, usw.; würden wir versuchen, verschiedene Funktionen mit demselben Namen in dasselbe oberste Moduldokument zu importieren, hätten wir Konflikte und Fehler.

Glücklicherweise gibt es einige Möglichkeiten, dies zu umgehen. Wir schauen uns diese in den folgenden Abschnitten an.

## Umbenennen von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisungsgeschweiften Klammern können Sie das Schlüsselwort `as` mit einem neuen Feature-Namen verwenden, um den Identifizierungsnamen zu ändern, den Sie für eine Funktion innerhalb des obersten Moduls verwenden.

So zum Beispiel, würden beide der folgenden dasselbe bewirken, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir Module `circle.js` und `triangle.js` zum Zeichnen und Berichten über Kreise und Dreiecke hinzugefügt haben.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes die gleiche `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) werfen.

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

Beachten Sie, dass Sie das Problem auch in den Moduldaten lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Stil Sie verwenden, liegt bei Ihnen, allerdings argumentiert man, dass es mehr Sinn macht, Ihren Modulcode unberührt zu lassen, und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbietermodulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert in Ordnung, aber sie ist ein wenig unordentlich und umständlich. Eine noch bessere Lösung ist, jedes Modul's Features innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht das:

```js
import * as Module from "./modules/module.js";
```

Dies greift alle Exporte, die innerhalb von `module.js` verfügbar sind, und macht sie als Mitglieder eines Objekts `Module` verfügbar, effektiv damit einen eigenen Namespace gebend. So zum Beispiel:

```js
Module.function1();
Module.function2();
```

Wieder schauen wir uns ein echtes Beispiel an. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können den Code jetzt genauso wie vorher schreiben (solange Sie die Objektnamen dort verwenden, wo sie benötigt werden), und die Importe sind viel aufgeräumter.

## Module und Klassen

Wie bereits angedeutet, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel für unser Formzeichnungsmodul sehen, das mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis umgeschrieben wurde. Als Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalität in einer einzigen Klasse:

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

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Möglicherweise haben Sie mehrere Ebenen von Abhängigkeiten, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Submodule in ein übergeordnetes Modul kombinieren. Dies ist mit der Export-Syntax folgender Formen im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Ein Beispiel finden Sie in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Submodule in einem Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

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

Als nächstes kommt der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte der einzelnen Submodule und machen sie über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Grunde durch die Datei weitergeleitet und existieren dort wirklich nicht, daher werden Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

Jetzt können im `main.js`-Dokument alle drei Modulklassen zugänglich gemacht werden, indem wir

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

Eine neue Funktionalität der Javascript-Module ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt wird, das Ihnen Zugang zu den Exporten dieses Objekts gewährt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers zulässig sowie in gemeinsamen und zugewiesenen Arbeitern. Import() wirft jedoch einen Fehler, wenn es innerhalb eines Service-Arbeiters oder Worklets aufgerufen wird.

<!--https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Schaltflächen — "Kreis", "Quadrat" und "Dreieck", die beim Drücken das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html)– und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen — die Modulsexporte bleiben wie zuvor.

In `main.js` haben wir einen Verweis auf jede Schaltfläche mit einer [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Anweisung erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jeder Schaltfläche einen Ereignislistener hinzu, sodass beim Drücken das relevante Modul dynamisch geladen und zum Zeichnen der Form verwendet wird:

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

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann eine Subfunktion des Objekts wird, weshalb wir nun den Konstruktor mit `Module.`, z.B. `Module.Square( /* … */ )` davon präparieren müssen.

Ein weiterer Vorteil von dynamischen Importen ist, dass diese immer verfügbar sind, auch in Skriptumgebungen. Daher können Sie, wenn Sie ein vorhandenes `<script>`-Tag in Ihrer HTML haben, das nicht `type="module"` hat, immer noch Code wiederverwenden, der als Module verteilt wird, indem Sie es dynamisch importieren.

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

Top-Level-Await ist eine Funktionalität innerhalb von Modulen. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es erlaubt Modulen, als große [asynchrone Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu agieren, was bedeutet, dass Code bewertet werden kann, bevor er in übergeordneten Modulen verwendet wird, aber ohne das Laden von Geschwistermodulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie finden alle beschriebenen Dateien und Codes in diesem Abschnitt im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis, das sich aus den vorherigen Beispielen erweitert.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückgibt.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir angeben, die Konstante `colors` zu exportieren. Dies bedeutet, dass jedes andere Modul, das dieses enthält, wartet, bis `colors` heruntergeladen und geparst ist, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei aufnehmen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Strings, wenn wir unsere Formulare aufrufen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es blockiert jedoch nicht das Laden anderer Module. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)–Modul weiterladen, während `colors` abgerufen wird.

## Import-Anweisungen werden gehoben

Importanweisungen werden [gehoben](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet das, dass die importierten Werte im Code des Moduls verfügbar sind, auch vor dem Ort, der sie deklariert, und dass die Nebeneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes zu laufen beginnt.

So zum Beispiel, würde es in `main.js` funktionieren, `Canvas` in der Mitte des Codes zu importieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es ist jedoch immer noch gute Praxis, alle Ihre Importe an die Spitze des Codes zu setzen, was das Analysieren von Abhängigkeiten erleichtert.

## Zyklische Importe

Module können andere Module importieren, und diese Module können wiederum andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einer schnelle tiefenersten Durchlauf-Bewertung ausgewertet werden.

Zyklen sind jedoch häufig unvermeidbar. Zyklische Importe entstehen, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe versagen nicht immer. Der Wert der importierten Variablen wird erst abgerufen, wenn die Variable tatsächlich verwendet wird (was [Live Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur, wenn die Variable zu diesem Zeitpunkt nicht initialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zum Zeitpunkt der Auswertung des Moduls weder `b` noch `a` tatsächlich gelesen, der Rest des Codes wird normal ausgeführt und die beiden `export`-Deklarationen produzieren die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, so dass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, wird die Modulauswertung fehlschlagen:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. Aber `b.js` verwendet `a`, welches noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, wird die Modulauswertung erfolgreich abgeschlossen:

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

In Ihrem Projekt sollten Sie in der Regel zyklische Importe vermeiden, weil sie Ihren Code fehleranfälliger machen. Einige gängige zyklusvermeidende Techniken sind:

- Zusammenführen der beiden Module zu einem.
- Verschieben des gemeinsam genutzten Codes in ein drittes Modul.
- Verschieben von Code von einem Modul in das andere.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Verfassen von "isomorphen" Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem zur Verteilung und Wiederverwendung von Code auf modulare Weise. Dies bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt warden kann. Nehmen wir an, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es kommt darauf an.

Module haben weiterhin Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul globale Variablen wie `window` referenziert, kann es im Browser ausgeführt werden, aber wirft einen Fehler auf Ihrem Node.js-Server, weil `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` erfordert, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird häufig empfohlen, den Code "isomorph" zu gestalten — das bedeutet, dass er in jeder Laufzeit dasselbe Verhalten zeigt. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Bindung". Für den "Kern", konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen DOM-, Netzwerk- oder Dateisystemzugang, und stellen Sie Hilfsfunktionen bereit. Für den "Bindung"-Teil, können Sie aus dem und in den globalen Kontext lesen und schreiben. Zum Beispiel kann die "Browser-Bindung" wählen, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" ihn aus `process.env` lesen kann, aber Werte, die aus einem der beiden Orte gelesen werden, werden an dieselbe Kernfunktion geleitet und auf dieselbe Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur die Bindung, die normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Erkennen, ob ein bestimmtes Global existiert, bevor es verwendet wird. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie wahrscheinlich in einer Node.js-Umgebung sind und sollten nicht in den DOM lesen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten ("isomorph") enden. Wenn es unmöglich ist, dieselbe Funktionalität zu bieten, oder wenn dies das Laden signifikanter Mengen von Code beinhaltet, während ein großer Teil ungenutzt bleibt, sollten Sie besser verschiedene "Bindings" verwenden.

- Verwenden Sie ein Polyfill, um ein Fallback für fehlende Features bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst ab v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekte, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie in Modulen globale Variablen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Trotzdem, mit dem Trend der Code-Wiederverwendung und Modularisierung, werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, sodass er von möglichst vielen Menschen genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wenn möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Ihnen helfen könnten, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, da Sie andernfalls einen strikten MIME-Typ-Fehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" erhalten.
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), werden Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen CORS-Fehler erhalten. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch .mjs-Dateien mit dem richtigen MIME-Typ liefert.
- Weil `.mjs` eine nicht standardisierte Dateierweiterung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel stellten wir fest, dass macOS stillschweigend am Ende der `.mjs`-Dateien `.js` hinzufügt und dann die Dateierweiterung automatisch verbirgt. So kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verbergen von Dateierweiterungen ausgeschaltet hatten und es trainierten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
