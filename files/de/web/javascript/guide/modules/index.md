---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — die meisten ihrer Anwendungen in den frühen Tagen waren, isolierte Skripting-Aufgaben durchzuführen, um Ihren Webseiten bei Bedarf ein wenig Interaktivität zu verleihen. Daher waren große Skripte allgemein nicht erforderlich. Einige Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript laufen, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Modulnutzung ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation erforderlich ist. Das kann nur eine gute Sache sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all die zusätzliche client-seitige Verarbeitung und zusätzliche Rundreisen zu machen. Es macht jedoch keine Bundler wie webpack überflüssig — Bundler machen immer noch einen guten Job beim Partitionieren von Code in angemessen große Stücke und können andere Optimierungen wie Minifizierung, Beseitigung von totem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen, und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module klar zu demonstrieren.

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

Die zwei Module im Module-Verzeichnis werden unten beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Canvas:

  - `create()` — erstellt ein Canvas mit einer angegebenen `width` und `height` in einem umschließenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, das selbst innerhalb eines angegebenen Elternelements hinzugefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine unsortierte Liste, die in ein angegebenes Wrapper-Element eingefügt wird und verwendet werden kann, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtsliste, basierend auf seiner Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js` Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs` Erweiterung verwendet. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest momentan `.js` zu verwenden. Damit Module im Browser korrekt funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript MIME-Typ wie `text/javascript` enthält. Wenn Sie dies nicht tun, erhalten Sie einen strikten MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem nicht-JavaScript MIME-Typ" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js` Dateien, aber noch nicht für `.mjs` Dateien. Server, die `.mjs` Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits in einer solchen Umgebung arbeiten, oder wenn dies nicht der Fall ist, aber Sie wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs` Dateien setzt). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem aus Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Zu Lern- und Portabilitätszwecken entschieden wir uns, bei `.js` zu bleiben.

Wenn Sie wirklich die Klarheit der Verwendung von `.mjs` für Module gegenüber der Verwendung von `.js` für "normale" JavaScript-Dateien schätzen, aber auf das oben beschriebene Problem nicht stoßen möchten, könnten Sie `.mjs` während der Entwicklung verwenden und sie in Ihrem Build-Schritt in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">` Attribut verwendet wird, um anzuzeigen, wenn auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies wird mit der {{jsxref("Statements/export", "export")}} Anweisung durchgeführt.

Die einfachste Möglichkeit, es zu verwenden, ist, es vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Top-Level-Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzige Export-Anweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie exportieren möchten, umschlossen von geschweiften Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie nutzen zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}} Anweisung, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie importieren möchten, umschlossen von geschweiften Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modul-Spezifikator_.

