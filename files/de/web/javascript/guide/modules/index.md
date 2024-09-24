---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme haben sehr klein angefangen – die meisten Nutzungen in den frühen Tagen beschränkten sich auf isolierte Skriptaufgaben, die ein wenig Interaktivität zu Ihren Webseiten hinzugefügt haben, wo dies nötig war, sodass große Skripte im Allgemeinen nicht benötigt wurden. Spulen Sie ein paar Jahre vor und heutzutage werden komplette Anwendungen in Browsern mit viel JavaScript ausgeführt, ebenso wie JavaScript in anderen Kontexten (zum Beispiel [Node.js](/de/docs/Glossary/Node.js)) verwendet.

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon seit langem über diese Fähigkeit, und es gibt eine Anzahl von JavaScript-Bibliotheken und Frameworks, die die Modulnutzung ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modul-Systeme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation notwendig ist. Das kann nur von Vorteil sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu nutzen und all die zusätzliche clientseitige Verarbeitung und extra Rundreisen durchzuführen. Dennoch macht es Bundler wie Webpack nicht überflüssig — Bundler leisten weiterhin gute Arbeit, den Code in vernünftig große Teile zu partitionieren, und können andere Optimierungen wie Minifizierung, Entfernung von nicht genutztem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [einfache Sammlung von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine einfache Sammlung von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf die Leinwand zeichnen (und darüber berichten).

Diese sind ziemlich trivial, wurden aber bewusst einfach gehalten, um Module klar zu erklären.

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
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das oben Gezeigte sollte Ihnen allmählich vertraut werden.

Die zwei Module im Verzeichnis `modules` sind unten beschrieben:

- `canvas.js` — enthält Funktionen im Zusammenhang mit der Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines umschließenden [`<div>`](/de/docs/Web/HTML/Element/div) mit einer angegebenen ID, die selbst in ein angegebenes Elternelement eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Umschlags enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem angegebenen Umschlagelement eingefügt wird und verwendet werden kann, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtslistenangabe, entsprechend seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtslistenangabe, entsprechend seiner Länge.

### Anmerkung — .mjs vs .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen könnten Sie stattdessen die `.mjs`-Erweiterung sehen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es fördert die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche gewöhnliches JavaScript sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, weiter `.js` zu verwenden, zumindest derzeit. Damit Module im Browser korrekt funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Falls Sie das nicht tun, erhalten Sie einen strikten MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem nicht-JavaScript MIME-Typ geantwortet" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, schließen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js ein.

Dies ist in Ordnung, wenn Sie eine solche Umgebung bereits verwenden, oder wenn Sie es nicht tun, aber wissen, was Sie tun, und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch zu Verwirrung führen, wenn Sie nicht der Serverbetreiber sind oder die Dateien für öffentliche Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich Wert auf die Klarheit legen, `.mjs` für Module im Gegensatz zu `.js` für "normale" JavaScript-Dateien zu verwenden, aber nicht in das oben beschriebene Problem geraten wollen, könnten Sie während der Entwicklung immer `.mjs` verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das Attribut `<script type="module">` verwendet wird, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie weiter unten sehen werden.

## Exportieren von Modul-Funktionen

Das Erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist deren Export. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Die einfachste Möglichkeit dies zu tun, besteht darin, sie vor jedes Element zu setzen, das Sie aus dem Modul exportieren möchten, wie zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Top-Level-Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, ist die Verwendung einer einzigen Export-Anweisung am Ende Ihrer Moduldatei, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie exportieren möchten, eingepackt in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie importieren möchten, eingepackt in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ liefert einen String, den die JavaScript-Umgebung zu einem Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Stammverzeichnis der Website sein, was in unserem `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`) Syntax, um "den aktuellen Speicherort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir versuchen zu finden. Dies ist viel besser als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen - das Beispiel wird weiterhin funktionieren, wenn Sie es an einen anderen Speicherort in der Verzeichnishierarchie der Website verschieben.

