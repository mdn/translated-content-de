---
title: "SyntaxError: import-Deklarationen dürfen nur auf oberster Ebene eines Moduls erscheinen"
slug: Web/JavaScript/Reference/Errors/import_decl_module_top_level
l10n:
  sourceCommit: 303fd44fe4e277c3cac3fac489433a286f326fd8
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "import-Deklarationen dürfen nur auf oberster Ebene eines Moduls erscheinen" tritt auf, wenn eine `import`-Deklaration nicht auf der obersten Ebene eines Moduls steht. Dies kann daran liegen, dass die `import`-Deklaration in andere Konstrukte (Funktionen, Blöcke usw.) eingebettet ist oder häufiger, weil die aktuelle Datei nicht als Modul behandelt wird.

## Nachricht

```plain
SyntaxError: Cannot use import statement outside a module (V8-based)
SyntaxError: import declarations may only appear at top level of a module (Firefox)
SyntaxError: Unexpected identifier 'x'. import call expects one or two arguments. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

Möglicherweise haben Sie eine `import`-Deklaration, die in ein anderes Konstrukt eingebettet ist, wie zum Beispiel eine Funktion oder einen Block. Die `import`-Deklaration muss auf der obersten Ebene des Moduls stehen. Wenn Sie ein Modul bedingt importieren oder auf Abruf importieren möchten, verwenden Sie stattdessen den [dynamischen Import](/de/docs/Web/JavaScript/Reference/Operators/import).

Wenn die `import`-Deklaration bereits auf oberster Ebene des Codes steht, kann es daran liegen, dass die Datei nicht als Modul interpretiert wird. Laufzeiten benötigen externe Hinweise, um festzustellen, ob eine Datei ein Modul ist oder nicht. Hier sind einige Möglichkeiten, solche Hinweise zu geben:

- Wenn die Datei direkt aus HTML geladen wird, stellen Sie sicher, dass das [`<script>`](/de/docs/Web/HTML/Element/script)-Tag das Attribut `type="module"` hat.
- Wenn die Datei in Node ausgeführt wird, stellen Sie sicher, dass entweder die Datei die Erweiterung `.mjs` hat oder die nächstgelegene `package.json`-Datei das Feld `"type": "module"` besitzt.
- Wenn die Datei als [Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) ausgeführt wird, verwenden Sie den `Worker()`-Konstruktor mit der `type: "module"`-Option.
- Importieren Sie diese Datei aus einem anderen Modul.

Ein weiterer Grund könnte sein, wenn Sie `import` mit einem Compiler (wie TypeScript) schreiben und sie versehentlich die Quelldatei ausgeführt haben. Da `import`-Deklarationen normalerweise am Anfang des Programms stehen, sind sie das Erste, was der Parser sieht, und er beschwert sich darüber. Stellen Sie sicher, dass Sie die Quelldatei kompilieren und die kompilierte Datei ausführen.

## Beispiele

### Bedingte Imports

Sie können `import` nicht innerhalb anderer Konstrukte verwenden, wie Sie es vielleicht in Python tun.

```js example-bad
if (writeOutput) {
  import fs from "fs"; // SyntaxError
}
```

Entweder verschieben Sie das `import` auf die oberste Ebene oder verwenden Sie den dynamischen Import.

```js example-good
if (writeOutput) {
  import("fs").then((fs) => {
    // use fs
  });
}
```

### Importieren in einem Nicht-Modul-Skript

Wenn Sie das Skript aus HTML laden, fügen Sie das Attribut `type="module"` zum `<script>`-Tag hinzu.

```html
<script type="module" src="main.js"></script>
```

Wenn Sie das Skript aus irgendeinem Grund nicht in ein Modul migrieren können, können Sie den dynamischen Import verwenden.

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
