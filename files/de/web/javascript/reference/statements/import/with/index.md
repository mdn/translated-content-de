---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 3d3046d13482ca979db8b98b6eb55927b9b3a51f
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Das Assertion-Feature ist jetzt nicht mehr standardmäßig. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Import-Attribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, dem Parsen und der Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dem dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifizierer-String und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Attribut-Schlüssel. Kann ein Bezeichner oder ein string-Literal sein. Alle Schlüssel müssen eindeutig sein und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein string-Literal sein.

## Beschreibung

Import-Attribute geben der Laufzeit vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen wie JSON-Modulen und CSS-Modulen. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert aufbereitet und der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur gemäß ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Dateityp zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z. B. ein gehackter oder gefälschter Server) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, würde die Datei als Code geparst und ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unabsichtlich externen Code ausführen und damit ein ernstes Sicherheitsrisiko darstellen.

Import-Attribute beheben dieses Problem, indem sie dem Autor ermöglichen, explizit anzugeben, wie ein Modul validiert werden soll. Beispielsweise würde die oben stehende Import-Anweisung, die kein Attribut enthält, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code folgendermaßen umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert jedoch _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, wenn der MIME-Typ der Antwort das so angibt. Es verwendet das Attribut lediglich, um _nachträglich_ zu überprüfen, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn sich der Antwort-Header in `Content-Type: text/javascript` ändert, wird das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation hebt explizit `type: "json"` hervor, das unterstützt werden muss — wenn ein Modul auf `type: "json"` gesetzt ist und die Laufzeit diesen Import nicht fehlschlagen lässt, muss es als JSON geparst werden. Es gibt jedoch keine Anforderungsanforderungen anderweitig: Für Importe ohne `type: "json"`-Attribut kann die Laufzeit es dennoch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsprobleme bestehen. Browser gehen dagegen implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer strikt validiert werden und verhindert Sicherheitsrisiken. In der Praxis stimmen Nicht-Browser-Laufzeiten wie Node und Deno mit den Browser-Semantiken überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so konzipiert, dass sie erweiterbar ist — obwohl nur `type` durch die Sprache spezifiziert ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modul-Ladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifizierers (des Strings in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Beispielsweise unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt abgerufen, und JSON-Module mit `destination: "json"`. Dies bedeutet, dass der Server, selbst bei derselben Ziel-URL, unterschiedliche Inhalte zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet werden soll.

Allerdings können Sie keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### JSON-Module mit dem Typattribut importieren

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlersuche](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur Seite `index.html`. Sie sollten `Shilpa` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe von ihnen durchführen (wie `import { name } from "data.json"`).

### Verwenden von Import-Attributen mit dynamischem Import

Import-Attribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass, ähnlich wie bei statischen Importen, dynamische Importe für die Lebensdauer der Umgebung (z. B. eine Seite oder ein Worker) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (wie die neuesten Nachrichten oder die Credits eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

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
