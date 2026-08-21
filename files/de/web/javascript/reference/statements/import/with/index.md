---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 44a853a7fce4ef042b6eeddc96f0a587f25704d3
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das `assert`-Schlüsselwort anstelle von `with`. Die Assertion-Funktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **Importattribute**-Funktion weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Auflösung, dem Abrufen, Parsen und der Auswertung von Modulen. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)-Anweisungen unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifikator-String und beginnen mit dem Schlüsselwort `with`. Wenn sie mit `import()` verwendet werden, werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Zeichenfolgenliteral sein. Alle Schlüssel müssen eindeutig sein und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Zeichenfolgenliteral sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Ein nicht unterstützter `key` wurde in einem _statischen Import_ angegeben.

- {{jsxref("TypeError")}}
  - : Ein nicht unterstützter `key` wurde in einem _dynamischen Import_ angegeben.

Beachten Sie, dass die Angabe eines nicht unterstützten Werts für einen unterstützten Schlüssel in einigen Fällen ebenfalls zu einer Ausnahme führen kann, abhängig vom Schlüssel.

## Beschreibung

Importattribute teilen der Laufzeit mit, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module zu laden, wie z. B. JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und der Laufzeit dem Programm zur Verfügung gestellt. Die Antwort könnte beispielsweise wie folgt aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur basierend auf ihrem servierten [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. bei einem Angriff auf den Server oder einer betrügerischen Serverantwort) der Medientyp in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, würde die Datei als Code geparst und ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Importattribute lösen dieses Problem, indem sie es dem Autor ermöglichen, ausdrücklich anzugeben, wie ein Modul validiert werden soll. Insbesondere ermöglicht das `type`-Attribut Ihnen, zu überprüfen, dass die Datei mit einem bestimmten Medientyp serviert wird, und schlägt fehl, wenn ein anderer Medientyp verwendet wird.

Zum Beispiel kann der obige Code geschrieben werden, um anzugeben, dass der erwartete Typ `"json"` ist und der Import fehlschlägt, wenn er mit `text/javascript` (oder einem anderen Medientyp als `application/json`) serviert wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ermöglicht es Ihnen, anzugeben, dass Module als JSON, CSS oder als reiner Text (und implizit als JavaScript) serviert werden.

Es können auch andere Attribute unterstützt werden und [können das Verhalten verschiedener Teile des Ladeprozesses beeinflussen](#beabsichtigte_semantik_für_importattribute). Es wird ein Syntaxfehler ausgelöst, wenn ein unbekanntes Attribut verwendet wird.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab. Der ECMAScript-Standard [definiert das `type`-Attribut mit den Werten `"json"` und `"text"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert ebenfalls das `type`-Attribut mit den Werten `"json"`, `"text"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — dies sind die Attribute, die in Browserumgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der `json`-Typ gibt an, dass die importierte Datei JSON enthalten muss. Sie können JSON aus einer Datei in das `data`-Objekt mit folgendem Code laden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wenn die Datei mit einem anderen Medientyp als `"application/json"` serviert wird, schlägt der Import fehl.

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), aber es ändert _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits aufgrund des Antwort-MIME-Typs, das Modul als JSON zu parsen. Es verwendet das Attribut nur, um _nachträgliche_ Überprüfung durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielsweise, wenn sich der Antwortheader stattdessen in `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation nennt ausdrücklich `type: "json"` als unterstützt — wenn ein Modul als `type: "json"` behauptet wird und die Laufzeit diesen Import nicht fehlschlägt, muss es als JSON geparst werden.

Andernfalls gibt es keine Verhaltensanforderung: Für Importe ohne ein `type: "json"`-Attribut kann die Laufzeit es dennoch als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem ist.

Browser gehen hingegen implizit davon aus, dass das Modul JavaScript ist, wenn der `type` nicht angegeben ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel, JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert so Sicherheitsrisiken. Nicht-Browser-Laufzeiten wie Node und Deno stimmen mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Mit anderen Worten, wenn Sie den `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie normalerweise einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den `css`-Typ, der ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in ein Skript importiert.

Der unten stehende Code zeigt, wie Sie einen Stil importieren und zu Ihrem Dokument hinzufügen können. Der Import wirft eine Ausnahme, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` serviert wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext bereitstellt.

#### Textmodule (`{ type: "text" }`)

Der `text`-Typ ermöglicht das Importieren der Quelle eines Moduls als Zeichenfolgenwert. Sie können Text aus einer Datei in die `text`-Zeichenfolge mit folgendem Code laden:

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

Die Datei wird mit einem `{{HTTPHeader("Accept")}}: text/plain`-Header angefordert, aber der Wert des `{{HTTPHeader("Content-Type")}}`-Headers der Antwort wird ignoriert, und alle Dateien werden als UTF-8 geparst. Sie kann beliebige Textdaten enthalten, sogar JavaScript-Code (der als Klartext behandelt wird).

### Beabsichtigte Semantik für Importattribute

Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (des Strings in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig verschiedene Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit `destination` auf `"style"` abgerufen, JSON-Module mit `destination: "json"`, und Textmodule mit `destination: "text"`. Das bedeutet, dass der Server bei derselben Ziel-URL dennoch unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und rufen Sie die `index.html`-Seite auf. Sie sollten `Shilpa` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe von ihnen machen (wie `import { name } from "data.json"`).

### Verwenden von Importattributen mit dynamischem Import

Importattribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass, wie bei statischen Importen, dynamische Importe für die Lebensdauer der Umgebung (z. B. eine Seite oder ein Worker) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (wie zum Beispiel die neuesten Nachrichten oder das Guthaben eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

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
- [Importtext Vorschlag](https://github.com/tc39/proposal-import-text)