Der _Modul-Spezifikator_ bietet einen String, den die JavaScript-Umgebung in einen Pfad zu den Moduldaten auflösen kann. In einem Browser könnte dies ein Pfad relativ zum Stamm der Webseite sein, was in unserem `basic-modules` Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier jedoch verwenden wir stattdessen die Punkt-Syntax (`.`), um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir zu finden versuchen. Dies ist viel besser als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel wird weiterhin funktionieren, wenn Sie es an einen anderen Ort in der Webseiten-Hierarchie verschieben.

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
> In einigen Modulsystemen können Sie einen Modul-Spezifikator wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und keine Dateierweiterung hat. Solche Spezifikatoren können in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#module_mit_importkarten_importieren) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, als wären sie im selben Datei definiert. Das folgende finden Sie in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const` Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können Eigenschaften von Objektwerten weiterhin ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe das [`import`-Referenzdokument](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Module mit Importkarten importieren

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modul-Spezifikator importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern stattdessen, fast beliebigen Text im Modul-Spezifikator anzugeben, wenn sie ein Modul importieren; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports` Schlüssel in der folgenden Importkarte ein JSON-Objekt "Module-Spezifikator-Karte", wobei die Eigenschaftsnamen als Modul-Spezifikatoren verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden zu absoluten URL-Adressen unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments, das die Importkarte enthält, aufgelöst.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt, definiert. Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird — die Spezifikation behandelt nicht, wie eine Importkarte in einem Worker oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die oben genannten Eigenschaftsnamen als Modul-Spezifikatoren verwenden. Wenn es keinen abschließenden Schrägstrich im Modul-Spezifikator-Schlüssel gibt, wird der gesamte Modul-Spezifikator-Schlüssel abgeglichen und ersetzt. Zum Beispiel, unten passen wir Bare-Module-Namen an und setzen eine URL auf einen anderen Pfad um.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modul-Spezifikator einen abschließenden Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfad-Präfix" abgeglichen. Dies ermöglicht die Umleitung von ganzen Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modul-Spezifikator sind. Zum Beispiel, ein Modul-Spezifikator `shapes/circle/` könnte den Modul-Spezifikator-Schlüsseln `shapes/` und `shapes/circle/` entsprechen. In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modul-Spezifikator-Schlüssel.

Importkarten ermöglichen es, Module mit Bare-Modul-Namen zu importieren (wie in Node.js) und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen. Obwohl oben nicht gezeigt, ermöglichen sie auch bestimmte Versionen einer Bibliothek basierend auf dem Pfad des Skripts, das das Modul importiert, zu importieren. Im Allgemeinen lassen sie Entwickler ergonomischere Importcode schreiben und erleichtern das Management der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden. Dies kann den Aufwand reduzieren, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen Funktionen.

### Funktionsunterstützungserkennung

Sie können die Unterstützung für Importkarten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)-Methode überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module als Bare-Namen importieren

In einigen JavaScript-Umgebungen, wie Node.js, können Sie Bare-Namen für den Modul-Spezifikator verwenden. Dies funktioniert, weil die Umgebung Modulnamen auf einen Standardpfad im Dateisystem auflösen kann. Zum Beispiel, Sie könnten die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um Bare-Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen zur Verfügung stellt, die er benötigt, um Modul-Spezifikatoren in URLs aufzulösen (JavaScript löst einen `TypeError` aus, wenn es versucht, einen Modul-Spezifikator zu importieren, der nicht auf einen Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modul-Spezifikator-Schlüssel definiert, der in diesem Fall zu einem relativen Adresswert kartiert.

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

### Modulpfade neu zuordnen

Modul-Spezifikator-Karteneinträge, bei denen sowohl der Spezifikator-Schlüssel als auch sein zugeordneter Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden. Dies ermöglicht die Umleitung eines ganzen Satzes von Import-URLs von einem Speicherort zu einem anderen. Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen", wie man sie im Node-Ökosystem sehen könnte, zu emulieren.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modul-Spezifikator-Schlüssel als _Teil_ eines Modul-Spezifikators ersetzt werden kann. Wenn dies nicht vorhanden ist, wird der Browser nur den ganzen Modul-Spezifikator-Schlüssel abgleichen (und ersetzen).

#### Module-Pakete

Die folgende JSON-Importkartendefinition kartiert `lodash` als Bare-Namen und das Modul-Spezifikator-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Kartierung können Sie sowohl das ganze "Paket" mit dem Bare-Namen als auch Module innerhalb davon importieren (unter Verwendung der Pfadkartierung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen Bare-Modul-Spezifikator-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden. Dies mag für nur ein Modul angemessen sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umschreibungen

Ein Modul-Spezifikator-Schlüssel muss kein Pfad sein — es kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein. Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource hat, in Ihre eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Eingeschränkte Module für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten. Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist. Infolgedessen kann, obwohl eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen ausführen kann, der Benutzer muss sich nicht mit dieser Komplexität auseinandersetzen.

> [!NOTE]
> Sie können das Versionsmanagement auch mit relativen Pfaden erreichen, aber dies ist suboptimal, da unter anderem dies eine bestimmte Struktur auf Ihrem Projekt erzwingt und Sie daran hindert, Bare-Modul-Namen zu verwenden.

Importkarten erlauben es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sich auf sie mit demselben Modul-Spezifikator zu beziehen. Dies erreichen Sie mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modul-Spezifikator-Karten bereitzustellen, die je nach Pfad des Skripts, das den Import durchführt, verwendet werden. Das folgende Beispiel demonstriert dies.

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

Mit dieser Kartierung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet. Die Karte in `imports` wird als Fallback verwendet, wenn es keinen passenden Geltungsbereich in der eingeschränkten Karte gibt oder die passenden Geltungsbereiche keinen passenden Spezifikator enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht passenden Geltungsbereichspfad importiert wird, dann wird die Modul-Spezifikator-Karte in `imports` stattdessen verwendet, wobei auf die Version in `/node_modules/cool-module/index.js` verwiesen wird.

Beachten Sie, dass der Pfad, der zur Auswahl eines Geltungsbereichs verwendet wird, keinen Einfluss darauf hat, wie die Adresse aufgelöst wird. Der Wert im abgebildeten Pfad muss nicht mit dem Geltungsbereichspfad übereinstimmen und relative Pfade werden weiterhin zur Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Genauso wie bei Modul-Spezifikator-Karten können Sie viele Schlüsselbereiche haben, und diese können überlappende Pfade enthalten. Wenn mehrere Bereiche mit der Verweis-URL übereinstimmen, wird der spezifischste Geltungsbereichspfad (der längste Bereichsschlüssel) zuerst auf einen passenden Spezifikator überprüft. Die Browser fallen auf den nächstspezifischeren übereinstimmenden Bereichspfad zurück, wenn kein passender Spezifikator vorhanden ist, und so weiter. Wenn es in den übereinstimmenden Bereichen keinen passenden Spezifikator gibt, überprüft der Browser auf eine Übereinstimmung in der Modul-Spezifikator-Karte im `imports`-Schlüssel.

### Caching verbessern, indem gehashte Dateinamen entfernt werden

Skriptdateien, die von Webseiten verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen. Der Nachteil dieser Methode ist, dass, wenn ein Modul sich ändert, alle Module, die es unter Verwendung seines gehashten Dateinamens importieren, ebenfalls aktualisiert/neugeneriert werden müssen. Dies führt möglicherweise zu einer Kaskade von Aktualisierungen, die ressourcenverschwendend für das Netzwerk sind.

Importkarten bieten eine bequeme Lösung für dieses Problem. Anstatt von speziellen gehashten Dateinamen abzuhängen, verlassen sich Anwendungen und Skripte stattdessen auf eine nicht gehashte Version des Modul-Namens (Adresse). Eine Importkarte wie die unten zeigt dann eine Abbildung auf die tatsächliche Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, dann ändert sich auch sein Hash im Dateinamen. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln. Wir müssen nicht den Quellcode eines jeden JavaScript-Codes, der davon abhängt, aktualisieren, weil sich der Spezifikator in der Import-Anweisung nicht ändert.

## Laden von nicht-JavaScript-Ressourcen

Eine aufregende Funktion, die eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als ein JavaScript-Objekt importieren oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit deklarieren, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und wird einen Fehler auslösen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn z.B. `./data.json` nicht auf eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald erfolgreich importiert, können Sie nun den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js` Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` in das [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element aufnehmen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code im Körper des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können nur `import` und `export` Anweisungen innerhalb von Modulen, nicht regulären Skripten, verwenden. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"` Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich gemacht (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie auf CORS-Fehler aufgrund der JavaScript-Modulsicherheitsanforderungen. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein anderes Verhalten von Skriptabschnitten sehen, die in Modulen im Vergleich zu klassischen Skripten definiert sind. Dies liegt daran, dass Module {{jsxref("Strict_mode", "strict mode", "", 1)}} automatisch verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut zu verwenden (siehe [`<script>` attributes](/de/docs/Web/HTML/Reference/Elements/script#attributes)), wenn ein Moduls Skript geladen wird; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert werden.
- Zu guter Letzt machen wir dies deutlich — Modulfunktionen werden in den Geltungsbereich eines einzelnen Skripts importiert — sie sind im globalen Geltungsbereich nicht verfügbar. Daher können Sie nur auf importierte Funktionen im Skript zugreifen, in das sie importiert werden, und Sie können auf sie nicht aus der JavaScript-Konsole zugreifen, zum Beispiel. Sie bekommen immer noch Syntaxfehler in den DevTools angezeigt, aber Sie werden nicht in der Lage sein, einige der Debugging-Techniken zu verwenden, von denen Sie erwartet haben, dass Sie sie verwenden können.

Von Modulen definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit mit dem globalen Objekt verbunden. Andererseits sind global definierte Variablen im Modul verfügbar. Zum Beispiel, geben Sie den folgenden Code:

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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht notwendigerweise eine Import/Export-Anweisung benötigt — das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standard-Exports versus benannte Exports

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde bei seinem Namen beim Export referenziert und dieser Name wurde auch beim Import verwendet.

Es gibt auch einen Typ von Export, der als **Standard-Export** bezeichnet wird — dies ist dafür ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul angeboten wird, und hilft außerdem, JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zu interoperieren (wie es gut erklärt wird in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem Basic-Modules `square.js`-Datei finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standard exportieren, also schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` der Funktion hinzufügen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Erneut achten Sie auf das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die Syntax `as` für die Umbenennung exportierter Elemente wird unten im Abschnitt [Importe und Exporte umbenennen](#importe_und_exporte_umbenennen) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formen-Zeichnungsmodule gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form befasst, wie einem Kreis oder Dreieck? Diese Formen hätten wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()`, etc.; wenn wir versuchen würden, verschiedene Funktionen des gleichen Namens in das gleiche oberste Module-File zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, um dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Importe und Exporte umbenennen

Innerhalb der geschweiften Klammern Ihrer `import` und `export` Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identifikationsnamen, den Sie für eine Funktion im obersten Modul verwenden, zu ändern.

Zum Beispiel würden beide der folgenden im Grunde den gleichen Job machen, allerdings auf eine leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

Innerhalb jedes dieser Module haben wir Funktionen mit den gleichen Namen, die exportiert werden, und daher hat jedes dasselbe `export` Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden, zu verwenden:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler wie "SyntaxError: erneute Deklaration des Importnamens" (Firefox) auslösen.

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

Und es würde genauso funktionieren. Welche Stil Sie verwenden, hängt von Ihnen ab, aber es macht wahrscheinlich mehr Sinn, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, ist aber ein wenig chaotisch und umständlich. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies greift alle verfügbaren Exporte innerhalb von `module.js` ab und macht sie als Mitglieder eines Objekts `Module` verfügbar, wodurch es effektiv seinen eigenen Namensraum erhält. Also zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns erneut ein echtes Beispiel betrachten. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, sehen Sie dasselbe Beispiel wieder, aber umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

Sie können den Code nun genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einschließen), und die Importe sind deutlich sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formen-Zeichnungsmodule sehen, das mit ES-Klassen umgeschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalitäten in einer einzigen Klasse:

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

Drüben in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js), importieren wir es so:

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

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Möglicherweise haben Sie mehrere Ebenen von Abhängigkeiten, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Submodule in einem übergeordneten Modul kombinieren. Dies ist möglich mit der Export-Syntax der folgenden Formen im übergeordneten Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel sehen Sie unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten aus `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Submodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Submodule ist die Exportform die gleiche, z.B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) haben wir die folgenden Zeilen:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte aus den einzelnen Submodulen ab und machen sie effektiv aus dem `shapes.js` Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde durch die Datei weitergeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

Also können wir jetzt in der `main.js` Datei auf alle drei Modulklassen zugreifen, indem wir:

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

Eine kürzliche Ergänzung zu JavaScript-Modulfunktionen ist das dynamische Lademodul. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat offensichtliche Leistungsvorteile; lesen Sie weiter und sehen Sie, wie es funktioniert.

Diese neue Funktion ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion zu rufen und ihr den Pfad zum Modul als Parameter zu übergeben. Sie gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt wird, was Ihnen den Zugriff auf die Exporte dieses Objekts ermöglicht. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers und in gemeinsamen und dedizierten Workern erlaubt.
> `import()` wird jedoch eine Ausnahme werfen, wenn es in einem Serviceworker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klasse-Beispiel. Diesmal jedoch zeichnen wir nichts auf der Leinwand, wenn das Beispiel lädt. Stattdessen schließen wir drei Schaltflächen ein — "Kreis", "Quadrat" und "Dreieck" — die, wenn sie gedrückt werden, das benötigte Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Datei vorgenommen — die Modul-Exporte bleiben wie zuvor.

In `main.js` haben wir eine Referenz auf jede Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir verbinden dann einen Ereignislistener mit jeder Schaltfläche, sodass, wenn sie gedrückt wird, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann zu einem Untermerkmal des Objekts wird, weswegen wir nun auf den Konstruktor mit `Module.` davor zugreifen müssen, z.B., `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Daher, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das kein `type="module"` hat, können Sie immer noch Code wiederverwenden, der als Module verteilt wird, indem Sie ihn dynamisch importieren.

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

## Toplevel Await

Toplevel Await ist eine Funktion, die in Modulen verfügbar ist. Dies bedeutet, dass das Schlüsselwort `await` verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass Code vor der Nutzung in übergeordneten Modulen ausgewertet werden kann, aber ohne dass gleichgestellte Module am Laden gehindert werden.

Schauen wir uns ein Beispiel an. Alle Dateien und der Code, der in diesem Abschnitt beschrieben wird, finden Sie im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) Verzeichnis, das auf den vorherigen Beispielen aufbaut.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anforderung verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await` bevor wir die Konstante `colors` angeben, die exportiert werden soll. Dies bedeutet, dass jedes andere Modul, das dieses einschließt, warten wird, bis `colors` heruntergeladen und geparst wurde, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir werden `colors` anstelle der zuvor verwendeten Zeichenfolgen verwenden, wenn wir unsere Formenfunktionen aufrufen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) gelaufen ist. Es wird jedoch das Laden anderer Module nicht blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiter laden, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls verfügbar sind, sogar vor der Stelle, an der sie deklariert sind, und dass die Nebeneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes ausgeführt wird.

Also zum Beispiel würde das Importieren von `Canvas` in `main.js` in der Mitte des Codes trotzdem funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es als gute Praxis angesehen, alle Ihre Importe an den Anfang des Codes zu setzen, was es einfacher macht, die Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren usw. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), genannt "Abhängigkeitsgraph". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mithilfe einer Tiefensuche ausgewertet werden.

Zyklen sind jedoch oft unvermeidbar. Ein zyklischer Import entsteht, wenn Modul `a` das Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert einer importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was [Live-Bindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zum Zeitpunkt der Modulauswertung keines der beiden `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird, und die beiden `export` Deklarationen produzieren die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log` Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, gelingt die Modulauswertung:

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

In Ihrem Projekt sollten Sie zyklische Importe normalerweise vermeiden, da sie Ihren Code anfälliger für Fehler machen. Einige häufige Zyklus-Beseitigungstechniken sind:

- Führen Sie die beiden Module zu einem zusammen.
- Verschieben Sie den gemeinsamen Code in ein drittes Modul.
- Verschieben Sie einen Teil des Codes von einem Modul in das andere.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Verfassen von "isomorphen" Modulen

Die Einführung von Modulen fördert das JavaScript-Ökosystem, Code modulartig zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung laufen kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf Globals wie `window` verweist, kann es im Browser laufen, wird aber auf Ihrem Node.js-Server einen Fehler auslösen, da `window` dort nicht verfügbar ist. Ähnlich, wenn der Code Zugriff auf `process` benötigt, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen — das bedeutet, dass er dasselbe Verhalten in jeder Laufzeit zeigt. Dies wird oft auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Bindung". Für den "Kern" konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateisystemzugriff und bequeme Dienstprogramme. Für den "Bindungsteil" können Sie aus dem globalen Kontext lesen und Schreibzugriffe durchführen. Zum Beispiel könnte die "Browserbindung" wählen, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" es aus `process.env` lesen könnte, aber die von beiden Orten gelesenen Werte würden derselben Kernfunktion zugeleitet und auf dieselbe Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur die Bindung, die in der Regel leichtgewichtig ist, plattformspezifisch sein muss.
- Überprüfen Sie, ob ein bestimmtes Globales existiert, bevor Sie es verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden, und sollten nicht auf den DOM zugreifen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige am Ende dasselbe Verhalten ("isomorph") haben. Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dies das Laden beträchtlicher Mengen an Code erfordert, während ein großer Teil ungenutzt bleibt, verwenden Sie besser unterschiedliche "Bindings".

- Verwenden Sie ein Polyfill, um ein Fallback für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die seit Version 18 nur in Node.js unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend der Wiederverwendbarkeit und Modularisierung von Code, werden Sie ermutigt, Ihren Code plattformübergreifend zu machen, damit er von so vielen Menschen wie möglich genossen werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wenn möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Ihnen möglicherweise helfen, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Zögern Sie nicht, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber um es zu wiederholen: `.mjs` Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Überprüfungsfehler wie "Der Server antwortete mit einem nicht-JavaScript MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie aufgrund von JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es `.mjs` Dateien auch mit dem richtigen MIME-Typ bereitstellt.
- Weil `.mjs` eine nicht standardmäßige Dateierweiterung ist, können einige Betriebssysteme sie möglicherweise nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` am Ende von `.mjs` Dateien angefügt und dann automatisch die Dateierweiterung versteckt. Also kamen alle unsere Dateien tatsächlich als `x.mjs.js`. Sobald wir das automatische Verstecken der Dateierweiterung ausgeschaltet hatten und es akzeptiert wurde, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Eine cartoonhafte Tiefenanalyse](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
