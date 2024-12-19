---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

Dieser Leitfaden bietet Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrund zu Modulen

JavaScript-Programme begannen ziemlich klein — in den frühen Tagen wurde es meist für isolierte Skriptaufgaben verwendet, um Ihren Webseiten bei Bedarf etwas Interaktivität zu verleihen. Daher waren große Skripte im Allgemeinen nicht notwendig. Einige Jahre später haben wir nun komplette Anwendungen, die in Browsern mit viel JavaScript laufen, sowie JavaScript, das in anderen Kontexten (z. B. {{Glossary("Node.js", "Node.js")}}) verwendet wird.

Komplexe Projekte benötigen einen Mechanismus, um JavaScript-Programme in separate Module zu unterteilen, die bei Bedarf importiert werden können. Node.js verfügt seit langem über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Verwendung von Modulen ermöglichen (z. B. andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfeatures nativ, ohne dass eine Transpilation erforderlich ist. Dies kann nur von Vorteil sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek zu verwenden und all diese zusätzlichen Client-seitigen Verarbeitungen und zusätzlichen Roundtrips durchzuführen. Es bedeutet nicht das Obsoletwerden von Bundlern wie webpack — Bundler leisten nach wie vor gute Arbeit beim Partitionieren von Code in vernünftig große Teile und können andere Optimierungen wie Minifizierung, Eliminierung von totem Code und Tree-Shaking durchführen.

## Einführung eines Beispiels

Um die Verwendung von Modulen zu demonstrieren, haben wir eine [Reihe von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden. Diese Beispiele zeigen eine Reihe von Modulen, die ein `<canvas>`-Element auf einer Webseite erstellen und dann verschiedene Formen auf der Leinwand zeichnen (und Informationen darüber berichten).

Diese sind ziemlich trivial, wurden jedoch absichtlich einfach gehalten, um Module klar zu demonstrieren.

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
> Alle Beispiele in diesem Leitfaden haben im Wesentlichen die gleiche Struktur; das oben sollte ziemlich vertraut werden.

Die zwei Module im Verzeichnis `modules` sind wie folgt beschrieben:

- `canvas.js` — enthält Funktionen zur Einrichtung der Leinwand:

  - `create()` — erstellt eine Leinwand mit einer angegebenen `width` und `height` innerhalb eines Wrappers `<div>` mit einer angegebenen ID, der selbst innerhalb eines angegebenen Elternelements eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die innerhalb eines angegebenen Wrapper-Elements eingefügt wird und zum Ausgeben von Berichtsdatensätzen verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:

  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf einer angegebenen Leinwand mit einer angegebenen Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichts-Liste, gegeben seine Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichts-Liste, gegeben seine Länge.

### Beiseite — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Quellen können Sie stattdessen die Erweiterung `.mjs` sehen. [V8 empfielt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche reguläres JavaScript sind.
- Es stellt sicher, dass Ihre Moduldateien von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst bei `.js` zu bleiben. Damit Module im Browser korrekt funktionieren, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header bereitstellt, der einen JavaScript-MIME-Typ wie `text/javascript` enthält. Wenn Sie das nicht tun, erhalten Sie einen strikten MIME-Typ-Prüfungsfehler nach dem Motto "Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet" und der Browser führt Ihr JavaScript nicht aus. Die meisten Server setzen bereits den richtigen Typ für `.js` Dateien, aber noch nicht für `.mjs` Dateien. Server, die `.mjs` Dateien bereits korrekt bereitstellen, sind [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Das ist in Ordnung, wenn Sie bereits eine solche Umgebung nutzen, oder wenn nicht, aber Sie wissen, was Sie tun, und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) für `.mjs` Dateien setzt). Es könnte jedoch Verwirrung stiften, wenn Sie nicht die Kontrolle über den Server haben, von dem Sie Dateien bereitstellen, oder wenn Sie Dateien zur öffentlichen Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Transportzwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich den Wert der Klarheit schätzen, `.mjs` für Module zu verwenden, im Gegensatz zu `.js` für „normale“ JavaScript-Dateien, aber dem oben beschriebenen Problem aus dem Weg gehen wollen, könnten Sie immer `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` umwandeln.

Es ist auch wert zu beachten, dass:

- Einige Tools möglicherweise nie `.mjs` unterstützen werden.
- Das `<script type="module">` Attribut verwendet wird, um anzugeben, wann auf ein Modul verwiesen wird, wie Sie unten sehen werden.

## Exportieren von Modulfunktionen

Das Erste, was Sie tun, um auf Modulfunktionen zuzugreifen, ist, sie zu exportieren. Dies geschieht durch die {{jsxref("Statements/export", "export")}}-Anweisung.

Am einfachsten ist es, sie vor alle Elemente zu stellen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen sich auf oberster Ebene befinden: Beispielsweise können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente zu exportieren, die Sie exportieren möchten, besteht darin, eine einzelne Export-Anweisung am Ende Ihrer Moduldatei zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie verwenden zu können. Die einfachste Methode ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifikator_.

Der _Modulspezifikator_ liefert eine Zeichenfolge, die die JavaScript-Umgebung in einen Pfad zur Moduldatei auflösen kann.
In einem Browser könnte dies ein Pfad relativ zum Stammverzeichnis der Website sein, der für unser `basic-modules` Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch die Punkt-Notation (`.`), um „den aktuellen Ort“ auszudrücken, gefolgt vom relativen Pfad zur Datei, die wir suchen. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad auszuschreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert weiterhin, wenn Sie es an eine andere Stelle in der Seitenhierarchie verschieben.

So zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird

```bash
./modules/square.js
```

Solche Zeilen können Sie in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifikator wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateierweiterung hat.
> Diese Art von Spezifikator kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_import-karten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie sie genauso verwenden, als wären sie im selben Datei definiert. Das folgende befindet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const` Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Objekteigenschaften ändern. Der Wert kann nur von dem Modul neu zugewiesen werden, das es exportiert. Siehe die [`import` Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Import-Karten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifikator importieren kann, der entweder eine absolute URL ist oder eine relative URL, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as squareName, draw } from "./shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

[Importkarten](/de/docs/Web/HTML/Element/script/type/importmap) ermöglichen es Entwicklern, fast beliebigen Text im Modulspezifikator anzugeben, wenn sie ein Modul importieren; die Karte liefert einen entsprechenden Wert, der den Text ersetzt, wenn die Modul-URL aufgelöst wird.

Zum Beispiel definiert der `imports` Schlüssel in der folgenden Importkarte ein "Modulspezifikator-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifikatoren verwendet werden können, und die entsprechenden Werte werden beim Auflösen der Modul-URL ersetzt.
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

Die Importkarte wird unter Verwendung eines [JSON-Objekts](/de/docs/Web/HTML/Element/script/type/importmap#import_map_json_representation) in einem `<script>`-Element mit dem `type` Attribut, das auf [`importmap`](/de/docs/Web/HTML/Element/script/type/importmap) gesetzt ist, definiert.
Es kann nur eine Importkarte im Dokument geben und da sie sowohl für statische als auch dynamische Importe verwendet wird, muss sie vor allen `<script>`-Elementen deklariert werden, die Module importieren.
Beachten Sie, dass die Importkarte nur auf das Dokument angewendet wird — die Spezifikation deckt nicht ab, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die obigen Eigenschaftsnamen als Modulspezifikatoren verwenden.
Wenn kein Schrägstrich am Ende des Modulspezifikatorkeys vorhanden ist, wird der gesamte Modulspezifikatorkey gematcht und ersetzt.
Zum Beispiel, unten matchen wir nackte Modulnamen und remappen eine URL für einen anderen Pfad.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifikator einen Schrägstrich am Ende hat, muss der Wert auch einen haben, und der Key wird als "Pfad-Präfix" gematcht.
Dies ermöglicht das Remapping ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Einträge in einer Importkarte gültige Matches für einen Modulspezifikator sind.
Zum Beispiel könnte ein Modulspezifikator von `shapes/circle/` die Modulspezifikatorkeys `shapes/` und `shapes/circle/` matchen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifikatorkey.

Importkarten erlauben es, Module mit nackten Modulnamen (wie in Node.js) zu importieren und ermöglichen es auch, Module aus Paketen zu simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, erlauben sie es auch, bestimmte Versionen einer Bibliothek zu importieren, basierend auf dem Pfad des Skripts, das das Modul importiert.
Im Allgemeinen ermöglichen sie es Entwicklern, ergonomischeren Import-Code zu schreiben und vereinfachen die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Seite verwendet werden.
Dies kann den Aufwand reduzieren, der erforderlich ist, um die gleichen JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.
Die folgenden Abschnitte erweitern die verschiedenen oben skizzierten Funktionen.

### Funktionsunterstützungsnachweis

Sie können die Unterstützung für Importkarten mit der [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) statischen Methode überprüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Module als reine Namen importieren

In einigen JavaScript-Umgebungen, wie z. B. Node.js, können Sie reine Namen für den Modulspezifikator verwenden.
Dies funktioniert, weil die Umgebung Modulnamen auf einen Standard-Standort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um reine Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, um Modulspezifikatoren in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn versucht wird, einen ungültigen Modulspezifikator auf ein Modul zu importieren).

Unten sehen Sie eine Karte, die einen `square` Modulspezifikatorkey definiert, der in diesem Fall auf einen relativen Adresswert abgebildet wird.

```html
<script type="importmap">
  {
    "imports": {
      "square": "./shapes/square.js"
    }
  }
</script>
```

Mit dieser Karte können wir jetzt einen reinen Namen verwenden, wenn wir das Modul importieren:

```js
import { name as squareName, draw } from "square";
```

### Modulpfade umleiten

Eintragungen in der Modulspezifikatorkarte, bei denen sowohl der Spezifikatorkey als auch der zugehörige Wert einen Schrägstrich (`/`) am Ende haben, können als Pfad-Präfix verwendet werden.
Dies ermöglicht das Umleiten eines ganzen Satzes von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um nachzuahmen, mit "Paketen und Modulen" zu arbeiten, wie Sie es im Node-Ökosystem sehen könnten.

> [!NOTE]
> Der Schrägstrich am Ende zeigt an, dass der Modulspezifikatorkey _als Teil_ eines Modulspezifikators ersetzt werden kann.
> Wenn dies nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifikatorkey matchen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkarten-Definition mappt `lodash` als einen reinen Namen und das Modulspezifikator-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (zum Dokumentenbasis-URL aufgelöst):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem reinen Namen als auch Module innerhalb davon (mit dem Pfad-Mapping) importieren:

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` oben ohne die `.js`-Dateiendung zu importieren, aber Sie müssten einen reinen Modulspezifikatorkey für diese Datei erstellen, wie z. B. `lodash/fp`, anstatt den Pfad zu verwenden.
Dies mag für nur ein Modul sinnvoll sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeines URL-Umleiten

Ein Modulspezifikatorkey muss kein Pfad sein — es kann auch eine absolute URL (oder ein relativ pfadähnlicher Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul, das absolute Pfade zu einem Ressourcort hat, mit Ihren eigenen lokalen Ressourcen umleiten möchten.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Abgegrenzte Module für die Versionsverwaltung

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager stellt sicher, dass jedes Modul von anderen Modulen und deren Abhängigkeiten getrennt ist.
Infolgedessen kann eine komplexe Anwendung dasselbe Modul mehrmals mit mehreren verschiedenen Versionen in verschiedenen Teilen des Modulgraphen einschließen, Benutzer müssen sich jedoch keine Gedanken über diese Komplexität machen.

> [!NOTE]
> Sie können auch die Versionsverwaltung mithilfe relativer Pfade erreichen, aber das ist suboptimal, da dies Ihrer Projektsstruktur eine bestimmte Struktur aufzwingt und Sie daran hindert, reine Modulnamen zu verwenden.

Importkarten ermöglichen es ähnlich, dass Sie mehrere Versionen von Abhängigkeiten in Ihrer Anwendung haben und auf sie mit demselben Modulspezifikator verweisen können.
Sie implementieren dies mit dem `scopes`-Key, der es Ihnen ermöglicht, Modulspezifikatorkarten bereitzustellen, die je nach Pfad des Skripts, das den Import ausführt, verwendet werden.
Das folgende Beispiel veranschaulicht dies.

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
Die Karte in `imports` wird als Fallback verwendet, wenn keine passende Umgrenzung in der umgrenzten Karte vorhanden ist oder die passenden Umgrenzungen keinen passenden Spezifikator enthalten. Zum Beispiel, wenn `cool-module` von einem Skript mit einem nicht passenden Umgrenzungspfad importiert wird, wird die Modulspezifikatorkarte in `imports` stattdessen verwendet, die auf die Version in `/node_modules/cool-module/index.js` abbildet.

Beachten Sie, dass der Pfad, der zur Auswahl einer Umgrenzung verwendet wird, keine Auswirkungen darauf hat, wie die Adresse aufgelöst wird.
Der Wert im zugeordneten Pfad muss nicht mit dem Umgrenzungspfad übereinstimmen, und relative Pfade werden immer noch zur Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

So wie bei Modulspezifikatorkarten können Sie viele schlüsselübergreifende Umgrenzungen haben, und diese können sich überschneidende Pfade enthalten.
Wenn mehrere Umgrenzungen die Referrer-URL matchen, wird der spezifischste (längste) Umgrenzungspfad zuerst auf ein passendes Spezifikatorkey überprüft.
Die Browser greifen auf den nächsten spezifischsten passenden umgrenzten Pfad zurück, wenn kein passender Spezifikator vorhanden ist, und so weiter.
Wenn kein passender Spezifikator in einer der passenden Umgrenzungen vorhanden ist, überprüft der Browser, ob es einen passenden Eintrag in der Modulspezifikatorkarte im `imports`-Key gibt.

### Caching verbessern, indem gehashte Dateinamen ausgemappt werden

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen zur Vereinfachung des Cachings.
Der Nachteil dieses Ansatzes ist, dass, wenn ein Modul sich ändert, alle Module, die es mit seinem gehashten Dateinamen importieren, ebenfalls aktualisiert/neugeneriert werden müssen.
Dies sorgt potenziell für eine Kaskade von Aktualisierungen, die auf Netzwerkressourcen verschwenderisch wirken.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf spezifische gehashte Dateinamen zu verlassen, hängen Anwendungen und Skripte stattdessen auf eine nicht-gehashte Version des Modulnamens (Adresse) ab.
Eine Importkarte wie die untenstehende bietet dann eine Mapping zur eigentlichen Skriptdatei.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch der Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls zu reflektieren.
Wir müssen den Quellcode eines von `dependency_script` abhängigen JavaScript-Codes nicht aktualisieren, da der Spezifikator in der Importanweisung nicht ändert.

## Laden von nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Fähigkeit, nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass die Ressource JavaScript ist, und wird einen Fehler auslösen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Importattribute](/de/docs/Web/JavaScript/Reference/Statements/import/with) Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und fehlschlagen, wenn z. B. `./data.json` nicht zu einer JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren wollen. Sobald erfolgreich importiert, können Sie den importierten Wert als normales JavaScript-Objekt oder `CSSStyleSheet`-Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Nun müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ähnelt sehr der Methode, mit der wir ein reguläres Skript auf eine Seite anwenden, jedoch mit einigen bemerkenswerten Unterschieden.

Zunächst müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Element/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden wir dies:

```html
<script type="module" src="main.js"></script>
```

Sie können auch das Skript des Moduls direkt in die HTML-Datei einbetten, indem Sie den JavaScript-Code in den `<script>`-Elementkörper einfügen:

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

Im Allgemeinen sollten Sie alle Ihre Module in separaten Dateien definieren. Inline in HTML deklarierte Module können nur andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Element/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich verkürzen, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokales Testen achten — wenn Sie versuchen, die HTML-Datei lokal (z. B. mit einer `file://` URL) zu laden, stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise unterschiedliches Verhalten bei Skriptabschnitten erhalten, die in Modulen im Gegensatz zu in klassischen Skripten definiert sind. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "strict mode", "", 1)}} verwenden.
- Es ist nicht erforderlich, das `defer`-Attribut (siehe [`<script>` attributes](/de/docs/Web/HTML/Element/script#attributes)) zu verwenden, wenn ein Modulskript geladen wird; Module werden automatisch verzögert.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Zuletzt, aber nicht zuletzt, lassen Sie uns dies klar machen — Modulfunktionen werden in den Umfang eines einzelnen Skripts importiert — sie sind nicht im globalen Bereich verfügbar. Daher können Sie nur im importierenden Skript auf die importierten Funktionen zugreifen und nicht z.B. auf sie in der JavaScript-Konsole zugreifen. Sie erhalten weiterhin Syntaxfehler, die in den Entwicklertools angezeigt werden, aber Sie werden nicht einige der Debugging-Techniken verwenden können, die Sie möglicherweise erwartet hatten zu verwenden.

Modul-definierte Variablen sind im Modul-Bereich, es sei denn, sie werden explizit an das globale Objekt angefügt. Auf der anderen Seite sind weltweit-definierte Variablen innerhalb des Moduls verfügbar. Zum Beispiel, gegeben den folgenden Code:

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

Die Seite würde immer noch `Hello` rendern, da die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch aus diesem Beispiel, dass ein Modul nicht unbedingt eine Import/Export-Anweisung benötigt — das einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standard-Exporte versus benannte Exporte

Die Features, die wir bisher exportiert haben, bestehen aus **benannten Exporten** — jedes Element (sei es eine Funktion, ein `const`, etc.) wurde beim Export mit seinem Namen referenziert, und dieser Name wurde auch beim Import verwendet.

Es gibt auch eine Art von Export, der **Standard-Export** genannt wird — dieser ist dafür konzipiert, es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul bereitgestellt wird, und hilft auch dabei, dass JavaScript-Module mit bestehenden CommonJS und AMD Modulsystemen interoperabel sind (wie es schön in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff erklärt wird; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem basic-modules `square.js` können Sie eine Funktion namens `randomSquare()` finden, die ein Quadrat mit einer zufälligen Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standard exportieren, daher schreiben wir am Ende der Datei Folgendes:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion voranstellen und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserem `main.js`-File importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Erneut: beachten Sie das Fehlen von geschweiften Klammern. Dies liegt daran, dass nur ein Standardexport pro Modul erlaubt ist, und wir wissen, dass `randomSquare` es ist. Die obige Zeile ist im Grunde genommen eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die `as`-Syntax zum Umbenennen exportierter Elemente wird unten im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Canvas-Formenzeichnungs-Module gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck beschäftigt? Diese Formen würden wahrscheinlich auch mit Funktionen wie `draw()`, `reportArea()`, etc. verbunden sein; wenn wir versuchen würden, verschiedene Funktionen mit demselben Namen in dasselbe Top-Level-Modul-File zu importieren, würden wir auf Konflikte und Fehler stoßen.

Glücklicherweise gibt es eine Reihe von Möglichkeiten, dieses Problem zu lösen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

In Ihren `import`- und `export`-Anweisungsklammern können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den Identifikationsnamen zu ändern, den Sie für eine Funktion im Top-Level-Modul verwenden werden.

So zum Beispiel würden beide der folgenden dasselbe tun, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming) Verzeichnis finden Sie dasselbe Modulsystem wie im vorherigen Beispiel, außer dass wir `circle.js` und `triangle.js` Module hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und zu berichten.

In jedem dieser Module haben wir Funktionen mit den gleichen Namen, die exportiert werden, und daher hat jedes dasselbe `export` statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir versuchen würden, diese in `main.js` zu verwenden:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

Der Browser würde einen Fehler werfen, wie "SyntaxError: redeclaration of import name" (Firefox).

Stattdessen müssen wir die Importe umbenennen, damit sie eindeutig sind:

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

Beachten Sie, dass Sie das Problem auch in den Moduldaten lösen könnten, z. B.

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, bleibt Ihnen überlassen, jedoch ist es möglicherweise sinnvoller, Ihren Modulcode unverändert zu lassen, und die Änderungen in den Importen vorzunehmen. Dies macht besonders Sinn, wenn Sie von Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellen eines Modulobjekts

Die obige Methode funktioniert in Ordnung, ist aber ein bisschen unordentlich und langwierig. Eine noch bessere Lösung besteht darin, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntaxform tut das:

```js
import * as Module from "./modules/module.js";
```

Dies erfasst alle in `module.js` verfügbaren Exporte und macht sie als Mitglieder eines Objekts `Module` verfügbar, was ihm effektiv seinen eigenen Namensraum gibt. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Schauen wir uns erneut ein echtes Beispiel an. Wenn Sie in unsere [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects) Verzeichnis gehen, sehen Sie dasselbe Beispiel wieder, aber umgeschrieben, um diese neue Syntax zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem Fall können Sie jetzt auf die Importe des Moduls unter dem angegebenen Objektnamen zugreifen, zum Beispiel:

```js
const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

Daher können Sie jetzt den Code genauso wie zuvor schreiben (solange Sie die Objektnamen bei Bedarf einschließen), und die Importe sind viel sauberer.

## Module und Klassen

Wie wir bereits angedeutet haben, können Sie auch Klassen exportieren und importieren; dies ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Ein Beispiel für unser Formenzeichenmodul, das mit ES-Klassen umgeschrieben wurde, finden Sie in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes) Verzeichnis. Zum Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js) Datei jetzt alle ihre Funktionalität in einer einzigen Klasse:

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

Drüben in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/main.js) importieren wir es folgendermaßen:

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

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Sie können mehrere Ebenen von Abhängigkeiten haben, bei denen Sie Dinge vereinfachen möchten, indem Sie mehrere Untermodule zu einem übergeordneten Modul kombinieren. Dies ist möglich, indem Sie die Export-Syntax der folgenden Formen im übergeordneten Modul verwenden:

```js
export * from "x.js";
export { name } from "x.js";
```

Ein Beispiel dazu finden Sie in unserem [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation) Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klasse-Beispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionalitäten von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis innerhalb des `modules`-Verzeichnisses namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel lautet:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in derselben Form, z. B.

```js
export { Square };
```

Als nächstes kommt der Aggregationsteil. Innerhalb [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir die folgenden Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese erfassen die Exporte aus den einzelnen Untermodule und machen sie effektiv aus dem `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die in `shapes.js` referenzierten Exporte werden im Grunde genommen durch die Datei umgeleitet und existieren nicht wirklich dort, daher können Sie keinen nützlichen verwandten Code innerhalb derselben Datei schreiben.

Daher können wir nun im `main.js` File auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

mit der folgenden einzelnen Zeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Modulladen

Eine neue Ergänzung zur Funktionalität von JavaScript-Modulen ist das dynamische Modulladen. Dies ermöglicht es Ihnen, Module nur dann dynamisch zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies bringt einige offensichtliche Leistungsvorteile; lassen Sie uns weiterlesen und sehen, wie es funktioniert.

Diese neue Funktionalität erlaubt es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen, wobei Sie den Pfad zum Modul als Parameter übergeben. Dies gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt erfüllt wird (siehe [Erstellen eines Modulobjekts](#erstellen_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Haupt-Thread des Browsers erlaubt sowie in geteilten und dedizierten Workern.
> `import()` wird jedoch einen Fehler werfen, wenn es in einem Service Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Lassen Sie uns ein Beispiel betrachten. Im Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel basierend auf unserem Klassenbeispiel. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen enthalten wir drei Schaltflächen — „Kreis“, „Quadrat“ und „Dreieck“ — die beim Drücken das erforderliche Modul dynamisch laden und es dann verwenden, um die entsprechende Form zu zeichnen.

In diesem Beispiel haben wir nur unsere [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html) und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js) Dateien geändert — die Modul-Exporte bleiben wie zuvor.

Drüben in `main.js` haben wir einen Verweis auf jede Schaltfläche mithilfe eines [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Aufrufs erfasst, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Dann haben wir jedem Button einen Ereignis-Listener zugewiesen, sodass, wenn sie gedrückt werden, das relevante Modul dynamisch geladen und verwendet wird, um die Form zu zeichnen:

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

Beachten Sie, dass der Klassenname, da die Versprechungserfüllung ein Modulobjekt zurückgibt, dann ein Unterfeature des Objekts wird, daher müssen wir nun auf den Konstruktor mit `Module.` vorangestellt zugreifen, z. B. `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, sogar in Skriptumgebungen. Wenn Sie also ein bestehendes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie immer noch Code wiederverwenden, der als Module verteilt ist, indem Sie ihn dynamisch importieren.

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

## Top-Level-Warte

Top-Level-Warte ist ein Feature, das in Modulen verfügbar ist. Dies bedeutet, dass das `await` Schlüsselwort verwendet werden kann. Es erlaubt Module, als große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu fungieren, was bedeutet, dass der Code vor der Verwendung in übergeordneten Modulen ausgewertet werden kann, jedoch ohne das Laden von Geschwistermodulen zu blockieren.

Lassen Sie uns ein Beispiel betrachten. Sie können alle Dateien und Codes, die in diesem Abschnitt beschrieben werden, im [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await) Verzeichnis finden, das auf den vorherigen Beispielen aufbaut.

Erstens werden wir unsere Farbpalette in einer separaten [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) Datei deklarieren:

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

Beachten Sie hier die letzte Exportzeile.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, um zu exportieren. Das bedeutet, dass alle anderen Module, die dieses enthalten, warten, bis `colors` heruntergeladen und geparst wurden, bevor sie es verwenden.

Lassen Sie uns dieses Modul in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einfügen:

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

Dies ist nützlich, weil der Code innerhalb von [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) ausgeführt wurde. Es blockiert jedoch nicht das Laden anderer Module. Zum Beispiel wird unser [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) Modul weiterhin geladen, während `colors` abgerufen wird.

## Importdeklarationen werden gehoben

Importdeklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet dies, dass die importierten Werte im Code des Moduls bereits verfügbar sind, bevor der Ort, der sie deklariert, erreicht ist, und dass die Seiteneffekte des importierten Moduls erzeugt werden, bevor der Rest des Modulcodes läuft.

Zum Beispiel, in `main.js`, würde das Importieren von `Canvas` in der Mitte des Codes immer noch funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Trotzdem ist es eine gute Praxis, alle Ihre Importe an der Spitze des Codes zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können wiederum andere Module importieren usw. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mithilfe einer Tiefensuche durchlaufen werden.

Zyklen sind jedoch oft unvermeidlich. Ein zyklischer Import entsteht, wenn Modul `a` Modul `b` importiert, aber `b` direkt oder indirekt von `a` abhängig ist. Zum Beispiel:

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variablen wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (was [Live-Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) geworfen.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird während der Modulauswertung weder `b` noch `a` tatsächlich gelesen, sodass der Rest des Codes normal ausgeführt wird und die beiden `export`-Deklarationen die Werte von `a` und `b` erzeugen. Dann, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, sodass die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt werden.

Ändern Sie den Code, um `a` synchron zu verwenden, schlägt die Modulauswertung fehl:

```js
// -- a.js (entry module) --
import { b } from "./b.js";

export const a = 2;

// -- b.js --
import { a } from "./a.js";

console.log(a); // ReferenceError: Cannot access 'a' before initialization
export const b = 1;
```

Der Grund dafür ist, dass `a.js` nicht ausgewertet werden kann, bevor `b.js`, die Abhängigkeit von `a.js`, ausgewertet wird. `b.js` verwendet jedoch `a`, welches zu diesem Zeitpunkt noch nicht verfügbar ist.

Ändern Sie den Code, um `b` synchron, aber `a` asynchron zu verwenden, wird die Modulauswertung erfolgreich sein:

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

Sie sollten zyklische Importe in Ihrem Projekt im Allgemeinen vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Techniken zur Zykluseliminierung sind:

- Die beiden Module zu einem zusammenfassen.
- Den gemeinsamen Code in ein drittes Modul verschieben.
- Einige Code von einem Modul in das andere verschieben.

Zyklische Importe können auch auftreten, wenn Bibliotheken voneinander abhängig sind, was schwerer zu lösen ist.

## Autorisierende „isomorphe“ Module

Die Einführung von Modulen ermutigt das JavaScript-Ökosystem, Code auf modulare Weise zu verteilen und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein Stück JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes Ihres Benutzerpassworts generiert. Können Sie es im Front-End-Browser verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort ist: das kommt darauf an.

Module haben immer noch Zugriff auf globale Variablen, wie bereits demonstriert. Wenn das Modul globale Variablen wie `window` referenziert, kann es zwar im Browser laufen, wird jedoch auf Ihrem Node.js-Server einen Fehler auslösen, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um funktional zu sein, kann es nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls zu maximieren, wird oft empfohlen, den Code „isomorph“ zu machen — das heißt, das gleiche Verhalten in jeder Laufzeitumgebung zu zeigen. Dies wird häufig auf drei Arten erreicht:

- Trennen Sie Ihre Module in „Kern“ und „Bindung“. Für den „Kern“ konzentrieren Sie sich auf reine JavaScript-Logik wie das Berechnen des Hashes, ohne jeglichen DOM-, Netzwerk- oder Dateizugriff, und bieten Sie Dienstprogrammfunktionen an. Für den „Bindungs“-Teil können Sie das globale Umfeld lesen und schreiben. Zum Beispiel könnte die „Browserbindung“ wählen, den Wert aus einem Eingabefeld zu lesen, während die „Node-Bindung“ ihn aus `process.env` lesen kann, aber Werte, die von einem beliebigen Ort gelesen werden, werden an dieselbe Kernfunktion weitergeleitet und auf die gleiche Weise behandelt. Der Kern kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur die Bindung, die normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Überprüfen Sie, ob ein bestimmter globaler Wert existiert, bevor Sie ihn verwenden. Zum Beispiel, wenn Sie prüfen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht den DOM lesen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten ("isomorph") enden. Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dies erfordert, dass große Mengen an Code geladen werden, während ein großer Teil ungenutzt bleibt, verwenden Sie besser unterschiedliche "Bindungen".

- Verwenden Sie ein Polyfill, um ein Fallback für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API) Funktion verwenden möchten, die nur seit v18 in Node.js unterstützt wird, können Sie eine ähnliche API verwenden, wie die von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellte. Sie können dies bedingt über dynamische Importe tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch, mit dem Trend zur Wiederverwendbarkeit und Modularisierung von Code, werden Sie ermutigt, Ihren Code plattformübergreifend zu machen, damit er von möglichst vielen Menschen genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo möglich, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind einige Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, die Liste zu erweitern, wenn Sie mehr entdecken!

- Wir erwähnten dies bereits, aber um es nochmals zu betonen: `.mjs` Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, andernfalls erhalten Sie einen strengen MIME-Typ-Prüfungsfehler wie „Der Server hat mit einem nicht-JavaScript-MIME-Typ geantwortet“.
- Wenn Sie versuchen, die HTML-Datei lokal (d. h. mit einer `file://` URL) zu laden, stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihr Testen über einen Server durchführen. GitHub pages sind ideal, da sie auch `.mjs` Dateien mit dem richtigen MIME-Typ bereitstellen.
- Da `.mjs` eine nicht-standardisierte Dateierweiterung ist, erkennen einige Betriebssysteme es möglicherweise nicht oder versuchen, es durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend `.js` an das Ende von `.mjs` Dateien anhängt und dann die Dateierweiterung automatisch verbirgt. So wurden alle unsere Dateien tatsächlich `x.mjs.js`. Sobald wir das automatische Ausblenden von Dateierweiterungen deaktivierten und es trainierten, `.mjs` zu akzeptieren, war es in Ordnung.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
