---
title: Import Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertierungsfunktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Import Attribute**-Feature teilt der Laufzeitumgebung mit, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei Modulauflösung, Abruf, Parsing und Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifikator-String und beginnen mit dem Schlüsselwort `with`. Wird `import()` verwendet, werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Stringliteral sein. Alle Schlüssel müssen eindeutig sein und der Laufzeitumgebung bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Stringliteral sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Ein nicht unterstützter `key` wurde in einem _statischen Import_ angegeben.

- {{jsxref("TypeError")}}
  - : Ein nicht unterstützter `key` wurde in einem _dynamischen Import_ angegeben.

Beachten Sie, dass das Angeben eines nicht unterstützten Werts für einen unterstützten Schlüssel in einigen Fällen auch zu einer Ausnahme führen kann, abhängig vom Schlüssel.

## Beschreibung

Import-Attribute teilen der Laufzeitumgebung mit, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, nicht-JS-Module zu laden, wie JSON-Module und CSS-Module. Betrachten Sie das folgende Beispiel:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anforderung. Die Antwort wird dann in einen JavaScript-Wert vorbereitet und der Laufzeitumgebung zugänglich gemacht. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur nach ihrem übermittelten [Mediatyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und analysiert — die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON analysiert werden muss. Wenn aus irgendeinem Grund (z.B. der Server wird angegriffen oder ist unecht) der Medientyp in der Serverantwort auf `text/javascript` (für JavaScript-Quelltext) gesetzt wird, dann würde die Datei analysiert und als Code ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Import-Attribute beheben dieses Problem, indem sie dem Autor erlauben, ausdrücklich anzugeben, wie ein Modul validiert werden soll. Insbesondere ermöglicht das `type`-Attribut die Validierung, dass die Datei mit einem bestimmten Medientyp übermittelt wird, und der Import schlägt fehl, wenn ein anderer Medientyp verwendet wird.

Zum Beispiel kann der obige Code so geschrieben werden, dass der erwartete Typ `"json"` ist und der Import fehlschlagen würde, wenn er mit dem Medientyp `text/javascript` (oder jedem anderen Medientyp als `application/json`) bereitgestellt wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut erlaubt es Ihnen anzugeben, dass Module als JSON oder CSS (und implizit als JavaScript) bereitgestellt werden.

Andere Attribute können ebenfalls unterstützt werden, und [können das Verhalten verschiedener Teile des Ladeprozesses beeinflussen](#beabsichtigte_semantik_für_import-attribute). Ein Syntaxfehler wird ausgelöst, wenn ein unbekanntes Attribut verwendet wird.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab. Der ECMAScript-Standard [definiert das `type`-Attribut mit dem Wert `"json"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert ebenfalls das `type`-Attribut mit den Werten `"json"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — diese sind die Attribute, die in Browser-Umgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der `"json"`-Typ gibt an, dass die importierte Datei JSON enthalten muss. Sie können JSON aus einer Datei in das `data`-Objekt laden, indem Sie den folgenden Code verwenden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wenn die Datei mit einem anderen Medientyp als `"application/json"` bereitgestellt wird, schlägt der Import fehl.

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anforderung mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert aber _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit kennt bereits die Analyse als JSON gegeben den MIME-Typ der Antwort. Es wird nur das Attribut verwendet, um die _nachträgliche Validierung_ durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Wenn sich der Antwort-Header beispielsweise in `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation hebt ausdrücklich `type: "json"` hervor, um unterstützt zu werden — wenn ein Modul als `type: "json"` behauptet wird und die Laufzeit diesen Import nicht fehlschlägt, muss es als JSON geparst werden.

Es gibt jedoch keine Verhaltensanforderung: Bei Importen ohne ein `type: "json"`-Attribut kann die Laufzeit es trotzdem als JSON analysieren, wenn Sicherheit in dieser Umgebung kein Thema ist.

Browser gehen andererseits implizit davon aus, dass das Modul JavaScript ist, wenn der `type` nicht angegeben ist, und schlagen fehl, wenn das Modul kein JavaScript ist (beispielsweise JSON). Dies garantiert, dass Modultypen immer streng validiert werden und verhindert jegliche Sicherheitsrisiken. Nicht-Browser-Laufzeiten wie Node und Deno stimmen mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Mit anderen Worten: Wenn Sie den `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie in der Regel einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den `css`-Typ, der ein Stylesheet als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in ein Skript importiert.

Der untenstehende Code zeigt, wie Sie einen Stil importieren und Ihrem Dokument hinzufügen könnten. Der Import löst eine Ausnahme aus, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` bereitgestellt wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext bereitstellt.

### Beabsichtigte Semantik für Import-Attribute

Ein Attribut kann das Verhalten der Laufzeitumgebung in jeder Phase des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (der String in der `from`-Klausel). Daher können unterschiedliche Attribute bei gleichem String-Pfad dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das Attribut `resolution-mode`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` und JSON-Module mit `destination: "json"` abgerufen. Dies bedeutet, dass der Server bei derselben Ziel-URL immer noch unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswerten: Die Laufzeitumgebung kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

## Beispiele

### Import von JSON-Modulen mit dem type-Attribut

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `Shilpa` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe aus ihnen machen (wie `import { name } from "data.json"`).

### Verwenden von Import-Attributen mit dynamischem Import

Import-Attribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass, wie bei statischen Importen, dynamische Importe für die Lebensdauer der Umgebung (z.B. eine Seite oder ein Worker) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (wie die neuesten Nachrichten oder die Credits eines Benutzers), verwenden Sie stattdessen die [Fetch-API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Vorschlag zu Import-Attributen](https://github.com/tc39/proposal-import-attributes)
- [Vorschlag für JSON-Module](https://github.com/tc39/proposal-json-modules)
