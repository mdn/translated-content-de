---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen sehr klein - die meisten seiner Anwendungen in den frühen Tagen bestanden darin, isolierte Skriptaufgaben zu erledigen, um Ihren Webseiten dort, wo nötig, ein wenig Interaktivität zu verleihen. Große Skripte waren daher im Allgemeinen nicht erforderlich. Ein paar Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit einer Menge JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Verwendung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilierung erforderlich ist. Das kann nur von Vorteil sein - Browser können das Laden von Modulen optimieren, wodurch es effizienter wird, als eine Bibliothek verwenden zu müssen und all diese zusätzlichen Client-seitigen Verarbeitungen und zusätzlichen Rückrufe zu machen. Es setzt jedoch nicht Bundler wie webpack außer Kraft - Bundler leisten immer noch gute Arbeit bei der Partitionierung von Code in vernünftig große Blöcke und sind in der Lage, andere Optimierungen wie Minifizierung, Dead Code Elimination und Tree-Shaking durchzuführen.

## Einführung in ein Beispiel

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur des Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir die folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde die gleiche Struktur; das Obige sollte allmählich vertraut werden.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen zum Einrichten der Leinwand:
  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` in einem Wrapper-`<div>` mit einer angegebenen ID, die innerhalb eines angegebenen Elternelements eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem angegebenen Wrapper-Element eingefügt wird, um Berichtsdaten auszugeben. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die die Zeichenkette 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand, mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.

### Beiseite — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen können Sie die `.mjs`-Erweiterung sehen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht klar, welche Dateien Module sind und welche reguläres JavaScript.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, zumindest vorerst `.js` weiterhin zu verwenden. Um Module korrekt in einem Browser zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler in der Art von "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie eine solche Umgebung bereits verwenden oder wenn nicht, aber Sie wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien bereitstellt). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem aus Sie Dateien bereitstellen, nicht kontrollieren oder Dateien für die öffentliche Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit von `.mjs` für Module im Vergleich zu `.js` für "normale" JavaScript-Dateien wirklich wichtig ist, Sie aber nicht auf das oben beschriebene Problem stoßen möchten, könnten Sie `.mjs` immer während der Entwicklung verwenden und sie in Ihrem Build-Schritt in `.js` umwandeln.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">` Attribut wird verwendet, um anzugeben, wenn auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun, um Zugriff auf Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Der einfachste Weg, es zu verwenden, besteht darin, es vor alle Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Sie müssen Top-Level-Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, am Ende Ihrer Moduldaten eine einzige Exportanweisung zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie in geschweiften Klammern exportieren möchten. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie in geschweiften Klammern importieren möchten, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifikator_.

Der _Modulspezifikator_ liefert einen String, den die JavaScript-Umgebung zu einem Pfad zu den Moduldaten auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Stamm der Website sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt-Syntax (`.`), um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir suchen möchten. Das ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL tragbar machen - das Beispiel funktioniert auch dann noch, wenn Sie es an eine andere Stelle in der Site-Hierarchie verschieben.

Einige Beispiele:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in Aktion in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifikator wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung besitzt.
> In einer Browserumgebung kann ein solcher Spezifikator verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie wie Funktionen verwenden, die innerhalb derselben Datei definiert sind. Folgendes ist in `main.js` zu finden, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen kann die importierte Variable nicht neu zugewiesen werden, aber Sie können dennoch Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Sehen Sie die [`import` Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifikator importieren kann, der entweder eine absolute URL oder eine relative URL ist, die unter Verwendung der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden gewünschten Text als Modulspezifikator anzugeben, wenn sie ein Modul importieren; die Karte liefert einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Beispielsweise definiert der `imports`-Schlüssel in der folgenden Importkarte ein "Modulspezifikator-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifikatoren verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL durch den Browser substituiert werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments, das die Importkarte enthält, zu absoluten URL-Adresse aufgelöst.

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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) festgelegt.
Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird - die Spezifikation sieht nicht vor, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die obigen Eigenschaftsnamen als Modulspezifikatoren verwenden.
Wenn der Modulspezifikator-Schlüssel keinen nachfolgenden Schrägstrich hat, wird der gesamte Modulspezifikator-Schlüssel abgeglichen und substituiert.
Zum Beispiel stimmen wir unten mit nackten Modulnamen überein und ordnen eine URL einem anderen Pfad zu.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifikator einen nachfolgenden Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfad-Präfix" abgeglichen.
Dies ermöglicht die Zuordnung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifikator sind.
Ein Modulspezifikator von `shapes/circle/` könnte beispielsweise mit den Modul-Spezifikatorkeys `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifikator-Schlüssel.

Importkarten erlauben es Modulen, mit nackten Modulnamen importiert zu werden (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl dies oben nicht gezeigt wurde, ermöglichen sie auch das Importieren bestimmter Bibliotheksversionen basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen lassen sie Entwickler ergonomischeren Importcode schreiben und es einfacher machen, die verschiedenen Versionen und Abhängigkeiten der auf einer Website verwendeten Module zu verwalten.
Dies kann den erforderlichen Aufwand reduzieren, um dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die verschiedenen oben skizzierten Funktionen.

### Funktionsunterstützung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie für den Modulspezifikator nackte Namen verwenden.
Das funktioniert, weil die Umgebung Modulnamen auf einen Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square" Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser verwenden zu können, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, die nötig sind, um Modulspezifikatoren zu URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn es versucht, einen Modulspezifikator zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square` Modulspezifikator-Schlüssel definiert, der in diesem Fall zu einem relativen Adresswert führt.

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

