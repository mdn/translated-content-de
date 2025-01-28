---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 6677fb911411ef48de1aa33f44bc1454229482a5
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — die meisten ihrer Nutzungen in den Anfangstagen waren auf isolierte Skriptaufgaben beschränkt, die ein wenig Interaktivität zu Ihren Webseiten hinzufügten, wo nötig, sodass große Skripte im Allgemeinen nicht benötigt wurden. Spulen Sie einige Jahre vor und wir haben nun vollständige Anwendungen, die in Browsern mit einer Menge JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird (z. B. {{Glossary("Node.js", "Node.js")}}).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere auf [CommonJS](https://en.wikipedia.org/wiki/CommonJS) und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) basierende Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilation erforderlich ist. Dies kann nur von Vorteil sein — Browser können das Laden von Modulen optimieren und es effizienter gestalten, als eine Bibliothek zu verwenden und all diese zusätzlichen Client-seitigen Verarbeitungen und zusätzlichen Rundreisen zu tun. Es macht Bundler wie webpack jedoch nicht obsolet — Bundler leisten immer noch gute Arbeit, indem sie Code in angemessen große Stücke aufteilen und andere Optimierungen wie Minifizierung, Codebereinigung und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden können. Diese Beispiele demonstrieren eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Element/canvas)-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber anzeigen).

Diese sind recht trivial, wurden jedoch bewusst einfach gehalten, um Module klar zu demonstrieren.

> [!NOTE]
> Wenn Sie die Beispiele herunterladen und lokal ausführen möchten, müssen Sie sie über einen lokalen Webserver betreiben.

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

Die zwei Module des Verzeichnisses "modules" werden unten beschrieben:

- `canvas.js` — enthält Funktionen im Zusammenhang mit der Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines umschließenden [`<div>`](/de/docs/Web/HTML/Element/div) mit einer angegebenen ID, die selbst in ein angegebenes übergeordnetes Element eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in ein angegebenes Wrapper-Element eingefügt wird und zur Ausgabe von Berichterstellungsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine spezifische Berichterstellungsliste, gegebenenfalls mit ihrer Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine spezifische Berichterstellungsliste, gegebenenfalls mit ihrer Länge.

### Nebenbemerkung — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die `.mjs`-Erweiterung verwendet. [V8's Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist für die Klarheit gut, d. h. es macht deutlich, welche Dateien Module sind und welche normale JavaScript-Dateien sind.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeitumgebungen wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben jedoch entschieden, weiterhin `.js` zu verwenden, zumindest im Moment. Um Module korrekt in einem Browser zum Laufen zu bringen, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn Sie dies nicht tun, erhalten Sie einen strengen MIME-Typ-Überprüfungsfehler in der Art von "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ" und der Browser wird Ihr JavaScript nicht ausführen. Die meisten Server setzen bereits den korrekten Typ für `.js`-Dateien, aber noch nicht für `.mjs`-Dateien. Server, die bereits `.mjs`-Dateien korrekt bereitstellen, umfassen [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden, oder wenn Sie dies nicht tun, aber wissen, was Sie tun, und Zugang haben (d. h. Sie können Ihren Server so konfigurieren, dass er den korrekten [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch Verwirrung stiften, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht selbst kontrollieren, oder wenn Sie Dateien zur öffentlichen Verwendung bereitstellen, wie wir hier tun.

Zu Lern- und Portabilitätszwecken haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Ihnen die Klarheit des Einsatzes von `.mjs` für Module im Vergleich zur Verwendung von `.js` für "normale" JavaScript-Dateien wirklich wichtig ist, Sie jedoch nicht auf das oben beschriebene Problem stoßen möchten, können Sie immer `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen.
- Das Attribut `<script type="module">` wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie unten zu sehen ist.

## Exportieren von Modulfunktionen

Das erste, was Sie tun müssen, um auf Modulfunktionen zuzugreifen, ist, sie zu exportieren. Das erfolgt mit dem {{jsxref("Statements/export", "export")}}-Statement.

Der einfachste Weg, es zu verwenden, besteht darin, es vor jedes Element zu setzen, das Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Top-Level-Elemente sein: zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, eine einzelne Exportanweisung am Ende Ihrer Moduldaten zu verwenden, gefolgt von einer durch Komma getrennten Liste der Funktionen, die Sie exportieren möchten, eingeklammert in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Funktionen in Ihr Skript importieren

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Der einfachste Weg, dies zu tun, sieht wie folgt aus:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Komma getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt von dem _Modulspezifizierer_.

Der _Modulspezifizierer_ stellt eine Zeichenfolge bereit, die die JavaScript-Umgebung zu einem Pfad zur Moduldaten auflösen kann.
In einem Browser könnte dies ein relativer Pfad zum Stamm des Standorts sein, was für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch stattdessen die Punkt (`.`)-Syntax, um "den aktuellen Speicherort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert immer noch, wenn Sie es an einen anderen Ort in der Verzeichnishierarchie der Website verschieben.

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
> In einigen Modulsystemen können Sie einen Modulspezifizierer wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifizierern kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#module_mit_importkarten_importieren) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie verwenden, als wären sie im selben Modul definiert. Das folgende Beispiel wurde in `main.js` unter den Importzeilen gefunden:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie bei `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert, neu zugewiesen werden. Siehe das [`import`-Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Module mit Importkarten importieren

Oben haben wir gesehen, wie ein Browser ein Modul mithilfe eines Modulspezifizierers importieren kann, der entweder eine absolute URL ist oder eine relative URL, die anhand der Basis-URL des Dokuments aufgelöst wurde:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern, stattdessen fast jeden Text, den sie möchten, im Modulspezifizierer beim Importieren eines Moduls zu verwenden; die Karte liefert einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports`-Schlüssel in der folgenden Importkarte ein JSON-Objekt für die "Modulspezifiziererkarte", bei dem die Eigenschaftenamen als Modulspezifizierer verwendet werden können und die entsprechenden Werte ersetzt werden, wenn der Browser die Modul-URL auflöst.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URLs unter Verwendung der [Basis-URL](/de/docs/Web/HTML/Element/base) des Dokuments, das die Importkarte enthält, aufgelöst.

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

Die Importkarte wird mithilfe eines [JSON-Objekts](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements mit dem `type`-Attribut, das auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt ist, definiert.
Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird — die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie jetzt die obigen Eigenschaftsnamen als Modulspezifizierer verwenden.
Wenn auf dem Modulspezifizierer-Schlüssel kein Schrägstrich folgt, wird der gesamte Modulspezifizierer-Schlüssel abgeglichen und ersetzt.
Beispielsweise verwenden wir unten einfache Modulnamen und remappen eine URL zu einem anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifizierer einen nachgestellten Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfadpräfix" abgeglichen.
Dies ermöglicht die Neuzuordnung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifizierer darstellen.
Ein Modulspezifizierer wie `shapes/circle/` könnte etwa mit den Modulspezifiziererschlüsseln `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) übereinstimmenden Modulspezifiziererschlüssel.

Importkarten ermöglichen es, Module mit einfachen Modulnamen zu importieren (wie in Node.js) und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl es oben nicht gezeigt ist, ermöglichen sie es auch, bestimmte Versionen einer Bibliothek basierend auf dem Pfad des Skripts, das das Modul importiert, zu importieren.
Im Allgemeinen ermöglichen sie es Entwicklern, ergonomischeren Importcode zu schreiben und die Verwaltung der verschiedenen Versionen und Abhängigkeiten der durch eine Seite verwendeten Module zu vereinfachen.
Dies kann den Aufwand verringern, der erforderlich ist, um dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die verschiedenen oben beschriebenen Funktionen.

### Funktionsüberprüfung

Sie können die Unterstützung für Importkarten mithilfe der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) überprüfen (die selbst weitgehend unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module als einfache Namen importieren

In einigen JavaScript-Umgebungen, wie Node.js, können Sie einfache Namen für den Modulspezifizierer verwenden.
Dies funktioniert, weil die Umgebung Modulnamen in eine Standardposition im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um einfache Namen im Browser zu verwenden, benötigen Sie eine Importkarte, die die Informationen bereitstellt, die der Browser benötigt, um Modulspezifizierer in URLs aufzulösen (JavaScript wird einen `TypeError` werfen, wenn es versucht, einen Modulspezifizierer zu importieren, der nicht in eine Modulspeicherort aufgelöst werden kann).

Im Folgenden sehen Sie eine Karte, die einen `square`-Modulspezifiziererschlüssel definiert, der in diesem Fall zu einem relativen Adresswert abgebildet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen einfachen Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Modulpfade neu zuordnen

Eingaben in Modulspezifiziererkarte, bei denen sowohl der Spezifiziererschlüssel als auch sein zugeordneter Wert einen nachgestellten Schrägstrich (`/`) haben, können als Pfadpräfix verwendet werden.
Dies ermöglicht die Neuzuordnung eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um die Arbeit mit "Paketen und Modulen" zu emulieren, wie Sie es möglicherweise im Node-Ökosystem sehen.

> [!NOTE]
> Der nachgestellte `/` zeigt an, dass der Modulspezifiziererschlüssel als _Teil_ eines Modulspezifizierers ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifiziererschlüssel abgleichen (und ihn ersetzen).

#### Modulpakete

Die folgende JSON-Importkarten-Definition ordnet `lodash` als einfachen Namen zu und das Modulspezifiziererpräfix `lodash/` dem Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mithilfe des einfachen Namens als auch Module darin (mithilfe der Pfadzuordnung) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten dafür einen einfachen Modulspezifiziererschlüssel erstellen, wie `lodash/fp`, anstatt den Pfad zu verwenden.
Dies kann für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Neuzuordnung

Ein Modulspezifiziererschlüssel muss kein Pfad sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einem Ressourcen hat, mit Ihren eigenen lokalen Ressourcen neu zuordnen möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module für Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Infolgedessen kann eine komplexe Anwendung dasselbe Modul unter mehreren verschiedenen Versionen importieren, in verschiedenen Bereichen des Modulgraphen, aber Benutzer brauchen sich darüber nicht den Kopf zu zerbrechen.

> [!NOTE]
> Sie können auch Versionsverwaltung mithilfe von relativen Pfaden erreichen, aber dies ist suboptimal, weil dies unter anderem eine bestimmte Struktur auf Ihr Projekt erzwingt und Sie daran hindert, einfache Modulnamen zu verwenden.

Mit Importkarten können Sie ähnlich mehrere Versionen von Abhängigkeiten in Ihrer Anwendung haben und auf sie unter demselben Modulspezifizierer verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifizierer-Karten bereitzustellen, die je nach dem Pfad des Skripts verwendet werden, das den Import durchführt.
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

Mit dieser Zuordnung wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert.
Die Karte in `imports` wird als Fallback verwendet, wenn es keine passende Scoper in der gescopten Karte gibt oder die passenden Scopes keinen passenden Spezifizierer enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht übereinstimmenden Scope-Pfad importiert wird, dann wird die Modulspezifizierer-Karte in `imports` stattdessen verwendet, das passend auf die Version in `/node_modules/cool-module/index.js` abbildet.

Beachtest, dass der Pfad, der verwendet wird, um einen Scope zu wählen, die Art und Weise, wie die Adresse aufgelöst wird, nicht beeinflusst.
Der Wert im angegebenen Pfad muss nicht mit dem Scopes-Pfad übereinstimmen, und relative Pfade werden weiterhin zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Gerade bei Modulspezifizierer-Karten können Sie viele Scope-Schlüssel haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Scopes mit dem Referrer-URL übereinstimmen, wird zuerst der spezifischste Scope-Pfad auf Übereinstimmung überprüft (der längste Scopes-Schlüssel).
Wenn es dafür keinen passenden Spezifizierer gibt, fällt der Browser auf den nächsten spezifischsten zutreffenden gescopten Pfad zurück und so weiter.
Wenn es in keinem der passenden Scopes einen passenden Spezifizierer gibt, überprüft der Browser die Modulspezifizierer-Karte im `imports`-Schlüssel auf eine Übereinstimmung.

### Verbesserung des Cachings durch Entfernen von Hashes in Dateinamen

Skriptdateien, die von Websites verwendet werden, haben häufig Hash-Namen, um das Caching zu erleichtern.
Der Nachteil dieses Ansatzes besteht darin, dass, wenn sich ein Modul ändert, alle Module, die es mit seinem Hash-Dateinamen importieren, ebenfalls aktualisiert/neu generiert werden müssen.
Dies führt möglicherweise zu einer Kaskade von Aktualisierungen, was ressourcenverschwendend ist.

Importkarten bieten eine bequeme Lösung für dieses Problem.
Statt sich auf spezifische Hash-Dateinamen zu verlassen, greifen Anwendungen und Skripte stattdessen auf eine nicht-gehashte Version des Modulnamens (Adresse) zurück.
Eine Importkarte wie die unten bereitgestellte bietet dann eine Zuordnung zu der tatsächlichen Skriptdatendatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich der nach dem Hash im Dateinamen ebenfalls. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen keine Source des JavaScript-Codes, der davon abhängt, aktualisieren, weil der Spezifizierer im Import-Statement sich nicht ändert.

## Laden von Nicht-JavaScript-Ressourcen

Eine aufregende Funktion, die eine vereinheitlichte Modularchitektur mit sich bringt, ist die Fähigkeit, Nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig nimmt der Browser an, dass die Ressource JavaScript ist, und wird einen Fehler auslösen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Arten von Ressourcen zu importieren, verwenden Sie die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser führen auch eine Validierung des Modultyps durch und werden fehlschlagen, wenn beispielsweise `./data.json` keine JSON-Datei ist. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie lediglich Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert jetzt als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwenden des Moduls auf Ihr HTML

Jetzt müssen wir das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie das Anwenden eines regulären Skripts auf eine Seite, mit einigen bemerkenswerten Unterschieden.

Zuerst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einschließen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können das Modulskript auch direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den Hauptteil des `<script>`-Elements einfügen:

```html
<script type="module">
  /* JavaScript module code here */
</script>
```

Sie können `import`- und `export`-Anweisungen nur in Modulen verwenden, nicht in regulären Skripten. Ein Fehler wird ausgelöst, wenn Ihr `<script>`-Element nicht das `type="module"`-Attribut hat und versucht, andere Module zu importieren. Zum Beispiel:

```html example-bad
<script>
  import _ from "lodash"; // SyntaxError: import declarations may only appear at top level of a module
  // ...
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten alle Ihre Module im Allgemeinen in separaten Dateien definieren. Inline in HTML deklarierte Module können nur andere Module importieren, aber alles, was sie exportieren, wird nicht von anderen Modulen zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokale Tests achten — wenn Sie versuchen, die HTML-Datei lokal zu laden (d. h. mit einer `file://`-URL), stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten von Skriptabschnitten sehen, die in Modulen im Gegensatz zu klassischen Skripten definiert sind. Dies liegt daran, dass Module automatisch in {{jsxref("Strict_mode", "Striktem Modus", "", 1)}} laufen.
- Es besteht keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Element/script#attributes)) beim Laden eines Modulskripts zu verwenden; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zu guter Letzt, um das klarzustellen — Modulfunktionen werden in den Gültigkeitsbereich eines einzelnen Skripts importiert — sie stehen nicht im globalen Gültigkeitsbereich zur Verfügung. Daher können Sie auf importierte Funktionen nur im Skript, in das sie importiert wurden, zugreifen, und sie werden nicht verfügbar sein von der JavaScript-Konsole aus. Sie erhalten dennoch Syntaxfehler, die in den DevTools angezeigt werden, aber Sie werden nicht in der Lage sein, einige der erwarteten Debugging-Techniken zu verwenden.

Moduldefinierte Variablen sind im Modul-Umfang, es sei denn, sie werden explizit auf das globale Objekt angewendet. Andererseits sind global definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben den folgenden Code:

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

Die Seite würde dennoch `Hello` darstellen, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht notwendigerweise eine Import-/Exportanweisung benötigt — das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, etc.) wurde beim Export mit seinem Namen bezeichnet, und dieser Name wurde beim Import verwendet.

