---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Ein Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — die meiste Verwendung in den frühen Tagen war, um isolierte Skriptaufgaben zu erledigen, die ein wenig Interaktivität zu Ihren Webseiten beifügten, wo nötig, sodass große Skripte im Allgemeinen nicht benötigt wurden. Ein paar Jahre später laufen nun komplette Anwendungen in Browsern mit viel JavaScript, ebenso wie JavaScript in anderen Kontexten verwendet wird (z.B. {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js bietet diese Fähigkeit schon lange, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Modulnutzung ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modul-Features nativ ohne Transpilation. Das kann nur eine gute Sache sein – Browser können das Laden von Modulen optimieren und es effizienter machen, als eine Bibliothek zu verwenden und all diese zusätzliche clientseitige Verarbeitung und zusätzliche Round-Trips durchzuführen. Es macht Bundler wie webpack jedoch nicht überflüssig – Bundler leisten immer noch gute Arbeit beim Partitionieren von Code in vernünftig große Pakete und können andere Optimierungen wie Minifizierung, Toter Code-Eliminierung und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind relativ trivial, wurden aber bewusst einfach gehalten, um Module klar zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das obige sollte ziemlich vertraut werden.

Die beiden Module im Modulverzeichnis werden unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung des Canvas zusammenhängen:

  - `create()` — erstellt ein Canvas mit einer angegebenen `Breite` und `Höhe` in einem Wrapper [`<div>`](/de/docs/Web/HTML/Element/div) mit einer angegebenen ID, die selbst in einem angegebenen Elternelement hinzugefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem angegebenen Wrapper-Element hinzugefügt wird, in die Berichtsdaten eingefügt werden können. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf ein angegebenes Canvas mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichtslistenausgabe, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichtslistenausgabe, basierend auf seiner Länge.

### Am Rande — .mjs versus .js

In diesem gesamten Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen könnten Sie die `.mjs`-Erweiterung stattdessen sehen. [Die Dokumentation von V8 empfiehlt dies](https://v8.dev/features/modules#mjs). Die angegebenen Gründe sind:

- Es sorgt für Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript ist.
- Es stellt sicher, dass Ihre Moduldaten als Modul von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) geparst werden.

Wir haben uns jedoch entschieden, vorerst bei `.js` zu bleiben. Um Module korrekt in einem Browser zu verwenden, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn nicht, erhalten Sie einen strikten MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die bereits korrekt `.mjs`-Dateien bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung nutzen oder wenn Sie nicht, aber wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch zu Verwirrungen führen, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht kontrollieren oder Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich das Klarheitsgefühl von `.mjs` für Module im Gegensatz zu `.js` für "normale" JavaScript-Dateien schätzen, aber nicht auf das oben beschriebene Problem stoßen möchten, könnten Sie während der Entwicklung `.mjs` verwenden und sie während des Build-Schritts in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">`-Attribut wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modul-Features

Das Erste, was Sie tun, um Zugriff auf Modul-Features zu erhalten, ist, sie zu exportieren. Dies erfolgt mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Die einfachste Möglichkeit, sie zu verwenden, besteht darin, sie vor die Elemente zu stellen, die Sie aus dem Modul exportieren möchten, beispielsweise:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Top-Level-Elemente sein: Sie können `export` beispielsweise nicht innerhalb einer Funktion verwenden.

Eine bequemere Methode, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzelne Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer kommagetrennten Liste der Features, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Features in Ihr Skript

Sobald Sie einige Features aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist der folgende:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer kommagetrennten Liste der Features, die Sie importieren möchten, eingefasst in geschweifte Klammern, gefolgt von dem Schlüsselwort `from`, gefolgt vom _Modulspezifier_.

Der _Modulspezifier_ bietet einen String, den die JavaScript-Umgebung zu einem Pfad zur Moduldaten auflösen kann.
Im Browser könnte dies ein Pfad relativ zum Stamm der Seite sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zur Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen – das Beispiel funktioniert immer noch, wenn Sie es an einen anderen Ort in der Seitenhierarchie verschieben.

Beispielsweise:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Solche Zeilen finden Sie in Aktion in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js).

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifier wie `modules/square` verwenden, der weder ein relativer noch absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifier kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mittels_importkarten) definieren.