### Zuordnung von Modulpfaden

Einträge in der Modulspezifikatorkarte, bei denen sowohl der Spezifikatorschlüssel als auch sein zugeordneter Wert einen nachfolgenden Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht die Zuordnung eines ganzen Sets von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie man es möglicherweise im Node-Ökosystem sieht.

> [!NOTE]
> Der nachfolgende `/` gibt an, dass der Modulspezifikator-Schlüssel als _Teil_ eines Modulspezifikators ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifikator-Schlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkarten-Definition ordnet `lodash` als nackten Namen zu und den Modulspezifikator-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (auf die Dokumentbasis-URL aufgelöst):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das ganze "Paket" unter Verwendung des nackten Namens als auch Module innerhalb davon importieren (unter Verwendung der Pfadzuordnung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen nackten Modulspezifikator-Schlüssel für diese Datei erstellen, wie `lodash/fp`, statt den Pfad zu verwenden.
Dies mag für nur ein Modul akzeptabel sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Zuordnung

Ein Modulspezifikator-Schlüssel muss kein Pfad sein – es kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Das könnte nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen umwandeln möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gezielte Module für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt wird.
Infolgedessen, während eine komplexe Anwendung dasselbe Modul mehrfach in mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen enthalten könnte, brauchen sich die Nutzer um diese Komplexität nicht zu kümmern.

> [!NOTE]
> Sie können auch das Versionsmanagement unter Verwendung relativer Pfade erreichen, aber dies ist unterlegen, weil zum Beispiel, unter anderem, dies eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten erlauben es Ihnen ähnlich, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie mit demselben Modulspezifikator zu verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen erlaubt, Modulspezifikatorkarten bereitzustellen, die je nach Pfad des Skripts verwendet werden, das den Import durchführt.
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

Mit dieser Zuordnung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn kein passender Bereich in der Bereichskarte oder wenn die passenden Bereiche keinen passenden Spezifikator enthalten, z.B. wenn `cool-module` von einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, dann wird die Modulspezifikatorkarte in `imports` stattdessen verwendet, die auf die Version in `/node_modules/cool-module/index.js` verweist.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Bereich auszuwählen, nicht die Art und Weise beeinflusst, in der die Adresse aufgelöst wird.
Der Wert im abgebildeten Pfad muss nicht mit den Bereichen übereinstimmen und relative Pfade werden immer noch zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Ebenso wie bei den Modulspezifikatorkarten können Sie viele Bereichskeys haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird auf den spezifischsten Bereichspfad (den längsten Bereichsschlüssel) zuerst für einen passenden Spezifikator geprüft.
Die Browser fallen auf den nächst spezifischsten passenden Bereichspfad zurück, wenn es keinen passenden Spezifikator gibt, und so weiter.
Wenn es keinen passenden Spezifikator in keinem der passenden Bereiche gibt, prüft der Browser auf eine Übereinstimmung in der Modulspezifikatorkarte im `imports`-Schlüssel.

### Verbesserte Zwischenspeicherung durch Zuordnung weg von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieser Methode besteht darin, dass, wenn sich ein Modul ändert, alle Module, die es unter Verwendung seines gehashten Dateinamens importieren, ebenfalls aktualisiert/generiert werden müssen.
Das führt potenziell zu einer Kaskade von Updates, was verschwenderisch mit Netzwerkressourcen umgeht.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Anstatt von spezifischen gehashten Dateinamen abhängig zu sein, hängen Anwendungen und Skripte stattdessen von einer ungehashten Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die unten gezeigte liefert dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn `dependency_script` sich ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen die Quelle eines JavaScript-Codes, der darauf angewiesen ist, nicht aktualisieren, da sich der Spezifikator in der Importerklärung nicht ändert.

## Laden von nicht-JavaScript-Ressourcen

Eine spannende Funktionalität, die eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welcher Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist und gibt einen Fehler aus, wenn die gelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Importattribut]-Syntax (/de/docs/Web/JavaScript/Reference/Statements/import/with).

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur beabsichtigen, Daten zu importieren. Nachdem ein Import erfolgreich abgeschlossen wurde, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Nun müssen wir nur noch das `main.js` Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich zu der Art, wie wir ein reguläres Skript auf eine Seite anwenden, mit einigen bemerkenswerten Unterschieden.

