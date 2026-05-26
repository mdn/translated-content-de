---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 27a436c26d8c0ff74bc38bea990465be3cf80021
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assert-Funktion ist nun nicht standardmäßig. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Importattribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und der Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifizierer und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Zeichenfolgenliteral sein. Alle Schlüssel müssen eindeutig und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Zeichenfolgenliteral sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Ein nicht unterstützter `key` wurde in einem _statischen Import_ angegeben.

- {{jsxref("TypeError")}}
  - : Ein nicht unterstützter `key` wurde in einem _dynamischen Import_ angegeben.

Beachten Sie, dass die Angabe eines nicht unterstützten Wertes für einen unterstützten Schlüssel in einigen Fällen ebenfalls zu einer Ausnahme führen kann, abhängig vom Schlüssel.

## Beschreibung

Importattribute geben der Laufzeit vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module zu laden, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und dem Programm von der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur gemäß ihrem bereitgestellten [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server gehackt oder gefälscht wurde) der Medientyp in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Erklärung externen Code unbeabsichtigt ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Importattribute beheben dieses Problem, indem es dem Autor ermöglicht wird, explizit anzugeben, wie ein Modul validiert werden soll. Insbesondere das `type`-Attribut ermöglicht Ihnen zu überprüfen, dass die Datei mit einem bestimmten Medientyp bereitgestellt wird, und schlägt beim Import fehl, wenn ein anderer Medientyp verwendet wird.

Zum Beispiel kann der obige Code so geschrieben werden, dass angegeben wird, dass der erwartete Typ `"json"` ist und der Import fehlschlägt, wenn er mit `text/javascript` (oder einem anderen Medientyp als `application/json`) bereitgestellt wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut erlaubt es Ihnen anzugeben, dass Module als JSON, CSS oder einfacher Text (und implizit als JavaScript) bereitgestellt werden.

Andere Attribute können ebenfalls unterstützt werden und [das Verhalten verschiedener Teile des Ladeprozesses beeinflussen](#beabsichtigte_semantik_für_importattribute).
Ein Syntaxfehler wird ausgelöst, wenn ein unbekanntes Attribut verwendet wird.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab.
Der ECMAScript-Standard [definiert das `type`-Attribut mit den Werten `"json"` und `"text"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert ebenfalls das `type`-Attribut mit den Werten `"json"`, `"text"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — dies sind die Attribute, die in Browserumgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der `json`-Typ gibt an, dass die importierte Datei JSON enthalten muss.
Sie können JSON aus einer Datei in das `data`-Objekt laden, indem Sie den folgenden Code verwenden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wenn die Datei mit einem anderen Medientyp als `"application/json"` bereitgestellt wird, schlägt der Import fehl.

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert aber _nicht_ die Art und Weise, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden muss, wenn der Antwort-MIME-Typ angezeigt wird. Es verwendet das Attribut nur zur _nachträglichen_ Prüfung, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn sich der Antwort-Header zu `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation fordert ausdrücklich, dass `type: "json"` unterstützt werden muss — wenn ein Modul als `type: "json"` bestätigt wird und die Laufzeit diesen Import nicht fehl schlägt, dann muss es als JSON geparst werden.

Es gibt jedoch sonst keine Verhaltensanforderung: Für Importe ohne ein `type: "json"`-Attribut kann die Laufzeit es dennoch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsbedenken bestehen.

Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, wenn der `type` nicht angegeben ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert Sicherheitsrisiken.
Nicht-Browser-Laufzeiten wie Node und Deno orientieren sich an den Brower-Semantiken und erzwingen `type` für JSON-Module.

Mit anderen Worten, wenn Sie den `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie normalerweise einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den `css`-Typ, der ein Stylesheet in ein Skript als ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert.

Der folgende Code zeigt, wie Sie einen Stil importieren und Ihrem Dokument hinzufügen können. Der Import löst eine Ausnahme aus, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` bereitgestellt wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass der Import von CSS-Modulen in Workern normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext bereitstellt.

#### Textmodule (`{ type: "text" }`)

Der `text`-Typ ermöglicht es, den Quellcode eines Moduls als Zeichenfolgenwert zu importieren.
Sie können Text aus einer Datei in die `text`-Zeichenkette laden, indem Sie den folgenden Code verwenden:

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

Die Datei wird mit einem `{{HTTPHeader("Accept")}}: text/plain`-Header angefordert, aber der Wert des `{{HTTPHeader("Content-Type")}}`-Headers der Antwort wird ignoriert, und alle Dateien werden als UTF-8 geparst. Sie kann beliebige textuelle Daten enthalten, auch JavaScript-Code (der als reiner Text behandelt wird).

### Beabsichtigte Semantik für Importattribute

Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifizierers (des Strings im `from`-Clause). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel [unterstützt TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abruf: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt, JSON-Module mit `destination: "json"` und Textmodule mit `destination: "text"` abgerufen. Das bedeutet, dass der Server auf dieselbe Ziel-URL dennoch unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um festzustellen, wie das Modul geparst und ausgewertet werden soll.

## Beispiele

### Importieren von JSON-Modulen mit dem type-Attribut

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

### Verwendung von Importattributen mit dynamischem Import

Importattribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass dynamische Importe wie statische Importe für die Lebensdauer der Umgebung (z.B. einer Seite oder eines Workers) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (z.B. die neuesten Nachrichten oder Credits eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Importattribute-Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module-Vorschlag](https://github.com/tc39/proposal-json-modules)
- [Importtext-Vorschlag](https://github.com/tc39/proposal-import-text)