Sobald Sie die Features in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Datei definiert. Das folgende findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der Features, die exportiert wurden. Ähnlich wie `const`-Variablen können Sie die Variable, die importiert wurde, nicht neu zuweisen, aber Sie können Eigenschaften von Objektwerten immer noch ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe die [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mittels Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifier importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mittels der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden Text, den sie wollen, im Modulspezifier anzugeben, wenn ein Modul importiert wird; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der untenstehenden Importkarte ein "Modulspezifierkarten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifier verwendet werden können und die entsprechenden Werte bei der Auflösung der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URL-Adressen aufgelöst, indem die [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, verwendet wird.

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

Die Importkarte ist als JSON-Objekt innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt definiert.
Beachten Sie, dass eine Importkarte nur für das Dokument gilt – die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet werden kann. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die oben genannten Eigenschaftsnamen als Modulspezifier verwenden.
Wenn kein abschließender Schrägstrich am Modulspezifier-Schlüssel vorhanden ist, wird der gesamte Modulspezifier-Schlüssel abgeglichen und ersetzt.
Zum Beispiel unten stimmen wir nackte Modulnamen ab und remappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifier einen abschließenden Schrägstrich hat, muss dies auch der Wert haben, und der Schlüssel wird als Pfadpräfix abgeglichen.
Dies ermöglicht die Neuzuordnung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifier sind.
Zum Beispiel könnte ein Modulspezifier von `shapes/circle/` die Modulspezifier-Schlüssel `shapes/` und `shapes/circle/` abgleichen.
In diesem Fall wählt der Browser den speziellsten (längsten) übereinstimmenden Modulspezifier-Schlüssel.

Importkarten ermöglichen es Modulen, mit nackten Modulnamen importiert zu werden (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Auch wenn dies oben nicht gezeigt wird, ermöglichen sie auch das Importieren bestimmter Versionen einer Bibliothek basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen lassen sie Entwickler ergonomischere Importcodes schreiben und erleichtern die Verwaltung unterschiedlicher Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden.
Dies kann den Aufwand verringern, die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen verschiedenen Features.

### Feature-Erkennung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst umfassend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module als nackte Namen importieren

In einigen JavaScript-Umgebungen, wie Node.js, können Sie nackte Namen für den Modulspezifier verwenden.
Das funktioniert, weil die Umgebung Modulnamen zu einem Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifier zu URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifier zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifier-Schlüssel definiert, der in diesem Fall zu einem relativen Adresswert abgebildet wird.

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

### Neuzuordnung von Modulpfaden

Einträge in der Modulspezifierkarte, bei denen sowohl der Spezifierschlüssel als auch sein zugehöriger Wert einen abschließenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht die Neuzuordnung eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der abschließende `/` zeigt an, dass der Modulspezifier-Schlüssel als _Teil_ eines Modulspezifiers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifier-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende Definition der JSON-Importkarte ordnet `lodash` als nackten Namen und das Modul-Specifier-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` zu (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem nackten Namen als auch Module darin (mithilfe der Pfadzuordnung) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen nackten Modulspezifier-Schlüssel für diese Datei erstellen, z.B. `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul sinnvoll sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Neuzuordnung

Ein Modulspezifier-Schlüssel muss kein Pfad sein – er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul remappen möchten, das über absolute Pfade auf eine Ressource verfügt, mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Scoped Modules für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Infolgedessen, obwohl eine komplexe Anwendung dasselbe Modul mehrfach mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen einbeziehen könnte, müssen sich Benutzer nicht mit dieser Komplexität auseinandersetzen.

> [!NOTE]
> Sie können auch das Versionsmanagement mit relativen Pfaden erreichen, aber dies ist suboptimal, da dies unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ebenfalls, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie mit demselben Modulspezifier zu verweisen.
Das implementieren Sie mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifierkarten bereitzustellen, die je nach dem Pfad des Skripts, das den Import durchführt, verwendet werden.
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

Mit dieser Zuordnung wird, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn kein übereinstimmender Bereich in der scoped map vorhanden ist oder die übereinstimmenden Bereiche keinen übereinstimmenden Spezifier enthalten. Wenn `cool-module` z.B. aus einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, wird die Modulspezifierkarte in `imports` stattdessen verwendet, was auf die Version in `/node_modules/cool-module/index.js` verweist.

Beachten Sie, dass der Pfad, der zur Auswahl eines Bereichs verwendet wird, nicht beeinflusst, wie die Adresse aufgelöst wird.
Der Wert im zugeordneten Pfad muss nicht mit dem Bereichspfad übereinstimmen, und relative Pfade werden immer noch zur Basis-URL des Skripts, das die Importkarte enthält, aufgelöst.

Genauso wie für Modulspezifierkarten können Sie viele Bereichsschlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche die Referrer-URL übereinstimmen, wird zuerst der spezifischste Bereichspfad (der längste Bereichsschlüssel) für einen übereinstimmenden Spezifier überprüft.
Die Browser fallen auf den nächsten spezifischsten übereinstimmenden Bereichspfad zurück, wenn dort kein übereinstimmender Spezifier vorhanden ist, und so weiter.
Wenn es keinen übereinstimmenden Spezifier in einem der übereinstimmenden Bereiche gibt, überprüft der Browser auf Übereinstimmungen in der Modulspezifierkarte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Wegmappen von hash-codierten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft hash-codierte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn ein Modul geändert wird, alle Module, die es mit seinem hash-codierten Dateinamen importieren, auch aktualisiert/neu generiert werden müssen.
Dies kann zu einem Aktualisierungsmarathon führen, der Netzwerkressourcen verschwendet.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Statt sich auf bestimmte hash-codierte Dateinamen zu verlassen, hängen Anwendungen und Skripte stattdessen von einer nicht-hash-codierten Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die untenstehende bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn `dependency_script` geändert wird, ändert sich auch sein hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quelltext von JavaScript-Code, der davon abhängt, nicht aktualisieren, da der Spezifier in der Importanweisung sich nicht ändert.

## Laden nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine vereinheitlichte Modularchitektur mitbringt, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Beispielsweise können Sie JSON als ein JavaScript-Objekt oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen ausdrücklich angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser validieren auch den Modultyp und schlagen fehl, wenn zum Beispiel `./data.json` nicht als JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald Sie erfolgreich importiert haben, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Nun müssen wir nur noch das `main.js`-Modul auf unserer HTML-Seite anwenden. Das ist ganz ähnlich wie ein reguläres Skript auf eine Seite anzuwenden, mit einigen bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` in das [`<script>`](/de/docs/Web/HTML/Element/script)-Element aufnehmen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir Folgendes:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des Körpers des `<script>`-Elements platzieren:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird geworfen, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Module, die inline im HTML deklariert werden, können nur andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht verfügbar sein (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) spezifiziert werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten, die in Modulen definiert sind, im Gegensatz zu klassischen Skripten erhalten. Das liegt daran, dass Module automatisch den {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut zu verwenden (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)), wenn ein Modulskript geladen wird; Module sind automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Last but not least, machen wir das klar – Modulfunktionen werden nur in den Gültigkeitsbereich eines einzelnen Skripts importiert – sie sind nicht im globalen Gültigkeitsbereich verfügbar. Daher können Sie nur auf importierte Funktionen in dem Skript zugreifen, in das sie importiert wurden, und Sie können nicht von der JavaScript-Konsole darauf zugreifen. Sie erhalten jedoch weiterhin Syntaxfehler im DevTools angezeigt, aber Sie können möglicherweise nicht einige der Debugging-Techniken verwenden, die Sie erwartet hätten.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit mit dem globalen Objekt verbunden. Auf der anderen Seite sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, wenn der folgende Code gegeben ist:

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

Die Seite würde immer noch `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch an diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt – das einzige, was erforderlich ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde bei Export mit seinem Namen benannt und dieser Name wurde auch beim Import verwendet.

Es gibt auch einen Exporttyp, genannt **Standardexport** — dieser ist so konzipiert, dass es einfach ist, eine Standardfunktion von einem Modul bereitzustellen, und hilft außerdem, dass JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zusammenarbeiten (wie schön erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. Im `square.js` unseres `basic-modules`-Beispiels finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten diese als unseren Standard exportieren, also schreiben wir am Ende der Datei Folgendes:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` vor die Funktion stellen und sie als anonyme Funktion definieren, so:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Erneut, beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen exportierter Elemente wird im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) unten erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Canvas-Formen gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst, hinzuzufügen? Diese Formen würden wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()`, etc. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dasselbe Top-Level-Modul zu importieren, hätten wir Konflikte und Fehler.

Zum Glück gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden diese in den folgenden Abschnitten genauer betrachten.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identitätsnamen zu ändern, den Sie für eine Funktion innerhalb des Top-Level-Moduls verwenden werden.

So würden beispielsweise beide der folgenden im Wesentlichen die gleiche Aufgabe erledigen, jedoch auf eine leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu berichten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes die gleiche `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren wollten und

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

verwenden, würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) werfen.

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