Erstens müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code innerhalb des `<script>`-Elements einfügen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können nur `import`- und `export`-Anweisungen innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgegeben, wenn Ihr `<script>`-Element kein `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem Sie sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elemente mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angeben.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Achten Sie auf lokales Testen – wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein anderes Verhalten von in Modulen definierten Skriptabschnitten im Vergleich zu klassischen Skripten erhalten. Dies liegt daran, dass Module {{jsxref("Strict_mode", "im strikten Modus", "", 1)}} automatisch verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut (siehe [`<script>` Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)) beim Laden eines Modulscripts zu verwenden; Module werden automatisch verzögert geladen.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zu guter Letzt, lassen Sie uns dies klarstellen – Modulfunktionen werden in den Umfang eines einzelnen Scripts importiert – sie sind nicht im globalen Bereich verfügbar. Daher werden Sie nur in der Lage sein, importierte Funktionen in dem Skript zu verwenden, in das sie importiert wurden, und Sie werden nicht in der Lage sein, auf sie von der JavaScript-Konsole aus zuzugreifen, beispielsweise. Sie erhalten immer noch Syntaxfehler, die in den DevTools angezeigt werden, aber Sie sind möglicherweise nicht in der Lage, einige der Debugging-Techniken zu verwenden, die Sie möglicherweise erwartet hätten.

Von Modulen definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben den folgenden Code:

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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch von diesem Beispiel, dass ein Modul nicht unbedingt eine Import/Export-Anweisung benötigt – das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalitäten, die wir bisher exportiert haben, bestanden aus **benannten Exporten** – jedes Element (sei es eine Funktion, `const`, etc.) wurde beim Export nach seinem Namen referenziert und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird – dieser ist dazu gedacht, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul geliefert wird, und hilft auch JavaScript-Modulen, mit bestehenden CommonJS- und AMD-Modulsystemen zusammenzuarbeiten (wie gut in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt; suchen Sie nach "Default exports").

Lassen Sie uns ein Beispiel betrachten, während wir erklären, wie es funktioniert. In unserem `basic-modules` `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unser Standardexport exportieren, also schreiben wir es am unteren Rand der Datei:

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

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Wiederum, beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass es pro Modul nur einen Standardexport gibt und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formzeichnungs-Module gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck beschäftigt? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, etc.; wenn wir versucht hätten, verschiedene Funktionen mit demselben Namen in dasselbe oberste Moduldokument zu importieren, hätten wir Konflikte und Fehler.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identifikationsnamen zu ändern, den Sie für eine Funktion im obersten Moduldokument verwenden werden.

Zum Beispiel würden beide der folgenden dieselbe Aufgabe erledigen, wenn auch auf leicht unterschiedliche Weise:

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

Lassen Sie uns ein echtes Beispiel ansehen. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jedes die gleiche `export`-Anweisung am unteren Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir diese in `main.js` importieren, wenn wir versuchen würden, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler werfen, wie "SyntaxError: erneute Deklaration des Importnamens" (Firefox).

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

