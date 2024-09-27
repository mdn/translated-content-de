---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Der **`import.meta`** Meta-Eigenschaftsoperator stellt modulspezifische Metadaten für ein JavaScript-Modul bereit. Er enthält Informationen über das Modul, wie zum Beispiel die URL des Moduls.

## Syntax

```js-nolint
import.meta
```

### Wert

Das `import.meta`-Objekt wird von der Host-Umgebung als ein erweiterbares [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) Objekt erstellt, bei dem alle Eigenschaften beschreibbar, konfigurierbar und aufzählbar sind. Die Spezifikation gibt keine Eigenschaften vor, die darauf definiert werden sollen, aber Hosts implementieren normalerweise die folgenden Eigenschaften:

- `url`
  - : Die vollständige URL zum Modul, einschließlich Abfrageparametern und/oder Hash (nach dem `?` oder `#`). In Browsern ist dies entweder die URL, von der das Skript bezogen wurde (für externe Skripte), oder die URL des enthaltenen Dokuments (für Inline-Skripte). In Node.js ist dies der Dateipfad (einschließlich des `file://` Protokolls).
- [`resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : Löst einen Modulbezeichner zu einer URL auf, wobei die URL des aktuellen Moduls als Basis verwendet wird.

## Beschreibung

Die `import.meta`-Syntax besteht aus dem Schlüsselwort `import`, einem Punkt und dem Bezeichner `meta`. Da `import` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist, kein Bezeichner, ist dies kein [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern eine spezielle Ausdruckssyntax.

Die `import.meta` Meta-Eigenschaft ist in JavaScript-Modulen verfügbar; die Verwendung von `import.meta` außerhalb eines Moduls (einschließlich der [direkten `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) innerhalb eines Moduls) ist ein Syntaxfehler.

## Beispiele

### Übergeben von Abfrageparametern

Die Verwendung von Abfrageparametern im `import`-Bezeichner ermöglicht das spezifische Übergeben von Argumenten für das Modul, was ergänzend dazu sein kann, Parameter aus dem anwendungsweiten [`window.location`](/de/docs/Web/API/Window/location) (oder in Node.js durch `process.argv`) zu lesen. Zum Beispiel mit dem folgenden HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

Das `index.mjs` Modul kann den `someURLInfo` Parameter durch `import.meta` abrufen:

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

Die ES-Modulimplementierung in Node.js unterstützt das Auflösen von Modulbezeichnern, die Abfrageparameter (oder den Hash) enthalten, wie im letztgenannten Beispiel. Sie können jedoch keine Abfragen oder Hashs verwenden, wenn das Modul durch den CLI-Befehl spezifiziert wird (wie `node index.mjs?someURLInfo=5`), da der CLI-Einstiegspunkt einen eher CommonJS-ähnlichen Auflösungsmodus verwendet und den Pfad als Dateipfad anstatt als URL behandelt. Um Parameter an das Einstiegspunkt-Modul zu übergeben, verwenden Sie stattdessen CLI-Argumente und lesen diese durch `process.argv` (wie `node index.mjs --someURLInfo=5`).

### Auflösung einer Datei relativ zur aktuellen Datei

In Node.js CommonJS-Modulen gibt es eine `__dirname` Variable, die den absoluten Pfad zum Ordner enthält, der das aktuelle Modul enthält, was nützlich ist, um relative Pfade aufzulösen. Allerdings können ES-Module außer `import.meta` keine kontextuellen Variablen haben. Daher können Sie zur Auflösung einer relativen Datei `import.meta.url` verwenden. Beachten Sie, dass hierbei URLs anstelle von Dateisystempfaden verwendet werden.

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
