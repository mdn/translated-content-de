---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — die meisten seiner Anwendungen in den frühen Tagen bestanden darin, isolierte Skriptaufgaben zu erfüllen, um Ihrer Webseite dort, wo es nötig war, ein wenig Interaktivität zu verleihen. Daher waren große Skripte im Allgemeinen nicht erforderlich. Einige Jahre später haben wir nun vollständige Anwendungen, die im Browser mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (z. B. {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, mit dem JavaScript-Programme in separate Module aufgeteilt werden können, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Verwendung von Modulen ermöglichen (z. B. andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation erforderlich ist. Das ist eine gute Sache — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all diese zusätzliche clientseitige Verarbeitung und zusätzliche Rundreisen durchzuführen. Es macht jedoch keine Bundler wie Webpack überflüssig — Bundler leisten immer noch gute Arbeit beim Aufteilen von Code in vernünftig große Teile und können andere Optimierungen wie Minifikation, Dead-Code-Elimination und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [einfache Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine einfache Reihe von Modulen, die ein `<canvas>`-Element auf einer Webseite erstellen und dann (und Informationen dazu) verschiedene Formen auf der Leinwand zeichnen.

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur der Beispiele

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; Das Obige sollte ziemlich vertraut werden.

Die zwei Module im modules-Verzeichnis werden unten beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines Wrapper-`<div>` mit einer angegebenen ID, das selbst innerhalb eines angegebenen Elternelements angehängt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements angehängt wird, in die Berichtsdatenausgaben erfolgen können. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichterstattungsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichterstattungsliste, basierend auf seiner Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen könnten Sie die `.mjs`-Erweiterung sehen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), beispielsweise. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d. h., es macht deutlich, welche Dateien Module sind und welches normales JavaScript ist.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul analysiert werden.

Wir haben uns jedoch entschieden, vorerst `.js` weiterzuverwenden. Um Module im Browser korrekt zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strikten MIME-Typ-Prüfungsfehler in der Art von "Der Server antwortete mit einem nicht-JavaScript-MIME-Typ" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server legen bereits den korrekten Typ für `.js`-Dateien fest, jedoch noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder nicht, aber wissen, was Sie tun und Zugriff haben (d. h., Sie können Ihren Server konfigurieren, um den korrekten [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien festzulegen). Es könnte jedoch Verwirrung stiften, wenn Sie nicht die Kontrolle über den Server haben, von dem aus Sie Dateien bereitstellen, oder Dateien für die öffentliche Nutzung veröffentlichen, wie wir es hier tun.

Aus Lern- und Portabilitätsgründen haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich die Klarheit schätzen, `.mjs` für Module im Vergleich zu `.js` für "normale" JavaScript-Dateien zu verwenden, aber nicht die oben beschriebene Problematik erleben möchten, könnten Sie immer während der Entwicklung `.mjs` verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie unten zu sehen ist.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun müssen, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, es zu benutzen, ist es vor allen Elementen zu platzieren, die Sie aus dem Modul exportieren möchten, z. B.:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen auf oberster Ebene sein: Sie können `export` zum Beispiel nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzige Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer durch Kommas getrennten Liste der zu exportierenden Funktionen, die in geschweifte Klammern eingeschlossen ist. Beispielsweise:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Wenn Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der zu importierenden Funktionen, die in geschweifte Klammern eingeschlossen ist, gefolgt vom Schlüsselwort `from` und dem _Modulspezifikator_.

Der _Modulspezifikator_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldaten auflösen kann. In einem Browser könnte dies ein Pfad relativ zum Site-Stamm sein, der für unser `basic-modules` Beispiel `/js-examples/module-examples/basic-modules` wäre. Hier verwenden wir jedoch stattdessen die Punkt- (`.`) Syntax, um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL tragbar machen — das Beispiel funktioniert auch dann noch, wenn Sie es an einen anderen Ort in der Site-Hierarchie verschieben.

Zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen können Sie in Aktion in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifikator wie `modules/square` verwenden, der weder ein relativer noch ein absoluter Pfad ist und keine Dateierweiterung hat. Dieser Art von Spezifikator kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Import-Map](#importieren_von_modulen_mit_import-maps) definieren.

Nachdem Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Modul definiert. Das Folgende befindet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen, können Sie keine Neuzuweisung der importierten Variable vornehmen, aber Sie können Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul umgeändert werden, das ihn exportiert. Siehe die [`import` reference](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Maps

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifikator importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mithilfe der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Import-Maps](/de/docs/Web/HTML/Element/script/type/importmap) erlauben es Entwicklern, stattdessen fast jeden gewünschten Text im Modulspezifikator anzugeben, wenn ein Modul importiert wird; die Map bietet einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports`-Schlüssel in der untenstehenden Import-Map ein "Modulspezifikator-Map"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifikatoren verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden. Die Werte müssen absolute oder relative URLs sein. Relative URLs werden zu absoluten URL-Adressen mithilfe der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments aufgelöst, das die Import-Map enthält.

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

Die Import-Map wird mithilfe eines [JSON-Objekts](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) definiert. Es darf nur eine Import-Map im Dokument geben, und da sie zur Auflösung verwendet wird, welche Module in sowohl statischen als auch dynamischen Imports geladen werden, muss sie vor allen `<script>`-Elementen, die Module importieren, erklärt werden. Beachten Sie, dass sich die Import-Map nur auf das Dokument bezieht — die Spezifikation deckt nicht ab, wie eine Import-Map in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Map können Sie nun die oben genannten Eigenschaftsnamen als Modulspezifikationen verwenden. Wenn auf dem Modulspezifikator-Schlüssel kein Schrägstrich folgt, wird der ganze Modulspezifikator-Schlüssel gematcht und ersetzt. Zum Beispiel matchen wir unten unmodifizierte Modulnamen und remappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Enthält der Modulspezifikator einen abschließenden Schrägstrich, dann muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfadpräfix" gematcht. Dies ermöglicht die Umverlagerung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Import-Map gültige Matches für einen Modulspezifikator sind. Beispielsweise könnte ein Modulspezifikator von `shapes/circle/` die Modulspezifikator-Schlüssel `shapes/` und `shapes/circle/` matchen. In diesem Fall wird der Browser den spezifischsten (längsten) passenden Modulspezifikator-Schlüssel auswählen.

Import-Maps erlauben es, Module mit bare Modulnamen zu importieren (wie in Node.js), und können auch das Importieren von Modulen aus Paketen emulieren, sowohl mit als auch ohne Dateierweiterungen. Während oben nicht gezeigt, erlauben sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert. Generell erlauben sie Entwicklern, ergonomischeren Importcode zu schreiben und erleichtern das Verwalten der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Site verwendet werden. Dies kann den Aufwand verringern, um die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen verschiedenen Funktionen.

### Funktionserkennung

Sie können die Unterstützung für Import-Maps mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als bare Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie "bare" Namen für den Modulspezifikator verwenden. Dies funktioniert, weil die Umgebung Modulnamen auf einen Standardstandort im Dateisystem auflösen kann. Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um bare Namen in einem Browser zu verwenden, benötigen Sie eine Import-Map, die die Informationen liefert, die der Browser zum Auflösen von Modulspezifikatoren in URLs benötigt (JavaScript wird einen `TypeError` werfen, wenn es versucht, einen Modulspezifikator zu importieren, der nicht zu einem Modulort aufgelöst werden kann).

Unten sehen Sie eine Map, die einen `square`-Modulspezifikator-Schlüssel definiert, welcher in diesem Fall auf einen relativen Adresswert mappt.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Map können wir nun einen bare Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Remapping von Modulpfaden

Modulspezifikator-Map-Einträge, bei denen sowohl der Spezifikatorschlüssel als auch sein zugehöriger Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden. Dies erlaubt das Remapping einer ganzen Reihe von Import-URLs von einem Standort zu einem anderen. Es kann auch verwendet werden, um mit "Paketen und Modulen" zu arbeiten, wie man sie möglicherweise im Node-Ökosystem sieht.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifikatorschlüssel als _Teil_ eines Modulspezifikators substituiert werden kann. Wenn dies nicht vorhanden ist, matcht und ersetzt der Browser nur den gesamten Modulspezifikatorschlüssel.

#### Pakete von Modulen

Die folgende JSON-Import-Map-Definition mappt `lodash` als bare Name und das Modulspezifikatordpräfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst zur Dokumentbasis-URL):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Map können Sie sowohl das gesamte "Paket" mit dem bare Name importieren als auch Module innerhalb davon (unter Verwendung der Pfad-Mapping):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen bare Modulspezifikatorschlüssel für diese Datei erstellen, z. B. `lodash/fp`, anstatt den Pfad zu verwenden. Dies ist vernünftig für nur ein Modul, aber skaliert schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifikatorschlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein. Dies kann nützlich sein, wenn Sie ein Modul remappen möchten, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Abgegrenzte Module für Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten. Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt wird. Aus diesem Grund kann eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphs enthalten, ohne dass die Benutzer über diese Komplexität nachdenken müssen.

> [!NOTE]
> Sie können auch Versionsmanagement mit relativen Pfaden erreichen, aber dies ist minderwertig, da dies unter anderem eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, bare Modulnamen zu verwenden.

Import-Maps erlauben es Ihnen, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und darauf mit demselben Modulspezifikator zu verweisen. Sie implementieren dies mit dem `scopes`-Schlüssel, der es ermöglicht, Modulspezifikator-Maps bereitzustellen, die je nach Pfad des Skripts, das die Imports ausführt, verwendet werden. Das folgende Beispiel demonstriert dies.

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

Mit dieser Map, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet. Die Map in `imports` wird als Fallback verwendet, wenn keine passende Sphäre in der abgegrenzten Map vorhanden ist, oder die passenden Sphären enthalten keinen passenden Spezifikator. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht passenden Sphärenpfad importiert wird, wird stattdessen die Modulspezifikator-Map in `imports` verwendet, die zur Version in `/node_modules/cool-module/index.js` mappt.

Beachten Sie, dass der Pfad, der verwendet wird, um eine Sphäre auszuwählen, sich nicht darauf auswirkt, wie die Adresse aufgelöst wird. Der Wert im gemappten Pfad muss nicht mit dem Sphärenpfad übereinstimmen, und relative Pfade werden weiterhin zur Basis-URL des Skripts aufgelöst, das die Import-Map enthält.

Genau wie bei Modulspezifikator-Maps können Sie viele Sphären-Schlüssel haben, und diese können überlappende Pfade enthalten. Wenn mehrere Sphären zur Referrer-URL passen, wird zuerst der spezifischste Sphärenpfad (der längste Sphären-Schlüssel) überprüft, um einen passenden Spezifikator zu finden. Die Browser werden als Fallback auf den nächstspezifischen passenden Sphärenpfad zurückgreifen, wenn kein passender Spezifikator vorhanden ist, und so weiter. Wenn kein passender Spezifikator in keiner der passenden Sphären vorhanden ist, prüft der Browser auf ein Match in der Modulspezifikator-Map im `imports`-Schlüssel.

### Verbesserung des Cachens durch Mapping von Dateinamen mit Hashes

Von Webseiten verwendete Skriptdateien haben häufig Dateinamen mit Hashes, um das Caching zu vereinfachen. Der Nachteil dieses Ansatzes besteht darin, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, auch bearbeitet / neu generiert werden müssen. Dies führt potenziell zu einer Kaskade von Aktualisierungen, die verschwenderisch mit Netzwerkressourcen umgeht.

Import-Maps bieten eine bequeme Lösung für dieses Problem. Anstatt von spezifischen gehashten Dateinamen abzuhängen, verlassen sich Anwendungen und Skripte stattdessen auf eine nicht gehashte Version des Modulnamens (Adresse). Eine Import-Map, wie die unten, bietet dann ein Mapping zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich das `dependency_script` ändert, ändert sich sein Hash im Dateinamen ebenfalls. In diesem Fall müssten wir nur die Import-Map aktualisieren, um den geänderten Namen des Moduls zu reflektieren. Wir müssen den Quellcode keiner JavaScript-Datei aktualisieren, die davon abhängt, da sich der Spezifikator in der Importanweisung nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Beispielsweise können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit deklarieren, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und wirft einen Fehler, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [import attributes](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn beispielsweise `./data.json` nicht in eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald sie erfolgreich importiert wurde, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir das `main.js` Modul nur noch auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich, wie wir ein normales Skript auf einer Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script) Element aufnehmen, um dieses Skript als Modul zu deklarieren. Um das `main.js` Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modul-Skript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements platzieren:

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

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Module, die inline in HTML deklariert werden, können nur andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorgeladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal (d. h. mit einer `file://` URL) zu laden, stoßen Sie auf CORS-Fehler aufgrund von Sicherheitsanforderungen für JavaScript-Module. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein anderes Verhalten von Skriptabschnitten innerhalb von Modulen im Vergleich zu in klassischen Skripten definierten Abschnitten erhalten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht notwendig, das `defer`-Attribut zu verwenden (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)), wenn Sie ein Modulskript laden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zuletzt, lassen Sie uns das klarstellen — Modulfunktionen werden in den Geltungsbereich eines einzelnen Skripts importiert — sie sind nicht im globalen Bereich verfügbar. Sie können daher nur auf importierte Funktionen im Skript zugreifen, in das sie importiert wurden, und können nicht darauf aus der JavaScript-Konsole zugreifen. Sie erhalten weiterhin Syntaxfehler in den DevTools angezeigt, aber Sie können nicht einige der Debugging-Techniken verwenden, die Sie möglicherweise erwartet haben.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie wurden explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben der folgende Code:

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

Die Seite würde weiterhin `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — das Einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standard-Exporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde beim Export mit seinem Namen bezeichnet, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird — dieser soll es einfach machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch JavaScript-Module, mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff schön erklärt; suchen Sie nach "Default exports").

Lassen Sie uns ein Beispiel betrachten, während wir erklären, wie es funktioniert. In unserem Basic-Modulen `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, also schreiben wir am Ende der Datei:

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

In unserer `main.js` Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde genommen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die Syntax `as` zum Umbenennen exportierter Elemente wird unten im Abschnitt [Renaming imports and exports](#umbenennen_von_imports_und_exports) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formen auf Leinwänden gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst? Diese Formen hätten wahrscheinlich ebenfalls zugehörige Funktionen wie `draw()`, `reportArea()`, usw.; wenn wir versuchen, verschiedene Funktionen mit demselben Namen in dieselbe oberste Modulebene zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden dies in den folgenden Abschnitten untersuchen.

## Umbenennen von Imports und Exports

Innerhalb Ihrer `import`- und `export`-Anweisungsklammern können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion innerhalb der obersten Modulebene verwenden werden.

Zum Beispiel würden beide der folgenden im Grunde dasselbe tun, wenn auch auf unterschiedliche Weise:

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

Lassen Sie uns ein reales Beispiel ansehen. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis finden Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu melden.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes dasselbe `export`-Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir versuchen, diese in `main.js` zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) auslösen.

Stattdessen müssen wir die Importe so umbenennen, dass sie eindeutig sind:

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

Beachten Sie, dass Sie das Problem stattdessen in den Moduldokumenten beheben könnten, z. B.

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

Und es würde genauso funktionieren. Welchen Stil Sie verwenden, liegt bei Ihnen, allerdings scheint es mehr Sinn zu machen, Ihren Modulcode unangetastet zu lassen und die Änderungen in den Importen vorzunehmen. Dies ergibt besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, die Sie nicht kontrollieren können.

## Erstellen eines Modul-Objekts

Die obige Methode funktioniert gut, aber sie ist etwas unordentlich und umständlich. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modul-Objekts zu importieren. Die folgende Syntaxform tut dies:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle in `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, sodass es im Wesentlichen einen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Sehen wir uns ein reales Beispiel an. Wenn Sie unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis besuchen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um diesen neuen Syntax-Vorteil zu nutzen. In den Modulen befinden sich alle Exporte in der folgenden einfachen Form:

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

So können Sie jetzt den Code genauso schreiben wie zuvor (solange Sie die Objektnamen dort einschließen, wo es erforderlich ist), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden, und besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formzeichnungsmoduls mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis sehen. Als Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt alle ihre Funktionalitäten in einer einzigen Klasse:

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

Es wird Zeiten geben, in denen Sie Module zusammen aggregieren möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, in denen Sie Dinge vereinfachen möchten, indem Sie mehrere Submodule zu einem übergeordneten Modul kombinieren. Dies ist möglich, indem Sie die folgende Art von Export-Syntax im übergeordneten Modul verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel schauen Sie in unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Submodule in ein Unterverzeichnis im `modules`-Verzeichnis namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Submodule ist der Export von derselben Form, z.B.

```js
export { Square };
```

Als Nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) schließen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Submodule und machen sie effektiv im `shapes.js` Mod

ul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Wesentlichen durch die Datei geleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code innerhalb derselben Datei schreiben können.

So können wir jetzt in der `main.js` Datei auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modul-Laden

Eine jüngere Ergänzung der JavaScript-Modulfunktionalität ist das dynamische Modul-Laden. Dies erlaubt es Ihnen, Module dynamisch nur dann zu laden, wenn sie benötigt werden, anstatt alles von Anfang an laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und ihr den Pfad zum Modul als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Modulobjekt erfüllt (siehe [Creating a module object](#erstellen_eines_modul-objekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers und in gemeinsamen und dedizierten Workern erlaubt. Jedoch wird `import()` einen Fehler werfen, wenn er in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Lassen Sie uns ein Beispiel ansehen. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel basierend auf unserem Klassenszenario. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das benötigte Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modularexporte bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann einen Ereignis-Listener an jede Schaltfläche an, sodass das entsprechende Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen, wenn es gedrückt wird:

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

Beachten Sie, dass, da die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann zu einem Untermerkmal des Objekts wird. Daher müssen wir jetzt auf den Konstruktor mit `Module.` davor zugreifen, z. B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Daher, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das kein `type="module"` hat, können Sie immer noch Code, der als Module verteilt wird, durch dynamischen Import wiederverwenden.

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

Top-Level-Await ist eine Funktion, die innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, wie große [asynchrone Funktionen](/de/docs/Learn/JavaScript/Asynchronous/Introducing) zu agieren, was bedeutet, dass Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, aber ohne dass Geschwistermodule am Laden gehindert werden.

Lassen Sie uns ein Beispiel betrachten. Sie können alle in diesem Abschnitt beschriebenen Dateien und Codes im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) finden, das auf den vorherigen Beispielen aufbaut.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await` bevor wir die Konstante `colors` angeben, um sie zu exportieren. Dies bedeutet, dass alle anderen Module, die dieses importieren, warten, bis `colors` heruntergeladen und analysiert wurde, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Zeichenfolgen beim Aufrufen unserer Formfunktionen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht verhindern, dass andere Module geladen werden. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` abgerufen wird.

## Import-Deklarationen werden angehoben

Import-Deklarationen werden {{Glossary("Hoisting", "angehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Code des Moduls verfügbar sind, noch bevor die Stelle erreicht wird, die sie deklariert, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der restliche Code des Moduls beginnt, ausgeführt zu werden.

Ein Beispiel: In `main.js` würde das Importieren von `Canvas` mitten im Code immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Ihre Importe am Anfang des Codes zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren und diese Module können andere Module importieren usw. Dies bildet einen [gerichteter Graph](https://en.wikipedia.org/wiki/Directed_graph) genanntes "Abhängigkeitsdiagramm". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann das Diagramm mithilfe eines Tiefensuchdurchlaufs ausgewertet werden.

Allerdings sind Zyklen oft unvermeidlich. Zyklischer Import tritt auf, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was [lebende Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zum Zeitpunkt der Auswertung des Moduls weder `b` noch `a` tatsächlich gelesen, so dass der Rest des Codes normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` erzeugen. Danach, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, so dass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird, so dass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

Sie sollten normalerweise zyklische Importe in Ihrem Projekt vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Beseitigung von Zyklen sind:

- Die beiden Module zu einem zusammenführen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Ein bisschen Code von einem Modul ins andere verschieben.

Allerdings können zyklische Importe auch auftreten, wenn sich die Bibliotheken gegenseitig abhängen, was schwieriger zu beheben ist.

## "Isomorphe" Module erstellen

Die Einführung von Modulen fördert das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul globale Größen wie `window` referenziert, kann es im Browser ausgeführt werden, aber auf Ihrem Node.js-Server einen Fehler werfen, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, er zeigt in jeder Laufzeit dasselbe Verhalten. Dies wird in der Regel auf drei Arten erreicht:

- Teilen Sie Ihre Module in "Core" und "Binding". Für den "Core" konzentrieren Sie sich auf die reine JavaScript-Logik, wie das Berechnen des Hashs, ohne DOM-, Netzwerk-, Dateisystemzugriff und präsentieren Sie Dienstprogrammfunktionen. Für den "Binding"-Teil können Sie vom und zum globalen Kontext lesen und schreiben. Zum Beispiel könnte das "Browser-Binding" wählen, den Wert aus einem Eingabefeld zu lesen, während das "Node-Binding" ihn möglicherweise von `process.env` liest, aber Werte aus beiden Orten fließen zu derselben Core-Funktion und werden in derselben Weise behandelt. Der Core kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur das Binding, das in der Regel leicht ist, plattformspezifisch sein muss.
- Erkennen, ob ein bestimmtes Global existiert, bevor Sie es verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und sollten nicht auf das DOM zugreifen.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich dasselbe Verhalten ("isomorph") haben. Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dadurch große Mengen von Code geladen werden, während ein großer Teil ungenutzt bleibt, verwenden Sie besser unterschiedliche "Bindings".

- Verwenden Sie einen Polyfill, um eine Rückfalllösung für fehlende Funktionen bereitzustellen. Wenn Sie zum Beispiel die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die nur ab Node.js v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch). Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) -Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend zur Code-Wiederverwendbarkeit und Modularisierung, sind Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, sodass er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs dort, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme beim Funktionieren Ihrer Module haben. Fügen Sie gerne weitere hinzu, wenn Sie mehr entdecken!

- Wir haben dies bereits erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, ansonsten erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem nicht-JavaScript-MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal (d. h. mit einer `file://` URL) zu laden, stoßen Sie aufgrund der Sicherheitsanforderungen für JavaScript-Module auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen. GitHub Pages ist ideal, da es `.mjs`-Dateien auch mit dem korrekten MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme es möglicherweise nicht oder versuchen, es durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` am Ende von `.mjs`-Dateien hinzufügte und dann die Dateierweiterung automatisch versteckte. So kamen all unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verstecken von Dateierweiterungen ausschalteten und es trainierten, `.mjs` zu akzeptieren, funktionierte es gut.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