Zum Beispiel:

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
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Map](#importieren_von_modulen_mit_import-maps) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie so verwenden, als ob sie im gleichen Datei definiert wären. Folgendes finden Sie in `main.js`, unter den Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul neu zugewiesen werden, das ihn exportiert. Siehe die [`import` Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Maps

Oben haben wir gesehen, wie ein Browser ein Modul unter Verwendung eines Modulspezifizierers importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Import-Maps](/de/docs/Web/HTML/Element/script/type/importmap) erlauben Entwicklern stattdessen nahezu beliebigen Text im Modulspezifizierer anzugeben, wenn ein Modul importiert wird; die Map bietet einen entsprechenden Wert, der durch den Text ersetzt wird, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der Import-Map unten ein JSON-Objekt als „Modulspezifizierer-Karte“, wobei die Eigenschaftenamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte ersetzt werden, wenn der Browser die Modul-URL auflöst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments verwendet wird, das die Import-Map enthält.

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
</template>
```

Die Import-Map wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem Attribut `type` gesetzt auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) definiert.
Es kann nur eine Import-Map im Dokument geben, und da sie zum Auflösen bestimmt, welche Module in sowohl statischen als auch dynamischen Imports geladen werden, muss sie vor allen `<script>`-Elementen deklariert werden, die Module importieren.
Beachten Sie, dass die Import-Map nur für das Dokument gilt — die Spezifikation deckt nicht ab, wie man eine Import-Map in einem Worker- oder Worklet-Kontext anwendet. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Map können Sie nun die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn keine abschließende Schrägstrich im Modulspezifizierer-Schlüssel vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Zum Beispiel unten passen wir Modulebenennungen an und mappen eine URL auf einen anderen Pfad um.

```js
// Bare Modulenamen als Modulspezifizierer
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Mappen einer URL auf eine andere URL um
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss der Wert ebenfalls einen haben und der Schlüssel wird als „Pfadpräfix“ abgeglichen.
Dies ermöglicht das Remappen ganzer Klassen von URLs.

```js
// Mappen einer URL als Präfix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Import-Map als gültige Übereinstimmungen für einen Modulspezifizierer existieren.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` zu den Modulspezifiziererschlüsseln `shapes/` und `shapes/circle/` passen.
In diesem Fall wird der Browser den spezifischsten (längsten) passenden Modulspezifiziererschlüssel auswählen.

Import-Maps erlauben Module, unter Verwendung von „bare module names“ (wie in Node.js) importiert zu werden, und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateiendungen.
Obwohl oben nicht gezeigt, ermöglichen sie auch, bestimmte Versionen einer Bibliothek basierend auf dem Pfad des Skripts zu importieren, das das Modul importiert.
In der Regel lassen sie Entwickler ergonomischeren Import-Code schreiben und machen es einfacher, die verschiedenen Versionen und Abhängigkeiten von Modulen zu verwalten, die von einer Website verwendet werden.
Dies kann den Aufwand verringern, um die gleichen JavaScript-Bibliotheken sowohl in Browser als auch auf Servern zu verwenden.

Die folgenden Abschnitte erläutern die verschiedenen Funktionen, die oben umrissen sind.

### Feature-Erkennung

Sie können die Unterstützung für Import-Maps mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) prüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Der Browser unterstützt Import-Maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie nackte Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung die Modulnamen zu einem Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das „square“-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Import-Map, die die Informationen bereitstellt, die vom Browser benötigt werden, um die Modulspezifizierer zu URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten können Sie eine Map sehen, die einen `square`-Modulspezifiziererschlüssel definiert, der in diesem Fall auf einen relativen Adresswert verweist.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Map können wir nun einen nackten Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Remapping von Modulpfaden

