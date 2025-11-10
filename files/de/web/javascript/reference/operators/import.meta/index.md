---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`import.meta`** Meta-Eigenschaft stellt kontextspezifische Metadaten für ein JavaScript-Modul bereit. Sie enthält Informationen über das Modul, wie zum Beispiel die URL des Moduls.

## Syntax

```js-nolint
import.meta
```

### Wert

Das `import.meta` Objekt wird von der Host-Umgebung als ein erweiterbares [Null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) Objekt erstellt, bei dem alle Eigenschaften beschreibbar, konfigurierbar und aufzählbar sind. Die Spezifikation gibt keine Eigenschaften vor, die darauf definiert werden müssen, aber Hosts implementieren normalerweise die folgenden Eigenschaften:

- `url`
  - : Die vollständige URL zum Modul, einschließlich Abfrageparametern und/oder Hash (nach dem `?` oder `#`). In Browsern ist dies entweder die URL, von der das Skript bezogen wurde (für externe Skripte) oder die URL des enthaltenen Dokuments (für Inline-Skripte). In Node.js ist dies der Dateipfad (einschließlich des `file://` Protokolls).
- [`resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : Löst einen Modulspezifizierer zu einer URL auf, wobei die aktuelle Modul-URL als Basis verwendet wird.

## Beschreibung

Die `import.meta` Syntax besteht aus dem Schlüsselwort `import`, einem Punkt und dem Bezeichner `meta`. Da `import` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist und kein Bezeichner, handelt es sich hierbei nicht um einen [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die `import.meta` Meta-Eigenschaft ist in JavaScript-Modulen verfügbar; die Verwendung von `import.meta` außerhalb eines Moduls (einschließlich [direktem `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) innerhalb eines Moduls) führt zu einem Syntaxfehler.

## Beispiele

### Übergabe von Abfrageparametern

Die Verwendung von Abfrageparametern im `import` Spezifizierer ermöglicht die übermittlung modulspezifischer Argumente, die möglicherweise komplementär zur Lektüre von Parametern aus der anwendungsweiten [`window.location`](/de/docs/Web/API/Window/location) (oder in Node.js über `process.argv`) sind. Zum Beispiel mit dem folgenden HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

Das `index.mjs` Modul kann den `someURLInfo` Parameter über `import.meta` abrufen:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Dasselbe gilt, wenn ein Modul ein anderes importiert:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Die ES-Modul-Implementierung in Node.js unterstützt die Auflösung von Modulspezifizierern, die Abfrageparameter (oder den Hash) enthalten, wie im zuletzt genannten Beispiel. Sie können jedoch keine Abfragen oder Hashes verwenden, wenn das Modul über den CLI-Befehl angegeben wird (wie `node index.mjs?someURLInfo=5`), da der CLI-Einstiegspunkt einen eher CommonJS-ähnlichen Auflösungsmodus verwendet, der den Pfad als Dateipfad statt als URL behandelt. Um Parameter an das Einstiegspunktmodul zu übergeben, verwenden Sie CLI-Argumente und lesen Sie sie mittels `process.argv` (wie `node index.mjs --someURLInfo=5`).

### Auflösung einer Datei relativ zur aktuellen

In Node.js CommonJS-Modulen gibt es eine `__dirname`-Variable, die den absoluten Pfad zum Ordner enthält, der das aktuelle Modul enthält, was zur Auflösung relativer Pfade nützlich ist. ES-Module können jedoch keine kontextbezogenen Variablen haben, außer `import.meta`. Daher können Sie zur Auflösung einer relativen Datei `import.meta.url` verwenden. Beachten Sie, dass hierbei URLs statt Dateisystempfaden verwendet werden.

Vorher (CommonJS):

```js
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "someFile.txt");
fs.readFile(filePath, "utf8").then(console.log);
```

Nachher (ES-Module):

```js
import fs from "node:fs/promises";

const fileURL = new URL("./someFile.txt", import.meta.url);
fs.readFile(fileURL, "utf8").then(console.log);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/export", "export")}}