und es würde genauso funktionieren. Welchen Stil Sie verwenden, liegt bei Ihnen, jedoch macht es möglicherweise mehr Sinn, Ihren Modulkode unverändert zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht vor allem dann Sinn, wenn Sie aus Drittanbieter-Modulen importieren, die Sie nicht kontrollieren können.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber sie ist ein wenig unübersichtlich und umständlich. Eine noch bessere Lösung ist es, die Features jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, effektiv indem es ihnen einen eigenen Namensraum gibt. So zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns erneut ein reales Beispiel an. Wenn Sie unsere [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis besuchen, sehen Sie das gleiche Beispiel erneut, aber umgeschrieben, um von dieser neuen Syntax zu profitieren. In den Modulen sind alle Exporte in der folgenden einfachen Form:

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

In jedem Fall können Sie nun auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Sie können also den Code genauso wie zuvor schreiben (solange Sie die Objektnamen verwenden, wo nötig), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; das ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulkode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formenzeichen-Moduls mit ES-Klassen in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Im Beispiel ist die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js)-Datei nun in einer einzigen Klasse enthalten:

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

Und dann verwenden wir die Klasse, um unser Quadrat zu zeichnen:

```js
const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregation von Modulen

Es gibt Zeiten, in denen Sie Module zusammenführen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, wo Sie die Dinge vereinfachen wollen, indem Sie mehrere Submodule in ein übergeordnetes Modul kombinieren. Dies ist möglich, indem Sie die folgende Export-Syntax in das übergeordnete Modul verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel siehe unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenführt. Wir haben auch unsere Submodule in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Submodule ist der Export in gleicher Form, z.B.

```js
export { Square };
```

Als Nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen hinzu:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Submodule und machen sie im Wesentlich über das `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Wesentlichen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie im selben Datei keinen nützlichen verwandten Code schreiben können.

