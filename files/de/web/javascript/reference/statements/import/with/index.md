---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Import-Attribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und Auswerten. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen eindeutig sein und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

## Beschreibung

Import-Attribute teilen der Laufzeit mit, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module zu laden, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert konvertiert und der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur gemäß ihrem servierten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht zur Identifizierung des Dateityps verwendet werden. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server ist manipuliert oder fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, dann würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Anweisung unbeabsichtigt externen Code ausführen, was eine ernsthafte Sicherheitsbedrohung darstellt.

Import-Attribute lösen dieses Problem, indem sie dem Autor erlauben, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Import-Anweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Modultyp zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass es sich um ein JSON-Modul handelt, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche `type`-Attributwert entspricht nicht direkt dem MIME-Typ. Er wird separat in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) angegeben.

Daher sollte der obige Code umgeschrieben werden als:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), aber es ändert _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, basierend auf dem Antwort-MIME-Typ. Es nutzt das Attribut nur, um _nachträglich_ zu überprüfen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielsweise, wenn der Antwort-Header auf `Content-Type: text/javascript` geändert wird, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation erwähnt ausdrücklich `type: "json"` als unterstützte Option — wenn ein Modul als `type: "json"` angegeben ist und die Laufzeit diesen Import nicht fehlschlägt, muss es als JSON geparst werden. Ansonsten gibt es jedoch keine Verhaltensanforderung: Für Importe ohne ein `type: "json"`-Attribut kann die Laufzeit es möglicherweise dennoch als JSON parsen, wenn es in dieser Umgebung kein Sicherheitsproblem darstellt. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul nicht JavaScript ist (z.B. JSON). Dies stellt sicher, dass Modultypen immer strikt validiert werden und verhindert jegliche Sicherheitsrisiken. In der Realität stimmen nicht-browserbasierte Laufzeiten wie Node und Deno mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` von der Sprache spezifiziert wird, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modulladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (des Strings in der `from`-Klausel). Daher können unterschiedliche Attribute, die denselben Stringpfad haben, dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abruf: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination)-Wert `"style"` abgerufen, und JSON-Module mit `destination: "json"`. Das bedeutet, dass der Server, selbst wenn dieselbe Ziel-URL angegeben wird, dennoch unterschiedlichen Inhalt zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu entscheiden, wie das Modul geparst und ausgewertet werden soll.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit gibt einen Fehler aus, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### Importieren von JSON-Modulen mit dem `type`-Attribut

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html` Seite. Sie sollten `Shilpa` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe daraus machen (wie `import { name } from "data.json"`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)
- [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)
- [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)
- [Import-Attribute Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module Vorschlag](https://github.com/tc39/proposal-json-modules)
