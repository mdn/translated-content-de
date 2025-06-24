---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme waren anfangs recht klein — der Großteil der Nutzung in den frühen Tagen bestand darin, isolierte Skriptaufgaben zu übernehmen und ein wenig Interaktivität auf Ihren Webseiten dort zu bieten, wo sie benötigt wurde, sodass große Skripte im Allgemeinen nicht notwendig waren. Einige Jahre später haben wir jetzt komplette Anwendungen, die mit viel JavaScript in Browsern laufen, und JavaScript wird auch in anderen Kontexten eingesetzt (zum Beispiel {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt seit langem über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ ohne Notwendigkeit zur Transpilation. Das kann nur positiv sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek verwenden zu müssen und all diese zusätzlichen clientseitigen Prozesse und zusätzlichen Hin- und Herfahrten auszuführen. Das macht Bundler wie webpack jedoch nicht überflüssig — Bundler leisten immer noch gute Arbeit bei der Aufteilung des Codes in angemessen große Stücke und können andere Optimierungen wie Minifizierung, Entfernen toten Codes und Tree-Shaking durchführen.

## Einführung in ein Beispiel

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann Informationen über verschiedene Formen auf der Leinwand zeichnen und berichten.

Diese sind ziemlich trivial, wurden aber absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundlegende Beispielstruktur

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine folgende Dateistruktur:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Grunde genommen die gleiche Struktur; das obige sollte Ihnen ziemlich vertraut erscheinen.

Die beiden Module im Verzeichnis "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer bestimmten `width` und `height` innerhalb eines umgebenden [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer angegebenen ID, die selbst in einem angegebenen übergeordneten Element hinzugefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem angegebenen Wrapper-Element angefügt wird und in die Berichtsdaten ausgegeben werden können. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats auf eine bestimmte Berichts-Liste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats auf eine bestimmte Berichts-Liste, basierend auf seiner Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen könnten Sie die `.mjs`-Erweiterung stattdessen sehen. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläre JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschlossen, vorerst `.js` zu verwenden. Damit Module korrekt in einem Browser funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn Sie das nicht tun, erhalten Sie einen strengen MIME-Typ-Prüffehler etwa mit der Meldung "The server responded with a non-JavaScript MIME type" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden, oder wenn nicht, aber Sie wissen, was Sie tun und Zugang haben (d.h. Sie können Ihren Server so konfigurieren, dass der korrekte [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien gesetzt wird). Es könnte jedoch zu Verwirrung führen, wenn Sie nicht die Kontrolle über den Server haben, von dem Sie die Dateien bereitstellen, oder wenn Sie Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier sind.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich den Nutzen darin sehen, `.mjs` für Module zu verwenden versus `.js` für "normale" JavaScript-Dateien, aber nicht auf das oben beschriebene Problem stoßen möchten, können Sie während der Entwicklung `.mjs` verwenden und diese während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Werkzeuge möglicherweise nie `.mjs` unterstützen.
- Das `<script type="module">`-Attribut verwendet wird, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie weiter unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun müssen, um Zugang zu Modulfunktionen zu erhalten, ist, sie zu exportieren. Dies wird mit der {{jsxref("Statements/export", "Export")}}-Anweisung gemacht.

Der einfachste Weg, sie zu verwenden, besteht darin, sie vor alle Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Toplevel-Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Ein bequemerer Weg, alle zu exportierenden Elemente zu exportieren, besteht darin, eine einzige Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer durch Kommas getrennten Liste der zu exportierenden Funktionen, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, ist folgender:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "Import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der zu importierenden Funktionen, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ bietet einen String, den die JavaScript-Umgebung auf einen Pfad zu den Moduldaten auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Wurzelverzeichnis der Website sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt-Syntax (`.`), um "den aktuellen Standort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Das ist viel besser als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert immer noch, wenn Sie es an einen anderen Ort in der Seitenhierarchie verschieben.

Zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird

```bash
./modules/square.js
```

Sie können solche Zeilen in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Dieser Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, als wären sie im selben Datei definiert. Das folgende findet sich in `main.js`, unter den Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können immer noch Eigenschaften von Objekten ändern. Der Wert kann nur durch das Modul neu zugewiesen werden, das ihn exportiert. Siehe die [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden Text, den sie möchten, im Modulspezifizierer anzugeben, wenn sie ein Modul importieren; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der Importkarte unten ein "Modulspezifiziererkarte" JSON-Objekt, in dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden in absolute URL-Adressen aufgelöst, wobei die [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments mit der Importkarte verwendet wird.

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

Die Importkarte wird mithilfe eines [JSON-Objekts](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut, das auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist, definiert.
Beachten Sie, dass eine Importkarte nur für das Dokument gilt — die Spezifikation behandelt nicht, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet werden kann. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn kein nachgestellten Schrägstrich auf dem Modulspezifizierer-Schlüssel ist, wird der gesamte Modulspezifizierer-Schlüssel angepasst und ersetzt.
Zum Beispiel passen wir unten nackte Modulnamen an und remappen eine URL auf einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, dann muss der Wert auch einen haben und der Schlüssel wird als "Pfadpräfix" angepasst.
Dies ermöglicht das Remapping ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer sind.
Zum Beispiel könnte ein Modulspezifizierer von `shapes/circle/` die Modulspezifizierer-Schlüssel `shapes/` und `shapes/circle/` aufeinander abstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifizierer-Schlüssel aus.

Importkarten ermöglichen es Modulen, mit nackten Modulnamen importiert zu werden (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Während dies oben nicht gezeigt wurde, erlauben sie auch das Importieren bestimmter Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert.
Generell ermöglichen sie es Entwicklern, ergonomischeren Import-Code zu schreiben, und erleichtern die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden.
Dies kann den Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erläutern die verschiedenen oben beschriebenen Funktionen.

### Funktionsprüfung

Sie können die Unterstützung für Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen, wie Node.js, können Sie nackte Namen für den Modulspezifizierer verwenden.
Dies funktioniert, da die Umgebung Modulnamen zu einem Standardstandort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen liefert, die der Browser zur Auflösung von Modulspezifizierern zu URLs benötigt (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht zu einem Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifizierer-Schlüssel definiert, der in diesem Fall auf einen relativen Adresswert verweist.

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

Einträge in der Modulspezifiziererkarte, bei denen sowohl der Spezifizierer-Schlüssel als auch der zugeordnete Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht das Remapping einer ganzen Reihe von Import-URLs von einem Standort auf einen anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der nachgestellte Schrägstrich zeigt an, dass der Modulspezifizierer-Schlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifizierer-Schlüssel (und dessen Ersetzung) abgleichen.

#### Pakete von Modulen

Die folgende JSON-Importkarten-Definition ordnet `lodash` als nackten Namen zu und den Modulspezifizierer-Präfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem nackten Namen als auch die darin enthaltenen Module (mit der Pfad-Zuordnung) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateierweiterung zu importieren, jedoch müssten Sie einen nackten Modulspezifizierer-Schlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag sinnvoll für nur ein Modul sein, skaliert aber schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Remapping

Ein Modulspezifizierer-Schlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder eine URL-ähnliches relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul remappen möchten, das absolute Pfade zu einer Ressource hat mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module zur Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Als Ergebnis kann eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Moduldiagramms enthalten, aber die Benutzer müssen sich über diese Komplexität keine Gedanken machen.

> [!NOTE]
> Sie können die Versionsverwaltung auch mit relativen Pfaden erreichen, dies ist jedoch suboptimal, da dies unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie davon abhält, nackte Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ebenso, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf diese mit den gleichen Modulspezifizierern zu verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es ermöglicht, Modulspezifizierer-Karten bereitzustellen, die abhängig vom Pfad des Skripts, das den Import durchführt, verwendet werden.
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

Mit dieser Verknüpfung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn keine passende Bereich in der gescopten Karte enthalten ist oder die passenden Bereiche keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht passenden Bereichspfad importiert wird, wird die Modulspezifiziererkarte in `imports` stattdessen verwendet und auf die Version in `/node_modules/cool-module/index.js` verwiesen.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Bereich auszuwählen, nicht beeinflusst, wie die Adresse aufgelöst wird.
Der Wert im zugeordneten Pfad muss nicht zum Bereichspfad passen und relative Pfade werden immer noch auf die Basis-URL des Skripts, die die Importkarte enthält, aufgelöst.

Wie bei den Modulspezifiziererkarten können Sie viele Bereichsschlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Bereiche mit der Referrer-URL übereinstimmen, wird zuerst der spezifischste Bereichspfad (der längste Bereichsschlüssel) auf eine übereinstimmende Spezifizierung überprüft.
Die Browser fallen auf den nächsten spezifischsten passenden Bereichspfad zurück, wenn keine übereinstimmende Spezifizierung vorhanden ist usw.
Wenn keine übereinstimmende Spezifizierung in einem der übereinstimmenden Bereiche vorhanden ist, überprüft der Browser auf eine Übereinstimmung in der Modulspezifiziererkarte im `imports`-Schlüssel.

### Verbesserung des Cachings durch Mapping von Hash-Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft Hash-Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn ein Modul sich ändert, alle Module, die es mit seinem Hash-Dateinamen importieren, ebenfalls aktualisiert/neu generiert werden müssen.
Dadurch entsteht möglicherweise eine Kaskade von Updates, was eine Verschwendung von Netzwerkressourcen darstellt.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf spezifische Hash-Dateinamen zu verlassen, hängen Anwendungen und Skripte stattdessen von einer nicht gehashte Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die untenstehende bietet dann eine Zuordnung zur tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn `dependency_script` sich ändert, dann ändert sich auch sein Hash im Dateinamen. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen die Quelldatei von JavaScript, das davon abhängt, nicht aktualisieren, da sich der Spezifizierer in der Importanweisung nicht ändert.

## Laden von nicht JavaScript-Ressourcen

Ein aufregendes Feature, das eine vereinheitlichte Modularchitektur mit sich bringt, ist die Fähigkeit, nicht JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit deklarieren, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und wirft einen Fehler, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und schlagen fehl, wenn zum Beispiel `./data.json` nicht in eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur beabsichtigen, Daten zu importieren. Sobald erfolgreich importiert, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Jetzt müssen wir das `main.js`-Modul nur noch auf unsere HTML-Seite anwenden. Das ist dem Anwenden eines regulären Skripts auf eine Seite sehr ähnlich, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Körper des `<script>`-Elements einfügen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import` und `export`-Anweisungen nur in Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht für andere Module zugänglich sein (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload)-Attribut angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie aufgrund der JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten haben, die in Modulen im Gegensatz zu in klassischen Skripten definiert sind. Dies liegt daran, dass Module standardmäßig {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht notwendig, das `defer`-Attribut (siehe [`<script>` Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)) zu verwenden, wenn Sie ein Modul laden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, selbst wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Und last but not least, um dies klarzustellen — Modulfunktionen werden in den Bereich eines einzelnen Skripts importiert — sie sind im globalen Bereich nicht verfügbar. Daher können Sie auf importierte Funktionen nur in dem Skript zugreifen, in das sie importiert werden, und Sie können nicht von der JavaScript-Konsole darauf zugreifen. Sie erhalten jedoch immer noch Syntaxfehler in den DevTools angezeigt, aber Sie können möglicherweise nicht einige der Debugtechniken verwenden, die Sie erwartet haben zu verwenden.

Modul-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie werden explizit an das globale Objekt angehängt. Andererseits sind global definierte Variablen im Modul verfügbar. Zum Beispiel, bei folgendem Code:

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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Auch beachten Sie in diesem Beispiel, dass ein Modul notwendigerweise keine Import-/Exportanweisung benötigt — das einzige, was notwendig ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde beim Export mit seinem Namen referenziert und bei Import auch mit diesem Namen referenziert.

Es gibt auch eine Art von Export, der **Standardexport** genannt wird — dieser ist darauf ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul angeboten wird, und hilft JavaScript-Modulen dabei, mit vorhandenen CommonJS- und AMD-Modulsystemen zu interagieren (wie gut erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem grundlegenden Modulsystem `square.js` können Sie eine Funktion namens `randomSquare()` finden, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, also schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten `export default` stattdessen vor die Funktion setzen und es als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier, beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist und wir wissen, dass `randomSquare` dies ist. Die obige Zeile ist im Grunde genommen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax für die Umbenennung von exportierten Elementen wird unten im Abschnitt [Umbenennung von Importen und Exporten](#umbenennung_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formaten auf der Leinwand gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das mit dem Zeichnen einer anderen Form zu tun hat, wie z. B. ein Kreis oder Dreieck? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, usw.; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dasselbe Toplevel-Modul zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennung von Importen und Exporten

Innerhalb Ihrer `import`- und `export`-Anweisungen in den geschweiften Klammern, können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion in dem Toplevel-Modul verwenden werden.

Zum Beispiel, beide der folgenden würden die gleiche Aufgabe erledigen, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie das gleiche Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

In jedem dieser Module haben wir Funktionen mit den gleichen Namen, die exportiert werden, und daher hat jedes das gleiche `export`-Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler werfen wie "SyntaxError: redeclaration of import name" (Firefox).

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

Und es würde auf die gleiche Weise funktionieren. Welchen Stil Sie verwenden, bleibt Ihnen überlassen, allerdings macht es sinnvoller, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie aus Drittanbieter-Modulen importieren, auf die Sie keinen Einfluss haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert gut, aber sie ist ein wenig unordentlich und umständlich. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht genau das:

```js
import * as Module from "./modules/module.js";
```

Dies holt alle verfügbaren Exporte innerhalb von `module.js` und macht sie als Mitglieder eines Objekts `Module` verfügbar, wodurch es im Wesentlichen seinen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns noch einmal ein echtes Beispiel an. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie das gleiche Beispiel wieder, aber umgeschrieben, um diese neue Syntax zu verwenden. In den Modulen sind die Exporte alle in folgender einfacher Form:

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

Sie können den Code nun wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf enthalten), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir vorhin angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden und ist besonders nützlich, wenn Sie Ihren Modulcode bereits im objektorientierten Stil geschrieben haben.

Sie können ein Beispiel für unser Formenzeichnungsmodul mit ES-Klassen geschrieben in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Als Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js)-Datei nun alle ihre Funktionalität in einer einzigen Klasse:

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

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Möglicherweise haben Sie mehrere Abhängigkeitsstufen, bei denen Sie die Dinge vereinfachen und mehrere Untermodule in einem übergeordneten Modul kombinieren möchten. Dies ist möglich mit der folgenden Export-Syntax in dem übergeordneten Modul:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel sehen Sie unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis im `modules`-Verzeichnis namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

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

Der nächste Schritt ist der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese holt die Exporte der einzelnen Untermodule und macht sie effektiv aus dem `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Grunde genommen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie keinen nützlichen verwandten Code in der gleichen Datei schreiben können.

Nun in der Datei `main.js` können wir auf alle drei Modulkategorien zugreifen, indem wir

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

Eine kürzliche Ergänzung zur JavaScript-Modul-Funktionalität ist das dynamische Modul-Laden. Damit können Sie Module dynamisch nur dann laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lesen wir weiter, um zu sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, indem Sie den Pfad zum Modul als Parameter übergeben. Es gibt eine {{jsxref("Promise")}} zurück, die mit einem Modulobjekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers und in geteilten und dedizierten Workern erlaubt.
> "Import()" wird jedoch eine Fehlermeldung zurückgeben, wenn es in einem Service-Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. In dem Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen inkludieren wir drei Schaltflächen — "Circle", "Square", und "Triangle" — die, wenn Sie gedrückt werden, das erforderliche Modul dynamisch laden und es dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unserer [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Datei vorgenommen — die Modul-Exporte bleiben dieselben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf gegriffen, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jeder Schaltfläche einen Event-Listener hinzu, sodass, wenn sie gedrückt wird, das relevante Modul dynamisch geladen und genutzt wird, um die Form zu zeichnen:

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

Beachten Sie, dass, weil die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann zu einem Subfeature des Objekts wird, daher müssen wir nun auf den Konstruktor mit `Module.` vorangestellt zugreifen, z.B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil der dynamischen Importe ist, dass sie immer verfügbar sind, auch in Skriptumgebungen. Daher, wenn Sie einen vorhandenen `<script>`-Tag in Ihrem HTML haben, der nicht `type="module"` hat, können Sie immer noch Code, der als Module verteilt wird, verwenden, indem Sie ihn dynamisch importieren.

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

Top-Level-Await ist eine Funktion, die in Modulen verfügbar ist. Das bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu wirken, d.h. der Code kann ausgewertet werden, bevor er in übergeordneten Modulen verwendet wird, jedoch ohne das Laden von Geschwistermodulen zu blockieren.

Schauen wir uns ein Beispiel an. Sie finden alle Dateien und den Code, der in diesem Abschnitt beschrieben wird, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis, was aus den vorherigen Beispielen erweitert wird.

Zunächst deklarieren wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei:

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

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` spezifizieren, um zu exportieren. Dies bedeutet, dass alle anderen Module, die dieses enthalten, warten, bis `colors` heruntergeladen und analysiert wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einbinden:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir werden `colors` anstelle der zuvor verwendeten Zeichenfolgen verwenden, wenn wir unsere Formfunktionen aufrufen:

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

Dies ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) erst ausgeführt wird, wenn der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch das Laden anderer Module nicht blockieren. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js)-Modul weiter laden, während `colors` geladen wird.

## Importerklärungen werden gehoben

Importerklärungen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Code des Moduls verfügbar sind, sogar bevor die Stelle, die sie deklariert, erreicht wird, und dass die Nebeneffekte des importierten Moduls erzeugt werden, bevor der Rest des Modulcodes ausgeführt wird.

Zum Beispiel in `main.js` würde der Import von `Canvas` in der Mitte des Codes weiterhin funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird empfohlen, alle Ihre Importe an den Anfang des Codes zu setzen, was die Analyse von Abhängigkeiten erleichtert.

## Zyklische Importe

Module können andere Module importieren und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der "Abhängigkeitsgraph" genannt wird. In einer idealen Welt ist dieser Graph [acyclisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einer Tiefensuche ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zyklische Importe entstehen, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängig ist. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (daher werden [LiveBindings](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zu dem Zeitpunkt, zu dem das Modul ausgewertet wird, weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

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

Dies liegt daran, dass JavaScript, wenn es `a.js` auswertet, zuerst `b.js` auswerten muss, die Abhängigkeit von `a.js`. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron zu verwenden, aber `a` asynchron, gelingt die Modulauswertung:

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

Dies liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird, daher ist der Wert von `b` verfügbar, wenn `a.js` bewertet wird.

Sie sollten zyklische Importe in Ihrem Projekt normalerweise vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Beseitigung von Zyklen sind:

- Kombinieren Sie die beiden Module zu einem.
- Verschieben Sie den gemeinsam genutzten Code in ein drittes Modul.
- Verschieben Sie etwas Code von einem Modul in das andere.

Zyklische Importe können jedoch auch auftreten, wenn die Bibliotheken voneinander abhängig sind, was schwieriger zu beheben ist.

## Autoren "isomorpher" Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihrer Benutzer generiert. Können Sie es im Front-End des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: das kommt darauf an.

Module haben weiterhin Zugang zu globalen Variablen, wie zuvor gezeigt. Wenn das Modul globale wie `window` referenziert, kann es im Browser ausgeführt werden, wirft jedoch einen Fehler auf Ihrem Node.js-Server, da `window` dort nicht verfügbar ist. Ebenso kann der Code nur in Node.js verwendet werden, wenn er Zugriff auf `process` benötigt, um funktionsfähig zu sein.

Um die Wiederverwendbarkeit eines Moduls maximal zu nutzen, wird oft empfohlen, den Code "isomorph" zu machen — d.h. in jeder Laufzeitumgebung das gleiche Verhalten aufzuweisen. Dies wird häufig auf drei Arten erreicht:

- Trennen Sie Ihre Module in "core" und "binding". Für das "core", konzentrieren Sie sich auf rein JavaScript-Logik wie das Berechnen des Hashs, ohne jeglichen Zugriff auf DOM, Netzwerk oder Dateisystem und exportieren Sie Dienstprogrammfunktionen. Für den "binding"-Teil können Sie lesen und schreiben zum globalen Kontext. Zum Beispiel kann das "Browserbinding" wählen, den Wert aus einem Eingabefeld zu lesen, während das "Node-Binding" ihn möglicherweise aus `process.env` liest, jedoch werden die aus beiden Orten gelesenen Werte an dieselbe Kernfunktion weitergeleitet und auf die gleiche Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur das Binding, das in der Regel leichtgewichtig ist, plattformspezifisch sein muss.
- Erkennen Sie, ob eine bestimmte globale Variable vorhanden ist, bevor Sie sie verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"` ist, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht auf das DOM zugreifen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich dieselbe Funktionalität ("isomorph") enthalten. Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dies das Laden wesentlicher Codebestandteile beinhaltet, während ein großer Teil ungenutzt bleibt, ist es besser, stattdessen verschiedene "Bindings" zu verwenden.

- Verwenden Sie ein Polyfill, um einen Fallback für fehlende Funktionen bereitzustellen. Wenn Sie beispielsweise die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst ab v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Trotzdem werden Sie mit dem Trend der Wiederverwendbarkeit und Modularisierung von Code dazu ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeitumgebungen wie Node.js implementieren aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu ergänzen, wenn Sie mehr entdecken!

- Wir haben dies zuvor erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, sonst erhalten Sie einen strikten MIME-Typ-Prüffehler wie "The server responded with a non-JavaScript MIME type".
- Wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie aufgrund der JavaScript-Modulsicherheitsanforderungen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem korrekten MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardisierte Dateierweiterung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS heimlich `.js` zum Ende von `.mjs`-Dateien hinzugefügt hat und dann die Dateierweiterung automatisch versteckt hat. Daher kamen all unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verbergen von Dateierweiterungen ausgeschaltet haben und es darauf trainiert haben, `.mjs` zu akzeptieren, war alles in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: Ein tiefer Einblick in Comics](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 im Detail: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Module](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
