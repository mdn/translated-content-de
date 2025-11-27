---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: ff4dc3d43e814614df60ecdb7376b59698660ac2
---

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertionsfunktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Importattribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, beim Abrufen, Parsen und Bewerten. Es wird in [`import`-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/import), [`export...from`-Deklarationen](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating) und dem dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen der Modulspezifikationszeichenkette und beginnen mit dem Schlüsselwort `with`. Bei Verwendung mit `import()` werden die Attribute im `options`-Parameter als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Stringliteral sein. Alle Schlüssel müssen eindeutig und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Stringliteral sein.

## Beschreibung

Importattribute geben der Laufzeit vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen wie JSON-Modulen und CSS-Modulen. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert vorbereitet und der Laufzeit zur Verfügung gestellt. Beispielsweise könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur basierend auf ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst - die Dateierweiterung in der URL kann nicht zur Identifizierung des Datei-Typs verwendet werden. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server wurde kompromittiert oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, wird die Datei als Code geparst und ausgeführt. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernstes Sicherheitsrisiko darstellt.

Importattribute beheben dieses Problem, indem sie dem Autor ermöglichen, explizit anzugeben, wie ein Modul validiert werden soll. Beispielsweise würde die oben stehende Importanweisung, die ein Attribut fehlt, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Zur Validierung des Modultyps (über den MIME-Typ) verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs stimmt nicht direkt mit dem MIME-Typ überein. Es wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code neu geschrieben werden als:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert jedoch _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden muss, gemäß dem MIME-Typ der Antwort. Sie verwendet das Attribut nur zur _nachträglichen_ Überprüfung, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielweise, wenn der Antwortheader zu `Content-Type: text/javascript` geändert wird, wird das Programm mit einem ähnlichen Fehler wie oben fehlschlagen.

Die Spezifikation ruft explizit `type: "json"` auf, um unterstützt zu werden — wenn ein Modul als `type: "json"` deklariert wird und die Laufzeit diesen Import nicht fehlschlagen lässt, dann muss es als JSON geparst werden. Es gibt jedoch keine anderen Verhaltensanforderungen: für Importe ohne ein `type: "json"`-Attribut, kann die Laufzeit es trotzdem als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem darstellt. Browser hingegen nehmen implizit an, dass das Modul JavaScript ist und schlagen fehl, wenn das Modul nicht JavaScript ist (z.B. JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und verhindert Sicherheitsrisiken. In der Praxis passen sich Nicht-Browser-Laufzeiten wie Node und Deno den Browser-Semantiken an und erzwingen das `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Beispielsweise definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Syntax für Attribute ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` von der Sprache spezifiziert ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modulladungsprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (der Zeichenkette in der `from`-Klausel). Daher können bei gleicher Zeichenkettenpfad durch unterschiedliche Attribute völlig unterschiedliche Module geladen werden. Beispielsweise unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with {
    "resolution-mode": "require",
  };
  ```

- Abrufen: Beispielsweise werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt, und JSON-Module werden mit `destination: "json"` abgerufen. Dies bedeutet, dass der Server bei gleicher Ziel-URL immer noch unterschiedlichen Inhalt zurückgeben kann.
- Parsen und Bewertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und bewertet werden soll.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

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
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe von ihnen machen (wie `import { name } from "data.json"`).

### Verwendung von Importattributen mit dynamischen Importen

Importattribute werden auch als zweiter Parameter der `import()`-Syntax akzeptiert.

```js
const data = await import("./data.json", {
  with: { type: "json" },
});
```

Beachten Sie, dass dynamische Importe, wie statische Importe, für die Lebensdauer der Umgebung (z.B. eine Seite oder ein Worker) zwischengespeichert werden. Wenn Sie erwarten, dass sich diese Daten ändern (wie die neuesten Nachrichten oder die Credits eines Benutzers), verwenden Sie stattdessen die [Fetch API](/de/docs/Web/API/Fetch_API).

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
