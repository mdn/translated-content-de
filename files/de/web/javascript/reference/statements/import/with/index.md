---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **Importattribute**-Funktion weist die Laufzeitumgebung an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modullauflösung, beim Abruf, beim Parsen und bei der Auswertung. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namensraumimport usw. Sie folgen dem Modulspezifier-String und beginnen mit dem Schlüsselwort `with`. Wenn sie mit `import()` verwendet werden, werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Schlüsselattribut. Kann ein Bezeichner oder ein Stringliteral sein. Alle Schlüssel müssen eindeutig sein und der Laufzeitumgebung bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Stringliteral sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Ein nicht unterstützter `key` wurde in einem _statischen Import_ angegeben.

- {{jsxref("TypeError")}}
  - : Ein nicht unterstützter `key` wurde in einem _dynamischen Import_ angegeben.

Beachten Sie, dass das Angeben eines nicht unterstützten Wertes für einen unterstützten Schlüssel in einigen Fällen ebenfalls zu einer Ausnahme führen kann, je nach Schlüssel.

## Beschreibung

Importattribute geben der Runtime vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptverwendungszweck ist das Laden von nicht-JS-Modulen, wie z. B. JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in ein JavaScript-Wert vorbereitet und der Runtime zur Verfügung gestellt. Die Antwort könnte beispielsweise so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur nach dem bereitgestellten [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. Server-Manipulation oder Fälschung) der Medientyp in der Serverantwort auf `text/javascript` (für JavaScript-Quellen) gesetzt wird, würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration ungewollt externen Code ausführen, was ein ernsthaftes Sicherheitsrisiko darstellt.

Importattribute beheben dieses Problem, indem sie dem Autoren ermöglichen, explizit anzugeben, wie ein Modul validiert werden sollte. Insbesondere erlaubt das `type`-Attribut Ihnen, zu überprüfen, ob die Datei mit einem bestimmten Medientyp bereitgestellt wird, und den Import schlägt fehl, wenn ein anderer Medientyp verwendet wird.

Beispielsweise kann der obige Code so geschrieben werden, dass der erwartete Typ `"json"` ist, und der Import würde fehlschlagen, wenn es als `text/javascript` (oder einem anderen Medientyp als `application/json`) bereitgestellt wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ermöglicht es Ihnen zu spezifizieren, dass Module als JSON, CSS oder reiner Text bereitgestellt werden (und implizit als JavaScript).

Andere Attribute können ebenfalls unterstützt werden und [können das Verhalten verschiedener Teile des Ladeprozesses beeinflussen](#beabsichtigte_semantik_für_importattribute). Ein Syntaxfehler wird ausgelöst, wenn ein unbekanntes Attribut verwendet wird.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab. Der ECMAScript-Standard [definiert das `type`-Attribut mit den Werten `"json"` und `"text"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert ebenfalls das `type`-Attribut mit den Werten `"json"`, `"text"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — dies sind die Attribute, die in Browserumgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der `json`-Typ gibt an, dass die importierte Datei JSON enthalten muss. Sie können JSON von einer Datei in das `data`-Objekt laden, indem Sie den folgenden Code verwenden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wenn die Datei mit einem anderen Medientyp als `"application/json"` bereitgestellt wird, schlägt der Import fehl.

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), aber _nicht_, wie das Modul geparst oder ausgewertet wird. Die Runtime weiß bereits, dass das Modul als JSON geparst werden muss, basierend auf dem MIME-Typ der Antwort. Sie verwendet das Attribut nur, um _nachträgliches_ Überprüfen durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn der Antwort-Header stattdessen auf `Content-Type: text/javascript` geändert würde, würde das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation ruft explizit `type: "json"` als unterstütztes Attribut auf — wenn ein Modul als `type: "json"` angegeben ist und die Runtime diesen Import nicht fehlschlägt, muss es als JSON geparst werden.

Es gibt jedoch keine Verhaltensanforderung anderweitig: Bei Importen ohne ein `type: "json"`-Attribut kann die Runtime es dennoch als JSON parsen, wenn die Sicherheit in dieser Umgebung kein Problem darstellt.

Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, wenn der `type` nicht angegeben ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert Sicherheitsrisiken. Nicht-Browser-Laufzeiten wie Node und Deno stimmen mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Mit anderen Worten: Wenn Sie den `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie normalerweise einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den `css`-Typ, der ein Stylesheet in ein Skript als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert.

Der untenstehende Code zeigt, wie Sie möglicherweise einen Stil importieren und zu Ihrem Dokument hinzufügen können. Der Import wird eine Ausnahme werfen, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` bereitgestellt wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker-Umgebungen normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext bereitstellt.

#### Textmodule (`{ type: "text" }`)

Der `text`-Typ ermöglicht das Importieren der Quelle eines Moduls als String-Wert. Sie können Text von einer Datei in den `text`-String laden, indem Sie den folgenden Code verwenden:

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

Die Datei wird mit einem `{{HTTPHeader("Accept")}}: text/plain`-Header angefordert, aber der Wert des `{{HTTPHeader("Content-Type")}}`-Headers der Antwort wird ignoriert, und alle Dateien werden als UTF-8 geparst. Sie kann beliebige Textdaten enthalten, sogar JavaScript-Code (der als reiner Text behandelt wird).

### Beabsichtigte Semantik für Importattribute

Ein Attribut kann das Verhalten der Runtime in jeder Phase des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspecifiers (des Strings in der `from`-Klausel). Daher können bei gleichem Stringpfad unterschiedliche Attribute dazu führen, dass vollständig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen, JSON-Module mit `destination: "json"`, und Textmodule mit `destination: "text"`. Dies bedeutet, dass der Server bei gleicher Ziel-URL dennoch unterschiedlichen Inhalt zurückgeben kann.
- Parsen und Auswertung: Die Runtime kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

## Beispiele

### Importieren von JSON-Modulen mit dem Type-Attribut

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
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe aus ihnen durchführen (wie `import { name } from "data.json"`).

### Verwenden von Importattributen mit dynamischem Import

Importattribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass dynamische Importe, genau wie statische Importe, für die Lebensdauer der Umgebung (z. B. einer Seite oder eines Workers) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (wie die neuesten Nachrichten oder die Punkte eines Benutzers), verwenden Sie stattdessen die [Fetch-API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Importattribute Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module Vorschlag](https://github.com/tc39/proposal-json-modules)
- [Import Text Vorschlag](https://github.com/tc39/proposal-import-text)
