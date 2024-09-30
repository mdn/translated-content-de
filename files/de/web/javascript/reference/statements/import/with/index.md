---
title: Import-Attribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: eb7cf694c19b31ee8826f22eaac6c12e808b1e50
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Das Assertion-Feature ist jetzt nicht mehr standardisiert. Details finden Sie in der [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität).

Das **Import-Attribute**-Feature weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und der Ausführung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import` / `export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespace-Import usw. Sie folgen dem Modulspezifizierer-String und sind mit dem Schlüsselwort `with` vorangestellt.

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

Import-Attribute geben der Laufzeit vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module zu laden, wie JSON-Module und CSS-Module. Betrachten Sie folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web führt jede Import-Anweisung zu einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und dem Programm von der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur basierend auf ihrem ausgelieferten [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) identifiziert und geparst — die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als solche geparst werden muss. Wenn aus irgendeinem Grund (z. B. wenn der Server gehackt oder gefälscht ist) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, würde die Datei als Code geparst und ausgeführt werden. Wenn die "JSON"-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was ein ernsthaftes Sicherheitsrisiko darstellt.

Import-Attribute beheben dieses Problem, indem der Autor explizit angeben kann, wie ein Modul validiert werden soll. Zum Beispiel würde die oben genannte Import-Anweisung, die kein Attribut besitzt, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut angeben, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls (über den MIME-Typ) zu validieren, verwenden Sie den Attributschlüssel `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche `type` Attributwert entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) bestimmt.

Daher sollte der obige Code wie folgt umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type` Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json` Header), aber ändert _nicht_ wie das Modul geparst oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON geparst werden soll, basierend auf dem Antwort-MIME-Typ. Sie verwendet das Attribut nur zur _nachträglichen_ Überprüfung, dass das `data.json`-Modul in der Tat ein JSON-Modul ist. Zum Beispiel, wenn sich der Antwort-Header in `Content-Type: text/javascript` ändert, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation betont, dass `type: "json"` unterstützt werden muss – wenn ein Modul als `type: "json"` deklariert wird und die Laufzeit diesen Import nicht fehlschlägt, muss es als JSON geparst werden. Andernfalls gibt es keine Verhaltensanforderung: für Importe ohne ein `type: "json"` Attribut kann die Laufzeit es dennoch als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem ist. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und fehlschlagen, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dadurch wird sichergestellt, dass Modultypen immer strikt validiert werden und keine Sicherheitsrisiken bestehen. In der Realität passen sich nicht-browserbasierte Laufzeiten wie Node und Deno den Browsersemantiken an und erzwingen `type` für JSON-Module.

Das `type` Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css` Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attribut-Syntax ist so gestaltet, dass sie erweiterbar ist — obwohl nur `type` von der Sprache spezifiziert ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jedem Stadium des Modul-Ladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifizierers (dem String in der `from` Klausel). Daher können unterschiedliche Attribute zu völlig unterschiedlichen Modulen führen, die geladen werden, basierend auf demselben String-Pfad. Zum Beispiel unterstützt [TypeScript das `resolution-mode` Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit `destination: "style"` abgerufen, und JSON-Module mit `destination: "json"`. Das bedeutet, dass der Server weiterhin unterschiedlichen Inhalt für dieselbe Ziel-URL zurückgeben kann.
- Parsen und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

Allerdings können Sie keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

## Beispiele

### Importieren von JSON-Modulen mit dem `type` Attribut

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html` Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe daraus durchführen (wie `import { name } from "data.json"`).

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
