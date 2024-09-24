---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Die **`import.meta`** Meta-Eigenschaft stellt modulspezifische Metadaten in einem JavaScript-Modul bereit. Sie enthält Informationen über das Modul, wie zum Beispiel die URL des Moduls.

## Syntax

```js-nolint
import.meta
```

### Wert

Das `import.meta`-Objekt wird von der Hostumgebung erstellt, als ein erweiterbares [`Null-Prototyp`-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects), bei dem alle Eigenschaften beschreibbar, konfigurierbar und aufzählbar sind. Die Spezifikation definiert keine spezifischen Eigenschaften, aber Hosts implementieren normalerweise die folgenden Eigenschaften:

- `url`
  - : Die vollständige URL zum Modul, einschließlich Abfrageparametern und/oder Fragmenten (nach dem `?` oder `#`). In Browsern ist dies entweder die URL, von der das Skript abgerufen wurde (für externe Skripte), oder die URL des enthaltenden Dokuments (für eingebettete Skripte). In Node.js ist dies der Dateipfad (einschließlich des `file://` Protokolls).
- [`resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : Löst einen Modulspezifizierer zu einer URL unter Verwendung der aktuellen Modul-URL als Basis auf.

## Beschreibung

Die `import.meta`-Syntax besteht aus dem Schlüsselwort `import`, einem Punkt und dem Bezeichner `meta`. Da `import` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist und kein Bezeichner, ist dies kein [Eigenschafts-Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern eine spezielle Ausdruckssyntax.

Die `import.meta` Meta-Eigenschaft ist in JavaScript-Modulen verfügbar; die Verwendung von `import.meta` außerhalb eines Moduls (einschließlich [direktes `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) innerhalb eines Moduls) führt zu einem Syntaxfehler.

## Beispiele

### Abfrageparameter übergeben

Die Verwendung von Abfrageparametern im `import` Spezifizierer ermöglicht die modulspezifische Argumentübergabe, die eine Ergänzung zum Lesen von Parametern aus der anwendungsweiten [`window.location`](/de/docs/Web/API/Window/location) (oder in Node.js über `process.argv`) sein kann. Zum Beispiel mit dem folgenden HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

Das Modul `index.mjs` kann den Parameter `someURLInfo` über `import.meta` abrufen:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Das Gleiche gilt, wenn ein Modul ein anderes importiert:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Die ES-Modul-Implementierung in Node.js unterstützt die Auflösung von Modulspezifizierern, die Abfrageparameter (oder das Fragment) enthalten, wie im letztgenannten Beispiel. Sie können jedoch keine Abfragen oder Fragmente verwenden, wenn das Modul über den CLI-Befehl angegeben wird (wie `node index.mjs?someURLInfo=5`), da der CLI-Einstiegspunkt einen eher CommonJS-ähnlichen Auflösungsmodus verwendet und den Pfad als Dateipfad statt als URL behandelt. Um Parameter an das Einstiegspunktmodul zu übergeben, verwenden Sie CLI-Argumente und lesen Sie sie über `process.argv` aus (wie `node index.mjs --someURLInfo=5`).

### Eine Datei relativ zur aktuellen auflösen

In Node.js CommonJS-Modulen gibt es eine `__dirname`-Variable, die den absoluten Pfad zum Ordner des aktuellen Moduls enthält, was nützlich ist, um relative Pfade aufzulösen. ES-Module können jedoch keine kontextbezogenen Variablen außer `import.meta` haben. Daher können Sie `import.meta.url` verwenden, um eine relative Datei aufzulösen. Beachten Sie, dass hierbei URLs anstelle von Dateisystempfaden verwendet werden.

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
