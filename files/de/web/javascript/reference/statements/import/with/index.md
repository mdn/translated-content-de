---
title: Import Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: be011c2d90dd6d754ebb7c95521fef185ef1d3c0
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags nutzte das Schlüsselwort `assert` anstelle von `with`. Das Assertions-Feature ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Import Attribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und der Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import, etc. Sie folgen dem Modul-Spezifier-String und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im Parameter `options` als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen einzigartig sein und zur Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Ein nicht unterstützter `key` wurde in einem _statischen Import_ angegeben.

- {{jsxref("TypeError")}}
  - : Ein nicht unterstützter `key` wurde in einem _dynamischen Import_ angegeben.

Beachten Sie, dass die Angabe eines nicht unterstützten Wertes für einen unterstützten Schlüssel in manchen Fällen ebenfalls zu einer Ausnahme führen kann, abhängig vom Schlüssel.

## Beschreibung

Import Attribute informieren die Laufzeit darüber, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert vorbereitet und dem Programm durch die Laufzeit zur Verfügung gestellt. Beispielsweise könnte die Antwort folgendermaßen aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur gemäß ihrem gelieferten [Medientyp (MIME-Typ)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn der Medientyp im Serverantwort-Header aus irgendeinem Grund (z. B. der Server wird gekapert oder ist fehlerhaft) auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, wird die Datei als Code parsiert und ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Import Attribute lösen dieses Problem, indem sie dem Autor ermöglichen, explizit festzulegen, wie ein Modul validiert werden soll.
Insbesondere ermöglicht das `type`-Attribut, zu validieren, dass die Datei mit einem bestimmten Medientyp geliefert wird, und schlägt der Import fehl, wenn ein anderer Medientyp verwendet wird.

Beispielsweise kann der obige Code so geschrieben werden, dass der erwartete Typ `"json"` ist und der Import fehlschlägt, wenn er mit `text/javascript` (oder einem anderen Medientyp als `application/json`) geliefert wird:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut erlaubt es Ihnen zu spezifizieren, dass Module als JSON oder CSS (und implizit als JavaScript) serviert werden.

Andere Attribute können ebenfalls unterstützt werden und [können das Verhalten verschiedener Teile des Ladeprozesses beeinflussen](#beabsichtigte_semantik_für_import_attribute).
Ein Syntaxfehler wird ausgelöst, wenn ein unbekanntes Attribut verwendet wird.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab.
Der ECMAScript-Standard [definiert das `type`-Attribut mit dem Wert `"json"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert das `type`-Attribut ebenfalls mit den Werten `"json"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — dies sind die Attribute, die in Browserumgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der `json`-Typ gibt an, dass die importierte Datei JSON enthalten muss.
Sie können JSON aus einer Datei in das `data`-Objekt laden, indem Sie den folgenden Code verwenden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wird die Datei mit einem anderen Medientyp als `"application/json"` bereitgestellt, schlägt der Import fehl.

Das `type`-Attribut beeinflusst, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert aber _nicht_, wie das Modul analysiert oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden muss, basierend auf dem MIME-Typ der Antwort. Sie verwendet das Attribut nur, um _nachträgliche_ Überprüfungen durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Wenn beispielsweise der Antwortheader zu `Content-Type: text/javascript` geändert wird, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation ruft explizit `type: "json"` auf, um unterstützt zu werden — wenn ein Modul als `type: "json"` bestätigt wird und die Laufzeit diesen Import nicht fehlschlagen lässt, muss es als JSON geparst werden.

Es gibt jedoch keine Verhaltensanforderungen: Für Importe ohne `type: "json"`-Attribut kann die Laufzeit es immer noch als JSON parsen, wenn die Sicherheit in dieser Umgebung kein Problem darstellt.

Browsers hingegen gehen implizit davon aus, dass das Modul JavaScript ist, wenn der `type`-Wert nicht angegeben wird, und scheitern, wenn das Modul nicht JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert Sicherheitsrisiken.
Nicht-Browser-Laufzeiten wie Node und Deno stimmen mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Mit anderen Worten, wenn Sie den `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie normalerweise einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den `css`-Typ, der ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in ein Skript importiert.

Der folgende Code zeigt, wie Sie einen Stil importieren und Ihrem Dokument hinzufügen können.
Der Import wird eine Ausnahme auslösen, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` bereitgestellt wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker in der Regel nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Fensterkontext zur Verfügung stellt.

### Beabsichtigte Semantik für Import Attribute

Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modul-Ladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modul-Spezifizierers (der String in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig andere Module geladen werden. Beispielsweise [unterstützt TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: Beispielsweise werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen, und JSON-Module werden mit `destination: "json"` abgerufen. Dies bedeutet, dass der Server bei gleicher Ziel-URL dennoch unterschiedlichen Inhalt zurückgeben kann.
- Parsing und Auswertung: Zu bestimmen, wie das Modul geparst und ausgewertet wird, kann die Laufzeit das Attribut verwenden.

## Beispiele

### Import von JSON-Modulen mit dem Type-Attribut

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
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe aus ihnen (wie `import { name } from "data.json"`) durchführen.

### Verwendung von Import-Attributen mit dynamischem Import

Import-Attribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass, ähnlich wie bei statischen Importen, dynamische Importe für die Lebensdauer der Umgebung (z. B. einer Seite oder eines Workers) zwischengespeichert werden. Wenn Sie erwarten, dass diese Daten sich ändern (wie die neuesten Nachrichten oder die Credits eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Import-Attribut-Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module-Vorschlag](https://github.com/tc39/proposal-json-modules)
