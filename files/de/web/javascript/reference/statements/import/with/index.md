---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete statt `with` das Schlüsselwort `assert`. Die Assertion-Funktion ist jetzt nicht standardisiert. Einzelheiten finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Die Funktion **Import-Attribute** weist die Laufzeitumgebung an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei Modulauflösung, Abruf, Parsen und Auswertung. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischem [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen auf die Modulbezeichnerzeichenfolge und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im Parameter `options` als Eigenschaft `with` angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen eindeutig und der Laufzeitumgebung bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : In einem _statischen Import_ wurde ein nicht unterstütztes `key` angegeben.

- {{jsxref("TypeError")}}
  - : In einem _dynamischen Import_ wurde ein nicht unterstütztes `key` angegeben.

Beachten Sie, dass das Angeben eines nicht unterstützten Werts für einen unterstützten Schlüssel in einigen Fällen ebenfalls zu einer Ausnahme führen kann, abhängig vom Schlüssel.

## Beschreibung

Import-Attribute teilen der Laufzeitumgebung mit, wie ein bestimmtes Modul geladen werden soll.

Der wichtigste Anwendungsfall ist das Laden von Nicht-JS-Modulen, etwa JSON-Modulen und CSS-Modulen. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann von der Laufzeitumgebung in einen JavaScript-Wert aufbereitet und dem Programm zur Verfügung gestellt. Beispielsweise kann die Antwort wie folgt aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden ausschließlich anhand ihres bereitgestellten [Medientyps (MIME-Typs)](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht zur Identifizierung des Dateityps verwendet werden. In diesem Fall ist der MIME-Typ `application/json`, der dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. weil der Server übernommen wurde oder fehlerhaft ist) der Medientyp in der Serverantwort auf `text/javascript` (für JavaScript-Quelltext) gesetzt ist, würde die Datei als Code geparst und ausgeführt werden. Wenn die „JSON“-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was eine ernsthafte Sicherheitsbedrohung darstellt.

Import-Attribute lösen dieses Problem, indem sie dem Autor ermöglichen, explizit anzugeben, wie ein Modul validiert werden soll.
Insbesondere ermöglicht Ihnen das Attribut `type`, zu validieren, dass die Datei mit einem bestimmten Medientyp bereitgestellt wird, und lässt den Import fehlschlagen, wenn ein anderer Medientyp verwendet wird.

Der obige Code kann beispielsweise so geschrieben werden, dass der erwartete Typ `"json"` angegeben wird; der Import würde fehlschlagen, wenn er mit `text/javascript` (oder einem anderen Medientyp als `application/json`) bereitgestellt würde:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das Attribut `type` ermöglicht Ihnen anzugeben, dass Module als JSON, CSS oder Klartext bereitgestellt werden (und implizit als JavaScript).

Möglicherweise werden auch andere Attribute unterstützt, die [das Verhalten verschiedener Teile des Ladeprozesses beeinflussen können](#beabsichtigte_semantik_für_import-attribute).
Bei Verwendung eines unbekannten Attributs wird ein Syntaxfehler ausgelöst.

### Standardattribute

Die verfügbaren Attribute hängen von der Sprache und der Laufzeitumgebung ab.
Der ECMAScript-Standard [definiert das Attribut `type` mit den Werten `"json"` und `"text"`](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule).

Die HTML-Spezifikation [definiert ebenfalls das Attribut `type` mit den Werten `"json"`, `"text"` und `"css"`](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) — dies sind die Attribute, die in Browserumgebungen unterstützt werden.

#### JSON-Module (`{ type: "json" }`)

Der Typ `json` gibt an, dass die importierte Datei JSON enthalten muss.
Mit folgendem Code können Sie JSON aus einer Datei in das Objekt `data` laden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Wenn die Datei mit einem anderen Medientyp als `"application/json"` bereitgestellt wird, schlägt der Import fehl.

Das Attribut `type` verändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem Header `{{HTTPHeader("Accept")}}: application/json`), verändert jedoch _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeitumgebung weiß anhand des MIME-Typs der Antwort bereits, dass das Modul als JSON geparst werden muss. Sie verwendet das Attribut nur zur _nachträglichen_ Überprüfung, dass das Modul `data.json` tatsächlich ein JSON-Modul ist. Wenn sich beispielsweise der Antwort-Header stattdessen zu `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation nennt explizit die Unterstützung von `type: "json"` — wenn für ein Modul `type: "json"` behauptet wird und die Laufzeitumgebung diesen Import nicht fehlschlagen lässt, muss es als JSON geparst werden.

Andernfalls gibt es jedoch keine Verhaltensanforderung: Bei Imports ohne ein Attribut `type: "json"` kann die Laufzeitumgebung es weiterhin als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem darstellt.

Browser hingegen nehmen implizit an, dass das Modul JavaScript ist, wenn `type` nicht angegeben ist, und schlagen fehl, wenn das Modul kein JavaScript ist (beispielsweise JSON). Dies stellt sicher, dass Modultypen immer strikt validiert werden, und verhindert Sicherheitsrisiken.
Nicht-Browser-Laufzeitumgebungen wie Node und Deno orientieren sich an der Browser-Semantik und erzwingen `type` für JSON-Module.

Mit anderen Worten: Wenn Sie `type` weglassen und versuchen, eine Datei als `"application/json"` zu importieren, erhalten Sie normalerweise einen Fehler wie den folgenden:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

#### CSS-Module (`{ type: "css" }`)

Die HTML-Spezifikation definiert den Typ `css`, der ein Stylesheet als [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt in ein Skript importiert.

Der folgende Code zeigt, wie Sie einen Stil importieren und Ihrem Dokument hinzufügen können.
Der Import löst eine Ausnahme aus, wenn `example_styles.css` mit einem anderen Medientyp als `"text/css"` bereitgestellt wird.

```js
import exampleStyles from "https://example.com/example_styles.css" with { type: "css" };

document.adoptedStyleSheets.push(exampleStyles);
```

Beachten Sie, dass das Importieren von CSS-Modulen in Worker normalerweise nicht unterstützt wird, da die CSSOM-Spezifikation `CSSStyleSheet` nur im Window-Kontext verfügbar macht.

#### Textmodule (`{ type: "text" }`)

Der Typ `text` ermöglicht das Importieren des Quelltexts eines Moduls als String-Wert.
Mit folgendem Code können Sie Text aus einer Datei in den String `text` laden:

```js
import text from "https://example.com/file.txt" with { type: "text" };
```

Die Datei wird mit einem Header `{{HTTPHeader("Accept")}}: text/plain` angefordert, aber der Wert des Antwort-Headers `{{HTTPHeader("Content-Type")}}` wird ignoriert, und alle Dateien werden als UTF-8 geparst. Sie kann beliebige Textdaten enthalten, sogar JavaScript-Code (der als Klartext behandelt wird).

Verwenden Sie nach Möglichkeit [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source), um ein kompiliertes Modul für eine spätere Instanziierung zu erhalten, oder [`import defer`](/de/docs/Web/JavaScript/Reference/Statements/import/defer), um die synchrone Auswertung eines Moduls aufzuschieben. Die Verwendung von `with { type: "text" }` bedeutet, dass das Modul den Cache nicht wiederverwenden kann, wenn es an anderer Stelle importiert wurde, und die benutzerseitige Auswertung von String-Quellen möglicherweise nicht mit strikten [CSP](/de/docs/Web/HTTP/Guides/CSP)-Einstellungen kompatibel ist.

### Beabsichtigte Semantik für Import-Attribute

Ein Attribut kann das Verhalten der Laufzeitumgebung in jeder Phase des Modulladeprozesses verändern:

- Auflösung: Das Attribut ist Teil des Modulbezeichners (der String in der `from`-Klausel). Daher können bei demselben String-Pfad unterschiedliche Attribute dazu führen, dass vollständig unterschiedliche Module geladen werden. Beispielsweise [unterstützt TypeScript das Attribut `resolution-mode`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abruf: CSS-Module werden beispielsweise mit auf `"style"` gesetztem [`destination`](/de/docs/Web/API/Request/destination) abgerufen, JSON-Module mit `destination: "json"` und Textmodule mit `destination: "text"`. Das bedeutet, dass der Server bei derselben Ziel-URL weiterhin unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeitumgebung kann das Attribut verwenden, um festzulegen, wie das Modul geparst und ausgewertet wird.

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und rufen Sie die Seite `index.html` auf. Sie sollten `Shilpa` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können aus ihnen keine benannten Imports durchführen (wie `import { name } from "data.json"`).

### Verwendung von Import-Attributen mit dynamischem Import

Import-Attribute werden auch als zweiter Parameter der Syntax `import()` akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass dynamische Imports wie statische Imports für die Lebensdauer der Umgebung (z. B. einer Seite oder eines Workers) im Cache gespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (etwa aktuelle Nachrichten oder die Guthaben eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Vorschlag für Import-Attribute](https://github.com/tc39/proposal-import-attributes)
- [Vorschlag für JSON-Module](https://github.com/tc39/proposal-json-modules)
- [Vorschlag für Import Text](https://github.com/tc39/proposal-import-text)
