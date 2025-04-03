---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertionsfunktion ist jetzt nicht standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Die Funktion **Importattribute** weist die Laufzeit an, wie ein Modul geladen werden soll, einschließlich des Verhaltens der Modulauflösung, des Abrufs, der Analyse und der Auswertung. Sie wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

## Syntax

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namespaceimport usw. Sie folgen dem Modulspezifizierer-String und werden durch das Schlüsselwort `with` eingeleitet.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein Stringliteral sein. Alle Schlüssel müssen eindeutig sein und der Laufzeit bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein Stringliteral sein.

## Beschreibung

Importattribute geben der Laufzeit vor, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall ist das Laden von Nicht-JS-Modulen, wie JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web resultiert jede Importanweisung in einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert umgewandelt und dem Programm von der Laufzeit zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"John"}
```

Module werden nur nach ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und analysiert – die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON analysiert werden muss. Wenn aus irgendeinem Grund (z.B. der Server wurde gekapert oder gefälscht) der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) eingestellt ist, wird die Datei analysiert und als Code ausgeführt. Wenn die „JSON“-Datei tatsächlich bösartigen Code enthält, würde die `import`-Deklaration versehentlich externen Code ausführen, was ein ernsthaftes Sicherheitsrisiko darstellt.

Importattribute beheben dieses Problem, indem sie dem Autor erlauben, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Importanweisung, die ein Attribut fehlt, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut bereitstellen, um der Laufzeit mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributschlüssel namens `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche Attributwert `type` entspricht nicht direkt dem MIME-Typ. Er wird separat durch die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obenstehende Code wie folgt umgeschrieben werden:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert jedoch nicht, wie das Modul analysiert oder ausgewertet wird. Die Laufzeit weiß bereits, dass das Modul als JSON analysiert werden soll, wenn der Antwort-MIME-Typ vorliegt. Sie verwendet das Attribut nur zur nachträglichen Überprüfung, dass das `data.json`-Modul tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn der Antwort-Header auf `Content-Type: text/javascript` geändert wird, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation nennt explizit `type: "json"`, das unterstützt werden soll — wenn ein Modul als `type: "json"` deklariert ist und die Laufzeit diesen Import nicht fehlschlagen lässt, muss es als JSON analysiert werden. Es gibt jedoch keine Verhaltensanforderung anderweitig: Für Importe ohne `type: "json"`-Attribut kann die Laufzeit es immer noch als JSON analysieren, wenn Sicherheit in dieser Umgebung kein Problem ist. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und schlagen fehl, wenn das Modul kein JavaScript ist (z.B. JSON). Dies stellt sicher, dass Modultypen immer streng validiert werden und keine Sicherheitsrisiken bestehen. In der Realität stimmen Nicht-Browser-Laufzeiten wie Node und Deno mit den Browsersemantiken überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist darauf ausgelegt, erweiterbar zu sein — obwohl nur `type` von der Sprache spezifiziert ist, kann die Laufzeit andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeit in jeder Phase des Modulladeprozesses ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifizierers (des Strings in der `from`-Klausel). Daher können bei gleichem String-Pfad unterschiedliche Attribute dazu führen, dass völlig unterschiedliche Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abrufen: Zum Beispiel werden CSS-Module mit [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` gesetzt, und JSON-Module werden mit `destination: "json"` abgerufen. Das bedeutet, dass der Server bei gleicher Ziel-URL trotzdem unterschiedliche Inhalte zurückgeben kann.
- Analyse und Auswertung: Die Laufzeit kann das Attribut verwenden, um zu bestimmen, wie das Modul analysiert und ausgewertet werden soll.

Allerdings können Sie keine unbekannten Attribute verwenden — die Laufzeit wirft einen Fehler, wenn sie auf ein unbekanntes Attribut stößt.

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur `index.html`-Seite. Sie sollten `John` auf der Seite sehen.

> [!NOTE]
> JSON-Module haben nur einen Standardexport. Sie können keine benannten Importe von ihnen machen (wie `import { name } from "data.json"`).

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
