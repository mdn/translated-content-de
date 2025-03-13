---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die Funktion der **Import-Attribute** weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und der Auswertung. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dem dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modul-Spezifikator-String und stehen im Präfix mit dem Schlüsselwort `with`.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen eindeutig sein und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

## Beschreibung

Import-Attribute geben der Laufzeit an, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module wie JSON-Module und CSS-Module zu laden. Betrachten Sie folgenden Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann von der Laufzeit in einen JavaScript-Wert umgewandelt und dem Programm zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur gemäß ihrem gelieferten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Falls aus irgendeinem Grund (z.B. der Server wird von Dritten gekapert oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich böswilligen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Import-Attribute lösen dieses Problem, indem sie es dem Autor ermöglichen, ausdrücklich anzugeben, wie ein Modul validiert werden sollte. Zum Beispiel würde die oben stehende Import-Anweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass es sich um ein JSON-Modul handelt, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Es wird separat von der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) angegeben.

Daher sollte der obige Code umgeschrieben werden als:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert aber _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits anhand des MIME-Typs in der Antwort, dass das Modul als JSON geparst werden soll. Es verwendet das Attribut nur, um _nachträgliche_ Prüfungen durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Wenn sich zum Beispiel der Antwort-Header in `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation hebt `type: "json"` ausdrücklich hervor, dass es unterstützt werden muss — wenn ein Modul als `type: "json"` deklariert wird und die Laufzeit diesen Import nicht fehlschlagen lässt, dann muss es als JSON geparst werden. Es gibt jedoch keine sonstigen Verhaltensanforderungen: Bei Imports ohne `type: "json"`-Attribut kann die Laufzeit es dennoch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsfragen bestehen. Browser hingegen nehmen implizit an, dass das Modul JavaScript ist, und scheitern, wenn das Modul nicht JavaScript ist (beispielsweise JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und vermeidet jegliche Sicherheitsrisiken. In Realität stimmen nicht-browserbasierte Laufzeiten wie Node und Deno mit den Browsersemantiken überein und erzwingen `type`-Attribute für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, welcher ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Syntax der Attribute ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` von der Sprache spezifiziert wird, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modul-Ladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (der String in der `from`-Klausel). Daher können bei demselben String-Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt TypeScript das [`resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit der [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` und JSON-Module mit `destination: "json"` abgerufen. Das bedeutet, dass der Server bei derselben Ziel-URL dennoch unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet werden soll.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler aus, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### Importieren von JSON-Modulen mit dem Type-Attribut

In `data.json`:

```json
{
  "name": "John"
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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine Namensimporte aus ihnen machen (wie `import { name } from "data.json"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Import-Attribute-Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module-Vorschlag](https://github.com/tc39/proposal-json-modules)
