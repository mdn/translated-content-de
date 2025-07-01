---
title: Importattribute
slug: Web/JavaScript/Reference/Statements/import/with
l10n:
  sourceCommit: cf41a29c212c730c1beef36d6bf3474ebbfc6162
---

{{jsSidebar("Statements")}}

> [!NOTE]
> Eine frühere Version dieses Vorschlags verwendete das Schlüsselwort `assert` anstelle von `with`. Die Assertions-Funktion ist jetzt nicht mehr standardisiert. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

Das **Importattribute**-Feature weist die Laufzeitumgebung an, wie ein Modul geladen werden soll, einschließlich des Verhaltens bei der Modulauflösung, dem Abrufen, Parsen und der Auswertung. Es wird in [`import`](/de/docs/Web/JavaScript/Reference/Statements/import)-Deklarationen, [`export...from`](/de/docs/Web/JavaScript/Reference/Statements/export#re-exporting_aggregating)-Deklarationen und dynamischen [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) unterstützt.

Attribute können an jede Art von `import`/`export from`-Anweisung angehängt werden, einschließlich Standardimport, Namensraumimport usw. Sie folgen auf den Modulspezifizierer-String und beginnen mit dem Schlüsselwort `with`. Bei der Verwendung mit `import()` werden die Attribute im Parameter `options` als `with`-Eigenschaft angegeben.

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
  - : Ein Attributschlüssel. Kann ein Bezeichner oder ein String-Literal sein. Alle Schlüssel müssen eindeutig und der Laufzeitumgebung bekannt sein.
- `"dataN"`
  - : Ein Attributwert. Muss ein String-Literal sein.

## Beschreibung

Importattribute teilen der Laufzeit mit, wie ein bestimmtes Modul geladen werden soll.

Der Hauptanwendungsfall besteht darin, Nicht-JS-Module zu laden, wie z.B. JSON-Module und CSS-Module. Betrachten Sie die folgende Anweisung:

```js
import data from "https://example.com/data.json";
```

Im Web endet jede Importanweisung in einer HTTP-Anfrage. Die Antwort wird dann in einen JavaScript-Wert vorbereitet und dem Programm durch die Laufzeitumgebung zur Verfügung gestellt. Zum Beispiel könnte die Antwort so aussehen:

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
...
{"name":"Maria"}
```

Module werden nur gemäß ihrem bereitgestellten [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) identifiziert und geparst – die Dateierweiterung in der URL kann nicht verwendet werden, um den Typ einer Datei zu identifizieren. In diesem Fall ist der MIME-Typ `application/json`, was dem Browser mitteilt, dass die Datei JSON ist und als JSON geparst werden muss. Wenn aus irgendeinem Grund (z.B. der Server wird gekapert oder ist fehlerhaft), der MIME-Typ in der Serverantwort auf `text/javascript` (für JavaScript-Quellcode) gesetzt ist, würde die Datei als Code geparst und ausgeführt werden. Sollte die "JSON"-Datei tatsächlich bösartigen Code enthalten, würde die `import`-Deklaration unbeabsichtigt externen Code ausführen, was eine ernsthafte Sicherheitsgefährdung darstellt.

Importattribute lösen dieses Problem, indem es dem Autor ermöglicht wird, explizit anzugeben, wie ein Modul validiert werden soll. Zum Beispiel würde die obige Importanweisung, die ein Attribut fehlt, tatsächlich fehlschlagen:

```plain
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

Stattdessen müssen Sie ein Attribut bereitstellen, um der Laufzeitumgebung mitzuteilen, dass diese Datei JSON enthalten muss. Um den Typ des Moduls zu validieren (über den MIME-Typ), verwenden Sie den Attributsschlüssel namens `type`. Um zu validieren, dass das Modul ein JSON-Modul ist, ist der Wert `"json"`.

> [!NOTE]
> Der tatsächliche `type`-Attributwert entspricht nicht direkt dem MIME-Typ. Er wird separat von der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/webappapis.html#module-type-allowed) festgelegt.

Daher sollte der obige Code umgeschrieben werden als:

```js
import data from "https://example.com/data.json" with { type: "json" };
```

Das `type`-Attribut ändert, wie das Modul abgerufen wird (der Browser sendet die Anfrage mit dem `{{HTTPHeader("Accept")}}: application/json`-Header), ändert jedoch _nicht_ die Art und Weise, wie das Modul geparst oder ausgewertet wird. Die Laufzeitumgebung weiß bereits, dass das Modul als JSON geparst werden soll, da der MIME-Typ der Antwort dies vorgibt. Es verwendet das Attribut lediglich zur _nachträglichen_ Überprüfung, dass das Modul `data.json` tatsächlich ein JSON-Modul ist. Zum Beispiel, wenn der Antwortheader stattdessen zu `Content-Type: text/javascript` geändert wird, schlägt das Programm mit einem ähnlichen Fehler wie oben fehl.

Die Spezifikation ruft explizit `type: "json"` als zu unterstützend auf – wenn ein Modul als `type: "json"` behauptet wird und die Laufzeitumgebung diesen Import nicht fehlschlägt, muss es als JSON geparst werden. Es gibt jedoch keine Verhaltensanforderungen in anderer Hinsicht: Bei Importen ohne ein `type: "json"`-Attribut kann die Laufzeitumgebung es weiterhin als JSON parsen, wenn Sicherheit in dieser Umgebung kein Problem darstellt. Browser hingegen gehen implizit davon aus, dass das Modul JavaScript ist, und scheitern, wenn das Modul kein JavaScript ist (zum Beispiel JSON). Dies stellt sicher, dass Modultypen immer streng validiert und Sicherheitsrisiken vermieden werden. In Wirklichkeit stimmen Nicht-Browser-Laufzeitumgebungen wie Node und Deno mit der Browser-Semantik überein und erzwingen `type` für JSON-Module.

Das `type`-Attribut unterstützt auch andere Modultypen. Zum Beispiel definiert die HTML-Spezifikation auch den `css`-Typ, der ein [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekt importiert:

```js
import styles from "https://example.com/styles.css" with { type: "css" };
```

Die Attributsyntax ist so gestaltet, dass sie erweiterbar ist – obwohl nur `type` durch die Sprache spezifiziert wird, kann die Laufzeitumgebung andere Attribute lesen und verarbeiten. Ein Attribut kann das Verhalten der Laufzeitumgebung in jeder Phase des Modul-Ladevorgangs ändern:

- Auflösung: Das Attribut ist Teil des Modulspezifizierers (der String in der `from`-Klausel). Daher können bei gleichem Zeichenfolgenpfad unterschiedliche Attribute dazu führen, dass völlig andere Module geladen werden. Zum Beispiel unterstützt [TypeScript das `resolution-mode`-Attribut](https://devblogs.microsoft.com/typescript/announcing-typescript-5-3/#stable-support-resolution-mode-in-import-types).

  ```ts
  import type { TypeFromRequire } from "pkg" with { "resolution-mode": "require" };
  ```

- Abruf: Zum Beispiel werden CSS-Module mit der [`destination`](/de/docs/Web/API/Request/destination) auf `"style"` abgerufen, und JSON-Module werden mit `destination: "json"` abgerufen. Das bedeutet, dass der Server bei gleicher Ziel-URL möglicherweise dennoch unterschiedlichen Inhalt zurückgibt.
- Parsen und Auswertung: Die Laufzeitumgebung kann das Attribut verwenden, um zu bestimmen, wie das Modul geparst und ausgewertet wird.

Sie können jedoch keine unbekannten Attribute verwenden – die Laufzeitumgebung wirft einen Fehler, wenn sie auf ein unbekanntes Attribut trifft.

## Beispiele

### JSON-Module mit dem Typ-Attribut importieren

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

Starten Sie einen lokalen HTTP-Server (siehe [Fehlerbehebung](/de/docs/Web/JavaScript/Guide/Modules#troubleshooting)) und gehen Sie zur Seite `index.html`. Sie sollten `Shilpa` auf der Seite sehen.

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
- [Importattribute Vorschlag](https://github.com/tc39/proposal-import-attributes)
- [JSON-Module Vorschlag](https://github.com/tc39/proposal-json-modules)
