---
title: JavaScript-Module
slug: Web/JavaScript/Guide/Modules
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{Previous("Web/JavaScript/Guide/Internationalization")}}

Dieser Leitfaden gibt Ihnen alles, was Sie benötigen, um mit der JavaScript-Modulsyntax zu beginnen.

## Hintergrundinformationen zu Modulen

JavaScript-Programme begannen ziemlich klein — in den frühen Tagen wurde es hauptsächlich für isolierte Skriptaufgaben verwendet, um ein wenig Interaktivität zu Ihren Webseiten hinzuzufügen, wo nötig, daher waren große Skripte im Allgemeinen nicht erforderlich. Einige Jahre später haben wir nun vollständige Anwendungen, die in Browsern mit viel JavaScript ausgeführt werden, sowie JavaScript, das in anderen Kontexten verwendet wird ({{Glossary("Node.js", "Node.js")}}, zum Beispiel).

Komplexe Projekte erfordern einen Mechanismus, um JavaScript-Programme in separate Module aufzuteilen, die bei Bedarf importiert werden können. Node.js verfügt schon lange über diese Fähigkeit, und es gibt eine Reihe von JavaScript-Bibliotheken und -Frameworks, die die Nutzung von Modulen ermöglichen (zum Beispiel andere [CommonJS](https://en.wikipedia.org/wiki/CommonJS)- und [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)-basierte Modulsysteme wie [RequireJS](https://requirejs.org/), [webpack](https://webpack.js.org/) und [Babel](https://babeljs.io/)).

Alle modernen Browser unterstützen Modulfunktionen nativ, ohne dass eine Transpilierung erforderlich ist. Das kann nur eine gute Sache sein — Browser können das Laden von Modulen optimieren, was effizienter ist, als eine Bibliothek verwenden zu müssen, um all diese zusätzliche clientseitige Verarbeitung und zusätzliche Anfragen durchzuführen. Es macht jedoch Bundler wie webpack nicht obsolet — Bundler leisten immer noch gute Arbeit bei der Partitionierung von Code in angemessen große Stücke und sind in der Lage, weitere Optimierungen wie Minimierung, Entfernung von nicht genutztem Code und Tree-Shaking durchzuführen.

## Einführung eines Beispiels

Um die Nutzung von Modulen zu demonstrieren, haben wir ein [Set von Beispielen](https://github.com/mdn/js-examples/tree/main/module-examples) erstellt, die Sie auf GitHub finden. Diese Beispiele zeigen eine Reihe von Modulen, die ein [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas)-Element auf einer Webseite erstellen und dann (und Informationen darüber berichten) verschiedene Formen auf der Leinwand zeichnen.

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
> Alle Beispiele in diesem Leitfaden haben grundsätzlich die gleiche Struktur; das obige sollte ziemlich vertraut werden.

Die zwei Module im Verzeichnis `modules` werden unten beschrieben:

- `canvas.js` — enthält Funktionen, die mit der Einrichtung der Leinwand zu tun haben:
  - `create()` — erstellt eine Leinwand mit einer bestimmten `Breite` und `Höhe` innerhalb eines Wrappers [`<div>`](/de/docs/Web/HTML/Reference/Elements/div) mit einer bestimmten ID, die selbst in ein bestimmtes übergeordnetes Element eingefügt wird. Gibt ein Objekt zurück, das den 2D-Kontext der Leinwand und die ID des Wrappers enthält.
  - `createReportList()` — erstellt eine ungeordnete Liste, die in einem bestimmten Wrapper-Element eingefügt wird und zur Ausgabe von Berichterstellungsdaten verwendet werden kann. Gibt die ID der Liste zurück.

- `square.js` — enthält:
  - `name` — eine Konstante, die den String 'square' enthält.
  - `draw()` — zeichnet ein Quadrat auf eine angegebene Leinwand mit einer bestimmten Größe, Position und Farbe. Gibt ein Objekt zurück, das die Größe, Position und Farbe des Quadrats enthält.
  - `reportArea()` — schreibt die Fläche eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.
  - `reportPerimeter()` — schreibt den Umfang eines Quadrats in eine bestimmte Berichtsliste, basierend auf seiner Länge.

### Beiseite — .mjs versus .js

In diesem Artikel haben wir `.js`-Erweiterungen für unsere Moduldaten verwendet, aber in anderen Ressourcen sehen Sie möglicherweise die Erweiterung `.mjs` statt. [V8s Dokumentation empfiehlt dies](https://v8.dev/features/modules#mjs), zum Beispiel. Die angegebenen Gründe sind:

- Es ist gut für die Klarheit, d.h. es macht deutlich, welche Dateien Module sind und welche regulärer JavaScript-Code.
- Es stellt sicher, dass Ihre Moduldaten von Laufzeiten wie [Node.js](https://nodejs.org/api/esm.html#esm_enabling) und Build-Tools wie [Babel](https://babeljs.io/docs/options#sourcetype) als Modul geparst werden.

Wir haben uns jedoch entschieden, vorerst `.js` zu verwenden. Um Module im Browser korrekt zu verwenden, müssen Sie sicherstellen, dass Ihr Server sie mit einem `Content-Type`-Header ausliefert, der einen JavaScript MIME-Typ wie `text/javascript` enthält. Andernfalls erhalten Sie einen strengen MIME-Typ-Fehler wie "Der Server hat mit einem Nicht-Javascript-MIME-Typ geantwortet", und der Browser führt Ihr JavaScript nicht aus. Die meisten Server stellen den richtigen Typ für `.js`-Dateien bereits ein, jedoch noch nicht für `.mjs`-Dateien. Server, die `.mjs`-Dateien bereits korrekt bereitstellen, sind unter anderem [GitHub Pages](https://pages.github.com/) und [`http-server`](https://github.com/http-party/http-server#readme) für Node.js.

Dies ist in Ordnung, wenn Sie bereits eine solche Umgebung verwenden oder wenn nicht, Sie wissen, was Sie tun und Zugriff haben (d.h. Sie können Ihren Server so konfigurieren, dass er den richtigen [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) für `.mjs`-Dateien setzt). Es könnte jedoch zu Verwirrung führen, wenn Sie den Server, von dem Sie Dateien bereitstellen, nicht kontrollieren oder Dateien für die öffentliche Nutzung veröffentlichen, wie wir es hier tun.

Für Lern- und Portabilitätszwecke haben wir uns entschieden, bei `.js` zu bleiben.

Wenn Sie wirklich Wert auf die Klarheit legen, `.mjs` für Module zu verwenden, im Gegensatz zu `.js` für reguläre JavaScript-Dateien, aber das oben beschriebene Problem vermeiden möchten, könnten Sie `.mjs` während der Entwicklung verwenden und sie während Ihres Build-Schritts in `.js` konvertieren.

Es ist auch erwähnenswert, dass:

- Einige Tools möglicherweise niemals `.mjs` unterstützen.
- Das Attribut `<script type="module">` wird verwendet, um anzugeben, wann auf ein Modul verwiesen wird, wie unter [Anwenden des Moduls auf Ihr HTML](#anwendung_des_moduls_auf_ihr_html) beschrieben.

## Exportieren von Modulfunktionen

Der erste Schritt, um Zugriff auf Modulfunktionen zu erhalten, ist deren Export. Dies wird mit der {{jsxref("Statements/export", "export")}}-Anweisung durchgeführt.

Die einfachste Möglichkeit, es zu verwenden, besteht darin, es vor alle Elemente zu setzen, die Sie aus dem Modul exportieren möchten, zum Beispiel:

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}
```

Sie können Funktionen, `var`, `let`, `const` und — wie wir später sehen werden — Klassen exportieren. Sie müssen Top-Level-Elemente sein: Zum Beispiel können Sie `export` nicht innerhalb einer Funktion verwenden.

Eine bequemere Möglichkeit, alle Elemente, die Sie exportieren möchten, zu exportieren, besteht darin, am Ende Ihrer Moduldaten eine einzige Exportanweisung zu verwenden, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie exportieren möchten, eingeschlossen in geschweifte Klammern. Zum Beispiel:

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importieren von Funktionen in Ihr Skript

Sobald Sie einige Funktionen aus Ihrem Modul exportiert haben, müssen Sie sie in Ihr Skript importieren, um sie nutzen zu können. Der einfachste Weg, dies zu tun, ist wie folgt:

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

Sie verwenden die {{jsxref("Statements/import", "import")}}-Anweisung, gefolgt von einer durch Kommas getrennten Liste der Funktionen, die Sie importieren möchten, eingeschlossen in geschweifte Klammern, gefolgt vom Schlüsselwort `from`, gefolgt vom _Modulspezifikator_.

Der _Modulspezifikator_ liefert einen String, den die JavaScript-Umgebung in einen Pfad zur Moduldaten umwandeln kann.
In einem Browser könnte dies ein relativer Pfad zum Site-Stamm sein, der für unser `basic-modules`-Beispiel `/js-examples/module-examples/basic-modules` wäre.
Hier verwenden wir jedoch die Punkt-Syntax (`.`), um "den aktuellen Ort" zu bedeuten, gefolgt vom relativen Pfad zu der Datei, die wir finden möchten. Dies ist viel besser, als jedes Mal den gesamten absoluten Pfad zu schreiben, da relative Pfade kürzer sind und die URL portabel machen — das Beispiel funktioniert auch, wenn Sie es an einen anderen Ort in der Site-Hierarchie verschieben.

Zum Beispiel:

```bash
/js-examples/module-examples/basic-modules/modules/square.js
```

wird zu

```bash
./modules/square.js
```

Sie können solche Zeilen in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/basic-modules/main.js) in Aktion sehen.

> [!NOTE]
> In einigen Modulsystemen können Sie einen Modulspezifikator wie `modules/square` verwenden, der kein relativer oder absoluter Pfad ist und keine Dateiendung hat.
> Diese Art von Spezifikator kann in einer Browserumgebung verwendet werden, wenn Sie zuerst eine [Importkarte](#importieren_von_modulen_mit_importkarten) definieren.

Sobald Sie die Funktionen in Ihr Skript importiert haben, können Sie diese genauso verwenden, als wären sie im selben File definiert. Das Folgende findet sich in `main.js`, unterhalb der Importzeilen:

```js
const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square.length, reportList);
reportPerimeter(square.length, reportList);
```

> [!NOTE]
> Die importierten Werte sind schreibgeschützte Ansichten der exportierten Funktionen. Ähnlich wie `const`-Variablen können Sie die importierte Variable nicht neu zuweisen, aber Sie können weiterhin Eigenschaften von Objektwerten ändern. Der Wert kann nur vom Modul, das ihn exportiert hat, neu zugewiesen werden. Siehe die [`import` Referenz](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) für ein Beispiel.

## Importieren von Modulen mit Importkarten

Oben haben wir gesehen, wie ein Browser ein Modul mit einem Modulspezifikator importieren kann, der entweder eine absolute URL oder eine relative URL ist, die mit der Basis-URL des Dokuments aufgelöst wird:

```js
import { name as circleName } from "https://example.com/shapes/circle.js";
import { name as squareName, draw } from "./shapes/square.js";
```

[Importkarten](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) erlauben es Entwicklern, fast jeden Text, den sie wollen, im Modulspezifikator beim Importieren eines Moduls zu spezifizieren; die Karte liefert einen entsprechenden Wert, der den Text beim Auflösen der Modul-URL ersetzt.

Zum Beispiel definiert der `imports`-Schlüssel in der Importkarte unten ein "Modulspezifikator-Karten"-JSON-Objekt, bei dem die Eigenschaftsnamen als Modulspezifikatoren verwendet werden können, und die entsprechenden Werte beim Auflösen der Modul-URL ersetzt werden.
Die Werte müssen absolute oder relative URLs sein.
Relative URLs werden zu absoluten URL-Adressen aufgelöst, wobei die [Basis-URL](/de/docs/Web/HTML/Reference/Elements/base) des Dokuments verwendet wird, das die Importkarte enthält.

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

Die Importkarte wird mit einem [JSON-Objekt](/de/docs/Web/HTML/Reference/Elements/script/type/importmap#import_map_json_representation) innerhalb eines `<script>`-Elements definiert, bei dem das `type`-Attribut auf [`importmap`](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) gesetzt ist.
Beachten Sie, dass eine Importkarte nur auf das Dokument angewendet wird — die Spezifikation behandelt nicht, wie eine Importkarte in einem Worker- oder Worklet-Kontext angewendet wird. <!-- https://github.com/WICG/import-maps/issues/2 -->

Mit dieser Karte können Sie nun die obigen Eigenschaftsnamen als Modulspezifikatoren verwenden.
Wenn im Modulspezifikator-Schlüssel kein Schluss-Schrägstrich vorhanden ist, wird der gesamte Modulspezifikator-Schlüssel abgeglichen und ersetzt.
Beispielsweise stimmen wir unten Übereinstimmungen von nackten Modulnamen ab und mappen eine URL auf einen anderen Pfad um.

```js
// Bare module names as module specifiers
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// Remap a URL to another URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";
```

Wenn der Modulspezifikator einen Schluss-Schrägstrich hat, muss der Wert ebenfalls einen haben, und der Schlüssel wird als "Pfad-Präfix" behandelt.
Dies ermöglicht die Umleitung ganzer Klassen von URLs.

```js
// Remap a URL as a prefix ( https://example.com/shapes/)
import { name as squareNameFour } from "https://example.com/shapes/moduleshapes/square.js";
```

Es ist möglich, dass mehrere Schlüssel in einer Importkarte gültige Übereinstimmungen für einen Modulspezifikator sind.
Wenn ein Modulspezifikator beispielsweise `shapes/circle/` lautet, könnte er auf die Modulspezifikatorschlüssel `shapes/` und `shapes/circle/` übereinstimmen.
In diesem Fall wählt der Browser den spezifischsten (längsten) passenden Modulspezifikatorschlüssel aus.

Importkarten ermöglichen es, Module mit nackten Modulnamen zu importieren (wie in Node.js), und können auch das Importieren von Modulen aus Paketen simulieren, sowohl mit als auch ohne Dateierweiterungen.
Obwohl oben nicht gezeigt, erlauben sie auch, bestimmte Versionen einer Bibliothek zu importieren, basierend auf dem Pfad des Skripts, das das Modul importiert.
Sie lassen Entwickler im Allgemeinen ergonomischeren Importcode schreiben und erleichtern die Verwaltung der verschiedenen Versionen und Abhängigkeiten von Modulen, die von einer Website verwendet werden.
Dies kann den Aufwand verringern, dieselben JavaScript-Bibliotheken sowohl im Browser als auch auf dem Server zu verwenden.

Die folgenden Abschnitte erweitern die oben beschriebenen verschiedenen Funktionen.

### Feature-Erkennung

Sie können die Unterstützung von Importkarten mit der statischen Methode [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) prüfen (die selbst breit unterstützt wird):

```js
if (HTMLScriptElement.supports?.("importmap")) {
  console.log("Browser supports import maps.");
}
```

### Importieren von Modulen als nackte Namen

In einigen JavaScript-Umgebungen, wie z.B. Node.js, können Sie nackte Namen für den Modulspezifikator verwenden.
Das funktioniert, weil die Umgebung Modulnamen auf einen Standardstandort im Dateisystem auflösen kann.
Zum Beispiel könnten Sie die folgende Syntax verwenden, um das "square"-Modul zu importieren.

```js
import { name, draw, reportArea, reportPerimeter } from "square";
```

Um nackte Namen in einem Browser zu verwenden, benötigen Sie eine Importkarte, die dem Browser die Informationen liefert, die er benötigt, um Modulspezifikatoren in URLs aufzulösen (JavaScript wirft einen `TypeError`, wenn es versucht, einen Modulspezifikator zu importieren, der nicht in einen Modulspeicherort aufgelöst werden kann).

Unten sehen Sie eine Karte, die einen `square`-Modulspezifikatorschlüssel definiert, der in diesem Fall einer relativen Adresswert zugeordnet ist.

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

### Umleiten von Modulpfaden

Einträge in der Modulspezifikatorkarte, bei denen sowohl der Spezifikatorschlüssel als auch sein zugehöriger Wert einen Endschrägstrich (`/`) haben, können als Pfad-Präfix verwendet werden.
Dies ermöglicht die Umleitung eines gesamten Sets von Import-URLs von einem Standort zu einem anderen.
Es kann auch verwendet werden, um das Arbeiten mit "Paketen und Modulen" zu emulieren, wie Sie es in einem Node-Ökosystem sehen könnten.

> [!NOTE]
> Der Schluss-`/` zeigt an, dass der Modulspezifikatorschlüssel als _Teil_ eines Modulspezifikators ersetzt werden kann.
> Wenn das nicht vorhanden ist, wird der Browser nur den gesamten Modulspezifikatorschlüssel abgleichen (und ersetzen).

#### Pakete von Modulen

Die folgende JSON-Importkartendefinition ordnet `lodash` als nackten Namen zu und den Modulspezifikator-Präfix `lodash/` auf den Pfad `/node_modules/lodash-es/` (aufgelöst zur Basis-URL des Dokuments):

```json
{
  "imports": {
    "lodash": "/node_modules/lodash-es/lodash.js",
    "lodash/": "/node_modules/lodash-es/"
  }
}
```

Mit dieser Zuordnung können Sie sowohl das gesamte "Paket" mit dem nackten Namen als auch Module innerhalb davon importieren (mithilfe des Pfadmappings):

```js
import _ from "lodash";
import fp from "lodash/fp.js";
```

Es ist möglich, `fp` ohne die `.js`-Dateierweiterung zu importieren, aber Sie müssten einen nackten Modulspezifikatorschlüssel für diese Datei erstellen, wie z.B. `lodash/fp`, anstatt den Pfad zu verwenden.
Das mag für nur ein Modul vernünftig sein, skaliert jedoch schlecht, wenn Sie viele Module importieren möchten.

#### Allgemeine URL-Umleitung

Ein Modulspezifikatorschlüssel braucht kein Pfad zu sein — er kann auch eine absolute URL (oder ein URL-ähnlicher relativer Pfad wie `./`, `../`, `/`) sein.
Dies kann nützlich sein, wenn Sie ein Modul umleiten möchten, das absolute Pfade zu einem Ressourcen hat, mit Ihren eigenen lokalen Ressourcen.

```json
{
  "imports": {
    "https://www.unpkg.com/moment/": "/node_modules/moment/"
  }
}
```

### Gescopte Module für das Versionsmanagement

Ökosysteme wie Node verwenden Paketmanager wie npm, um Module und deren Abhängigkeiten zu verwalten.
Der Paketmanager sorgt dafür, dass jedes Modul von anderen Modulen und ihren Abhängigkeiten getrennt ist.
Infolgedessen enthält eine komplexe Anwendung möglicherweise dasselbe Modul mehrfach mit verschiedenen Versionen in verschiedenen Teilen des Modulgrafen, aber die Benutzer müssen sich keine Gedanken über diese Komplexität machen.

> [!NOTE]
> Sie können das Versionsmanagement auch mit relativen Pfaden erreichen, aber das ist suboptimal, weil es unter anderem eine bestimmte Struktur auf Ihr Projekt zwingt und Sie daran hindert, nackte Modulnamen zu verwenden.

Importkarten ermöglichen es Ihnen ähnlich, mehrere Versionen von Abhängigkeiten in Ihrer Anwendung zu haben und auf sie mit demselben Modulspezifikator zu verweisen.
Sie implementieren dies mit dem `scopes`-Schlüssel, der es Ihnen ermöglicht, Modulspezifikatorkarten bereitzustellen, die je nach Pfad des Skripts, das den Import durchführt, verwendet werden.
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

Mit dieser Zuordnung, wenn ein Skript mit einer URL, die `/node_modules/dependency/` enthält, `cool-module` importiert, wird die Version in `/node_modules/some/other/location/cool-module/index.js` verwendet.
Die Karte in `imports` wird als Fallback verwendet, wenn kein übereinstimmender Scope in der gescopten Karte vorhanden ist oder die übereinstimmenden Scopes keinen übereinstimmenden Spezifikator enthalten. Wenn `cool-module` zum Beispiel von einem Skript mit einem nicht übereinstimmenden Scopes-Pfad importiert wird, wird stattdessen die Modulspezifikatorkarte im `imports`-Schlüssel verwendet, die zur Version in `/node_modules/cool-module/index.js` führt.

Beachten Sie, dass der Pfad, der verwendet wird, um einen Scope auszulösen, die Adresse, die aufgelöst wird, nicht beeinflusst.
Der Wert im gemappten Pfad muss nicht mit dem Scopes-Pfad übereinstimmen, und relative Pfade werden immer noch auf die Basis-URL des Skripts aufgelöst, das die Importkarte enthält.

Genauso wie für Modulspezifikatorkarten, können Sie viele Scopes-Schlüssel haben, und diese können sich überlappende Pfade enthalten.
Wenn mehrere Scopes zu der Referrer-URL passen, wird zuerst der spezifischste Scope-Pfad geprüft (der längste Scopes-Schlüssel) auf einen passenden Specifikator.
Die Browser fallen auf den nächst spezifischsten übereinstimmenden gescopten Pfad zurück, wenn kein übereinstimmender Specifikator vorhanden ist, und so weiter.
Wenn es keinen übereinstimmenden Specifikator in einem der übereinstimmenden Scopes gibt, prüft der Browser auf eine Übereinstimmung in der Modulspezifikatorkarte im `imports`-Schlüssel.

### Die Verbesserung des Caching durch das Wegmappen von gehashten Dateinamen

Skriptdateien, die von Websites verwendet werden, haben oft gehashte Dateinamen, um das Caching zu vereinfachen.
Der Nachteil dieses Ansatzes ist, dass, wenn sich ein Modul ändert, auch alle Module, die es mit seinem gehashten Dateinamen importieren, aktualisiert/regeneriert werden müssen.
Dies kann zu Kaskadenaktualisierungen führen, das ist eine Verschwendung von Netzwerkressourcen.

Importkarten bieten eine praktische Lösung für dieses Problem.
Anstatt sich auf spezifische gehashte Dateinamen zu verlassen, verlassen sich Anwendungen und Skripte auf eine unangeschlossene Version des Modulnamens (der Adresse).
Eine Importkarte wie die untenstehende stellt dann eine Zuordnung zur tatsächlichen Skriptdatei bereit.

```json
{
  "imports": {
    "main_script": "/node/srcs/application-fg7744e1b.js",
    "dependency_script": "/node/srcs/dependency-3qn7e4b1q.js"
  }
}
```

Wenn sich `dependency_script` ändert, ändert sich auch sein Hash, der im Dateinamen enthalten ist. In diesem Fall müssen wir nur die Importkarte aktualisieren, um den geänderten Namen des Moduls widerzuspiegeln.
Wir müssen den Quelltext von JavaScript-Code, der davon abhängt, nicht aktualisieren, da der Spezifikator in der Importanweisung nicht geändert wurde.

## Laden von nicht-JavaScript-Ressourcen

Ein aufregendes Feature, das eine einheitliche Modularchitektur mit sich bringt, ist die Möglichkeit, nicht-JavaScript-Ressourcen als Module zu laden. Zum Beispiel können Sie JSON als JavaScript-Objekt importieren oder CSS als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importieren.

Sie müssen explizit angeben, welche Art von Ressource Sie importieren. Standardmäßig geht der Browser davon aus, dass es sich bei der Ressource um JavaScript handelt und wird einen Fehler werfen, wenn die aufgelöste Ressource etwas anderes ist. Um JSON, CSS oder andere Ressourcentypen zu importieren, verwenden Sie die [Import-Attribute](/de/docs/Web/JavaScript/Reference/Statements/import/with)-Syntax:

```js
import colors from "./colors.json" with { type: "json" };
import styles from "./styles.css" with { type: "css" };
```

Browser werden auch eine Validierung des Modultyps durchführen und fehlschlagen, wenn zum Beispiel `./data.json` nicht in eine JSON-Datei aufgelöst wird. Dies stellt sicher, dass Sie nicht versehentlich Code ausführen, wenn Sie nur Daten importieren möchten. Sobald erfolgreich importiert, können Sie den importierten Wert jetzt als normales JavaScript-Objekt oder `CSSStyleSheet` Objekt verwenden.

```js
console.log(colors.map((color) => color.value));
document.adoptedStyleSheets = [styles];
```

## Anwendung des Moduls auf Ihr HTML

Nun müssen wir nur noch das `main.js`-Modul auf unsere HTML-Seite anwenden. Dies ist sehr ähnlich wie bei einem regulären Skript, mit einigen bemerkenswerten Unterschieden.

Erstens müssen Sie `type="module"` im [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Element einfügen, um dieses Skript als Modul zu deklarieren. Um das `main.js`-Skript zu importieren, verwenden Sie dies:

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
  // …
</script>
<script src="a-module-using-import-statements.js"></script>
<!-- SyntaxError: import declarations may only appear at top level of a module -->
```

Sie sollten im Allgemeinen alle Ihre Module in separaten Dateien definieren. Module, die inline in HTML deklariert werden, können nur andere Module importieren, aber alles, was sie exportieren, wird von anderen Modulen nicht zugänglich sein (weil sie keine URL haben).

> [!NOTE]
> Module und ihre Abhängigkeiten können vorab geladen werden, indem sie in [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)-Elementen mit [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) angegeben werden.
> Dies kann die Ladezeit erheblich reduzieren, wenn die Module verwendet werden.

## Weitere Unterschiede zwischen Modulen und klassischen Skripten

- Sie müssen auf lokale Tests achten — wenn Sie versuchen, die HTML-Datei lokal (d.h. mit einer `file://`-URL) zu laden, stoßen Sie auf CORS-Fehler aufgrund der Sicherheitsanforderungen von JavaScript-Modulen. Sie müssen Ihre Tests über einen Server durchführen.
- Beachten Sie auch, dass Sie möglicherweise ein anderes Verhalten von Abschnitten des Skripts erhalten, die in Modulen definiert sind, im Gegensatz zu klassischen Skripten. Dies liegt daran, dass Module automatisch {{jsxref("Strict_mode", "Strikten Modus", "", 1)}} verwenden.
- Es besteht keine Notwendigkeit, das `defer`-Attribut (siehe [`<script>`-Attribute](/de/docs/Web/HTML/Reference/Elements/script#attributes)) zu verwenden, wenn ein Modulskript geladen wird; Module werden automatisch verzögert geladen.
- Module werden nur einmal ausgeführt, auch wenn sie in mehreren `<script>`-Tags referenziert wurden.
- Letztendlich wollen wir deutlich machen — Modulfunktionen werden im lokalen Bereich eines einzelnen Skripts importiert — sie sind im globalen Bereich nicht verfügbar. Daher können Sie auf importierte Funktionen nur im Skript zugreifen, in das sie importiert wurden, und nicht auf der JavaScript-Konsole, zum Beispiel. Sie erhalten dennoch Syntaxfehler in den Entwicklerwerkzeugen angezeigt, können jedoch nicht einige der Debugging-Techniken verwenden, die Sie vielleicht erwartet haben.

Module-definierte Variablen sind auf das Modul beschränkt, es sei denn, sie sind explizit an das globale Objekt angehängt. Andererseits sind global-definierte Variablen im Modul verfügbar. Zum Beispiel, bei folgendem Code:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Example page</title>
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

Die Seite würde trotzdem `Hello` rendern, weil die globalen Variablen `text` und `document` im Modul verfügbar sind. (Beachten Sie auch in diesem Beispiel, dass ein Modul nicht unbedingt eine Import-/Export-Anweisung benötigt — das Einzige, was benötigt wird, ist, dass der Einstiegspunkt `type="module"` hat.)

## Standardexporte versus benannte Exporte

Die Funktionalität, die wir bisher exportiert haben, bestand aus **benannten Exporten** — jedes Element (sei es eine Funktion, `const`, usw.) wurde beim Export mit seinem Namen bezeichnet, und dieser Name wurde auch beim Import dafür verwendet.

Es gibt auch einen Exporttyp, der **Standardexport** genannt wird — dieser wurde entwickelt, um es einfach zu machen, eine Standardfunktion bereitzustellen, die von einem Modul angeboten wird, und hilft auch, JavaScript-Module mit bestehenden CommonJS- und AMD-Modulsystemen zu interagieren (wie gut erklärt in [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) von Jason Orendorff; suchen Sie nach "Default exports").

Schauen wir uns ein Beispiel an, während wir erklären, wie es funktioniert. In unserem `square.js` in den `basic-modules` finden Sie eine Funktion namens `randomSquare()`, die ein Quadrat mit zufälliger Farbe, Größe und Position erstellt. Wir möchten dies als unseren Standardexport durchführen, daher schreiben wir am Ende der Datei dies:

```js
export default randomSquare;
```

Beachten Sie das Fehlen von geschweiften Klammern.

Wir könnten stattdessen `export default` an die Funktion anheften und sie als anonyme Funktion definieren, wie folgt:

```js
export default function (ctx) {
  // …
}
```

In unserer `main.js`-Datei importieren wir die Standardfunktion mit dieser Zeile:

```js
import randomSquare from "./modules/square.js";
```

Auch hier das Fehlen von geschweiften Klammern. Das liegt daran, dass pro Modul nur ein Standardexport erlaubt ist, und wir wissen, dass es `randomSquare` ist. Die obige Zeile ist im Grunde eine Abkürzung für:

```js
import { default as randomSquare } from "./modules/square.js";
```

> [!NOTE]
> Die Syntax "as", um exportierte Elemente umzubenennen, wird im Abschnitt [Umbenennen von Importen und Exporten](#umbenennen_von_importen_und_exporten) unten erklärt.

## Vermeidung von Namenskonflikten

Bisher scheinen unsere Module zum Zeichnen von Formen auf der Leinwand gut zu funktionieren. Aber was passiert, wenn wir versuchen, ein Modul hinzuzufügen, das sich mit dem Zeichnen einer anderen Form wie einem Kreis oder Dreieck befasst? Diese Formen hätten wahrscheinlich auch zugehörige Funktionen wie `draw()`, `reportArea()`, usw.; wenn wir versuchen, verschiedene Funktionen mit demselben Namen in die gleiche oberste Moduldaten zu importieren, würden wir auf Konflikte und Fehler stoßen.

Zum Glück gibt es eine Reihe von Möglichkeiten, dies zu umgehen. Wir werden uns diese in den folgenden Abschnitten ansehen.

## Umbenennen von Importen und Exporten

Innerhalb der geschweiften Klammern Ihrer `import`- und `export`-Anweisung können Sie das Schlüsselwort `as` zusammen mit einem neuen Funktionsnamen verwenden, um den identifizierenden Namen zu ändern, den Sie für eine Funktion innerhalb des obersten Moduls verwenden werden.

Zum Beispiel, beide der folgenden würden die gleiche Aufgabe erfüllen, wenn auch auf leicht unterschiedliche Weise:

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

Schauen wir uns ein echtes Beispiel an. In unserem [renaming](https://github.com/mdn/js-examples/tree/main/module-examples/renaming)-Verzeichnis werden Sie dasselbe Modulsystem wie im vorherigen Beispiel sehen, außer dass wir die Module `circle.js` und `triangle.js` hinzugefügt haben, um Kreise und Dreiecke zu zeichnen und darüber zu berichten.

In jedem dieser Module haben wir Funktionen mit denselben Namen, die exportiert werden, und daher hat jeder das gleiche `export` Statement am Ende:

```js
export { name, draw, reportArea, reportPerimeter };
```

Wenn wir sie in `main.js` importieren und versuchen,

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

würde der Browser einen Fehler wie "SyntaxError: redeclaration of import name" werfen (Firefox).

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

Und es würde genauso funktionieren. Welche Stilrichtung Sie verwenden, liegt bei Ihnen, allerdings macht es mehr Sinn, Ihren Modulcode unangetastet zu lassen und die Änderungen in den Importen vorzunehmen. Das macht besonders dann Sinn, wenn Sie aus Drittanbieter-Modulen importieren, über die Sie keine Kontrolle haben.

## Erstellung eines Modulobjekts

Die obige Methode funktioniert okay, aber sie ist ein wenig unordentlich und langwierig. Eine noch bessere Lösung ist, die Funktionen jedes Moduls innerhalb eines Modulobjekts zu importieren. Die folgende Syntax macht das:

```js
import * as Module from "./modules/module.js";
```

Dies greift alle verfügbaren Exporte im `module.js` und stellt sie als Mitglieder eines Objekts `Module` bereit, es gibt ihm effektiv seinen eigenen Namensraum. Zum Beispiel:

```js
Module.function1();
Module.function2();
```

Wieder einmal schauen wir uns ein echtes Beispiel an. Wenn Sie in unser [module-objects](https://github.com/mdn/js-examples/tree/main/module-examples/module-objects)-Verzeichnis gehen, sehen Sie dasselbe Beispiel erneut, aber umgeschrieben, um diesen neuen Syntaxvorteil zu nutzen. In den Modulen sind die Exporte alle in der folgenden einfachen Form:

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

In jedem dieser Fälle können Sie jetzt auf die Importe des Moduls unterhalb des angegebenen Objektnamens zugreifen, z.B.:

```js
const square = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square.length, reportList);
Square.reportPerimeter(square.length, reportList);
```

So können Sie den Code genauso wie zuvor schreiben (solange Sie die Objektnamen dort einfügen, wo nötig), und die Importe sind viel aufgeräumter.

## Module und Klassen

Wie wir zuvor angedeutet haben, können Sie auch Klassen exportieren und importieren; das ist eine weitere Möglichkeit, Konflikte in Ihrem Code zu vermeiden und ist besonders nützlich, wenn Sie Ihren Modulcode bereits in einem objektorientierten Stil geschrieben haben.

Sie können ein Beispiel unseres Modul zum Zeichnen von Formen mit ES-Klassen umgeschrieben in unserem [classes](https://github.com/mdn/js-examples/tree/main/module-examples/classes)-Verzeichnis finden. Als Beispiel enthält die [`square.js`](https://github.com/mdn/js-examples/blob/main/module-examples/classes/modules/square.js)-Datei jetzt alle seine Funktionalität in einer einzigen Klasse:

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

Und dann benutzen wir die Klasse, um unser Quadrat zu zeichnen:

```js
const square = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square.draw();
square.reportArea();
square.reportPerimeter();
```

## Aggregation von Modulen

Es wird Zeiten geben, in denen Sie Module zusammenfassen möchten. Vielleicht haben Sie mehrere Ebenen von Abhängigkeiten, bei denen Sie Dinge vereinfachen möchten, indem Sie mehrere Untermodule zu einem übergeordneten Modul kombinieren. Dies ist mit Export-Syntax in der folgenden Form im übergeordneten Modul möglich:

```js
export * from "x.js";
export { name } from "x.js";
```

Für ein Beispiel sehen Sie unser [module-aggregation](https://github.com/mdn/js-examples/tree/main/module-examples/module-aggregation)-Verzeichnis. In diesem Beispiel (basierend auf unserem früheren Klassenbeispiel) haben wir ein zusätzliches Modul namens `shapes.js`, das alle Funktionen von `circle.js`, `square.js` und `triangle.js` zusammenfasst. Wir haben auch unsere Untermodule in ein Unterverzeichnis im `modules`-Verzeichnis namens `shapes` verschoben. Die Modulstruktur in diesem Beispiel ist:

```plain
modules/
  canvas.js
  shapes.js
  shapes/
    circle.js
    square.js
    triangle.js
```

In jedem der Untermodule ist der Export in der gleichen Form, z.B.:

```js
export { Square };
```

Der nächste Schritt ist der Aggregationsteil. In [`shapes.js`](https://github.com/mdn/js-examples/blob/main/module-examples/module-aggregation/modules/shapes.js) fügen wir diese Zeilen ein:

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

Diese greifen die Exporte der einzelnen Untermodule und machen sie effektiv vom `shapes.js`-Modul verfügbar.

> [!NOTE]
> Die Exporte, die in `shapes.js` referenziert werden, werden im Grunde genommen über die Datei umgeleitet und existieren dort nicht wirklich, also können Sie dort keine nützlichen verwandten Codes schreiben.

Also können wir jetzt im `main.js`-File auf alle drei Modulklassen zugreifen, indem wir

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

mit der folgenden Einzelzeile ersetzen:

```js
import { Square, Circle, Triangle } from "./modules/shapes.js";
```

## Dynamisches Laden von Modulen

Eine aktuelle Ergänzung zur JavaScript-Modulfunktionalität ist das dynamische Laden von Modulen. Dies ermöglicht es, Module dynamisch nur dann zu laden, wenn sie benötigt werden, anstatt alles im Voraus laden zu müssen. Dies hat einige offensichtliche Leistungsvorteile; lesen wir weiter und sehen, wie es funktioniert.

Diese neue Funktionalität ermöglicht es Ihnen, [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) als Funktion aufzurufen und den Pfad zum Modul als Parameter zu übergeben. Es gibt ein {{jsxref("Promise")}} zurück, das mit einem Modulobjekt erfüllt wird (siehe [Creating a module object](#erstellung_eines_modulobjekts)), das Ihnen Zugriff auf die Exporte dieses Objekts gibt. Zum Beispiel:

```js
import("./modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

> [!NOTE]
> Dynamischer Import ist im Haupt-Thread des Browsers, sowie in geteilten und dedizierten Workern erlaubt.
> Jedoch wird `import()` ein Fehler auslösen, wenn es in einem Service-Worker oder Worklet aufgerufen wird.

<!-- https://whatpr.org/html/6395/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-specifier,-promisecapability) -->

Schauen wir uns ein Beispiel an. In dem Verzeichnis [dynamic-module-imports](https://github.com/mdn/js-examples/tree/main/module-examples/dynamic-module-imports) haben wir ein weiteres Beispiel, das auf unserem Klassenbeispiel basiert. Diesmal zeichnen wir jedoch nichts auf der Leinwand, wenn das Beispiel geladen wird. Stattdessen haben wir drei Schaltflächen — "Circle", "Square" und "Triangle" — die, wenn sie gedrückt werden, das erforderliche Modul dynamisch laden und dann verwenden, um die zugehörige Form zu zeichnen.

In diesem Beispiel haben wir nur Änderungen an unseren [`index.html`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/index.html)- und [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/dynamic-module-imports/main.js)-Dateien gemacht — die Modulausfuhrungen bleiben wie zuvor.

In `main.js` haben wir eine Referenz zu jeder Schaltfläche mit einem [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Aufruf erhalten, zum Beispiel:

```js
const squareBtn = document.querySelector(".square");
```

Wir fügen dann jedem Button einen Ereignis-Listener hinzu, sodass beim Drücken das relevante Modul dynamisch geladen und zur Zeichnung der Form verwendet wird:

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

Beachten Sie, dass, weil die Promise-Erfüllung ein Modulobjekt zurückgibt, die Klasse dann ein Subfeature des Objekts wird, daher müssen wir jetzt mit vorangestellten `Module.` auf den Konstruktor zugreifen, z.B., `Module.Square( /* … */ )`.

Ein weiterer Vorteil von dynamischen Importen ist, dass sie immer verfügbar sind, auch in Skript-Umgebungen. Daher, wenn Sie ein vorhandenes `<script>`-Tag in Ihrem HTML haben, das nicht `type="module"` hat, können Sie den als Module verteilten Code dennoch dynamisch importieren.

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

Top-Level-Await ist eine Funktion, die innerhalb von Modulen verfügbar ist. Dies bedeutet, dass das `await`-Schlüsselwort verwendet werden kann. Es ermöglicht Module, wie große [asynchrone Funktionen](/de/docs/Learn_web_development/Extensions/Async_JS/Introducing) zu agieren, was bedeutet, dass der Code vor der Nutzung in übergeordneten Modulen ausgewertet werden kann, ohne dass andere Module am Laden gehindert werden.

Betrachten wir ein Beispiel. Sie finden alle in diesem Abschnitt beschriebenen Dateien und Code im Verzeichnis [`top-level-await`](https://github.com/mdn/js-examples/tree/main/module-examples/top-level-await), das von den vorherigen Beispielen ausgeht.

Zunächst deklarieren wir unsere Farbpalette in einer separaten Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json):

```json
{
  "yellow": "#F4D03F",
  "green": "#52BE80",
  "blue": "#5499C7",
  "red": "#CD6155",
  "orange": "#F39C12"
}
```

Anschließend erstellen wir ein Modul namens [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js), das eine Fetch-Anfrage verwendet, um die Datei [`colors.json`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/data/colors.json) zu laden und die Daten als Objekt zurückzugeben.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

Beachten Sie die letzte Exportzeile hier.

Wir verwenden das Schlüsselwort `await`, bevor wir die Konstante `colors` angeben, die exportiert wird. Das bedeutet, dass alle anderen Module, die dieses enthalten, warten, bis `colors` heruntergeladen und geparst wurde, bevor sie es verwenden.

Lassen Sie uns dieses Module in unserer [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) Datei einbinden:

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

Das ist nützlich, weil der Code in [`main.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/main.js) nicht ausgeführt wird, bis der Code in [`getColors.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/getColors.js) gelaufen ist. Es wird jedoch das Laden anderer Module nicht blockieren. Zum Beispiel wird unser Modul [`canvas.js`](https://github.com/mdn/js-examples/blob/main/module-examples/top-level-await/modules/canvas.js) weiterhin geladen, während `colors` abgerufen wird.

## Import-Deklarationen werden gehoben

Import-Deklarationen werden {{Glossary("Hoisting", "gehoben")}}. In diesem Fall bedeutet das, dass die importierten Werte im Code des Moduls verfügbar sind, noch bevor sie an der Stelle deklariert werden, und dass die Nebeneffekte des importierten Moduls vor dem Start des restlichen Modulcodes erzeugt werden.

Zum Beispiel würde das Importieren von `Canvas` in der Mitte des Codes in `main.js` trotzdem funktionieren:

```js
// …
const myCanvas = new Canvas("myCanvas", document.body, 480, 320);
myCanvas.create();
import { Canvas } from "./modules/canvas.js";
myCanvas.createReportList();
// …
```

Dennoch wird empfohlen, all Ihre Importe am Anfang des Codes zu platzieren, was es einfacher macht, Abhängigkeiten zu analysieren.

## Zyklische Importe

Module können andere Module importieren, und diese Module können andere Module importieren, und so weiter. Dies bildet einen [gerichteten Graphen](https://en.wikipedia.org/wiki/Directed_graph), der als "Abhängigkeitsgraph" bezeichnet wird. In einer idealen Welt ist dieser Graph [azyklisch](https://en.wikipedia.org/wiki/Directed_acyclic_graph). In diesem Fall kann der Graph mit einem Tiefen-First-Durchgang ausgewertet werden.

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

Zyklische Importe schlagen nicht immer fehl. Der Wert der importierten Variable wird nur dann abgerufen, wenn die Variable tatsächlich verwendet wird (wodurch [lebende Bindungen](/de/docs/Web/JavaScript/Reference/Statements/import#imported_values_can_only_be_modified_by_the_exporter) ermöglicht werden), und nur wenn die Variable zu diesem Zeitpunkt nicht initialisiert ist, wird ein [`ReferenceError`](/de/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init) ausgelöst.

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

In diesem Beispiel werden sowohl `a` als auch `b` asynchron verwendet. Daher wird zur Zeit der Modulauswertung weder `b` noch `a` tatsächlich gelesen, wodurch der Rest des Codes normal ausgeführt wird, und die beiden `export`-Deklarationen die Werte von `a` und `b` erzeugen. Danach, nach dem Timeout, sind sowohl `a` als auch `b` verfügbar, daher werden die beiden `console.log`-Anweisungen ebenfalls normal ausgeführt.

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

Das liegt daran, dass, wenn JavaScript `a.js` auswertet, es zuerst `b.js`, die Abhängigkeit von `a.js`, auswerten muss. Aber `b.js` verwendet `a`, was noch nicht verfügbar ist.

Andererseits, wenn Sie den Code ändern, um `b` synchron, aber `a` asynchron zu verwenden, wird die Modulauswertung erfolgreich sein:

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

Das liegt daran, dass die Auswertung von `b.js` normal abgeschlossen wird, sodass der Wert von `b` verfügbar ist, wenn `a.js` ausgewertet wird.

In Ihrem Projekt sollten Sie zyklische Importe in der Regel vermeiden, da sie Ihren Code fehleranfälliger machen. Einige gängige Methoden zur Zyklenbeseitigung sind:

- Die beiden Module in einem zusammenzuführen.
- Den gemeinsamen Code in ein drittes Modul zu verschieben.
- Etwas Code von einem Modul ins andere zu verschieben.

Zyklische Importe können jedoch auftreten, wenn die Bibliotheken voneinander abhängen, was schwieriger zu beheben ist.

## Erstellung von "isomorphen" Modulen

Mit der Einführung von Modulen wird das JavaScript-Ökosystem ermutigt, Code modular zu vertreiben und wiederzuverwenden. Das bedeutet jedoch nicht unbedingt, dass ein JavaScript-Code in jeder Umgebung ausgeführt werden kann. Angenommen, Sie haben ein Modul entdeckt, das SHA-Hashes des Passworts Ihrer Benutzer generiert. Können Sie es im Frontend des Browsers verwenden? Können Sie es auf Ihrem Node.js-Server verwenden? Die Antwort lautet: es hängt davon ab.

Module haben nach wie vor Zugriff auf globale Variablen, wie bereits gezeigt. Wenn das Modul auf globale Variablen wie `window` verweist, kann es im Browser ausgeführt werden, wird jedoch einen Fehler auf Ihrem Node.js-Server werfen, da `window` dort nicht verfügbar ist. Ebenso, wenn der Code Zugriff auf `process` benötigt, um zu funktionieren, kann er nur in Node.js verwendet werden.

Um die Wiederverwendbarkeit eines Moduls maximal zu erhöhen, wird oft empfohlen, den Code "isomorph" zu gestalten — das heißt, er zeigt in jeder Laufzeitumgebung das gleiche Verhalten. Dies wird üblicherweise auf drei Weisen erreicht:

- Trennen Sie Ihre Module in "Core" und "Binding". Für den "Core" konzentrieren Sie sich auf die reine JavaScript-Logik wie das Berechnen des Hashs, ohne DOM-, Netzwerk- oder Dateisystemzugriff und stellen Sie Dienstfunktionen bereit. Für den "Binding"-Teil können Sie aus dem globalen Kontext lesen und schreiben. Zum Beispiel könnte das "Browser-Binding" wählen, den Wert aus einem Eingabefeld zu lesen, während das "Node-Binding" es eventuell aus `process.env` liest, aber die aus beiden Stellen gelesenen Werte werden an dieselbe Core-Funktion übergeben und auf die gleiche Weise behandelt. Der Core kann in jeder Umgebung importiert und auf die gleiche Weise verwendet werden, während nur das Binding, das normalerweise leichtgewichtig ist, plattformspezifisch sein muss.
- Prüfen Sie, ob ein bestimmtes Global existiert, bevor Sie es verwenden. Zum Beispiel, wenn Sie testen, dass `typeof window === "undefined"`, wissen Sie, dass Sie sich wahrscheinlich in einer Node.js-Umgebung befinden und nicht auf den DOM zugreifen sollten.

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

  Dies ist vorzuziehen, wenn die beiden Zweige tatsächlich mit demselben Verhalten enden ("isomorph"). Wenn es unmöglich ist, dieselbe Funktionalität bereitzustellen, oder wenn dies das Laden beträchtlicher Mengen an Code mit sich bringt, während ein großer Teil davon ungenutzt bleibt, nutzen Sie besser unterschiedliche "Bindings".

- Verwenden Sie einen Polyfill, um eine Alternative für fehlende Funktionen bereitzustellen. Zum Beispiel, wenn Sie die [`fetch`](/de/docs/Web/API/Fetch_API)-Funktion verwenden möchten, die in Node.js nur ab v18 unterstützt wird, können Sie eine ähnliche API verwenden, wie sie von [`node-fetch`](https://www.npmjs.com/package/node-fetch) bereitgestellt wird. Sie können dies bedingt durch dynamischen Import tun:

  ```js
  // myModule.js
  if (typeof fetch === "undefined") {
    // We are running in Node.js; use node-fetch
    globalThis.fetch = (await import("node-fetch")).default;
  }
  // …
  ```

  Die [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Variable ist ein globales Objekt, das in jeder Umgebung verfügbar ist und nützlich ist, wenn Sie globale Variablen innerhalb von Modulen lesen oder erstellen möchten.

Diese Praktiken sind nicht einzigartig für Module. Dennoch werden Sie mit dem Trend zur Wiederverwendbarkeit von Code und Modularisierung ermutigt, Ihren Code plattformübergreifend zu gestalten, damit er von so vielen Menschen wie möglich genutzt werden kann. Laufzeiten wie Node.js implementieren auch aktiv Web-APIs, wo dies möglich ist, um die Interoperabilität mit dem Web zu verbessern.

## Fehlersuche

Hier sind ein paar Tipps, die Ihnen helfen können, wenn Sie Schwierigkeiten haben, Ihre Module zum Laufen zu bringen. Fühlen Sie sich frei, zur Liste hinzuzufügen, wenn Sie mehr entdecken!

- Wir haben das schon erwähnt, aber um es zu wiederholen: `.mjs`-Dateien müssen mit einem MIME-Typ von `text/javascript` (oder einem anderen JavaScript-kompatiblen MIME-Typ, aber `text/javascript` wird empfohlen) geladen werden, ansonsten erhalten Sie ein striktes MIME-Typ-Überprüfungs-Fehler, wie "Der Server antwortete mit einem Nicht-JavaScript-MIME-Typ".
- Wenn Sie versuchen, die HTML-Datei lokal zu laden (d.h. mit einer `file://`-URL), stoßen Sie aufgrund der Sicherheitsanforderungen von JavaScript-Modulen auf CORS-Fehler. Sie müssen Ihre Tests über einen Server durchführen. GitHub Pages ist ideal, da es auch `.mjs`-Dateien mit dem korrekten MIME-Typ bereitstellt.
- Da `.mjs` eine nicht standardmäßige Dateierweiterung ist, erkennen einige Betriebssysteme sie möglicherweise nicht, oder versuchen, sie durch etwas anderes zu ersetzen. Zum Beispiel haben wir festgestellt, dass macOS stillschweigend ein `.js` ans Ende von `.mjs`-Dateien angefügt hat und dann automatisch die Dateierweiterung versteckt. So kamen all unsere Dateien tatsächlich als `x.mjs.js` heraus. Sobald wir das automatische Verstecken von Dateiendungen abgeschaltet und es antrainiert hatten, `.mjs` zu akzeptieren, war es ok.

## Siehe auch

- [JavaScript modules](https://v8.dev/features/modules) auf v8.dev (2018)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) auf hacks.mozilla.org (2018)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) auf hacks.mozilla.org (2015)
- [Exploring JS, Ch.16: Modules](https://exploringjs.com/es6/ch_modules.html) von Dr. Axel Rauschmayer

{{Previous("Web/JavaScript/Guide/Internationalization")}}
