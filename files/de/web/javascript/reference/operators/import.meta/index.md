---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
l10n:
  sourceCommit: 5d53607e3645a456fce6564424823169157b74b1
---

Die Meta-Eigenschaft **`import.meta`** stellt einem JavaScript-Modul kontextspezifische Metadaten zur Verfügung. Sie enthält Informationen über das Modul, beispielsweise dessen URL.

## Syntax

```js-nolint
import.meta
```

### Wert

Das Objekt `import.meta` wird von der Host-Umgebung als erweiterbares Objekt mit einem [`null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellt. Alle seine Eigenschaften sind beschreibbar, konfigurierbar und aufzählbar. Die Spezifikation legt keine Eigenschaften fest, die darauf definiert sein müssen. Host-Umgebungen implementieren jedoch üblicherweise die folgenden Eigenschaften:

- `url`
  - : Die vollständige URL des Moduls einschließlich Abfrageparametern und/oder Fragmentbezeichner (nach `?` beziehungsweise `#`). In Browsern ist dies entweder die URL, von der das Skript abgerufen wurde (bei externen Skripten), oder die Basis-URL des Dokuments zum Zeitpunkt der Erstellung des Modulskripts (bei Inline-Skripten). In Node.js verwenden dateibasierte Module eine `file:`-URL, während Module, die über andere unterstützte URL-Schemata geladen werden, ihre jeweiligen URLs verwenden.
- [`resolve`](/de/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : Löst einen Modulbezeichner zu einer URL auf und verwendet dabei die URL des aktuellen Moduls als Basis.

## Beschreibung

Die Syntax von `import.meta` besteht aus dem Schlüsselwort `import`, einem Punkt und dem Bezeichner `meta`. Da `import` ein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) und kein Bezeichner ist, handelt es sich nicht um einen [Eigenschaftszugriff](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors), sondern um eine spezielle Ausdruckssyntax.

Die Meta-Eigenschaft `import.meta` ist in JavaScript-Modulen verfügbar. Die Verwendung von `import.meta` außerhalb eines Moduls ist ein Syntaxfehler. Das gilt auch für [direktes `eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#direct_and_indirect_eval) innerhalb eines Moduls.

## Beispiele

### Abfrageparameter übergeben

Mit Abfrageparametern im `import`-Modulbezeichner können Sie modulspezifische Argumente übergeben. Dies kann das Auslesen von Parametern aus dem anwendungsweiten [`window.location`](/de/docs/Web/API/Window/location) (oder in Node.js aus `process.argv`) ergänzen. Betrachten Sie beispielsweise das folgende HTML:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

Das Modul `index.mjs` kann den Parameter `someURLInfo` über `import.meta` abrufen:

```js
// -- index.mjs --
new URL(import.meta.url).searchParams.get("someURLInfo"); // "5"
```

Dasselbe gilt, wenn ein Modul ein anderes importiert:

```js
// -- index.mjs --
import "./index2.mjs?someURLInfo=5";

// -- index2.mjs --
new URL(import.meta.url).searchParams.get("someURLInfo"); // "5"
```

Die ES-Modul-Implementierung in Node.js unterstützt das Auflösen von Modulbezeichnern mit Abfrageparametern (oder einem Fragmentbezeichner), wie im letzten Beispiel. Wenn Sie das Modul über einen CLI-Befehl angeben (etwa `node index.mjs?someURLInfo=5`), können Sie jedoch keine Abfrageparameter oder Fragmentbezeichner verwenden. Der CLI-Einstiegspunkt verwendet einen eher an CommonJS angelehnten Auflösungsmodus und behandelt den Pfad als Dateipfad statt als URL. Um Parameter an das Einstiegspunkt-Modul zu übergeben, verwenden Sie stattdessen CLI-Argumente und lesen Sie diese über `process.argv` aus (etwa `node index.mjs --someURLInfo=5`).

### Eine Datei relativ zur aktuellen Datei auflösen

In CommonJS-Modulen von Node.js enthält die Variable `__dirname` den absoluten Pfad zum Ordner des aktuellen Moduls. Das ist beim Auflösen relativer Pfade hilfreich. In ES-Modulen stellt Node.js diese Variable jedoch nicht bereit. Um eine relative Dateireferenz aufzulösen, können Sie `import.meta.url` verwenden. Beachten Sie, dass dabei URLs statt Dateisystempfaden verwendet werden.

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