Einträge in der Modulspezifiziererkarte, bei denen sowohl der Spezifiziererschlüssel als auch sein zugehöriger Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht das Remapping eines ganzen Satzes Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit „Paketen und Modulen“ zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifiziererschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifiziererschlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON Import-Map-Definition mappt `lodash` als nackten Namen und das Modulspezifizierer-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/`.

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit diesem Mapping können Sie sowohl das ganze „Paket“ importieren, indem Sie den nackten Namen verwenden, als auch die Module darin (indem Sie das Pfadmapping nutzen):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateiendung zu importieren, aber dafür müssten Sie einen nackten Modulspezifiziererschlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul angemessen sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifiziererschlüssel muss kein Pfad sein — es kann auch eine absolute URL sein (oder eine URL-ähnliche relative Pfad wie `./`, `../`, `/`).
Dies kann nützlich sein, wenn Sie ein Modul, das mit absoluten Pfaden auf eine Ressource verweist, mit Ihren eigenen lokalen Ressourcen remappen möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Skalierte Module für Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Infolgedessen kann, während eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren unterschiedlichen Versionen in verschiedenen Teilen des Modulgraphen enthalten könnte, Nutzer müssen nicht über diese Komplexität nachdenken.

> [!NOTE]
> Sie können auch Versionsverwaltung mit relativen Pfaden erreichen, aber dies ist minderwertig, da es unter anderem eine spezifische Struktur in Ihrem Projekt erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Import-Maps erlauben es Ihnen, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie mithilfe des gleichen Modulspezifizierers zu referenzieren.
Sie setzen dies mit dem Schlüssel `scopes` um, der es Ihnen ermöglicht, Modulspezifiziererkarten bereitzustellen, die je nach Pfad des Skripts verwendet werden, das den Import durchführt.
Das unten stehende Beispiel zeigt dies.

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

Mit diesem Mapping, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `coolmodule` importiert, wird die Version in `/node_modules/some/other/location/coolmodule/index.js` verwendet.
Das Mapping in `imports` wird als Fallback verwendet, wenn kein passender Gültigkeitsbereich in der skalierten Karte vorhanden ist oder die passenden Gültigkeitsbereiche keinen passenden Spezifizierer enthalten. Wenn `coolmodule` von einem Skript ohne passenden Bereichspfad importiert wird, wird die Modulspezifiziererkarte in `imports` stattdessen verwendet und auf die Version in `/node_modules/coolmodule/index.js` verwiesen.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Gültigkeitsbereich auszuwählen, nicht beeinflusst, wie die Adresse aufgelöst wird.
Der Wert im zugewiesenen Pfad muss nicht mit dem Bereichspfad übereinstimmen, und relative Pfade werden weiterhin auf die Basis-URL des Skripts aufgelöst, das die Import-Map enthält.

Genauso wie bei Modulspezifiziererkarten können Sie mehrere Gültigkeitsbereichs-Schlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche die Verweis-URL übereinstimmen, wird der spezifischste Bereichspfad als erstes auf einen passenden Spezifizierer überprüft (der längste Bereichsschlüssel).
Der Browser wird auf den nächsten spezifischsten übereinstimmenden Bereichspfad fallen, wenn kein passender Spezifizierer vorhanden ist, und so weiter.
Wenn kein passender Spezifizierer in einem der passenden Bereiche vorhanden ist, wird das Modul `specifier map` in dem `imports`-Schlüssel überprüft.

### Verbesserung des Cachings durch das Mapping von weg gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass wenn ein Modul geändert wird, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert/neu generiert werden müssen.
Dies führt möglicherweise zu einer Kaskade von Updates, die eine Verschwendung von Netzwerkressourcen darstellen.

Import-Maps bieten eine bequeme Lösung für dieses Problem.
Anstatt auf spezifische gehashte Dateinamen angewiesen zu sein, verlassen sich Anwendungen und Skripte stattdessen auf eine ungehashte Version des Modulnamens (die Adresse).
Eine Import-Map wie die untenstehende bietet dann ein Mapping zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, dann ändert sich auch sein Hash im Dateinamen. In diesem Fall müssen wir nur die Import-Map aktualisieren, um den geänderten Namen des Moduls wiederzugeben.
Wir müssen den Quellcode des JavaScript-Codes, der davon abhängt, nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modul-Architektur bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als ein {{domxref("CSSStyleSheet")}}-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren möchten. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch Validierung auf der Modultyp durch und schlagen fehl, wenn, zum Beispiel, `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur beabsichtigen, Daten zu importieren. Nach erfolgreichem Import können Sie den importierten Wert jetzt als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich, wie wir ein reguläres Skript auf eine Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modul-Skript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript Modulcode hier */
</script>
```

Sie können `import` und `export` Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird geworfen, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: imports dürfen nur auf oberster Ebene eines Moduls erscheinen
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: imports dürfen nur auf oberster Ebene eines Moduls erscheinen -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit, wenn die Module verwendet werden, erheblich reduzieren.

## Andere Unterschiede zwischen Modulen und Standard-Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Abschnitten des Skripts erhalten, die in Modulen definiert sind, im Gegensatz zu in Standard-Skripten. Dies ist, weil Module {{jsxref("Strict_mode", "strict mode", "", 1)}} automatisch verwenden.
- Es gibt keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulskripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zuletzt, um dies deutlich zu machen — Modulfunktionen werden in den Geltungsbereich eines einzelnen Skripts importiert — sie sind im globalen Geltungsbereich nicht verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert wurden, und Sie können nicht auf sie aus der JavaScript-Konsole zugreifen, zum Beispiel. Sie erhalten weiterhin Syntaxfehler in den Entwicklertools angezeigt, aber Sie können möglicherweise nicht einige der Debugging-Techniken verwenden, die Sie erwartet haben.

In Modulen definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, wenn man den folgenden Code berücksichtigt:

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
      // Eine var-Anweisung erstellt eine globale Variable.
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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch bei diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — das einzige, was benötigt wird, ist, dass der Eintrittspunkt `type="module"` hat.)

## Standard-Exports versus benannte Exports

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const` usw.) wurde beim Export mit seinem Namen referenziert, und dieser Name wurde auch beim Import für die Referenz verwendet.

