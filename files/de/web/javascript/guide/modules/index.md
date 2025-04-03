---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund über Module

JavaScript-Programme begannen ziemlich klein - die meisten seiner frühen Anwendungen waren isolierte Skripting-Aufgaben, die ein wenig Interaktivität auf Ihren Webseiten dort bieten, wo sie benötigt wurde, sodass große Skripte im Allgemeinen nicht erforderlich waren. Einige Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus zum Aufteilen von JavaScript-Programmen in separate Module, die bei Bedarf importiert werden können. Node.js hat diese Fähigkeit schon lange, und es gibt eine Anzahl von JavaScript-Bibliotheken und Frameworks, die die Modulnutzung ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ ohne die Notwendigkeit der Transpilation. Das kann nur positiv sein - Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek verwenden zu müssen und all diese zusätzliche clientseitige Verarbeitung und zusätzliche Hin- und Rückfahrten zu erledigen. Es bedeutet jedoch nicht, dass Bundler wie webpack veraltet sind – Bundler leisten immer noch gute Arbeit beim Partitionieren von Code in angemessen große Stücke und können andere Optimierungen wie Minifizierung, Elimination von totem Code und Baumschütteln durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf das Canvas zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie durch einen lokalen Webserver ausführen.

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
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das oben Gesagte sollte ziemlich vertraut werden.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen im Zusammenhang mit der Einrichtung des Canvas:

  - `create()` — erstellt ein Canvas mit einer angegebenen `width` und `height` innerhalb eines Wrapper-`<div>` mit einer angegebenen ID, der selbst innerhalb eines angegebenen Elternelements angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements angehängt wird, und die zum Ausgeben von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf ein angegebenes Canvas mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats auf eine bestimmte Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats auf eine bestimmte Berichtsliste, basierend auf seiner Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht klar, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst `.js` zu verwenden. Um Module korrekt in einem Browser zu verwenden, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header liefert, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, erhalten Sie einen strengen MIME-Typ-Prüfungsfehler etwa in der Art "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber bisher noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien korrekt bedienen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie eine solche Umgebung bereits verwenden, oder wenn nicht, aber Sie wissen, was Sie tun, und Zugriff haben (i.e., Sie können Ihren Server so konfigurieren, dass der korrekte [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien gesetzt wird). Es könnte jedoch Verwirrung stiften, wenn Sie den Server, von dem aus Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit, `.mjs` für Module im Vergleich zur Verwendung von `.js` für "normale" JavaScript-Dateien zu schätzen, aber nicht auf das oben beschriebene Problem stoßen wollen, könnten Sie immer `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Werkzeuge `.mjs` möglicherweise nie unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun müssen, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies wird mit der {{jsxref("Statements/export", "export")}}-Anweisung gemacht.

Der einfachste Weg, es zu verwenden, besteht darin, es vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Elemente auf der obersten Ebene sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Ein bequemerer Weg, alle Elemente, die Sie exportieren möchten, zu exportieren, ist die Verwendung einer einzigen Exportanweisung am Ende Ihrer Moduldaten, gefolgt von einer durch Kommata getrennten Liste der Funktionen, die Sie exportieren möchten, in geschweiften Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommata getrennten Liste der Funktionen, die Sie importieren möchten, in geschweiften Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modul-Spezifizierer_.

