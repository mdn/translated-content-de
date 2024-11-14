---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Module-Syntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme waren anfangs ziemlich klein - die meisten Anwendungen in den frühen Tagen zielten darauf ab, isolierte Skripting-Aufgaben zu erledigen und ein wenig Interaktivität zu Ihren Webseiten hinzuzufügen, wo nötig, so dass große Skripte im Allgemeinen nicht benötigt wurden. Einige Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Verwendung von Modulen ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilierung erforderlich ist. Das kann nur von Vorteil sein - Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all das zusätzliche Client-seitige Processing und zusätzliche Round-Trips durchzuführen. Es macht aber Bundler wie Webpack nicht obsolet - Bundler sind weiterhin sehr gut darin, Code in angemessen große Teile zu partitionieren, und können andere Optimierungen wie Minifizierung, Dead-Code-Eliminierung und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann (und berichten Informationen über) verschiedene Formen auf der Leinwand zeichnen.

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundlegende Beispielstruktur

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das oben Genannte sollte also ziemlich vertraut werden.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit dem Einrichten der Leinwand verbunden sind:

  - `create()` — erstellt eine Leinwand mit einer bestimmten Breite und Höhe in einem Wrapper [`<div>`](/de/docs/Web/HTML/Element/div) mit einer angegebenen ID, die wiederum in ein bestimmtes Elternelement eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem bestimmten Wrapper-Element eingefügt wird und verwendet werden kann, um Berichts-Daten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer bestimmten Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtsliste, gegeben ihre Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtsliste, gegeben ihre Länge.

### Seiteninfo — .mjs versus .js

Im Laufe dieses Artikels haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung verwendet. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die genannten Gründe sind:

- Es ist gut für Klarheit, d.h. es macht klar, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als ein Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest im Moment `.js` zu verwenden. Um sicherzustellen, dass Module korrekt in einem Browser funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type` Header serviert, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen Fehler bei der strengen MIME-Typüberprüfung, wie "The server responded with a non-JavaScript MIME type" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, jedoch noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden, oder wenn nicht, Sie aber wissen, was Sie tun, und Zugang haben (d.h. Sie können Ihren Server konfigurieren, um den richtigen [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien zu setzen). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Zu Lern- und Portabilitätszwecken haben wir beschlossen, bei `.js` zu bleiben.

Wenn Sie wirklich den Wert der Klarheit, `.mjs` für Module gegenüber der Verwendung von `.js` für "normale" JavaScript-Dateien zu sehen, aber nicht in das beschriebene Problem laufen wollen, könnte man immer `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert:

- Einige Tools unterstützen `.mjs` möglicherweise niemals.
- Das Attribut `<script type="module">` wird verwendet, um anzuzeigen, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um Zugang zu Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies wird mit der {{jsxref("Statements/export", "export")}}-Anweisung gemacht.

Der einfachste Weg, es zu verwenden, ist, es vor alle Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const`, und — wie wir später sehen werden — Klassen exportieren. Sie müssen Top-Level-Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Ein bequemerer Weg, alle Elemente, die Sie exportieren möchten, zu exportieren, ist die Verwendung einer einzigen Exportanweisung am Ende Ihrer Moduldabei, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweiften Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Nachdem Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweiften Klammern, gefolgt vom Schlüsselwort `from`, gefolgt von dem _Modul-Spezifikator_.

Der _Modul-Spezifikator_ bietet eine Zeichenkette, die die JavaScript-Umgebung in einen Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Site-Root sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`) Syntax, um "den aktuellen Standort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad anzugeben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert weiterhin, wenn Sie es an einem anderen Ort in der Site-Hierarchie verschieben.

So zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen können Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifikator wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifikator kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Map](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, als ob sie im gleichen Dateikontext definiert wären. Das folgende findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der Funktionen, die exportiert wurden. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, Sie können jedoch Eigenschaften von Objektwerten weiterhin ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe die [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul unter Verwendung eines Modulspezifikators importieren kann, der entweder eine absolute URL oder eine relative URL ist, die unter Verwendung der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern stattdessen, beim Importieren eines Moduls fast jede gewünschte Zeichenfolge im Modulspezifikator anzugeben; die Karte bietet einen entsprechenden Wert, der die Zeichenfolge ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der Schlüssel `imports` in der folgenden Importkarte ein "Modulspezifikator-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifikatoren verwendet werden können, und die entsprechenden Werte werden ersetzt, wenn der Browser die Modul-URL auflöst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URL-Adressen unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments aufgelöst, das die Importkarte enthält.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) definiert.
Es kann nur eine Importkarte im Dokument geben, und da sie verwendet wird, um festzulegen, welche Module sowohl in statischen als auch in dynamischen Importen geladen werden, muss sie vor allen `<script>`-Elementen deklariert werden, die Module importieren.
Es ist zu beachten, dass die Importkarte nur für das Dokument gilt - die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifikatoren verwenden.
Wenn auf dem Modulspezifikator-Schlüssel kein nachfolgender Schrägstrich vorhanden ist, wird das gesamte Modulspezifikator-Schlüsselelement abgeglichen und ersetzt.
Zum Beispiel passen wir unten nackte Modulnamen an und remappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifikator einen Schrägstrich am Ende hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfadpräfix" übereinstimmt.
Dies ermöglicht das Remapping kompletter Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifikator sind.
Zum Beispiel könnte ein Modulspezifikator von `shapes/circle/` den Modulspezifikatorschlüsseln `shapes/` und `shapes/circle/` entsprechen.
In diesem Fall wird der Browser das spezifischste (längste) übereinstimmende Modulspezifikatorschlüssel auswählen.

Importkarten ermöglichen das Importieren von Modulen mit nackten Modulnamen (wie in Node.js) und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, ermöglichen sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert.
Allgemein ermöglichen sie Entwicklern, ergonomischeren Importcode zu schreiben, und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Site verwendet werden.
Dies kann den Aufwand reduzieren, um dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben genannten Funktionen.

### Feature-Erkennung

Sie können die Unterstützung für Importkarten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie nackte Namen für den Modulspezifikator verwenden.
Dies funktioniert, weil die Umgebung Modulnamen zu einem Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen auf einem Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifikatoren in URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn versucht wird, einen Modulspezifikator zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten können Sie eine Karte sehen, die einen `square` Modulspezifikatorschlüssel definiert, der in diesem Fall auf einen relativen Adresswert abbildet.

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

### Remapping von Modulpfaden

Einträge zur Modulspezifikatorkarte, bei denen sowohl der Spezifikatorkey als auch sein zugehöriger Wert einen nachfolgenden Schrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden.
Dies ermöglicht das Remapping eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es möglicherweise im Node-Ökosystem sehen.

> [!NOTE]
> Der nachfolgende `/` zeigt an, dass der Modulspezifikatorenschlüssel als _Teil_ eines Modulspezifikators ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur das gesamte Modulspezifikatorschlüssel-Element abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkartendefinition ordnet `lodash` als nackten Namen zu und den Modulspezifikator-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst zur Dokumentbasis-URL):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Abbildung können Sie sowohl das gesamte "Paket" mit dem nackten Namen als auch Module innerhalb davon importieren (mit der Pfadabbildung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber dafür müssten Sie einen nackten Modulspezifikatorschlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifikatorschlüssel muss kein Pfad sein - er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul mit absoluten Pfaden zu einer Ressource auf Ihre eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Modulabhängigkeiten für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und ihren Abhängigkeiten getrennt ist.
Infolgedessen könnte eine komplexe Anwendung dasselbe Modul mehrfach mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen enthalten, aber Benutzer müssen sich nicht mit dieser Komplexität befassen.

> [!NOTE]
> Sie können auch das Versionsmanagement mit relativen Pfaden erreichen, aber dies ist suboptimal, da es unter anderem eine bestimmte Struktur Ihres Projekts erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und darauf zu verweisen, indem Sie denselben Modulspezifikator verwenden.
Sie implementieren dies mit dem `scopes` Schlüssel, der es Ihnen ermöglicht, Modulspezifikatoren zu definieren, die je nach Pfad des Skripts, das den Import ausführt, verwendet werden.
Das folgende Beispiel zeigt dies.

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

Mit dieser Abbildung wird, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn kein übereinstimmender Umfang in der spezifizierten Karte vorhanden ist, oder die übereinstimmenden Umfänge keinen passenden Spezifikator enthalten. Wenn `cool-module` von einem Skript mit einem nicht übereinstimmenden Umfangspfad importiert wird, wird die Modulspezifikatorkarte in `imports` anstelle der Karte in `scopes` verwendet, die zur Version in `/node_modules/cool-module/index.js` abbildet.

Beachten Sie, dass der Pfad, der zur Auswahl eines Gültigkeitsbereichs verwendet wird, die Art und Weise, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im abgebildeten Pfad muss nicht mit dem Umfangspfad übereinstimmen, und relative Pfade werden weiterhin auf die Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Genauso wie für Modulspezifikatorkarten, können Sie viele Umfangsschlüssel haben, und diese können sich überlappende Pfade enthalten.
Wenn mehrere Gültigkeitsbereiche mit der Referenten-URL übereinstimmen, wird der spezifischste Gültigkeitsbereich (der längste Gültigkeitsbereichsschlüssel) zuerst geprüft, um nach dem Übereinstimmungsspezifikator zu suchen.
Der Browser fällt auf den nächst spezifischsten Übereinstimmungsumfang zurück, wenn es keinen passenden Spezifikator gibt, und so weiter.
Wenn es in keinem der übereinstimmenden Gültigkeitsbereiche einen passenden Spezifikator gibt, überprüft der Browser die Modulspezifikatorkarte im `imports` Schlüssel auf Übereinstimmungen.

### Verbesserung des Cachings durch Entfernen von gehashteren Dateinamen

Skriptdateien, die von Websites verwendet werden, haben häufig gehashte Dateinamen, um das Caching zu erleichtern.
Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehashen Dateinamen importieren, ebenfalls aktualisiert/neugeneriert werden müssen.
Dies kann zu einer Kaskade von Updates führen, was die Netzwerkanforderungen unnötig belastet.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt von spezifischen gehashen Dateinamen abhängig zu sein, verlassen sich Anwendungen und Skripte stattdessen auf eine ungehashte Version des Modulnamens (Adresse).
Eine Importkarte wie die untenstehende kann dann eine Zuordnung zur tatsächlichen Skriptdatei bereitstellen.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch der in dem Dateinamen enthaltene Hash. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls zu reflektieren.
Wir müssen keine der JavaScript-Quellen ändern, die davon abhängig sind, da sich der Spezifikator in der Importanweisung dabei nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein spannendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON importieren und es als JavaScript-Objekt, oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt, verwenden.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung hinsichtlich des Modultyps durchführen und fehlschlagen, wenn zum Beispiel `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Nachdem erfolgreich importiert wurde, können Sie den importierten Wert nun als normales JavaScript-Objekt oder `CSSStyleSheet` Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Das Modul in Ihr HTML anwenden

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können auch das Modulskript direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code im Körper des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"` Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Generell sollten Sie alle Ihre Module in separaten Dateien definieren. Inline deklarierte Module in HTML können nur andere Module importieren, aber alles, was sie exportieren, ist für andere Module nicht zugänglich (weil sie keine URL haben).

> [!NOTE]
> Module und deren Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie auf CORS-Fehler aufgrund von JavaScript-Module-Sicherheitsanforderungen. Sie müssen das Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten erleben, die in Modulen gegenüber klassischen Skripten definiert sind. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es gibt keine Notwendigkeit, das `defer` Attribut zu verwenden (siehe [`<script>` Attributes](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Moduls; Module werden automatisch defer.
- Module werden nur einmal ausgeführt, selbst wenn auf sie in mehreren `<script>`-Tags verwiesen wird.
- Zu guter Letzt, um es klarzustellen — Modulfunktionen werden in den Scope eines einzelnen Skripts importiert — sie sind im globalen Scope nicht verfügbar. Daher können Sie nur auf importierte Funktionen im Skript zugreifen, in das sie importiert werden, und Sie können nicht von der JavaScript-Konsole darauf zugreifen, zum Beispiel. Sie erhalten weiterhin Syntaxfehler in den Developer Tools angezeigt, können jedoch möglicherweise einige der Debugging-Techniken, die Sie möglicherweise erwarten zu verwenden, nicht verwenden.

Von Modulen definierte Variablen sind im Modulbereich, es sei denn, sie sind explizit am globalen Objekt angebracht. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Beispielsweise würde der folgende Code:

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

Die Seite würde immer noch `Hello` anzeigen, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch in diesem Beispiel, dass ein Modul nicht unbedingt eine import/export Anweisung benötigt — das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardeinstellungen im Vergleich zu benannten Exports

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exports** — jedes Element (sei es eine Funktion, `const` usw.) wurde bei seinem Namen beim Export referenziert, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, die als **Standardexport** bezeichnet wird — dies ist darauf ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, die ein Modul bietet, und hilft auch, JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie schön in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem Basic-Modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, daher schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion anhängen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer Datei `main.js` importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen von exportierten Elementen wird unten im Abschnitt [Renaming imports and exports](#umbenennen_von_imports_und_exports) erklärt.

## Vermeiden von Namenskonflikten

Bisher scheinen unsere Leinwand-Formen-Zeichnungs-Module gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form, wie eines Kreises oder Dreiecks, befasst? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()` usw.; wenn wir versuchen würden, unterschiedliche Funktionen mit demselben Namen in dieselbe Top-Level-Moduldatei zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden diese in den folgenden Abschnitten betrachten.

## Umbenennen von Imports und Exports

Innerhalb Ihrer `import`- und `export`-Anweisungsgeschweiften Klammern können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie innerhalb des Top-Level-Moduls für eine Funktion verwenden werden.

Also zum Beispiel, würden beide der Folgenden die gleiche Arbeit machen, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis finden Sie das gleiche Modulsystem wie im vorherigen Beispiel, nur dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu berichten.

In jedem dieser Module haben wir Funktionen mit demselben Namen, die exportiert werden, und daher hat jedes das gleiche `export`-Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden, Folgendes zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler werfen wie "SyntaxError: redeclaration of import name" (Firefox).

Stattdessen müssen wir die Importe umbenennen, so dass sie einzigartig sind:

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

Und es würde genauso funktionieren. Welchen Stil Sie verwenden, liegt an Ihnen. Es ist jedoch sinnvoller, Ihren Modulcode unverändert zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht insbesondere Sinn, wenn Sie aus Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die oben beschriebene Methode funktioniert in Ordnung, aber sie ist etwas umständlich und langwierig. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle in `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, was effektiv seinen eigenen Namensbereich schafft. So zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns ein echtes Beispiel an. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis besuchen, sehen Sie das gleiche Beispiel erneut, aber umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen befinden sich die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unterhalb des spezifizierten Objektnamens zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können jetzt den Code genauso wie zuvor schreiben (solange Sie die Objektnamen dort verwenden, wo sie benötigt werden), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formen-Zeichenmoduls mit ES-Klassen umgeschrieben, im [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis sehen. Als Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) Datei jetzt alle ihre Funktionalität in einer einzigen Klasse:

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

Und verwenden dann die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregieren von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Abhängigkeitsstufen haben, bei denen Sie die Dinge vereinfachen und mehrere Untermodule in ein übergeordnetes Modul kombinieren möchten. Dies ist möglich unter Verwendung der Exportsyntax der folgenden Formen im übergeordneten Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenzimmerbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität aus `circle.js`, `square.js` und `triangle.js` zusammenführt. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. So sieht die Modulstruktur in diesem Beispiel aus:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule hat der Export die gleiche Form, z.B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte aus den einzelnen Untermodulen und machen sie im `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Wesentlichen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code in derselben Datei schreiben können.

So können wir nun in der `main.js`-Datei auf alle drei Modulklassen zugreifen, indem wir

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

Eine kürzlich hinzugefügte Funktionalität zu JavaScript-Modulen ist das dynamische Laden von Modulen. Dadurch können Sie Module dynamisch laden, nur wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Vorteile in Bezug auf die Leistung; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, wobei Sie den Pfad zum Modul als Parameter übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt, das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Der dynamische Import ist im Hauptthread des Browsers und in gemeinsam genutzten und dedizierten Workern erlaubt.
> `import()` wird jedoch einen Fehler werfen, wenn er in einem Serviceworker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel basierend auf unserem Klassenzimmerbeispiel. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Schaltflächen — "Circle", "Square" und "Triangle" —, die, wenn sie gedrückt werden, das benötigte Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulexporte bleibt dieselben wie zuvor.

Drüben in `main.js` haben wir einen Verweis auf jede Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf ergriffen, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir haben dann jeden Schaltflächen ein Ereignislistener hinzugefügt, sodass, wenn gedrückt, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, wird die Klasse dann zu einem untergeordneten Merkmal des Objekts, daher müssen wir nun auf den Konstruktor mit `Module.` davor zugreifen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skript-Umgebungen. Daher, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` ist, Sie dennoch in den Genuss von Codeverteilung als Module kommen können, indem Sie es dynamisch importieren.

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

Top Level Await ist ein Feature, das innerhalb von Modulen verfügbar ist. Das bedeutet, das `await`-Schlüsselwort kann verwendet werden. Es erlaubt Modulen, als große [asynchrone Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu agieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne das Laden von parallelen Modulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie können alle Dateien und Codes, die in diesem Abschnitt beschrieben werden, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) Verzeichnis finden, welches auf den vorherigen Beispielen basiert.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, die exportiert werden soll. Das bedeutet, dass alle anderen Module, die dieses einschließen, warten, bis `colors` heruntergeladen und analysiert wurden, bevor sie verwendet werden.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei aufnehmen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht blockieren, dass andere Module geladen werden. Zum Beispiel unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul wird weiter laden, während `colors` abgerufen wird.

## Importdeklarationen werden gehievt

Importdeklarationen werden {{Glossary("Hoisting", "gehievt")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls bereits vor dem Ort, der sie deklariert, verfügbar sind, und dass die importierten Modulseitenwirkungen produziert werden, bevor der restliche Modulcode ausgeführt wird.

So zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` trotzdem funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Ihre Importe oben im Code zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Das bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einem tieferen Traverse ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was [lebendige Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) erlaubt), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher ist zum Zeitpunkt der Auswertung des Moduls weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird, und die beiden `export` Deklarationen produzieren die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log` Anweisungen ebenfalls normal ausgeführt werden.

Wenn Sie den Code ändern, um `a` synchron zu verwenden, schlägt die Auswertung des Moduls fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Dies liegt daran, dass, wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, ausgewertet werden muss. `b.js` verwendet jedoch `a`, was noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, würde die Auswertung des Moduls erfolgreich sein:

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

Sie sollten in Ihrem Projekt normalerweise zyklische Importe vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Beseitigung von Zyklen sind:

- Verschmelzen Sie die beiden Module in eines.
- Verschieben Sie den gemeinsamen Code in ein drittes Modul.
- Verschieben Sie etwas Code von einem der Module in das andere.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Verfassen von "isomorphen" Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Dies bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul gefunden, das SHA-Hashes für das Passwort Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: das hängt davon ab.

Module haben weiterhin Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul globale Variablen wie `window` referenziert, kann es im Browser ausgeführt werden, aber es kann Fehler auf Ihrem Node.js-Server auslösen, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen - das heißt, dass er überall dasselbe Verhalten aufweist. Dies wird häufig auf drei Arten erreicht:

- Unterteilen Sie Ihre Module in "Kern" und "Bindung". Beim "Kern" konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs ohne jeglichen Zugriff auf den DOM, das Netzwerk oder das Dateisystem und machen Hilfsfunktionen zugänglich. Der "Bindungsteil" kann aus dem globalen Kontext lesen und schreiben. Zum Beispiel könnte die "Browser-Bindung" sich entscheiden, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" ihn aus `process.env` lesen könnte, aber Werte, die von einem Ort gelesen werden, werden an dieselbe Kernfunktion weitergeleitet und auf dieselbe Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur die Bindung, die normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Erkennen, ob ein bestimmtes globales Element existiert, bevor es verwendet wird. Zum Beispiel kann `typeof window === "undefined"` prüfen, ob Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und den DOM nicht lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten ("isomorph") enden. Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen oder wenn dies das Laden erheblicher Mengen an Code erfordert, während ein großer Teil davon ungenutzt bleibt, verwenden Sie besser unterschiedliche "Bindings".

- Verwenden Sie ein Polyfill, um eine Rückfalllösung für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die nur in Node.js seit v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch werden Sie ermutigt, Ihren Code plattformunabhängig zu machen, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren auch aktiv Web-APIs, wo immer möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu ergänzen, wenn Ihnen mehr einfällt!

- Wir haben dies vorher erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, sonst erhalten Sie einen strengen MIME-Typüberprüfungsfehler wie "The server responded with a non-JavaScript MIME type".
- Wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie auf CORS-Fehler aufgrund von JavaScript-Module-Sicherheitsanforderungen. Sie müssen das Testen über einen Server durchführen. GitHub-Seiten sind ideal, da sie auch `.mjs`-Dateien mit dem richtigen MIME-Typ bereitstellen.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS `.js` stillschweigend ans Ende von `.mjs`-Dateien anfügt und dann die Dateierweiterung automatisch ausblendet. So kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Ausblenden von Dateierweiterungen ausgeschaltet und das Akzeptieren von `.mjs` eingestellt hatten, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