Und es würde genauso funktionieren. Welche Stil Sie verwenden, bleibt Ihnen überlassen, allerdings ist es wohl sinnvoller, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittmodulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die oben beschriebene Methode funktioniert ganz gut, ist aber ein wenig unordentlich und umständlich. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle im `module.js` verfügbaren Exporte und stellt sie als Mitglieder eines Objekts `Module` zur Verfügung, wodurch es im Wesentlichen einen eigenen Namensraum erhält. Also zum Beispiel:

```js
Module.function1();
Module.function2();
```

Lassen Sie uns erneut auf ein echtes Beispiel schauen. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, jedoch umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen weisen alle Exporte die folgende einfache Form auf:

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
const square = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square.length, reportList);
Square.reportPerimeter(square.length, reportList);
```

So können Sie jetzt den Code genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einfügen), und die Importe sind wesentlich übersichtlicher.

## Module und Klassen

Wie wir zuvor angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden und besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Formzeichnungmoduls im ES-Klassenformat in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Beispielweise enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) Datei jetzt alle ihre Funktionalität in einer einzigen Klasse:

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
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Aggregation von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben und möchten Dinge vereinfachen, indem Sie mehrere Untermodule zu einem übergeordneten Modul kombinieren. Dies ist möglich, indem Sie die Export-Syntax in den übergeordneten Modulen der folgenden Formen verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Sehen Sie sich für ein Beispiel unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis an. In diesem Beispiel (basierend auf unserem früheren Klassenerlebnis) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules` Verzeichnisses namens `shapes` verschoben. Also ist die Modulstruktur in diesem Beispiel:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in der folgenden Form, z.B.

```js
export { Square };
```

Als Nächstes kommt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte der einzelnen Untermodule und machen sie im `shapes.js`-Modul effektiv verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Wesentlichen durch die Datei weitergeleitet und existieren dort nicht wirklich, daher werden Sie keinen sinnvollen verwandten Code in derselben Datei schreiben können.

Nun im `main.js`-Dokument können wir auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

durch die folgende einzelne Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamische Modulladung

Eine neuere JavaScript-Modul-Funktionalität ist das dynamische Laden von Modulen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Das hat offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktion erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion zu verwenden und den Pfad des Moduls als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers sowie in gemeinsamen und dedizierten Workern zulässig.
> `import()` wird jedoch einen Fehler werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen Sie sich ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) Verzeichnis haben wir ein weiteres Beispiel, basierend auf unserem Klassenerlebnis. Diesmal werden jedoch beim Laden des Beispiels keine Formen auf das Canvas gezeichnet. Stattdessen fügen wir drei Schaltflächen hinzu – "Circle", "Square" und "Triangle" –, die bei Drücken das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur unsere [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien geändert – die Modul-Exporte bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jeder Schaltfläche einen Ereignislistener hinzu, so dass beim Drücken das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, da die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann als Unterfunktion des Objekts bereitgestellt wird. Daher müssen wir jetzt auf den Konstruktor mit `Module.` vorgebaut zugreifen; z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen besteht darin, dass sie immer verfügbar sind, auch in Skrptumgebungen. Wenn Sie also ein vorhandenes `<script>`-Tag in Ihrem HTML-Dokument haben, das nicht `type="module"` ist, können Sie dennoch Code, der als Module verteilt wird, wiederverwenden, indem Sie ihn dynamisch importieren.

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

Top-Level-Await ist eine Funktion, die in Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu wirken, was bedeutet, dass Code vor der Verwendung in Elternmodulen ausgewertet werden kann, ohne jedoch das Laden von Geschwistermodulen zu blockieren.

Lassen Sie uns ein Beispiel betrachten. Sie können alle in diesem Abschnitt beschriebenen Dateien und den Code im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis finden, das aus den vorherigen Beispielen erweitert wird.

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

Dann erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das einen Fetch-Aufruf nutzt, um die [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await` bevor wir `colors` spezifizieren, um es zu exportieren. Das bedeutet, dass alle anderen Module, die dieses Modul einbeziehen, warten, bis `colors` heruntergeladen und geparst wurde, bevor es verwendet wird.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` anstelle der zuvor verwendeten Strings, wenn wir unsere Formfunktionen aufrufen:

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

Das ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch nicht das Laden anderer Module blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)-Modul weiterhin geladen, während `colors` geholt wird.

## Importanweisungen werden nach oben verschoben

Importanweisungen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Code des Moduls verfügbar sind, noch bevor der Ort, der sie deklariert, ausgeführt wird, und dass die Seiteneffekte des importierten Moduls vor dem Start des restlichen Modulcodes produziert werden.

Zum Beispiel würde in `main.js` das Importieren von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Es wird jedoch als gute Praxis angesehen, alle Importe an den Anfang des Codes zu setzen, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklischie Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph) genannt "Abhängigkeitsgraph". In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph unter Verwendung einer Tieftraversierung ausgewertet werden.

