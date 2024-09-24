---
title: "SyntaxError: Import-Erklärungen dürfen nur auf der obersten Ebene eines Moduls erscheinen"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: 303fd44fe4e277c3cac3fac489433a286f326fd8
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Import-Erklärungen dürfen nur auf der obersten Ebene eines Moduls erscheinen" tritt auf, wenn eine Import-Erklärung nicht auf der obersten Ebene eines Moduls steht. Dies kann der Fall sein, weil die Import-Erklärung in andere Konstrukte (Funktionen, Blöcke, usw.) verschachtelt ist, oder häufiger, weil die aktuelle Datei nicht als Modul behandelt wird.

## Nachricht

```plain
SyntaxError: Cannot use import statement outside a module (V8-basiert)
SyntaxError: Import-Erklärungen dürfen nur auf der obersten Ebene eines Moduls erscheinen (Firefox)
SyntaxError: Unerwarteter Bezeichner 'x'. Import-Aufruf erwartet ein oder zwei Argumente. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Möglicherweise haben Sie eine `import`-Erklärung, die in ein anderes Konstrukt, wie eine Funktion oder einen Block, verschachtelt ist. Die `import`-Erklärung muss auf der obersten Ebene des Moduls stehen. Wenn Sie ein Modul bedingt importieren oder es bei Bedarf lazy laden möchten, verwenden Sie stattdessen [dynamic import](/de/docs/Web/JavaScript/Reference/Operators/import).

Wenn sich die `import`-Erklärung bereits auf der obersten Ebene des Codes befindet, kann es daran liegen, dass die Datei nicht als Modul interpretiert wird. Laufzeitumgebungen benötigen externe Hinweise, um festzustellen, ob eine Datei ein Modul ist oder nicht, und hier sind mehrere Möglichkeiten, solche Hinweise zu geben:

- Wenn die Datei direkt aus HTML geladen wird, stellen Sie sicher, dass das [`<script>`](/de/docs/Web/HTML/Element/script)-Tag das Attribut `type="module"` hat.
- Wenn die Datei in Node ausgeführt wird, stellen Sie sicher, dass entweder die Datei die Erweiterung `.mjs` hat oder die nächste `package.json`-Datei das Feld `"type": "module"` enthält.
- Wenn die Datei als [worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird, stellen Sie sicher, dass Sie den Konstruktor `Worker()` mit der Option `type: "module"` aufrufen.
- Importieren Sie diese Datei aus einem anderen Modul.

Ein weiterer Grund könnte sein, wenn Sie `import` mit einem Compiler (wie TypeScript) schreiben und versehentlich die Quelldatei ausgeführt haben. Da `import`-Erklärungen normalerweise am Anfang des Programms erscheinen, sind sie das Erste, was der Parser sieht und dann den Fehler meldet. Stellen Sie sicher, dass Sie die Quelldatei kompilieren und die kompilierte Datei ausführen.

## Beispiele

### Bedingte Imports

Sie können `import` nicht innerhalb anderer Konstrukte verwenden, wie Sie es möglicherweise in Python tun.

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

Verschieben Sie entweder den `import` auf die oberste Ebene oder verwenden Sie dynamischen Import.

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### Import in einem Nicht-Modul-Skript

Wenn Sie das Skript aus HTML laden, stellen Sie sicher, dass Sie dem `<script>`-Tag das Attribut `type="module"` hinzufügen.

```html
<script type="module" src="main.js"></script>
```

Wenn Sie das Skript aus irgendeinem Grund nicht zu einem Modul migrieren können, können Sie dynamischen Import verwenden.

```js example-good
async function main() {
  const myModule = await import("./my-module.js");
  // use myModule
}

main();
```

## Siehe auch

- [Verwendung von Modulen](/de/docs/Web/JavaScript/Guide/Modules)
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/import", "import()")}}
