---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Das Bestätigungsfeature ist jetzt nicht standardisiert. Überprüfen Sie die [Tabelle zur Browserkompatibilität](#browserkompatibilität) für Details.

Das **Importattribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens der Modulauflösung, des Abrufs, Parsens und der Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen der Modulbezeichnerzeichenfolge und werden mit dem Schlüsselwort `with` vorangestellt.

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

## Beschreibung

Importattribute geben der Laufzeit an, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web resultiert jede Importanweisung in einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und dem Programm zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur anhand ihres ausgelieferten [MIME-Typs](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser sagt, dass die Datei JSON ist und als JSON geparst werden muss. Sollte aus irgendeinem Grund (z.B. der Server wurde gehackt oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt sein, dann würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unangemessen externen Code ausführen, was eine ernsthafte Sicherheitsgefährdung darstellt.

Importattribute lösen dieses Problem, indem sie dem Autor ermöglichen, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Importanweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit zu sagen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, lautet der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code wie folgt umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem Header `{{HTTPHeader("Accept")}}: application/json`), ändert jedoch nicht, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, angesichts des Antwort-MIME-Typs. Sie verwendet das Attribut nur zum Überprüfen nach dem Laden, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn sich der Antwortheader zu `Content-Type: text/javascript` ändert, wird das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation betont ausdrücklich, dass `type: "json"` unterstützt werden muss — wenn ein Modul als `type: "json"` deklariert wird und die Laufzeit diesen Import nicht fehlschlagen lässt, dann muss es als JSON geparst werden. Es gibt jedoch keine sonstigen Verhaltensanforderungen: Für Importe ohne ein `type: "json"`-Attribut darf die Laufzeit es dennoch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsprobleme bestehen. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul nicht JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert Sicherheitsrisiken. Tatsächlich orientieren sich Nicht-Browser-Laufzeiten wie Node und Deno an der Browser-Semantik und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein {{domxref("CSSStyleSheet")}}-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so konzipiert, dass sie erweiterbar ist — obwohl nur `type` von der Sprache spezifiziert wird, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modul-Ladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulbezeichners (die Zeichenfolge in der `from`-Klausel). Daher können bei gleichem Zeichenfolgenpfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen, und JSON-Module werden mit `destination: "json"` abgerufen. Das bedeutet, dass der Server bei gleicher Ziel-URL immer noch unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### Importieren von JSON-Modulen mit dem Typattribut

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
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe aus ihnen (wie `import { name } from "data.json"`) durchführen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Importattribute Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module Vorschlag](https://github.com/tc39/proposal-json-modules)