Allerdings sind Zyklen oft unvermeidlich. Zyklische Importe treten auf, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängig ist. Zum Beispiel:

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

Zyklische Importe scheitern nicht immer. Der Wert der importierten Variablen wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (daher die Ermöglichung von [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter)), und nur, wenn die Variable zu diesem Zeitpunkt nicht initialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher, zu dem Zeitpunkt, an dem das Modul ausgewertet wird, wird weder `b` noch `a` tatsächlich gelesen, so dass der Rest des Codes normal ausgeführt wird, und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, so dass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

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

Das ist, weil, wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das zu diesem Zeitpunkt nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron zu verwenden, aber `a` asynchron, wird die Modulauswertung erfolgreich:

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

Sie sollten zyklische Importe in Ihrem Projekt in der Regel vermeiden, da sie Ihren Code fehleranfälliger machen. Einige häufige Zyklen-Beseitigungstechniken sind:

- Die beiden Module in eins zusammenführen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Einige Codes von einem Modul in das andere verschieben.

Zyklische Importe können jedoch auch auftreten, wenn Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Erstellen "isomorpher" Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code in modularer Weise zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht zwangsläufig, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihres Benutzers generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: es kommt darauf an.

Module haben weiterhin Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul globale Variablen wie `window` referenziert, kann es im Browser ausgeführt werden, aber auf Ihrem Node.js-Server wird ein Fehler auftreten, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code "isomorph" zu machen – das heißt, er zeigt dasselbe Verhalten in jeder Laufzeit. Dies wird häufig auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Binding". "Kern"-Module konzentrieren sich auf Reine JavaScript-Logik wie das Berechnen des Hashs, ohne Zugriff auf DOM, Netzwerke oder Dateisysteme, und bieten Hilfsfunktionen an. Die "Binding"-Teile können aus dem globalen Kontext lesen und schreiben. Zum Beispiel kann das "Browser-Binding" den Wert aus einem Eingabefeld lesen, während das "Node-Binding" ihn von `process.env` lesen kann, aber Werte, die aus beiden Orten gelesen werden, werden zu derselben Kernfunktion weitergeleitet und auf dieselbe Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf dieselbe Weise verwendet werden, während nur das Binding, das normalerweise leicht ist, plattformspezifisch sein muss.
- Überprüfen Sie, ob ein bestimmtes Global vorhanden ist, bevor Sie es verwenden. Beispielsweise können Sie testen, ob `typeof window === "undefined"`, um zu wissen, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und das DOM nicht lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Verzweigungen tatsächlich dasselbe Verhalten haben ("isomorph"). Wenn es nicht möglich ist, dieselbe Funktionalität bereitzustellen, oder wenn es mit dem Laden einer erheblichen Menge von Code verbunden ist, während ein großer Teil ungenutzt bleibt, sollten Sie besser unterschiedliche "Bindings" verwenden.

- Verwenden Sie ein Polyfill, um einen Rückgriff für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die in Node.js erst seit v18 unterstützt wird, können Sie eine ähnliche API wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte verwenden. Dies können Sie bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend zur Codewiederverwendbarkeit und Modularisierung werden Sie ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren auch aktiv Web-APIs, wo immer dies möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, diese Liste zu ergänzen, wenn Sie weitere entdecken!

- Wir haben dies bereits erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://` URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihr Testen über einen Server durchführen. GitHub-Pages sind ideal, da sie `.mjs`-Dateien auch mit dem richtigen MIME-Typ bereitstellen.
- Da `.mjs` eine nicht-standardmäßige Dateierweiterung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS `.js` stillschweigend an das Ende von `.mjs`-Dateien angefügt und dann die Dateierweiterung automatisch ausgeblendet hat. So wurden alle unsere Dateien tatsächlich als `x.mjs.js` erstellt. Sobald wir das automatische Ausblenden von Dateierweiterungen deaktiviert und es darauf trainiert hatten, `.mjs` zu akzeptieren, war alles in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon Tiefen-Einblick](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in der Tiefe: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Kap.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
