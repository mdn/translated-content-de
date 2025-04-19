---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: c5c84b62f3f1fbd46f77c940fa0cbfff649c46a1
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertionsfunktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Importattribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Auflösung, dem Abrufen, dem Parsen und der Ausführung von Modulen. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespaceimport usw. Sie folgen dem Modulbezeichner-String und beginnen mit dem Schlüsselwort `with`. Bei der Verwendung mit `import()` werden die Attribute im Parameter `options` als Eigenschaft `with` angegeben.

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

## Beschreibung

Importattribute teilen der Laufzeit mit, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann zu einem JavaScript-Wert vorbereitet und dem Programm von der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur gemäß ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. der Server wird gehackt oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, dann würde die Datei als Code geparst und ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Importattribute beheben dieses Problem, indem sie dem Autor erlauben, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Importanweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Modultyp (über den MIME-Typ) zu validieren, verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code folgendermaßen umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), verändert jedoch _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden muss, da der Antwort-MIME-Typ dies angibt. Es verwendet das Attribut nur zur _nachträglichen_ Überprüfung, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn sich der Antwort-Header zu `Content-Type: text/javascript` ändert, wird das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation legt ausdrücklich fest, dass `type: "json"` unterstützt werden muss — wenn ein Modul als `type: "json"` deklariert ist und die Laufzeit diesen Import nicht scheitert, muss es als JSON geparst werden. Es gibt jedoch keine weiteren Verhaltensanforderungen: Für Importe ohne das Attribut `type: "json"` kann die Laufzeit es dennoch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsrisiken bestehen. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer strikt validiert und Sicherheitsrisiken verhindert werden. In der Praxis stimmen Laufzeiten außerhalb von Browsern wie Node und Deno mit den Semantiken des Browsers überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` von der Sprache festgelegt ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modul-Ladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulbezeichners (der String in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` abgerufen, und JSON-Module mit `destination: "json"`. Das bedeutet, dass der Server selbst bei gleicher Ziel-URL unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet werden soll.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standard-Export. Sie können keine benannten Importe von ihnen vornehmen (wie `import { name } from "data.json"`).

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