Der _Modul-Spezifizierer_ bietet einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann. In einem Browser könnte dies ein relativ zum Site-Stammpfad sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier verwenden wir jedoch stattdessen die Punkt-(`.`)-Syntax, um "der aktuelle Ort" zu bedeuten, gefolgt vom relativen Pfad zu den Daten, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer und die URL tragbar machen - das Beispiel funktioniert immer noch, wenn Sie es an einen anderen Ort in der Seitenhierarchie verschieben.

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
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und der keine Dateierweiterung hat. Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importtabelle](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Date, definiert. Das Folgende findet sich in `main.js`, unter den Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der Funktionen, die exportiert wurden. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe die [`import`](https://www.drupal.org/api/drupal/actions?field_category=16482) Referenz für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modul-Spezifizierer importieren kann, der entweder eine absolute URL ist oder eine relative URL, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden Text zu spezifizieren, den sie im Modulspezifizierer verwenden möchten; die Karte bietet einen entsprechenden Wert, der den Text ersetzt, wenn die Moduledaten -URL aufgelöst wird.

Zum Beispiel definiert der Schlüssel `imports` in der folgenden Importkarte ein „Modulspezifizierer-Karten“-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte beim Auflösen der Moduledaten -URL ersetzt werden. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden in absolute URL-Adressen aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, verwendet wird.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem Typattribut, das auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt ist, definiert. Beachten Sie, dass eine Importkarte nur für das Dokument gilt - die Spezifikation behandelt nicht, wie eine Importkarte in einem Arbeiter- oder Worklet-Kontext angewendet werden kann. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die oben genannten Eigenschaftsnamen als Modulspezifizierer verwenden. Wenn kein Schrägstrich am Ende des Modulspezifizierer-Schlüssels vorhanden ist, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt. Zum Beispiel werden unten nackte Modulnamen abgeglichen, und eine URL wird auf einen anderen Pfad umgeleitet.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen abschließenden Schrägstrich hat, muss dieser Wert auch einen haben, und der Schlüssel wird als „Pfadpräfix“ abgeglichen. Dadurch können ganze Klassen von URLs neu gemappt werden.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind. Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifiziererschlüsseln `shapes/` und `shapes/circle/` übereinstimmen. In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifiziererschlüssel aus.

Importkarten ermöglichen es, Module mit nackten Modulnamen zu importieren (wie in Node.js) und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen. Auch wenn dies oben nicht gezeigt wird, erlauben sie auch, bestimmte Versionen einer Bibliothek basierend auf dem Pfad des Skripts zu importieren, das das Modul importiert. Im Allgemeinen ermöglichen sie es Entwicklern, mehr ergonomischen Importcode zu schreiben, und erleichtern die Verwaltung der verschiedenen Versionen und Abhängigkeiten der von einer Seite verwendeten Module. Dies kann den Aufwand zur Verwendung derselben JavaScript-Bibliotheken sowohl in Browser als auch auf Servern verringern.

Die folgenden Abschnitte erweitern die oben skizzierten verschiedenen Funktionen.

### Funktionsüberprüfung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen wie Node.js können Sie nackte Namen für den Modulspezifizierer verwenden. Dies funktioniert, weil die Umgebung Modulnamen in einem Standardpfad im Dateisystem auflösen kann. Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die die vom Browser benötigten Informationen bereitstellt, um Modulspezifizierer in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifiziererschlüssel definiert, der in diesem Fallzu einer relativen Adresswert.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen nackten Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Umleiten von Modulpfaden

Moduleinträgen in der Modulspezifiziererkarte, bei denen sowohl der Spezifiziererschlüssel als auch der damit verbundene Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden. Dadurch kann eine ganze Menge von Import-URLs von einem Standort auf einen anderen umgeleitet werden. Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen", wie Sie es in der Node-Umgebung sehen können, zu simulieren.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifiziererschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann. Wenn dies nicht vorhanden ist, wird der Browser nur den ganzen Modulspezifiziererschlüssel (und ersetzt) abgleichen.

#### Pakete von Modulen

Die folgende JSON-Importkartendefinition ordnet `lodash` als nackten Namen zu und das Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst auf die Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem nackten Namen importieren als auch Module darin (mit der Pfadzuordnung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten ein Bare-Modulspezifiziererschlüssel für diese Datei erstellen, z. B. `lodash/fp`, anstatt den Pfad zu verwenden. Dies mag vernünftig für nur ein Modul sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifiziererschlüssel muss kein Pfad sein - er kann auch eine absolute URL sein (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`). Dies kann nützlich sein, wenn Sie ein Modul umleiten möchten, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gezielte Module für das Versionsmanagement

Umgebungen wie Node verwenden Paketmanager wie npm, um Module und ihre Abhängigkeiten zu verwalten. Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und ihren Abhängigkeiten getrennt ist. Infolgedessen, obwohl eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen einschließen könnte, müssen sich die Benutzer nicht mit dieser Komplexität auseinandersetzen.

> [!NOTE]
> Sie können das Versionsmanagement auch mit relativen Pfaden erreichen, aber dies ist unzureichend, weil dies unter anderem eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, Bare-Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie mit demselben Modulspezifizierer zu verweisen. Sie implementieren dies mit dem Schlüssel `scopes`, der es Ihnen erlaubt, Modulspezifizierer-Karten bereitzustellen, die je nach Pfad des die Importausführenden Skripts verwendet werden. Das folgende Beispiel demonstriert dies.

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

Mit dieser Zuordnung wird, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet. Die Karte in `imports` wird als Ersatz verwendet, wenn kein passender Bereich in der gesperrten Karte vorhanden ist, oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Wenn zum Beispiel `cool-module` von einem Skript mit einem nicht passenden Umfangspfad importiert wird, dann wird die Modulspezifiziererkarte in `imports` stattdessen verwendet, um auf die Version in `/node_modules/cool-module/index.js` zu verweisen.

Beachten Sie, dass der zum Auswählen eines Bereichs verwendete Pfad nicht beeinflusst, wie die Adresse aufgelöst wird. Der Wert im gemappten Pfad muss nicht mit dem Bereichspfad übereinstimmen, und relative Pfade werden weiterhin zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Genau wie bei den Modulspezifizierer-Karten können Sie viele Bereichsschlüssel haben, und diese können sich überlappende Pfade enthalten. Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird zuerst der spezifischste Bereichtspfad (der längste Bereichsschlüssel) auf eine passende Spezifizierung überprüft. Der Browser fällt auf den nächsten spezifischsten passenden Bereichspfad zurück, wenn keine passende Spezifikabteilung vorhanden ist, und so weiter. Wenn in keinen der passenden Bereiche eine passende Spezifikabteilung vorhanden ist, überprüft der Browser auf eine Übereinstimmung in der Modulspezifikabteilungskarte im `imports`-Schlüssel.

### Verbesserung des Caching durch Wegzuordnen von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, auch aktualisiert/regeneriert werden müssen. Dies reistet möglicherweise zu einer Kaskade von Updates, was verschwenderisch für Netzwerkressourcen ist.

Importkarten bieten eine bequeme Lösung für dieses Problem. Anstatt von bestimmten gehashten Dateinamen abhängig zu sein, verlassen sich Anwendungen und Skripte stattdessen auf eine ungehashte Version des Modulnamens (Adresse). Eine Importkarte wie die folgende stellt dann eine Zuordnung zur tatsächlichen Skriptdaten bereit.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls zu widerspiegeln. Wir müssen den Quellcode des JavaScript-Codes, der sich darauf verlässt, nicht aktualisieren, weil der im Importbefehl angegebene Spezifizierer sich nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine einheitliche Modularchitektur bietet, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und wirft einen Fehler, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht als JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald sie erfolgreich importiert wurde, können Sie den importierten Wert jetzt als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Nun müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ähnelt sehr der Weise, wie wir ein reguläres Skript auf eine Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code im Körper des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können nur `import`- und `export`-Anweisungen innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Module in separaten Dateien definieren. Inline in HTML deklarierte Module können nur andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) spezifiziert werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie die HTML-Datei lokal laden (i.e., mit einer `file://` URL), stoßen Sie aufgrund von JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen durch einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten erhalten, die in Modulen im Gegensatz zu klassischen Skripten definiert sind. Dies liegt daran, dass Module automatisch den {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut zu verwenden (siehe [`<script>` attributes](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulscripts; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehrere `<script>`-Tags referenziert werden.
- Last but not least, lassen Sie uns das klarstellen - Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert - sie sind nicht im globalen Bereich verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert werden, und Sie können nicht über die JavaScript-Konsole darauf zugreifen. Sie erhalten trotzdem Syntaxfehler, die in den DevTools angezeigt werden, aber Sie können möglicherweise nicht einige der Debugg-Techniken verwenden, die Sie erwartet haben zu verwenden.

Modul-definierte Variablen sind im Modulbereich, es sei denn, sie werden ausdrücklich an das globale Objekt angehängt. Andererseits sind global-definierte Variablen im Modul verfügbar. Zum Beispiel, gegeben der folgende Code:

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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import/Export-Anweisung benötigt — die einzige Voraussetzung ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte vs. benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, besteht aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde bei seinem Namen beim Export referenziert, und dieser Name wurde auch beim Import ebenfalls dafür verwendet.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird — dieser ist dazu konzipiert, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul angeboten wird, und hilft auch JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie es schön beschrieben wird in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Lassen Sie uns ein Beispiel betrachten, während wir erklären, wie es funktioniert. In unserem basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir wollen dies als unseren Standard exportieren, also schreiben wir am Ende der Datei dies:

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

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Beachten Sie auch hier das Fehlen von geschweiften Klammern. Dies liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Wesentlichen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax zum Umbenennen von exportierten Elementen wird unten im Abschnitt [Umbenennung von Importen und Exporten](#umbenennung_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formen zeichnenden Module gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form befasst, wie einem Kreis oder Dreieck? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, etc.; wenn wir versuchten, unterschiedliche Funktionen mit demselben Namen in dieselbe oberste Projektebene-Datei zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es einige Möglichkeiten, dies zu umgehen. In den folgenden Abschnitten werden wir diese betrachten.

## Umbenennung von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionennamen verwenden, um den identifizierenden Namen zu ändern, den Sie innerhalb des Moduls auf höchster Ebene für eine Funktion verwenden werden.

Also zum Beispiel würden beide der folgenden im Wesentlichen dieselbe Arbeit erledigen, wenn auch auf leicht unterschiedliche Weise:

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

Lassen Sie uns ein echtes Beispiel betrachten. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber Bericht zu erstatten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes am Ende dieselbe `export`-Anweisung:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` zu verwenden versuchen

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

Beachten Sie, dass Sie das Problem auch in den Moduldaten beheben könnten, z.B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, bleibt Ihnen überlassen, es macht jedoch möglicherweise mehr Sinn, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht insbesondere dann Sinn, wenn Sie aus Modulen von Drittanbietern importieren, die Sie nicht steuern können.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber sie ist ein wenig unordentlich und umständlich. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht dies:

```js
import * as Module from "./modules/module.js";
```

Dies greift alle verfügbaren Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv seinen eigenen Namensbereich gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Sehen wir uns noch ein Beispiel an. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis besuchen, sehen Sie das gleiche Beispiel noch einmal, aber umgeschrieben, um von dieser neuen Syntax zu profitieren. In den Modulen sind alle Exporte in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unterhalb des angegebenen Objektnamens zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können den Code also nach wie vor genauso wie zuvor schreiben (sofern Sie die Objektnamen bei Bedarf hinzufügen), und die Importe sind wesentlich ordentlicher.

## Module und Klassen

Wie wir zuvor angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option zum Vermeiden von Konflikten in Ihrem Code und ist besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel für unser mit ES-Klassen umgeschriebenes Formenzeichnungsmodul in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) nun alle ihre Funktionalität in einer einzigen Klasse:

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

## Aggregierung von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, wo Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule in ein übergeordnetes Modul kombinieren. Dies ist möglich, indem Sie die Exportsyntax der folgenden Formate im übergeordneten Modul verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel, siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule innerhalb eines Unterverzeichnisses innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Moduldatenstruktur in diesem Beispiel ist wie folgt:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in derselben Form, z.B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) beinhalten wir die folgenden Zeilen:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte von den einzelnen Untermodulen und machen sie effektiv vom `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Wesentlichen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie dort keinen verwandten nützlichen Code schreiben können.

Jetzt können wir in der `main.js`-Datei auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

mit der folgenden einzigen Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Ein neuerer Zusatz zur Funktionalität von JavaScript-Modulen ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungs Vorteile. Lesen Sie weiter, um zu erfahren, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Es gibt ein Promise zurück, das sich mit einem Modulobjekt erfüllt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte jenes Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Der dynamische Import ist im Hauptthread des Browsers sowie in Shared und Dedicated Workers erlaubt.
> Jedoch wird `import()` einen Fehler werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Sehen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Dieses Mal zeichnen wir jedoch beim Laden des Beispiels nichts auf der Leinwand. Stattdessen umfassen wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Moduldaten-Exporte bleiben wie zuvor.

In `main.js` greifen wir auf eine Referenz jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf zu, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Dann befestigen wir einen Ereignis-Listener an jede Schaltfläche, damit beim Drücken das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, weil die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann ein Untermerkmal des Objekts wird; daher müssen wir jetzt auf den Konstruktor mit `Module.` vorangestellt zugreifen, z.B., `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Daraus ergibt sich, dass Sie, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, immer noch bereits erstellten Code als Module verwenden können, indem Sie ihn dynamisch importieren.

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

Top-Level-Await ist eine Funktion, die in Modulen verfügbar ist. Das bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu fungieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne das Laden von Geschwistermodulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie können alle beschriebenen Dateien und Codes im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) finden, das von den vorherigen Beispiel erweitert wird.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als ein Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, die exportiert werden soll. Das bedeutet, dass alle anderen Module, die dieses Modul beinhalten, warten, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unsere [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einschließen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Strings beim Aufrufen unserer Formfunktionen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch das Laden anderer Module nicht blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet es, dass die importierten Werte im Code des Moduls verfügbar sind, auch vor der Stelle, an der sie deklariert werden, und dass die Nebeneffekte des importierten Moduls erzeugt werden, bevor der restliche Code des Moduls ausgeführt wird.

Also zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch gilt es als gute Praxis, alle Ihre Importe an den Anfang des Codes zu setzen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [zyklusfrei](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph unter Verwendung eines Tiefendurchlaufs ausgewertet werden.

Zyklen sind jedoch oft unvermeidbar. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (daher werden [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zur Zeit der Modulauswertung auf keinen von beiden tatsächlich gelesen, sodass der restliche Code wie gewohnt ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` liefern. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log` Anweisungen ebenfalls wie gewohnt ausgeführt werden.

Wenn Sie den Code so ändern, dass `a` synchron verwendet wird, schlägt die Modulauswertung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Dies liegt daran, dass JavaScript beim Auswerten von `a.js` zuerst `b.js` auswerten muss, die Abhängigkeit von `a.js`. `b.js` verwendet jedoch `a`, die noch nicht verfügbar ist.

Wenn Sie den Code auf den synchronen Gebrauch von `b` gegen `a` ändern, aber `a` asynchron verwenden, funktioniert die Modulauswertung:

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

Normalerweise sollten Sie zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Eliminierung von Zyklen sind:

- Die beiden Module zu einem zusammenführen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Einige Codes von einem Modul zum anderen verschieben.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängen, was schwerer zu beheben ist.

## Verfassen von „isomorphen“ Modulen

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modulare zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es hängt ab.

Module haben immer noch Zugriff auf globale Variablen, wie bereits gezeigt wurde. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, löst aber auf Ihrem Node.js-Server einen Fehler aus, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code den Zugriff auf `process` erfordert, um funktionsfähig zu sein, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird häufig empfohlen, den Code „isomorph“ zu gestalten - das heißt, in jedem Lauf spezifisch dasselbe Verhalten aufzuweisen. Dies wird allgemein auf drei Weisen erreicht:

- Trennen Sie Ihre Module in „Kern“ und „Bindung“. Fokussieren Sie sich bei dem „Kern“ auf reinen JavaScript-Logik, wie die Berechnung des Hashs, ohne jeglichen DOM-, Netzwerk-, Dateisystemzugriff, und exportieren Sie Gebrauchsfunktionen. Lesen und schreiben Sie im „Bindungsteil“ im globalen Kontext. Vorhanden sei etwa, die „Browser-Bindung“ wählt, den Wert aus einer Eingabekästchen zu lesen, während die „Node-Bindung“ aus `process.env` liest, aber aus beiden Stellen zur gleichen Kernfunktion und behandeln es auf dieselbe Weise gearbeitet. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur die Bindung, die im Allgemeinen leicht ist, plattformspezifisch sein muss.
- Erst, ob eine bestimmte globale Variable existiert, bevor sie verwendet wird. Zum Beispiel wissen Sie, dass, wenn Sie `typeof window === "undefined"` testen, Sie wahrscheinlich in einer Node.js-Umgebung sind und nicht den DOM lesen sollten.

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

  Dies wird bevorzugt, wenn die beiden Zweige letztendlich dasselbe Verhalten haben ("isomorph"). Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen oder wenn es das Laden großer Mengen an Code beinhaltet, während ein großer Teil davon unbenutzt bleibt, sollten Sie stattdessen verschiedene „Bindungen“ verwenden.

- Verwenden Sie einen Polyfill, um einen Fallback für fehlende Funktionen bereitzustellen. Wenn Sie zum Beispiel die Funktion [`fetch`](/de/docs/Web/API/Fetch_API) verwenden möchten, die nur in Node.js seit v18 unterstützt wird, können Sie eine ähnliche API wie die, die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellt wird, verwenden. Sie können dies bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die Variable [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Still, mit dem Trend der Codewiederverwendbarkeit und Modularisierung werden Sie dazu ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo immer es möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Sie möglicherweise nützlich finden, wenn Sie Probleme haben, Ihre Module zum Laufen zu bekommen. Willkommen, wenn Sie zur Liste hinzufügen, wenn Sie mehr entdecken!

- Wir haben dies zuvor erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, sonst erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (i.e., mit einer `file://` URL), stoßen Sie aufgrund von JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen durch einen Server durchführen. GitHub-Seiten sind ideal, da sie auch `.mjs`-Dateien mit dem richtigen MIME-Typ bedienen.
- Da `.mjs` ein nicht standardmäßiger Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel stellten wir fest, dass macOS stillschweigend `.js` am Ende von `.mjs`-Dateien ergänzt und dann die Dateierweiterung automatisch ausgeblendet hat. So kamen alle unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Ausblenden von Dateierweiterungen deaktiviert und sie akzeptieren, dass `.mjs` in Ordnung zwar funktioniert.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon-Tiefgang](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Kapitel 16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
