---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Operators")}}

Die **`import.meta`** Metaeigenschaft stellt kontextspezifische Metadaten für ein JavaScript-Modul bereit. Sie enthält Informationen über das Modul, wie zum Beispiel die URL des Moduls.

## Syntax

```js-nolint
import.meta
```

### Wert

Das `import.meta` Objekt wird von der Host-Umgebung erstellt, als erweiterbares [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) Objekt, bei dem alle Eigenschaften beschreibbar, konfigurierbar und aufzählbar sind. Die Spezifikation gibt keine spezifischen Eigenschaften darauf vor, aber Hosts implementieren normalerweise die folgenden Eigenschaften:

- `url`
  - : Die vollständige URL zum Modul, einschließlich Abfrageparametern und/oder Hash (nach `?` oder `#`). In Browsern ist dies entweder die URL, von der das Skript bezogen wurde (für externe Skripte), oder die URL des enthaltenden Dokuments (für inline Skripte). In Node.js ist dies der Dateipfad (einschließlich des `file://` Protokolls).
- [`resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : Löst einen Modulspezifizierer in eine URL auf, indem die URL des aktuellen Moduls als Basis verwendet wird.

## Beschreibung

Die `import.meta` Syntax besteht aus dem Schlüsselwort `import`, einem Punkt und dem Bezeichner `meta`. Da `import` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist, kein Bezeichner, ist dies kein [Property Accessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern eine spezielle Ausdrücksyntax.

Die `import.meta` Metaeigenschaft ist in JavaScript-Modulen verfügbar; die Verwendung von `import.meta` außerhalb eines Moduls (einschließlich von [direktem `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) innerhalb eines Moduls) verursacht einen Syntaxfehler.

## Beispiele

### Übergabe von Abfrageparametern

Die Verwendung von Abfrageparametern im `import` Spezifizierer ermöglicht die modulspezifische Argumentübergabe, welche die Leseparameter von der anwendungsweiten [`window.location`](/de/docs/Web/API/Window/location) (oder in Node.js, durch `process.argv`) ergänzen kann. Zum Beispiel, mit dem folgenden HTML:

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

Das Gleiche gilt, wenn ein Modul ein anderes importiert:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Die ES-Modulimplementierung in Node.js unterstützt das Auflösen von Modulspezifizierern, die Abfrageparametern (oder den Hash) enthalten, wie im letzten Beispiel. Sie können jedoch keine Abfragen oder Hashes verwenden, wenn das Modul über den CLI-Befehl angegeben wird (wie `node index.mjs?someURLInfo=5`), da der CLI-Einstiegspunkt eine eher CommonJS-ähnliche Auflösungsweise verwendet und den Pfad als Dateipfad anstatt als URL behandelt. Um Parameter an das Einstiegspunktmodul zu übergeben, verwenden Sie CLI-Argumente und lesen Sie diese über `process.argv` (wie `node index.mjs --someURLInfo=5`).

### Auflösen einer Datei relativ zur aktuellen

In Node.js CommonJS-Modulen gibt es eine `__dirname` Variable, die den absoluten Pfad zu dem Ordner enthält, der das aktuelle Modul enthält, was nützlich zum Auflösen relativer Pfade ist. Allerdings können ES-Module keine kontextuellen Variablen außer `import.meta` haben. Daher können Sie, um eine relative Datei aufzulösen, `import.meta.url` verwenden. Beachten Sie, dass dies URLs anstelle von Dateisystempfaden verwendet.

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