Es gibt auch einen Exporttyp namens **Standardexport** — dieser wurde entwickelt, um es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch, dass JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen interoperieren (wie es in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff schön erklärt wird; suchen Sie nach "Standardexporte").

Lassen Sie uns ein Beispiel betrachten, während wir erklären, wie es funktioniert. In unserem basic-modules `square.js` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, also schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` der Funktion voranstellen und es als anonyme Funktion definieren, wie dies:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Wiederum beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` dieser ist. Die obige Zeile ist im Grunde ein Kürzel für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die as-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Form-Zeichenmodule gut zu funktionieren. Aber was passiert, wenn wir ein Modul hinzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst? Diese Formen würden wahrscheinlich auch assoziierte Funktionen wie `draw()`, `reportArea()` usw. haben; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dieselbe oberste Modulebene zu importieren, hätten wir Konflikte und Fehler.

Zum Glück gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Namen zu ändern, den Sie für eine Funktion innerhalb des obersten Moduls verwenden werden.

Zum Beispiel würden beide der folgenden das Gleiche tun, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis sehen Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir die `circle.js`- und `triangle.js`-Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu berichten.

Innerhalb jedes dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und somit hat jeder dieselbe `export`-Anweisung am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Beim Import in `main.js`, wenn wir versuchen würden, zu verwenden

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" (Firefox) werfen.

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