Es gibt auch eine Art von Export, die als **Standardexport** bezeichnet wird — dies ist dazu gedacht, es einfacher zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie schön erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach „Default exports“).

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unsere Standardeinstellung exportieren, also schreiben wir dies am Ende der Datei:

```js
export default randomSquare;
```

Beachten Sie, dass keine geschweiften Klammern vorhanden sind.

Wir könnten stattdessen `export default` vor die Funktion setzen und sie als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

Drüben in unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier beachten Sie den Mangel an geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax für das Umbenennen von exportierten Elementen wird unten im Abschnitt [Umbenennung von Imports und Exports](#umbenennung_von_imports_und_exports) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Modul zum Zeichnen von Formen auf der Leinwand gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form, wie einem Kreis oder Dreieck, befasst? Diese Formen würden wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()` usw. haben; würden wir versuchen, verschiedene gleichnamige Funktionen in die gleiche Top-Level-Moduldatei zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns mit diesen in den folgenden Abschnitten befassen.

## Umbenennung von Imports und Exports

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identifikationsnamen zu ändern, den Sie für eine Funktion innerhalb des Top-Level-Moduls verwenden werden.

Zum Beispiel würden beide der folgenden Befehle den gleichen Job ausführen, wenn auch auf eine etwas andere Weise:

```js
// innerhalb module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// innerhalb main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// innerhalb module.js
export { function1, function2 };

// innerhalb main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

Schauen wir uns ein reales Beispielszenario an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir Module `circle.js` und `triangle.js` hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

Innerhalb jedes dieser Module haben wir Funktionen mit den gleichen Namen, die exportiert werden, und daher hat jedes denselben `export`-Befehl am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Import in `main.js`, wenn wir versuchen würden,

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

wäre Browser würde einen Fehler wie „SyntaxError: Neu-Deklaration des Imports“ (in Firefox) auslösen.

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

Beachten Sie, dass Sie das Problem stattdessen in den Moduldateien lösen könnten, z.B.

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

Und es würde genauso funktionieren. Welche Methode Sie verwenden, bleibt Ihnen überlassen, allerdings macht es vermutlich mehr Sinn, Ihren Modulcode unverändert zu lassen und die Änderungen in den Importen vorzunehmen. Das ergibt besonders Sinn, wenn Sie aus Drittanbieter-Modulen importieren, auf die Sie keinen Einfluss haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber es ist ein bisschen unordentlich und umständlich. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle verfügbaren Exports innerhalb `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, wodurch es einen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns ein reales Beispiel an. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, aber neu geschrieben, um dieser neuen Syntax zu nutzen. In den Modulen sind die Exports alle in der folgenden einfachen Form:

```js
export { name, draw, reportArea, reportPerimeter };
```

Die Importe andererseits sehen so aus:

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, z.B.:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

So können Sie den Code nun genauso schreiben wie zuvor (solange Sie die Objektnamen dort hinzufügen, wo es nötig ist), und die Importe sind viel übersichtlicher.

## Module und Klassen

Wie wir zuvor angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Moduls zum Zeichnen von Formen mit ES-Klassen neugeschrieben in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Als Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalität in einer einzelnen Klasse:

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

Und verwenden dann die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregation von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Abhängigkeitsebenen haben, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule in einem übergeordneten Modul zusammenfassen. Dies ist unter Verwendung der Export-Syntax der folgenden Formen im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Sie können unser Beispiel in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis sehen. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein extra Modul namens `shapes.js`, das alle Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export von folgender Form:

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen hinzu:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Untermodule und machen sie effektiv aus dem Modul `shapes.js` verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden grundsätzlich durch die Datei umgeleitet und existieren nicht wirklich dort, sodass Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

In der `main.js` Datei können wir nun Zugriff auf alle drei Modulklassen erhalten, indem wir

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

Eine jüngere Erweiterung der JavaScript-Modulfunktionalität ist das dynamische Laden von Modulen. Dies ermöglicht Ihnen ein dynamisches Laden von Modulen nur bei Bedarf, anstelle von allem sofort laden zu müssen. Das hat einige offensichtliche Leistungsvorteile. Lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion zu nennen, das den Pfad zum Modul als Parameter erhält. Es gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Modulobjekt erfüllt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte des Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Mache etwas mit dem Module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers und in geteilten und dedizierten Arbeitern erlaubt.
> `import()` wird jedoch einen Fehler werfen, wenn es in einem Servicearbeiter oder Worklet genannt wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf die Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Tasten - „Kreis“, „Quadrat“ und „Dreieck“ - die, wenn gedrückt, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen in unserem [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien gemacht — die Modulexporte bleiben die gleichen wie zuvor.

In `main.js` haben wir eine Referenz zu jedem Button mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf erhalten, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir binden dann einen Eventlistener an jede Taste, sodass, wenn gedrückt, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, weil die Auflösung ein Modulobjekt zurückgibt, die Klasse dann ein Submerkmal des Objekts wird, und wir jetzt auf den Konstruktor mit `Module.` vorangestellt zugreifen müssen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das kein `type="module"` hat, können Sie es weiterhin wiederverwenden, um Code, der als Module verteilt wird, dynamisch zu importieren.

```html
<script>
  import("./modules/square.js").then((module) => {
    // Mache etwas mit dem Module.
  });
  // Anderer Code, der auf den globalen Geltungsbereich zugreift und noch nicht
  // bereit zur Modulverlagerung ist.
  var btn = document.querySelector(".square");
</script>
```

## Top level await

Top-Level-Await ist ein Feature, das innerhalb von Modulen verfügbar ist. Das bedeutet, dass das Schlüsselwort `await` verwendet werden kann. Es ermöglicht es Modulen, als große [asynchrone Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu fungieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne Geschwistermodule vom Laden abzuhalten.

Sehen wir uns ein Beispiel an. Sie finden alle in diesem Abschnitt beschriebenen Dateien und Codes innerhalb des [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnisses, das sich aus den vorherigen Beispielen ergibt.

Erstens deklarieren wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei:

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Abholung Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als ein Objekt zurückzugeben.

```js
// Fetch-Anfrage
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Dies bedeutet, dass alle anderen Module, die dieses einbeziehen, warten, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

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

Dies ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Er wird jedoch andere Module nicht vom Laden abhalten. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin laden, während `colors` abgerufen wird.

## Importerklärungen sind hoisted

Importerklärungen sind [hoisted](/de/docs/Glossary/Hoisting). In diesem Fall bedeutet es, dass die importierten Werte in dem Modulcode verfügbar sind, noch bevor die Stelle, die sie deklariert, erreicht wird, und dass die Nebeneffekte des importierten Moduls vor dem Rest des Modulcodes produziert werden.

Zum Beispiel, in `main.js`, wenn Sie `Canvas` in der Mitte des Codes importieren, würde es immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Ihre Importe an die Spitze des Codes zu setzen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als „Abhängigkeitsgraph“ bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph durch einen Tiefenfluss-Traversal ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

```js
// -- a.js --
import { b } from "./b.js";

// -- b.js --
import { a } from "./a.js";

// Zyklus:
// a.js ───> b.js
//  ^         │
//  └─────────┘
```

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) erlaubt), und nur wenn die Variable zu diesem Zeitpunkt uninitialisiert bleibt, wird eine [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird bei der Modulbewertung weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird und die beiden `export`-Erklärungen die Werte von `a` und `b` produzieren. Dann, nach der Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen auch normal ausgeführt werden.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, schlägt die Modulbewertung fehl:

```js
// -- a.js (Eingangsmodul) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Zugriff auf 'a' vor Initialisierung nicht möglich
export const b = 1;
```

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, zuerst `b.js` ausgewertet werden muss, die Abhängigkeit von `a.js`. Jedoch verwendet `b.js` `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, gelingt die Modulbewertung:

```js
// -- a.js (Eingangsmodul) --
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

Dies liegt daran, dass die Bewertung von `b.js` normal abgeschlossen wird, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Sie sollten im Allgemeinen zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige häufige Techniken zur Zykleneliminierung sind:

- Die beiden Module zu einem zusammenführen.
- Verschieben des geteilten Codes in ein drittes Modul.
- Verschieben bestimmter Codes von einem Modul auf das andere.

Allerdings können auch zyklische Importe auftreten, wenn die Bibliotheken voneinander abhängen, was schwerer zu beheben ist.

## Erstellen von "isomorphen" Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Nutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: es hängt davon ab.

Module haben immer noch Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, aber wird einen Fehler auf Ihrem Node.js-Server auslösen, weil `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, er zeigt das gleiche Verhalten in jeder Laufzeit. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in „Kern“ und „Binding“. Für den „Kern“ konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne Zugriff auf DOM, Netzwerk, Dateisystem, und machen Sie Dienstleistungsfunktionen zugänglich. Für den „Binding“-Teil können Sie aus dem globalen Kontext lesen und schreiben. Beispielsweise kann die „Browser-Binding“ wählen, den Wert aus einem Eingabefeld zu lesen, während die „Node-Binding“ ihn aus `process.env` lesen kann, aber die aus einer der beiden Quellen gelesenen Werte werden an dieselbe zentrale Funktion und in gleicher Weise verarbeitet. Der Kern kann in jeder Umgebung aufgerufen und auf die gleiche Weise verwendet werden, wobei nur der Binding, der normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Überprüfen Sie, ob ein global dedizierter verfügbar ist, bevor Sie ihn verwenden. Beispielsweise, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie wahrscheinlich in einem Node.js-Umfeld sind und sollten nicht auf DOM lesen.

  ```js
  // myModule.js
  let password;
  if (typeof process !== "undefined") {
    // Wir sind in Node.js; von `process.env` lesen
    password = process.env.PASSWORD;
  } else if (typeof window !== "undefined") {
    // Wir sind im Browser; Lesen vom Eingabefeld
    password = document.getElementById("password").value;
  }
  ```

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit dem gleichen Verhalten enden ("isomorph"). Wenn es unmöglich ist, die gleiche Funktionalität anzubieten, oder wenn dies den Bedarf erfordert, bedeutende Teile Code zu laden, während ein großer Teil ungenutzt bleibt, dann benutzen Sie lieber verschiedene „Bindings“.

- Verwenden Sie ein Polyfill, um einen Rückgriff für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die nur seit v18 in Node.js unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Dies können Sie bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // Wir sind in Node.js; Verwenden Sie node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Aber mit dem Trend der Code-Wiederverwendbarkeit und Modularisierung werden Sie ermutigt, Ihren Code plattformübergreifend zu machen, damit so viele Menschen wie möglich von ihm profitieren können. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strikten MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem nicht-JavaScript MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub-Seiten ist ideal, da es `.mjs`-Dateien mit dem korrekten MIME-Typ bedient.
- Da `.mjs` eine nicht standardmäßige Dateiendung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` an das Ende von `.mjs`-Dateien anhängt und dann die Dateiendung automatisch ausblendet. So kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Ausblenden von Dateiendungen ausgeschaltet und es darauf trainiert hatten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon-Tiefen-Tauchgang](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
