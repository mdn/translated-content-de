---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: e452bf7276167b8b9dae27df697ca4af0f2c5177
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden gibt Ihnen alles, was Sie brauchen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — die meiste Verwendung in den frühen Tagen bestand darin, isolierte Scripting-Aufgaben auszuführen, um dort, wo es nötig war, ein wenig Interaktivität zu Ihren Webseiten hinzuzufügen. Große Skripte waren im Allgemeinen nicht erforderlich. Ein paar Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (zum Beispiel [Node.js](/de/docs/Glossary/Node.js)).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und Frameworks, die die Verwendung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierende Modul-Systeme wie [RequireJS](https://requirejs.org/), [Webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen von Haus aus Modul-Funktionen, ohne dass eine Transpilation erforderlich ist. Das ist nur von Vorteil – Browser können das Laden von Modulen optimieren, sodass es effizienter ist, als eine Bibliothek zu verwenden und all diese zusätzlichen clientseitigen Verarbeitungen und zusätzlichen Rundreisen durchzuführen. Es macht jedoch Bundler wie Webpack nicht überflüssig – Bundler leisten immer noch gute Arbeit beim Aufteilen von Code in angemessen große Abschnitte und können andere Optimierungen wie Minifizierung, Entfernen von totem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir ein [einfaches Set von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele zeigen ein einfaches Set von Modulen, die ein `<canvas>`-Element auf einer Webseite erstellen und dann unterschiedliche Formen auf die Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver ausführen.

## Grundstruktur eines Beispiels

In unserem ersten Beispiel (siehe [basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules)) haben wir eine Dateistruktur wie folgt:

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

> [!NOTE]
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das obige sollte ziemlich vertraut werden.

Die zwei Module im Verzeichnis `modules` werden unten beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt ein Canvas mit einer angegebenen `width` und `height` in einem Wrapper-<div> mit einer angegebenen ID, die selbst in einem angegebenen übergeordneten Element angehängt ist. Gibt ein Objekt zurück, das den 2D-Kontext des Canvas und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements angehängt wird und zur Ausgabe von Berichtsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die die Zeichenkette 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einem angegebenen Canvas mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, die Position und die Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtslisten, basierend auf dessen Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtslisten, basierend auf dessen Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldateien verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung. [Die Dokumentation von V8 empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldateien von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst `.js` zu verwenden. Um Module korrekt in einem Browser zu verwenden, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bedient, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler in etwa der Art, dass "Der Server mit einem Nicht-JavaScript-MIME-Typ reagierte" und der Browser Ihr JavaScript nicht ausführt. Die meisten Server setzen bereits den richtigen Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die bereits `.mjs`-Dateien korrekt bedienen, umfassen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder nicht, aber wissen, was Sie tun und Zugriff haben (z. B. wenn Sie Ihren Server konfigurieren können, um den richtigen [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien zu setzen). Es könnte allerdings Verwirrung stiften, wenn Sie den Server, von dem Sie die Dateien bereitstellen, nicht kontrollieren, oder Dateien für die öffentliche Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich an der Klarheit der Verwendung von `.mjs` für Module gegenüber `.js` für "normale" JavaScript-Dateien interessiert sind, aber das oben beschriebene Problem nicht umgehen möchten, könnten Sie immer während der Entwicklung `.mjs` verwenden und diese während Ihres Build-Schritts in `.js` umwandeln.

Es sei auch darauf hingewiesen, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das `<script type="module">`-Attribut verwendet wird, um anzuzeigen, wenn auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das erste, was Sie tun, um auf Modulfunktionen Zugriff zu erhalten, ist, sie zu exportieren. Dies geschieht mit der {{jsxref("Statements/export", "export")}}-Anweisung.

Die einfachste Möglichkeit besteht darin, sie vor die Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und – wie wir später sehen werden – Klassen exportieren. Es müssen Top-Level-Elemente sein: Sie können `export` beispielsweise nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente zu exportieren, die Sie exportieren möchten, besteht darin, am Ende Ihrer Moduldatei eine einzelne Exportanweisung zu verwenden, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie exportieren möchten, die in geschweifte Klammern eingeschlossen sind. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Die einfachste Möglichkeit, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer kommagetrennten Liste der Funktionen, die Sie importieren möchten, die in geschweifte Klammern eingeschlossen sind, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifizierer_.

Der _Modulspezifizierer_ stellt eine Zeichenkette zur Verfügung, die die JavaScript-Umgebung auf einen Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Site-Stamm sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punktnotation (`.`), die "aktueller Ort" bedeutet, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL übertragbar machen — das Beispiel funktioniert immer noch, wenn Sie es an eine andere Stelle in der Site-Hierarchie verschieben.

So wird zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

zu

```bash
./modules/square.js
```

Sie können solche Zeilen in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierer kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, als wären sie im selben Dokument definiert. Folgendes findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können trotzdem Eigenschaften von Objektwerten ändern. Der Wert kann nur durch das Modul, das ihn exportiert, neu zugewiesen werden. Sehen Sie sich die [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel an.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifizierer importieren kann, der entweder eine absolute URL ist oder eine relative URL, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) erlauben es Entwicklern stattdessen, fast beliebigen Text im Modulspezifizierer zu verwenden, wenn ein Modul importiert wird; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Importkarte ein "Modulspezifiziererkarten"-JSON-Objekt, in dem die Eigenschaftsnamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte ersetzt werden, wenn der Browser die Modul-URL auflöst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden mit der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, zu absoluten URL-Adressen aufgelöst.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem `type`-Attribut, das auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) eingestellt ist, definiert.
Es kann nur eine Importkarte im Dokument geben, und da sie verwendet wird, um zu bestimmen, welche Module sowohl in statischen als auch dynamischen Importen geladen werden, muss sie vor allen `<script>`-Elementen, die Module importieren, deklariert werden.
Beachten Sie, dass die Importkarte nur für das Dokument gilt — die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker oder Worklet-Kontext angewendet werden soll. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn der Modulspezifiziererschlüssel keinen nachgestellten Schrägstrich hat, wird der gesamte Modulspezifiziererschlüssel abgeglichen und ersetzt.
Zum Beispiel unten stimmen nackte Modulnamen überein und leiten eine URL auf einen anderen Pfad um.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfadvorsilbe" abgeglichen.
Dies ermöglicht eine Umleitung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass für einen Modulspezifizierer mehrere Schlüssel in einer Importkarte zutreffen.
Beispielsweise könnte ein Modulspezifizierer von `shapes/circle/` mit den Modulspezifiziererschlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) übereinstimmenden Modulspezifiziererschlüssel.

Importkarten ermöglichen den Import von Modulen mit nackten Modulnamen (wie in Node.js) und können auch den Import von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl nicht oben gezeigt, erlauben sie auch den Import spezifischer Versionen einer Bibliothek, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen ermöglichen sie es Entwicklern, ergonomischere Import-Codes zu schreiben und erleichtern die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden.
Dies kann den Aufwand verringern, die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen Funktionen.

### Funktionsprüfung

Sie können die Unterstützung für Importkarten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)-statischen Methode überprüfen (die auch selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module mit nackten Namen importieren

In einigen JavaScript-Umgebungen, wie Node.js, können Sie nackte Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulnamen auf einen Standardort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie folgenden Syntax verwenden, um das "square" Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, die zum Auflösen von Modulspezifizierern auf URLs benötigt werden (JavaScript wird eine `TypeError`-Fehler auslösen, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht in einen Modulstandort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square` Modulspezifiziererschlüssel definiert, der in diesem Fall mit einem relativen Adresswert aufgelöst wird.

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

### Modulpfade umleiten

Module mit Einträgen in einer Modulspezifizierermappe, bei denen sowohl der Spezifiziererschlüssel als auch der zugehörige Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfadvorsilbe verwendet werden.
Dies ermöglicht das Umleiten eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um eine Arbeitsweise mit "Paketen und Modulen" zu simulieren, wie man sie im Node-Ökosystem sehen könnte.

> [!NOTE]
> Der nachgestellte `/` zeigt an, dass der Modulspezifiziererschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, ersetzt der Browser nur den gesamten Modulspezifiziererschlüssel (und ersetzt ihn).

#### Paketierten Module

Die folgende JSON-Importkarten-Definition mappt `lodash` als nackten Namen und den Modulspezifizierer-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst auf die Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem nackten Namen als auch Module innerhalb davon importieren (unter Verwendung der Pfadzuordnung):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js` Dateierweiterung zu importieren, aber Sie müssten einen nackten Modulspezifiziererschlüssel für diese Datei erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul sinnvoll sein, wird aber schlecht skalierbar, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifiziererschlüssel muss kein Pfad sein – er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul umleiten möchten, das absolute Pfade zu einer Ressource hat, mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Modul-Versionen für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul isoliert von anderen Modulen und deren Abhängigkeiten ist.
Infolgedessen kann eine komplexe Anwendung dasselbe Modul mehrere Male mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen einbinden, aber Benutzer müssen sich nicht mit dieser Komplexität befassen.

> [!NOTE]
> Sie können das Versionsmanagement auch mit relativen Pfaden erreichen, aber dies ist suboptimal, weil es unter anderem eine bestimmte Struktur für Ihr Projekt erzwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten ermöglichen Ihnen auch, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und sie mit demselben Modulspezifizierer zu referenzieren.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es ermöglicht, Modulspezifizierermappen bereitzustellen, die abhängig vom Pfad des Skripts, das den Import durchführt, verwendet werden.
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
Die Karte in `imports` wird als Fallback verwendet, wenn kein übereinstimmender Bereich in der bescheidenen Karte vorhanden ist oder die übereinstimmenden Bereiche keinen übereinstimmenden Spezifizierer enthalten. Wenn `coolmodule` von einem Skript mit einem nicht übereinstimmenden Bereichspfad importiert wird, wird stattdessen die Modul-Spezifizierermappe in `imports` verwendet, die auf die Version in `/node_modules/coolmodule/index.js` abbildet.

Beachten Sie, dass der Pfad, der zum Auswählen eines Bereichs verwendet wird, die Art und Weise, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im zugeordneten Pfad muss nicht mit dem Bereichspfad übereinstimmen und relative Pfade werden weiterhin zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Genau wie bei Modul-Spezifizierermappen können Sie viele Bereichsschlüssel haben, die sich überlappende Paths enthalten können.
Wenn mehrere Bereiche die Referrer-URL übereinstimmen, wird zuerst der spezifischste Bereichspfad überprüft (der längste Bereichsschlüssel) auf einen übereinstimmenden Spezifizierer.
Die Browser fallen zurück auf den nächsten spezifischsten übereinstimmenden Bereichspfad, wenn kein passender Spezifizierer vorhanden ist, und so weiter.
Wenn kein passender Spezifizierer in einem der übereinstimmenden Bereiche vorhanden ist, überprüft der Browser, ob eine Übereinstimmung in der Modul-Spezifizierermappe im `imports`-Schlüssel vorliegt.

### Verbesserung des Cachings durch Entfernung von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieser Methode ist, dass, wenn ein Modul geändert wird, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert/erneuert werden müssen.
Dies kann potenziell zu einem Kaskadeneffekt führen, der verschwenderisch von Netzwerkressourcen ist.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf bestimmte gehashte Dateinamen zu verlassen, verlassen sich Anwendungen und Skripts stattdessen auf eine nicht-gehashte Version des Modulnamens (Adresse).
Eine Importkarte wie die folgende bietet dann eine Zuordnung zu der tatsächlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn `dependency_script` geändert wird, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quellcode von keinem JavaScript, das davon abhängt, aktualisieren, weil der Spezifizierer in der Importanweisung nicht geändert wird.

## Laden von Nicht-JavaScript-Ressourcen

Eine spannende Funktion, die eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, andere Ressourcen als JavaScript als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen ausdrücklich angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist und eine Fehlermeldung auslösen wird, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Einfugeigenschaften](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und scheitern, wenn zum Beispiel `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie keinen Code versehentlich ausführen, wenn Sie nur Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert als normales JavaScript-Objekt oder als `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Jetzt müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Aufbringen eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zuallererst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Skript des Moduls auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Körper des `<script>`-Elements einfügen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur innerhalb von Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und andere Module zu importieren versucht. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (da sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreloaded"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und Standardskripten

- Sie müssen auf lokale Tests achten – wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie aufgrund von Sicherheitsanforderungen für JavaScript-Module auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein unterschiedliches Verhalten von Abschnitten des Skripts feststellen, die in Modulen im Vergleich zu Standardskripten definiert sind. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht nötig, das `defer`-Attribut zu verwenden (siehe [`<script>` Attributes](/de/docs/Web/HTML/Element/script#attributes)), wenn Sie ein Modul-Skript laden; Module werden automatisch deferred.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Lassen Sie uns zuletzt klarstellen – Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert – sie sind nicht im globalen Gültigkeitsbereich verfügbar. Daher können Sie nur auf importierte Funktionen in dem Skript zugreifen, in das sie importiert werden, und nicht von der JavaScript-Konsole aus darauf zugreifen. Sie erhalten immer noch Syntaxfehler im DevTools angezeigt, aber Sie werden nicht in der Lage sein, einige der Debugging-Techniken zu verwenden, die Sie vielleicht erwartet haben.

Modul-definierte Variablen sind auf das Modul begrenzt, es sei denn, sie sind explizit zum globalen Objekt hinzugefügt. Auf der anderen Seite sind global definierte Variablen im Modul verfügbar. Zum Beispiel, bei folgendem Code:

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

würde die Seite immer noch `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung braucht — das Einzige, was nötig ist, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde bei seinem Export mit seinem Namen bezeichnet, und dieser Name wurde auch beim Import verwendet.

Es gibt auch einen Exporttyp, der **Standardexport** genannt wird — dieser ist darauf ausgelegt, es einfach zu machen, eine Standardfunktion bereitzustellen, und hilft auch dabei, dass JavaScript-Module mit bestehenden CommonJS und AMD-Modulsystemen zusammenarbeiten (wie es in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff schön erklärt wird; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem Grundmodule `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit zufälliger Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, also schreiben wir am Ende der Datei folgendes:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an den Anfang der Funktion setzen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

Über in unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Wiederum, beachten Sie das Fehlen von geschweiften Klammern. Das liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Wesentlichen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Renaming imports and exports](#umbenennung_von_imports_und_exports) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formzeichnungsmodule gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form befasst, wie einem Kreis oder Dreieck? Diese Formen hätten wahrscheinlich ähnliche Funktionen wie `draw()`, `reportArea()`, usw.; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in die gleiche Top-Level-Moduldatei zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennung von Imports und Exports

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisungen können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion innerhalb des Top-Level-Moduls verwenden.

So würden zum Beispiel beide der folgenden dasselbe tun, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein wirkliches Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js`-Module zum Zeichnen und Berichten von Kreisen und Dreiecken hinzugefügt haben.

In jedem dieser Module haben wir Funktionen mit den gleichen Namen, die exportiert werden, und daher hat jedes die gleiche `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Importieren dieser in `main.js`, wenn wir versuchen würden,

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (in Firefox) ausgeben.

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

Beachten Sie, dass Sie das Problem auch in den Moduldateien selbst lösen könnten, z.B.

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

und es würde genauso funktionieren. Welche Methode Sie verwenden, liegt bei Ihnen, allerdings könnte es sinnvoller sein, Ihren Modulcode in Ruhe zu lassen und die Änderungen in den Importen vorzunehmen. Dies ist insbesondere dann sinnvoll, wenn Sie aus Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert ganz gut, ist aber etwas unordentlich und langwierig. Eine noch bessere Lösung ist es, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform macht das:

```js
import * as Module from "./modules/module.js";
```

Dies greift sich alle im `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, wobei es im Wesentlichen seinen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns ein echtes Beispiel an. Wenn Sie in unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, diesmal jedoch so umgeschrieben, dass es diese neue Syntax verwendet. In den Modulen haben alle Exporte die gleiche einfache Form:

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

In jedem Fall können Sie jetzt auf die Importe eines Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Jetzt können Sie den Code genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf hinzufügen), und die Importe sind viel übersichtlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in objektorientiertem Stil geschrieben haben.

Sie können ein Beispiel zu unserem Formzeichnungsmodule, das mit ES-Klassen umgeschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Als Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js)-Datei jetzt alle Funktionalitäten in einer einzigen Klasse:

{{code("136315б")}}