Nun können wir in der `main.js`-Datei alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzige Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine kürzliche Ergänzung zur JavaScript-Modulfunktionalität ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Vorteile in Bezug auf die Leistung; lesen wir weiter und sehen wir, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, wobei Sie den Pfad zum Modul als Parameter übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Der dynamische Import ist im Hauptthread des Browsers und in gemeinsamen und dedizierten Workern erlaubt.
> `import()` wird jedoch in einem Service Worker oder Worklet einen Fehler werfen.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Dieses Mal jedoch zeichnen wir nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Schaltflächen — "Kreis", "Quadrat" und "Dreieck" —, die bei Druck auf die benötigten Module dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien vorgenommen — die Modulausfuhren bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann einen Ereignislistener zu jeder Schaltfläche hinzu, sodass beim Drücken das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann zu einem Untermerkmal des Objekts wird, weshalb wir nun auf den Konstruktor mit `Module.` davor zugreifen müssen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Daher können Sie, wenn Sie ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, dennoch Code, der als Module verteilt wird, erneut verwenden, indem Sie es dynamisch importieren.

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

Top Level Await ist ein Feature, das innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht, dass Module wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) agieren, was bedeutet, dass Code vor seiner Verwendung in übergeordneten Modulen ausgewertet werden kann, aber ohne das Laden von Geschwistermodulen zu blockieren.

Sehen wir uns ein Beispiel an. Sie können alle in diesem Abschnitt beschriebenen Dateien und den Code im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis, das sich aus den vorherigen Beispielen ergibt, sehen.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json)-Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das `await`-Schlüsselwort, bevor wir die Konstante `colors` zum Export bereitstellen. Dies bedeutet, dass alle anderen Module, die dieses enthalten, warten, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Zeichenfolgen, wenn wir unsere Form-Funktionen aufrufen:

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

Dies ist nützlich, da der Code innerhalb unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) gelaufen ist. Dies wird jedoch das Laden anderer Module nicht blockieren. Beispielsweise wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)-Modul weiter geladen, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Modulcode bereits verfügbar sind, bevor die Stelle, die sie deklariert, läuft, und dass die Seiteneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes ausgeführt wird.

Zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` dennoch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Trotzdem ist es als gute Praxis angesehen, alle Ihre Importe an den Anfang Ihres Codes zu setzen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren und so weiter. Dies bildet einen [gerichteten Graph](https://en.wikipedia.org/wiki/Directed_graph) genannt als "Abhängigkeitsgraph". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph unter Verwendung einer Tiefensuche ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zykliche Importe entstehen, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe scheitern nicht immer. Der Wert der importierten Variablen wird erst abgerufen, wenn die Variable tatsächlich verwendet wird (was [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher, wenn das Modul ausgewertet wird, wird weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird, und die beiden `export`-Deklarationen produzieren die Werte von `a` und `b`. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen auch normal ausgeführt werden.

Ändern Sie den Code, um `a` synchron zu verwenden, scheitert die Modulauswertung:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Dies liegt daran, dass JavaScript bei der Auswertung von `a.js` zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Wenn Sie den Code andererseits ändern, um `b` synchron, aber `a` asynchron zu verwenden, wird die Modulauswertung erfolgreich verlaufen:

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

Sie sollten in Ihrem Projekt normalerweise zyklische Importe vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Eliminierung von Zyklen sind:

- Die beiden Module in ein einziges zusammenführen.
- Verschieben des gemeinsamen Codes in ein drittes Modul.
- Verschieben von einem Teil-Code von einem Modul zu dem anderen.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängen, was schwerer zu beheben ist.

## Verfassen "isomorpher" Module

Die Einführung von Modulen fördert das JavaScript-Ökosystem, um Code in modularer Weise zu verteilen und wiederzuverwenden. Dies bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung lauffähig ist. Angenommen, Sie entdecken ein Modul, das SHA-Hashes für das Passwort Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: es hängt davon ab.

Module haben weiterhin Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul auf globale wie `window` verweist, kann es im Browser ausgeführt werden, wird aber auf Ihrem Node.js-Server einen Fehler werfen, da `window` dort nicht verfügbar ist. Wenn der Code auf `process` zugreifen muss, um funktionsfähig zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, er zeigt das gleiche Verhalten in jeder Laufzeit. Dies wird gemeinhin auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Binding". Für den "Kern", konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashs, ohne jeden DOM-, Netzwerk-, Dateisystem-Zugriff, und stellen Sie Dienstprogramme-Funktionen bereit. Für den "Binding"-Teil können Sie vom und zum globalen Kontext lesen und schreiben. Beispielsweise könnte das "Browser-Binding" lesen der Wert aus einer Eingabebox, während das "Node-Binding" es von `process.env` lesen könnte, aber Werte, die von einem der beiden Orte gelesen werden, werden an dieselbe Kernfunktion und auf die gleiche Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur das Binding, das meistens leichtgewichtig ist, plattformabhängig sein muss.
- Erkennen, ob ein bestimmtes Global existiert, bevor es verwendet wird. Beispielsweise, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und den DOM nicht lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich zum gleichen Verhalten führen ("isomorph"). Wenn es unmöglich ist, die gleiche Funktionalität bereitzustellen, oder wenn dies das Laden signifikanter Teile von Code erfordert, von denen ein großer Teil ungenutzt bleibt, ist es besser, unterschiedliche "Bindings" zu verwenden.

- Verwenden Sie ein Polyfill, um eine Rückfallebene für fehlende Features bereitzustellen. Beispielsweise, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die nur in Node.js seit v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie sie von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellt wird. Sie können dies bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Objekt ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie innerhalb von Modulen globale Variablen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch ermutigt Sie der Trend zur Wiederverwendbarkeit von Code und Modularisierung, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen möglicherweise helfen, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fügen Sie gerne zur Liste hinzu, wenn Sie mehr entdecken!

- Wir haben das bereits erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, ansonsten Sie erhalten einen strikten MIME-Typ-Prüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem korrekten MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` an das Ende von `.mjs`-Dateien anfügt und dann automatisch die Dateierweiterung ausblendet. Also sind alle unsere Dateien tatsächlich als `x.mjs.js` herausgekommen. Sobald wir das automatische Ausblenden von Dateierweiterungen deaktiviert und es darauf trainiert haben, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon-Tiefenbummel](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Entdeckungs-JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
