---
title: "SyntaxError: import-Deklarationen dürfen nur auf der obersten Ebene eines Moduls erscheinen"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: 303fd44fe4e277c3cac3fac489433a286f326fd8
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "import-Deklarationen dürfen nur auf der obersten Ebene eines Moduls erscheinen" tritt auf, wenn eine `import`-Deklaration nicht auf der obersten Ebene eines Moduls steht. Dies kann der Fall sein, wenn die `import`-Deklaration in anderen Konstrukten verschachtelt ist (wie Funktionen, Blöcken, etc.), oder häufiger, weil die aktuelle Datei nicht als Modul behandelt wird.

## Nachricht

```plain
SyntaxError: Cannot use import statement outside a module (V8-based)
SyntaxError: import declarations may only appear at top level of a module (Firefox)
SyntaxError: Unexpected identifier 'x'. import call expects one or two arguments. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Möglicherweise haben Sie eine `import`-Deklaration, die in einem anderen Konstrukt wie einer Funktion oder einem Block verschachtelt ist. Die `import`-Deklaration muss auf der obersten Ebene des Moduls stehen. Wenn Sie ein Modul bedingt importieren oder bei Bedarf faul importieren möchten, verwenden Sie stattdessen [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import).

Wenn sich das `import` bereits auf der obersten Ebene des Codes befindet, kann es daran liegen, dass die Datei nicht als Modul interpretiert wird. Laufzeitumgebungen benötigen externe Hinweise, um festzustellen, ob eine Datei ein Modul ist oder nicht, und hier sind mehrere Möglichkeiten, solche Hinweise bereitzustellen:

- Wenn die Datei direkt aus HTML geladen wird, stellen Sie sicher, dass das [`<script>`](/de/docs/Web/HTML/Element/script)-Tag das Attribut `type="module"` hat.
- Wenn die Datei in Node ausgeführt wird, stellen Sie sicher, dass entweder die Datei die Erweiterung `.mjs` hat oder die nächste `package.json`-Datei das Feld `"type": "module"` enthält.
- Wenn die Datei als [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird, stellen Sie sicher, dass Sie den `Worker()`-Konstruktor mit der Option `type: "module"` aufrufen.
- Importieren Sie diese Datei aus einem anderen Modul.

Eine andere Ursache könnte sein, wenn Sie `import` mit einem Compiler (wie TypeScript) schreiben und versehentlich die Quelldatei ausgeführt haben. Da `import`-Deklarationen normalerweise ganz am Anfang des Programms erscheinen, ist dies das Erste, was der Parser sieht und dann beanstandet. Stellen Sie sicher, dass Sie die Quelldatei kompilieren und die kompilierte Datei ausführen.

## Beispiele

### Bedingte Importe

Sie können `import` nicht innerhalb anderer Konstrukte verwenden, wie Sie es vielleicht in Python tun würden.

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

Entweder verschieben Sie das `import` auf die oberste Ebene oder verwenden Sie dynamischen Import.

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### Importieren in einem Nicht-Modul-Skript

Wenn Sie das Skript aus HTML laden, fügen Sie sicher das `type="module"`-Attribut zum `<script>`-Tag hinzu.

```html
<script type="module" src="main.js"></script>
```

Wenn Sie aus irgendeinem Grund das Skript nicht zu einem Modul migrieren können, können Sie dynamischen Import verwenden.

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
