---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertion-Funktion ist nun nicht standardisiert. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die **Importattribute**-Funktion gibt zur Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens der Modulauflösung, des Abrufs, des Parsens und der Auswertung. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namensraumimport usw. Sie folgen der Modulspezifizierungszeichenkette und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im Parameter `options` als Eigenschaft `with` angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen eindeutig und zur Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

## Beschreibung

Importattribute geben zur Laufzeit an, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und dem Programm durch die Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort wie folgt aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur gemäß ihrem gelieferten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst – die Dateiendung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. weil der Server gehackt oder gefälscht ist) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, dann würde die Datei geparst und als Code ausgeführt. Wenn die „JSON“-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen und eine ernsthafte Sicherheitsbedrohung darstellen.

Importattribute beheben dieses Problem, indem sie dem Autor erlauben, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obenstehende Importanweisung, die kein Attribut hat, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Modultyp (über den MIME-Typ) zu validieren, verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, lautet der Wert `"json"`.

> [!NOTE]
> Der tatsächliche `type`-Attributwert entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code entsprechend neu geschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit `{{HTTPHeader("Accept")}}: application/json`-Header), ändert jedoch _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, gegeben durch den Antwort-MIME-Typ. Es verwendet das Attribut nur, um _nachträgliche_ Prüfungen durchzuführen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielsweise, wenn sich der Antwort-Header zu `Content-Type: text/javascript` ändert, wird das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation ruft explizit `type: "json"` zur Unterstützung auf – wenn ein Modul als `type: "json"` behauptet wird und die Laufzeit diesen Import nicht fehlschlägt, dann muss es als JSON geparst werden. Es gibt jedoch keine sonstige Verhaltensanforderung: Bei Importen ohne `type: "json"`-Attribut kann die Laufzeit dennoch als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem darstellt. Browser dagegen nehmen implizit an, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert alle Sicherheitsrisiken. In der Realität stimmen nicht-browserbasierte Laufzeiten wie Node und Deno mit den Browsersemantiken überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Beispielsweise definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist – obwohl nur `type` von der Sprache angegeben ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil der Modulspezifikation (dem String in der `from`-Klausel). Daher können bei gleicher Zeichenkettenpfad unterschiedliche Attribute dazu führen, dass vollständig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen, und JSON-Module werden mit `destination: "json"` abgerufen. Das bedeutet, dass der Server bei gleicher Ziel-URL dennoch unterschiedlichen Inhalt zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

Sie können jedoch keine unbekannten Attribute verwenden – die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut trifft.

## Beispiele

### Importieren von JSON-Modulen mit dem `type`-Attribut

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur Seite `index.html`. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe aus ihnen machen (wie `import { name } from "data.json"`).

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