Beachten Sie, dass Sie das Problem auch in den Moduldaten beheben könnten, z. B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie wählen, liegt an Ihnen; es macht jedoch mehr Sinn, Ihren Modulcode unverändert zu lassen und die Änderungen in den Imports vorzunehmen. Dies ist besonders sinnvoll, wenn Sie aus Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die oben beschriebene Methode funktioniert gut, ist aber etwas unordentlich und umständlich. Eine noch bessere Lösung ist es, die Funktionen jedes Moduls in einem Modulobjekt zu importieren. Die folgende Syntaxform macht das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle Exporte, die innerhalb von `module.js` verfügbar sind, und macht sie als Mitglieder eines Objektes `Module` verfügbar, wodurch es effektiv seinen eigenen Namensraum erhält. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Wieder einmal schauen wir uns ein echtes Beispiel an. Wenn Sie zu unserem [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unterhalb des angegebenen Namen des Objektes zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Also können Sie nun den Code genauso wie zuvor schreiben (solange Sie die Objektnamen dort hinzufügen, wo nötig), und die Importe sind viel ordentlicher.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Option, um Konflikte in Ihrem Code zu vermeiden, und besonders nützlich, wenn Ihr Modulkode bereits in einem objektorientierten Stil geschrieben wurde.

Sie können ein Beispiel für unser Form-Zeichen-Modul, das mit ES-Klassen neu geschrieben wurde, in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis sehen. Zum Beispiel enthält die Datei [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) jetzt all ihre Funktionalität in einer einzigen Klasse:

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

In [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir es auf diese Weise:

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

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie könnten mehrere Ebenen von Abhängigkeiten haben, bei denen Sie die Dinge vereinfachen möchten, indem Sie mehrere Untermodule in ein übergeordnetes Modul kombinieren. Dies ist mit der Export-Syntax der folgenden Formen im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Ein Beispiel hierfür finden Sie in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem vorherigen Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das die gesamte Funktionalität von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses mit dem Namen `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export von der gleichen Form, z. B.

```js
export { Square };
```

Als nächstes folgt der Aggregationsteil. Innerhalb von [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) schließen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte aus den einzelnen Untermodule und machen sie effektiv vom Modul `shapes.js` aus verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Grunde genommen durch die Datei umgeleitet und existieren dort nicht wirklich, sodass Sie dort keinen nützlichen verwandten Code schreiben können.

Also können wir im `main.js`-Skript auf alle drei Modulklassen zugreifen, indem wir

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

Eine neue Ergänzung zur Funktionalität von JavaScript-Modulen ist das dynamische Laden von Modulen. Dies ermöglicht Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat offensichtliche Leistungsvorteile; lesen Sie weiter und sehen Sie, wie es funktioniert.

Diese neue Funktionalität ermöglicht Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, den Pfad zum Modul als Parameter übergebend. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)) erfüllt wird und Ihnen Zugang zu den Exporten dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Hauptthread des Browsers sowie in Shared und Dedicated Workern erlaubt.
> Allerdings wird `import()` eine Ausnahme werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. Im [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports)-Verzeichnis haben wir ein weiteres Beispiel, das auf unserem Klassenbeispiel basiert. Dieses Mal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel lädt. Stattdessen beinhalten wir drei Buttons — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien vorgenommen — die Modulexporte bleiben wie zuvor.

In `main.js` haben wir eine Referenz auf jeden Button mit einer [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erfasst, z. B.:

```js
const squareBtn = document.querySelector(".square");
```

Dann hängen wir jedem Button einen Ereignis-Listener an, sodass, wenn er gedrückt wird, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass, weil die Erfüllung des Versprechens ein Modulobjekt zurückgibt, die Klasse dann ein Unterfeature des Objekts ist, daher müssen wir nun auf den Konstruktor mit `Module.` davor zugreifen, z. B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, selbst in Skriptumgebungen. Daher, wenn Sie einen bestehenden `<script>`-Tag in Ihrem HTML haben, der nicht `type="module"` hat, können Sie immer noch Code, der als Module verteilt ist, durch dynamisches Importieren wiederverwenden.

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

Top-Level-Await ist eine Funktion, die in Modulen verfügbar ist. Das bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Modulen, wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass Code bewertet werden kann, bevor er in übergeordneten Modulen verwendet wird, ohne jedoch Geschwistermodule am Laden zu hindern.

Lassen Sie uns ein Beispiel betrachten. Sie finden alle im Folgenden beschriebenen Dateien und Codes im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await)-Verzeichnis, das aus den vorherigen Beispielen erweitert wird.

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

Wir verwenden das `await`-Schlüsselwort, bevor wir die Konstante `colors` angeben, zum Exportieren. Das bedeutet, dass andere Module, die dieses Modul enthalten, warten, bis `colors` heruntergeladen und geparst wurde, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js)-Datei einfügen:

```js
import colors from "./modules/getColors.js";
import { Canvas } from "./modules/canvas.js";

const circleBtn = document.querySelector(".circle");

// …
```

Wir verwenden `colors` statt der zuvor verwendeten Strings, wenn wir unsere Formfunktionen aufrufen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es wird jedoch das Laden anderer Module nicht blockieren. Beispielsweise wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin laden, während `colors` abgerufen wird.

## Import-Deklarationen werden gehoben

Import-Deklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Modulcode verfügbar sind, noch bevor sie deklariert sind, und dass die Nebeneffekte des importierten Moduls produziert werden, bevor der Rest des Modulcodes beginnt zu laufen.

Zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` trotzdem funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird es als gute Praxis angesehen, alle Ihre Imports am Anfang des Codes zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren und so weiter. Dies bildet einen [gerichteten Graphen](https://de.wikipedia.org/wiki/Gerichteter_Graph), der als "Abhängigkeitsgraph" bezeichnet wird. Idealweise ist dieser Graph [azyklisch](https://de.wikipedia.org/wiki/Gerichteter_azyklischer_Graph). In diesem Fall kann der Graph mithilfe einer Tiefensuche ausgewertet werden.

Zyklen sind jedoch oft unvermeidlich. Zyklische Importe entstehen, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängt. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur abgerufen, wenn die Variable tatsächlich verwendet wird (was das [Live-Binding](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt uninitialisiert bleibt, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird während der Auswertung des Moduls weder `b` noch `a` tatsächlich gelesen, sodass der restliche Code wie gewohnt ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` produzieren. Dann, nach dem Timeout, stehen sowohl `a` als auch `b` zur Verfügung, sodass auch die beiden `console.log`-Anweisungen wie gewohnt ausgeführt werden.

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

Dies liegt daran, dass JavaScript bei der Auswertung von `a.js` zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. `b.js` verwendet jedoch `a`, das noch nicht verfügbar ist.

Auf der anderen Seite verläuft die Modulauswertung erfolgreich, wenn Sie den Code so ändern, dass `b` synchron, aber `a` asynchron verwendet wird:

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

Sie sollten normalerweise zyklische Importe in Ihrem Projekt vermeiden, weil sie Ihren Code fehleranfälliger machen. Einige gängige Zykleneliminationstechniken sind:

- Zusammenführen der beiden Module in ein Modul.
- Verschieben des gemeinsam genutzten Codes in ein drittes Modul.
- Verschieben von etwas Code von einem Modul zum anderen.

Zyklische Importe können jedoch auch auftreten, wenn Bibliotheken voneinander abhängig sind, was schwerer zu beheben ist.

## Isomorphe Module erstellen

Die Einführung von Modulen fördert das Javascript-Ökosystem, Code modular zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul gefunden, das SHA-Hashes für die Passwörter Ihrer Benutzer generiert. Können Sie es im Browser-Frontend verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: Es kommt darauf an.

Module haben nach wie vor Zugriff auf globale Variablen, wie zuvor demonstriert. Wenn das Modul globale Variablen wie `window` referenziert, kann es im Browser ausgeführt werden, aber es wird auf Ihrem Node.js-Server einen Fehler auslösen, weil `window` dort nicht verfügbar ist. Wenn der Code zwingend auf `process` zugreifen muss, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird häufig empfohlen, den Code "isomorph" zu machen — das heißt, dass er in jeder Laufzeitumgebung dasselbe Verhalten zeigt. Dies wird üblicherweise auf drei Arten erreicht:

- Trennen Sie Ihre Module in "Kern" und "Bindung". Für den "Kern" konzentrieren Sie sich auf die reine JavaScript-Logik wie das Berechnen des Hashs, ohne DOM-, Netzwerke- oder Dateizugriff, und machen Sie Dienstprogramme zugänglich. Im "Bindung"-Teil können Sie aus dem globalen Kontext lesen und schreiben. Beispielsweise könnte die "Browser-Bindung" wählen, den Wert aus einem Eingabefeld zu lesen, während die "Node-Bindung" ihn von `process.env` liest, aber Werte, die von beiden Orten stammen, werden an dieselbe Kernfunktion weitergeleitet und auf die gleiche Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Bindung, was normalerweise leichtgewichtig ist, platform-spezifisch sein muss.
- Überprüfen Sie, ob ein bestimmtes globales Objekt existiert, bevor Sie es verwenden. Beispielsweise, wenn Sie überprüfen, dass `typeof window === "undefined"` ist, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und auf den DOM nicht zugreifen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich am Ende dasselbe Verhalten erreichen ("isomorph"). Wenn es unmöglich ist, die gleiche Funktionalität zur Verfügung zu stellen oder wenn dies dazu führt, dass signifikante Massen an Code geladen werden, während ein Großteil davon ungenutzt bleibt, verwenden Sie besser unterschiedliche "Bindings" stattdessen.

- Verwenden Sie ein Polyfill, um ein Back-up für fehlende Funktionen bereitzustellen. Wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js erst ab Version 18 unterstützt wird, können Sie eine ähnliche API verwenden, wie die, die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellt wird. Sie können dies bedingt durch dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Der [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Angesichts des Trends zu Code-Wiederverwendbarkeit und Modularisierung werden Sie jedoch ermutigt, Ihren Code plattformübergreifend zu machen, damit er möglichst vielen Personen zugute kommen kann. Laufzeitumgebungen wie Node.js implementieren ebenfalls aktiv Web-APIs, wo dies möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlerbehebung

Hier sind einige Tipps, die Ihnen helfen könnten, wenn Sie Probleme haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, der Liste hinzuzufügen, wenn Sie mehr herausfinden!

- Wir haben dies zuvor erwähnt, aber zur Wiederholung: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` ist empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Überprüfungsfehler wie "Der Server antwortete mit einem Nicht-JavaScript MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d. h. mit einer `file://`-URL), werden Sie auf CORS-Fehler stoßen aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihre Tests über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem richtigen MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, könnten einige Betriebssysteme sie nicht erkennen oder versuchen, sie durch etwas anderes zu ersetzen. Beispielsweise haben wir festgestellt, dass macOS `.js` schweigend an `.mjs`-Dateien anhängt und dann die Dateierweiterung automatisch ausblendet. Alle .mjs-Dateien waren tatsächlich als `x.mjs.js` herausgekommen. Sobald wir die automatische Ausblendung von Dateierweiterungen deaktiviert und es darauf trainiert haben, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript-Module](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES-Module: Ein Cartoon-Tiefen-Tauchgang](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
