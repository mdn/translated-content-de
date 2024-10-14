---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: afb98d5b98ca5262cb66a9f0ef7585273fd73abc
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme waren anfänglich recht klein - der Großteil ihrer Nutzung in den frühen Tagen bestand aus isolierten Skriptaufgaben, die Ihrer Webseite bei Bedarf ein wenig Interaktivität verleihen sollten, sodass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir jetzt komplette Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird ({{Glossary("Node.js", "Node.js")}}, zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Modulnutzung ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne eine Transpilation zu benötigen. Dies ist nur positiv, da Browser das Laden von Modulen optimieren können, was effizienter ist als die Nutzung einer Bibliothek und all der zusätzlichen Verarbeitung auf der Client-Seite sowie der zusätzlichen Rundreisen. Es bedeutet jedoch nicht, dass Bundler wie Webpack überflüssig sind - Bundler leisten nach wie vor gute Arbeit beim Aufteilen von Code in angemessen große Blöcke und können andere Optimierungen wie Minifizierung, tote Code-Eliminierung und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [einfache Beispielsammlung](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine einfache Sammlung von Modulen, die auf einer Webseite ein `<canvas>`-Element erstellen und dann verschiedene Formen auf die Leinwand zeichnen und Informationen darüber berichten.

Diese sind recht trivial, wurden jedoch bewusst einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Struktur des einfachen Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben grundsätzlich die gleiche Struktur; das obige sollte ziemlich vertraut werden.

Die beiden Module im Verzeichnis "modules" sind wie folgt beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `Breite` und `Höhe` innerhalb eines bestimmten Wrapper-`<div>` mit einer angegebenen ID, die selbst innerhalb eines bestimmten übergeordneten Elements eingefügt ist. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements hinzugefügt wird und zur Ausgabe von Berichts-Daten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichts-Liste, basierend auf seiner Länge.

### Anmerkung — .mjs versus .js

Im gesamten Artikel haben wir `.js`-Erweiterungen für unsere Moduldateien verwendet, aber in anderen Ressourcen könnten Sie die Erweiterung `.mjs` verwendet sehen. [Die Dokumentation von V8 empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript.
- Es stellt sicher, dass Ihre Moduld Dateien als Module von Umgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) geparst werden.

Wir haben uns jedoch entschieden, weiterhin `.js` zu verwenden, zumindest im Moment. Um Module in einem Browser korrekt zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header ausliefert, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem Nicht-JavaScript-MIME-Typ geantwortet" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt ausliefern, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn Sie es nicht tun, aber Sie wissen, was Sie tun und Zugang haben (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch Verwirrung stiften, wenn Sie keinen Zugriff auf den Server haben, von dem aus Sie Dateien bereitstellen, oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Aus Gründen des Lernens und der Portabilität haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich Wert auf die Klarheit legen, `.mjs` für Module zu verwenden, versus `.js` für "normale" JavaScript-Dateien, aber das oben beschriebene Problem vermeiden möchten, können Sie während der Entwicklung immer `.mjs` verwenden und diese im Build-Prozess in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools `.mjs` möglicherweise nie unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzuzeigen, dass auf ein Modul verwiesen wird, wie Sie weiter unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, sie zu verwenden, besteht darin, sie vor den Elementen zu platzieren, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen oberste Ebenen sein: Sie können `export` nicht innerhalb einer Funktion verwenden.

Ein bequemerer Weg, alle Elemente zu exportieren, die Sie exportieren möchten, besteht darin, eine einzelne Exportanweisung am Ende Ihrer Moduldatei zu verwenden, gefolgt von einer komma-separierten Liste der Funktionen, die Sie exportieren möchten, eingehüllt in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie Funktionen aus Ihrem Modul exportiert haben, müssen Sie diese in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, sieht folgendermaßen aus:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer komma-separierten Liste der Funktionen, die Sie importieren möchten, eingehüllt in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ stellt eine Zeichenkette bereit, die die JavaScript-Umgebung auf einen Pfad zur Moduld Datei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Stamm der Seite sein, was für unser `basic-modules` Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Standort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir zu finden versuchen. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad aufzuschreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert weiterhin, wenn Sie es an einen anderen Ort in der Seitenhierarchie verschieben.

Beispielsweise:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen im Einsatz in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im gleichen Dokument definiert. Das folgende Beispiel ist in `main.js` zu finden, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert hat, neu zugewiesen werden. Siehe die [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mittels eines Modulspezifizierers, der entweder eine absolute URL ist oder eine relative URL, die über die Basis-URL des Dokuments gelöst wird, importieren kann:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) erlauben es Entwicklern, stattdessen fast jeden Text, den sie möchten, als Modulspezifizierer beim Importieren eines Moduls anzugeben; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL gelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der Importkarte unten ein JSON-Objekt "Modulspezifiziererkarten", bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte ersetzt werden, wenn der Browser die Modul-URL löst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs gelöst, indem die [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, verwendet wird.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt definiert.
Es kann nur eine Importkarte im Dokument geben, und da sie verwendet wird, um zu lösen, welche Module sowohl in statischen als auch in dynamischen Imports geladen werden, muss sie vor jedem `<script>`-Element deklariert werden, das Module importiert.
Beachten Sie, dass die Importkarte nur für das Dokument gilt – die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein abschließender Schrägstrich am Modulspezifizierer vorhanden ist, wird der gesamte Modulspezifizierer und damit die Schlüssel zugeordnet und ersetzt.
Zum Beispiel wird unten auf Modulnamen ohne Pfadverweis abgeglichen und eine URL auf einen anderen Pfad umgeleitet.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dies ermöglicht das Umleiten ganzer URL-Klassen.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifiziererschlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) übereinstimmenden Modulspezifiziererschlüssel.

Importkarten erlauben es, Module unter Verwendung von Bare Modulnamen (wie in Node.js) zu importieren, und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, erlauben sie auch, bestimmte Versionen einer Bibliothek zu importieren, basierend auf dem Pfad des Skripts, das das Modul importiert.
Sie ermöglichen Entwicklern, ergonimischere Importcodes zu schreiben und erleichtern es, die verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Website verwendet werden, zu verwalten.
Dies kann den Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte vertiefen die verschiedenen oben beschriebenen Funktionen.

### Funktionserkennung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als Bare Names

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare Names für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modumnamen auf einen Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare Names in einem Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht auf einen Modulstandort aufgelöst werden kann).

Unten können Sie eine Karte sehen, die einen `square`-Modulspezifiziererschlüssel definiert, der in diesem Fall zu einem relativen Adresswert führt.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir nun einen Bare Name verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleitung von Modulpfaden

Mit Einträgen in der Modulspezifizierkarte, bei denen sowohl der Spezifiziererschlüssel als auch dessen zugehöriger Wert einen abschließenden Schrägstrich (`/`) haben, kann man als Pfadpräfix arbeiten.
Dies ermöglicht die Umleitung eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Dies kann auch verwendet werden, um die Arbeit mit "Paketen und Modulen" zu emulieren, wie Sie es möglicherweise im Node-Ökosystem sehen.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifiziererschlüssel als Bestandteil eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifiziererschlüssel (und ersetzen) vergleichen.

#### Module als Pakete

Das folgende JSON-Importkartendefinition ordnet `lodash` als einen Bare Name zu und das Modulspezifiziererpräfix `lodash/` dem Pfad `/node_modules/lodash-es/` (wird zur Dokumentbasis-URL aufgelöst):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können sowohl das ganze "Paket" unter Verwendung des Bare Names als auch Module darin (unter Verwendung der Pfadzuordnung) importiert werden:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne `.js`-Dateierweiterung zu importieren, aber Sie müssten einen Bare Modulspezifiziererschlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag vernünftig für nur ein Modul sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifiziererschlüssel muss kein Pfad sein – er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul umleiten möchten, das absolute Pfade zu einer Ressource zu Ihren eigenen lokalen Ressourcen hat.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Modulumfang für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jeder Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Als Ergebnis kann eine komplexe Anwendung dasselbe Modul mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen umfassen, Benutzer müssen jedoch nicht über diese Komplexität nachdenken.

> [!NOTE]
> Sie können auch relative Pfade für das Versionsmanagement verwenden, aber dies ist suboptimal, weil, unter anderem, dies eine bestimmte Struktur auf Ihrem Projekt erzwingt und Sie daran hindert, Bare Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen auch, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie unter Verwendung des gleichen Modulspezifizierers zu beziehen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen erlaubt, Modulspezifizierkarten bereitzustellen, die verwendet werden, abhängig vom Pfad des Skripts, das den Import durchführt.
Das folgende Beispiel demonstriert dies.

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

Mit dieser Zuordnung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `coolmodule` importiert, wird die Version in `/node_modules/some/other/location/coolmodule/index.js` verwendet.
Die Karte in `imports` wird als Rückgriff verwendet, wenn es keinen passenden Bereich in der Bereichskarte gibt oder die passenden Bereiche keine passende Spezifizierung enthalten. Wenn zum Beispiel `coolmodule` von einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, wird die Modulspezifizierkarte in `imports` stattdessen verwendet und wird auf die Version in `/node_modules/coolmodule/index.js` gemappt.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Bereich zu wählen, nicht beeinflusst, wie die Adresse gelöst wird.
Der Wert im gemappten Pfad muss nicht mit dem Bereichspfad übereinstimmen, und relative Pfade werden immer noch zur Basis-URL des Skripts gelöst, das die Importkarte enthält.

Genau wie bei Modulspezifizierkarten können Sie viele Bereichsschlüssel haben, und diese können sich überlappende Pfade enthalten.
Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird zunächst der spezifischste Bereichspfad (längster Bereichsschlüssel) für eine passende Spezifizierung überprüft.
Die Browser werden auf den nächst genaueren übereinstimmenden Bereichspfad zurückgreifen, wenn es keine passende Spezifizierung gibt, und so weiter.
Wenn in keinem der übereinstimmenden Bereiche eine Spezifizierung übereinstimmt, prüft der Browser auf eine Übereinstimmung in der Modulspezifizierkarte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Entfernung der Hashed Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass wenn sich ein Modul ändert, auch alle Module, die es mit seinem gehashten Dateinamen importieren, aktualisiert/regeneriert werden müssen.
Dies kann zu einer Kaskade von Aktualisierungen führen, die Netzwerkressourcen verschwenden.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Statt sich auf spezifische gehashte Dateinamen zu verlassen, hängt die Anwendung und Scripts stattdessen von einer nicht-gehashten Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die untenstehende bietet dann eine Zuordnung zu der tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn `dependency_script` sich ändert, ändert sich auch sein Hash im Dateinamen. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode jedes JavaScripts, das von ihm abhängt, nicht aktualisieren, da der Spezifizierer in der Importanweisung sich nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als ein `CSSStyleSheet`-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und gibt einen Fehler aus, wenn die gelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Importeigenschaften](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht auf eine JSON-Datei auflöst. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie lediglich Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert jetzt als reguläres JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

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

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen all Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Achten Sie darauf, lokal zu testen — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein anderes Verhalten von Skriptabschnitten erhalten, die innerhalb von Modulen definiert sind, im Gegensatz zu klassischen Skripten. Dies liegt daran, dass Module {{jsxref("Strict_mode", "strict mode", "", 1)}} automatisch verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut zu verwenden (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulscripts; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Last but not least, um dies klarzustellen – Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert – sie sind nicht im globalen Bereich verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert werden, und Sie können sie nicht von der JavaScript-Konsole aus aufrufen, zum Beispiel. Sie erhalten weiterhin Syntaxfehler in den Entwicklertools angezeigt, aber Sie können einige der Debugging-Techniken, die Sie möglicherweise erwartet haben, nicht verwenden.

Im Modul definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt angehängt. Auf der anderen Seite sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben der folgende Code:

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

Die Seite würde weiterhin `Hallo` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch an diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Exportanweisung benötigt – das einzige, was notwendig ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Export von Standardwerten gegenüber benannten Exporten

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde bei seinem Namen beim Export angegeben, und dieser Name wurde auch beim Import verwendet, um darauf zu verweisen.

Es gibt auch eine Art von Export, die als **Standardexport** bezeichnet wird — dies ist darauf ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch, JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie es schön in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt wird; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem `square.js` aus den `basic-modules` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit zufälliger Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, daher schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` der Funktion voranstellen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mittels dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Wiederum beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die "as"-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Canvas-Formen gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder einem Dreieck befasst? Diese Formen würden wahrscheinlich auch verbundene Funktionen wie `draw()`, `reportArea()`, usw. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dasselbe oberste Moduldokument zu importieren, würden wir Konflikte und Fehler haben.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir sehen uns diese in den folgenden Abschnitten an.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion innerhalb des obersten Moduls verwenden werden.

Sowohl das folgende Beispiel als auch das darauf folgende würden die gleiche Aufgabe ausführen, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. Im Verzeichnis [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu rapportieren.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jeder dasselbe `export`-Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden, Folgendes zu verwenden:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) auslösen.

Stattdessen müssen wir die Importe umbenennen, sodass sie eindeutig sind:

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

Beachte, dass Sie das Problem genauso gut in den Moduldokumenten lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welchen Stil Sie verwenden, liegt bei Ihnen, jedoch macht es im Allgemeinen keinen Sinn, Ihren Modulcode unangetastet zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellung eines Modulobjekts

Die obige Methode funktioniert gut, ist aber ein bisschen unübersichtlich und umständlich. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut genau das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle in `module.js` verfügbaren Exporte und stellt sie als Mitglieder eines Objekts `Module` zur Verfügung, was ihm effektiv einen eigenen Namensraum gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns nun ein echtes Beispiel betrachten. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um von dieser neuen Syntax zu profitieren. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

So können Sie den Code nun wieder genauso schreiben wie zuvor (solange Sie die Objektnamen dort einfügen, wo sie benötigt werden), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Ein Beispiel für unser Modul zum Zeichnen von Formen, das mit Hilfe von ES-Klassen umgeschrieben wurde, finden Sie in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis. Im Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) nun alle ihre Funktionalitäten in einer einzigen Klasse:

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

Drüben in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir es wie folgt:

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

Es wird Zeiten geben, in denen Sie Module zusammenführen möchten. Sie könnten mehrere Abhängigkeitsstufen haben, wo Sie Dinge vereinfachen, indem Sie mehrere Untermodule zu einem Elternmodul kombinieren möchten. Dies ist möglich unter Verwendung der folgenden Exportsyntax im Elternmodul:

```js
export * from "x.js";
export { name } from "x.js";
```

Ein Beispiel finden Sie in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (das auf unserem früheren Beispiel mit Klassen basiert) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis im Verzeichnis `modules` namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel lautet:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in der gleichen Form, z.B.

```js
export { Square };
```

Als nächstes folgt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) haben wir die folgenden Zeilen eingefügt:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte aus den einzelnen Untermodulen und machen sie effektiv über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde genommen durch die Datei weitergeleitet und existieren dort nicht wirklich, sodass Sie keinen verwandten Code in derselben Datei schreiben können.

Im `main.js`-Datenfeld können wir nun alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modul-Loading

Eine aktuelle Ergänzung zur Funktionalität von JavaScript-Modulen ist das dynamische Modul-Loading. Dadurch können Sie Module nur dann dynamisch laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungs-
