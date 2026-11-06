---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist inzwischen nicht mehr standardisiert. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Mit **Importattributen** wird der Laufzeitumgebung mitgeteilt, wie ein Modul [geladen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph) werden soll. Dazu gehören das Verhalten bei der Modulauflösung, beim [Abrufen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#loading_the_graph), beim Parsen und bei der [Auswertung](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#evaluating_modules). Sie werden in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Aufrufen unterstützt.

Attribute können jeder Art von `import`- oder `export from`-Anweisung hinzugefügt werden, einschließlich Standardimporten und Namespace-Importen. Sie folgen auf den Modulbezeichner und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im Parameter `options` als Eigenschaft `with` angegeben.

## Syntax

```js-nolint
import { names } from "module-name" with {};
import { names } from "module-name" with { key: "data" };
import { names } from "module-name" with { key: "data", key2: "data2" };
import { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };

export { names } from "module-name" with {};
export { names } from "module-name" with { key: "data" };
export { names } from "module-name" with { key: "data", key2: "data2" };
export { names } from "module-name" with { key: "data", key2: "data2", /* …, */ keyN: "dataN" };
```

### Parameter

- `keyN`
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Stringliteral sein. Alle Schlüssel müssen eindeutig und der Laufzeitumgebung bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Stringliteral sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : In einem _statischen Import_ wurde ein nicht unterstützter `key` angegeben.

- {{jsxref("TypeError")}}
  - : In einem _dynamischen Import_ wurde ein nicht unterstützter `key` angegeben.

Beachten Sie, dass die Angabe eines nicht unterstützten Werts für einen unterstützten Schlüssel je nach Schlüssel in manchen Fällen ebenfalls eine Ausnahme auslösen kann.

## Beschreibung

Importattribute teilen der Laufzeitumgebung mit, wie ein bestimmtes Modul geladen werden soll.

Der wichtigste Anwendungsfall ist das Laden von Nicht-JS-Modulen, etwa JSON- und CSS-Modulen. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web erfordert das Laden eines nicht zwischengespeicherten Moduls von einer HTTP-URL eine HTTP-Anfrage. Die Antwort wird anschließend in einen JavaScript-Wert umgewandelt und dem Programm von der Laufzeitumgebung zur Verfügung gestellt. Die Antwort könnte beispielsweise so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden ausschließlich anhand ihres ausgelieferten [Medientyps (MIME-Typs)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst – die Dateiendung in der URL kann nicht zur Bestimmung des Dateityps verwendet werden. In diesem Fall lautet der MIME-Typ `application/json`. Er teilt dem Browser mit, dass es sich um eine JSON-Datei handelt, die als JSON geparst werden muss. Wenn der Medientyp in der Serverantwort aus irgendeinem Grund (etwa wegen eines manipulierten oder fehlerhaften Servers) auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, würde die Datei als Code geparst und ausgeführt. Enthält die vermeintliche „JSON“-Datei tatsächlich Schadcode, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen. Das stellt ein erhebliches Sicherheitsrisiko dar.

Importattribute lösen dieses Problem, indem sie es ermöglichen, ausdrücklich festzulegen, wie ein Modul validiert werden soll.
Insbesondere lässt sich mit dem Attribut `type` prüfen, ob die Datei mit einem bestimmten Medientyp ausgeliefert wird. Wird ein anderer Medientyp verwendet, schlägt der Import fehl.

Der obige Code kann beispielsweise so geschrieben werden, dass `"json"` als erwarteter Typ angegeben wird. Der Import würde dann fehlschlagen, wenn die Datei mit `text/javascript` (oder einem anderen Medientyp als einem JSON-MIME-Typ wie `application/json`) ausgeliefert wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Mit dem Attribut `type` können Sie angeben, dass Module als JSON, CSS oder Klartext (und implizit als JavaScript) ausgeliefert werden.

Es können auch weitere Attribute unterstützt werden, die [das Verhalten verschiedener Phasen des Ladevorgangs beeinflussen können](#vorgesehene_semantik_von_importattributen).
Wird in einem statischen Import ein unbekanntes Attribut verwendet, wird ein Syntaxfehler ausgelöst; ein dynamischer Import wird mit einem Typfehler abgelehnt.

### Standardattribute

Welche Attribute verfügbar sind, hängt von der Sprache und der Laufzeitumgebung ab.
Der ECMAScript-Standard [definiert das Attribut `type` mit den Werten `"json"` und `"text"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert das Attribut `type` außerdem mit den Werten `"json"`, `"text"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) – diese Attribute werden in Browserumgebungen unterstützt.

#### JSON-Module (`{ type: "json" }`)

Der Typ `json` gibt an, dass die importierte Datei JSON enthalten muss.
Mit dem folgenden Code können Sie JSON aus einer Datei in das Objekt `data` laden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wird die Datei mit einem anderen Medientyp als einem JSON-MIME-Typ ausgeliefert, schlägt der Import fehl.

Das Attribut `type` ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem Header `{{HTTPHeader("Accept")}}: application/json`), ändert aber _nicht_, wie das Modul geparst oder ausgewertet wird. Anhand des MIME-Typs der Antwort weiß die Laufzeitumgebung bereits, dass sie das Modul als JSON parsen muss. Sie verwendet das Attribut lediglich, um _im Nachhinein_ zu prüfen, ob das Modul `data.json` tatsächlich ein JSON-Modul ist. Ändert sich beispielsweise der Antwortheader stattdessen zu `Content-Type: text/javascript`, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation schreibt die Unterstützung von `type: "json"` ausdrücklich vor: Wenn für ein Modul `type: "json"` angegeben ist und die Laufzeitumgebung diesen Import nicht fehlschlagen lässt, muss das Modul als JSON geparst werden.

Ansonsten gibt es jedoch keine Vorgabe für das Verhalten: Bei Importen ohne das Attribut `type: "json"` darf die Laufzeitumgebung das Modul dennoch als JSON parsen, sofern die Sicherheit in dieser Umgebung dadurch nicht beeinträchtigt wird.

Browser gehen dagegen implizit davon aus, dass ein Modul JavaScript enthält, wenn `type` nicht angegeben ist. Sie lassen den Import fehlschlagen, wenn das Modul kein JavaScript enthält (beispielsweise JSON). Dadurch werden Modultypen stets strikt validiert und Sicherheitsrisiken vermieden.
Laufzeitumgebungen außerhalb des Browsers wie Node und Deno orientieren sich am Browserverhalten und verlangen `type` für JSON-Module.

Wenn Sie `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie daher üblicherweise einen Fehler wie diesen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den Typ `css`, mit dem ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in ein Skript importiert wird.

Der folgende Code zeigt, wie Sie ein Stylesheet importieren und Ihrem Dokument hinzufügen können.
Der Import löst eine Ausnahme aus, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` ausgeliefert wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext bereitstellt.

#### Textmodule (`{ type: "text" }`)

Mit dem Typ `text` kann der Quelltext eines Moduls als Stringwert importiert werden.
Mit dem folgenden Code können Sie Text aus einer Datei in den String `text` laden:

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

Die Datei wird mit dem Header `{{HTTPHeader("Accept")}}: text/plain` angefordert. Der Wert des Antwortheaders `{{HTTPHeader("Content-Type")}}` wird jedoch ignoriert, und alle Dateien werden als UTF-8 geparst. Die Datei kann beliebige Textdaten enthalten, auch JavaScript-Code (der als Klartext behandelt wird).

Verwenden Sie nach Möglichkeit [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source), um ein kompiliertes Modul für eine spätere Instanziierung zu erhalten, oder [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer), um die synchrone Auswertung eines Moduls aufzuschieben. Bei Verwendung von `with { type: "text" }` kann das Modul den Cache nicht wiederverwenden, wenn es an anderer Stelle importiert wurde. Außerdem kann die Auswertung von String-Quelltexten durch Anwendungscode mit strengen [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen inkompatibel sein.

### Vorgesehene Semantik von Importattributen

Ein Attribut kann das Verhalten der Laufzeitumgebung in jeder Phase des Modulladevorgangs ändern:

- Auflösung: Die Attribute sind zusammen mit dem Modulbezeichner (dem String in der `from`-Klausel) Teil der Modulanfrage. Daher können bei gleichem Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Beispielsweise [unterstützt TypeScript das Attribut `resolution-mode`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: CSS-Module werden beispielsweise mit [`destination`](/de/docs/Web/API/Request/destination) gleich `"style"` abgerufen, JSON-Module mit `destination: "json"` und Textmodule mit `destination: "text"`. Das bedeutet, dass der Server selbst bei derselben Ziel-URL unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswerten: Die Laufzeitumgebung kann anhand des Attributs bestimmen, wie das Modul geparst und ausgewertet wird.

## Beispiele

### JSON-Module mit dem Attribut `type` importieren

In `data.json`:

```json
{
  "name": "Shilpa"
}
```

In `index.html`:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <script type="module">
      import data from "./data.json" with { type: "json" };

      const p = document.createElement("p");
      p.textContent = `name: ${data.name}`;
      document.body.appendChild(p);
    </script>
  </head>
  <body></body>
</html>
```

Starten Sie einen lokalen HTTP-Server (siehe [Module im Web verwenden](/de/docs/Web/JavaScript/Guide/Modules/Modules_on_the_web)) und rufen Sie die Seite `index.html` auf. Auf der Seite sollte `Shilpa` erscheinen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Benannte Importe daraus (wie `import { name } from "data.json"`) sind nicht möglich.

### Importattribute mit dynamischen Importen verwenden

Importattribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass dynamische Importe ebenso wie statische Importe für die Lebensdauer der Umgebung (etwa einer Seite oder eines Workers) zwischengespeichert werden. Wenn Sie erwarten, dass sich die Daten ändern (beispielsweise aktuelle Nachrichten oder das Guthaben einer Person), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Vorschlag zu Importattributen](https://github.com/tc39/proposal-import-attributes)
- [Vorschlag zu JSON-Modulen](https://github.com/tc39/proposal-json-modules)
- [Vorschlag zu Import Text](https://github.com/tc39/proposal-import-text)
