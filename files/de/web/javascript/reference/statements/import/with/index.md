---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die Funktion **Import-Attribute** weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modullösung, beim Abrufen, Parsen und Auswerten. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifikator-String und werden durch das Schlüsselwort `with` eingeleitet.

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

Der primäre Anwendungsfall besteht darin, Nicht-JS-Module zu laden, beispielsweise JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert aufbereitet und dem Programm von der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur basierend auf ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) identifiziert und geparst – die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server wurde gekapert oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, würde die Datei als Code geparst und ausgeführt. Wenn die "JSON"-Datei tatsächlich schädlichen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen und ein ernstes Sicherheitsrisiko darstellen.

Import-Attribute beheben dieses Problem, indem sie dem Autor erlauben, explizit anzugeben, wie ein Modul validiert werden soll. Beispielsweise würde die obige Import-Anweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel namens `type`. Um zu bestätigen, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Es wird separat in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) angegeben.

Daher sollte der obige Code wie folgt umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anforderung mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), aber es ändert _nicht_ die Art und Weise, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden muss, basierend auf dem Antwort-MIME-Typ. Sie verwendet das Attribut nur, um _nachträglich_ zu überprüfen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielsweise, wenn der Antwort-Header zu `Content-Type: text/javascript` geändert wird, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation macht ausdrücklich klar, dass `type: "json"` unterstützt werden muss — wenn ein Modul als `type: "json"` deklariert ist und die Laufzeit diesen Import nicht fehlschlägt, muss es als JSON geparst werden. Allerdings gibt es sonst keine Verhaltensanforderungen: Bei Importen ohne ein `type: "json"`-Attribut kann die Laufzeit es dennoch als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem darstellt. Browser hingegen nehmen implizit an, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul nicht JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer strikt validiert werden und verhindert jegliche Sicherheitsrisiken. Tatsächlich stimmen Nicht-Browser-Laufzeiten wie Node und Deno mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist - obwohl nur `type` von der Sprache spezifiziert ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modulladevorgangs ändern:

- Lösung: das Attribut ist Teil des Modulspezifikators (des Strings in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute zu vollständig unterschiedlichen zu ladenden Modulen führen. Zum Beispiel [unterstützt TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Beispielsweise werden CSS-Module mit der [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen und JSON-Module werden mit `destination: "json"` abgerufen. Dies bedeutet, dass der Server bei gleicher Ziel-URL weiterhin unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet werden soll.

Sie können jedoch keine unbekannten Attribute verwenden – die Laufzeit wirft einen Fehler aus, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### Importieren von JSON-Modulen mit dem type-Attribut

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

Starten Sie einen lokalen HTTP-Server (siehe [Problemlösungen](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe von ihnen durchführen (wie `import { name } from "data.json"`).

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
