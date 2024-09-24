---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertions-Funktion ist jetzt nicht standardisiert. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Import-Attribute**-Feature instruiert die Laufzeit darüber, wie ein Modul geladen werden soll, einschließlich des Verhaltens der Modulauflösung, des Ladens, Parsens und Auswertens. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich des Standardimports, Namespace-Imports usw. Sie folgen dem Modul-Spezifikatorstring und werden durch das Schlüsselwort `with` eingeleitet.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Zeichenfolgenliteral sein. Alle Schlüssel müssen eindeutig und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Zeichenfolgenliteral sein.

## Beschreibung

Import-Attribute geben der Laufzeit an, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Importanweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert vorbereitet und dem Programm durch die Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur gemäß ihrem ausgelieferten [MIME-Typ](/de/docs/Web/HTTP/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server wird gehackt oder ist fehlerhaft) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt wird, würde die Datei als Code geparst und ausgeführt. Sollte die "JSON"-Datei tatsächlich bösartigen Code enthalten, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernsthaftes Sicherheitsrisiko darstellt.

Import-Attribute beheben dieses Problem, indem sie dem Autor ermöglichen, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Importanweisung, die ein Attribut fehlt, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut bereitstellen, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Modultyp (über den MIME-Typ) zu validieren, verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Wert des `type`-Attributs entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) spezifiziert.

Daher sollte der obige Code umgeschrieben werden als:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul geladen wird (der Browser sendet die Anfrage mit dem Header `{{HTTPHeader("Accept")}}: application/json`), ändert aber _nicht_, wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, da es den MIME-Typ der Antwort berücksichtigt. Es verwendet das Attribut nur für eine _nachträgliche_ Überprüfung, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Beispielsweise, wenn der Antwortheader auf `Content-Type: text/javascript` wechselt, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation hebt explizit hervor, dass `type: "json"` unterstützt werden muss — wenn ein Modul als `type: "json"` deklariert ist und die Laufzeit diesen Import nicht fehlschlägt, dann muss es als JSON geparst werden. Es gibt jedoch keine Verhaltensanforderung sonst: Für Importe ohne ein `type: "json"`-Attribut kann die Laufzeit es immer noch als JSON parsen, wenn in dieser Umgebung keine Sicherheitsrisiken bestehen. Browser gehen jedoch implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer strikt validiert werden und verhindert jegliche Sicherheitsrisiken. In der Praxis orientieren sich Nicht-Browser-Laufzeiten wie Node und Deno an den Browser-Semantiken und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` durch die Sprache spezifiziert wird, kann die Laufzeit weitere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modulladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifikators (des Strings im `from`-Abschnitt). Daher können bei gleichem Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Beispielsweise unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Laden: Zum Beispiel werden CSS-Module mit dem [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt geladen, und JSON-Module mit `destination: "json"`. Das bedeutet, dass der Server bei gleicher Ziel-URL immer noch unterschiedlichen Inhalt zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

Sie können jedoch keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler aus, wenn sie ein unbekanntes Attribut antrifft.

## Beispiele

### JSON-Module mit dem type-Attribut importieren

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

Starten Sie einen lokalen HTTP-Server (siehe [Troubleshooting](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe davon machen (wie `import { name } from "data.json"`).

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
